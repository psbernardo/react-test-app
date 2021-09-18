import React, { useState, useEffect } from 'react';

import {
  notifyInfo,
  notifyError,
  notifySuccess,
} from 'components/Notification/Notification';

import {
  listNscc,
  deleteNscc,
  createNscc,
  updateNscc,
} from '../../../services/NSCCservice';
import NSCCModal from './NSCCModal';
import {
  IconButton,
  Button,
  Box,
  TextField,
  MenuItem,
  InputLabel,
  Select,
} from '@material-ui/core';
import {
  Delete as DeleteIcon,
  Add as AddIcon,
  Create as EditIcon,
} from '@material-ui/icons';
import { useConfirm } from 'material-ui-confirm';
import Table, { columnType } from 'components/Table/Table';
import useStyles from '../../../styles';
import { getTradeDate } from '../../../services/ProfileService';
import CorrespondentSelect from '../../../components/AutoComplete/Correspondent';
import SearchButton from '../../../components/Button/Search';
import QueryParam from '../../../services/QueryParamService';
import SelectSymbol from 'components/AutoComplete/SelectSymbol';
import SelectCusip from 'components/AutoComplete/SelectCusip';
import {
  AutoCompleteExecBroker,
  AutoCompleteContraExecBroker,
  AutoCompleteCusip,
} from '../../../components/AutoComplete/SelectSystemCode';
import {
  dateProtoObjectToString,
  dateStringToDateSTD,
} from '../../../services/ConvertService';
export default function NSCCTable({ params }) {
  const classes = useStyles();

  useEffect(
    () => {
      async function init() {
        // if (searchData.tradeDate) return;

        const tradeDate = await getTradeDate();
        const searchDataCopy = { ...searchData };

        if (!searchData.fromDate) {
          searchDataCopy.fromDate = tradeDate;
        }

        if (!searchData.toDate) {
          searchDataCopy.toDate = tradeDate;
        }

        setSearchData(searchDataCopy);
      }

      init();
    },
    // eslint-disable-next-line
    []
  );

  const confirm = useConfirm();

  const options = {
    // isRowSelectable: (dataIndex) => isDeleteEnabled(dataIndex),
    onRowsDelete: (selectedItems) => {
      handleDelete(selectedItems.data);
      return false;
    },
  };

  // const isDeleteEnabled = (dataIndex) => {
  //   return rows[dataIndex].status !== 'disabled';
  // };

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
              <div className={classes.grdCell1}>
                <IconButton
                  aria-label="delete"
                  // disabled={!isDeleteEnabled(dataIndex)}
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
      name: 'side',
      label: 'Side',
      options: {
        display: false,
      },
    },
    {
      name: 'reversal',
      label: 'Reversal',
      options: {
        display: false,
      },
    },
    {
      name: 'rejectCode',
      label: 'Code Description',
      options: {
        display: false,
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
      name: 'cusip',
      label: 'Cusip',
      options: {
        display: false,
      },
    },
    {
      name: 'qty',
      label: 'QTY',
      type: columnType.quantity,
      addFooter: true,
    },
    {
      name: 'price',
      label: 'Price',
      type: columnType.amount,
      addFooter: false,
    },
    {
      name: 'originatingMarket',
      label: 'Originating Market',
    },
    {
      name: 'venue',
      label: 'Venue',
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
      name: 'settleDate',
      label: 'Settle Date',
      type: columnType.date,
    },
    {
      name: 'execBrokerNo',
      label: 'Exec Broker No',
      options: {
        display: false,
      },
    },
    {
      name: 'execBroker',
      label: 'Exec Broker',
      options: {
        display: false,
      },
    },
    {
      name: 'contraExecBrokerNo',
      label: 'Contra Exec Broker No',
      options: {
        display: false,
      },
    },
    {
      name: 'contraExecBroker',
      label: 'Contra Exec Broker',
      options: {
        display: false,
      },
    },
    {
      name: 'submitterParticipantNo',
      label: 'Submitter Participant No',
      options: {
        display: false,
      },
    },
    {
      name: 'currencyCode',
      label: 'Currency',
    },
    {
      name: 'grossAmount',
      label: 'Gross Amount',
      type: columnType.amount,
      addFooter: true,
    },
    {
      name: 'netAmount',
      label: 'Net Amount',
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
      name: 'taxes',
      label: 'Taxes',
      type: columnType.amount,
      addFooter: true,
    },
    {
      name: 'accruedInterest',
      label: 'Accrued Interest',
      type: columnType.amount,
      addFooter: true,
    },
    {
      name: 'systemDate',
      label: 'System Date',
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

  // const isDeleteEnabled = (dataIndex) => {
  //   return rows[dataIndex].status !== 'disabled';
  // };

  const [rowData, setRowData] = React.useState({});
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [showFilter, setShowFilter] = React.useState(true);
  const [rows, setRows] = useState([]);
  //set initial value

  const [searchData, setSearchData] = React.useState(
    QueryParam.get({
      dateType: 'trade_date',
      fromDate: '',
      toDate: '',
      correspondent: '',
      symbol: '',
      cusip: '',
      execBroker: '',
      contraExecBroker: '',
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
      const data = await listNscc(searchData);
      setRows(data.nsccList);
      notifyInfo(data.nsccList.length + ' search results.');
    } catch (error) {
      notifyError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = (rowsToDelete) => {
    let messageKey = '';

    if (rowsToDelete.length === 1) {
      messageKey = rows[rowsToDelete[0].dataIndex].correspondent;
    } else {
      messageKey = rowsToDelete.length + ' items';
    }

    confirm({
      description:
        "You are about to delete '" +
        messageKey +
        "'. Please confirm your action.",
      confirmationText: 'Yes, Delete',
    }).then(async () => {
      const rowsCopy = [...rows];
      try {
        for (const r of rowsToDelete) {
          const index = r.dataIndex;
          const res = await deleteNscc(rows[index].nsccId);
          rowsCopy[index] = res.NsccId;
        }

        notifySuccess(messageKey + ' NSCC has been deleted');
        const data = await listNscc(searchData);
        setRows(data.nsccList);
      } catch (error) {
        console.error(error);
        notifyError(error.message);
      }
    });
  };

  // const handleDelete = (rowsToDelete) => {
  //   let messageKey = '';

  //   if (rowsToDelete.length === 1) {
  //     messageKey = rows[rowsToDelete[0].dataIndex].correspondent;
  //   } else {
  //     messageKey = rowsToDelete.length + ' items';
  //   }
  //   let idsToDelete = [];
  //   confirm({
  //     description:
  //       "You are about to delete '" +
  //       messageKey +
  //       "'. Please confirm your action.",
  //     confirmationText: 'Yes, Delete',
  //   }).then(async () => {
  //     const rowsCopy = [...rows];
  //     try {
  //       for (const r of rowsToDelete) {
  //         const index = r.dataIndex;
  //         const res = await deleteNscc(rows[index].nsccId);
  //         rowsCopy[index] = res.nsccId;
  //       }
  //     } catch (error) {
  //       console.error(error);
  //       notifyError(error.message);
  //     } finally {
  //       const filtered = rowsCopy.filter(
  //         (r) => !idsToDelete.includes(r.nsccId)
  //       );
  //       setRows(filtered);
  //       notifySuccess(messageKey + ' has been deleted');
  //     }
  //   });
  // };

  const handleOpen = (data) => {
    // if (!data) {
    //   //ADD default values
    //   data = {
    //     tradeDate: '',
    //     settleDate: '',
    //     submitterParticipantNo: '',
    //     settleType: '',
    //     execBroker: '',
    //     execBrokerNo: '',
    //     contraExecBroker: '',
    //     contraExecBrokerNo: '',
    //     cusip: '',
    //     symbol:'',
    //     currencyCode: 'USD',
    //     correspondent: '',
    //     grossAmount: '',
    //     netAmount:'',
    //     price:'',
    //     commision:'',
    //     taxes:'',
    //     fees:'',
    //     accuredInterest:'',
    //     qty:'',
    //     commission:'',
    //     accruedInterest:'',
    //   };
    // }

    setRowData(data);
    setOpen(true);
  };

  const handleClose = async (data, isEdit) => {
    if (!data) {
      setOpen(false);
      return;
    }

    try {
      let valid = true;

      if (!data.tradeDate) {
        notifyError('Trade Date is required.');
        valid = false;
      }

      if (!data.settleDate) {
        notifyError('Settle Date is required.');
        valid = false;
      }

      if (!data.submitterParticipantNo) {
        notifyError('Submitter Participant No. is required.');
        valid = false;
      }

      if (!data.execBroker) {
        notifyError('Exec Broker is required.');
        valid = false;
      }

      if (!data.execBrokerNo) {
        notifyError('Exec Broker No is required.');
        valid = false;
      }

      if (!data.contraExecBroker) {
        notifyError('Contra Exec Broker is required.');
        valid = false;
      }

      if (!data.contraExecBrokerNo) {
        notifyError('Contra Exec Broker No is required.');
        valid = false;
      }

      if (!data.cusip) {
        notifyError('Cusip No is required.');
        valid = false;
      }

      if (!data.qty) {
        notifyError('Qty is required.');
        valid = false;
      }

      if (!data.price) {
        notifyError('Price is required.');
        valid = false;
      }

      if (!data.netAmount) {
        notifyError('Net Amount is required.');
        valid = false;
      }

      if (!data.side) {
        notifyError('Side is required.');
        valid = false;
      }

      if (!valid) {
        return;
      }
      // EDIT;
      if (isEdit) {
        const resp = await updateNscc(data);
        const rowsCopy = [...rows];
        const index = rows.indexOf(rowData);
        rowsCopy[index] = resp.nscc;
        setRows(rowsCopy);
        notifySuccess('NSCC has been updated.');
      } else {
        //ADD
        const resp = await createNscc(data);
        data.tradeDate = dateStringToDateSTD(data.tradeDate);
        data.settleDate = dateStringToDateSTD(data.settleDate);
        setRows([data, ...rows]);
        notifySuccess('New NSCC Code has been added.');
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
                <InputLabel shrink id="date_type">
                  Date Type
                </InputLabel>
                <Select
                  name="dateType"
                  displayEmpty
                  fullWidth
                  value={searchData.dateType}
                  onChange={handleChange}
                >
                  <MenuItem value="trade_date">Trade Date</MenuItem>
                  <MenuItem value="system_date">System Date</MenuItem>
                  <MenuItem value="settle_date">Settle Date</MenuItem>
                </Select>
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
                <CorrespondentSelect
                  labelid="correspondent"
                  label="Correspondent"
                  value={searchData.correspondent}
                  setNewValue={(event, newValue) => {
                    handleChange({
                      currentTarget: {
                        name: 'correspondent',
                        value: newValue ? newValue.correspondent : '',
                      },
                    });
                  }}
                />
              </div>
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
                <SelectCusip
                  name="cusip"
                  label="Cusip"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  value={searchData.cusip}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <AutoCompleteExecBroker
                    freeSolo={true}
                    name="execBroker"
                    label="Exec Broker"
                    value={searchData.execBroker}
                    onChange={handleChange}
                  ></AutoCompleteExecBroker>
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <AutoCompleteContraExecBroker
                    freeSolo={true}
                    name="contraExecBroker"
                    label="Contra Exec Broker"
                    value={searchData.contraExecBroker}
                    onChange={handleChange}
                  ></AutoCompleteContraExecBroker>
                </div>
                <div
                  className={classes.grdCell1}
                  style={{ marginRight: 30 }}
                ></div>
                <div
                  className={classes.grdCell1}
                  style={{ marginRight: 30 }}
                ></div>
                <div
                  className={classes.grdCell1}
                  style={{ marginRight: 30 }}
                ></div>
                <div
                  className={classes.grdCell1}
                  style={{ marginRight: 30 }}
                ></div>
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
        <Table title={'NSCC'} data={rows} columns={columns} options={options} />
      </Box>
      {open && (
        <NSCCModal
          onClose={handleClose}
          open={open}
          value={rowData}
        ></NSCCModal>
      )}
    </div>
  );
}
