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
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core';

export default function EtfModal({
  onClose: handleClose,
  open: isOpen,
  value,
}) {
  const classes = useStyles();
  const [modalData, setModalData] = useState({});

  useEffect(() => {
    if (isOpen) {
      setModalData({ ...value });
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
      onClose={handleClose}
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
            {'Add New'} ETF
          </Typography>
          <Box mt={5}>
            <form noValidate autoComplete="off">
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    required
                    name="symbol"
                    label="Symbol"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    value={modalData.symbol}
                    onChange={handleChange}
                  />
                </div>
                <div className={classes.grdCell1}>
                  <TextField
                    name="cusip"
                    label="Cusip"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    value={modalData.cusip}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    name="symbolDescription"
                    label="Symbol Description"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    value={modalData.symbolDescription}
                    onChange={handleChange}
                  />
                </div>
                <div className={classes.grdCell1}>
                  <InputLabel shrink>Inverse</InputLabel>
                  <Select
                    fullWidth
                    value={modalData.inverse}
                    onChange={handleChange}
                    name="inverse"
                  >
                    <MenuItem value="">
                      <em>Blank</em>
                    </MenuItem>
                    <MenuItem value="YES">YES</MenuItem>
                    <MenuItem value="NO">NO</MenuItem>
                  </Select>
                  {/* <TextField
                        name="inverse"
                        label="Inverse"
                        fullWidth
                        InputLabelProps={{ shrink: true }}
                        value={modalData.inverse}
                        onChange={handleChange}
                    /> */}
                </div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    required
                    name="leveragedFactor"
                    label="Leveraged Factor"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    value={modalData.leveragedFactor}
                    onChange={handleChange}
                  />
                </div>
                <div className={classes.grdCell1}></div>
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
