import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import useStyles from '../../../styles';
import IdentificationModal from './IdentificationModal';
import LinkOwnerModal from './LinkOwnerModal';
import AddressModal from './AddressModal';
import ContactInfoModal from './ContactInfoModal';
import { useConfirm } from 'material-ui-confirm';
import {
  listAddress,
  updateAddress,
  createAddress,
  deleteAddress,
} from '../../../services/AccountAddressService';
import {
  listContactInfo,
  updateContactInfo,
  createContactInfo,
  deleteContactInfo,
} from '../../../services/ContactInfoService';
import {
  listIdentification,
  updateIdentification,
  createIdentification,
  deleteIdentification,
} from '../../../services/IdentificationService';
import { createOwner } from '../../../services/OwnerService';
import {
  notifySuccess,
  notifyError,
} from 'components/Notification/Notification';
import {
  Create as EditIcon,
  Delete as DeleteIcon,
  Add as AddIcon,
} from '@material-ui/icons';
import {
  Typography,
  Button,
  Modal,
  Backdrop,
  Fade,
  Box,
  TextField,
  AppBar,
  Tabs,
  Tab,
  IconButton,
  FormControlLabel,
  Checkbox,
  InputLabel,
  Select,
  MenuItem,
  InputAdornment,
} from '@material-ui/core';
import SelectTaxCountry from '../../../components/AutoComplete/SelectTaxCountry';
import SelectSystemCode from '../../../components/Dropdown/SelectSystemCode';
import SelectOwner from '../../../components/AutoComplete/SelectOwner';
import ClientAuditModal from './ClientAuditModal';
import { dateProtoObjectToString } from '../../../services/ConvertService';
import Table, { columnType } from 'components/Table/Table';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

