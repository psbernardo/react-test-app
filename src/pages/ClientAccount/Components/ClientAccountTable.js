import React, { useState, useEffect } from 'react';
import ClientAccountModal from './ClientAccountModal';
import ClientAccountUploadModal from './ClientAccountUploadModal';
import { Button, Box, IconButton, CircularProgress } from '@material-ui/core';
import { useConfirm } from 'material-ui-confirm';
import {
  notifySuccess,
  notifyInfo,
  notifyError,
} from 'components/Notification/Notification';
import {
  Add as AddIcon,
  Create as EditIcon,
  Delete as DeleteIcon,
  AssignmentReturn as ImportIcon,
  CheckCircle as CheckCircleIcon,
  AttachFile as AttachFileIcon,
} from '@material-ui/icons';
import QueryParam from '../../../services/QueryParamService';
import SelectCorrespondent from '../../../components/AutoComplete/SelectCorrespondent';
import SelectAccountNo from '../../../components/AutoComplete/SelectAccountNo';
import SelectMasterAccountNo from '../../../components/AutoComplete/SelectMasterAccountNo';
import SelectAccountName from '../../../components/AutoComplete/SelectAccountName';
import SelectSystemCode from '../../../components/Dropdown/SelectSystemCode';
import SelectBranch from '../../../components/AutoComplete/SelectBranch';
import SelectRep from '../../../components/AutoComplete/SelectRep';
import SearchButton from '../../../components/Button/Search';
import { lazyCorrespondent } from '../../../services/CommonService';
import SelectValidationStatus from '../../../components/Dropdown/SelectValidationStatus';

import {
  createClient,
  listClient,
  updateClient,
  deleteClient,
  getNewClientId,
  importClear,
  importDelete,
  importProcess,
  attachFiles,
  importFilter,
} from '../../../services/ClientAccountService';

import Table, { columnType } from 'components/Table/Table';
import useStyles from '../../../styles';

