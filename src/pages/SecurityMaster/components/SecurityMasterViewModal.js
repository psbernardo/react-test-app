import React, { useState, useEffect } from 'react';
import useStyles from '../../../styles';
import { readEquity } from '../../../services/EquityService';
import { readOption } from '../../../services/OptionProfileService';
import { dateProtoObjectToString } from '../../../services/ConvertService';

import {
  Typography,
  Button,
  TextField,
  Modal,
  Backdrop,
  Fade,
  Box,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core';

/*Moment JS*/
import moment from 'moment/moment.js';
export default function SecurityMasterViewModal({
  onClose: handleClose,
  open: isOpen,
  value,
}) {
  const classes = useStyles();
  //Temp Fix for conversion from uncontrolled to controlled
  const [modalData, setModalData] = useState({
    symbol: '',
    cusip: '',
    symbolDescription: '',
    isMarginable: false,
    securityType: '',
    secSubType: '',
    isWhenIssued: false,
    exchangeCode: '',
    sic: '',
    isDtcEligible: false,
    status: '',
    createdBy: '',
    createdAt: '',
    originalCusip: '',
    assetType: '',
    leveragedFactor: '',
    country: '',
    fileDate: '',
    modifiedTime: '',
    modifiedDate: '',
    inactiveDate: '',
    startDate: '',
    endDate: '',
    previousOriginalCusip: '',
    underlyingOriginalCusip: '',
    secType: '',
    pc: '',
    strikePrice: '',
    month: '',
    year: '',
    expirationDate: '',
    multiplier: '',
    unitMultiplier: '',
    systemDate: '',
  });
  const [secMasterData, setSecMasterData] = useState({});

  useEffect(() => {
    if (isOpen) {
      setSecMasterData(value);
      fetchSecMasterData(value);
    }
  }, [isOpen, value]);

  const fetchSecMasterData = async (data) => {
    let assetType = data.assetType;
    if (assetType === 'E') {
      const { equity } = await readEquity(data);
      equity.fileDate = dateProtoObjectToString(equity.fileDate);
      equity.endDate = dateProtoObjectToString(equity.endDate);
      equity.startDate = dateProtoObjectToString(equity.startDate);
      equity.modifiedDate = dateProtoObjectToString(equity.modifiedDate);
      equity.inactiveDate = dateProtoObjectToString(equity.inactiveDate);
      equity.createdAt = equity.createdAt = equity.createdAt
        ? moment(new Date(equity.createdAt.seconds * 1000)).format(
            'MM/DD/YYYY hh:mm'
          )
        : '--';
      equity.modifiedTime = equity.modifiedTime = equity.modifiedTime
        ? moment(new Date(equity.modifiedTime.seconds * 1000)).format(
            'MM/DD/YYYY hh:mm'
          )
        : '--';
      setModalData(equity);
    } else {
      const { option } = await readOption(data);
      option.expirationDate = dateProtoObjectToString(option.expirationDate);
      option.systemDate = dateProtoObjectToString(option.systemDate);
      setModalData(option);
    }
  };

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
        <div className={classes.fadeModalMd}>
          <Typography
            id="transition-modal-title"
            variant="h4"
            className={classes.textBold}
            gutterBottom
          >
            Master Profile: {modalData.assetType === 'E' ? 'Equity' : 'Option'}
          </Typography>
          <Box mt={5}>
            <form noValidate autoComplete="off">
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    name="symbol"
                    fullWidth
                    InputProps={{
                      readOnly: true,
                    }}
                    label="Symbol"
                    value={modalData.symbol}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    name="originalCusip"
                    fullWidth
                    InputProps={{
                      readOnly: true,
                    }}
                    label="Original Cusip"
                    value={modalData.originalCusip}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
                <div className={classes.grdCell1}>
                  <TextField
                    name="status"
                    fullWidth
                    InputProps={{
                      readOnly: true,
                    }}
                    label="Status"
                    value={modalData.status}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1}>
                  <TextField
                    name="symbolDescription"
                    fullWidth
                    InputProps={{
                      readOnly: true,
                    }}
                    label="Symbol Description"
                    value={modalData.symbolDescription}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
              </div>
              {secMasterData.assetType === 'O' && (
                <div className={classes.grdRow}>
                  <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                    <TextField
                      name="secType"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                      label="Security Type"
                      value={modalData.secType}
                      InputLabelProps={{ shrink: true }}
                    />
                  </div>
                  <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                    <TextField
                      name="underlyingOriginalCusip"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                      label="Underlying Original Cusip"
                      value={modalData.underlyingOriginalCusip}
                      InputLabelProps={{ shrink: true }}
                    />
                  </div>
                  <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                    <TextField
                      name="pc"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                      label="PC"
                      value={modalData.pc}
                      InputLabelProps={{ shrink: true }}
                    />
                  </div>
                  <div className={classes.grdCell1}>
                    <TextField
                      name="strikePrice"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                      label="Strike Price"
                      value={modalData.strikePrice}
                      InputLabelProps={{ shrink: true }}
                    />
                  </div>
                </div>
              )}
              {secMasterData.assetType === 'O' && (
                <div className={classes.grdRow}>
                  <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                    <TextField
                      name="month"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                      label="Month"
                      value={modalData.month}
                      InputLabelProps={{ shrink: true }}
                    />
                  </div>
                  <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                    <TextField
                      name="year"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                      label="Year"
                      value={modalData.year}
                      InputLabelProps={{ shrink: true }}
                    />
                  </div>
                  <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                    <TextField
                      name="expirationDate"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                      label="Expriration Date"
                      value={modalData.expirationDate}
                      InputLabelProps={{ shrink: true }}
                    />
                  </div>
                  <div className={classes.grdCell1}>
                    <TextField
                      name="multiplier"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                      label="Multiplier"
                      value={modalData.multiplier}
                      InputLabelProps={{ shrink: true }}
                    />
                  </div>
                </div>
              )}
              {secMasterData.assetType === 'O' && (
                <div className={classes.grdRow}>
                  <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                    <TextField
                      name="unitMultiplier"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                      label="Unit Multiplier"
                      value={modalData.unitMultiplier}
                      InputLabelProps={{ shrink: true }}
                    />
                  </div>
                  <div className={classes.grdCell1}>
                    <TextField
                      name="systemDate"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                      label="System Date"
                      value={modalData.year}
                      InputLabelProps={{ shrink: true }}
                    />
                  </div>
                </div>
              )}
              {secMasterData.assetType === 'E' && (
                <div className={classes.grdRow}>
                  <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                    <TextField
                      name="securityType"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                      label="Security Type"
                      value={modalData.securityType}
                      InputLabelProps={{ shrink: true }}
                    />
                  </div>
                  <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                    <TextField
                      name="cusip"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                      label="Cusip"
                      value={modalData.cusip}
                      InputLabelProps={{ shrink: true }}
                    />
                  </div>
                  <div className={classes.grdCell1}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="isMarginable"
                          checked={modalData.isMarginable}
                          disabled={true}
                        />
                      }
                      label="Marginable"
                    />
                  </div>
                </div>
              )}
              {secMasterData.assetType === 'E' && (
                <div className={classes.grdRow}>
                  <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                    <TextField
                      name="secSubType"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                      label="Sec Sub Type"
                      value={modalData.secSubType}
                      InputLabelProps={{ shrink: true }}
                    />
                  </div>
                  <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                    <TextField
                      name="assetType"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                      label="Asset Type"
                      value={modalData.assetType}
                      InputLabelProps={{ shrink: true }}
                    />
                  </div>
                  <div className={classes.grdCell1}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="isWhenIssued"
                          checked={modalData.isWhenIssued}
                          disabled={true}
                        />
                      }
                      label="When Issued"
                    />
                  </div>
                </div>
              )}
              {secMasterData.assetType === 'E' && (
                <div className={classes.grdRow}>
                  <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                    <TextField
                      name="exchangeCode"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                      label="Exchange Code"
                      value={modalData.exchangeCode}
                      InputLabelProps={{ shrink: true }}
                    />
                  </div>
                  <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                    <TextField
                      name="sic"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                      label="SIC"
                      value={modalData.sic}
                      InputLabelProps={{ shrink: true }}
                    />
                  </div>
                  <div className={classes.grdCell1}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="isDtcEligible"
                          checked={modalData.isDtcEligible}
                          disabled={true}
                        />
                      }
                      label="DTC Eligible"
                    />
                  </div>
                </div>
              )}
              {secMasterData.assetType === 'E' && (
                <div className={classes.grdRow}>
                  <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                    <TextField
                      name="createdBy"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                      label="Created By"
                      value={modalData.createdBy}
                      InputLabelProps={{ shrink: true }}
                    />
                  </div>
                  <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                    <TextField
                      name="createdAt"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                      label="Created At"
                      value={modalData.createdAt}
                      InputLabelProps={{ shrink: true }}
                    />
                  </div>
                  <div className={classes.grdCell1}>
                    <TextField
                      name="leveragedFactor"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                      label="Leveraged Factor"
                      value={modalData.leveragedFactor}
                      InputLabelProps={{ shrink: true }}
                    />
                  </div>
                </div>
              )}
              {secMasterData.assetType === 'E' && (
                <div className={classes.grdRow}>
                  <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                    <TextField
                      name="country"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                      label="Country"
                      value={modalData.country}
                      InputLabelProps={{ shrink: true }}
                    />
                  </div>
                  <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                    <TextField
                      name="fileDate"
                      fullWidth
                      type="date"
                      InputProps={{
                        readOnly: true,
                      }}
                      label="File Date"
                      value={modalData.fileDate}
                      InputLabelProps={{ shrink: true }}
                    />
                  </div>
                  <div className={classes.grdCell1}>
                    <TextField
                      name="modifiedTime"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                      label="Modified Time"
                      value={modalData.modifiedTime}
                      InputLabelProps={{ shrink: true }}
                    />
                  </div>
                </div>
              )}
              {secMasterData.assetType === 'E' && (
                <div className={classes.grdRow}>
                  <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                    <TextField
                      name="modifiedDate"
                      fullWidth
                      type="date"
                      InputProps={{
                        readOnly: true,
                      }}
                      label="Modified Date"
                      value={modalData.modifiedDate}
                      InputLabelProps={{ shrink: true }}
                    />
                  </div>
                  <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                    <TextField
                      name="inactiveDate"
                      fullWidth
                      type="date"
                      InputProps={{
                        readOnly: true,
                      }}
                      label="Inactive Date"
                      value={modalData.inactiveDate}
                      InputLabelProps={{ shrink: true }}
                    />
                  </div>
                  <div className={classes.grdCell1}>
                    <TextField
                      name="startDate"
                      fullWidth
                      type="date"
                      InputProps={{
                        readOnly: true,
                      }}
                      label="Start Date"
                      value={modalData.startDate}
                      InputLabelProps={{ shrink: true }}
                    />
                  </div>
                </div>
              )}
              {secMasterData.assetType === 'E' && (
                <div className={classes.grdRow}>
                  <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                    <TextField
                      name="endDate"
                      fullWidth
                      type="date"
                      InputProps={{
                        readOnly: true,
                      }}
                      label="End Date"
                      value={modalData.endDate}
                      InputLabelProps={{ shrink: true }}
                    />
                  </div>
                  <div className={classes.grdCell1}>
                    <TextField
                      name="previousOriginalCusip"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                      label="Previous Original Cusip"
                      value={modalData.previousOriginalCusip}
                      InputLabelProps={{ shrink: true }}
                    />
                  </div>
                </div>
              )}
              <div className={classes.modalFooter}>
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
