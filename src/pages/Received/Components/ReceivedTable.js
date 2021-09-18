import React, { useState, useEffect } from 'react';
import {
  Box,
  InputLabel,
  IconButton,
  TextField,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core';
import ReceivedEnterTRNS from './ReceivedEnterTRNS';
import {
  notifyInfo,
  notifyError,
  notifySuccess,
} from 'components/Notification/Notification';
import SelectSymbol from '../../../components/AutoComplete/SelectSymbol';
import SelectCusip from '../../../components/AutoComplete/SelectCusip';
import {
  listUnmatchedReceived,
  updateUnmatchedReceived,
} from 'services/ReceivedService';
import SearchButton from '../../../components/Button/Search';
import { getSystemDate } from '../../../services/ProfileService';
import QueryParam from '../../../services/QueryParamService';
import { Create as EditIcon, Receipt as TrnsIcon } from '@material-ui/icons';
import ReceivedEditModal from './ReceivedEditModal';
import {
  Transaction,
  TransactionServiceClient,
} from '../../../proto/trnspb/transaction_grpc_web_pb';
import { stringToProtoDate } from '../../../services/ConvertService';
import { auth } from '../../../lib/auth/Auth';

import useStyles from '../../../styles';
import Table, { columnType } from 'components/Table/Table';

export default function ReceivedTable({ params }) {
  const transactionClient = new TransactionServiceClient(
    window.env.GRPC_ENDPOINT,
    {},
    { ...auth }
  );

  const classes = useStyles();
  //Set value of Settle date search parameter
  useEffect(
    () => {
      async function init() {
        if (searchData.systemDate) return;

        const systemDate = await getSystemDate();
        setSearchData({ ...searchData, systemDate: systemDate });
      }

      init();
    },
    // eslint-disable-next-line
    []
  );

  const [pendingTrnsId, setPendingTrnsId] = useState(0);
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = React.useState(false);
  const [showFilter, setShowFilter] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  const [trns, setTrns] = React.useState(false);
  const [rowData, setRowData] = React.useState({});
  const [idsToUpdate] = React.useState([]);
  const [rowsToUpdate] = React.useState([]);

  //search parameters initial value
  const [searchData, setSearchData] = React.useState(
    QueryParam.get({
      stystemDate: '',
      settleDate: '',
      symbol: '',
      cusip: '',
      delivererId: '',
      delivererName: '',
      unmatched: false,
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
              <div align={'left'} className={classes.grdCellNone}>
                <IconButton
                  aria-label="Enter Trns"
                  onClick={() => handleTRNS(rows[dataIndex])}
                >
                  <TrnsIcon />
                </IconButton>
              </div>
              <div align={'left'} className={classes.grdCellNone}>
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
      name: 'settleDate',
      label: 'Settle Date',
      type: columnType.date,
    },
    {
      name: 'symbol',
      label: 'Symbol',
    },
    {
      name: 'cusip',
      label: 'Cusip',
    },
    {
      name: 'symbolDescription',
      label: 'Symbol Description',
    },
    {
      name: 'delivererId',
      label: 'Deliver ID',
    },
    {
      name: 'delivererName',
      label: 'Deliver Name',
    },
    {
      name: 'houseQty',
      label: 'House Qty',
      type: columnType.quantity,
    },
    {
      name: 'radQty',
      label: 'RAD Qty',
      type: columnType.quantity,
    },
    {
      name: 'matchQty',
      label: 'Match Qty',
      type: columnType.quantity,
    },
    {
      name: 'unmatchedQty',
      label: 'Unmatch Qty',
      type: columnType.quantity,
    },
    {
      name: 'houseAmt',
      label: 'House Amount',
      type: columnType.amount,
    },
    {
      name: 'radAmt',
      label: 'RAD Amount',
      type: columnType.amount,
    },
    {
      name: 'matchAmt',
      label: 'Match Amount',
      type: columnType.amount,
    },
    {
      name: 'unmatchedAmt',
      label: 'Unmatch Amount',
      type: columnType.amount,
    },
    {
      name: 'status',
      label: 'Status',
    },
    {
      name: 'note',
      label: 'Note',
    },
    {
      name: 'age',
      label: 'Age',
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
    isRowSelectable: (dataIndex) => isUpdateEnabled(dataIndex),
    selectableRows: 'none',
    customToolbarSelect: (selectedRows, a, b) => {
      return (
        <div
          className={classes.grdRow}
          style={{ margin: 0, padding: 0, marginRight: 20 }}
        ></div>
      );
    },
    onRowSelectionChange: (_, selectedRows) => {
      console.log(selectedRows);
      handleSetSelectedIds(selectedRows);
    },
  };

  const isUpdateEnabled = (dataIndex) => {
    return rows[dataIndex].status !== 'made';
  };

  const handleTRNS = (data) => {
    if (!data) {
      //ADD default values
      data = {
        tradeDate: '',
        settleDate: '',
        submitterParticipantNo: '',
        settleType: '',
        execBroker: '',
        execBrokerNo: '',
        contraExecBroker: '',
        contraExecBrokerNo: '',
        cusip: '',
        currencyCode: 'usd',
        correspondent: '',
      };
    }

    setRowData(data);
    setTrns(true);
  };

  const handleOpen = (data) => {
    setRowData(data);
    setOpen(true);
  };

  // const handleClose = () => {
  //   setTrns(false);
  // };

  const handleEditClose = async (data) => {
    if (!data) {
      setOpen(false);
      return;
    }
    try {
      const resp = await updateUnmatchedReceived(data);
      const rowsCopy = [...rows];
      const index = rows.indexOf(rowData);
      rowsCopy[index].status = resp.unmatchedReceived.status;
      rowsCopy[index].note = resp.unmatchedReceived.note;
      setRows(rowsCopy);
      notifySuccess('Received record has been updated.');
      setOpen(false);
    } catch (error) {
      console.error(error);
      notifyError(error.message);
    }
  };

  const handleSearch = async () => {
    try {
      setLoading(true);
      QueryParam.set(searchData);
      const data = await listUnmatchedReceived(searchData);
      console.log(data);
      setRows(data.unmatchedReceivedList);
      notifyInfo(data.unmatchedReceivedList.length + ' search results.');
    } catch (error) {
      notifyError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (data) => {
    if (!data) {
      setTrns(false);
      return;
    }

    if (!data.accountNumber) {
      notifyError('Account No. is required.');
      return;
    }
    if (!data.contraAccount) {
      notifyError('Contra Account is required.');
      return;
    }
    if (!data.symbol) {
      notifyError('Symbol is required.');
      return;
    }
    if (!data.unmatchedQty) {
      notifyError('Quantity is required.');
      return;
    }
    if (!data.price) {
      notifyError('Price is required.');
      return;
    }

    console.log(data);

    data.entryType = 'FTR';

    let req = new Transaction();

    req.setEntryType(data.entryType);
    req.setCorrespondent(data.correspondent);
    req.setContraCorrespondent(data.contraCorrespondent);
    req.setAccountNo(data.accountNumber);
    req.setContraAccountNo(data.contraAccount);
    req.setSymbol(data.symbol);
    req.setQty(data.unmatchedQty);
    req.setPrice(data.price);
    req.setNetAmt(data.netAmt);
    req.setSettleDate(stringToProtoDate(data.settleDate));
    req.setDescription(data.description);
    req.setSubAccountNo(data.subAccountNo);
    req.setContraSubAccountNo(data.contraSubAccountNo);

    if (pendingTrnsId > 0) {
      req.setTrnsId(pendingTrnsId);
    }

    transactionClient.createTransaction(req, {}, (err, res) => {
      if (err) {
        notifyError(err.message);
        return;
      }

      const response = res.toObject();
      if (response.errorMessage === '') {
        setPendingTrnsId(0);
        notifySuccess('Transaction has been added.');
        setTrns(false);
      } else {
        setPendingTrnsId(response.trnsId);
        notifyError(
          response.status.charAt(0).toUpperCase() +
            response.status.slice(1) +
            '. ' +
            response.errorMessage +
            ' Transaction was saved in pending.'
        );
        setTrns(false);
      }
    });
  };

  const handleSetSelectedIds = (data) => {
    idsToUpdate.splice(0);
    rowsToUpdate.splice(0);
    for (var a = 0; a < data.length; a++) {
      idsToUpdate[a] = rows[data[a].dataIndex].openItemId;
      rowsToUpdate[a] = [data[a].dataIndex];
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

  return (
    <div className={classes.root}>
      <Box component="div" mt={5}>
        {showFilter ? (
          <div>
            <div className={classes.grdRow}>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <TextField
                  name="systemDate"
                  fullWidth
                  label="System Date"
                  type="date"
                  value={searchData.systemDate}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <TextField
                  name="settleDate"
                  fullWidth
                  label="Settle Date"
                  type="date"
                  value={searchData.settleDate}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                />
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
                <SelectCusip
                  freeSolo={true}
                  name="cusip"
                  label="Cusip"
                  value={searchData.cusip}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <TextField
                  name="deliverId"
                  fullWidth
                  label="Deliverer ID"
                  value={searchData.delivererId}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <TextField
                  name="deliverName"
                  fullWidth
                  label="Deliverer Name"
                  value={searchData.delivererName}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className={classes.grdCell1}>
                <InputLabel shrink>Unmatched</InputLabel>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="unmatched"
                      checked={searchData.unmatched}
                      onChange={handleChange}
                    />
                  }
                  label=""
                />
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
        <Table
          title="Received"
          data={rows}
          columns={columns}
          options={options}
        />
      </Box>
      {trns && (
        <ReceivedEnterTRNS
          onClose={handleSubmit}
          open={trns}
          value={rowData}
        ></ReceivedEnterTRNS>
      )}
      {open && (
        <ReceivedEditModal
          onClose={handleEditClose}
          open={open}
          value={rowData}
        ></ReceivedEditModal>
      )}
    </div>
  );
}
