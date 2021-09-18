import React, { useState, useEffect } from 'react';
import useStyles from '../../../styles';

import {
  Typography,
  Button,
  TextField,
  Modal,
  Backdrop,
  Fade,
  Box,
  InputLabel,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core';
import SelectSymbol from 'components/AutoComplete/SelectSymbol';
import SelectSystemCode from 'components/Dropdown/SelectSystemCode';

export default function SecurityMasterModal({
  onClose: handleClose,
  open: isOpen,
  value,
}) {
  const classes = useStyles();
  const [modalData, setModalData] = useState({});
  const [isEdit, setIsEdit] = React.useState(false);

  useEffect(() => {
    if (isOpen) {
      setModalData({ ...value });
      if (value.symbol) {
        setIsEdit(true);
      }
    }
  }, [isOpen, value]);

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
            {isEdit ? 'Edit' : 'Add New'} Master Profile
          </Typography>
          <Box mt={5}>
            <form noValidate autoComplete="off">
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <SelectSymbol
                    fullWidth
                    freeSolo={true}
                    required={true}
                    disabled={isEdit}
                    name="symbol"
                    label="Symbol"
                    value={modalData.symbol}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
                <div className={classes.grdCell1}>
                  <TextField
                    fullWidth
                    required={true}
                    name="symbolDescription"
                    label="Symbol Description"
                    value={modalData.symbolDescription}
                    onChange={handleChange}
                    inputProps={{ maxLength: 300 }}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
              </div>
              {modalData.assetType !== 'O' && (
                <div>
                  <div className={classes.grdRow}>
                    <div
                      className={classes.grdCell1}
                      style={{ marginRight: 30 }}
                    >
                      <TextField
                        fullWidth
                        required={true}
                        name="originalCusip"
                        label="Original Cusip"
                        value={modalData.originalCusip}
                        onChange={handleChange}
                        inputProps={{ maxLength: 9 }}
                        InputLabelProps={{ shrink: true }}
                      />
                    </div>
                    <div className={classes.grdCell1}>
                      <TextField
                        fullWidth
                        required={true}
                        name="cusip"
                        label="Cusip"
                        value={modalData.cusip}
                        onChange={handleChange}
                        inputProps={{ maxLength: 9 }}
                        InputLabelProps={{ shrink: true }}
                      />
                    </div>
                  </div>
                  <div className={classes.grdRow}>
                    <div
                      className={classes.grdCell1}
                      style={{ marginRight: 30 }}
                    >
                      <SelectSystemCode
                        required={true}
                        name="assetType"
                        label="Asset Type"
                        type="Asset Type"
                        value={modalData.assetType}
                        onChange={handleChange}
                      ></SelectSystemCode>
                    </div>
                    <div className={classes.grdCell1}>
                      <SelectSystemCode
                        required={true}
                        name="status"
                        label="Status"
                        type="Status"
                        subType="AI"
                        value={modalData.status}
                        onChange={handleChange}
                      ></SelectSystemCode>
                    </div>
                  </div>
                  {modalData.assetType === 'E' && (
                    <div className={classes.grdRow}>
                      <div
                        className={classes.grdCell1}
                        style={{ marginRight: 30 }}
                      >
                        <InputLabel shrink>Marginable</InputLabel>
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="isMarginable"
                              checked={modalData.isMarginable}
                              onChange={handleChange}
                              color="primary"
                            />
                          }
                        />
                      </div>
                    </div>
                  )}
                </div>
              )}

              {modalData.assetType === 'O' && (
                <div>
                  <div className={classes.grdRow}>
                    <div
                      className={classes.grdCell1}
                      style={{ marginRight: 30 }}
                    >
                      <TextField
                        fullWidth
                        required={true}
                        name="originalCusip"
                        label="Original Cusip"
                        value={modalData.originalCusip}
                        onChange={handleChange}
                        inputProps={{ maxLength: 9 }}
                        InputLabelProps={{ shrink: true }}
                      />
                    </div>
                    <div className={classes.grdCell1}>
                      <SelectSystemCode
                        required={true}
                        name="assetType"
                        label="Asset Type"
                        type="Asset Type"
                        value={modalData.assetType}
                        onChange={handleChange}
                      ></SelectSystemCode>
                    </div>
                  </div>
                  <div className={classes.grdRow}>
                    <div
                      className={classes.grdCell1}
                      style={{ marginRight: 30 }}
                    >
                      <SelectSystemCode
                        required={true}
                        name="status"
                        label="Status"
                        type="Status"
                        value={modalData.status}
                        onChange={handleChange}
                      ></SelectSystemCode>
                    </div>
                    <div className={classes.grdCell1}></div>
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
