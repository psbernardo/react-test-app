import React, { useState, useEffect } from 'react';
import useStyles from '../../../styles';
import {
  dateProtoObjectToString,
  protoTimeSpanObjectToString,
} from '../../../services/ConvertService';
import NumberFormat from 'react-number-format';
import {
  Typography,
  Button,
  TextField,
  Modal,
  Backdrop,
  Fade,
  Box,
  InputAdornment,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core';
import SelectBranch from '../../../components/AutoComplete/SelectBranch';
import SelectMasterAccountNo from '../../../components/AutoComplete/SelectMasterAccountNo';
import SelectRep from '../../../components/AutoComplete/SelectRep';
import PropTypes from 'prop-types';
import SelectCorrespondent from '../../../components/AutoComplete/SelectCorrespondent';
import SelectSystemCode from '../../../components/Dropdown/SelectSystemCode';
import {
  notifySuccess,
  notifyInfo,
  notifyError,
} from 'components/Notification/Notification';

function numberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      isNumericString
    />
  );
}

numberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default function CommissionModal({
  onClose: handleClose,
  open: isOpen,
  value,
}) {
  const classes = useStyles();
  const [modalData, setModalData] = useState({});
  const [isEdit, setIsEdit] = React.useState(false);
  const [chargeBy, setChargeBy] = React.useState({});

  const cleanData = () => {
    const modalDataCopy = { ...modalData };
    if (modalData.chargeBy == 'Side') {
      modalData.minCommission = '';
      modalData.maxCommission = '';
      modalData.buy = false;
      modalData.sell = false;
      modalData.shortSell = false;
    } else {
      modalData.buyAmt = '';
      modalData.sellAmt = '';
      modalData.shortSellAmt = '';
    }
    return modalData;
  };

  const validate = () => {
    let valid = true;

    if (
      !(modalData.correspondent || '').replace(/ /g, '') &&
      !modalData.branch &&
      !modalData.masterAccountNo &&
      !modalData.rep
    ) {
      notifyError(
        'Correspondent, Branch, Master Account No or Rep is required.'
      );
      valid = false;
    }

    if (modalData.chargeBy == 'Side') {
      if (modalData.buyAmt == '') {
        notifyError('Buy Amount is required.');
        valid = false;
      }
      if (modalData.sellAmt == '') {
        notifyError('Sell Amount is required.');
        valid = false;
      }
      if (modalData.shortSellAmt == '') {
        notifyError('Short Sell Amount is required.');
        valid = false;
      }
    } else {
      if (modalData.minCommission == '') {
        notifyError('Minimum Commission is required.');
        valid = false;
      }
      if (modalData.maxCommission == '') {
        notifyError('Maximum Commission is required.');
        valid = false;
      }
      if (!modalData.buy && !modalData.sell && !modalData.shortSell) {
        notifyError('Buy, Sell, or Short Sell is required.');
        valid = false;
      }
    }

    return valid;
  };

  const handleCheckboxToggle = (e, checkboxValue) => {
    const input = e.currentTarget.name ? e.currentTarget : e.target;

    setModalData({
      ...modalData,
      [input.name]:
        checkboxValue === true || checkboxValue === false
          ? checkboxValue
          : input.value,
    });
  };

  useEffect(() => {
    if (isOpen) {
      let modalValue = { ...value };

      if (value.commissionId) {
        modalValue.fromDate = dateProtoObjectToString(value.fromDate);
        modalValue.toDate = dateProtoObjectToString(value.toDate);
      }
      setModalData(modalValue);
      if (value.commissionId) {
        setIsEdit(true);
      } else {
        modalData.chargeBy = 'Side';
      }

      setChargeBy(value.chargeBy);
    }
  }, [isOpen, value]);

  const handleChange = (e) => {
    // const input = e.currentTarget.name ? e.currentTarget : e.target;
    const input = e.currentTarget?.name ? e.currentTarget : e.target;

    if (input.name == 'chargeBy') {
      setChargeBy(input.value);
    }
    setModalData({
      ...modalData,
      [input.name]: input.value,
    });
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
        <div className={classes.fadeModalLg}>
          <Typography
            id="transition-modal-title"
            variant="h4"
            className={classes.textBold}
            gutterBottom
          >
            {isEdit ? 'Edit' : 'Add New'} Commission
          </Typography>
          <Box id="transition-modal-description" mt={5}>
            <form className={classes.modalForm} noValidate autoComplete="off">
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <SelectCorrespondent
                    style={{ width: 288 }}
                    name="correspondent"
                    label="Correspondent"
                    value={modalData.correspondent}
                    onChange={handleChange}
                  ></SelectCorrespondent>
                </div>
                <div className={classes.grdCell1}>
                  <SelectBranch
                    freeSolo={true}
                    name="branch"
                    label="Branch"
                    value={modalData.branch}
                    onChange={handleChange}
                  ></SelectBranch>
                </div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <SelectRep
                    freeSolo={true}
                    name="rep"
                    label="Rep"
                    value={modalData.rep}
                    onChange={handleChange}
                  ></SelectRep>
                </div>
                <div className={classes.grdCell1}>
                  <SelectMasterAccountNo
                    name="masterAccountNo"
                    label="Master Account No"
                    value={modalData.masterAccountNo}
                    correspondent={modalData.correspondent}
                    onChange={handleChange}
                  ></SelectMasterAccountNo>
                </div>
              </div>

              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    fullWidth
                    name="fromDate"
                    label="From Date"
                    type="date"
                    required
                    value={modalData.fromDate}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
                <div className={classes.grdCell1}>
                  <TextField
                    fullWidth
                    name="toDate"
                    label="To Date"
                    type="date"
                    value={modalData.toDate}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <InputLabel shrink>Charge By</InputLabel>
                  <Select
                    name="chargeBy"
                    label="Charge By"
                    value={modalData.chargeBy}
                    onChange={handleChange}
                    fullWidth
                  >
                    <MenuItem value="Share">
                      <em>Share</em>
                    </MenuItem>
                    <MenuItem value="Amount">
                      <em>Amount</em>
                    </MenuItem>
                    <MenuItem value="Side">
                      <em>Side</em>
                    </MenuItem>
                  </Select>
                </div>
                <div className={classes.grdCell1}>
                  {chargeBy === 'Side' && (
                    <TextField
                      fullWidth
                      required={true}
                      name="buyAmt"
                      label="Buy"
                      value={modalData.buyAmt}
                      onChange={handleChange}
                      InputProps={{
                        inputComponent: numberFormatCustom,
                        startAdornment: (
                          <InputAdornment position="start">
                            {'$'}
                          </InputAdornment>
                        ),
                      }}
                      InputLabelProps={{ shrink: true }}
                    />
                  )}
                  {chargeBy !== 'Side' && (
                    <TextField
                      fullWidth
                      required={true}
                      name="minCommission"
                      label="Min. Commission"
                      value={modalData.minCommission}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                      InputProps={{
                        inputComponent: numberFormatCustom,
                        startAdornment: (
                          <InputAdornment position="start">
                            {'$'}
                          </InputAdornment>
                        ),
                      }}
                    />
                  )}
                </div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  {chargeBy === 'Side' && (
                    <TextField
                      fullWidth
                      required={true}
                      name="sellAmt"
                      label="Sell"
                      value={modalData.sellAmt}
                      onChange={handleChange}
                      InputProps={{
                        inputComponent: numberFormatCustom,
                        startAdornment: (
                          <InputAdornment position="start">
                            {'$'}
                          </InputAdornment>
                        ),
                      }}
                      InputLabelProps={{ shrink: true }}
                    />
                  )}
                  {chargeBy !== 'Side' && (
                    <TextField
                      fullWidth
                      required={true}
                      name="maxCommission"
                      label="Max. Commission"
                      value={modalData.maxCommission}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                      InputProps={{
                        inputComponent: numberFormatCustom,
                        startAdornment: (
                          <InputAdornment position="start">
                            {'$'}
                          </InputAdornment>
                        ),
                      }}
                    />
                  )}
                </div>
                <div className={classes.grdCell1}>
                  {chargeBy === 'Side' && (
                    <TextField
                      fullWidth
                      required={true}
                      name="shortSellAmt"
                      label="Short Sell"
                      value={modalData.shortSellAmt}
                      onChange={handleChange}
                      InputProps={{
                        inputComponent: numberFormatCustom,
                        startAdornment: (
                          <InputAdornment position="start">
                            {'$'}
                          </InputAdornment>
                        ),
                      }}
                      InputLabelProps={{ shrink: true }}
                    />
                  )}
                  {chargeBy !== 'Side' && (
                    <div>
                      <FormControlLabel
                        control={
                          <Checkbox
                            name="buy"
                            checked={modalData.buy}
                            onChange={handleCheckboxToggle}
                          />
                        }
                        label="Buy"
                      />

                      <FormControlLabel
                        control={
                          <Checkbox
                            name="sell"
                            checked={modalData.sell}
                            onChange={handleCheckboxToggle}
                          />
                        }
                        label="Sell"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            name="shortSell"
                            checked={modalData.shortSell}
                            onChange={handleCheckboxToggle}
                          />
                        }
                        label="Short Sell"
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    multiline
                    fullWidth
                    name="note"
                    label="Note"
                    value={modalData.note}
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
                    subType="Client Setup"
                    required
                    value={modalData.status}
                    onChange={handleChange}
                  ></SelectSystemCode>
                </div>
              </div>

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
                <div className={classes.grdCellNone}>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    onClick={() => {
                      cleanData();
                      let isValid = validate();
                      handleClose(modalData, isValid, isEdit);
                    }}
                  >
                    Save
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
