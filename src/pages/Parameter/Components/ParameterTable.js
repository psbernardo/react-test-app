import React, { useState, useEffect } from 'react';
import {
  listParamater,
  createParameter,
  updateParameter,
  deleteParameter,
} from '../../../services/ParameterService';

import {
  notifyInfo,
  notifyError,
  notifySuccess,
} from 'components/Notification/Notification';

import { Box, IconButton, Button, TextField } from '@material-ui/core';

import {
  Create as EditIcon,
  Add as AddIcon,
  Delete as DeleteIcon,
} from '@material-ui/icons';

import Table, { columnType } from 'components/Table/Table';
import useStyles from '../../../styles';
import SearchButton from '../../../components/Button/Search';

import QueryParam from '../../../services/QueryParamService';

import ParameterModal from './ParameterModal';
import { getSystemDate } from '../../../services/ProfileService';
import { useConfirm } from 'material-ui-confirm';
import { formatQty } from 'lib/fmt';

export default function ParameterTable() {
  const classes = useStyles();
  const confirm = useConfirm();

  useEffect(
    () => {
      async function init() {
        if (searchData.systemDate) return;

        const systemDate = await getSystemDate();
        setSearchData({
          ...searchData,
          reportDate: systemDate,
        });
      }

      init();
    },
    // eslint-disable-next-line
    []
  );
  const options = {
    selectableRows: 'multiple',
    onRowsDelete: (selectedItems) => {
      handleDelete(selectedItems.data);
      return false;
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
              <div className={classes.grdCellNone}>
                <IconButton
                  aria-label="delete"
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
            </div>
          );
        },
      },
    },
    {
      name: 'report',
      label: 'Report',
    },
    {
      name: 'field',
      label: 'Field',
    },
    {
      name: 'sign',
      label: 'Sign',
    },
    {
      name: 'value',
      label: 'Value',
      options: {
        customBodyRender: (value) => {
          const v = value;
          const f = formatQty(v);
          return <div align="center">{f}</div>;
        },
      },
    },
    {
      name: 'modifiedBy',
      label: 'Modified By',
    },
    {
      name: 'modifiedAt',
      label: 'Modified At',
      type: columnType.dateTime,
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
  const [pagination, setPagination] = useState({});

  const [searchData, setSearchData] = React.useState(
    QueryParam.get({
      field: '',
      report: '',
    })
  );

  const handleChange = (e) => {
    const input = e.currentTarget.name ? e.currentTarget : e.target;

    setSearchData({
      ...searchData,
      [input.name]: input.value,
    });
  };

  const handleSearch = async (paginationChange) => {
    try {
      setLoading(true);
      let paginationCopy = {
        ...pagination,
        reload: false,
        pageNo: paginationChange === true ? pagination.pageNo : 0,
        rowsPerPage: pagination.rowsPerPage || 50,
      };

      QueryParam.set(searchData);
      const data = await listParamater(searchData, paginationCopy);
      setPagination(paginationCopy);
      setRows(data.parametersList);
      notifyInfo(data.parametersList.length + ' search results.');
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
      //ADD default values
      data = {
        report: '',
        field: '',
        sign: '',
        value: 0,
      };
    }
    setRowData(data);
    setOpen(true);
  };

  const handleClose = async (data, isEdit) => {
    if (!data) {
      setOpen(false);
      return;
    }

    let valid = true;

    if (!data.report) {
      notifyError('Report is required.');
      valid = false;
    }
    if (!data.field) {
      notifyError('Field is required.');
      valid = false;
    }
    if (!data.sign) {
      notifyError('Sign is required.');
      valid = false;
    }
    if (!data.value) {
      notifyError('Value is required.');
      valid = false;
    }

    if (!valid) {
      return;
    }

    try {
      if (isEdit) {
        //EDIT
        const { parameter } = await updateParameter(data);
        const index = rows.indexOf(rowData);
        const rowsCopy = [...rows];
        rowsCopy[index] = parameter;
        setRows(rowsCopy);
        notifySuccess('Parameter has been updated.');
      } else {
        //ADD
        const { parameter } = await createParameter(data);
        setRows([parameter, ...rows]);
        notifySuccess('New Paramter has been added.');
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
      messageKey = rows[rowsToDelete[0].dataIndex].report;
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
          await deleteParameter(rowsCopy[index].parameterId);
          idsToDelete.push(rowsCopy[index].parameterId);
        }
      } catch (error) {
        console.error(error);
        notifyError(error.message);
      } finally {
        const filtered = rowsCopy.filter(
          (r) => !idsToDelete.includes(r.parameterId)
        );
        setRows(filtered);
        notifySuccess(messageKey + ' has been deleted');
      }
    });
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
                <TextField
                  fullWidth
                  name="report"
                  label="Report"
                  value={searchData.report}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <TextField
                  fullWidth
                  name="field"
                  label="Field"
                  value={searchData.field}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                />
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
        <Table
          title={'TRADE MONITORING PARAMETER'}
          data={rows}
          columns={columns}
          options={options}
        />
      </Box>
      {open && (
        <ParameterModal
          onClose={handleClose}
          open={open}
          value={rowData}
          pagination={pagination}
          setPagination={setPagination}
        ></ParameterModal>
      )}
    </div>
  );
}
