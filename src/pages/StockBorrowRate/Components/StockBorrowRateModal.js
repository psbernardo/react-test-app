/*ReactJS*/
import React, { useState, useEffect } from 'react';
import useStyles from '../../../styles';
import { listSystemCodes, listCusip } from '../../../services/CommonService';
import SelectSymbol from '../../../components/AutoComplete/SelectSymbol';
import SelectCusip from 'components/AutoComplete/SelectCusip';
import { dateProtoObjectToString } from '../../../services/ConvertService';

import StockBorrowRateAuditModal from './StockBorrowRateAuditModal';

import {
  Typography,
  Button,
  Modal,
  Backdrop,
  Fade,
  Box,
  TextField,
  InputAdornment,
  Select,
  MenuItem,
  InputLabel,
} from '@material-ui/core';

function SelectSystemCodeType({ type, subType, ...rest }) {
  const [options, setOptions] = React.useState([]);
  const [mounted, setMounted] = React.useState(false);
  const getSystemCodeTypes = async () => {
    const { systemcodesList } = await listSystemCodes(type, subType);
    setOptions(systemcodesList);
  };

  React.useEffect(() => {
    if (!options.length && !mounted) {
      getSystemCodeTypes();
    }
    return () => {
      setMounted(true);
    };
  }, [type, subType, options, mounted]);

  return (
    <Select {...rest} fullWidth>
      {options.length ? (
        options.map((item) => (
          <MenuItem key={item.code} value={item.code}>
            {item.description}
          </MenuItem>
        ))
      ) : (
        <MenuItem key="" value=""></MenuItem>
      )}
    </Select>
  );
}

export default function StockBorrowRateModal({
  onClose: handleClose,
  open: isOpen,
  value,
}) {
  const classes = useStyles();
  const [modalData, setModalData] = useState({});
  const [isEdit, setIsEdit] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    if (isOpen) {
      if (value.rateId) {
        setIsEdit(true);
        value.systemDate = dateProtoObjectToString(value.systemDate);
      }
      setModalData({ ...value });
    }
  }, [isOpen, value]);

  const handleChange = async (e) => {
    const input = e.currentTarget.name ? e.currentTarget : e.target;

    modalData.highestRate = Math.max(
      parseFloat(
        input.name === 'borrowRate' ? input.value : modalData.borrowRate
      ),
      parseFloat(
        input.name === 'lendingPitRate' ? input.value : modalData.lendingPitRate
      )
    );

    modalData.finalRate =
      parseFloat(modalData.highestRate) +
      parseFloat(
        input.name === 'markUpRate' ? input.value : modalData.markUpRate
      );

    if (input.name === 'systemDate' || input.name === 'symbol') {
      let { cusip } = await listCusip(
        input.name === 'systemDate' ? input.value : modalData.systemDate,
        input.name === 'symbol' ? input.value : modalData.symbol
      );
      setModalData({
        ...modalData,
        [input.name]: input.value,
        cusip: cusip,
      });
    } else {
      setModalData({
        ...modalData,
        [input.name]: input.value,
      });
    }
  };

  const handleCloseModal = async () => {
    setOpen(false);
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
        <div className={classes.fadeModalMd}>
          <Typography
            id="transition-modal-title"
            className={classes.textBold}
            variant="h4"
            gutterBottom
          >
            {isEdit ? 'Edit' : 'Add New'} Rate
          </Typography>
          <Box id="transition-modal-description">
            <form className={classes.modalForm} noValidate autoComplete="off">
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    name="systemDate"
                    fullWidth
                    label="System Date"
                    type="date"
                    value={modalData.systemDate || ''}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                    disabled={isEdit}
                  />
                </div>
                <div className={classes.grdCell1}></div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <SelectSymbol
                    freeSolo={true}
                    name="symbol"
                    label="Symbol"
                    fullWidth
                    required={true}
                    value={modalData.symbol || ''}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                    disabled={isEdit}
                  />
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <SelectCusip
                    freeSolo={true}
                    name="cusip"
                    label="Cusip"
                    required={true}
                    fullWidth
                    value={modalData.cusip}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                    disabled={isEdit}
                  />
                </div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    name="borrowRate"
                    label="Borrow Rate"
                    type="number"
                    fullWidth={true}
                    InputLabelProps={{ shrink: true }}
                    value={modalData.borrowRate}
                    onChange={handleChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">%</InputAdornment>
                      ),
                    }}
                  />
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    name="loanRate"
                    label="Loan Rate"
                    type="number"
                    fullWidth={true}
                    InputLabelProps={{ shrink: true }}
                    value={modalData.loanRate}
                    onChange={handleChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">%</InputAdornment>
                      ),
                    }}
                  />
                </div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    name="lendingPitRate"
                    label="Lending Pit Rate"
                    type="number"
                    fullWidth={true}
                    InputLabelProps={{ shrink: true }}
                    value={modalData.lendingPitRate}
                    onChange={handleChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">%</InputAdornment>
                      ),
                    }}
                  />
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    name="highestRate"
                    label="Highest Rate"
                    type="number"
                    fullWidth={true}
                    InputLabelProps={{ shrink: true }}
                    value={modalData.highestRate}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">%</InputAdornment>
                      ),
                      readOnly: true,
                    }}
                  />
                </div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    name="markUpRate"
                    label="Mark Up Rate"
                    type="number"
                    fullWidth={true}
                    InputLabelProps={{ shrink: true }}
                    value={modalData.markUpRate}
                    onChange={handleChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">%</InputAdornment>
                      ),
                    }}
                  />
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    name="finalRate"
                    label="Final Rate"
                    type="number"
                    fullWidth={true}
                    InputLabelProps={{ shrink: true }}
                    value={modalData.finalRate}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">%</InputAdornment>
                      ),
                      readOnly: true,
                    }}
                  />
                </div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <InputLabel shrink>Source</InputLabel>
                  <SelectSystemCodeType
                    name="source"
                    type="Stock Borrow"
                    subType="Rate"
                    value={modalData.source || ''}
                    onChange={handleChange}
                  />
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <InputLabel shrink id="status">
                    Status
                  </InputLabel>
                  <Select
                    name="status"
                    fullWidth
                    value={modalData.status}
                    onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em>Blank</em>
                    </MenuItem>
                    <MenuItem value="Active">Active</MenuItem>
                    <MenuItem value="Inactive">Inactive</MenuItem>
                  </Select>
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
                    disabled={!isEdit}
                    onClick={() => {
                      setOpen(true);
                    }}
                  >
                    View Audit Logs
                  </Button>
                </div>
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
            <StockBorrowRateAuditModal
              onClose={handleCloseModal}
              open={open}
              value={value.rateId}
            ></StockBorrowRateAuditModal>
          )}
        </div>
      </Fade>
    </Modal>
  );
}
