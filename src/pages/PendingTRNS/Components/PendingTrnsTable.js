import React, { useState, useEffect } from 'react';
import {
  Box,
  InputLabel,
  Tooltip,
  Select,
  IconButton,
  MenuItem,
  TextField,
  CircularProgress,
} from '@material-ui/core';
import { useConfirm } from 'material-ui-confirm';
import {
  CompareArrowsRounded as CancelAndCorrectIcon,
  Delete as DeleteIcon,
} from '@material-ui/icons';
import {
  listPendingTrns,
  deletePendingTrns,
} from '../../../services/PendingTrnsService';
import {
  notifyInfo,
  notifyError,
  notifySuccess,
} from 'components/Notification/Notification';

import { batchProcessPendingTransaction } from '../../../services/TransactionService';
import SearchButton from '../../../components/Button/Search';
import SelectCorrespondent from '../../../components/AutoComplete/SelectCorrespondent';
import SelectSymbol from '../../../components/AutoComplete/SelectSymbol';
import { SelectEntryType } from '../../../components/AutoComplete/SelectSystemCode';
import SelectAccountNo from '../../../components/AutoComplete/SelectAccountNo';
import SelectSystemCode from '../../../components/Dropdown/SelectSystemCode';
import Loader from '../../../components/Table/Loader';
import Table, { columnType } from 'components/Table/Table';
import { getSystemDate } from '../../../services/ProfileService';
import QueryParam from '../../../services/QueryParamService';
import useStyles from '../../../styles';

