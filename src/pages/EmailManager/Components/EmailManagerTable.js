import React, { useState } from 'react';
import {
  notifyError,
  notifySuccess,
} from 'components/Notification/Notification';
import {
  listEmailManager,
  createEmailManager,
  updateEmailManager,
  deleteEmailManager,
} from '../../../services/EmailManagerService';
import EmailManagerModal from './EmailManagerModal';
import {
  IconButton,
  Button,
  Box,
  TextField,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core';
import {
  Add as AddIcon,
  Create as EditIcon,
  Delete as DeleteIcon,
} from '@material-ui/icons';

import useStyles from '../../../styles';
import SearchButton from '../../../components/Button/Search';
import SelectRecepientEmailGroup from '../../../components/Dropdown/SelectRecepientEmailGroup';
import QueryParam from '../../../services/QueryParamService';
import Table from 'components/Table/Table';
import { useConfirm } from 'material-ui-confirm';

export default function EmailManagerTable({ params }) {
  const classes = useStyles();
  const confirm = useConfirm();

  const options = {
    isRowSelectable: (dataIndex) => isDeleteEnabled(dataIndex),
    onRowsDelete: (selectedItems) => {
      handleDelete(selectedItems.data);
      return false;
    },
  };

  const isDeleteEnabled = (dataIndex) => {
    return rows[dataIndex].status !== 'Inactive';
  };

  const columns = [
    {
      name: '',
      options: {
        draggable: false,
        resizable: false,
        print: false,
        searchable: false,
        filter: false,
        sort: false,
        empty: true,
        viewColumns: false,
        download: false,
        customBodyRenderLite: (dataIndex) => {
          return (
            <div
              align={'left'}
              className={classes.grdRow}
              style={{ margin: 0, padding: 0 }}
            >
              <div className={classes.grdCell1}>
                <IconButton
                  aria-label="delete"
                  disabled={!isDeleteEnabled(dataIndex)}
                  onClick={() => {
                    handleDelete([
                      {
                        dataIndex: dataIndex,
                      },
                    ]);
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </div>
              <div align={'left'} className={classes.grdCell1}>
                <IconButton
                  aria-label="edit"
                  onClick={() => handleOpen(rows[dataIndex])}
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
      name: 'recipientEmailGroup',
      label: 'Recipient Email Group',
    },
    {
      name: 'email',
      label: 'Email',
    },
    {
      name: 'status',
      label: 'Status',
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
      email: '',
      name: '',
      recipientEmailGroup: '',
      status: '',
    })
  );

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
      const data = await listEmailManager(searchData);
      setRows(data.emailManagersList);
      notifySuccess(data.emailManagersList.length + ' search results.');
    } catch (error) {
      notifyError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleOpen = (data) => {
    if (!data) {
      //ADD default values
      data = {
        emailManagerId: '',
        recipientEmailGroup: '',
        usrId: '',
        status: 'Active',
        usrIdArr: [],
      };
    }
    setRowData(data);
    setOpen(true);
  };

  const handleClose = async (data, selectedRows, isEdit) => {
    if (!data) {
      setOpen(false);
      return;
    }
    try {
      let valid = true;

      if (!data.recipientEmailGroup) {
        notifyError('Recipient Email Group is required.');
        valid = false;
      }

      if (!data.status) {
        notifyError('Status is required.');
        valid = false;
      }

      selectedRows.forEach(async (row) => {
        if (row.status) {
          data.usrIdArr.push(row.usrId);
        }
      });

      data.usrId = data.usrIdArr.toString();

      if (data.usrId === '') {
        notifyError('Emails is required.');
        valid = false;
      }

      if (!valid) {
        return;
      }
      if (isEdit) {
        //EDIT
        const resp = await updateEmailManager(data);
        const rowsCopy = [...rows];
        const index = rows.indexOf(rowData);
        rowsCopy[index] = resp.emailManager;
        setRows(rowsCopy);
        notifySuccess('New groupings has been updated.');
      } else {
        // ADD
        const resp = await createEmailManager(data);
        setRows(resp.emailManagerList.concat(rows));
        notifySuccess('New groupings has been added.');
      }
      setOpen(false);
    } catch (error) {
      notifyError(error.message);
      console.error(error);
    }
  };

  const handleDelete = (rowsToDelete) => {
    let messageKey = '';
    if (rowsToDelete.length === 1) {
      messageKey =
        'email : ' + rows[rowsToDelete[0].dataIndex].recipientEmailGroup;
    } else {
      messageKey = rowsToDelete.length + ' items';
    }

    let idsToDelete = [];
    confirm({
      description:
        "You are about to delete '" +
        messageKey +
        "'. Please confirm your action.",
      confirmationText: 'Yes, delete',
    }).then(async () => {
      const rowsCopy = [...rows];
      try {
        for (const r of rowsToDelete) {
          const index = r.dataIndex;
          await deleteEmailManager(rows[index].emailManagerId);
          idsToDelete.push(rows[index].emailManagerId);
        }
      } catch (error) {
        notifyError(error.message);
      } finally {
        for (let i = 0; i < rowsCopy.length; i++) {
          if (idsToDelete.includes(rowsCopy[i].emailManagerId)) {
            rowsCopy[i].status = 'Inactive';
          }
        }
        setRows(rowsCopy);
        notifySuccess(messageKey + ' Email Managerhas been deleted');
      }
    });
  };

  return (
    <div className={classes.root}>
      <Box component="div" mt={5}>
        {showFilter ? (
          <div>
            <div className={classes.grdRow}>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectRecepientEmailGroup
                  name="recipientEmailGroup"
                  label="Recipients Email Group"
                  value={searchData.recipientEmailGroup}
                  onChange={handleChange}
                ></SelectRecepientEmailGroup>
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <TextField
                  fullWidth
                  name="name"
                  label="Name"
                  value={searchData.name}
                  onChange={handleChange}
                  inputProps={{ maxLength: 100 }}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <TextField
                  fullWidth
                  name="email"
                  label="Email"
                  value={searchData.email}
                  onChange={handleChange}
                  inputProps={{ maxLength: 150 }}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className={classes.grdCell1}>
                <InputLabel shrink>Status</InputLabel>
                <Select
                  name="status"
                  displayEmpty
                  fullWidth
                  value={searchData.status}
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>Blank</em>
                  </MenuItem>
                  <MenuItem value="Inactive">Inactive</MenuItem>
                  <MenuItem value="Active">Active</MenuItem>
                </Select>
              </div>
            </div>
          </div>
        ) : null}
        <div className={classes.actionContainer}>
          <div className={classes.grdCellNone} style={{ marginRight: 10 }}>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              startIcon={<AddIcon />}
              onClick={() => {
                handleOpen();
              }}
            >
              Add New
            </Button>
          </div>
          <div className={classes.grdCellNone}>
            <SearchButton
              onClick={handleSearch}
              loading={loading}
              showfilter={(status) => setShowFilter(status)}
            />
          </div>
        </div>
      </Box>
      <Box component="div" mt={2}>
        <Table
          title={'Email Manager'}
          data={rows}
          columns={columns}
          options={options}
        />
      </Box>
      {open && (
        <EmailManagerModal
          onClose={handleClose}
          open={open}
          value={rowData}
        ></EmailManagerModal>
      )}
    </div>
  );
}
