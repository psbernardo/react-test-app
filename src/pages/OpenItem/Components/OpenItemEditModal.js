/*ReactJS*/
import React, { useState, useEffect } from 'react';
import useStyles from '../../../styles';

import {
  Typography,
  Button,
  Modal,
  Backdrop,
  Fade,
  Box,
  InputLabel,
  TextField,
  Select,
  MenuItem,
} from '@material-ui/core';

import SelectSymbol from '../../../components/AutoComplete/SelectSymbol';
import { protoDateObjectToString } from 'services/ConvertService';

export default function OpenItemDetailsModal({
  onClose: handleClose,
  open: isOpen,
  value,
}) {
  const classes = useStyles();
  const [modalData, setModalData] = useState({});
  const [isMade, setIsMade] = React.useState(false);

  useEffect(() => {
    if (isOpen) {
      let modalValue = { ...value };

      // Set date from data
      modalValue.settleDate = protoDateObjectToString(
        value.settleDate,
        'yyyy-MM-DD'
      );

      if (value.status === 'made') {
        setIsMade(true);
      }

      setModalData(modalValue);
    }
  }, [isOpen, value]);

  const handleChange = (e, checkboxValue) => {
    const input = e.currentTarget.name ? e.currentTarget : e.target;
    const copyModalData = {
      ...modalData,
      [input.name]:
        checkboxValue === true || checkboxValue === false
          ? checkboxValue
          : input.value,
    };

    if (input.name === 'cusip') {
      copyModalData.originalCusip = input.value;
    }

    setModalData(copyModalData);
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
            Edit Open Item
          </Typography>
          <Box mt={5}>
            <form noValidate autoComplete="off">
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <InputLabel shrink>Settle Date</InputLabel>
                  <TextField
                    fullWidth
                    name="settleDate"
                    type="date"
                    disabled
                    value={modalData.settleDate}
                    onChange={handleChange}
                  />
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <SelectSymbol
                    name="symbol"
                    label="Symbol"
                    freeSolo={true}
                    disabled
                    value={modalData.symbol}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <InputLabel shrink>Cusip</InputLabel>
                  <TextField
                    fullWidth
                    name="cusip"
                    disabled
                    value={modalData.cusip}
                    onChange={handleChange}
                  />
                </div>
                <div className={classes.grdCell1}>
                  <InputLabel shrink>Obligation Control No.</InputLabel>
                  <TextField
                    fullWidth
                    name="obligationControlNo"
                    disabled
                    value={modalData.obligationControlNo}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <InputLabel shrink>Excess Qty</InputLabel>
                  <TextField
                    name="execessQty"
                    type="number"
                    fullWidth
                    disabled={isMade}
                    value={modalData.execessQty}
                    onChange={handleChange}
                  />
                </div>
                <div className={classes.grdCell1}>
                  <InputLabel shrink>Status</InputLabel>
                  <Select
                    name="status"
                    fullWidth
                    disabled={isMade}
                    value={modalData.status}
                    onChange={handleChange}
                  >
                    <MenuItem value="made">Made</MenuItem>
                    <MenuItem value="unmade">Un-made</MenuItem>
                    <MenuItem value="send_do">Send DO</MenuItem>
                    <MenuItem value="sent">Sent</MenuItem>
                  </Select>
                </div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1}>
                  <InputLabel shrink>Note</InputLabel>
                  <TextField
                    name="note"
                    fullWidth
                    value={modalData.note}
                    onChange={handleChange}
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
