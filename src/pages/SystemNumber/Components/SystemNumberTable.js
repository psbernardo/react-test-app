import React, { useState, useEffect } from 'react';
import SystemNumberModal from './SystemNumberModal';
import { Button, Box, IconButton } from '@material-ui/core';
import { useConfirm } from 'material-ui-confirm';
import {
  notifySuccess,
  notifyInfo,
  notifyError,
} from 'components/Notification/Notification';
import {
  Add as AddIcon,
  Create as EditIcon,
  Delete as DeleteIcon,
} from '@material-ui/icons';
import SearchButton from '../../../components/Button/Search';
import QueryParam from '../../../services/QueryParamService';
import SelectSystemNumberType from '../../../components/AutoComplete/SelectSystemNumberType';
import {
  createSystemNumber,
  listSystemNumber,
  updateSystemNumber,
  deleteSystemNumber,
} from '../../../services/SystemNumberService';
import { getSystemDate } from '../../../services/ProfileService';
import useStyles from '../../../styles';
import Table, { columnType } from 'components/Table/Table';

export default function SystemNumberTable() {
  const classes = useStyles();
  const confirm = useConfirm();

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
              <div className={classes.grdCellNone}>
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
                  disabled={rows[dataIndex].status === 'Disabled'}
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
      name: 'type',
      label: 'Type',
    },
    {
      name: 'subType',
      label: 'Sub Type',
    },
    {
      name: 'fromDate',
      label: 'From Date',
      type: columnType.date,
    },
    {
      name: 'toDate',
      label: 'To Date',
      type: columnType.date,
    },
    {
      name: 'rate',
      label: 'Rate/Amount/Qty',
      type: columnType.quantity,
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
      type: '',
    })
  );
  const [systemDate, setSystemDate] = useState(null);
  // const [rowsSelected, setRowsSelected] = React.useState([]);

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
      const data = await listSystemNumber(searchData);
      setRows(data.systemNumbersList);
      notifyInfo(data.systemNumbersList.length + ' search results.');
    } catch (error) {
      console.error(error);
      notifyError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleOpen = (data) => {
    if (!data) {
      //ADD default values
      data = {
        type: '',
        subType: '',
        fromDate: systemDate,
        toDate: '',
        rate: '',
        status: 'Active',
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
    if (!data.type) {
      notifyError('Type is required.');
      valid = false;
    }
    if (!data.subType) {
      notifyError('Sub Type is required.');
      valid = false;
    }
    if (!data.rate) {
      notifyError('Rate is required.');
      valid = false;
    }

    if (!valid) {
      return;
    }

    try {
      if (isEdit) {
        //EDIT
        const resp = await updateSystemNumber(data);
        const rowsCopy = [...rows];
        const index = rows.indexOf(rowData);
        rowsCopy[index] = resp.systemNumber;
        setRows(rowsCopy);
        notifySuccess('System Number has been updated.');
      } else {
        //ADD
        const resp = await createSystemNumber(data);
        setRows([resp.systemNumber, ...rows]);
        notifySuccess('New System Number has been added.');
      }

      setOpen(false);
    } catch (error) {
      console.error(error);
      notifyError(error.message);
    }
  };

  useEffect(() => {
    async function initSystemDate() {
      let systemDate = await getSystemDate();
      setSystemDate(systemDate);
    }

    initSystemDate();
  }, []);

  const isDeleteEnabled = (dataIndex) => {
    return rows[dataIndex].status !== 'Disabled';
  };

  const handleDelete = (rowsToDelete) => {
    let messageKey = '';
    if (rowsToDelete.length === 1) {
      messageKey = rows[rowsToDelete[0].dataIndex].type;
    } else {
      messageKey = rowsToDelete.length + ' items';
    }
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
          const resp = await deleteSystemNumber(rows[index].systemNumberId);
          rowsCopy[index] = resp.systemNumber;
        }
        setRows(rowsCopy);
      } catch (error) {
        console.error(error);
        notifyError(error.message);
      } finally {
        notifySuccess(messageKey + ' has been deleted');
      }
    });
  };

  const options = {
    // rowsSelected: rowsSelected,
    selectableRows: 'multiple',
    isRowSelectable: (dataIndex) => isDeleteEnabled(dataIndex),
    onRowsDelete: (selectedItems) => {
      handleDelete(selectedItems.data);
      return false;
    },
  };

  return (
    <div className={classes.root}>
      <Box component="div" mt={5}>
        {showFilter ? (
          <div>
            <div className={classes.grdRow}>
              <div className={classes.grdCell1}>
                <SelectSystemNumberType
                  style={{ width: 300 }}
                  fullWidth
                  freeSolo={false}
                  name="type"
                  label="Type"
                  value={searchData.type}
                  onChange={handleChange}
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
          title="SYSTEM NUMBERS"
          data={rows}
          columns={columns}
          options={options}
        />
      </Box>
      {open && (
        <SystemNumberModal
          onClose={handleClose}
          open={open}
          value={rowData}
        ></SystemNumberModal>
      )}
    </div>
  );
}
