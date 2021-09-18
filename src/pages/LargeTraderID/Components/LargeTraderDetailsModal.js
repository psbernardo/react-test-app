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
} from '@material-ui/core';

import { dateProtoObjectToString } from '../../../services/ConvertService';
export default function LargeTraderDetailsModal({
  onClose: handleClose,
  open: isOpen,
  value,
}) {
  const classes = useStyles();
  const [modalData, setModalData] = useState({});

  useEffect(() => {
    if (isOpen) {
      let modalValue = { ...value };
      modalValue.fromDate = dateProtoObjectToString(value.fromDate);
      modalValue.toDate = dateProtoObjectToString(value.toDate);
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
          Edit Large Trader ID
          </Typography>
          <Box mt={5}>
            <form className={classes.modalForm} noValidate autoComplete="off">
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    fullWidth={true}
                    required={true}
                    name="fromDate"
                    label="From Date"
                    type="date"
                    value={modalData.fromDate}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    fullWidth={true}
                    required={true}
                    name="toDate"
                    label="To Date"
                    type="date"
                    value={modalData.toDate}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
                <div className={classes.grdCell1}>
                  <TextField
                    fullWidth={true}
                    required={true}
                    name="largeTraderId"
                    label="Large Trader ID"
                    value={modalData.largeTraderId}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                  />   
                </div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    fullWidth={true}
                    required={true}
                    name="optionalSuffix"
                    label="Optional Suffix"
                    value={modalData.optionalSuffix}
                    onChange={handleChange}
                    inputProps={{ maxLength: 4 }}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    fullWidth={true}
                    required={true}
                    name="qualifier"
                    label="Qualifier"
                    value={modalData.qualifier}
                    onChange={handleChange}
                    inputProps={{ maxLength: 1 }}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
                <div className={classes.grdCell1}></div>
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
