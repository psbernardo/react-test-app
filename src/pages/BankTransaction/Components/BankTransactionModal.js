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
import {
  protoTimeSpanObjectToString,
  protoDateObjectToString,
} from '../../../services/ConvertService';

export default function BankTransactionModal({
  onClose: handleClose,
  open: isOpen,
  value,
  source,
}) {
  const classes = useStyles();
  const [modalData, setModalData] = useState({});
  useEffect(() => {
    if (isOpen) {
      setModalData({ ...value });
    }
  }, [isOpen, value]);

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={(classes.modalBackdrop, classes.modalScrollable)}
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
            View Activity Details
          </Typography>
          <Box mt={5}>
            {source === 'Signature Bank' && (
              <form noValidate autoComplete="off">
                <div className={classes.grdRow}>
                  <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                    <Typography
                      variant="h6"
                      className={classes.textBold}
                      gutterBottom
                    >
                      Bank Transaction Details
                    </Typography>
                  </div>
                  <div className={classes.grdCell1}></div>
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
                  <div className={classes.grdCell1}>
                    <TextField
                      label="API Name"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                      InputLabelProps={{ shrink: true }}
                      value={modalData.apiname}
                    />
                  </div>
                </div>

                <div className={classes.grdRow}>
                  <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                    <TextField
                      label="Date Time"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                      InputLabelProps={{ shrink: true }}
                      value={protoTimeSpanObjectToString(modalData.dateTime)}
                    />
                  </div>
                  <div className={classes.grdCell1}>
                    <TextField
                      label="Transaction Type"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                      InputLabelProps={{ shrink: true }}
                      value={modalData.transType}
                    />
                  </div>
                </div>

                <div className={classes.grdRow}>
                  <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                    <TextField
                      label="Counter Party"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                      InputLabelProps={{ shrink: true }}
                      value={modalData.counterParty}
                    />
                  </div>
                  <div className={classes.grdCell1}>
                    <TextField
                      label="Internal ID"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                      InputLabelProps={{ shrink: true }}
                      value={modalData.internalId}
                    />
                  </div>
                </div>

                <div className={classes.grdRow}>
                  <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                    <TextField
                      label="Request ID"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                      InputLabelProps={{ shrink: true }}
                      value={modalData.requestId}
                    />
                  </div>
                  <div className={classes.grdCell1}>
                    <TextField
                      label="Confirmation ID"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                      InputLabelProps={{ shrink: true }}
                      value={modalData.confirmationId}
                    />
                  </div>
                </div>

                <div className={classes.grdRow}>
                  <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                    <TextField
                      label="Approver"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                      InputLabelProps={{ shrink: true }}
                      value={modalData.approver}
                    />
                  </div>
                  <div className={classes.grdCell1}>
                    <TextField
                      label="Approver Time"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                      InputLabelProps={{ shrink: true }}
                      value={protoTimeSpanObjectToString(
                        modalData.approverTime
                      )}
                    />
                  </div>
                </div>

                <div className={classes.grdRow}>
                  <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                    <TextField
                      label="Amount"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                      InputLabelProps={{ shrink: true }}
                      value={modalData.amount}
                    />
                  </div>
                  <div className={classes.grdCell1}>
                    <TextField
                      label="Balance"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                      InputLabelProps={{ shrink: true }}
                      value={modalData.balance}
                    />
                  </div>
                </div>

                <div className={classes.grdRow}>
                  <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                    <TextField
                      label="Public Description"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                      InputLabelProps={{ shrink: true }}
                      value={modalData.publicDescription}
                    />
                  </div>
                  <div className={classes.grdCell1}>
                    <TextField
                      label="Private Description"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                      InputLabelProps={{ shrink: true }}
                      value={modalData.privateDescription}
                    />
                  </div>
                </div>

                <div className={classes.grdRow}>
                  <div className={classes.grdCell1}>
                    <TextField
                      label="Sender Address"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                      InputLabelProps={{ shrink: true }}
                      value={modalData.senderAddress}
                    />
                  </div>
                </div>

                <div className={classes.grdRow}>
                  <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                    <TextField
                      label="Recipient Address"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                      InputLabelProps={{ shrink: true }}
                      value={modalData.recipientAddress}
                    />
                  </div>
                  <div className={classes.grdCell1}>
                    <TextField
                      label="API Reference ID"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                      InputLabelProps={{ shrink: true }}
                      value={modalData.apiRefId}
                    />
                  </div>
                </div>

                <div className={classes.grdRow}>
                  <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                    <TextField
                      label="Decline Reason"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                      InputLabelProps={{ shrink: true }}
                      value={modalData.declineReason}
                    />
                  </div>
                  <div className={classes.grdCell1}>
                    <TextField
                      label="User Id"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                      InputLabelProps={{ shrink: true }}
                      value={modalData.userId}
                    />
                  </div>
                </div>
              </form>
            )}
            {source === 'FRB' && (
              <form noValidate autoComplete="off">
                <div className={classes.grdRow}>
                  <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                    <TextField
                      label="Transaction Date"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                      InputLabelProps={{ shrink: true }}
                      value={protoDateObjectToString(modalData.transactionDate)}
                    />
                  </div>
                  <div className={classes.grdCell1}>
                    <TextField
                      label="Account Number"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                      InputLabelProps={{ shrink: true }}
                      value={modalData.accountNumber}
                    />
                  </div>
                </div>
                <div className={classes.grdRow}>
                  <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                    <TextField
                      label="Account Name"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                      InputLabelProps={{ shrink: true }}
                      value={modalData.accountName}
                    />
                  </div>
                  <div className={classes.grdCell1}>
                    <TextField
                      label="Transaction type"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                      InputLabelProps={{ shrink: true }}
                      value={modalData.transactionType}
                    />
                  </div>
                </div>
                <div className={classes.grdRow}>
                  <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                    <TextField
                      label="Tran Type"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                      InputLabelProps={{ shrink: true }}
                      value={modalData.tranType}
                    />
                  </div>
                  <div className={classes.grdCell1}>
                    <TextField
                      label="Amount"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                      InputLabelProps={{ shrink: true }}
                      value={modalData.amt}
                    />
                  </div>
                </div>
                <div className={classes.grdRow}>
                  <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                    <TextField
                      label="Transaction Description"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                      InputLabelProps={{ shrink: true }}
                      value={modalData.transactionDescription}
                    />
                  </div>
                  <div className={classes.grdCell1}>
                    <TextField
                      label="Bai2 CD"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                      InputLabelProps={{ shrink: true }}
                      value={modalData.bai2Cd}
                    />
                  </div>
                </div>
                <div className={classes.grdRow}>
                  <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                    <TextField
                      label="Reference NBR"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                      InputLabelProps={{ shrink: true }}
                      value={modalData.referenceNbr}
                    />
                  </div>
                  <div className={classes.grdCell1}>
                    <TextField
                      label="Supplementary Details"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                      InputLabelProps={{ shrink: true }}
                      value={modalData.supplementaryDetails}
                    />
                  </div>
                </div>
                <div className={classes.grdRow}>
                  <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                    <TextField
                      label="Error Details"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                      InputLabelProps={{ shrink: true }}
                      value={modalData.errorDetails}
                    />
                  </div>
                  <div className={classes.grdCell1}></div>
                </div>
              </form>
            )}
            {source === 'BMO' && (
              <form noValidate autoComplete="off">
                <div className={classes.grdRow}>
                  <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                    <TextField
                      label="Rec"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                      InputLabelProps={{ shrink: true }}
                      value={modalData.rec}
                    />
                  </div>
                  <div className={classes.grdCell1}>
                    <TextField
                      label="Date"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                      InputLabelProps={{ shrink: true }}
                      value={protoDateObjectToString(modalData.date)}
                    />
                  </div>
                </div>
                <div className={classes.grdRow}>
                  <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                    <TextField
                      label="Date 2"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                      InputLabelProps={{ shrink: true }}
                      value={protoDateObjectToString(modalData.date2)}
                    />
                  </div>
                  <div className={classes.grdCell1}>
                    <TextField
                      label="Field"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                      InputLabelProps={{ shrink: true }}
                      value={modalData.field}
                    />
                  </div>
                </div>
                <div className={classes.grdRow}>
                  <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                    <TextField
                      label="Field 2"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                      InputLabelProps={{ shrink: true }}
                      value={modalData.field2}
                    />
                  </div>
                  <div className={classes.grdCell1}>
                    <TextField
                      label="Currency"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                      InputLabelProps={{ shrink: true }}
                      value={modalData.currency}
                    />
                  </div>
                </div>
                <div className={classes.grdRow}>
                  <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                    <TextField
                      label="Account"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                      InputLabelProps={{ shrink: true }}
                      value={modalData.account}
                    />
                  </div>
                  <div className={classes.grdCell1}>
                    <TextField
                      label="Type"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                      InputLabelProps={{ shrink: true }}
                      value={modalData.type}
                    />
                  </div>
                </div>
                <div className={classes.grdRow}>
                  <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                    <TextField
                      label="Type Description"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                      InputLabelProps={{ shrink: true }}
                      value={modalData.typeDescription}
                    />
                  </div>
                  <div className={classes.grdCell1}>
                    <TextField
                      label="Amount"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                      InputLabelProps={{ shrink: true }}
                      value={modalData.amount}
                    />
                  </div>
                </div>
                <div className={classes.grdRow}>
                  <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                    <TextField
                      label="Amount 2"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                      InputLabelProps={{ shrink: true }}
                      value={modalData.amount2}
                    />
                  </div>
                  <div className={classes.grdCell1}>
                    <TextField
                      label="Amount 3"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                      InputLabelProps={{ shrink: true }}
                      value={modalData.amount3}
                    />
                  </div>
                </div>
                <div className={classes.grdRow}>
                  <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                    <TextField
                      label="Amount 4"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                      InputLabelProps={{ shrink: true }}
                      value={modalData.amount4}
                    />
                  </div>
                  <div className={classes.grdCell1}>
                    <TextField
                      label="Field 3"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                      InputLabelProps={{ shrink: true }}
                      value={modalData.field3}
                    />
                  </div>
                </div>
                <div className={classes.grdRow}>
                  <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                    <TextField
                      label="TRNO"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                      InputLabelProps={{ shrink: true }}
                      value={modalData.trno}
                    />
                  </div>
                  <div className={classes.grdCell1}>
                    <TextField
                      label="Record Info"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                      InputLabelProps={{ shrink: true }}
                      value={modalData.recordInfo}
                    />
                  </div>
                </div>
              </form>
            )}
            <div className={classes.modalFooter}>
              <div className={classes.grdCellNone} style={{ marginRight: 10 }}>
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
          </Box>
        </div>
      </Fade>
    </Modal>
  );
}