export default function ClientAccountTable({ importMode: isImport }) {
  useEffect(() => {
    try {
      if (isImport == undefined || isImport == false) {
        isImport = false;
      } else {
        isImport = true;
      }

      if (isImport) {
        setShowFilter(false);
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  const classes = useStyles();
  const confirm = useConfirm();

  const isDeleteEnalbed = (dataIndex) => {
    return rows[dataIndex].status !== 'Disabled';
  };

  const [rowData, setRowData] = React.useState({});
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = useState({
    execute: false,
    import: false,
    clear: false,
    search: false,
  });
  const [showFilter, setShowFilter] = React.useState(true);
  const [rows, setRows] = useState([]);
  const [validation, setValidation] = React.useState({});
  const [batchNo, setBatchNo] = React.useState('');
  const [validationStatus, setValidationSatus] = React.useState('');
  const [searchData, setSearchData] = React.useState(
    QueryParam.get({
      correspondent: '',
      accountNo: '',
      masterAccountNo: '',
      accountName: '',
      broker: '',
      status: '',
      taxCountry: '',
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
      const data = await listClient(searchData);
      setRows(data.clientsList);
      notifyInfo(data.clientsList.length + ' search results.');
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
      messageKey =
        rows[rowsToDelete[0].dataIndex].correspondent +
        '-' +
        rows[rowsToDelete[0].dataIndex].accountNo;
    } else {
      messageKey = rowsToDelete.length + ' items';
    }

    confirm({
      description:
        "You are about to disable '" +
        messageKey +
        "'. Please confirm your action.",
      confirmationText: 'Yes, disable',
    })
      .then(async () => {
        const rowsCopy = [...rows];
        try {
          for (const r of rowsToDelete) {
            const index = r.dataIndex;
            const { client } = await deleteClient(rows[index].accountId);
            rowsCopy[index] = client;
          }
          notifySuccess(messageKey + 'Client Account has been disabled');
        } catch (error) {
          notifyError(error.message);
        } finally {
          setRows(rowsCopy);
        }
      })
      .catch(() => {});
  };

  const handleOpen = async (data) => {
    if (!data) {
      //ADD default values
      try {
        const { accountId } = await getNewClientId();

        data = {
          action: 'add',
          accountId: accountId,
        };
      } catch (error) {
        notifyError(error.message);
      }
    }

    setRowData(data);
    setOpen(true);
  };

  const handleClose = async (data, isEdit) => {
    if (!data) {
      setOpen(false);
      setValidation({});
      return;
    }

    let valid = true;

    setValidation({
      correspondent: !data.correspondent || data.correspondent.length !== 4,
      accountNo: !data.accountNo,
      accountName: !data.accountName,
      broker: !data.broker,
      legalEntity: !data.legalEntity,
      accountType: !data.accountType,
      marginType: !data.marginType,
      privacyContent: !data.privacyContent,
      tefra: !data.tefra,
      investmentObjectiveCode: !data.investmentObjectiveCode,
      taxCountry: !data.taxCountry,
      w8w9: !data.w8w9,
      investmentObjectiveDate: !data.investmentObjectiveDate,
      activatedAt: !data.activatedAt,
      status: !data.status,
      stockOwnership: data.ownership == true ? !data.stockOwnership : false,
      brokerName: data.brokerMember == true ? !data.brokerName : false,
      affiliatePerson:
        data.brokerMember == true ? !data.affiliatePerson : false,
      affiliatePersonPosition:
        data.brokerMember == true ? !data.affiliatePersonPosition : false,
    });

    if (!data.correspondent || data.correspondent.length !== 4) {
      notifyError('Correspondent should have 4 characters.');
      valid = false;
    }
    if (!data.accountNo) {
      notifyError('Account No is required.');
      valid = false;
    }
    if (!data.accountName) {
      notifyError('Account name is required.');
      valid = false;
    }
    if (!data.broker) {
      notifyError('Broker is required.');
      valid = false;
    }
    if (!data.legalEntity) {
      notifyError('Legal entity is required.');
      valid = false;
    }
    if (!data.accountType) {
      notifyError('Account type is required.');
      valid = false;
    }
    if (!data.marginType) {
      notifyError('Margin type is required.');
      valid = false;
    }
    if (!data.privacyContent) {
      notifyError('Privacy Consent is required.');
      valid = false;
    }
    if (!data.tefra) {
      notifyError('Tefra is required.');
      valid = false;
    }
    if (!data.investmentObjectiveCode) {
      notifyError('Investment Objective Code is required.');
      valid = false;
    }
    if (!data.taxCountry) {
      notifyError('Tax Country is required.');
      valid = false;
    }
    if (!data.w8w9) {
      notifyError('W8W9 is required.');
      valid = false;
    }
    if (!data.investmentObjectiveDate) {
      notifyError('Investment Objective Date is required.');
      valid = false;
    }
    if (!data.activatedAt) {
      notifyError('Activated At is required.');
      valid = false;
    }
    if (!data.status) {
      notifyError('Status is required.');
      valid = false;
    }

    if (data.ownership === true) {
      if (!data.stockOwnership) {
        notifyError('Stock Symbol is required.');
        valid = false;
      }
    }

    if (data.brokerMember === true) {
      if (!data.brokerName) {
        notifyError('Company Name is required.');
        valid = false;
      }

      if (!data.affiliatePerson) {
        notifyError('Person Affiliated is required.');
        valid = false;
      }

      if (!data.affiliatePersonPosition) {
        notifyError('Position of Affiliated Person is required.');
        valid = false;
      }
    }

    if (!valid) {
      return;
    }

    try {
      if (isEdit) {
        //EDIT
        const resp = await updateClient(data);
        const rowsCopy = [...rows];
        const index = rows.indexOf(rowData);
        rowsCopy[index] = resp.client;
        setRows(rowsCopy);
        notifySuccess('Client Account has been updated.');
      } else {
        //ADD
        const resp = await createClient(data);
        setRows([resp.client, ...rows]);
        notifySuccess('New Client Account has been added.');

        //reload new correspondent in the dropdown
        lazyCorrespondent(data.correspondent);
      }

      setValidation({});
      setOpen(false);
    } catch (error) {
      notifyError(error.message);
    }
  };

  const [openImport, setOpenImport] = React.useState(false);

  const handleUploadClose = async () => {
    setOpenImport(false);
  };

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
                    isImport
                      ? handleImportDelete([
                          {
                            dataIndex: dataIndex,
                          },
                        ])
                      : handleDelete([
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
      name: 'validationStatus',
      label: 'Validation Status',
      options: {
        display: !!isImport,
        customBodyRenderLite: (dataIndex) => {
          const v = rows[dataIndex].validationStatus;

          return (
            <div className={v === 'Failed' ? classes.errBadge : null}>{v}</div>
          );
        },
      },
    },
    {
      name: 'errorMessage',
      label: 'Error Message',
      options: {
        display: !!isImport,
      },
    },
    {
      name: 'correspondent',
      label: 'Correspondent',
      type: columnType.text,
    },
    {
      name: 'accountName',
      label: 'Account Name',
      type: columnType.text,
    },
    {
      name: 'accountNo',
      label: 'Account No',
      type: columnType.text,
    },
    {
      name: 'subAccounts',
      label: 'Sub Account No',
      options: {
        customBodyRenderLite: (dataIndex) => {
          const data = rows[dataIndex].subAccounts.split(',');
          return data.map((d, index) => <div key={index}>{d}</div>);
        },
      },
    },
    {
      name: 'masterAccountNo',
      label: 'Master Account No',
      type: columnType.text,
    },
    {
      name: 'status',
      label: 'Status',
      type: columnType.text,
    },
    {
      name: 'activatedAt',
      label: 'Activated At',
      type: columnType.dateTime,
      options: {
        display: false,
      },
    },
    {
      name: 'disabledAt',
      label: 'Disabled At',
      type: columnType.dateTime,
      options: {
        display: false,
      },
    },
    {
      name: 'broker',
      label: 'Broker',
      type: columnType.text,
    },
    {
      name: 'privacyContent',
      label: 'Privacy Consent',
    },
    {
      name: 'investmentObjectiveDate',
      label: 'Investment Objective Date',
      type: columnType.date,
      options: {
        display: false,
      },
    },
    {
      name: 'w8w9ReceivedDate',
      label: 'W8W9 Received Date',
      type: columnType.date,
      options: {
        display: false,
      },
    },
    {
      name: 'dayTrader',
      label: 'Day Trader',
      options: {
        display: false,
        customBodyRenderLite: (dataIndex) => {
          return rows[dataIndex].dayTrader ? <CheckCircleIcon /> : null;
        },
      },
    },
    {
      name: 'multiplier',
      label: 'Multiplier',
      type: columnType.quantity,
      options: {
        display: false,
      },
    },
    {
      name: 'investmentObjectiveCode',
      label: 'Investment Objective Code',
      options: {
        display: false,
      },
      type: columnType.text,
    },
    {
      name: 'legalEntity',
      label: 'Legal Entity',
      options: {
        display: false,
      },
      type: columnType.text,
    },
    {
      name: 'taxCountry',
      label: 'Tax Country',
      options: {
        display: false,
      },
      type: columnType.text,
    },
    {
      name: 'commonId',
      label: 'Common ID',
      options: {
        display: false,
      },
      type: columnType.text,
    },
    {
      name: 'w8w9',
      label: 'W8W9',
      type: columnType.text,
      options: {
        display: false,
      },
    },
    {
      name: 'tefra',
      label: 'TEFRA',
      type: columnType.text,
      options: {
        display: false,
      },
    },
    {
      name: 'createdBy',
      label: 'Created By',
      type: columnType.text,
    },
    {
      name: 'accreditedInvestor',
      label: 'Accredited Investor',
      options: {
        display: false,
        customBodyRenderLite: (dataIndex) => {
          return rows[dataIndex].accreditedInvestor ? (
            <CheckCircleIcon />
          ) : null;
        },
      },
      type: columnType.text,
    },
    {
      name: 'fdidFlag',
      label: 'FDID Flag',
      options: {
        display: false,
        customBodyRenderLite: (dataIndex) => {
          return rows[dataIndex].fdidFlag ? <CheckCircleIcon /> : null;
        },
      },
      type: columnType.text,
    },
    {
      name: 'fdid',
      label: 'FDID',
      options: {
        display: false,
      },
      type: columnType.text,
    },
    {
      name: 'fdidEndReason',
      label: 'FDID End Reason',
      options: {
        display: false,
      },
      type: columnType.text,
    },
    {
      name: 'beneficiary',
      label: 'Beneficiary',
      type: columnType.text,
    },
    {
      name: 'branch',
      label: 'Branch',
      type: columnType.text,
    },
    {
      name: 'rep',
      label: 'Rep',
      type: columnType.text,
    },
    {
      name: 'accountType',
      label: 'Account Type',
      type: columnType.text,
    },
    {
      name: 'marginType',
      label: 'Margin Type',
      type: columnType.text,
    },
    {
      name: 'fpslParticipant',
      label: 'FPSL Participant',
      options: {
        display: false,
        customBodyRenderLite: (dataIndex) => {
          return rows[dataIndex].fpslParticipant ? <CheckCircleIcon /> : null;
        },
      },
    },
    {
      name: 'largeTraderId',
      label: 'Large Trader ID',
      type: columnType.text,
    },
    {
      name: 'statusReason',
      label: 'Status Reason',
      type: columnType.text,
      options: {
        display: false,
      },
    },
    {
      name: 'subType',
      label: 'Sub Type',
      type: columnType.text,
      options: {
        display: false,
      },
    },
    {
      name: 'allowLiquidInvestment',
      label: 'Liquid Investment',
      options: {
        display: false,
        customBodyRenderLite: (dataIndex) => {
          return rows[dataIndex].allowLiquidInvestment ? (
            <CheckCircleIcon />
          ) : null;
        },
      },
    },
    {
      name: 'webTermConditions',
      label: 'Web Term Conditions',
      type: columnType.dateTime,
      options: {
        display: false,
      },
    },
    {
      name: 'disclosureStatement',
      label: 'Disclosure Statement',
      type: columnType.dateTime,
      options: {
        display: false,
      },
    },
    {
      name: 'feeSchedule',
      label: 'Fee Schedule',
      type: columnType.dateTime,
      options: {
        display: false,
      },
    },
    {
      name: 'ownership',
      label: 'Ownership',
      options: {
        display: false,
        customBodyRenderLite: (dataIndex) => {
          return rows[dataIndex].ownership ? <CheckCircleIcon /> : null;
        },
      },
    },
    {
      name: 'stockOwnership',
      label: 'Stock Ownership',
      type: columnType.text,
      options: {
        display: false,
      },
    },
    {
      name: 'brokerMember',
      label: 'Broker Member',
      options: {
        display: false,
        customBodyRenderLite: (dataIndex) => {
          return rows[dataIndex].brokerMember ? <CheckCircleIcon /> : null;
        },
      },
    },
    {
      name: 'brokerName',
      label: 'Broker Name',
      type: columnType.text,
      options: {
        display: false,
      },
    },
    {
      name: 'affiliatePerson',
      label: 'Affliated Person',
      type: columnType.text,
      options: {
        display: false,
      },
    },
    {
      name: 'affiliatePersonPosition',
      label: 'Affiliated Person Position',
      type: columnType.text,
      options: {
        display: false,
      },
    },
    {
      name: 'marginDisclosure',
      label: 'Margin Disclosure',
      options: {
        display: false,
        customBodyRenderLite: (dataIndex) => {
          return rows[dataIndex].marginDisclosure ? <CheckCircleIcon /> : null;
        },
      },
    },
    {
      name: 'marginAgreement',
      label: 'Margin Agreement',
      options: {
        display: false,
        customBodyRenderLite: (dataIndex) => {
          return rows[dataIndex].marginAgreement ? <CheckCircleIcon /> : null;
        },
      },
    },
    {
      name: 'stocks',
      label: 'Stocks',
      options: {
        display: false,
        customBodyRenderLite: (dataIndex) => {
          return rows[dataIndex].stocks ? <CheckCircleIcon /> : null;
        },
      },
    },
    {
      name: 'eft',
      label: 'EFT',
      options: {
        display: false,
        customBodyRenderLite: (dataIndex) => {
          return rows[dataIndex].eft ? <CheckCircleIcon /> : null;
        },
      },
    },
    {
      name: 'option',
      label: 'Option',
      options: {
        display: false,
        customBodyRenderLite: (dataIndex) => {
          return rows[dataIndex].option ? <CheckCircleIcon /> : null;
        },
      },
    },
    {
      name: 'annualIncome',
      label: 'Annual Income',
      type: columnType.text,
      options: {
        display: false,
      },
    },
    {
      name: 'liquidNetWorth',
      label: 'Liquid Net Worth',
      type: columnType.text,
      options: {
        display: false,
      },
    },
    {
      name: 'sourceOfFunds',
      label: 'Source of Funds',
      type: columnType.text,
      options: {
        display: false,
      },
    },
    {
      name: 'signed',
      label: 'Signed',
      options: {
        display: false,
        customBodyRenderLite: (dataIndex) => {
          return rows[dataIndex].signed ? <CheckCircleIcon /> : null;
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

  // FOR IMPORT

  const handleAttachFile = async (file) => {
    if (!file) {
      return;
    }
    setLoading({ import: true });
    try {
      const data = await attachFiles(file);

      setRows(data.clientsList);
      setBatchNo(data.batchNo);
      notifySuccess('File has been uploaded');
    } catch (error) {
      notifyError(error.message);
    }
    setLoading({ import: false });
  };

  const handleExecution = async () => {
    setLoading({ execute: true });
    try {
      const rowsCopy = [...rows];

      await importProcess(batchNo);
      setRows([]);
      setBatchNo('');
      notifySuccess(rowsCopy.length + ' New Client Accounts has been added');
    } catch (error) {
      notifyError(error.message);
    }
    setLoading({ execute: false });
  };

  //Handles Clear All Event
  const handleClear = async () => {
    setLoading({ clear: true });
    try {
      await importClear(batchNo);
      setRows([]);
      notifySuccess('Import Data Cleared');
    } catch (error) {
      notifyError(error.message);
    }
    setLoading({ clear: false });
  };

  const handleToggle = async (e) => {
    const input = e.currentTarget.name ? e.currentTarget : e.target;

    try {
      const data = await importFilter(batchNo, input.value);
      setRows(data.clientsList);

      notifySuccess('Loading All ' + input.value + ' Import Data Cleared');
    } catch (error) {
      notifyError(error.message);
    }
    setValidationSatus(input.value);
  };

  //Handle delete event for account client
  const handleImportDelete = (rowsToDelete) => {
    let messageKey = '';
    let idsToDelete = [];
    if (rowsToDelete.length === 1) {
      messageKey = 'Account ID : ' + rows[rowsToDelete[0].dataIndex].accountId;
    } else {
      messageKey = rowsToDelete.length + ' items';
    }
    confirm({
      description:
        "You are about to delete '" +
        messageKey +
        "'. Please confirm your action.",
      confirmationText: 'Yes, delete',
    }).then(async () => {
      try {
        for (const r of rowsToDelete) {
          const index = r.dataIndex;
          await importDelete(rows[index].accountId);
          idsToDelete.push(rows[index].accountId);
        }
      } catch (error) {
        console.error(error);
        notifyError(error.message);
      } finally {
        const filtered = rows.filter((r) => !idsToDelete.includes(r.accountId));
        setRows(filtered);
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
              <div className={classes.grdCell1}>
                <SelectMasterAccountNo
                  required={false}
                  name="masterAccountNo"
                  label="Master Account No"
                  value={searchData.masterAccountNo}
                  // correspondent={searchData.correspondent}
                  onChange={handleChange}
                  type="" //client or gl
                ></SelectMasterAccountNo>
              </div>
            </div>
            <div className={classes.grdRow}>
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
                <SelectSystemCode
                  name="broker"
                  label="Broker"
                  type="Broker"
                  value={searchData.broker}
                  onChange={handleChange}
                ></SelectSystemCode>
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

        {!isImport ? (
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
            <div className={classes.grdCell1}>
              <SearchButton
                onClick={handleSearch}
                loading={loading.search}
                showfilter={(status) => setShowFilter(status)}
              />
            </div>
            <div className={classes.grdCellNone}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                startIcon={<ImportIcon />}
                onClick={() => {
                  setOpenImport(true);
                }}
              >
                Import
              </Button>
            </div>
          </div>
        ) : (
          <div className={classes.grdRow} style={{ alignItems: 'flex-end' }}>
            <div
              className={classes.grdCell1}
              style={{ marginRight: 30, marginLeft: 30 }}
            >
              <SelectValidationStatus
                disabled={batchNo !== '' ? false : true}
                name="validationStatus"
                label="Filter Status"
                value={validationStatus}
                onChange={handleToggle}
              ></SelectValidationStatus>
            </div>
            <div className={classes.grdCellNone} style={{ marginRight: 30 }}>
              <div>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  disabled={rows.length === 0 ? true : false || loading.execute}
                  startIcon={
                    loading.clear ? (
                      <CircularProgress
                        style={{
                          color: '#ffffff',
                          height: 20,
                          width: 20,
                        }}
                      />
                    ) : null
                  }
                  onClick={handleClear}
                >
                  Clear All
                </Button>
              </div>
            </div>
            <div className={classes.grdCellNone} style={{ marginRight: 30 }}>
              <input
                onChange={(e) => {
                  handleAttachFile(e.target.files[0]);
                  e.target.value = null;
                }}
                accept=".xls,.csv"
                className={classes.input}
                style={{ display: 'none' }}
                id="raised-button-file"
                multiple
                type="file"
                disabled={loading.import}
              />
              <label htmlFor="raised-button-file">
                <Button
                  // variant="raised"
                  variant="contained"
                  size="large"
                  component="span"
                  startIcon={
                    loading.import ? (
                      <CircularProgress
                        style={{
                          color: '#ffffff',
                          height: 20,
                          width: 20,
                        }}
                      />
                    ) : (
                      <AttachFileIcon />
                    )
                  }
                  color="secondary"
                  className={classes.button}
                  disabled={loading.import}
                >
                  Attach File
                </Button>
              </label>
            </div>
            <div className={classes.grdCellNone} style={{ marginRight: 30 }}>
              <div>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  disabled={!rows.length || loading.execute}
                  startIcon={
                    loading.execute ? (
                      <CircularProgress
                        style={{
                          color: '#ffffff',
                          height: 20,
                          width: 20,
                        }}
                      />
                    ) : null
                  }
                  onClick={() => {
                    handleExecution();
                  }}
                >
                  {loading.execute ? 'Executing...' : 'Execute'}
                </Button>
              </div>
            </div>
          </div>
        )}
      </Box>
      <Box component="div" mt={2}>
        <Table
          title={isImport ? 'CLIENT ACCOUNT IMPORT' : 'CLIENT ACCOUNTS'}
          data={rows}
          columns={columns}
          options={options}
        />
      </Box>
      {open && (
        <ClientAccountModal
          onClose={handleClose}
          open={open}
          value={rowData}
          validation={validation}
          importMode={isImport}
        ></ClientAccountModal>
      )}

      {openImport && (
        <ClientAccountUploadModal
          onClose={handleUploadClose}
          open={openImport}
        ></ClientAccountUploadModal>
      )}
    </div>
  );
}
