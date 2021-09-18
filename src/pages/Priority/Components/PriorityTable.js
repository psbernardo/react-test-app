import React, { useState, useEffect } from 'react';
import PriorityModal from './PriorityModal';
import { Button, Box, IconButton } from '@material-ui/core';
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
import { useConfirm } from 'material-ui-confirm';
import {
  updatePriority,
  listPriority,
  createPriority,
  deletePriority,
} from '../../../services/PriorityService';
import Table, { columnType } from 'components/Table/Table';
import { getSystemDate } from '../../../services/ProfileService';
import useStyles from '../../../styles';
import SelectSymbol from 'components/AutoComplete/SelectSymbol';
import SelectPriorityType from 'components/Dropdown/SelectPriorityType';
import SelectSystemCode from 'components/Dropdown/SelectSystemCode';

export default function PriorityTable() {
  const classes = useStyles();
  const confirm = useConfirm();

  useEffect(
    () => {
      async function init() {
        const systemDate = await getSystemDate();
        setSystemDate(systemDate);
      }

      init();
    },
    // eslint-disable-next-line
    []
  );

  const options = {
    isRowSelectable: (dataIndex) => isDeleteEnabled(dataIndex),
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
                  disabled={!isDeleteEnabled(dataIndex)}
                  onClick={() => handleOpen(rows[dataIndex])}
                >
                  <EditIcon />
                </IconButton>
              </div>
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
            </div>
          );
        },
      },
    },
    {
      name: 'originalCusip',
      label: 'Original Cusip',
      options: {
        display: false,
      },
    },
    {
      name: 'symbol',
      label: 'Symbol',
    },
    {
      name: 'cusip',
      label: 'Cusip',
      options: {
        display: false,
      },
    },
    {
      name: 'symbolDescription',
      label: 'Symbol Description',
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
      name: 'priorityType',
      label: 'Priority Type',
    },
    {
      name: 'priorityNo',
      label: 'Priority No',
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
        print: false,
        download: false,
        filter: false,
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

  const isDeleteEnabled = (dataIndex) => {
    return rows[dataIndex].status !== 'Inactive';
  };

  const [rowData, setRowData] = React.useState({});
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [showFilter, setShowFilter] = React.useState(true);
  const [rows, setRows] = useState([]);
  const [systemDate, setSystemDate] = React.useState('');
  const [searchData, setSearchData] = React.useState(
    QueryParam.get({
      symbol: '',
      priorityType: '',
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
      const data = await listPriority(searchData);
      setRows(data.prioritiesList);
      notifyInfo(data.prioritiesList.length + ' search results.');
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
        symbol: '',
        fromDate: systemDate,
        toDate: systemDate,
        priorityType: '',
        priorityNo: '',
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

    if (!data.symbol) {
      notifyError('Symbol is required.');
      valid = false;
    }
    if (!data.fromDate) {
      notifyError('From date is required.');
      valid = false;
    }
    if (!data.toDate) {
      notifyError('To date is required.');
      valid = false;
    }
    if (!data.priorityType) {
      notifyError('Priority type is required.');
      valid = false;
    }
    if (!data.priorityNo) {
      notifyError('Priority no. is required.');
      valid = false;
    }
    if (!data.status) {
      notifyError('Status is required.');
      valid = false;
    }
    if (!valid) {
      return;
    }

    try {
      if (isEdit) {
        //EDIT
        const resp = await updatePriority(data);
        const rowsCopy = [...rows];
        const index = rows.indexOf(rowData);
        rowsCopy[index] = resp.priority;

        setRows(rowsCopy);
        notifySuccess('Priority has been updated.');
      } else {
        //ADD
        const resp = await createPriority(data);
        setRows([resp.priority, ...rows]);
        notifySuccess('New Priority has been added.');
      }

      setOpen(false);
    } catch (error) {
      console.error(error);
      notifyError(error.message);
    }
  };

  const handleDelete = (rowsToDelete) => {
    let messageKey = '';
    if (rowsToDelete.length === 1) {
      messageKey = rows[rowsToDelete[0].dataIndex].symbol;
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
          await deletePriority(rows[index].segPriorityId);
          idsToDelete.push(rows[index].segPriorityId);
        }
      } catch (error) {
        console.error(error);
        notifyError(error.message);
      } finally {
        for (let i = 0; i < rowsCopy.length; i++) {
          if (idsToDelete.includes(rowsCopy[i].segPriorityId)) {
            rowsCopy[i].status = 'Inactive';
          }
        }
        setRows(rowsCopy);
        notifySuccess(messageKey + ' has been deleted');
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
                <SelectSymbol
                  freeSolo={true}
                  name="symbol"
                  label="Symbol"
                  value={searchData.symbol}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectPriorityType
                  name="priorityType"
                  label="Priority Type"
                  value={searchData.priorityType}
                  onChange={handleChange}
                ></SelectPriorityType>
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectSystemCode
                  name="status"
                  label="Status"
                  type="Status"
                  subType="AI"
                  value={searchData.status}
                  onChange={handleChange}
                ></SelectSystemCode>
              </div>
              <div className={classes.grdCell1}></div>
              <div className={classes.grdCell1}></div>
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
          title="Priority"
          data={rows}
          columns={columns}
          options={options}
        />
      </Box>
      {open && (
        <PriorityModal
          onClose={handleClose}
          open={open}
          value={rowData}
        ></PriorityModal>
      )}
    </div>
  );
}
