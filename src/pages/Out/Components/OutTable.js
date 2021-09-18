import React, { useState, useEffect } from 'react';
import {
  Button,
  Box,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Tooltip,
  IconButton,
} from '@material-ui/core';
import {
  notifyInfo,
  notifyError,
  notifyWarning,
} from 'components/Notification/Notification';
import Table, { columnType } from 'components/Table/Table';
import {
  CompareArrowsRounded as CancelAndCorrectIcon,
  GetAppRounded as DownloadIcon,
  Block as CancelIcon,
} from '@material-ui/icons';
import SelectAccountNo from '../../../components/AutoComplete/SelectAccountNo';
import SelectMasterAccountNo from '../../../components/AutoComplete/SelectMasterAccountNo';
import SelectAccountName from '../../../components/AutoComplete/SelectAccountName';
import SelectSymbol from '../../../components/AutoComplete/SelectSymbol';

import SelectCusip from '../../../components/AutoComplete/SelectCusip';
import QueryParam from '../../../services/QueryParamService';
import SearchButton from '../../../components/Button/Search';
import useStyles from '../../../styles';
import {
  getSystemDate,
  getParticipationNo,
} from '../../../services/ProfileService';
import { listOutgoing } from '../../../services/OutgoingService';
import OutgoingModal from './OutgoingModal';
import OutgoingRejectModal from './OutgoingRejectModal';
export default function OutTable({ params }) {
  const classes = useStyles();

  const options = {
    selectableRows: 'mulitple',
    customToolbarSelect: (selectedRows, a, b) => {
      return (
        <div
          className={classes.grdRow}
          style={{ margin: 0, padding: 0, marginRight: 20 }}
        >
          <div align={'left'} className={classes.grdCell1}>
            <Tooltip title="Download" arrow>
              <div>
                <IconButton
                  id="icnTransfer"
                  aria-label="transfer"
                  onClick={() => {
                    handleTransfer(selectedRows.data);
                  }}
                >
                  <DownloadIcon />
                </IconButton>
              </div>
            </Tooltip>
          </div>
          <div align={'left'} className={classes.grdCell1}>
            <Tooltip title="Reject" arrow>
              <div>
                <IconButton
                  aria-label="reject"
                  onClick={() => {
                    handleReject(selectedRows.data);
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

  useEffect(
    () => {
      async function init() {
        if (searchData.systemDate) return;

        const systemDate = await getSystemDate();
        const partno = await getParticipationNo();
        setParticipantNo(partno);
        setSearchData({ ...searchData, systemDate: systemDate });
      }

      init();
    },
    // eslint-disable-next-line
    []
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
            ></div>
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
      name: 'accountNo',
      label: 'Account No',
    },
    {
      name: 'accountName',
      label: 'Account Name',
    },
    {
      name: 'masterAccountNo',
      label: 'Master Account No',
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
    },
    {
      name: 'originalCusip',
      label: 'Original Cusip',
      options: {
        display: false,
      },
    },
    {
      name: 'houseQty',
      label: 'House Qty',
      type: columnType.quantity,
      addFooter: true,
    },
    {
      name: 'houseCostBasis',
      label: 'House Cost Basis',
      type: columnType.amount,
      addFooter: true,
    },
    {
      name: 'requestQty',
      label: 'Request Qty',
      type: columnType.quantity,
      addFooter: true,
    },
    {
      name: 'requestCostBasis',
      label: 'Request Cost Basis',
      type: columnType.amount,
      addFooter: true,
    },
    {
      name: 'status',
      label: 'Status',
    },
    {
      name: 'acatsControlNumber',
      label: 'ACATS Control',
      options: {
        display: false,
      },
    },
    {
      name: 'houseNote',
      label: 'House Note',
    },
    {
      name: 'transferType',
      label: 'Transfer Type',
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
  const [rowRejectData, setRowRejectData] = React.useState({});
  const [participantNo, setParticipantNo] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const [openReject, setOpenReject] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [showFilter, setShowFilter] = React.useState(true);
  const [rows, setRows] = useState([]);
  const [searchData, setSearchData] = React.useState(
    QueryParam.get({
      correspondent: '',
      accountNo: '',
      accountName: '',
      masterAccountNo: '',
      systemDate: '',
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
      const data = await listOutgoing(searchData);
      setRows(data.outgoingList);
      notifyInfo(data.outgoingList.length + ' search results.');
    } catch (error) {
      notifyError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleTransfer = (selected) => {
    let idsToTransfer = [];
    let cusipToTransfer = [];

    for (const s of selected) {
      idsToTransfer.push(rows[s.dataIndex].accountId);
      cusipToTransfer.push(rows[s.dataIndex].cusip);
    }

    handleOpen(idsToTransfer, cusipToTransfer);
  };

  const handleReject = (selected) => {
    let idsToTransfer = [];
    let cusipToTransfer = [];

    for (const s of selected) {
      idsToTransfer.push(rows[s.dataIndex].accountId);
      cusipToTransfer.push(rows[s.dataIndex].cusip);
    }

    handleRejectOpen(idsToTransfer, cusipToTransfer);
  };

  const handleOpen = (accountIds, cusips) => {
    setRowData({
      submittingParticipantNo: participantNo,
      originalReceiverNo: participantNo,
      originalDelivererNo: '',
      accountIds: accountIds,
      cusips: cusips,
      systemDate: searchData.systemDate,
    });

    setOpen(true);
  };

  const handleRejectOpen = (accountIds, cusips) => {
    setRowRejectData({
      accountIds: accountIds,
      cusips: cusips,
      reason: '',
    });

    setOpenReject(true);
  };

  const handleClose = async (data) => {
    if (!data) {
      handleSearch(false);
      setOpen(false);
      return;
    }
  };

  const handleRejectClose = async (data) => {
    if (!data) {
      handleSearch(false);
      setOpenReject(false);
      return;
    }
  };

  return (
    <div className={classes.root}>
      <Box component="div" mt={5}>
        {showFilter ? (
          <div>
            <div className={classes.grdRow}>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
               
              </div>
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
                <SelectAccountName
                  freeSolo={true}
                  required={false}
                  label="Account Name"
                  name="accountName"
                  value={searchData.accountName}
                  onChange={handleChange}
                ></SelectAccountName>
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectMasterAccountNo
                  freeSolo={true}
                  required={false}
                  name="masterAccountNo"
                  label="Master Account No"
                  value={searchData.masterAccountNo}
                  correspondent={searchData.correspondent}
                  onChange={handleChange}
                  type="" //client or gl
                ></SelectMasterAccountNo>
              </div>
            </div>
            <div className={classes.grdRow}>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <InputLabel shrink>Broker</InputLabel>
                <Select
                  fullWidth
                  value={searchData.broker}
                  onChange={handleChange}
                  name="broker"
                >
                  <MenuItem value="">
                    <em>Blank</em>
                  </MenuItem>
                  <MenuItem value="broker_dealer">Broker Dealer</MenuItem>
                  <MenuItem value="non_broker_dealer">
                    Non Broker Dealer
                  </MenuItem>
                </Select>
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
                  name="systemDate"
                  fullWidth
                  label="System Date"
                  value={searchData.systemDate}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
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
          <div className={classes.grdCellNone} style={{ marginRight: 10 }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              startIcon={<DownloadIcon />}
              onClick={() => {
                try {
                  document.getElementById('icnTransfer').click();
                } catch (error) {
                  notifyWarning('No selected data to download.');
                }
              }}
            >
              Download
            </Button>
          </div>
        </div>
      </Box>
      <Box component="div" mt={2}>
        <Table
          title={'ACATS Out'}
          data={rows}
          columns={columns}
          options={options}
        />
      </Box>
      {open && (
        <OutgoingModal
          onClose={handleClose}
          open={open}
          value={rowData}
        ></OutgoingModal>
      )}
      {openReject && (
        <OutgoingRejectModal
          onClose={handleRejectClose}
          open={openReject}
          value={rowRejectData}
        ></OutgoingRejectModal>
      )}
    </div>
  );
}
