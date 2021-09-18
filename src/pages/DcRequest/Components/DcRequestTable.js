import React, { useState, useEffect } from 'react';
import DcRequestModal from './DcRequestModal';
import DcRequestAddWallet from './DcRequestAddWallet';
import { Button, Box, IconButton, TextField } from '@material-ui/core';
import {
  notifySuccess,
  notifyInfo,
  notifyError,
} from 'components/Notification/Notification';
import { Add as AddIcon, Create as EditIcon } from '@material-ui/icons';
import SelectCorrespondent from '../../../components/AutoComplete/SelectCorrespondent';
import SelectAccountNo from '../../../components/AutoComplete/SelectAccountNo';
import SelectMasterAccountNo from '../../../components/AutoComplete/SelectMasterAccountNo';
import SelectSystemCode from 'components/Dropdown/SelectSystemCode';
import SearchButton from '../../../components/Button/Search';
import QueryParam from '../../../services/QueryParamService';

import { listDc } from '../../../services/DcRequestService';
import { createWallet } from '../../../services/WalletService';
import Table, { columnType } from 'components/Table/Table';
import { getSystemDate } from '../../../services/ProfileService';
import useStyles from '../../../styles';

export default function DcRequestTable() {
  const classes = useStyles();

  useEffect(
    () => {
      async function init() {
        const systemDate = await getSystemDate();
        const searchDataCopy = {
          ...searchData,
        };

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
        []);

  const options = {
    selectableRows: 'none',
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
              style={{
                margin: 0,
                padding: 0,
              }}
            >
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
      name: 'correspondent',
      label: 'Correspondent',
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
      name: 'broker',
      label: 'Broker',
    },
    {
      name: 'type',
      label: 'Type',
    },
    {
      name: 'amt',
      label: 'Amount',
    },
    {
      name: 'transferType',
      label: 'Transfer Type',
    },
    {
      name: 'referenceId',
      label: 'Reference ID',
    },
    {
      name: 'confirmationId',
      label: 'Confirmation ID',
    },
    {
      name: 'status',
      label: 'Status',
    },
    {
      name: 'publicDescription',
      label: 'Public Description',
    },
    {
      name: 'privateDescription',
      label: 'Private Description',
    },
    {
      name: 'internalId',
      label: 'Internal ID',
    },
    {
      name: 'createdBy',
      label: 'Created By',
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

  const [modalData, setModalData] = React.useState({});
  const [openAddWallet, setOpenAddWallet] = React.useState(false);
  const [rowData, setRowData] = React.useState({});
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [showFilter, setShowFilter] = React.useState(true);
  const [rows, setRows] = useState([]);
  const [searchData, setSearchData] = React.useState(
    QueryParam.get({
      correspondent: '',
      accountNo: '',
      masterAccountNo: '',
      transferType: '',
      status: '',
      fromDate: '',
      toDate: '',
    })
  );
  const [addWalletData] = React.useState({
    symbol: '',
    wallet: '',
    status: 'Pending Approval',
    note: '',
    accountNo: '',
    accountId: 0,
  });

  const handleChange = (e, x) => {
    const input = e.currentTarget.name ? e.currentTarget : e.target;

    setSearchData({
      ...searchData,
      [input.name]: input.value,
    });
  };

  const handleSearch = async (disableNotification) => {
    try {
      setLoading(true);
      QueryParam.set(searchData);
      const data = await listDc(searchData);
      setRows(data.dcRequestsList);
      if (disableNotification !== true) {
        notifyInfo(data.dcRequestsList.length + ' search results.');
      }
    } catch (error) {
      notifyError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleOpen = (data) => {
    if (!data) {
      // ADD default values
      data = {
        correspondent: '',
        accountNo: '',
        wallet: '',
        transferType: '',
        amt: '',
        status: 'Pending',
        referenceId: '',
        confirmationId: '',
        contraWalletId: '',
        walletId: '',
        internalId: '',
        publicDescription: '',
        privateDescription: '',
      };
    }

    setRowData(data);
    setOpen(true);
  };

  const handleClose = (resp, isEdit) => {
    if (!resp) {
      setOpen(false);
      return;
    }

    // If add wallet is clicked
    if (resp.isAddWallet) {
      // re-initialize isAddBank
      resp.isAddWallet = false;

      //backup the modal data
      setModalData(resp);

      //close modal
      setOpen(false);

      // open the add bank modal
      setOpenAddWallet(true);

      // If save is clicked, save the Digital Bank Request
    } else {
      if (isEdit) {
        const rowsCopy = [...rows];
        const index = rows.indexOf(rowData);
        rowsCopy[index] = resp.dcRequest;
        setRows(rowsCopy);
        notifySuccess('DcRequest has been updated.');
      } else {
        setRows([resp.dcRequest, ...rows]);
        notifySuccess('New DcRequest has been added.');
      }
      handleSearch(true);
      setOpen(false);
    }
  };

  const handleCloseAddWallet = async (data) => {
    // if close, is clicked
    if (!data) {
      setOpenAddWallet(false);
      setRowData(modalData);
      setOpen(true);
      return;
    }

    let valid = true;

    if (!data.symbol) {
      notifyError('Symbol is required.');
      valid = false;
    }
    if (!data.status) {
      notifyError('Status is required.');
      valid = false;
    }
    if (!data.wallet) {
      notifyError('Wallet is required.');
      valid = false;
    }
    if (!valid) {
      return;
    }

    try {
      //ADD
      const resp = await createWallet(data);
      notifySuccess('New Wallet has been added.');
      setOpenAddWallet(false);
      const copyModalData = {
        ...modalData,
        walletId:
          resp.wallet.status === 'Active'
            ? resp.wallet.walletId
            : modalData.walletId,
      };
      setRowData(copyModalData);
      setOpen(true);
    } catch (error) {
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
                  freeSolo={true}
                  required={false}
                  name="correspondent"
                  value={searchData.correspondent}
                  onChange={handleChange}
                ></SelectCorrespondent>
              </div>
            </div>
            <div className={classes.grdRow}>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectAccountNo
                  freeSolo={true}
                  required={false}
                  name="accountNo"
                  label="Account No"
                  value={searchData.accountNo}
                  correspondent={searchData.correspondent}
                  onChange={handleChange}
                ></SelectAccountNo>
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectMasterAccountNo
                  freeSolo={true}
                  required={false}
                  name="masterAccountNo"
                  label="Master Account No"
                  value={searchData.masterAccountNo}
                  onChange={handleChange}
                ></SelectMasterAccountNo>
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectSystemCode
                  name="transferType"
                  label="Transfer Type"
                  type="Transfer Type"
                  value={searchData.transferType}
                  onChange={handleChange}
                ></SelectSystemCode>
              </div>
              <div className={classes.grdCell1}>
                <SelectSystemCode
                  name="status"
                  label="Status"
                  type="Status"
                  subType="Bank Request"
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
          title="DIGITAL BANK REQUEST"
          data={rows}
          columns={columns}
          options={options}
        />
      </Box>
      {open && (
        <DcRequestModal
          onClose={handleClose}
          open={open}
          value={rowData}
        ></DcRequestModal>
      )}
      {openAddWallet && (
        <DcRequestAddWallet
          onClose={handleCloseAddWallet}
          open={openAddWallet}
          value={addWalletData}
        ></DcRequestAddWallet>
      )}
    </div>
  );
}
