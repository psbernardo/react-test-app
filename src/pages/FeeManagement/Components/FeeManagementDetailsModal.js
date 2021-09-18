/*ReactJS*/
import React, { useState, useEffect } from 'react';
import useStyles from '../../../styles';
import {
  Typography,
  Button,
  TextField,
  Modal,
  Backdrop,
  Checkbox,
  Fade,
  Box,
  InputLabel,
  MenuItem,
  Select,
  FormControlLabel,
} from '@material-ui/core';
import SelectCorrespondent from '../../../components/AutoComplete/SelectCorrespondent';
import SelectAccountNo from '../../../components/AutoComplete/SelectAccountNo';
import SelectMasterAccountNo from '../../../components/AutoComplete/SelectMasterAccountNo';

import { dateProtoObjectToString } from '../../../services/ConvertService';
export default function FeeManagementDetailsModal({
  onClose: handleClose,
  open: isOpen,
  value,
}) {
  const classes = useStyles();
  const [modalData, setModalData] = useState({});
  const [isEdit, setIsEdit] = React.useState(false);

  useEffect(() => {
    if (isOpen) {
      let modalValue = { ...value };
      modalValue.fromDate = dateProtoObjectToString(value.fromDate);
      modalValue.toDate = dateProtoObjectToString(value.toDate);
      setModalData(modalValue);
      if (value.feeManagementId) {
        setIsEdit(true);
      }
    }
  }, [isOpen, value]);

  const handleChange = (e, checkboxValue) => {
    const input = e.currentTarget.name ? e.currentTarget : e.target;
    console.log(input.name, input.value, checkboxValue);
    setModalData({
      ...modalData,
      [input.name]:
        checkboxValue === true || checkboxValue === false
          ? checkboxValue
          : input.value,
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
            {isEdit ? 'Edit' : 'Add New'} Fee Management
          </Typography>
          <Box mt={5}>
            <form className={classes.modalForm} noValidate autoComplete="off">
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <SelectCorrespondent
                    required={true}
                    disabled={isEdit}
                    name="correspondent"
                    value={modalData.correspondent}
                    onChange={handleChange}
                  ></SelectCorrespondent>
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <SelectAccountNo
                    required={true}
                    disabled={isEdit}
                    name="accountNo"
                    label="Account No"
                    value={modalData.accountNo}
                    correspondent={modalData.correspondent}
                    onChange={handleChange}
                    type="" //client or gl
                  ></SelectAccountNo>
                </div>
                <div className={classes.grdCell1}>
                  <SelectMasterAccountNo
                    required={true}
                    disabled={isEdit}
                    name="masterAccountNo"
                    label="Master Account No"
                    value={modalData.masterAccountNo}
                    // correspondent={searchData.correspondent}
                    onChange={handleChange}
                    type="" //client or gl
                  ></SelectMasterAccountNo>
                </div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    required={true}
                    disabled={isEdit}
                    name="fromDate"
                    fullWidth
                    label="From Date"
                    type="date"
                    value={modalData.fromDate}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    required={true}
                    disabled={isEdit}
                    name="toDate"
                    fullWidth
                    label="To Date"
                    type="date"
                    value={modalData.toDate}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
                <div className={classes.grdCell1}>
                  <InputLabel shrink>Calc Type *</InputLabel>
                  <Select
                    disabled={isEdit}
                    name="calcType"
                    fullWidth
                    value={modalData.calcType}
                    onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em>Blank</em>
                    </MenuItem>
                    <MenuItem value="amount">Amount</MenuItem>
                    <MenuItem value="flat_fee">Flat Fee</MenuItem>
                    <MenuItem value="qty">Qty</MenuItem>
                  </Select>
                </div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <InputLabel shrink>Fee Type</InputLabel>
                  <TextField
                    disabled={isEdit}
                    name="feeType"
                    fullWidth={true}
                    value={modalData.feeType}
                    onChange={handleChange}
                  />
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <InputLabel shrink>Fee Rate *</InputLabel>
                  <TextField
                    disabled={isEdit}
                    name="feeRate"
                    fullWidth={true}
                    type="number"
                    value={modalData.feeRate}
                    onChange={handleChange}
                  />
                </div>
                <div className={classes.grdCell1}>
                  <SelectAccountNo
                    required={true}
                    disabled={isEdit}
                    name="contraAccount"
                    label="Contra Account No"
                    value={modalData.contraAccount}
                    correspondent={modalData.correspondent}
                    onChange={handleChange}
                    type="" //client or gl
                  ></SelectAccountNo>
                </div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 80 }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="buy"
                        disabled={isEdit}
                        checked={modalData.buy}
                        onChange={handleChange}
                      />
                    }
                    label="Buy"
                  />
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 80 }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="sell"
                        disabled={isEdit}
                        checked={modalData.sell}
                        onChange={handleChange}
                      />
                    }
                    label="Sell"
                  />
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 80 }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="shortSell"
                        disabled={isEdit}
                        checked={modalData.shortSell}
                        onChange={handleChange}
                      />
                    }
                    label="Short Sell"
                  />
                </div>
                <div className={classes.grdCell1}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="status"
                        checked={modalData.status}
                        onChange={handleChange}
                      />
                    }
                    label="Active"
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
                      handleClose(modalData, isEdit);
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
