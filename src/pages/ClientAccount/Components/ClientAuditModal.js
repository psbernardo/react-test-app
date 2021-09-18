import React, { useState, useEffect } from 'react';
import { IconButton, Modal, Backdrop, Fade, Box } from '@material-ui/core';
import { listClientAudit } from '../../../services/ClientAccountService';
import { listOwnerAudit } from '../../../services/OwnerService';
import { listExtendedSetupAudit } from '../../../services/ExtendedSetupService';
import { listAddressAudit } from '../../../services/AccountAddressService';
import { listContactInfoAudit } from '../../../services/ContactInfoService';
import { listIdentificationAudit } from '../../../services/IdentificationService';
import Table, { columnType } from 'components/Table/Table';
import { Close as CloseIcon } from '@material-ui/icons';
import useStyles from '../../../styles';

export default function ClientAuditModal({
  onClose: handleClose,
  open: isOpen,
  value: accountId,
  tabIndex,
  tabType
}) {
  const classes = useStyles();
  const [rows, setRows] = useState([]);
  const [columns, setColumns] = useState([]);
  const options = {
    selectableRows: 'none',
  };

  let title = '';
  
  switch (tabIndex) {
    case 0:
      title = 'Client Account Audit';
      break;
    case 1:
      title = tabType === 'Owner' ? 'Identification Audit' : 'Extended Setup Audit';
      break;
    case 2:
      title = tabType === 'Owner' ? 'Address Audit' : 'Owner Audit';
      break;
    case 3:
      title = 'Contact Information Audit';
      break;
    default:
      console.error('unknown tab');
      break;
  }

  const setExtendedSetupTable = async () => {
    setColumns([
      {
        name: 'beneficiary',
        label: 'Beneficiary',
      },
      {
        name: 'primeBroker',
        label: 'Prime Broker',
      },
      {
        name: 'participantNo',
        label: 'Participant No',
      },
      {
        name: 'executingBroker',
        label: 'Executing Broker ',
      },
      {
        name: 'institutionNo',
        label: 'Institution No',
      },
      {
        name: 'agentNo',
        label: 'Agent No',
      },
      {
        name: 'agentAccountNo',
        label: 'Agent Account No',
      },
      {
        name: 'traderId',
        label: 'Trader ID',
      },
      {
        name: 'modifiedBy',
        label: 'Modified By',
        type: columnType.text,
      },
      {
        name: 'modifiedAt',
        label: 'Modified At',
        type: columnType.dateTime,
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
    ]);

    const { extendedSetupList } = await listExtendedSetupAudit(accountId);
    setRows(extendedSetupList);
  };

  const setOwnerTable = async () => {
    setColumns([
      {
        name: 'ownerType',
        label: 'Owner Type',
      },
      {
        name: 'firstName',
        label: 'First Name',
      },
      {
        name: 'lastName',
        label: 'Last Name',
      },
      {
        name: 'taxCountry',
        label: 'Citizenship',
      },
      {
        name: 'taxId',
        label: 'Tax ID',
      },
      {
        name: 'taxIdType',
        label: 'Tax ID Type',
      },
      {
        name: 'status',
        label: 'Status',
      },
      {
        name: 'createdBy',
        label: 'Created By',
        type: columnType.text,
      },
      {
        name: 'createdAt',
        label: 'Created At',
        type: columnType.dateTime,
      },
      {
        name: 'modifiedBy',
        label: 'Modified By',
        type: columnType.text,
      },
      {
        name: 'modifiedAt',
        label: 'Modified At',
        type: columnType.dateTime,
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
    ]);

    const { ownerList } = await listOwnerAudit(accountId);
    setRows(ownerList);
  };

  const setClientTable = async () => {
    setColumns([
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
      // {
      // name: 'capacity',
      // label: 'Capacity',
      // type: columnType.text,
      // },
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
        name: 'privacyContent',
        label: 'Privacy Content',
        type: columnType.bool,
        options: {
          display: true,
        },
      },
      {
        name: 'dayTrader',
        label: 'Day Trader',
        type: columnType.bool,
        options: {
          display: false,
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
        name: 'createdAt',
        label: 'Created At',
        type: columnType.dateTime,
      },
      {
        name: 'accreditedInvestor',
        label: 'Accredited Investor',
        type: columnType.bool,
        options: {
          display: false,
        },
      },
      {
        name: 'fdidFlag',
        label: 'FDID Flag',
        type: columnType.bool,
        options: {
          display: false,
        },
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
        type: columnType.bool,
        options: {
          display: false,
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
        name: 'modifiedBy',
        label: 'Modified By',
        type: columnType.text,
      },
      {
        name: 'modifiedAt',
        label: 'Modified At',
        type: columnType.dateTime,
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
    ]);

    const { clientsList } = await listClientAudit(accountId);
    console.log(clientsList);
    setRows(clientsList);
  };

  const setIdentificationTable = async () => {
    setColumns([
      {
        name: 'type',
        label: 'Type',
      },
      {
        name: 'id',
        label: 'ID',
      },
      {
        name: 'countryOfIssuance',
        label: 'Country Of Issuance',
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
    ]);

    const { identificationsList } = await listIdentificationAudit(accountId);
    setRows(identificationsList);
  };

  const setAddressTable = async () => {
    setColumns([
      {
        name: 'addressType',
        label: 'Address Type',
        order: 1,
      },
      {
        name: 'address1',
        label: 'Address 1',
        order: 2,
      },
      {
        name: 'address2',
        label: 'Address 2',
        order: 3,
      },
      {
        name: 'address3',
        label: 'Address 3 ',
        order: 4,
      },
      {
        name: 'city',
        label: 'City',
        order: 5,
      },
      {
        name: 'state',
        label: 'State',
        order: 6,
      },
      {
        name: 'zip',
        label: 'Zip',
        order: 7,
      },
      {
        name: 'country',
        label: 'Country',
        order: 8,
      },
      {
        name: 'status',
        label: 'Status',
        order: 9,
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
    ]);

    const { addressList } = await listAddressAudit(accountId);
    setRows(addressList);
  };

  const setContactInformationTable = async () => {
    setColumns([
      {
        name: 'contactInfoType',
        label: 'Contact Info Type',
      },
      {
        name: 'contactInfo',
        label: 'Contact Info',
      },
      {
        name: 'status',
        label: 'Status',
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
    ]);

    const { contactInfoList } = await listContactInfoAudit(accountId);
    setRows(contactInfoList);
  };

  useEffect(() => {
    if (isOpen) {
      switch (tabIndex) {
        case 0:
          setClientTable();
          break;
        case 1:
          tabType === 'Owner' ? setIdentificationTable() : setExtendedSetupTable();
          break;
        case 2:
          tabType === 'Owner' ? setAddressTable() : setOwnerTable();
          break;
        case 3:
          setContactInformationTable();
          break;
        default:
          console.error('unknown tab');
          break;
      }
    }
    // eslint-disable-next-line
  }, [isOpen, tabIndex]);

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modalBackdrop}
      open={isOpen}
      onClose={() => {
        handleClose();
      }}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{ timeout: 500 }}
    >
      <Fade in={isOpen}>
        <div className={classes.tableModalFull}>
          <Box mt={1}>
            <Box component="div">
              <Table
                title={title}
                data={rows}
                columns={columns}
                options={options}
              />
            </Box>
            <div className={classes.grdRow}>
              <div className={classes.grdCellNone} style={{ marginRight: 10 }}>
                <div
                  className={classes.modalCloseIcon}
                  style={{ marginRight: 10 }}
                >
                  <IconButton
                    aria-label="close"
                    onClick={() => {
                      handleClose();
                    }}
                  >
                    <CloseIcon style={{ color: '#f1f1f1' }} />
                  </IconButton>
                </div>
              </div>
            </div>
          </Box>
        </div>
      </Fade>
    </Modal>
  );
}
