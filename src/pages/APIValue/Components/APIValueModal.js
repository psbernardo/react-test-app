import React, { useState, useEffect } from 'react';
import useStyles from '../../../styles';
import {
  Typography,
  Button,
  Modal,
  Backdrop,
  Fade,
  Box,
  TextField,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Checkbox,
  FormControlLabel
} from '@material-ui/core';

import { ExpandMore as ExpandMoreIcon } from '@material-ui/icons';

import ApiValueContactInfoTable from './ApiValueContactInfoTable';
import { dateProtoObjectToString, protoDateObjectToString, protoTimeSpanObjectToString } from '../../../services/ConvertService';

import { listApiStatus } from '../../../services/ApiStatusService';
import { listApiKycStatus } from '../../../services/ApiKycStatusService';
import { notifyError } from 'components/Notification/Notification';
import ApiValueIdentificationTable from './ApiValueIdentificationTable';

export default function APIValueModal({
  onClose: handleClose,
  open: isOpen,
  value,
}) {

  const classes = useStyles();
  const [modalData, setModalData] = useState({});
  const [apiStatusData, setApiStatusData] = useState({});
  const [apiKycStatusData, setApiKycStatusData] = useState({});
  const [isEdit, setIsEdit] = React.useState(false);
  const [expanded, setExpanded] = React.useState('');
  const minimumMultiLine = 10;

  const getDetails = async (value) => {
    try {
      // Get API Status
      var data = await listApiStatus(value);
      let modalValue = { ...data.apiStatus};

      modalValue.createdAt = protoTimeSpanObjectToString(
        data.apiStatus.createdAt
      );

      setApiStatusData(modalValue);
      
      // Get API KYC Status
      var data = await listApiKycStatus(value);

      modalValue = { ...data.apiKycStatus};

      modalValue.timeStamp = protoTimeSpanObjectToString(
        data.apiKycStatus.timeStamp
      );

      setApiKycStatusData(modalValue);
      
    } catch (error) {
      notifyError(error.message);
    }
  };

  useEffect(
    () => {
      if (isOpen) {

        let modalValue = { ...value};

        modalValue.primaryApplicationSignedOn = dateProtoObjectToString(
          value.primaryApplicationSignedOn
        );

        modalValue.birthDate = dateProtoObjectToString(
          value.birthDate
        );

        modalValue.customerAgreementsDisclosureStatement = protoTimeSpanObjectToString(
          value.customerAgreementsDisclosureStatement
        );

        modalValue.customerAgreementsWebTermCondition = protoTimeSpanObjectToString(
          value.customerAgreementsWebTermCondition
        );

        modalValue.customerAgreementsFeeSchedule = protoTimeSpanObjectToString(
          value.customerAgreementsFeeSchedule
        );
        
        setModalData(modalValue);
        getDetails(value);
      }
    },
    // eslint-disable-next-line
    [isOpen]
  );

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
            API Value Details
          </Typography>
          <Box mt={4}>
            <form className={classes.modalForm} noValidate autoComplete="off">
                <Accordion
                  className={classes.accordion}
                  expanded={expanded === 'account'}
                  onChange={handleExpandAccordion('account')}
                >
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className={classes.heading}>Client</Typography>
                  </AccordionSummary>
                  <AccordionDetails className={classes.accordionDetails}>
                    <div className={classes.grdRow}>
                      <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                        <TextField
                          label="Client ID"
                          fullWidth
                          InputProps={{
                            readOnly: true,
                          }}
                          InputLabelProps={{ shrink: true }}
                          value={modalData.clientId}
                        />
                      </div>
                      <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                        <TextField
                          label="ID"
                          fullWidth
                          InputProps={{
                            readOnly: true,
                          }}
                          InputLabelProps={{ shrink: true }}
                          value={modalData.id}
                        />
                      </div>
                      <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                        <TextField
                          label="Broker ID"
                          fullWidth
                          InputProps={{
                            readOnly: true,
                          }}
                          InputLabelProps={{ shrink: true }}
                          value={modalData.brokerId}
                        />
                      </div>
                      <div className={classes.grdCell1}>
                        <TextField
                          label="Owner ID"
                          fullWidth
                          InputProps={{
                            readOnly: true,
                          }}
                          InputLabelProps={{ shrink: true }}
                          value={modalData.ownerId}
                        />
                      </div>
                    </div>
                    <div className={classes.grdRow}>
                      <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                        <TextField
                          label="KYC Status"
                          fullWidth
                          InputProps={{
                            readOnly: true,
                          }}
                          InputLabelProps={{ shrink: true }}
                          value={modalData.kycStatus}
                        />
                      </div>
                      <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                        <TextField
                          label="Broker Account Status"
                          fullWidth
                          InputProps={{
                            readOnly: true,
                          }}
                          InputLabelProps={{ shrink: true }}
                          value={modalData.brokerAccountStatus}
                        />
                      </div>
                      <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                        <TextField
                          label="Broker Account Status Reason"
                          fullWidth
                          InputProps={{
                            readOnly: true,
                          }}
                          InputLabelProps={{ shrink: true }}
                          value={modalData.brokerAccountStatusReason}
                        />
                      </div>
                      <div className={classes.grdCell1}></div>
                    </div>
                    <div className={classes.grdRow}>
                      <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                        <TextField
                          label="Type"
                          fullWidth
                          InputProps={{
                            readOnly: true,
                          }}
                          InputLabelProps={{ shrink: true }}
                          value={modalData.type}
                        />
                      </div>
                      <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                        <TextField
                          label="Sub Type"
                          fullWidth
                          InputProps={{
                            readOnly: true,
                          }}
                          InputLabelProps={{ shrink: true }}
                          value={modalData.subType}
                        />
                      </div>
                      <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                        <TextField
                          label="Domicile"
                          fullWidth
                          InputProps={{
                            readOnly: true,
                          }}
                          InputLabelProps={{ shrink: true }}
                          value={modalData.domicile}
                        />
                      </div>
                      <div className={classes.grdCell1}>
                        <FormControlLabel
                          control={<Checkbox color="primary" />}
                          label="Allow Illiquid Investments"
                          checked={modalData.allowIlliquidInvestments}
                        />
                      </div>
                    </div>
                    <div className={classes.grdRow}>
                      <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                        <TextField
                          label="Account Legal Name"
                          fullWidth
                          InputProps={{
                            readOnly: true,
                          }}
                          InputLabelProps={{ shrink: true }}
                          value={modalData.accountLegalName}
                        />
                      </div>
                      <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                        <TextField
                          label="Accreditation"
                          fullWidth
                          InputProps={{
                            readOnly: true,
                          }}
                          InputLabelProps={{ shrink: true }}
                          value={modalData.accreditation}
                        />
                      </div>
                      <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                        <TextField
                          label="Primary Application Signed On"
                          type="date"
                          fullWidth
                          InputProps={{
                            readOnly: true,
                          }}
                          InputLabelProps={{ shrink: true }}
                          value={modalData.primaryApplicationSignedOn}
                        />
                      </div>
                      <div className={classes.grdCell1}>
                        <TextField
                          label="Clearing Information"
                          fullWidth
                          InputProps={{
                            readOnly: true,
                          }}
                          InputLabelProps={{ shrink: true }}
                          value={modalData.clearingInformation}
                        />
                      </div>
                    </div>
                    <div className={classes.grdRow}>
                      <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                        <TextField
                          label="DVP Exemptions"
                          fullWidth
                          InputProps={{
                            readOnly: true,
                          }}
                          InputLabelProps={{ shrink: true }}
                          value={modalData.dvpExemptions}
                        />
                      </div>
                      <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                        <FormControlLabel
                          control={<Checkbox color="primary" />}
                          label="Dino Migration Account"
                          checked={modalData.dinoMigrationAccount}
                        />
                      </div>
                      <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                        <TextField
                          label="Migration Changes"
                          fullWidth
                          InputProps={{
                            readOnly: true,
                          }}
                          InputLabelProps={{ shrink: true }}
                          value={modalData.migrationChanges}
                        />
                      </div>
                      <div className={classes.grdCell1}>
                        <FormControlLabel
                          control={<Checkbox color="primary" />}
                          label="Current User Is Primary"
                          checked={modalData.currentUserIsPrimary}
                        />
                      </div>
                    </div>
                    <div className={classes.grdRow}>
                      <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                        <TextField
                          label="First Name"
                          fullWidth
                          InputProps={{
                            readOnly: true,
                          }}
                          InputLabelProps={{ shrink: true }}
                          value={modalData.firstName}
                        />
                      </div>
                      <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                        <TextField
                          label="Middle Name"
                          fullWidth
                          InputProps={{
                            readOnly: true,
                          }}
                          InputLabelProps={{ shrink: true }}
                          value={modalData.middleName}
                        />
                      </div>
                      <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                        <TextField
                          label="Last Name"
                          fullWidth
                          InputProps={{
                            readOnly: true,
                          }}
                          InputLabelProps={{ shrink: true }}
                          value={modalData.lastName}
                        />
                      </div>
                      <div className={classes.grdCell1}>
                        <TextField
                          label="Email"
                          fullWidth
                          InputProps={{
                            readOnly: true,
                          }}
                          InputLabelProps={{ shrink: true }}
                          value={modalData.email}
                        />
                      </div>
                    </div>
                    <div className={classes.grdRow}>
                      <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                        <TextField
                          label="Birth Date"
                          type="date"
                          fullWidth
                          InputProps={{
                            readOnly: true,
                          }}
                          InputLabelProps={{ shrink: true }}
                          value={modalData.firstName}
                        />
                      </div>
                      <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                        <TextField
                          label="Citizenship Country Code"
                          fullWidth
                          InputProps={{
                            readOnly: true,
                          }}
                          InputLabelProps={{ shrink: true }}
                          value={modalData.citizenshipCountryCode}
                        />
                      </div>
                      <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                        <TextField
                          label="Country Code"
                          fullWidth
                          InputProps={{
                            readOnly: true,
                          }}
                          InputLabelProps={{ shrink: true }}
                          value={modalData.countryCode}
                        />
                      </div>
                      <div className={classes.grdCell1}></div>
                    </div>
                    <div className={classes.grdRow}>
                      <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                        <TextField
                          label="Tin"
                          fullWidth
                          InputProps={{
                            readOnly: true,
                          }}
                          InputLabelProps={{ shrink: true }}
                          value={modalData.tin}
                        />
                      </div>
                      <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                        <TextField
                          label="International Tin"
                          fullWidth
                          InputProps={{
                            readOnly: true,
                          }}
                          InputLabelProps={{ shrink: true }}
                          value={modalData.internationalTin}
                        />
                      </div>
                      <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                        <TextField
                          label="Tin Country Code"
                          fullWidth
                          InputProps={{
                            readOnly: true,
                          }}
                          InputLabelProps={{ shrink: true }}
                          value={modalData.tinCountryCode}
                        />
                      </div>
                      <div className={classes.grdCell1}></div>
                    </div>
                    <div className={classes.grdRow}>
                      <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                        <TextField
                          label="Physical Street"
                          fullWidth
                          InputProps={{
                            readOnly: true,
                          }}
                          InputLabelProps={{ shrink: true }}
                          value={modalData.physicalStreet}
                        />
                      </div>
                      <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                        <TextField
                          label="Physical Street 2"
                          fullWidth
                          InputProps={{
                            readOnly: true,
                          }}
                          InputLabelProps={{ shrink: true }}
                          value={modalData.physicalStreet2}
                        />
                      </div>
                      <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                        <TextField
                          label="Physical Street 3"
                          fullWidth
                          InputProps={{
                            readOnly: true,
                          }}
                          InputLabelProps={{ shrink: true }}
                          value={modalData.physicalStreet3}
                        />
                      </div>
                      <div className={classes.grdCell1}>
                        <TextField
                          label="Physical Street 4"
                          fullWidth
                          InputProps={{
                            readOnly: true,
                          }}
                          InputLabelProps={{ shrink: true }}
                          value={modalData.physicalStreet4}
                        />
                      </div>
                    </div>
                    <div className={classes.grdRow}>
                      <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                        <TextField
                          label="Physical City"
                          fullWidth
                          InputProps={{
                            readOnly: true,
                          }}
                          InputLabelProps={{ shrink: true }}
                          value={modalData.physicalCity}
                        />
                      </div>
                      <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                        <TextField
                          label="Physical Region"
                          fullWidth
                          InputProps={{
                            readOnly: true,
                          }}
                          InputLabelProps={{ shrink: true }}
                          value={modalData.physicalRegion}
                        />
                      </div>
                      <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                        <TextField
                          label="Physical Postal Code"
                          fullWidth
                          InputProps={{
                            readOnly: true,
                          }}
                          InputLabelProps={{ shrink: true }}
                          value={modalData.physicalPostalCode}
                        />
                      </div>
                      <div className={classes.grdCell1}>
                        <TextField
                          label="Physical Country Code"
                          fullWidth
                          InputProps={{
                            readOnly: true,
                          }}
                          InputLabelProps={{ shrink: true }}
                          value={modalData.physicalCountryCode}
                        />
                      </div>
                    </div>
                    <div className={classes.grdRow}>
                      <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                        <TextField
                          label="Mailing Street"
                          fullWidth
                          InputProps={{
                            readOnly: true,
                          }}
                          InputLabelProps={{ shrink: true }}
                          value={modalData.mailingStreet}
                        />
                      </div>
                      <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                        <TextField
                          label="Mailing Street 2"
                          fullWidth
                          InputProps={{
                            readOnly: true,
                          }}
                          InputLabelProps={{ shrink: true }}
                          value={modalData.mailingStreet2}
                        />
                      </div>
                      <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                        <TextField
                          label="Mailing Street 3"
                          fullWidth
                          InputProps={{
                            readOnly: true,
                          }}
                          InputLabelProps={{ shrink: true }}
                          value={modalData.mailingStreet3}
                        />
                      </div>
                      <div className={classes.grdCell1}>
                        <TextField
                          label="Mailing Street 4"
                          fullWidth
                          InputProps={{
                            readOnly: true,
                          }}
                          InputLabelProps={{ shrink: true }}
                          value={modalData.mailingStreet4}
                        />
                      </div>
                    </div>
                    <div className={classes.grdRow}>
                      <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                        <TextField
                          label="Mailing City"
                          fullWidth
                          InputProps={{
                            readOnly: true,
                          }}
                          InputLabelProps={{ shrink: true }}
                          value={modalData.mailingCity}
                        />
                      </div>
                      <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                        <TextField
                          label="Mailing Region"
                          fullWidth
                          InputProps={{
                            readOnly: true,
                          }}
                          InputLabelProps={{ shrink: true }}
                          value={modalData.mailingRegion}
                        />
                      </div>
                      <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                        <TextField
                          label="Mailing Postal Code"
                          fullWidth
                          InputProps={{
                            readOnly: true,
                          }}
                          InputLabelProps={{ shrink: true }}
                          value={modalData.mailingPostalCode}
                        />
                      </div>
                      <div className={classes.grdCell1}>
                        <TextField
                          label="Mailing Country Code"
                          fullWidth
                          InputProps={{
                            readOnly: true,
                          }}
                          InputLabelProps={{ shrink: true }}
                          value={modalData.mailingCountryCode}
                        />
                      </div>
                    </div>
                    <div className={classes.grdRow}>
                      <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                        <TextField
                          label="Employment Status ID"
                          fullWidth
                          InputProps={{
                            readOnly: true,
                          }}
                          InputLabelProps={{ shrink: true }}
                          value={modalData.employmentStatusId}
                        />
                      </div>
                      <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                        <TextField
                          label="Employment Status Label"
                          fullWidth
                          InputProps={{
                            readOnly: true,
                          }}
                          InputLabelProps={{ shrink: true }}
                          value={modalData.employmentStatusLabel}
                        />
                      </div>
                      <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                        <TextField
                          label="Employment Employer Name"
                          fullWidth
                          InputProps={{
                            readOnly: true,
                          }}
                          InputLabelProps={{ shrink: true }}
                          value={modalData.employmentEmployerName}
                        />
                      </div>
                      <div className={classes.grdCell1}>
                        <TextField
                          label="Employment Occupation"
                          fullWidth
                          InputProps={{
                            readOnly: true,
                          }}
                          InputLabelProps={{ shrink: true }}
                          value={modalData.employmentOccupation}
                        />
                      </div>
                    </div>
                    <div className={classes.grdRow}>
                      <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                        <FormControlLabel
                          control={<Checkbox color="primary" />}
                          label="Investment Allow Illiquid Investments"
                          checked={modalData.investmentAllowIlliquidInvestments}
                        />
                      </div>
                      <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                        <TextField
                          label="Investor Purpose ID"
                          fullWidth
                          InputProps={{
                            readOnly: true,
                          }}
                          InputLabelProps={{ shrink: true }}
                          value={modalData.investorPurposeId}
                        />
                      </div>
                      <div className={classes.grdCell1}>
                        <TextField
                          label="Investor Purpose Label"
                          fullWidth
                          InputProps={{
                            readOnly: true,
                          }}
                          InputLabelProps={{ shrink: true }}
                          value={modalData.investorPurposeLabel}
                        />
                      </div>
                    </div>
                    <div className={classes.grdRow}>
                      <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                        <FormControlLabel
                          control={<Checkbox color="primary" />}
                          label="Has Public Disclosure"
                          checked={modalData.hasPublicDisclosure}
                        />
                      </div>
                      <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                        <TextField
                          label="Public Disclosure"
                          fullWidth
                          InputProps={{
                            readOnly: true,
                          }}
                          InputLabelProps={{ shrink: true }}
                          value={modalData.publicDisclosure}
                        />
                      </div>
                      <div className={classes.grdCell1}></div>
                    </div>
                    <div className={classes.grdRow}>
                      <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                        <FormControlLabel
                          control={<Checkbox color="primary" />}
                          label="Has Stock Disclosure"
                          checked={modalData.hasStockDisclosure}
                        />
                      </div>
                      <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                        <TextField
                          label="Stock Disclosure Firm"
                          fullWidth
                          InputProps={{
                            readOnly: true,
                          }}
                          InputLabelProps={{ shrink: true }}
                          value={modalData.stockDisclosureFirm}
                        />
                      </div>
                      <div className={classes.grdCell1}>
                        <TextField
                          label="Stock Disclosure Position"
                          fullWidth
                          InputProps={{
                            readOnly: true,
                          }}
                          InputLabelProps={{ shrink: true }}
                          value={modalData.stockDisclosurePosition}
                        />
                      </div>
                    </div>
                    <div className={classes.grdRow}>
                      <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                        <TextField
                          label="Customer Agreements Web Term Condition"
                          type="datetime-local"
                          fullWidth
                          InputProps={{
                            readOnly: true,
                          }}
                          InputLabelProps={{ shrink: true }}
                          value={modalData.customerAgreementsWebTermCondition}
                        />
                      </div>
                      <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                        <TextField
                          label="Customer Agreements Disclosure Statement"
                          type="datetime-local"
                          fullWidth
                          InputProps={{
                            readOnly: true,
                          }}
                          InputLabelProps={{ shrink: true }}
                          value={modalData.customerAgreementsDisclosureStatement}
                        />
                      </div>
                      <div className={classes.grdCell1}>
                        <TextField
                          label="Customer Agreements Fee Schedule"
                          type="datetime-local"
                          fullWidth
                          InputProps={{
                            readOnly: true,
                          }}
                          InputLabelProps={{ shrink: true }}
                          value={modalData.customerAgreementsFeeSchedule}
                        />
                      </div>
                    </div>
                    <div className={classes.grdRow}>
                      <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                        <TextField
                          label="Trusted Contact First Name"
                          fullWidth
                          InputProps={{
                            readOnly: true,
                          }}
                          InputLabelProps={{ shrink: true }}
                          value={modalData.trustedContactFirstName}
                        />
                      </div>
                      <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                        <TextField
                          label="Trusted Contact Last Name"
                          fullWidth
                          InputProps={{
                            readOnly: true,
                          }}
                          InputLabelProps={{ shrink: true }}
                          value={modalData.trustedContactLastName}
                        />
                      </div>
                      <div className={classes.grdCell1}>
                        <TextField
                          label="Trusted Contact Phone Number"
                          fullWidth
                          InputProps={{
                            readOnly: true,
                          }}
                          InputLabelProps={{ shrink: true }}
                          value={modalData.trustedContactPhoneNumber}
                        />
                      </div>
                    </div>
                    <div className={classes.grdRow}>
                      <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                        <TextField
                          label="Trusted Contact Email Address"
                          fullWidth
                          InputProps={{
                            readOnly: true,
                          }}
                          InputLabelProps={{ shrink: true }}
                          value={modalData.trustedContactEmailAddress}
                        />
                      </div>
                      <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                        <TextField
                          label="Trusted Contact Address Line"
                          fullWidth
                          InputProps={{
                            readOnly: true,
                          }}
                          InputLabelProps={{ shrink: true }}
                          value={modalData.trustedContactAddressLine}
                        />
                      </div>
                      <div className={classes.grdCell1}>
                        <TextField
                          label="Trusted Contact Address Line 2"
                          fullWidth
                          InputProps={{
                            readOnly: true,
                          }}
                          InputLabelProps={{ shrink: true }}
                          value={modalData.trustedContactAddressLine2}
                        />
                      </div>
                    </div>
                    <div className={classes.grdRow}>
                      <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                        <TextField
                          label="Trusted Contact City"
                          fullWidth
                          InputProps={{
                            readOnly: true,
                          }}
                          InputLabelProps={{ shrink: true }}
                          value={modalData.trustedContactCity}
                        />
                      </div>
                      <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                        <TextField
                          label="Trusted Contact Region"
                          fullWidth
                          InputProps={{
                            readOnly: true,
                          }}
                          InputLabelProps={{ shrink: true }}
                          value={modalData.trustedContactRegion}
                        />
                      </div>
                      <div className={classes.grdCell1}>
                        <TextField
                          label="Trusted Contact Postal Code"
                          fullWidth
                          InputProps={{
                            readOnly: true,
                          }}
                          InputLabelProps={{ shrink: true }}
                          value={modalData.trustedContactEmailAddressPostalCode}
                        />
                      </div>
                    </div>
                    <div className={classes.grdRow}>
                      <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                        <TextField
                          label="Trusted Contact Country"
                          fullWidth
                          InputProps={{
                            readOnly: true,
                          }}
                          InputLabelProps={{ shrink: true }}
                          value={modalData.trustedContactCountry}
                        />
                      </div>
                      <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                        <FormControlLabel
                          control={<Checkbox color="primary" />}
                          label="Trusted Contact Opt Out"
                          checked={modalData.trustedContactOptOut}
                        />
                      </div>
                      <div className={classes.grdCell1}></div>
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
                      Status
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails className={classes.accordionDetails}>
                    <div className={classes.grdRow}>
                      <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                        <TextField
                          label="Status ID"
                          fullWidth
                          InputProps={{
                            readOnly: true,
                          }}
                          InputLabelProps={{ shrink: true }}
                          value={apiStatusData.statusId}
                        />
                      </div>
                      <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                        <TextField
                          label="Topic"
                          fullWidth
                          InputProps={{
                            readOnly: true,
                          }}
                          InputLabelProps={{ shrink: true }}
                          value={apiStatusData.topic}
                        />
                      </div>
                      <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                        <TextField
                          label="Broker ID"
                          fullWidth
                          InputProps={{
                            readOnly: true,
                          }}
                          InputLabelProps={{ shrink: true }}
                          value={apiStatusData.brokerId}
                        />
                      </div>
                      <div className={classes.grdCell1}>
                        <TextField
                          label="Account ID"
                          fullWidth
                          InputProps={{
                            readOnly: true,
                          }}
                          InputLabelProps={{ shrink: true }}
                          value={apiStatusData.accountId}
                        />
                      </div>
                    </div>
                    <div className={classes.grdRow}>
                      <div className={classes.grdCell1}>
                        <TextField
                          multiline
                          fullWidth
                          required
                          name="disclosure"
                          label="JSON"
                          rows={minimumMultiLine}
                          rowsMax={Infinity}
                          value={apiStatusData.json}
                          inputProps={{ maxLength: 300 }}
                          InputLabelProps={{ shrink: true }}
                        />
                      </div>
                    </div>
                    <div className={classes.grdRow}>
                      <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                        <FormControlLabel
                          control={<Checkbox color="primary" />}
                          label="API"
                          checked={apiStatusData.api == true}
                        />
                      </div>
                      <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                        <FormControlLabel
                          control={<Checkbox color="primary" />}
                          label="SAS"
                          checked={apiStatusData.sas == true}
                        />
                      </div>
                      <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                        <FormControlLabel
                          control={<Checkbox color="primary" />}
                          label="OMS"
                          checked={apiStatusData.oms == true}
                        />
                      </div>
                      <div className={classes.grdCell1}></div>
                    </div>
                    <div className={classes.grdRow}>
                      <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                        <TextField
                          label="Created At"
                          type="datetime-local"
                          fullWidth
                          InputProps={{
                            readOnly: true,
                          }}
                          InputLabelProps={{ shrink: true }}
                          value={apiStatusData.createdAt}
                        />
                      </div>
                      <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                        <TextField
                          label="Error Message"
                          fullWidth
                          InputProps={{
                            readOnly: true,
                          }}
                          InputLabelProps={{ shrink: true }}
                          value={apiStatusData.errorMessage}
                        />
                      </div>
                      <div className={classes.grdCell1} style={{ marginRight: 30 }}></div>
                      <div className={classes.grdCell1}></div>
                    </div>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  className={classes.accordion}
                  expanded={expanded === 'trade'}
                  onChange={handleExpandAccordion('trade')}
                >
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className={classes.heading}>KYC Status</Typography>
                  </AccordionSummary>
                  <AccordionDetails className={classes.accordionDetails}>
                  <div className={classes.grdRow}>
                      <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                        <TextField
                          label="KYC Status ID"
                          fullWidth
                          InputProps={{
                            readOnly: true,
                          }}
                          InputLabelProps={{ shrink: true }}
                          value={apiKycStatusData.kycStatusId}
                        />
                      </div>
                      <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                        <TextField
                          label="Owner ID"
                          fullWidth
                          InputProps={{
                            readOnly: true,
                          }}
                          InputLabelProps={{ shrink: true }}
                          value={apiKycStatusData.ownerId}
                        />
                      </div>
                      <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                        <TextField
                          label="Broker ID"
                          fullWidth
                          InputProps={{
                            readOnly: true,
                          }}
                          InputLabelProps={{ shrink: true }}
                          value={apiKycStatusData.brokerId}
                        />
                      </div>
                      <div className={classes.grdCell1}>
                        <TextField
                          label="Account ID"
                          fullWidth
                          InputProps={{
                            readOnly: true,
                          }}
                          InputLabelProps={{ shrink: true }}
                          value={apiKycStatusData.accountId}
                        />
                      </div>
                    </div>
                    <div className={classes.grdRow}>
                      <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                        <TextField
                          label="Timestamp"
                          type="datetime-local"
                          fullWidth
                          InputProps={{
                            readOnly: true,
                          }}
                          InputLabelProps={{ shrink: true }}
                          value={apiKycStatusData.timeStamp}
                        />
                      </div>
                      <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                        <TextField
                          label="Status"
                          fullWidth
                          InputProps={{
                            readOnly: true,
                          }}
                          InputLabelProps={{ shrink: true }}
                          value={apiKycStatusData.status}
                        />
                      </div>
                    </div>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  className={classes.accordion}
                  expanded={expanded === 'broker'}
                  onChange={handleExpandAccordion('broker')}
                >
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className={classes.heading}>Contact Info</Typography>
                  </AccordionSummary>
                  <AccordionDetails className={classes.accordionDetails}>

                    <ApiValueContactInfoTable
                      value={modalData}
                      style={{ paddingBottom: 0 }}
                    />

                  </AccordionDetails>
                </Accordion>
                <Accordion
                  className={classes.accordion}
                  expanded={expanded === 'other'}
                  onChange={handleExpandAccordion('other')}
                >
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className={classes.heading}>Identification</Typography>
                  </AccordionSummary>
                  <AccordionDetails className={classes.accordionDetails}>
                    
                    <ApiValueIdentificationTable
                      value={modalData}
                      style={{ paddingBottom: 0 }}
                    />

                  </AccordionDetails>
                </Accordion>
              <div
                className={classes.modalFooter}
                style={{ margin: 0, padding: '10px 30px 30px 25px' }}
              >
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
              </div>
            </form>
          </Box>
        </div>
      </Fade>
    </Modal>
  );
}
