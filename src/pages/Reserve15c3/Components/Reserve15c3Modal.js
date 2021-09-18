import React, { useState, useEffect } from 'react';
import useStyles from '../../../styles';
import { dateProtoObjectToString } from '../../../services/ConvertService';
import {
  Typography,
  Button,
  Modal,
  Backdrop,
  Fade,
  Box,
  TextField,
  InputAdornment,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import SelectSystemCode from '../../../components/Dropdown/SelectSystemCode';

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

export default function Reserve15c3Modal({
  onClose: handleClose,
  open: isOpen,
  value,
}) {
  const classes = useStyles();
  const [modalData, setModalData] = useState({});

  useEffect(() => {
    if (isOpen) {
      let modalValue = { ...value };
      modalValue.settleDate = dateProtoObjectToString(value.settleDate);
      setModalData(modalValue);
    }
  }, [isOpen, value]);

  const handleChange = (e) => {
    const input = e.currentTarget?.name ? e.currentTarget : e.target;
    
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
        <div className={classes.fadeModalMd}>
          <Typography
            id="transition-modal-title"
            variant="h4"
            className={classes.textBold}
            gutterBottom
          >
            {'Edit'} 15C3
          </Typography>
          <Box mt={5}>
            <form noValidate autoComplete="off">
              <div className={classes.grdRow}>
                <div className={classes.grdCellNone} style={{ marginRight: 30 }}>
                  <TextField
                    style={{width: 228}}
                    fullWidth
                    disabled={true}
                    name="settleDate"
                    label="Settle Date"
                    type="date"
                    value={modalData.settleDate}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
                <div className={classes.grdCell1}>
                  <SelectSystemCode
                    disabled={true}
                    name="broker"
                    label="Broker"
                    type="Broker"
                    value={modalData.broker}
                    onChange={handleChange}
                  ></SelectSystemCode>
                </div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCellNone} style={{ marginRight: 30 }}>
                  <TextField
                    style={{width: 228}}
                    fullWidth
                    disabled={true}
                    name="code"
                    label="Code"
                    value={modalData.code}
                    onChange={handleChange}
                    inputProps={{ maxLength: 10 }}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
                <div className={classes.grdCell1}>
                  <TextField
                    fullWidth
                    disabled={true}
                    name="description"
                    label="Description"
                    value={modalData.description}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    fullWidth
                    disabled={true}
                    name="houseCredit"
                    label="House Credit"
                    value={modalData.houseCredit}
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
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    fullWidth
                    disabled={true}
                    name="houseDebit"
                    label="House Debit"
                    value={modalData.houseDebit}
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
                </div>
                <div className={classes.grdCell1}>
                  <TextField
                    fullWidth
                    disabled={true}
                    name="houseNetAmt"
                    label="House Net Amount"
                    value={modalData.houseNetAmt}
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
                </div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                    <TextField
                      fullWidth
                      required={true}
                      name="adjCredit"
                      label="Adj. Credit"
                      value={modalData.adjCredit}
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
                  </div>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    fullWidth
                    name="adjDebit"
                    label="Adj. Debit"
                    value={modalData.adjDebit}
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
                </div>
                <div className={classes.grdCell1}>
                  <TextField
                    fullWidth
                    disabled={true}
                    name="adjNetAmt"
                    label="Adj. Net Amount"
                    value={modalData.adjNetAmt}
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
                </div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                    <TextField
                      fullWidth
                      disabled={true}
                      name="credit"
                      label="Credit"
                      value={modalData.credit}
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
                  </div>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    fullWidth
                    disabled={true}
                    name="debit"
                    label="Debit"
                    value={modalData.debit}
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
                </div>
                <div className={classes.grdCell1}>
                  <TextField
                    fullWidth
                    disabled={true}
                    name="netAmt"
                    label="Net Amount"
                    value={modalData.netAmt}
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
                      handleClose(modalData, true);
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