export default function MarginRequirementTable({ params }) {
  const classes = useStyles();
  const confirm = useConfirm();

  useEffect(
    () => {
      async function init() {
        // if (searchData.systemDate) return;

        const systemDate = await getSystemDate();
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

  const [rows, setRows] = useState([]);
  const [pagination, setPagination] = useState({});
  const [loading, setLoading] = React.useState({
    search: false,
    delete: false,
    process: false,
  });
  const [showFilter, setShowFilter] = React.useState(true);

  //search parameters initial value
  const [searchData, setSearchData] = React.useState(
    QueryParam.get({
      correspondent: '',
      accountNo: '',
      symbol: '',
      status: '',
      entryType: '',
      dateType: 'System Date',
      fromDate: '',
      toDate: '',
    })
  );

  let columns = [
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
              <div className={classes.grdCell1}>
                <Tooltip title="Delete" arrow>
                  <div>
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
                </Tooltip>
              </div>
              <div align={'left'} className={classes.grdCell1}>
                <Tooltip title="Process" arrow>
                  <div>
                    <IconButton
                      aria-label="process"
                      disabled={
                        rows[dataIndex].status === 'Cancel' ? true : false
                      }
                      onClick={() => {
                        handleProcessTrns(
                          rows[dataIndex].stageId,
                          rows[dataIndex].accountId
                        );
                      }}
                    >
                      <CancelAndCorrectIcon />
                    </IconButton>
                  </div>
                </Tooltip>
              </div>
            </div>
          );
        },
      },
    },

    {
      name: 'stageId',
      label: 'Stage ID',
      options: {
        display: false,
      },
    },
    {
      name: 'correspondent',
      label: 'Correspondent',
    },
    {
      name: 'branch',
      label: 'Branch',
    },
    {
      name: 'accountNo',
      label: 'Account No',
    },
    {
      name: 'rep',
      label: 'Rep',
    },
    {
      name: 'symbol',
      label: 'Symbol',
    },
    {
      name: 'entryType',
      label: 'Entry Type',
    },
    {
      name: 'systemDate',
      label: 'System Date',
      type: columnType.date,
      options: {
        display: false,
      },
    },
    {
      name: 'tradeDate',
      label: 'Trade Date',
      type: columnType.date,
    },
    {
      name: 'tradeAt',
      label: 'Trade At',
      type: columnType.dateTime,
    },
    {
      name: 'settleDate',
      label: 'Settle Date',
      type: columnType.date,
    },
    {
      name: 'side',
      label: 'Side',
    },
    {
      name: 'qty',
      label: 'Qty',
      type: columnType.quantity,
      addFooter: true,
    },
    {
      name: 'price',
      label: 'Price',
      type: columnType.amount,
    },
    {
      name: 'createdAt',
      label: 'Created At',
      type: columnType.dateTime,
      options: {
        display: false,
      },
    },
    {
      name: 'batchNo',
      label: 'Batch No',
      options: {
        display: false,
      },
    },
    {
      name: 'previousTransactionId',
      label: 'Previous Transaction ID',
      options: {
        display: false,
      },
    },
    {
      name: 'status',
      label: 'Status',
      options: {
        display: false,
      },
    },
    {
      name: 'grossAmt',
      label: 'Gross Amount',
      type: columnType.amount,
      addFooter: true,
    },
    {
      name: 'netAmt',
      label: 'Net Amount',
      type: columnType.amount,
      addFooter: true,
    },
    {
      name: 'regFee',
      label: 'Reg Fee',
      type: columnType.amount,
      addFooter: true,
    },
    {
      name: 'tafFee',
      label: 'Taf Fee',
      type: columnType.amount,
      addFooter: true,
    },
    {
      name: 'commission',
      label: 'Commission',
      type: columnType.amount,
      addFooter: true,
    },
    {
      name: 'fees',
      label: 'Fees',
      type: columnType.amount,
      addFooter: true,
    },
    {
      name: 'contraAccountNo',
      label: 'Contra Account No',
    },
    {
      name: 'description',
      label: 'Description',
      options: {
        display: false,
      },
    },
    {
      name: 'createdBy',
      label: 'Created By',
      options: {
        display: false,
      },
    },
    {
      name: 'accountId',
      label: 'Account ID',
      options: {
        display: false,
      },
    },
    {
      name: 'contraAccountId',
      label: 'Contra Account ID',
      options: {
        display: false,
      },
    },
    {
      name: 'originalCusip',
      label: 'Originial Cusip',
      options: {
        display: false,
      },
    },
    {
      name: 'errorMessage',
      label: 'Error Message',
      options: {
        display: false,
      },
    },
    {
      name: 'externalId',
      label: 'External ID',
      options: {
        display: false,
      },
    },
    {
      name: 'executingVenue',
      label: 'Executing Venue',
      options: {
        display: false,
      },
    },
    {
      name: 'orderId',
      label: 'Order ID',
      options: {
        display: false,
      },
    },
    {
      name: 'vendor',
      label: 'Vendor',
      options: {
        display: false,
      },
    },
    {
      name: 'capacity',
      label: 'Capacity',
      options: {
        display: true,
      },
    },
    {
      name: 'referenceId',
      label: 'Reference ID',
      type: columnType.text,
      options: {
        display: false,
      },
    },
    {
      name: 'traderId',
      label: 'Trader ID',
      type: columnType.text,
      options: {
        display: false,
      },
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

  const options = {
    serverSide: true,
    customToolbarSelect: (selectedRows, a, b) => {
      return (
        <div
          className={classes.grdRow}
          style={{ margin: 0, padding: 0, marginRight: 20 }}
        >
          <div className={classes.grdCell1}>
            <Tooltip title="Delete" arrow>
              <div>
                <IconButton
                  aria-label="delete"
                  onClick={() => {
                    handleDelete(selectedRows.data);
                  }}
                >
                  {loading.delete ? (
                    <CircularProgress
                      style={{ color: '#131215', height: 20, width: 20 }}
                    />
                  ) : (
                    <DeleteIcon />
                  )}
                </IconButton>
              </div>
            </Tooltip>
          </div>
          <div align={'left'} className={classes.grdCell1}>
            <Tooltip title="Process" arrow>
              <div>
                <IconButton
                  aria-label="process"
                  onClick={() => {
                    handleBatchProcessPending(selectedRows.data);
                  }}
                >
                  {loading.process ? (
                    <CircularProgress
                      style={{ color: '#131215', height: 20, width: 20 }}
                    />
                  ) : (
                    <CancelAndCorrectIcon />
                  )}
                </IconButton>
              </div>
            </Tooltip>
          </div>
        </div>
      );
    },
    textLabels: {
      body: {
        noMatch:
          loading.search || loading.delete || loading.process ? (
            <Loader />
          ) : (
            'Sorry, there is no matching data to display'
          ),
      },
    },
  };

  const isDeleteEnalbed = (dataIndex) => {
    return rows[dataIndex].status !== 'Disabled';
  };

  const handleSearch = async (paginationChange) => {
    try {
      setLoading({ search: true });
      QueryParam.set(searchData);
      let paginationCopy = {
        ...pagination,
        reload: false,
        pageNo: paginationChange === true ? pagination.pageNo : 0,
        rowsPerPage: pagination.rowsPerPage || 50,
      };

      const data = await listPendingTrns(searchData, paginationCopy);
      if (paginationChange !== true) {
        notifyInfo(data.summary.totalRows + ' search results.');
      }

      paginationCopy.count = data.summary.totalRows;
      setPagination(paginationCopy);
      setRows(data.pendingTransactionsList);
    } catch (error) {
      notifyError(error.message);
    } finally {
      setLoading({ search: false });
    }
  };

  const handleChange = (e) => {
    const input = e.currentTarget.name ? e.currentTarget : e.target;

    setSearchData({
      ...searchData,
      [input.name]: input.value,
    });
  };

  const handleDelete = (rowsToDelete) => {
    let messageKey = '';
    let descriptivemessage = '';
    if (rowsToDelete.length === 1) {
      messageKey = rows[rowsToDelete[0].dataIndex].stageId;
      descriptivemessage = 'Pending TRNS with ID no.';
    } else {
      messageKey = rowsToDelete.length + ' items';
    }

    let idsToDelete = [];

    confirm({
      description:
        'You are about to delete ' +
        descriptivemessage +
        "'" +
        messageKey +
        "'. Please confirm your action.",
      confirmationText: 'Yes, delete',
    }).then(async () => {
      const rowsCopy = [...rows];
      try {
        setLoading({ delete: true });

        for (const r of rowsToDelete) {
          const index = r.dataIndex;
          idsToDelete.push(rows[index].stageId);
        }

        await deletePendingTrns(idsToDelete);
      } catch (error) {
        notifyError(error.message);
      } finally {
        const filtered = rowsCopy.filter(
          (r) => !idsToDelete.includes(r.stageId)
        );
        setRows(filtered);
        let sucessMesssage =
          rowsToDelete.length > 1
            ? messageKey + ' Pending TRNS with has been deleted'
            : descriptivemessage + messageKey + ' has been deleted.';
        notifySuccess(sucessMesssage);
        setLoading({ delete: false });
      }
    });
  };

  const handleProcessTrns = (stageId, accountId) => {
    const paramPath = '/app/trns/process-pending/' + stageId + '/' + accountId;

    window.open(paramPath, '_blank');
  };

  const handleBatchProcessPending = async (selected) => {
    confirm({
      description:
        'Are you sure you want to process ' + selected.length + ' record(s)?',
      confirmationText: 'Yes, Confirm',
    })
      .then(async () => {
        const list = [];

        selected.forEach(function(data) {
          list.push(rows[data.dataIndex]);
        });

        try {
          setLoading({ process: true });

          const { responsesList } = await batchProcessPendingTransaction(list);
          var rowsCopy = [...rows];
          console.log(responsesList);

          responsesList.forEach(function(resp) {
            rowsCopy.forEach(function(row, rowIndex) {
              if (row.stageId === resp.trnsId) {
                if (resp.errorMessage) {
                  notifyError(
                    resp.status + ' ' + resp.trnsId + ' ' + resp.errorMessage
                  );
                } else {
                  // var index = rowsCopy.indexOf(row);
                  rowsCopy.splice(rowIndex, 1);
                  console.log(rowsCopy);
                }
              }
            });
          });

          notifySuccess(selected.length + ' transaction has been processed');

          setRows(rowsCopy);
          setLoading({ process: false });
        } catch (error) {
          notifyError(error.message);
          handleSearch();
        }
      })
      .catch((error) => {
        console.log(error);
        // setIsLoading(false);
      });
  };

  return (
    <div className={classes.root}>
      <Box component="div" mt={5}>
        {showFilter ? (
          <div>
            <div className={classes.grdRow}>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectSystemCode
                  name="dateType"
                  label="Date Type"
                  type="Date Type"
                  value={searchData.dateType}
                  onChange={handleChange}
                ></SelectSystemCode>
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
              <div className={classes.grdCell1}>
                <SelectCorrespondent
                  required={false}
                  name="correspondent"
                  label="Correspondent"
                  value={searchData.correspondent}
                  onChange={handleChange}
                ></SelectCorrespondent>
              </div>
            </div>
            <div className={classes.grdRow}>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectAccountNo
                  required={false}
                  freeSolo={true}
                  name="accountNo"
                  label="Account No"
                  value={searchData.accountNo}
                  correspondent={searchData.correspondent}
                  onChange={handleChange}
                  type="" //client or gl
                ></SelectAccountNo>
              </div>
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
                <InputLabel shrink>Status</InputLabel>
                <Select
                  fullWidth
                  name="status"
                  value={searchData.status}
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>Blank</em>
                  </MenuItem>
                  <MenuItem value="pending">Pending</MenuItem>
                  <MenuItem value="rejected">Rejected</MenuItem>
                </Select>
              </div>
              <div className={classes.grdCell1}>
                <SelectEntryType
                  name="entryType"
                  label="Entry Type"
                  value={searchData.entryType}
                  onChange={handleChange}
                ></SelectEntryType>
              </div>
            </div>
          </div>
        ) : null}
        <div className={classes.actionContainer}>
          <div className={classes.grdCellNone} style={{ marginRight: '10px' }}>
            <SearchButton
              onClick={handleSearch}
              loading={loading.search}
              showfilter={(status) => setShowFilter(status)}
            />
          </div>
        </div>
      </Box>
      <Box component="div" mt={2}>
        <Table
          title={'PENDING TRNS'}
          data={loading.delete || loading.process ? [] : rows}
          columns={columns}
          pagination={pagination}
          setPagination={setPagination}
          onSearch={handleSearch}
          options={options}
        />
      </Box>
    </div>
  );
}
