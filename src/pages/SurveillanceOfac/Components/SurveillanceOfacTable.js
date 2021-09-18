import React, { useState } from 'react';
import {
  listOfac,
  updateOfac,
} from '../../../services/SurveillanceOfacService';

import {
  notifyInfo,
  notifyError,
  notifySuccess,
} from 'components/Notification/Notification';

import {
  Box,
  IconButton,
  Select,
  MenuItem,
  InputLabel,
  TextField,
  Button,
} from '@material-ui/core';

import { protoDateObjectToString } from '../../../services/ConvertService';

import { Create as EditIcon } from '@material-ui/icons';

import Table, { columnType } from 'components/Table/Table';
import useStyles from '../../../styles';
import SearchButton from '../../../components/Button/Search';

import QueryParam from '../../../services/QueryParamService';

import SurveillanceOfacModal from './SurveillanceOfacModal';

export default function SurveillanceOfacTable() {
  const classes = useStyles();

  const options = {
    isRowSelectable: (dataIndex) => rows[dataIndex].ofacStatus === 'Pending',
    customToolbarSelect: (selectedRows, a, b) => {
      return (
        <div
          className={classes.grdRow}
          style={{ margin: 0, padding: 0, marginRight: 20 }}
        >
          <div className={classes.grdCell1}>
            <Button
              style={{ marginRight: 20 }}
              variant="contained"
              color="secondary"
              size="medium"
              onClick={() => {
                handleMultipleEdit(selectedRows.data, 'Approved');
              }}
            >
              Approve
            </Button>

            <Button
              variant="contained"
              color="secondary"
              size="medium"
              onClick={() => {
                handleMultipleEdit(selectedRows.data, 'Denied');
              }}
            >
              Deny
            </Button>
          </div>
        </div>
      );
    },
  };

  const columns = [
    {
      name: '',
      type: columnType.buttons,
      options: {
        customBodyRenderLite: (dataIndex) => {
          return (
            <div
              align={'left'}
              className={classes.grdRow}
              style={{ margin: 0, padding: 0 }}
            >
              <div align={'left'} className={classes.grdCellNone}>
                <IconButton
                  aria-label="edit"
                  onClick={() => handleOpen(rows[dataIndex], true)}
                >
                  <EditIcon />
                </IconButton>
              </div>
            </div>
          );
        },
      },
    },
    {
      name: 'firstName',
      label: 'First Name',
    },
    {
      name: 'middleName',
      label: 'Middle Name',
    },
    {
      name: 'lastName',
      label: 'Last Name',
    },
    {
      name: 'dateOfBirth',
      label: 'Date of Birth',
      type: columnType.date,
    },
    {
      name: 'citizenship',
      label: 'Citizenship',
    },
    {
      name: 'id',
      label: 'ID',
      options: {
        customBodyRenderLite: (dataIndex) => {
          const data = rows[dataIndex].id.split(',');
          return data.map((d, index) => <div key={index}>{d}</div>);
        },
      },
    },
    {
      name: 'status',
      label: 'Status',
    },
    {
      name: 'createdAt',
      label: 'Created At',
      type: columnType.dateTime,
    },
    {
      name: 'ofacStatus',
      label: 'OFAC Status',
    },
    {
      name: 'ofacDate',
      label: 'OFAC Date',
      type: columnType.date,
    },
    {
      name: 'a-selectAll',
      label: 'Select All',
      options: {
        display: true,
        setCellHeaderProps: () => ({
          style: {
            width: '0px',
            display: 'table-cell',
            padding: 0,
            pointerEvents: 'none',
            fontSize: 0,
          },
        }),
      },
    },
  ];

  const [rowData, setRowData] = React.useState({});
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [showFilter, setShowFilter] = React.useState(true);
  const [rows, setRows] = useState([]);

  const [searchData, setSearchData] = React.useState(
    QueryParam.get({
      firstName: '',
      lastName: '',
      status: '',
      ofacStatus: '',
    })
  );

  const toggleCheckboxVisibility = (numberOfRows) => {
    for (let index = 0; index < numberOfRows; index++) {
      let checkbox = document.getElementById('MUIDataTableSelectCell-' + index);

      if (checkbox.disabled) {
        checkbox.parentElement.parentElement.style.display = 'none';
      } else {
        checkbox.parentElement.parentElement.style.display = 'block';
      }
    }
  };

  const handleChange = (e, x) => {
    const input = e.currentTarget.name ? e.currentTarget : e.target;
    setSearchData({
      ...searchData,
      [input.name]: input.value,
    });
  };

  const handleSearch = async () => {
    try {
      setLoading(true);
      QueryParam.set(searchData);
      const data = await listOfac(searchData);
      setRows(data.ofacsList);
      notifyInfo(data.ofacsList.length + ' search results.');
      toggleCheckboxVisibility(data.ofacsList.length);
    } catch (error) {
      console.error(error);
      notifyError(error.message);
    } finally {
      setLoading(false);
    }
  };

  //Opens modal for edit
  const handleOpen = (data) => {
    if (!data) {
      return;
    }
    setRowData(data);
    setOpen(true);
  };

  const handleClose = async (data) => {
    try {
      if (!data) {
        setOpen(false);
        return;
      }

      const { ofac } = await updateOfac(data, false);

      const rowsCopy = [...rows];
      const index = rows.indexOf(rowData);
      rowsCopy[index] = ofac;
      setRows(rowsCopy);

      notifySuccess('OFAC was updated.');
      toggleCheckboxVisibility(rowsCopy.length);
    } catch (error) {
      notifyError(error.message);
    } finally {
      setOpen(false);
    }
  };

  const handleMultipleEdit = async (data, newOfacStatus) => {
    const copy = [...rows];
    try {
      for (let i = 0; i < data.length; i++) {
        const dataIndex = data[i].dataIndex;
        const updateData = rows[dataIndex];

        updateData.ofacStatus = newOfacStatus;
        let { ofac } = await updateOfac(updateData, true);

        copy[dataIndex].ofacStatus = ofac.ofacStatus;
        copy[dataIndex].ofacDate = ofac.ofacDate;
      }
      notifySuccess('Selected OFACs were updated.');
    } catch (error) {
      console.log(error);
      notifyError(error.message);
    } finally {
      setRows(copy);
      toggleCheckboxVisibility(copy.length);
    }
  };

  /*=========================================================================================
  Table component
  ===========================================================================================*/
  return (
    <div className={classes.root}>
      <Box component="div" mt={5}>
        {showFilter ? (
          <div>
            <div className={classes.grdRow}>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <InputLabel shrink>First Name</InputLabel>
                <TextField
                  fullWidth
                  name="firstName"
                  value={searchData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <InputLabel shrink>Last Name</InputLabel>
                <TextField
                  fullWidth
                  name="lastName"
                  value={searchData.lastName}
                  onChange={handleChange}
                />
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <InputLabel shrink id="status">
                  Status
                </InputLabel>
                <Select
                  name="status"
                  fullWidth
                  value={searchData.status}
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>Blank</em>
                  </MenuItem>
                  <MenuItem value="active">Active</MenuItem>
                  <MenuItem value="inactive">Inactive</MenuItem>
                </Select>
              </div>
              <div className={classes.grdCell1}>
                <InputLabel shrink id="ofacStatus">
                  OFAC Status
                </InputLabel>
                <Select
                  name="ofacStatus"
                  fullWidth
                  value={searchData.ofacStatus}
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>Blank</em>
                  </MenuItem>
                  <MenuItem value="Pending">Pending</MenuItem>
                  <MenuItem value="Approved">Approved</MenuItem>
                  <MenuItem value="Denied">Denied</MenuItem>
                </Select>
              </div>
            </div>
          </div>
        ) : null}
        <div className={classes.actionContainer}>
          <div className={classes.grdCellNone} style={{ marginRight: 10 }}>
            <SearchButton
              onClick={handleSearch}
              loading={loading}
              showfilter={(status) => setShowFilter(status)}
            />
          </div>
        </div>
      </Box>
      <Box component="div" mt={2}>
        <Table title={'OFAC'} data={rows} columns={columns} options={options} />
      </Box>
      {open && (
        <SurveillanceOfacModal
          onClose={handleClose}
          open={open}
          value={rowData}
        ></SurveillanceOfacModal>
      )}
    </div>
  );
}
