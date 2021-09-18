import React, { useState, useEffect } from 'react';
import ClientAuditModal from './ClientAuditModal';
import useStyles from '../../../styles';
import {
  Typography,
  Button,
  Modal,
  Backdrop,
  Fade,
  Box,
  TextField,
  AppBar,
  Tab,
  Tabs,
  FormControlLabel,
  Checkbox,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@material-ui/core';

import { ExpandMore as ExpandMoreIcon } from '@material-ui/icons';

import PropTypes from 'prop-types';
import OwnerTable from './OwnerTable';
import NoteTable from './NoteTable';
import SubAccountTable from './SubAccountTable';
import AccessTable from './AccessTable';
import AttachmentTable from './AttachmentTable';
import SelectCorrespondent from '../../../components/AutoComplete/SelectCorrespondent';
import SelectSystemCode from '../../../components/Dropdown/SelectSystemCode';
import SelectPrivacyConsent from '../../../components/Dropdown/SelectPrivacyConsent';
import SelectTaxCountry from '../../../components/AutoComplete/SelectTaxCountry';
import SelectCommonId from '../../../components/AutoComplete/SelectCommonId';
import { listSystemNumber } from '../../../services/SystemNumberService';
import ImageDropZone from '../../../components/Misc/ImageDropZone';

import {
  dateProtoObjectToString,
  protoTimeSpanObjectToString,
} from '../../../services/ConvertService';

import { readClient } from '../../../services/ClientAccountService';
import { notifyError } from 'components/Notification/Notification';

function TabPanel({ children, value: tabValue, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={tabValue !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {tabValue === index && <Box p={3}>{children}</Box>}
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

export default function ClientAccountModal({
  onClose: handleClose,
  open: isOpen,
  value,
  validation,
  importMode: isImport,
}) {
  const [tabIndexValue, setTabIndexValue] = React.useState(0);
  const handleChangeTab = (_, newValue) => {
    setTabIndexValue(newValue);
  };

  const classes = useStyles();
  const [modalData, setModalData] = useState({
    correspondent: value.correspondent ? value.correspondent : '' || '',
    accountNo: '',
    accountName: '',
    masterAccountNo: '',
    status: '',
    activatedAt: '',
    disabledAt: '',
    broker: '',
    privacyContent: '1',
    dayTrader: false,
    multiplier: 1,
    legalEntity: 'Individual',
    accountType: '',
    marginType: '',
    branch: '',
    rep: '',
    beneficiary: '',
    largeTraderId: '',
    investmentObjectiveCode: 'Other',
    investmentObjectiveDate: '',
    taxCountry: 'US',
    tefra: 'Exempt',
    w8w9: 'W9',
    w8w9ReceivedDate: '',
    accreditedInvestor: false,
    fdidFlag: false,
    fdid: '',
    fdidEndReason: '',
    fpslParticipant: false,
    commonId: '',
    statusReason: '',
    subType: '',
    allowLiquidInvestment: false,
    webTermConditions: '',
    disclosureStatement: '',
    feeSchedule: '',
    primeBroker: '',
    participantNo: '',
    executingBroker: '',
    institutionNo: '',
    agentNo: '',
    agentAccountNo: '',
    traderId: '',
    marginDisclosure: false,
    marginAgreement: false,
    stocks: false,
    eft: false,
    option: false,
    annualIncome: '',
    liquidNetWorth: '',
    sourceOfFunds: '',
    signed: false,
    imgSignature: '',
    errorMessage: '',
    validationStatus: '',
    batchNo: '',
  });

  const [isEdit, setIsEdit] = React.useState(false);
  const [subAccountList, setSubAccountList] = React.useState([]);
  const [ownerList, setOwnerList] = React.useState([]);
  const [noteList, setNoteList] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [expanded, setExpanded] = React.useState('account');
  const [marginTypes, setMarginTypes] = useState({});
  const [initialFile, setInitialFile] = useState({});

  const getDetails = async (accountId, batchNo) => {
    try {
      const data = await readClient(accountId);

      let modalValue = { ...data.client };

      modalValue.batchNo = batchNo;

      modalValue.activatedAt = protoTimeSpanObjectToString(
        data.client.activatedAt
      );
      modalValue.disabledAt = protoTimeSpanObjectToString(
        data.client.disabledAt
      );
      modalValue.investmentObjectiveDate = dateProtoObjectToString(
        data.client.investmentObjectiveDate
      );
      modalValue.w8w9ReceivedDate = dateProtoObjectToString(
        data.client.w8w9ReceivedDate
      );
      modalValue.webTermConditions = protoTimeSpanObjectToString(
        data.client.webTermConditions
      );
      modalValue.disclosureStatement = protoTimeSpanObjectToString(
        data.client.disclosureStatement
      );
      modalValue.feeSchedule = protoTimeSpanObjectToString(
        data.client.feeSchedule
      );
      modalValue.correspondent =
        modalValue.correspondent !== '    ' ? modalValue.correspondent : '';

      modalValue.participantNo =
        modalValue.participantNo !== '    ' ? modalValue.participantNo : '';

      if (modalValue.imgSignature || modalValue.imgSignature !== '') {
        await fetch(modalValue.imgSignature)
          .then(function(res) {
            return res.arrayBuffer();
          })
          .then(function(buf) {
            const file = new File([buf], 'image_data.jpg', {
              type: 'image/*',
            });
            setInitialFile(file);
          });
      } else {
        setInitialFile({});
      }

      setModalData(modalValue);
      setSubAccountList(data.subAccountsList);
      setOwnerList(data.ownersList);
      setNoteList(data.notesList);
    } catch (error) {
      notifyError(error.message);
    }
  };

  const handleUploadedPhotoStatus = ({ meta, file }, status) => {
    if (status === 'done') {
      const reader = new FileReader();

      reader.addEventListener(
        'load',
        function() {
          setModalData({ ...modalData, imgSignature: reader.result });
        },
        false
      );

      reader.readAsDataURL(file);
    }
  };
  const handleUploadPhoto = (files) => {
    console.log(files.map((f) => f.meta));
  };

  // const handleUploadedPhotoStatus = ({ meta, file }, status) => {
  //     console.log(status, meta, file)
  // }

  useEffect(
    () => {
      async function init() {
        try {
          const param = {
            type: 'Multiplier',
          };

          const data = await listSystemNumber(param);
          setMarginTypes(data.systemNumbersList);
        } catch (error) {
          console.error(error);
          notifyError(error.message);
        }
      }
      if (isOpen) {
        if (value.action !== 'add') {
          setIsEdit(true);
        }
        getDetails(value.accountId, value.batchNo);
        init();
      }
    },
    // eslint-disable-next-line
    [isOpen]
  );

  const handleChange = (e, checkboxValue) => {
    const input = e.currentTarget.name ? e.currentTarget : e.target;

    let modalDataCopy = { ...modalData };
    if (input.name === 'marginType') {
      let multiplier = marginTypes.filter(
        (multiplier) => multiplier.subType === input.value
      );
      modalDataCopy.multiplier = multiplier[0].rate;
    }

    // if (input.name === 'stocks') {
    //   if (checkboxValue === true) {
    //     modalDataCopy.eft = false;
    //     modalDataCopy.option = false;
    //   }
    // } else if (input.name === 'eft') {
    //   if (checkboxValue === true) {
    //     modalDataCopy.stocks = false;
    //     modalDataCopy.option = false;
    //   }
    // } else if (input.name === 'option') {
    //   if (checkboxValue === true) {
    //     modalDataCopy.stocks = false;
    //     modalDataCopy.eft = false;
    //   }
    // }

    setModalData({
      ...modalDataCopy,
      [input.name]:
        checkboxValue === true || checkboxValue === false
          ? checkboxValue
          : [
              'branch',
              'accountNo',
              'masterAccountNo',
              'primeBroker',
              'executingBroker',
              'institutionNo',
              'agentNo',
              'agentAccountNo',
              'traderId',
            ].includes(input.name)
          ? input.value.toUpperCase()
          : input.value,
    });
  };

  const handleCloseModal = async () => {
    setOpen(false);
  };

  const handleExpandAccordion = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  document.onkeyup = function(e) {
    if (e.ctrlKey && e.keyCode === 13) {
      handleClose(modalData, isEdit);
      return;
    }
  };

  return (
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
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={isOpen}>
        <div className={classes.fadeModalFullNP}>
          <Typography
            className={classes.textBold}
            variant="h4"
            style={{ padding: '20px 25px 0px 25px' }}
          >
            {isEdit ? 'Edit' : 'Add New'} Client Account
          </Typography>
          <Box mt={4}>
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
                value={tabIndexValue}
                onChange={handleChangeTab}
                indicatorColor="primary"
                textColor="primary"
                scrollButtons="auto"
                variant="fullWidth"
                centered
              >
                <Tab label="General" {...a11yProps(0)} />
                <Tab label="Owner" {...a11yProps(1)} />
                <Tab label="Sub Account" {...a11yProps(2)} />
                <Tab label="Access" {...a11yProps(3)} />
                <Tab label="Note" {...a11yProps(4)} />
                <Tab label="Attachment" {...a11yProps(5)} />
              </Tabs>
            </AppBar>
            <form className={classes.modalForm} noValidate autoComplete="off">
              <TabPanel
                className={classes.tabBody}
                value={tabIndexValue}
                index={0}
              >
                <Accordion
                  className={classes.accordion}
                  expanded={expanded === 'account'}
                  onChange={handleExpandAccordion('account')}
                >
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className={classes.heading}>Account</Typography>
                  </AccordionSummary>
                  <AccordionDetails className={classes.accordionDetails}>
                    <div className={classes.grdRow}>
                      <div
                        className={classes.grdCell1}
                        style={{ marginRight: 20 }}
                      >
                        <SelectCorrespondent
                          required={true}
                          freeSolo={true}
                          error={validation.correspondent}
                          disabled={isEdit}
                          name="correspondent"
                          value={modalData.correspondent}
                          onChange={handleChange}
                        ></SelectCorrespondent>
                      </div>
                      <div
                        className={classes.grdCell1}
                        style={{ marginRight: 20 }}
                      >
                        <TextField
                          fullWidth
                          error={validation.accountNo}
                          required={true}
                          disabled={isEdit}
                          name="accountNo"
                          label="Account No"
                          value={modalData.accountNo}
                          onChange={handleChange}
                          inputProps={{ maxLength: 50 }}
                          InputLabelProps={{ shrink: true }}
                        />
                      </div>
                      <div
                        className={classes.grdCell1}
                        style={{ marginRight: 20 }}
                      >
                        <TextField
                          fullWidth
                          error={validation.accountName}
                          required={true}
                          label="Account Name"
                          name="accountName"
                          value={modalData.accountName}
                          onChange={handleChange}
                          inputProps={{ maxLength: 300 }}
                          InputLabelProps={{ shrink: true }}
                        />
                      </div>
                      <div className={classes.grdCell1}>
                        <TextField
                          fullWidth
                          name="masterAccountNo"
                          label="Master Account No"
                          value={modalData.masterAccountNo}
                          onChange={handleChange}
                          inputProps={{ maxLength: 50 }}
                          InputLabelProps={{ shrink: true }}
                        />
                      </div>
                    </div>
                    <div className={classes.grdRow}>
                      <div
                        className={classes.grdCell1}
                        style={{ marginRight: 20 }}
                      >
                        <TextField
                          fullWidth
                          name="branch"
                          label="Branch"
                          value={modalData.branch}
                          onChange={handleChange}
                          inputProps={{ maxLength: 50 }}
                          InputLabelProps={{ shrink: true }}
                        />
                      </div>
                      <div
                        className={classes.grdCell1}
                        style={{ marginRight: 20 }}
                      >
                        <TextField
                          fullWidth
                          name="rep"
                          label="Rep/Advisor"
                          value={modalData.rep}
                          onChange={handleChange}
                          inputProps={{ maxLength: 150 }}
                          InputLabelProps={{ shrink: true }}
                        />
                      </div>
                      <div
                        className={classes.grdCell1}
                        style={{ marginRight: 20 }}
                      >
                        <SelectSystemCode
                          error={validation.broker}
                          required={true}
                          name="broker"
                          label="Broker"
                          type="Broker"
                          value={modalData.broker}
                          onChange={handleChange}
                        ></SelectSystemCode>
                      </div>
                      <div className={classes.grdCell1}>
                        <SelectSystemCode
                          error={validation.legalEntity}
                          required={true}
                          name="legalEntity"
                          label="Legal Entity"
                          type="Legal Entity"
                          value={modalData.legalEntity}
                          onChange={handleChange}
                        ></SelectSystemCode>
                      </div>
                    </div>
                    <div className={classes.grdRow}>
                      <div
                        className={classes.grdCell1}
                        style={{ marginRight: 20 }}
                      >
                        <SelectPrivacyConsent
                          error={validation.privacyContent}
                          required={true}
                          name="privacyContent"
                          label="Privacy Consent"
                          value={modalData.privacyContent}
                          onChange={handleChange}
                        ></SelectPrivacyConsent>
                      </div>
                      <div
                        className={classes.grdCell1}
                        style={{ marginRight: 20 }}
                      >
                        <SelectSystemCode
                          required={true}
                          name="accountType"
                          label="Account Type"
                          type="Client Account Type"
                          value={modalData.accountType}
                          onChange={handleChange}
                        ></SelectSystemCode>
                      </div>
                      <div
                        className={classes.grdCell1}
                        style={{ marginRight: 20 }}
                      >
                        <SelectSystemCode
                          name="subType"
                          label="Sub Account Type"
                          type="Client Sub Account Type"
                          note="Joint"
                          value={modalData.subType}
                          onChange={handleChange}
                        ></SelectSystemCode>
                      </div>
                      <div className={classes.grdCell1}>
                        <SelectCommonId
                          freeSolo={true}
                          name="commonId"
                          fullWidth
                          label="Common ID"
                          value={modalData.commonId}
                          onChange={handleChange}
                          InputLabelProps={{ shrink: true }}
                          filter={modalData}
                        />
                      </div>
                    </div>
                    <div className={classes.grdRow} style={{ margin: 0 }}>
                      <div
                        className={classes.grdCell1}
                        style={{ marginRight: 30 }}
                      >
                        <TextField
                          fullWidth
                          name="beneficiary"
                          label="Beneficiary"
                          value={modalData.beneficiary}
                          onChange={handleChange}
                          InputLabelProps={{ shrink: true }}
                          inputProps={{ maxLength: 300 }}
                        />
                      </div>
                      <div
                        className={classes.grdCell1}
                        style={{ marginRight: 20 }}
                      ></div>
                      <div
                        className={classes.grdCell1}
                        style={{ marginRight: 20 }}
                      ></div>
                      <div
                        className={classes.grdCell1}
                        style={{ marginRight: 20 }}
                      ></div>
                    </div>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  className={classes.accordion}
                  expanded={expanded === 'taxInformation'}
                  onChange={handleExpandAccordion('taxInformation')}
                >
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className={classes.heading}>
                      Tax Information
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails className={classes.accordionDetails}>
                    <div className={classes.grdRow} style={{ margin: 0 }}>
                      <div
                        className={classes.grdCell1}
                        style={{ marginRight: 20 }}
                      >
                        <SelectTaxCountry
                          error={validation.taxCountry}
                          required={true}
                          name="taxCountry"
                          label="Tax Country"
                          value={modalData.taxCountry}
                          onChange={(selected) => {
                            setModalData({
                              ...modalData,
                              taxCountry: selected?.code,
                            });
                          }}
                        ></SelectTaxCountry>
                      </div>
                      <div
                        className={classes.grdCell1}
                        style={{ marginRight: 20 }}
                      >
                        <SelectSystemCode
                          error={validation.tefra}
                          required={true}
                          name="tefra"
                          label="TEFRA"
                          type="TEFRA"
                          value={modalData.tefra}
                          onChange={handleChange}
                        ></SelectSystemCode>
                      </div>
                      <div
                        className={classes.grdCell1}
                        style={{ marginRight: 20 }}
                      >
                        <SelectSystemCode
                          error={validation.w8w9}
                          required={true}
                          name="w8w9"
                          label="W8W9"
                          type="W8/W9"
                          value={modalData.w8w9}
                          onChange={handleChange}
                        ></SelectSystemCode>
                      </div>
                      <div className={classes.grdCell1}>
                        <TextField
                          fullWidth
                          name="w8w9ReceivedDate"
                          label="W8W9 Received Date"
                          type="date"
                          value={modalData.w8w9ReceivedDate}
                          onChange={handleChange}
                          InputLabelProps={{ shrink: true }}
                        />
                      </div>
                    </div>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  className={classes.accordion}
                  expanded={expanded === 'trade'}
                  onChange={handleExpandAccordion('trade')}
                >
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className={classes.heading}>Trade</Typography>
                  </AccordionSummary>
                  <AccordionDetails className={classes.accordionDetails}>
                    <div className={classes.grdRow}>
                      <div
                        className={classes.grdCell1}
                        style={{ marginRight: 20 }}
                      >
                        <SelectSystemCode
                          error={validation.marginType}
                          required={true}
                          name="marginType"
                          label="Margin Type"
                          type="Margin Type"
                          value={modalData.marginType}
                          onChange={handleChange}
                        ></SelectSystemCode>
                      </div>
                      <div
                        className={classes.grdCell1}
                        style={{ marginRight: 20 }}
                      >
                        <TextField
                          fullWidth
                          name="largeTraderId"
                          label="Large Trader ID"
                          value={modalData.largeTraderId}
                          onChange={handleChange}
                          inputProps={{ maxLength: 50 }}
                          InputLabelProps={{ shrink: true }}
                        />
                      </div>
                      <div
                        className={classes.grdCell1}
                        style={{ marginRight: 20 }}
                      >
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="dayTrader"
                              checked={modalData.dayTrader}
                              onChange={handleChange}
                            />
                          }
                          label="Day Trader"
                        />
                      </div>
                      <div className={classes.grdCell1}>
                        <TextField
                          fullWidth
                          name="multiplier"
                          label="Multiplier"
                          type="number"
                          value={modalData.multiplier}
                          onChange={handleChange}
                          InputLabelProps={{ shrink: true }}
                        />
                      </div>
                    </div>
                    <div className={classes.grdRow}>
                      <div
                        className={classes.grdCell1}
                        style={{ marginRight: 20 }}
                      >
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="allowLiquidInvestment"
                              checked={modalData.allowLiquidInvestment}
                              onChange={handleChange}
                            />
                          }
                          label="Allow Liquidation"
                        />
                      </div>
                      <div
                        className={classes.grdCell1}
                        style={{ marginRight: 20 }}
                      >
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="accreditedInvestor"
                              checked={modalData.accreditedInvestor}
                              onChange={handleChange}
                            />
                          }
                          label="Accredited Investor"
                        />
                      </div>

                      <div
                        className={classes.grdCell1}
                        style={{ marginRight: 20 }}
                      >
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="marginDisclosure"
                              checked={modalData.marginDisclosure}
                              onChange={handleChange}
                            />
                          }
                          label="Margin Disclosure"
                        />
                      </div>
                      <div
                        className={classes.grdCell1}
                        style={{ marginRight: 20 }}
                      >
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="marginAgreement"
                              checked={modalData.marginAgreement}
                              onChange={handleChange}
                            />
                          }
                          label="Margin Agreement"
                        />
                      </div>
                    </div>
                    <div className={classes.grdRow}>
                      <div
                        className={classes.grdCell1}
                        style={{ marginRight: 20 }}
                      >
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="fpslParticipant"
                              checked={modalData.fpslParticipant}
                              onChange={handleChange}
                            />
                          }
                          label="FPSL Participant"
                        />
                      </div>
                      <div
                        className={classes.grdCell1}
                        style={{ marginRight: 20 }}
                      >
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="fdidFlag"
                              checked={modalData.fdidFlag}
                              onChange={handleChange}
                            />
                          }
                          label="FDID Flag"
                        />
                      </div>
                      <div
                        className={classes.grdCell1}
                        style={{ marginRight: 20 }}
                      >
                        <TextField
                          fullWidth
                          name="fdid"
                          label="FDID"
                          value={modalData.fdid}
                          onChange={handleChange}
                          inputProps={{ maxLength: 150 }}
                          InputLabelProps={{ shrink: true }}
                        />
                      </div>
                      <div
                        className={classes.grdCell1}
                        style={{ marginRight: 20 }}
                      >
                        <TextField
                          fullWidth
                          name="fdidEndReason"
                          label="FDID End Reason"
                          value={modalData.fdidEndReason}
                          onChange={handleChange}
                          inputProps={{ maxLength: 150 }}
                          InputLabelProps={{ shrink: true }}
                        />
                      </div>
                    </div>
                    <div className={classes.grdRow}>
                      <div
                        className={classes.grdCell1}
                        style={{ marginRight: 20 }}
                      >
                        Trading Priviledge
                      </div>
                      <div
                        className={classes.grdCell1}
                        style={{ marginRight: 20 }}
                      >
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="stocks"
                              checked={modalData.stocks}
                              onChange={handleChange}
                            />
                          }
                          label="Stock"
                        />
                      </div>
                      <div
                        className={classes.grdCell1}
                        style={{ marginRight: 20 }}
                      >
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="eft"
                              checked={modalData.eft}
                              onChange={handleChange}
                            />
                          }
                          label="EFT"
                        />
                      </div>
                      <div
                        className={classes.grdCell1}
                        style={{ marginRight: 20 }}
                      >
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="option"
                              checked={modalData.option}
                              onChange={handleChange}
                            />
                          }
                          label="Option"
                        />
                      </div>
                    </div>
                    <div className={classes.grdRow}>
                      <div
                        className={classes.grdCell1}
                        style={{ marginRight: 20 }}
                      >
                        <SelectSystemCode
                          error={validation.investmentObjectiveCode}
                          required={true}
                          name="investmentObjectiveCode"
                          label="Investment Objective Code"
                          type="Investment Objective"
                          value={modalData.investmentObjectiveCode}
                          onChange={handleChange}
                        ></SelectSystemCode>
                      </div>
                      <div
                        className={classes.grdCell1}
                        style={{ marginRight: 20 }}
                      >
                        <TextField
                          fullWidth
                          error={validation.investmentObjectiveDate}
                          required={true}
                          name="investmentObjectiveDate"
                          label="Investment Objective Date"
                          type="date"
                          value={modalData.investmentObjectiveDate}
                          onChange={handleChange}
                          InputLabelProps={{ shrink: true }}
                        />
                      </div>
                      <div
                        className={classes.grdCell1}
                        style={{ marginRight: 20 }}
                      >
                        <SelectSystemCode
                          freeSolo={true}
                          name="annualIncome"
                          label="Annual Income"
                          type="Investment Objectives"
                          subType="Annual Income"
                          itemLabel="code"
                          value={modalData.annualIncome}
                          onChange={handleChange}
                        ></SelectSystemCode>
                      </div>
                      <div
                        className={classes.grdCell1}
                        style={{ marginRight: 20 }}
                      >
                        <SelectSystemCode
                          freeSolo={true}
                          name="liquidNetWorth"
                          label="Liquid Net Worth"
                          type="Investment Objectives"
                          subType="Liquid Net Worth"
                          itemLabel="code"
                          value={modalData.liquidNetWorth}
                          onChange={handleChange}
                        ></SelectSystemCode>
                      </div>
                    </div>
                    <div className={classes.grdRow}>
                      <div
                        className={classes.grdCell1}
                        style={{ marginRight: 20 }}
                      >
                        <SelectSystemCode
                          freeSolo={true}
                          name="sourceOfFunds"
                          label="Source of Funds"
                          type="Fund Source"
                          value={modalData.sourceOfFunds}
                          onChange={handleChange}
                        ></SelectSystemCode>
                      </div>

                      <div
                        className={classes.grdCell1}
                        style={{ marginRight: 20 }}
                      ></div>
                      <div
                        className={classes.grdCell1}
                        style={{ marginRight: 20 }}
                      ></div>
                      <div
                        className={classes.grdCell1}
                        style={{ marginRight: 20 }}
                      ></div>
                    </div>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  className={classes.accordion}
                  expanded={expanded === 'broker'}
                  onChange={handleExpandAccordion('broker')}
                >
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className={classes.heading}>Broker</Typography>
                  </AccordionSummary>
                  <AccordionDetails className={classes.accordionDetails}>
                    <div className={classes.grdRow}>
                      <div
                        className={classes.grdCell1}
                        style={{ marginRight: 30 }}
                      >
                        <TextField
                          fullWidth
                          name="primeBroker"
                          label="Prime Broker"
                          value={modalData.primeBroker}
                          onChange={handleChange}
                          InputLabelProps={{ shrink: true }}
                          inputProps={{ maxLength: 300 }}
                        />
                      </div>
                      <div
                        className={classes.grdCell1}
                        style={{ marginRight: 30 }}
                      >
                        <TextField
                          fullWidth
                          name="participantNo"
                          label="Participant No"
                          value={modalData.participantNo}
                          onChange={handleChange}
                          InputLabelProps={{ shrink: true }}
                          inputProps={{ maxLength: 4 }}
                        />
                      </div>
                      <div
                        className={classes.grdCell1}
                        style={{ marginRight: 30 }}
                      >
                        <TextField
                          fullWidth
                          name="executingBroker"
                          label="Executing Broker"
                          value={modalData.executingBroker}
                          onChange={handleChange}
                          InputLabelProps={{ shrink: true }}
                          inputProps={{ maxLength: 10 }}
                        />
                      </div>
                      <div
                        className={classes.grdCell1}
                        style={{ marginRight: 30 }}
                      >
                        <TextField
                          fullWidth
                          name="institutionNo"
                          label="Institution No"
                          value={modalData.institutionNo}
                          onChange={handleChange}
                          InputLabelProps={{ shrink: true }}
                          inputProps={{ maxLength: 10 }}
                        />
                      </div>
                    </div>
                    <div className={classes.grdRow}>
                      <div
                        className={classes.grdCell1}
                        style={{ marginRight: 30 }}
                      >
                        <TextField
                          fullWidth
                          name="agentNo"
                          label="Agent No"
                          value={modalData.agentNo}
                          onChange={handleChange}
                          InputLabelProps={{ shrink: true }}
                          inputProps={{ maxLength: 10 }}
                        />
                      </div>
                      <div
                        className={classes.grdCell1}
                        style={{ marginRight: 30 }}
                      >
                        <TextField
                          fullWidth
                          name="agentAccountNo"
                          label="Agent Account No"
                          value={modalData.agentAccountNo}
                          onChange={handleChange}
                          InputLabelProps={{ shrink: true }}
                          inputProps={{ maxLength: 10 }}
                        />
                      </div>
                      <div
                        className={classes.grdCell1}
                        style={{ marginRight: 30 }}
                      >
                        <TextField
                          fullWidth
                          name="traderId"
                          label="Trader ID"
                          value={modalData.traderId}
                          onChange={handleChange}
                          InputLabelProps={{ shrink: true }}
                          inputProps={{ maxLength: 10 }}
                        />
                      </div>
                      <div
                        className={classes.grdCell1}
                        style={{ marginRight: 30 }}
                      ></div>
                    </div>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  className={classes.accordion}
                  expanded={expanded === 'other'}
                  onChange={handleExpandAccordion('other')}
                >
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className={classes.heading}>Other</Typography>
                  </AccordionSummary>
                  <AccordionDetails className={classes.accordionDetails}>
                    <div className={classes.grdRow}>
                      {!isImport ? (
                        <div
                          className={classes.grdCellNone}
                          style={{ marginRight: 20 }}
                        >
                          <ImageDropZone
                            error={validation.imgSignature}
                            label="Signature"
                            onChangeStatus={handleUploadedPhotoStatus}
                            onSubmit={handleUploadPhoto}
                            initialFiles={[initialFile]}
                          />
                        </div>
                      ) : null}

                      <div className={classes.grdCell1}>
                        <div className={classes.grdRow}>
                          <div
                            className={classes.grdCell1}
                            style={{ marginRight: 20 }}
                          >
                            <TextField
                              fullWidth
                              error={validation.webTermConditions}
                              name="webTermConditions"
                              label="Web Term Conditions"
                              type="datetime-local"
                              value={modalData.webTermConditions}
                              onChange={handleChange}
                              InputLabelProps={{ shrink: true }}
                            />
                          </div>
                          <div
                            className={classes.grdCell1}
                            style={{ marginRight: 20 }}
                          >
                            <TextField
                              fullWidth
                              error={validation.disclosureStatement}
                              name="disclosureStatement"
                              label="Disclosure Statement"
                              type="datetime-local"
                              value={modalData.disclosureStatement}
                              onChange={handleChange}
                              InputLabelProps={{ shrink: true }}
                            />
                          </div>
                          <div
                            className={classes.grdCell1}
                            style={{ marginRight: 20 }}
                          >
                            <TextField
                              fullWidth
                              error={validation.feeSchedule}
                              name="feeSchedule"
                              label="Fee Schedule"
                              type="datetime-local"
                              value={modalData.feeSchedule}
                              onChange={handleChange}
                              InputLabelProps={{ shrink: true }}
                            />
                          </div>
                        </div>

                        <div className={classes.grdRow}>
                          <div
                            className={classes.grdCell1}
                            style={{ marginRight: 20 }}
                          >
                            <TextField
                              fullWidth
                              error={validation.activatedAt}
                              required={true}
                              name="activatedAt"
                              label="Activated At"
                              type="datetime-local"
                              value={modalData.activatedAt}
                              onChange={handleChange}
                              InputLabelProps={{ shrink: true }}
                            />
                          </div>
                          <div
                            className={classes.grdCell1}
                            style={{ marginRight: 20 }}
                          >
                            <TextField
                              fullWidth
                              name="disabledAt"
                              label="Disabled At"
                              type="datetime-local"
                              value={modalData.disabledAt}
                              onChange={handleChange}
                              InputLabelProps={{ shrink: true }}
                            />
                          </div>
                          <div
                            className={classes.grdCell1}
                            style={{ marginRight: 20 }}
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
                        </div>

                        <div className={classes.grdRow}>
                          <div
                            className={classes.grdCell1}
                            style={{ marginRight: 20 }}
                          >
                            <TextField
                              fullWidth
                              name="statusReason"
                              label="Status Reason"
                              value={modalData.statusReason}
                              onChange={handleChange}
                              inputProps={{ maxLength: 150 }}
                              InputLabelProps={{ shrink: true }}
                            />
                          </div>
                          {!isImport ? (
                            <div
                              className={classes.grdCell1}
                              style={{ marginRight: 20 }}
                            >
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    name="signed"
                                    checked={modalData.signed}
                                    onChange={handleChange}
                                  />
                                }
                                label="Signed"
                              />
                            </div>
                          ) : (
                            <div
                              className={classes.grdCell1}
                              style={{ marginRight: 20 }}
                            ></div>
                          )}
                          <div
                            className={classes.grdCell1}
                            style={{ marginRight: 20 }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </AccordionDetails>
                </Accordion>
              </TabPanel>
              <TabPanel
                className={classes.tabBody}
                value={tabIndexValue}
                index={1}
              >
                <OwnerTable
                  accountId={modalData.accountId}
                  list={ownerList}
                  set={setOwnerList}
                  importMode={isImport}
                  style={{ paddingBottom: 0 }}
                />
              </TabPanel>
              <TabPanel
                className={classes.tabBody}
                value={tabIndexValue}
                index={2}
              >
                <Box>
                  <SubAccountTable
                    accountId={modalData.accountId}
                    list={subAccountList}
                    set={setSubAccountList}
                  />
                </Box>
              </TabPanel>
              <TabPanel
                className={classes.tabBody}
                value={tabIndexValue}
                index={3}
              >
                <AccessTable accountId={modalData.accountId} isEdit={isEdit} />
              </TabPanel>
              <TabPanel
                className={classes.tabBody}
                value={tabIndexValue}
                index={4}
              >
                <NoteTable
                  accountId={modalData.accountId}
                  list={noteList}
                  set={setNoteList}
                  style={{ paddingBottom: 0 }}
                />
              </TabPanel>
              <TabPanel
                className={classes.tabBody}
                value={tabIndexValue}
                index={5}
              >
                <AttachmentTable
                  accountId={modalData.accountId}
                  style={{ paddingBottom: 0 }}
                />
              </TabPanel>
              <div
                className={classes.modalFooter}
                style={{ margin: 0, padding: '10px 30px 30px 25px' }}
              >
                {[0, 1, 2].includes(tabIndexValue) && !isImport && (
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
                        setOpen(true);
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
                      handleClose();
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
                      handleClose(modalData, isEdit);
                    }}
                  >
                    Save
                  </Button>
                </div>
              </div>
            </form>
          </Box>
          {open && (
            <ClientAuditModal
              onClose={handleCloseModal}
              open={open}
              value={value.accountId}
              tabIndex={tabIndexValue}
            ></ClientAuditModal>
          )}
        </div>
      </Fade>
    </Modal>
  );
}
