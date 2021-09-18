import React, { useState, useEffect } from 'react';
import SecurityMarginRateModal from './SecurityMarginRateModal';
import { Button, Box, IconButton, TextField } from '@material-ui/core';
import { useConfirm } from 'material-ui-confirm';
import Table, { columnType } from 'components/Table/Table';
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
import SelectSymbol from '../../../components/AutoComplete/SelectSymbol';
import SelectRequirementType from 'components/Dropdown/SelectRequirementType';
import SelectSystemCode from 'components/Dropdown/SelectSystemCode';
import SearchButton from '../../../components/Button/Search';
import {
  createMarginRate,
  listMarginRate,
  updateMarginRate,
  deleteMarginRate,
} from '../../../services/SecurityMarginRateService';
import { getSystemDate } from '../../../services/ProfileService';
import QueryParam from '../../../services/QueryParamService';
import useStyles from '../../../styles';

let systemDate;
export default function SecurityMarginRateTable() {
  const classes = useStyles();
  const confirm = useConfirm();

  useEffect(
    () => {
      async function init() {
        // if (searchData.tradeDate) return;

        systemDate = await getSystemDate();
        const searchDataCopy = { ...searchData };

        if (!searchData.fromDate) {
          searchDataCopy.fromDate = systemDate;
        }

        if (!searchData.toDate) {
          searchDataCopy.toDate = systemDate;
        }

        setSearchData(searchDataCopy);
      }

      init();
    },
    // eslint-disable-next-line
    []
  );

  const options = {
    isRowSelectable: (dataIndex) => isDeleteEnalbed(dataIndex),
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
              <div className={classes.grdCellNone}>
                <IconButton
                  aria-label="delete"
                  disabled={!isDeleteEnalbed(dataIndex)}
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
              <div align={'left'} className={classes.grdCellNone}>
                <IconButton
                  aria-label="edit"
                  disabled={!isDeleteEnalbed(dataIndex)}
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
      name: 'correspondent',
      label: 'Correspondent',
    },
    {
      name: 'symbol',
      label: 'Symbol',
    },
    {
      name: 'symbolDescription',
      label: 'Symbol Description',
      options: {
        display: false,
      },
    },
    {
      name: 'fromDate', //2
      label: 'From Date',
      type: columnType.date,
    },
    {
      name: 'toDate',
      label: 'To Date',
      type: columnType.date,
    },
    {
      name: 'requirementType',
      label: 'Requirement Type',
    },
    {
      name: 'longRate',
      label: 'Long Rate',
      type: columnType.percentage,
    },
    {
      name: 'shortRate',
      label: 'Short Rate',
      type: columnType.percentage,
    },
    {
      name: 'status',
      label: 'Status',
    },
    {
      name: 'cusip',
      label: 'Cusip',
    },
    {
      name: 'originalCusip',
      label: 'OriginalCusip',
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

  const isDeleteEnalbed = (dataIndex) => {
    return rows[dataIndex].status !== 'Disabled';
  };

  const [rowData, setRowData] = React.useState({});
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [showFilter, setShowFilter] = React.useState(true);
  const [rows, setRows] = useState([]);
  const [searchData, setSearchData] = React.useState(
    QueryParam.get({
      symbol: '',
      fromDate: '',
      toDate: '',
      requirementType: '',
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
      const data = await listMarginRate(searchData);
      setRows(data.marginRatesList);
      notifyInfo(data.marginRatesList.length + ' search results.');
    } catch (error) {
      console.error(error);
      notifyError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = (rowsToDelete) => {
    let messageKey = '';
    if (rowsToDelete.length === 1) {
      messageKey = rows[rowsToDelete[0].dataIndex].symbol;
    } else {
      messageKey = rowsToDelete.length + ' items';
    }

    confirm({
      description:
        "You are about to disable '" +
        messageKey +
        "'. Please confirm your action.",
      confirmationText: 'Yes, Disable',
    }).then(async () => {
      const rowsCopy = [...rows];
      try {
        for (const r of rowsToDelete) {
          const index = r.dataIndex;
          const data = await deleteMarginRate(rows[index].marginRateId);
          rowsCopy[index] = data.marginRate;
        }
        notifySuccess(messageKey + ' Margin Rate has been disabled');
      } catch (error) {
        notifyError(error.message);
      } finally {
        setRows(rowsCopy);
      }
    });
  };

  const handleOpen = (data) => {
    if (!data) {
      //ADD default values
      data = {
        symbol: '',
        fromDate: '',
        toDate: '',
        requirementType: '',
        longRate: '',
        shortRate: '',
        correspondent: '',
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
    if (!data.requirementType) {
      notifyError('Requirement Type is required.');
      valid = false;
    }
    if (!data.longRate) {
      notifyError('Long Rate is required.');
      valid = false;
    }
    if (!data.shortRate) {
      notifyError('Short Rate is required.');
      valid = false;
    }
    if (!data.fromDate) {
      notifyError('From Date is required.');
      valid = false;
    }
    if (!data.toDate) {
      notifyError('To Date is required.');
      valid = false;
    }

    if (data.fromDate > data.toDate) {
      notifyError('From Date should not be greater than To Date.');
      valid = false;
    }

    if (!valid) {
      return;
    }

    try {
      if (isEdit) {
        //EDIT
        const resp = await updateMarginRate(data);
        const rowsCopy = [...rows];
        const index = rows.indexOf(rowData);
        rowsCopy[index] = resp.marginRate;
        setRows(rowsCopy);
        notifySuccess('Margin rate has been updated.');
      } else {
        //ADD
        const resp = await createMarginRate(data);
        setRows([resp.marginRate, ...rows]);
        notifySuccess('New margin rate has been added.');
      }

      setOpen(false);
    } catch (error) {
      console.error(error);
      notifyError(error.message);
    }
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
                />
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <TextField
                  fullWidth
                  name="fromDate"
                  label="From Date"
                  type="date"
                  value={searchData.fromDate}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <TextField
                  fullWidth
                  name="toDate"
                  label="To Date"
                  type="date"
                  value={searchData.toDate}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectRequirementType
                  name="requirementType"
                  label="Requirement Type"
                  value={searchData.requirementType}
                  onChange={handleChange}
                ></SelectRequirementType>
              </div>
              <div className={classes.grdCell1}>
                <SelectSystemCode
                  name="status"
                  label="Status"
                  type="Status"
                  subType="Client Setup"
                  value={searchData.status}
                  onChange={handleChange}
                ></SelectSystemCode>
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
          title={'SECURITY MARGIN RATE'}
          data={rows}
          columns={columns}
          options={options}
        />
      </Box>
      {open && (
        <SecurityMarginRateModal
          onClose={handleClose}
          open={open}
          value={rowData}
        ></SecurityMarginRateModal>
      )}
    </div>
  );
}
