import React, { useState, useEffect } from 'react';
import BankAccountDetailsModal from './BankAccountDetailsModal';
import { Button, TextField, Box, IconButton } from '@material-ui/core';
import {
  notifySuccess,
  notifyInfo,
  notifyError,
} from 'components/Notification/Notification';
import { Add as AddIcon, Create as EditIcon } from '@material-ui/icons';
import QueryParam from '../../../services/QueryParamService';
import SelectCorrespondent from '../../../components/AutoComplete/SelectCorrespondent';
import SelectAccountNo from '../../../components/AutoComplete/SelectAccountNo';
import SelectMasterAccountNo from '../../../components/AutoComplete/SelectMasterAccountNo';
import SelectSystemCode from '../../../components/Dropdown/SelectSystemCode';
import SearchButton from '../../../components/Button/Search';
import { getSystemDate } from '../../../services/ProfileService';
import Table, { columnType } from 'components/Table/Table';
import {
  createAccount,
  updateAccount,
  listAccount,
} from '../../../services/BankAccountService';
import { readBankAddress } from '../../../services/BankAddressService';
import useStyles from '../../../styles';

export default function BankAccountTable() {
  const classes = useStyles();

  useEffect(
    () => {
      async function init() {
        const systemDate = await getSystemDate();
        const searchDataCopy = { ...searchData };

        if (!searchData.fromSystemDate) {
          searchDataCopy.fromSystemDate = systemDate;
        }

        if (!searchData.toSystemDate) {
          searchDataCopy.toSystemDate = systemDate;
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
      name: 'masterAccountNo',
      label: 'Master Account No',
    },
    {
      name: 'accountNo',
      label: 'Account No',
    },
    {
      name: 'bankOwnerName',
      label: 'Bank Owner Name',
    },
    {
      name: 'bankName',
      label: 'Bank Name',
      options: {
        display: false,
      },
    },
    {
      name: 'achRoutingNo',
      label: 'Ach Routing No',
      options: {
        display: false,
      },
    },
    {
      name: 'wireRoutingNo',
      label: 'Wire Routing No',
      options: {
        display: false,
      },
    },
    {
      name: 'bankAccountNo',
      label: 'Bank Account No',
    },
    {
      name: 'bankAccountType',
      label: 'Bank Account Type',
    },
    {
      name: 'approvedMethod',
      label: 'Approved Method',
    },
    {
      name: 'plaidAccessToken',
      label: 'Plaid Access Token',
    },
    {
      name: 'status',
      label: 'Status',
    },
    {
      name: 'createdAt',
      label: 'Created At',
      type: columnType.dateTime,
    },
    {
      name: 'createdBy',
      label: 'Created By',
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
      name: 'bankIdentifierCode',
      label: 'BIC',
      options: {
        display: false,
      },
    },
    {
      name: 'glAccountNo',
      label: 'GL Account No',
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
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [showFilter, setShowFilter] = React.useState(true);
  const [rows, setRows] = useState([]);
  const [searchData, setSearchData] = React.useState(
    QueryParam.get({
      correspondent: '',
      accountNo: '',
      masterAccountNo: '',
      achRoutingNo: '',
      bankName: '',
      bankAccountNo: '',
      bankOwnerName: '',
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
      const data = await listAccount(searchData);
      setRows(data.bankAccountsList);
      notifyInfo(data.bankAccountsList.length + ' search results.');
    } catch (error) {
      console.error(error);
      notifyError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleOpen = async (data) => {
    if (!data) {
      //ADD default values
      data = {
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
      };
    } else {
      data.isInternational = data.bankIdentifierCode ? true : false;

      //read address
      const res = await readBankAddress(data.bankAddressId);
      data.bankAddressId = res;
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
      if (isEdit) {
        //EDIT
        const resp = await updateAccount(data);
        const rowsCopy = [...rows];
        const index = rows.indexOf(rowData);
        rowsCopy[index] = resp.bankAccount;
        setRows(rowsCopy);
        notifySuccess('Bank Account has been updated.');
      } else {
        //ADD
        const resp = await createAccount(data);
        setRows([resp.bankAccount, ...rows]);
        notifySuccess('New Bank Account has been added.');
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
                <SelectCorrespondent
                  freeSolo={true}
                  name="correspondent"
                  value={searchData.correspondent}
                  onChange={handleChange}
                ></SelectCorrespondent>
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectAccountNo
                  freeSolo={true}
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
              <div className={classes.grdCell1}>
                <TextField
                  fullWidth
                  name="achRoutingNo"
                  label="ACH Routing No"
                  value={searchData.achRoutingNo}
                  onChange={handleChange}
                  inputProps={{ maxLength: 10 }}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
            </div>
            <div className={classes.grdRow}>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <TextField
                  fullWidth
                  name="bankName"
                  label="Bank Name"
                  value={searchData.bankName}
                  onChange={handleChange}
                  inputProps={{ maxLength: 300 }}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <TextField
                  fullWidth
                  name="bankAccountNo"
                  label="Bank Account No"
                  value={searchData.bankAccountNo}
                  onChange={handleChange}
                  inputProps={{ maxLength: 50 }}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <TextField
                  fullWidth
                  name="bankOwnerName"
                  label="Bank Owner Name"
                  value={searchData.bankOwnerName}
                  onChange={handleChange}
                  inputProps={{ maxLength: 300 }}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className={classes.grdCell1}>
                <SelectSystemCode
                  name="status"
                  label="Status"
                  type="Status"
                  subType="Bank Account"
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
          title="BANK ACCOUNTS"
          data={rows}
          columns={columns}
          options={options}
        />
      </Box>
      {open && (
        <BankAccountDetailsModal
          onClose={handleClose}
          open={open}
          value={rowData}
        ></BankAccountDetailsModal>
      )}
    </div>
  );
}