export default function OwnerModal({
  onClose: handleClose,
  open: isOpen,
  importMode: isImport,
  value,
  validation,
}) {
  const classes = useStyles();
  const confirm = useConfirm();
  const [modalData, setModalData] = useState({
    ownerId: 0,
    accountId: value.accountId,
    ownerType: 'Secondary',
    firstName: '',
    middleName: '',
    lastName: '',
    citizenship: 'US',
    dateOfBirth: '',
    status: 'Active',
    employmentStatus: '',
    employmentOccupation: '',
    employmentName: '',
    ownership: false,
    stockOwnership: '',
    brokerMember: false,
    brokerName: '',
    affiliatePerson: '',
    affiliatePersonPosition: '',
    ofacStatus: 'Pending',
    ofacDate: '',
    kycStatus: 'Pending',
    kycDate: '',
    officer: false,
    owner: false,
    ownershipPercent: '',
  });
  const [isEdit, setIsEdit] = React.useState(false);
  const [rowData, setRowData] = React.useState({});
  const [identificationRows, setIdentificationRows] = React.useState([]);
  const [addressRows, setAddressRows] = React.useState([]);
  const [addressValidation, setAddressValidation] = React.useState({});
  const [contactInfoRows, setContactInfoRows] = React.useState([]);
  const [contactInfoValidation, setContactInfoValidation] = React.useState({});
  const [openIdentification, setOpenIdentification] = React.useState(false);
  const [openAddress, setOpenAddress] = React.useState(false);
  const [openContactInfo, setOpenContactInfo] = React.useState(false);
  const [tabValue, setTabValue] = React.useState(0);
  const [openAudit, setOpenAudit] = React.useState(false);
  const [linkSelectedOwner, setLinkSelectedOwner] = React.useState('');
  const [linkedOwnerId, setlLnkedOwnerId] = React.useState(0);

  const handleChangeTab = (event, newValue) => {
    setTabValue(newValue);
  };

  const loadValues = async (owner) => {
    let ownerCopy = { ...owner };
    ownerCopy.dateOfBirth = dateProtoObjectToString(ownerCopy.dateOfBirth);
    ownerCopy.ofacDate = dateProtoObjectToString(ownerCopy.ofacDate);
    ownerCopy.kycDate = dateProtoObjectToString(ownerCopy.kycDate);

    setModalData({ ...ownerCopy });

    let param = {
      accountId: ownerCopy.accountId,
      ownerId: ownerCopy.ownerId,
    };

    const resIdentification = await listIdentification(param);
    setIdentificationRows(resIdentification.identificationsList);

    const resAddress = await listAddress(param);
    setAddressRows(resAddress.addressList);

    const resContactInfo = await listContactInfo(param);
    setContactInfoRows(resContactInfo.contactInfoList);
  };

  async function init() {
    if (isImport || value.ownerId) {
      setIsEdit(true);
    }

    if (!value.ownerId) {
      const { owner } = await createOwner(value.accountId, {
        ...value,
        ownerType: value.ownerType ? value.ownerType : 'Secondary',
      });
      value.ownerId = owner.ownerId;
    }

    await loadValues(value);
  }

  useEffect(() => {
    if (isOpen) {
      init();
    }
  }, [isOpen]);

  const isDeleteEnabled = (dataIndex) => {
    return identificationRows[dataIndex].status !== 'Disabled';
  };

  const options = {
    tableBodyHeight: '160px',
    isRowSelectable: (dataIndex) => isDeleteEnabled(dataIndex),
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
              style={{
                margin: 0,
                padding: 0,
              }}
            >
              <div className={classes.grdCellNone}>
                <IconButton
                  aria-label="delete"
                  disabled={!isDeleteEnabled(dataIndex)}
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
              <div align={'left'} className={classes.grdCellNone}>
                <IconButton
                  aria-label="edit"
                  onClick={() =>
                    handleOpenIdentification(identificationRows[dataIndex])
                  }
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
      name: 'issueDate',
      label: 'Issue Date',
      type: columnType.date,
    },
    {
      name: 'expirationDate',
      label: 'Expiration Date',
      type: columnType.date,
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

  const handleChange = (e, checkboxValue) => {
    const input = e.currentTarget.name ? e.currentTarget : e.target;

    setModalData({
      ...modalData,
      [input.name]:
        checkboxValue === true || checkboxValue === false
          ? checkboxValue
          : input.value,
    });
  };

  const handleCloseLinkOwnerModal = async (ownerType, selected) => {
    try {
      const { owner } = await createOwner(value.accountId, {
        ...selected,
        ownerType: ownerType,
      });

      await loadValues(owner);
      setlLnkedOwnerId(owner.ownerId);

      notifySuccess(
        owner.firstName + ' ' + owner.lastName + ' was linked to this account.'
      );
      setLinkSelectedOwner('');
    } catch (error) {
      notifyError(error.message);
    }
  };

  const handleAutoFill = (selected) => {
    setLinkSelectedOwner(selected);
  };

  const handleOpenIdentification = (data) => {
    if (!data) {
      // ADD default values
      data = {
        ownerId: modalData.ownerId,
        type: '',
        id: '',
        countryOfIssuance: '',
        imgGovernmentId: '',
        status: true,
      };
    }

    setRowData(data);
    setOpenIdentification(true);
  };

  const handleCloseIdentification = async (data, isEdit) => {
    if (!data) {
      setOpenIdentification(false);
      return;
    }

    let valid = true;

    if (!data.type) {
      notifyError('Type is required.');
      valid = false;
    }
    if (!data.id || data.id === '___-__-____') {
      notifyError('ID is required.');
      valid = false;
    }
    if (!data.countryOfIssuance) {
      notifyError('Country Of Issuance is required.');
      valid = false;
    }

    if (data.type === 'Driver License' || data.type === 'Passport') {
      if (!data.issueDate) {
        notifyError('Issue Date is required.');
        valid = false;
      }

      if (!data.expirationDate) {
        notifyError('ExpirationDate is required.');
        valid = false;
      }

      if (data.issueDate > data.expirationDate) {
        notifyError('Issue Date should not be greater than Expiration Date.');
        valid = false;
      }
    } else {
      //clean up

      data.expirationDate = undefined;
      data.issueDate = undefined;
    }

    if (!valid) {
      return;
    }

    try {
      if (isEdit) {
        //EDIT
        const { identification } = await updateIdentification(
          value.accountId,
          data,
          value.ownerId
        );
        const index = identificationRows.indexOf(rowData);
        const rowsCopy = [...identificationRows];
        rowsCopy[index] = identification;
        setIdentificationRows(rowsCopy);
        notifySuccess('Identification has been updated.');
      } else {
        //ADD
        const { identification } = await createIdentification(
          value.accountId,
          data,
          value.ownerId
        );

        setIdentificationRows([identification, ...identificationRows]);
        notifySuccess('New identification has been added.');
      }

      setOpenIdentification(false);
    } catch (error) {
      console.error(error);
      notifyError(error.message);
    }
  };

  const handleDelete = (rowsToDelete) => {
    let messageKey = '';
    if (rowsToDelete.length === 1) {
      messageKey = identificationRows[rowsToDelete[0].dataIndex].type;
    } else {
      messageKey = rowsToDelete.length + ' items';
    }
    let idsToDelete = [];

    confirm({
      description:
        "You are about to disable '" +
        messageKey +
        "'. Please confirm your action.",
      confirmationText: 'Yes, disable',
    }).then(async () => {
      const rowsCopy = [...identificationRows];
      try {
        for (const r of rowsToDelete) {
          const index = r.dataIndex;
          await deleteIdentification(
            identificationRows[index].identificationId,
            modalData.ownerId
          );
          idsToDelete.push(identificationRows[index].identificationId);
        }
      } catch (error) {
        notifyError(error.message);
      } finally {
        for (let i = 0; i < rowsCopy.length; i++) {
          if (idsToDelete.includes(rowsCopy[i].identificationId)) {
            rowsCopy[i].status = 'Disabled';
          }
        }
        setIdentificationRows(rowsCopy);
        notifySuccess(messageKey + ' Identification has been disabled');
      }
    });
  };

  const isAddressDeleteEnabled = (dataIndex) => {
    return addressRows[dataIndex].status !== 'Disabled';
  };

  const addressOptions = {
    isRowSelectable: (dataIndex) => isAddressDeleteEnabled(dataIndex),
    onRowsDelete: (selectedItems) => {
      handleDeleteAddress(selectedItems.data);
      return false;
    },
  };

  const addressColumn = [
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
              <div className={classes.grdCellNone}>
                <IconButton
                  aria-label="delete"
                  disabled={!isAddressDeleteEnabled(dataIndex)}
                  onClick={() => {
                    handleDeleteAddress([
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
                  onClick={() => handleOpenAddress(addressRows[dataIndex])}
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

  const handleDeleteAddress = (rowsToDelete) => {
    let messageKey = '';
    if (rowsToDelete.length === 1) {
      messageKey = 'ID : ' + addressRows[rowsToDelete[0].dataIndex].addressId;
    } else {
      messageKey = rowsToDelete.length + ' items';
    }

    let idsToDelete = [];
    confirm({
      description:
        "You are about to delete '" +
        messageKey +
        "'. Please confirm your action.",
      confirmationText: 'Yes, delete',
    }).then(async () => {
      const rowsCopy = [...addressRows];
      try {
        for (const r of rowsToDelete) {
          const index = r.dataIndex;
          await deleteAddress(addressRows[index].addressId, modalData.ownerId);
          idsToDelete.push(addressRows[index].addressId);
        }
      } catch (error) {
        notifyError(error.message);
      } finally {
        for (let i = 0; i < rowsCopy.length; i++) {
          if (idsToDelete.includes(rowsCopy[i].addressId)) {
            rowsCopy[i].status = 'Disabled';
          }
        }
        setAddressRows(rowsCopy);
        notifySuccess(messageKey + ' Address has been deleted');
      }
    });
  };

  const handleOpenAddress = (data) => {
    if (!data) {
      // ADD default values
      data = {
        ownerId: modalData.ownerId,
        addressType: 'Primary',
        address1: '',
        address2: '',
        address3: '',
        city: '',
        state: '',
        zip: '',
        country: '',
        status: 'Active',
        imgProofOfAddress: '',
      };
    }

    setRowData(data);
    setOpenAddress(true);
  };

  const handleCloseAddress = async (data, isEdit) => {
    if (!data) {
      setAddressValidation({});
      setOpenAddress(false);
      return;
    }

    let valid = true;

    setAddressValidation({
      addressType: !data.addressType,
      address1: !data.address1,
      city: !data.city,
      country: !data.country,
      state: data.country === 'US' && (data.state === '' || !data.state),
      status: !data.status,
    });

    if (!data.addressType) {
      notifyError('Address Type is required.');
      valid = false;
    }
    if (!data.address1) {
      notifyError('Address 1 is required.');
      valid = false;
    }
    if (!data.city) {
      notifyError('City is required.');
      valid = false;
    }
    if (!data.country) {
      notifyError('Country is required.');
      valid = false;
    }

    if (data.country === 'US' && (data.state === '' || !data.state)) {
      notifyError('Country is US so state is required.');
      valid = false;
    }

    if (!data.status) {
      notifyError('Status is required.');
      valid = false;
    }

    if (!valid) {
      return;
    }

    try {
      if (isEdit) {
        // EDIT
        const { address } = await updateAddress(
          value.accountId,
          data,
          value.ownerId
        );
        const index = addressRows.indexOf(rowData);
        const rowsCopy = [...addressRows];
        rowsCopy[index] = address;
        setAddressRows(rowsCopy);
        notifySuccess('Address has been updated.');
      } else {
        // ADD
        const { address } = await createAddress(
          value.accountId,
          data,
          value.ownerId
        );
        setAddressRows([address, ...addressRows]);
        notifySuccess('New Address has been added.');
      }
    } catch (error) {
      console.log(error);
      notifyError(error.message);

      return;
    }

    setAddressValidation({});
    setOpenAddress(false);
  };

  const isContactInfoDeleteEnabled = (dataIndex) => {
    return contactInfoRows[dataIndex].status !== 'Disabled';
  };

  const contactInfoOptions = {
    isRowSelectable: (dataIndex) => isContactInfoDeleteEnabled(dataIndex),
    onRowsDelete: (selectedItems) => {
      handleDeleteContactInfo(selectedItems.data);
      return false;
    },
  };

  const contactInfoColumns = [
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
                  disabled={!isContactInfoDeleteEnabled(dataIndex)}
                  onClick={() => {
                    handleDeleteContactInfo([
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
                  onClick={() =>
                    handleOpenContactInfo(contactInfoRows[dataIndex])
                  }
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

  const handleDeleteContactInfo = (rowsToDelete) => {
    let messageKey = '';
    if (rowsToDelete.length === 1) {
      messageKey = contactInfoRows[rowsToDelete[0].dataIndex].contactInfoType;
    } else {
      messageKey = rowsToDelete.length + ' items';
    }

    let idsToDelete = [];
    confirm({
      description:
        "You are about to disable '" +
        messageKey +
        "'. Please confirm your action.",
      confirmationText: 'Yes, disable',
    }).then(async () => {
      const rowsCopy = [...contactInfoRows];
      try {
        for (const r of rowsToDelete) {
          const index = r.dataIndex;
          await deleteContactInfo(
            contactInfoRows[index].contactInfoId,
            modalData.ownerId
          );
          idsToDelete.push(contactInfoRows[index].contactInfoId);
        }
      } catch (error) {
        notifyError(error.message);
      } finally {
        for (let i = 0; i < rowsCopy.length; i++) {
          if (idsToDelete.includes(rowsCopy[i].contactInfoId)) {
            rowsCopy[i].status = 'Disabled';
          }
        }
        setContactInfoRows(rowsCopy);
        notifySuccess(messageKey + ' Contact Info has been disabled');
      }
    });
  };

  const handleOpenContactInfo = (data) => {
    if (!data) {
      //ADD default values
      data = {
        ownerId: modalData.ownerId,
        contactInfoType: '',
        contactInfo: '',
      };
    }

    setRowData(data);
    setOpenContactInfo(true);
  };

  const handleCloseContactInfo = async (data, isEdit) => {
    if (!data) {
      setContactInfoValidation({});
      setOpenContactInfo(false);
      return;
    }

    let valid = true;

    setContactInfoValidation({
      contactInfoType: !data.contactInfoType,
      contactInfo:
        !data.contactInfo ||
        data.contactInfoType === 'Primary Email' ||
        (data.contactInfoType === 'Email' &&
          !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]*$/i.test(
            data.contactInfo
          )),
      status: !data.status,
    });

    if (!data.contactInfoType) {
      notifyError('Contact Info Type is required.');
      valid = false;
    }

    if (!data.contactInfo) {
      notifyError('Contact Info is required.');
      valid = false;
    }

    if (!data.status) {
      notifyError('Status is required.');
      valid = false;
    }

    if (
      data.contactInfoType === 'Primary Email' ||
      data.contactInfoType === 'Email'
    ) {
      if (
        !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]*$/i.test(
          data.contactInfo
        )
      ) {
        notifyError('Invalid email address.');
        valid = false;
      }
    }

    if (!valid) {
      return;
    }

    try {
      if (isEdit) {
        //EDIT
        const { contactInfo } = await updateContactInfo(
          value.accountId,
          data,
          value.ownerId
        );
        const index = contactInfoRows.indexOf(rowData);
        const rowsCopy = [...contactInfoRows];
        rowsCopy[index] = contactInfo;
        setContactInfoRows(rowsCopy);
        notifySuccess('Contact info has been updated.');
      } else {
        //ADD
        const { contactInfo } = await createContactInfo(
          value.accountId,
          data,
          value.ownerId
        );
        setContactInfoRows([contactInfo, ...contactInfoRows]);
        notifySuccess('New contact info has been added.');
      }

      setContactInfoValidation({});
      setOpenContactInfo(false);
    } catch (error) {
      console.error(error);
      notifyError(error.message);
    }
  };

  const handleCloseAuditModal = async () => {
    setOpenAudit(false);
  };

  return (
    <React.Fragment>
      <Modal
        className={classes.modalBackdrop}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isOpen}
        onClose={() => {
          handleClose();
        }}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
      >
        <Fade in={isOpen}>
          <div className={classes.fadeModalFullNP}>
            <Typography
              className={classes.textBold}
              variant="h4"
              style={{ padding: '20px 25px 0px 25px' }}
            >
              {isEdit ? 'Edit' : 'Add New '} Owner
            </Typography>
            <Box mt={3}>
              <AppBar
                position="static"
                className={classes.tabHeader}
                style={{
                  backgroundColor: '#ffffff',
                  boxShadow: 'none',
                  borderBottom: '1px solid #e8e8e8',
                }}
              >
                <Tabs
                  value={tabValue}
                  onChange={handleChangeTab}
                  indicatorColor="primary"
                  textColor="primary"
                  scrollButtons="auto"
                  variant="fullWidth"
                  centered
                >
                  <Tab label="Owner" {...a11yProps(0)} />
                  <Tab label="Identification" {...a11yProps(1)} />
                  <Tab label="Address" {...a11yProps(2)} />
                  <Tab label="Contact Information" {...a11yProps(3)} />
                </Tabs>
              </AppBar>
              <TabPanel value={tabValue} index={0}>
                <form>
                  <div className={classes.grdRow}>
                    <div
                      className={classes.grdCell1}
                      style={{ marginRight: 30 }}
                    >
                      <SelectSystemCode
                        error={validation.ownerType}
                        required={true}
                        name="ownerType"
                        label="Owner Type"
                        type="Owner Type"
                        value={modalData.ownerType}
                        onChange={handleChange}
                      ></SelectSystemCode>
                    </div>
                    <div
                      className={classes.grdCell1}
                      style={{ marginRight: 30 }}
                    >
                      {isEdit ? (
                        <TextField
                          error={validation.firstName}
                          required
                          fullWidth={true}
                          name="firstName"
                          label="First Name"
                          value={modalData.firstName}
                          onChange={handleChange}
                          inputProps={{ maxLength: 300 }}
                          InputLabelProps={{ shrink: true }}
                        />
                      ) : (
                        <SelectOwner
                          onChange={handleAutoFill}
                          onInputChange={handleChange}
                          label="First Name"
                          value={modalData.firstName}
                          accountId={value.accountId}
                        />
                      )}
                    </div>
                    <div
                      className={classes.grdCell1}
                      style={{ marginRight: 30 }}
                    >
                      <TextField
                        fullWidth={true}
                        name="middleName"
                        label="Middle Name"
                        value={modalData.middleName}
                        onChange={handleChange}
                        inputProps={{ maxLength: 300 }}
                        InputLabelProps={{ shrink: true }}
                      />
                    </div>
                    <div className={classes.grdCell1}>
                      <TextField
                        error={validation.lastName}
                        required
                        fullWidth={true}
                        name="lastName"
                        label="Last Name"
                        value={modalData.lastName}
                        onChange={handleChange}
                        inputProps={{ maxLength: 300 }}
                        InputLabelProps={{ shrink: true }}
                      />
                    </div>
                  </div>
                  <div className={classes.grdRow}>
                    <div
                      className={classes.grdCell1}
                      style={{ marginRight: 30 }}
                    >
                      <SelectTaxCountry
                        error={validation.citizenship}
                        required={true}
                        name="citizenship"
                        label="Citizenship"
                        value={modalData.citizenship}
                        onChange={(selected) => {
                          setModalData({
                            ...modalData,
                            citizenship: selected?.code,
                          });
                        }}
                      ></SelectTaxCountry>
                    </div>
                    <div
                      className={classes.grdCell1}
                      style={{ marginRight: 30 }}
                    >
                      <TextField
                        error={validation.dateOfBirth}
                        fullWidth
                        required={true}
                        name="dateOfBirth"
                        label="Date Of Birth"
                        type="date"
                        value={modalData.dateOfBirth}
                        onChange={handleChange}
                        InputLabelProps={{ shrink: true }}
                      />
                    </div>
                    <div
                      className={classes.grdCell1}
                      style={{ marginRight: 30 }}
                    >
                      <SelectSystemCode
                        error={validation.status}
                        required={true}
                        name="status"
                        label="Status"
                        type="Status"
                        subType="Client Setup"
                        value={modalData.status}
                        onChange={handleChange}
                      ></SelectSystemCode>
                    </div>
                    <div
                      className={classes.grdCellNone}
                      style={{ marginRight: 30 }}
                    >
                      <FormControlLabel
                        control={
                          <Checkbox
                            name="officer"
                            checked={modalData.officer}
                            onChange={handleChange}
                          />
                        }
                        label="Officer"
                      />
                    </div>
                    <div
                      className={classes.grdCellNone}
                      style={{ marginRight: 94 }}
                    >
                      <FormControlLabel
                        control={
                          <Checkbox
                            name="owner"
                            checked={modalData.owner}
                            onChange={handleChange}
                          />
                        }
                        label="Owner"
                      />
                    </div>
                  </div>
                  <div className={classes.grdRow}>
                    <div
                      className={classes.grdCell1}
                      style={{ marginRight: 30 }}
                    >
                      <SelectSystemCode
                        error={validation.employmentStatus}
                        required={true}
                        name="employmentStatus"
                        label="Employment Status"
                        type="Employment Status"
                        value={modalData.employmentStatus}
                        onChange={handleChange}
                      ></SelectSystemCode>
                    </div>
                    <div
                      className={classes.grdCell1}
                      style={{ marginRight: 30 }}
                    >
                      <TextField
                        fullWidth
                        name="employmentOccupation"
                        label="Employment Occupation"
                        value={modalData.employmentOccupation}
                        onChange={handleChange}
                        InputLabelProps={{ shrink: true }}
                      />
                    </div>
                    <div
                      className={classes.grdCell1}
                      style={{ marginRight: 30 }}
                    >
                      <TextField
                        fullWidth
                        name="employmentName"
                        label="Employment Name"
                        value={modalData.employmentName}
                        onChange={handleChange}
                        InputLabelProps={{ shrink: true }}
                      />
                    </div>
                    <div className={classes.grdCell1}>
                      {modalData.owner === true && (
                        <TextField
                          fullWidth
                          name="ownershipPercent"
                          label="Ownership Percent"
                          value={modalData.ownershipPercent}
                          type="number"
                          onChange={handleChange}
                          InputLabelProps={{ shrink: true }}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                %
                              </InputAdornment>
                            ),
                          }}
                        />
                      )}
                    </div>
                  </div>
                  <div className={classes.grdRow}>
                    <div
                      className={classes.grdCell1}
                      style={{ marginRight: 30 }}
                    >
                      <FormControlLabel
                        control={
                          <Checkbox
                            name="ownership"
                            checked={modalData.ownership}
                            onChange={handleChange}
                          />
                        }
                        label="Ownership"
                      />
                    </div>
                    <div
                      className={classes.grdCell1}
                      style={{ marginRight: 30 }}
                    >
                      <TextField
                        fullWidth
                        required={modalData.ownership}
                        name="stockOwnership"
                        label="Stock Symbol"
                        value={modalData.stockOwnership}
                        onChange={handleChange}
                        InputLabelProps={{ shrink: true }}
                      />
                    </div>
                    <div
                      className={classes.grdCell1}
                      style={{ marginRight: 30 }}
                    ></div>
                    <div className={classes.grdCell1}></div>
                  </div>
                  <div className={classes.grdRow}>
                    <div
                      className={classes.grdCell1}
                      style={{ marginRight: 30 }}
                    >
                      <FormControlLabel
                        control={
                          <Checkbox
                            name="brokerMember"
                            checked={modalData.brokerMember}
                            onChange={handleChange}
                          />
                        }
                        label="Broker Member"
                      />
                    </div>
                    <div
                      className={classes.grdCell1}
                      style={{ marginRight: 30 }}
                    >
                      <TextField
                        fullWidth
                        required={modalData.brokerMember}
                        name="brokerName"
                        label="Name of the Compay"
                        value={modalData.brokerName}
                        onChange={handleChange}
                        InputLabelProps={{ shrink: true }}
                      />
                    </div>
                    <div
                      className={classes.grdCell1}
                      style={{ marginRight: 30 }}
                    >
                      <TextField
                        fullWidth
                        required={modalData.brokerMember}
                        name="affiliatePerson"
                        label="Name of the Affiliated Person"
                        value={modalData.affiliatePerson}
                        onChange={handleChange}
                        InputLabelProps={{ shrink: true }}
                      />
                    </div>
                    <div className={classes.grdCell1}>
                      <TextField
                        fullWidth
                        required={modalData.brokerMember}
                        name="affiliatePersonPosition"
                        label="Position of the Affiliated Person"
                        value={modalData.affiliatePersonPosition}
                        onChange={handleChange}
                        InputLabelProps={{ shrink: true }}
                      />
                    </div>
                  </div>
                  <div className={classes.grdRow}>
                    <div
                      className={classes.grdCell1}
                      style={{ marginRight: 30 }}
                    >
                      <InputLabel shrink id="ofacStatus">
                        OFAC Status
                      </InputLabel>
                      <Select
                        name="ofacStatus"
                        fullWidth
                        value={modalData.ofacStatus}
                        onChange={handleChange}
                      >
                        <MenuItem value="Pending">Pending</MenuItem>
                        <MenuItem value="Approved">Approved</MenuItem>
                        <MenuItem value="Denied">Denied</MenuItem>
                      </Select>
                    </div>
                    <div
                      className={classes.grdCell1}
                      style={{ marginRight: 30 }}
                    >
                      <TextField
                        fullWidth
                        name="ofacDate"
                        label="OFAC Date"
                        type="date"
                        value={modalData.ofacDate}
                        onChange={handleChange}
                        InputLabelProps={{ shrink: true }}
                      />
                    </div>
                    <div
                      className={classes.grdCell1}
                      style={{ marginRight: 30 }}
                    >
                      <InputLabel shrink id="kycStatus">
                        KYC Status
                      </InputLabel>
                      <Select
                        name="kycStatus"
                        fullWidth
                        value={modalData.kycStatus}
                        onChange={handleChange}
                      >
                        <MenuItem value="Pending">Pending</MenuItem>
                        <MenuItem value="Approved">Approved</MenuItem>
                        <MenuItem value="Denied">Denied</MenuItem>
                      </Select>
                    </div>
                    <div className={classes.grdCell1}>
                      <TextField
                        fullWidth
                        name="kycDate"
                        label="KYC Date"
                        type="date"
                        value={modalData.kycDate}
                        onChange={handleChange}
                        InputLabelProps={{ shrink: true }}
                      />
                    </div>
                  </div>
                </form>
                {linkSelectedOwner && (
                  <LinkOwnerModal
                    onClose={handleCloseLinkOwnerModal}
                    linkSelectedOwner={linkSelectedOwner}
                  ></LinkOwnerModal>
                )}
              </TabPanel>
              <TabPanel value={tabValue} index={1}>
                <Box>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    startIcon={<AddIcon />}
                    onClick={() => {
                      handleOpenIdentification();
                    }}
                  >
                    Add New
                  </Button>
                </Box>
                <Box mt={3}>
                  <Table
                    title={'Identification'}
                    data={identificationRows}
                    columns={columns}
                    options={options}
                  />
                </Box>
                {openIdentification && (
                  <IdentificationModal
                    onClose={handleCloseIdentification}
                    open={openIdentification}
                    value={rowData}
                    importMode={isImport}
                  ></IdentificationModal>
                )}{' '}
              </TabPanel>
              <TabPanel value={tabValue} index={2}>
                <Box>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    startIcon={<AddIcon />}
                    onClick={() => {
                      handleOpenAddress();
                    }}
                  >
                    Add New
                  </Button>
                </Box>
                <Box mt={3}>
                  <Table
                    title={'Address'}
                    data={addressRows}
                    columns={addressColumn}
                    options={addressOptions}
                  />
                </Box>
                {openAddress && (
                  <AddressModal
                    onClose={handleCloseAddress}
                    open={openAddress}
                    value={rowData}
                    importMode={isImport}
                    validation={addressValidation}
                  ></AddressModal>
                )}{' '}
              </TabPanel>
              <TabPanel value={tabValue} index={3}>
                <Box>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    startIcon={<AddIcon />}
                    onClick={() => {
                      handleOpenContactInfo();
                    }}
                  >
                    Add New
                  </Button>
                </Box>
                <Box mt={3}>
                  <Table
                    title={'Contact Informations'}
                    data={contactInfoRows}
                    columns={contactInfoColumns}
                    options={contactInfoOptions}
                  />
                </Box>
                {openContactInfo && (
                  <ContactInfoModal
                    onClose={handleCloseContactInfo}
                    open={openContactInfo}
                    value={rowData}
                    validation={contactInfoValidation}
                  ></ContactInfoModal>
                )}{' '}
              </TabPanel>
              <div
                className={classes.modalFooter}
                style={{ margin: 0, padding: '10px 30px 30px 25px' }}
              >
                {[1, 2, 3].includes(tabValue) && (
                  <div
                    className={classes.grdCellNone}
                    style={{ marginRight: 10 }}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      disabled={!isEdit}
                      onClick={() => {
                        setOpenAudit(true);
                      }}
                    >
                      View Audit Logs
                    </Button>
                  </div>
                )}
                <div
                  className={classes.grdCellNone}
                  style={{ marginRight: 10 }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={() => {
                      handleClose(null, false, linkedOwnerId);
                    }}
                  >
                    Close
                  </Button>
                </div>
                <div className={classes.grdCellNone}>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    onClick={() => {
                      handleClose(
                        modalData,
                        isEdit || linkedOwnerId,
                        linkedOwnerId
                      );
                    }}
                  >
                    Save
                  </Button>
                </div>
              </div>
            </Box>
            {openAudit && (
              <ClientAuditModal
                onClose={handleCloseAuditModal}
                open={openAudit}
                value={value.accountId}
                tabIndex={tabValue}
                tabType={'Owner'}
              ></ClientAuditModal>
            )}
          </div>
        </Fade>
      </Modal>
    </React.Fragment>
  );
}
