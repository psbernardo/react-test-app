import React, { useState, useEffect } from 'react';
import useStyles from '../../../styles';

import {
  Box,
  TextField,
  Modal,
  Button,
  Backdrop,
  Typography,
  Fade,
} from '@material-ui/core';

import { readBankAddress } from '../../../services/BankAddressService'

export default function ACHWireBankDetailsModal({
  onClose: handleClose,
  open: isOpen,
  value,
}) {
  const classes = useStyles();
  const [modalData, setModalData] = useState({});
  useEffect(() => {
    if (isOpen) {
      async function init() {
        const bankAddress = await readBankAddress(value.bankAddressId)
        value.bankAddress = bankAddress.address + " " + bankAddress.city + " " + bankAddress.zipCode + ", " + bankAddress.state;
        setModalData({ ...value });
      }
      init();   
    }
  }, [isOpen, value]);

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
            View Bank Details
          </Typography>
          <Box mt={5}>
            <form noValidate autoComplete="off">
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    label="Correspondent"
                    fullWidth
                    InputProps={{
                      readOnly: true,
                    }}
                    InputLabelProps={{ shrink: true }}
                    value={modalData.correspondent}
                  />
                </div>
                <div className={classes.grdCell1}>
                  <TextField
                    label="Account No."
                    fullWidth
                    InputProps={{
                      readOnly: true,
                    }}
                    InputLabelProps={{ shrink: true }}
                    value={modalData.accountNo}
                  />
                </div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    label="Bank Owner Name"
                    fullWidth
                    InputProps={{
                      readOnly: true,
                    }}
                    InputLabelProps={{ shrink: true }}
                    value={modalData.bankOwnerName}
                  />
                </div>
                <div className={classes.grdCell1}>
                  <TextField
                    label="Bank Name"
                    fullWidth
                    InputProps={{
                      readOnly: true,
                    }}
                    InputLabelProps={{ shrink: true }}
                    value={modalData.bankName}
                  />
                </div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1}>
                    <TextField
                      label="Bank Address"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                      InputLabelProps={{ shrink: true }}
                      value={modalData.bankAddress}
                    />
                </div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    label="Bank Account No."
                    fullWidth
                    InputProps={{
                      readOnly: true,
                    }}
                    InputLabelProps={{ shrink: true }}
                    value={modalData.bankAccountNo}
                  />
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    label="ACH Routing No."
                    fullWidth
                    InputProps={{
                      readOnly: true,
                    }}
                    InputLabelProps={{ shrink: true }}
                    value={modalData.achRoutingNo}
                  />
                </div>
                <div className={classes.grdCell1}>
                  <TextField
                    label="Wire Routing No."
                    fullWidth
                    InputProps={{
                      readOnly: true,
                    }}
                    InputLabelProps={{ shrink: true }}
                    value={modalData.wireRoutingNo}
                  />
                </div>         
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    label="Bank Account Type"
                    fullWidth
                    InputProps={{
                      readOnly: true,
                    }}
                    InputLabelProps={{ shrink: true }}
                    value={modalData.bankAccountType}
                  />
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    label="Approved Method"
                    fullWidth
                    InputProps={{
                      readOnly: true,
                    }}
                    InputLabelProps={{ shrink: true }}
                    value={modalData.approvedMethod}
                  />
                </div>
                <div className={classes.grdCell1}>
                  <TextField
                    label="Plaid Access Token"
                    fullWidth
                    InputProps={{
                      readOnly: true,
                    }}
                    InputLabelProps={{ shrink: true }}
                    value={modalData.plaidAccessToken}
                  />
                </div>
              </div>

              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    label="Status"
                    fullWidth
                    InputProps={{
                      readOnly: true,
                    }}
                    InputLabelProps={{ shrink: true }}
                    value={modalData.status}
                  />
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    label="Bank Identifier Code (BIC)"
                    fullWidth
                    InputProps={{
                      readOnly: true,
                    }}
                    InputLabelProps={{ shrink: true }}
                    value={modalData.bankIdentifierCode}
                  />
                </div>
                <div className={classes.grdCell1}>
                  <TextField
                    label="GL Account"
                    fullWidth
                    InputProps={{
                      readOnly: true,
                    }}
                    InputLabelProps={{ shrink: true }}
                    value={modalData.glAccountNo}
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
