/*ReactJS*/
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
} from '@material-ui/core';

export default function DataDictionaryModal({
  onClose: handleClose,
  open: isOpen,
  value,
}) {
  const classes = useStyles();
  const [modalData, setModalData] = useState({});

  useEffect(() => {
    if (isOpen) {
      let modalValue = { ...value };
      setModalData(modalValue);
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

  const minimumMultiLine = 10;

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
          Edit Data Dictionary
          </Typography>
          <Box mt={5}>
            <form className={classes.modalForm} noValidate autoComplete="off">
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <InputLabel shrink>Sample Value</InputLabel>
                    <TextField
                      name="sampleValue"
                      type="text"
                      fullWidth={true}
                      inputProps={{ maxLength: 100 }}
                      value={modalData.sampleValue}
                      onChange={handleChange}
                    />
                </div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <InputLabel shrink>Description</InputLabel>
                    <TextField
                      multiline
                      fullWidth
                      required
                      name="description"
                      rows={minimumMultiLine}
                      rowsMax={Infinity}
                      value={modalData.description}
                      onChange={handleChange}
                      inputProps={{ maxLength: 300 }}
                      InputLabelProps={{ shrink: true }}
                    />
                </div>
              </div>
              <div className={classes.modalFooter}>
                <div className={classes.grdCellNone}style={{ marginRight: 10 }}>
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
                      handleClose(modalData);
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
