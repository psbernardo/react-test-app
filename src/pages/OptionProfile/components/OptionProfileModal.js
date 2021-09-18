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
  MenuItem,
  Select,
} from '@material-ui/core';
import SelectSymbol from '../../../components/AutoComplete/SelectSymbol';
export default function OptionProfileModal({
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
      if (value.id) {
        setIsEdit(true);
      }
    }
  }, [isOpen, value]);

  const handleChange = (e) => {
    const input = e.currentTarget.name ? e.currentTarget : e.target;
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
            {isEdit ? 'Edit' : 'Add New'} Option Profile
          </Typography>
          <Box mt={5}>
            <form noValidate autoComplete="off">
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <SelectSymbol
                    freeSolo={true}
                    name="symbol"
                    label="Symbol"
                    required={true}
                    value={modalData.symbol}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    name="symbolDescription"
                    required={true}
                    fullWidth
                    label="Symbol Description"
                    value={modalData.symbolDescription}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    name="multiplier"
                    required={true}
                    fullWidth
                    label="Multiplier"
                    type="number"
                    value={modalData.multiplier}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <InputLabel shrink>Status *</InputLabel>
                  <Select
                    name="status"
                    required={true}
                    fullWidth
                    value={modalData.status}
                    onChange={handleChange}
                  >
                    <MenuItem value="active">Active</MenuItem>
                    <MenuItem value="inactive">Inactive</MenuItem>
                  </Select>
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <InputLabel shrink>Security Type *</InputLabel>
                  <Select
                    name="secType"
                    fullWidth
                    required={true}
                    value={modalData.secType}
                    onChange={handleChange}
                  >
                    <MenuItem value="OI">Index Options</MenuItem>
                    <MenuItem value="OS">Stock Option</MenuItem>
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
