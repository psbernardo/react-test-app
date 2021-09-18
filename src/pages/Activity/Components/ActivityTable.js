import React, { useState, useEffect } from 'react';
import ActivityDetailsModal from './ActivityDetailsModal';
import ActivityModal from './ActivityModal';
import {
  Box,
  InputLabel,
  Tooltip,
  Select,
  IconButton,
  MenuItem,
  TextField,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core';
import { useConfirm } from 'material-ui-confirm';
import {
  Visibility as ViewIcon,
  CompareArrowsRounded as CancelAndCorrectIcon,
  Block as CancelIcon,
  DynamicFeed as ViewMoreIcon,
} from '@material-ui/icons';

import Table, { columnType } from 'components/Table/Table';
import {
  cancelTransaction,
  batchCancelTransaction,
} from '../../../services/TransactionService';
import {
  notifyInfo,
  notifyError,
  notifySuccess,
} from 'components/Notification/Notification';
import { listActivity } from '../../../services/ActivityService';
import { protoTimeSpanObjectToString } from '../../../services/ConvertService';

/*Moment JS*/
import moment from 'moment-timezone';
import { formatQty, formatDollar, formatPbDateDash } from 'lib/fmt';
import SearchButton from '../../../components/Button/Search';
import SelectCorrespondent from '../../../components/AutoComplete/SelectCorrespondent';
import EntryTypeSelect from '../../../components/AutoComplete/EntryType';
import SelectMasterAccountNo from '../../../components/AutoComplete/SelectMasterAccountNo';
import SelectAccountNo from '../../../components/AutoComplete/SelectAccountNo';
import SelectBranch from '../../../components/AutoComplete/SelectBranch';
import SelectRep from '../../../components/AutoComplete/SelectRep';
import SelectSystemCode from '../../../components/Dropdown/SelectSystemCode';
import { getSystemDate } from '../../../services/ProfileService';
import QueryParam from '../../../services/QueryParamService';
import useStyles from '../../../styles';
import SelectSymbol from 'components/AutoComplete/SelectSymbol';
import SelectCusip from 'components/AutoComplete/SelectCusip';

export default function MarginRequirementTable({ params }) {
  const classes = useStyles();
  const confirm = useConfirm();

  useEffect(
    () => {
      async function init() {
        if (params.modalTable) {
          handleSearch();
        } else {
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
      }

      init();
    },
    // eslint-disable-next-line
    []
  );

  const isCancelEnabled = (dataIndex) => {
    return (
      rows[dataIndex].status !== 'Cancel' &&
      rows[dataIndex].status !== 'Executed CXLD'
    );
  };

  const [pagination, setPagination] = useState({});
  const [footerData, setFooterData] = useState({});
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = React.useState(false);
  const [showFilter, setShowFilter] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  const [rowData, setRowData] = React.useState({});
  //search parameters initial value
  const [searchData, setSearchData] = React.useState(
    params.modalTable
      ? {
          compressId: params.selectedRow.compressId,
          searchType: 'Uncompress',
          dateType: 'System Date',
          fromDate: formatPbDateDash(params.selectedRow.systemDate),
          toDate: formatPbDateDash(params.selectedRow.systemDate),
        }
      : QueryParam.get({
          correspondent: '',
          accountNo: '',
          masterAccountNo: '',
          contraAccountNo: '',
          broker: '',
          type: '',
          symbol: '',
          cusip: '',
          status: '',
          entryType: '',
          dateType: 'System Date',
          fromDate: '',
          toDate: '',
          branch: '',
          rep: '',
          searchType: 'Compress',
          side: '',
        })
  );

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
              {rows[dataIndex].compressCount === 1 && (
                <React.Fragment>
                  <div align={'left'} className={classes.grdCell1}>
                    <Tooltip title="Cancel" arrow>
                      <div>
                        <IconButton
                          aria-label="cancel"
                          disabled={!isCancelEnabled(dataIndex)}
                          onClick={() => {
                            handleCancelTransaction(rows[dataIndex].trnsId);
                          }}
                        >
                          <CancelIcon />
                        </IconButton>
                      </div>
                    </Tooltip>
                  </div>
                  <div align={'left'} className={classes.grdCell1}>
                    <Tooltip title="Correct" arrow>
                      <div>
                        <IconButton
                          aria-label="cancelcorrect"
                          disabled={!isCancelEnabled(dataIndex)}
                          onClick={() => {
                            handleCancelAndCorrect(
                              rows[dataIndex].accountId,
                              rows[dataIndex].trnsId
                            );
                          }}
                        >
                          <CancelAndCorrectIcon />
                        </IconButton>
                      </div>
                    </Tooltip>
                  </div>
                </React.Fragment>
              )}

              <div className={classes.grdCell1}>
                <Tooltip title="View More" arrow>
                  <div>
                    <IconButton
                      aria-label="view more"
                      onClick={() => {
                        handleOpen(rows[dataIndex]);
                      }}
                    >
                      {rows[dataIndex].compressCount === 1 ? (
                        <ViewIcon />
                      ) : (
                        <ViewMoreIcon />
                      )}
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
      name: 'correspondent',
      label: 'Correspondent',
    },
    {
      name: 'compressCount',
      label: 'Compress Count',
      options: {
        display: false,
      },
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
      name: 'masterAccountNo',
      label: 'Master Account No',
      options: {
        display: false,
      },
    },
    {
      name: 'rep',
      label: 'Rep',
    },
    {
      name: 'accountName',
      label: 'Account Name',
      options: {
        display: false,
      },
    },
    {
      name: 'broker',
      label: 'Broker',
      options: {
        display: false,
      },
    },
    {
      name: 'type',
      label: 'Type',
      options: {
        display: false,
      },
    },
    {
      name: 'capacity',
      label: 'Capacity',
      options: {
        display: false,
      },
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
      name: 'cusip',
      label: 'Cusip',
      options: {
        display: false,
      },
    },
    {
      name: 'assetType',
      label: 'Asset Type',
      options: {
        display: false,
      },
    },
    {
      name: 'systemDate',
      label: 'System Date',
      type: columnType.date,
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
      options: {
        customBodyRenderLite: (dataIndex) => {
          return protoTimeSpanObjectToString(
            rows[dataIndex].tradeAt,
            'HH:mm:ss' //HH:mm:ss.SSS with nano seconds
          );
        },
      },
    },
    {
      name: 'settleDate',
      label: 'Settle Date',
      type: columnType.date,
    },
    {
      name: 'createdAt',
      label: 'Created At',
      type: columnType.dateTime,
    },
    {
      name: 'entryType',
      label: 'Entry Type',
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
      addFooter: true,
    },
    {
      name: 'grossAmt',
      label: 'Gross Amount',
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
      options: {
        display: false,
      },
    },
    {
      name: 'commission',
      label: 'Commission',
      type: columnType.amount,
      addFooter: true,
      options: {
        display: false,
      },
    },
    {
      name: 'fees',
      label: 'Fees',
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
      name: 'description',
      label: 'Description',
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
      name: 'createdBy',
      label: 'Created By',
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
      name: 'contraCorrespondent',
      label: 'Contra Correspondent',
    },
    {
      name: 'contraAccountNo',
      label: 'Contra Account No',
    },
    {
      name: 'contraAccountId',
      label: 'Contra Account ID',
    },
    {
      name: 'originalCusip',
      label: 'Original Cusip',
    },
    {
      name: 'entryTypeDescription',
      label: 'Entry Type Description',
    },
    {
      name: 'executingVenue',
      label: 'Executing Venue',
    },
    {
      name: 'effTradeDate',
      label: 'Efficient Trade Date',
      type: columnType.date,
    },
    {
      name: 'effSettleDate',
      label: 'Efficient Settle Date',
      type: columnType.date,
    },
    {
      name: 'trnsId',
      label: 'TR ID',
      type: columnType.text,
      options: {
        display: false,
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
    // selectableRows: 'none',
    isRowSelectable: (dataIndex) => isCancelEnabled(dataIndex),
    customToolbarSelect: (selectedRows, a, b) => {
      return (
        <div
          className={classes.grdRow}
          style={{ margin: 0, padding: 0, marginRight: 20 }}
        >
          <div align={'left'} className={classes.grdCell1}>
            <Tooltip title="Cancel" arrow>
              <div>
                <IconButton
                  aria-label="cancel"
                  onClick={() => {
                    handleBatchCancelTransaction(selectedRows.data);
                  }}
                >
                  <CancelIcon />
                </IconButton>
              </div>
            </Tooltip>
          </div>
        </div>
      );
    },
  };

  const getCsvData = async () => {
    const data = await listActivity(searchData);
    return data.activitiesList;
  };

  const handleSearch = async (paginationChange) => {
    try {
      setLoading(true);
      if (!params.modalTable) QueryParam.set(searchData);

      let paginationCopy = {
        ...pagination,
        reload: false,
        pageNo: paginationChange === true ? pagination.pageNo : 0,
        rowsPerPage: pagination.rowsPerPage || 50,
      };

      const data = await listActivity(searchData, paginationCopy);
      if (paginationChange !== true) {
        notifyInfo(data.summary.totalRows + ' search results.');
      }

      paginationCopy.count = data.summary.totalRows;
      setPagination(paginationCopy);
      setRows(data.activitiesList);
      setFooterData({
        qty: formatQty(data.summary.qty),
        grossAmt: formatDollar(data.summary.grossAmt),
        regFee: formatDollar(data.summary.regFee),
        commission: formatDollar(data.summary.commission),
        tafFee: formatDollar(data.summary.tafFee),
        fees: formatDollar(data.summary.fees),
        netAmt: formatDollar(data.summary.netAmt),
      });
    } catch (error) {
      notifyError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e, checkboxValue) => {
    const input = e.currentTarget.name ? e.currentTarget : e.target;

    setSearchData({
      ...searchData,
      [input.name]:
        checkboxValue === true || checkboxValue === false
          ? checkboxValue
          : input.value,
    });
  };

  const handleCancelTransaction = async (trnsId) => {
    confirm({
      description: 'You are about to cancel this transaction, please confirm.',
      confirmationText: 'Yes, Cancel Transaction',
      cancellationText: 'No',
    })
      .then(async () => {
        try {
          await cancelTransaction(trnsId);
          notifySuccess('Transaction has been canceled.');
          handleSearch();
        } catch (error) {
          notifyError(error.message);
        }
      })
      .catch(() => {
        /* ... */
      });
  };

  const handleBatchCancelTransaction = (selected) => {
    confirm({
      description:
        'You are about to cancel ' +
        selected.length +
        ' transaction(s), please confirm.',
      confirmationText: 'Yes, Cancel Transaction(s)',
      cancellationText: 'No',
    })
      .then(async () => {
        const list = [];

        selected.forEach(function(data) {
          list.push(rows[data.dataIndex]);
        });

        try {
          await batchCancelTransaction(list);
          notifySuccess('Transaction(s) has been canceled.');
          handleSearch();
        } catch (error) {
          notifyError(error.message);
        }
      })
      .catch(() => {
        /* ... */
      });
  };

  const handleCancelAndCorrect = (accountId, trnsId) => {
    const paramPath =
      '/app/trns/cancel-and-correct/' + trnsId + '/' + accountId;

    window.open(paramPath, '_blank');
  };

  const handleOpen = (selectedRow) => {
    let data = { ...selectedRow };
    data.createdAt = data.createdAt
      ? moment(new Date(data.createdAt.seconds * 1000)).format(
          'MM/DD/YYYY hh:mm'
        )
      : '--';
    data.tradeAt = data.tradeAt
      ? moment
          .tz(new Date(data.tradeAt.seconds * 1000), 'America/New_York')
          .format('hh:mm:ssa')
      : '--';
    setRowData(data);
    setOpen(true);
  };

  const handleClose = async () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      {!params.modalTable && (
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
                    name="fromDate"
                    fullWidth
                    label="From Date"
                    type="date"
                    value={searchData.fromDate}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    name="toDate"
                    fullWidth
                    label="To Date"
                    type="date"
                    value={searchData.toDate}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <SelectCorrespondent
                    required={false}
                    name="correspondent"
                    value={searchData.correspondent}
                    onChange={handleChange}
                  ></SelectCorrespondent>
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <SelectBranch
                    required={false}
                    freeSolo={true}
                    name="branch"
                    label="Branch"
                    value={searchData.branch}
                    onChange={handleChange}
                  ></SelectBranch>
                </div>
                <div className={classes.grdCell1}>
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
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <SelectMasterAccountNo
                    required={false}
                    name="masterAccountNo"
                    label="Master Account No"
                    value={searchData.masterAccountNo}
                    correspondent={searchData.correspondent}
                    onChange={handleChange}
                    type="" //client or gl
                  ></SelectMasterAccountNo>
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <SelectRep
                    required={false}
                    freeSolo={true}
                    name="rep"
                    label="Rep"
                    value={searchData.rep}
                    onChange={handleChange}
                  ></SelectRep>
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <SelectAccountNo
                    required={false}
                    freeSolo={true}
                    name="contraAccountNo"
                    label="Contra Account"
                    value={searchData.contraAccountNo}
                    onChange={handleChange}
                    type="" //client or gl
                  ></SelectAccountNo>
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <SelectSystemCode
                    name="broker"
                    label="Broker"
                    type="Broker"
                    value={searchData.broker}
                    onChange={handleChange}
                  ></SelectSystemCode>
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <InputLabel shrink>Type</InputLabel>
                  <Select
                    fullWidth
                    name="type"
                    value={searchData.type}
                    onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em>Blank</em>
                    </MenuItem>
                    <MenuItem value="client">Client</MenuItem>
                    <MenuItem value="gl">GL</MenuItem>
                  </Select>
                </div>
                <div className={classes.grdCell1}>
                  <SelectSymbol
                    freeSolo={true}
                    name="symbol"
                    label="Symbol"
                    value={searchData.symbol}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <SelectCusip
                    name="cusip"
                    label="Cusip"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    value={searchData.cusip}
                    onChange={handleChange}
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
                    <MenuItem value="Executed">Executed</MenuItem>
                    <MenuItem value="Cancel">Cancel</MenuItem>
                    <MenuItem value="Correct">Correct</MenuItem>
                    <MenuItem value="Executed CXLD">Executed CXLD</MenuItem>
                  </Select>
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <EntryTypeSelect
                    name="entryType"
                    labelid="entryType"
                    label="Entry Type"
                    value={searchData.entryType}
                    onChange={handleChange}
                    setNewValue={(event, newValue) => {
                      handleChange({
                        currentTarget: {
                          name: 'entryType',
                          value: newValue ? newValue.code : '',
                        },
                      });
                    }}
                  />
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <SelectSystemCode
                    name="side"
                    label="Side"
                    type="Side"
                    subType="Equity"
                    value={searchData.side}
                    onChange={handleChange}
                  ></SelectSystemCode>
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <InputLabel shrink>As of TRNS</InputLabel>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="asOfTRNS"
                        checked={searchData.asOfTRNS}
                        onChange={handleChange}
                      />
                    }
                    label=""
                  />
                </div>
                <div className={classes.grdCell1}></div>
              </div>
            </div>
          ) : null}
          <div className={classes.actionContainer}>
            <div className={classes.grdCellNone}>
              <SearchButton
                onClick={handleSearch}
                loading={loading}
                showfilter={(status) => setShowFilter(status)}
              />
            </div>
          </div>
        </Box>
      )}

      <Box component="div" mt={2}>
        <Table
          title={'ACTIVITY'}
          data={rows}
          columns={columns}
          options={options}
          footerData={footerData}
          onSearch={handleSearch}
          pagination={pagination}
          setPagination={setPagination}
          getCsvData={getCsvData}
          additionalCell={true}
        />
      </Box>
      {open && rowData.compressCount > 1 && (
        <ActivityDetailsModal
          onClose={handleClose}
          open={open}
          value={rowData}
        ></ActivityDetailsModal>
      )}
      {open && rowData.compressCount === 1 && (
        <ActivityModal
          onClose={handleClose}
          open={open}
          value={rowData}
        ></ActivityModal>
      )}
    </div>
  );
}
