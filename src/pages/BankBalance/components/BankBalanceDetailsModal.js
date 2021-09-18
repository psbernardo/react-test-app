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
} from '@material-ui/core';
import { listDetails } from 'services/BankBalanceService';
import { protoDateObjectToString } from 'services/ConvertService';
import { formatCurrency } from 'lib/fmt';

export default function BankBalanceDetailsModal({
  onClose: handleClose,
  open: isOpen,
  value,
}) {
  const classes = useStyles();
  const [modalData, setModalData] = useState({});

  useEffect(
    () => {
      async function init() {
        const data = await listDetails(value);

        data.balance.systemDate = protoDateObjectToString(
          data.balance.systemDate,
          'yyyy-MM-DD'
        );

        data.balance.amount = formatCurrency(data.balance.amount);
        setModalData(data.balance);
      }
      if (isOpen) {
        init();
      }
    },
    // eslint-disable-next-line
    [isOpen]
  );

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
            Bank Balance Details
          </Typography>
          <Box mt={5}>
            <form noValidate autoComplete="off">
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    fullWidth
                    label="System Date"
                    name="systemDate"
                    type="date"
                    value={modalData.systemDate}
                    InputProps={{ readOnly: true }}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
                <div className={classes.grdCell1}>
                  <TextField
                    fullWidth
                    name="requestUuid"
                    label="Request UUID"
                    value={modalData.requestUuid}
                    InputProps={{
                      readOnly: true,
                      maxLength: 10,
                    }}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    fullWidth
                    name="amount"
                    label="Amount"
                    value={modalData.amount}
                    InputProps={{
                      readOnly: true,
                      maxLength: 25,
                    }}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
                <div className={classes.grdCell1}>
                  <TextField
                    fullWidth
                    name="account"
                    label="Account"
                    value={modalData.account}
                    InputProps={{
                      readOnly: true,
                      maxLength: 50,
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
              </div>
            </form>
          </Box>
        </div>
      </Fade>
    </Modal>
  );
}
