import React, { useState, useEffect } from 'react';
import ACHWireDetailsModal from './ACHWireDetailsModal';
import BankAccountDetailsModal from '../../BankAccount/Components/BankAccountDetailsModal';
import { Button, Box, IconButton, TextField } from '@material-ui/core';
import {
  notifySuccess,
  notifyInfo,
  notifyError,
} from 'components/Notification/Notification';
import {
  Add as AddIcon,
  Create as EditIcon,
  CheckCircle as CheckCircleIcon,
} from '@material-ui/icons';
import SelectCorrespondent from '../../../components/AutoComplete/SelectCorrespondent';
import SelectAccountNo from '../../../components/AutoComplete/SelectAccountNo';
import SelectMasterAccountNo from '../../../components/AutoComplete/SelectMasterAccountNo';
import SelectSystemCode from '../../../components/Dropdown/SelectSystemCode';
import SearchButton from '../../../components/Button/Search';
import QueryParam from '../../../services/QueryParamService';
import { create, list, update } from '../../../services/ACHWireService';
import Table, { columnType } from 'components/Table/Table';
import { getSystemDate } from '../../../services/ProfileService';
import { createAccount } from '../../../services/BankAccountService';
import useStyles from '../../../styles';

export default function ACHWireTable() {
  const classes = useStyles();

  useEffect(
    () => {
      async function init() {
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
              style={{ margin: 0, padding: 0 }}
            >
              <div align={'left'} className={classes.grdCell1}>
                <IconButton
                  aria-label="edit"
                  disabled={rows[dataIndex].status === 'sent'}
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
      name: 'requestId',
      label: 'Request ID',
      options: {
        display: false,
      },
    },
    {
      name: 'correspondent',
      label: 'Correspondent',
    },
    {
      name: 'systemDate',
      label: 'System Date',
      type: columnType.date,
    },
    {
      name: 'accountId',
      label: 'Account ID',
      options: {
        display: false,
      },
    },
    {
      name: 'branch',
      label: 'Branch',
      options: {
        display: false,
      },
    },
    {
      name: 'accountNo',
      label: 'Account No',
      options: {
        display: false,
      },
    },
    {
      name: 'masterAccountNo',
      label: 'Master Account No',
    },
    {
      name: 'rep',
      label: 'Rep',
      options: {
        display: false,
      },
    },
    {
      name: 'bankId',
      label: 'Bank ID',
      options: {
        display: false,
      },
    },
    {
      name: 'bankAccountNo',
      label: 'Bank Account No',
      options: {
        display: false,
      },
    },
    {
      name: 'bankRoutingNo',
      label: 'Bank Routing No',
      options: {
        display: false,
      },
    },
    {
      name: 'bankName',
      label: 'Bank Name',
    },
    {
      name: 'requestType',
      label: 'Request Type',
    },
    {
      name: 'transferType',
      label: 'Transfer Type',
    },
    {
      name: 'amt',
      label: 'Amount',
      type: columnType.amount,
      options: {
        display: false,
      },
    },
    {
      name: 'fee',
      label: 'Fee',
      type: columnType.amount,
      options: {
        display: false,
      },
    },
    {
      name: 'fedNo',
      label: 'Fed No',
    },
    {
      name: 'externalId',
      label: 'External ID',
    },
    {
      name: 'bank',
      label: 'Bank',
    },
    {
      name: 'bankNote',
      label: 'Bank Note',
    },
    {
      name: 'internalNote',
      label: 'Internal Note',
      options: {
        display: false,
      },
    },
    {
      name: 'status',
      label: 'Status',
    },
    {
      name: 'createdBy',
      label: 'Created By',
      options: {
        display: false,
      },
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
      name: 'isInternational',
      label: 'Is International',
      options: {
        display: false,
        customBodyRenderLite: (dataIndex) => {
          return rows[dataIndex].isInternational ? <CheckCircleIcon /> : null;
        },
      },
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

  const [rowData, setRowData] = React.useState({});
  const [modalData, setModalData] = React.useState({});
  const [open, setOpen] = React.useState(false);
  const [openAddBank, setOpenAddBank] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [showFilter, setShowFilter] = React.useState(true);
  const [rows, setRows] = useState([]);
  const [searchData, setSearchData] = React.useState(
    QueryParam.get({
      fromDate: '',
      toDate: '',
      correspondent: '',
      accountNo: '',
      masterAccountNo: '',
      transferType: '',
      status: '',
      requestType: '',
      branch: '',
      rep: '',
    })
  );
  const [addBankData] = React.useState({
    correspondent: '',
    accountNo: '',
    bankOwnerName: '',
    bankName: '',
    achRoutingNo: '',
    wireRoutingNo: '',
    bankAccountNo: '',
    bankAddress: '',
    bankAccountType: '',
    approvedMethod: '',
    plaidAccessToken: '',
    status: 'Pending Approval',
    bankIdentifierCode: '',
    isInternational: false,
  });

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
      const data = await list(searchData);
      setRows(data.requestsList);
      notifyInfo(data.requestsList.length + ' search results.');
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
        correspondent: '',
        accountNo: '',
        bankId: '',
        externalId: '',
        amt: '',
        transferType: '',
        requestType: '',
        status: 'Pending',
        fee: '',
        fedNo: '',
        bankNote: '',
        bank: '',
        internalNote: '',
        // sendTo: 'BMO',
      };
    }

    setRowData(data);
    setOpen(true);
  };

  const handleClose = async (data, isEdit) => {
    // if close is clicked, close the modal
    if (!data) {
      setOpen(false);
      return;
    }

    // If add bank is clicked
    if (data.isAddBank) {
      // re-initialize isAddBank
      data.isAddBank = false;

      //backup the modal data
      setModalData(data);

      //close modal
      setOpen(false);

      // open the add bank modal
      setOpenAddBank(true);

      // If save is clicked, save the ACH/Wire entry
    } else {
      let valid = true;

      if (!data.correspondent) {
        notifyError('Correspondent is required.');
        valid = false;
      }
      if (!data.accountNo) {
        notifyError('Account No is required.');
        valid = false;
      }
      if (!data.bankId) {
        notifyError('Bank ID is required.');
        valid = false;
      }
      if (!data.bank) {
        notifyError('Bank is required.');
        valid = false;
      }
      if (!data.amt) {
        notifyError('Amount is required.');
        valid = false;
      } else if (Number(data.amt) === 0) {
        notifyError('Amount is invalid.');
        valid = false;
      }
      if (!data.fee) {
        notifyError('Fee is required.');
        valid = false;
      }
      if (!data.transferType) {
        notifyError('Transfer Type Account is required.');
        valid = false;
      } else {
        if (data.transferType === 'Withdrawal') {
          if (data.maximumWithdrawable.pendingCallLog > 0) {
            notifyError('Cannot withdraw with pending calls.');
            valid = false;
          } else if (
            Number(data.amt) > data.maximumWithdrawable.withdrawableAmount
          ) {
            notifyError('Amount is greater than Maximum Withdrawable.');
            valid = false;
          }
        }
      }
      if (!data.requestType) {
        notifyError('Request Type Account is required.');
        valid = false;
      }


      // if (!data.sendTo) {
      //   notifyError('Send To is required.');
      //   valid = false;
      // }

      if (!valid) {
        return;
      }

      try {
        if (isEdit) {
          //EDIT
          const resp = await update(data);
          const rowsCopy = [...rows];
          const index = rows.indexOf(rowData);
          rowsCopy[index] = resp.request;
          setRows(rowsCopy);
          notifySuccess('ACHWire has been updated.');
        } else {
          //ADD
          const resp = await create(data);
          setRows([resp.request, ...rows]);
          notifySuccess('New ACHWire has been added.');
        }
        setOpen(false);
      } catch (error) {
        console.error(error);
        notifyError(error.message);
      }
    }
  };

  const handleCloseAddBank = async (data) => {
    // if close, is clicked
    if (!data) {
      setOpenAddBank(false);
      setRowData(modalData);
      setOpen(true);
      return;
    }

    // If save is clicked
    let valid = true;

    if (!data.accountNo) {
      notifyError('Account No is required.');
      valid = false;
    }
    if (!data.correspondent) {
      notifyError('Correspondent is required.');
      valid = false;
    }
    if (!data.bankOwnerName) {
      notifyError('Bank Owner Name is required.');
      valid = false;
    }
    if (!data.bankName) {
      notifyError('Bank Name is required.');
      valid = false;
    }
    if (!data.achRoutingNo && !data.wireRoutingNo) {
      notifyError('ACH or Wire Routing No is required.');
      valid = false;
    }
    if ((data.wireRoutingNo || data.achRoutingNo) && !data.bankAddressId) {
      notifyError('Bank Address is required.');
      valid = false;
    }
    if (!data.bankAccountNo) {
      notifyError('Bank Account is required.');
      valid = false;
    }
    if (data.bankAccountNo.length < 8) {
      notifyError('Bank Account No min of 8 characters');
      valid = false;
    }
    if (!data.bankAccountType) {
      notifyError('Bank Account Type is required.');
      valid = false;
    }
    if (!data.approvedMethod) {
      notifyError('Approved Method is required.');
      valid = false;
    }
    if (!data.plaidAccessToken && data.approvedMethod === 'Plaid') {
      notifyError('Plaid Access Token is required.');
      valid = false;
    }
    if (!data.status) {
      notifyError('Status is required.');
      valid = false;
    }

    if (data.isInternational === true && data.bankIdentifierCode === '') {
      notifyError('Bank Identifier Code (BIC) is required.');
      valid = false;
    } else if (data.isInternational === false) {
      data.bankIdentifierCode = '';
    }

    if (typeof data.bankAddressId === 'object') {
      data.bankAddressId = data.bankAddressId.bankAddressId;
    }

    if (!valid) {
      return;
    }
    try {
      //ADD
      const resp = await createAccount(data);
      notifySuccess('New Bank Account has been added.');
      setOpenAddBank(false);
      const copyModalData = {
        ...modalData,
        accountNo:
          resp.bankAccount.status === 'Active'
            ? resp.bankAccount.accountNo
            : modalData.accountNo,
        bankId:
          resp.bankAccount.status === 'Active'
            ? resp.bankAccount.bankId
            : modalData.bankId,
        correspondent:
          resp.bankAccount.status === 'Active'
            ? resp.bankAccount.correspondent
            : modalData.correspondent,
        bank:
          resp.bankAccount.status === 'Active'
            ? resp.bankAccount.bankName
            : modalData.bank,
        isInternational:
          resp.bankAccount.status === 'Active'
            ? resp.bankAccount.isInternational
            : modalData.isInternational,
      };
      setRowData(copyModalData);
      setOpen(true);
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
                <TextField
                  fullWidth
                  name="fromDate"
                  label="From Date"
                  type="date"
                  value={searchData.fromDate}
                  onChange={handleChange}
                  inputProps={{ max: searchData.toDate }}
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
                  inputProps={{ min: searchData.fromDate }}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectCorrespondent
                  freeSolo={true}
                  name="correspondent"
                  value={searchData.correspondent}
                  onChange={handleChange}
                ></SelectCorrespondent>
              </div>
              <div className={classes.grdCell1}>
                <SelectAccountNo
                  freeSolo={true}
                  name="accountNo"
                  label="Account No"
                  value={searchData.accountNo}
                  correspondent={searchData.correspondent}
                  onChange={handleChange}
                ></SelectAccountNo>
              </div>
            </div>
            <div className={classes.grdRow}>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectMasterAccountNo
                  freeSolo={true}
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
                  type="Type"
                  subType="Transfer Type"
                  value={searchData.transferType}
                  onChange={handleChange}
                ></SelectSystemCode>
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectSystemCode
                  name="status"
                  label="Status"
                  type="Status"
                  subType="ACH/Wire"
                  value={searchData.status}
                  onChange={handleChange}
                ></SelectSystemCode>
              </div>
              <div className={classes.grdCell1}>
                <SelectSystemCode
                  name="requestType"
                  label="Request Type"
                  type="Type"
                  subType="Request Type"
                  value={searchData.requestType}
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
          title="ACH\WIRE"
          data={rows}
          columns={columns}
          options={options}
        />
      </Box>
      {open && (
        <ACHWireDetailsModal
          onClose={handleClose}
          open={open}
          value={rowData}
        ></ACHWireDetailsModal>
      )}

      {openAddBank && (
        <BankAccountDetailsModal
          onClose={handleCloseAddBank}
          open={openAddBank}
          value={addBankData}
        ></BankAccountDetailsModal>
      )}
    </div>
  );
}
