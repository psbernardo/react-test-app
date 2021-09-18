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
  InputAdornment,
} from '@material-ui/core';
import { formatPbDate, formatDollar, formatQty } from 'lib/fmt';

export default function ActivityModal({
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
            <form noValidate autoComplete="off">
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    label="TRNS ID"
                    fullWidth
                    InputProps={{
                      readOnly: true,
                    }}
                    InputLabelProps={{ shrink: true }}
                    value={modalData.trnsId}
                  />
                </div>
                <div className={classes.grdCell1}></div>
              </div>

              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    label="Account ID"
                    fullWidth
                    InputProps={{
                      readOnly: true,
                    }}
                    InputLabelProps={{ shrink: true }}
                    value={modalData.accountId}
                  />
                </div>
                <div className={classes.grdCell1}>
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
              </div>

              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    label="Account No"
                    fullWidth
                    InputProps={{
                      readOnly: true,
                    }}
                    InputLabelProps={{ shrink: true }}
                    value={modalData.accountNo}
                  />
                </div>
                <div className={classes.grdCell1}>
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
              </div>

              <div className={classes.grdRow}>
                <div className={classes.grdCell1}>
                  <TextField
                    label="Master Account No"
                    fullWidth
                    InputProps={{
                      readOnly: true,
                    }}
                    InputLabelProps={{ shrink: true }}
                    value={modalData.masterAccountNo}
                  />
                </div>
              </div>

              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    label="Broker"
                    fullWidth
                    InputProps={{
                      readOnly: true,
                    }}
                    InputLabelProps={{ shrink: true }}
                    value={modalData.broker}
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
                <div className={classes.grdCell1}>
                  <TextField
                    name="capacity"
                    label="Capacity"
                    fullWidth
                    InputProps={{
                      readOnly: true,
                    }}
                    InputLabelProps={{ shrink: true }}
                    value={modalData.capacity}
                  />
                </div>
              </div>

              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    label="Contra Account ID"
                    fullWidth
                    InputProps={{
                      readOnly: true,
                    }}
                    InputLabelProps={{ shrink: true }}
                    value={modalData.contraAccountId}
                  />
                </div>
                <div className={classes.grdCell1}>
                  <TextField
                    label="Contra Correspondent"
                    fullWidth
                    InputProps={{
                      readOnly: true,
                    }}
                    InputLabelProps={{ shrink: true }}
                    value={modalData.contraCorrespondent}
                  />
                </div>
              </div>

              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    label="Contra Account No"
                    fullWidth
                    InputProps={{
                      readOnly: true,
                    }}
                    InputLabelProps={{ shrink: true }}
                    value={modalData.contraAccountNo}
                  />
                </div>
                <div className={classes.grdCell1}>
                  <TextField
                    label="Transaction ID"
                    fullWidth
                    InputProps={{
                      readOnly: true,
                    }}
                    InputLabelProps={{ shrink: true }}
                    value={modalData.trnsId}
                  />
                </div>
              </div>

              <div className={classes.grdRow}>
                <div className={classes.grdCell1}>
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
              </div>

              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    label="System Date"
                    fullWidth
                    InputProps={{
                      readOnly: true,
                    }}
                    InputLabelProps={{ shrink: true }}
                    value={formatPbDate(modalData.systemDate)}
                  />
                </div>
                <div className={classes.grdCell1}>
                  <TextField
                    label="Trade Date"
                    fullWidth
                    InputProps={{
                      readOnly: true,
                    }}
                    InputLabelProps={{ shrink: true }}
                    value={formatPbDate(modalData.tradeDate)}
                  />
                </div>
              </div>

              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    label="Trade At"
                    fullWidth
                    InputProps={{
                      readOnly: true,
                    }}
                    InputLabelProps={{ shrink: true }}
                    value={modalData.tradeAt}
                  />
                </div>
                <div className={classes.grdCell1}>
                  <TextField
                    label="Settle Date"
                    fullWidth
                    InputProps={{
                      readOnly: true,
                    }}
                    InputLabelProps={{ shrink: true }}
                    value={formatPbDate(modalData.settleDate)}
                  />
                </div>
              </div>

              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    label="Original Cusip"
                    fullWidth
                    InputProps={{
                      readOnly: true,
                    }}
                    InputLabelProps={{ shrink: true }}
                    value={modalData.originalCusip}
                  />
                </div>
                <div className={classes.grdCell1}>
                  <TextField
                    label="Symbol"
                    fullWidth
                    InputProps={{
                      readOnly: true,
                    }}
                    InputLabelProps={{ shrink: true }}
                    value={modalData.symbol}
                  />
                </div>
              </div>

              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    label="Symbol Description"
                    fullWidth
                    InputProps={{
                      readOnly: true,
                    }}
                    InputLabelProps={{ shrink: true }}
                    value={modalData.symbolDescription}
                  />
                </div>
                <div className={classes.grdCell1}>
                  <TextField
                    label="Cusip"
                    fullWidth
                    InputProps={{
                      readOnly: true,
                    }}
                    InputLabelProps={{ shrink: true }}
                    value={modalData.cusip}
                  />
                </div>
              </div>

              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    label="Asset Type"
                    fullWidth
                    InputProps={{
                      readOnly: true,
                    }}
                    InputLabelProps={{ shrink: true }}
                    value={modalData.assetType}
                  />
                </div>
                <div className={classes.grdCell1}>
                  <TextField
                    label="Entry Type"
                    fullWidth
                    InputProps={{
                      readOnly: true,
                    }}
                    InputLabelProps={{ shrink: true }}
                    value={modalData.entryType}
                  />
                </div>
              </div>

              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    label="Entry Type Description"
                    fullWidth
                    InputProps={{
                      readOnly: true,
                    }}
                    InputLabelProps={{ shrink: true }}
                    value={modalData.entryTypeDescription}
                  />
                </div>
                <div className={classes.grdCell1}>
                  <TextField
                    label="Side"
                    fullWidth
                    InputProps={{
                      readOnly: true,
                    }}
                    InputLabelProps={{ shrink: true }}
                    value={modalData.side}
                  />
                </div>
              </div>

              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    label="Quantity"
                    fullWidth
                    InputProps={{
                      readOnly: true,
                    }}
                    InputLabelProps={{ shrink: true }}
                    value={formatQty(modalData.qty || 0)}
                  />
                </div>
                <div className={classes.grdCell1}>
                  <TextField
                    label="Price"
                    fullWidth
                    InputProps={{
                      readOnly: true,
                      // startAdornment: (
                      //   <InputAdornment position="start">$</InputAdornment>
                      // ),
                    }}
                    InputLabelProps={{ shrink: true }}
                    value={formatDollar(modalData.price) || 0}
                  />
                </div>
              </div>

              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    label="Gross Amount"
                    fullWidth
                    InputProps={{
                      readOnly: true,
                      // startAdornment: (
                      //   <InputAdornment position="start">$</InputAdornment>
                      // ),
                    }}
                    InputLabelProps={{ shrink: true }}
                    value={formatDollar(modalData.grossAmt) || 0}
                  />
                </div>
                <div className={classes.grdCell1}>
                  <TextField
                    label="Reg Fee"
                    name="regFee"
                    fullWidth
                    InputProps={{
                      readOnly: true,
                      // startAdornment: (
                      //   <InputAdornment position="start">$</InputAdornment>
                      // ),
                    }}
                    InputLabelProps={{ shrink: true }}
                    value={formatDollar(modalData.regFee) || 0}
                  />
                </div>
              </div>

              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    label="Taf Fee"
                    name="tafFee"
                    fullWidth
                    InputProps={{
                      readOnly: true,
                      // startAdornment: (
                      //   <InputAdornment position="start">$</InputAdornment>
                      // ),
                    }}
                    InputLabelProps={{ shrink: true }}
                    value={formatDollar(modalData.tafFee) || 0}
                  />
                </div>
                <div className={classes.grdCell1}>
                  <TextField
                    label="Commission"
                    fullWidth
                    InputProps={{
                      readOnly: true,
                      // startAdornment: (
                      //   <InputAdornment position="start">$</InputAdornment>
                      // ),
                    }}
                    InputLabelProps={{ shrink: true }}
                    value={formatDollar(modalData.commission) || 0}
                  />
                </div>
              </div>

              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    label="Fees"
                    name="fees"
                    fullWidth
                    InputProps={{
                      readOnly: true,
                      // startAdornment: (
                      //   <InputAdornment position="start">$</InputAdornment>
                      // ),
                    }}
                    InputLabelProps={{ shrink: true }}
                    value={formatDollar(modalData.fees) || 0}
                  />
                </div>
                <div className={classes.grdCell1}>
                  <TextField
                    label="Net Amount"
                    fullWidth
                    InputProps={{
                      readOnly: true,
                      // startAdornment: (
                      //   <InputAdornment position="start">$</InputAdornment>
                      // ),
                    }}
                    InputLabelProps={{ shrink: true }}
                    value={formatDollar(modalData.netAmt) || 0}
                  />
                </div>
              </div>

              <div className={classes.grdRow}>
                <div className={classes.grdCell1}>
                  <TextField
                    label="Description"
                    fullWidth
                    InputProps={{
                      readOnly: true,
                    }}
                    InputLabelProps={{ shrink: true }}
                    value={modalData.description}
                  />
                </div>
              </div>

              <div className={classes.grdRow}>
                <div className={classes.grdCell1}>
                  <TextField
                    label="External ID"
                    fullWidth
                    InputProps={{
                      readOnly: true,
                    }}
                    InputLabelProps={{ shrink: true }}
                    value={modalData.externalId}
                  />
                </div>
              </div>

              <div className={classes.grdRow}>
                <div className={classes.grdCell1}>
                  <TextField
                    label="Order ID"
                    fullWidth
                    InputProps={{
                      readOnly: true,
                    }}
                    InputLabelProps={{ shrink: true }}
                    value={modalData.orderId}
                  />
                </div>
              </div>

              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    label="Executing Venue"
                    fullWidth
                    InputProps={{
                      readOnly: true,
                    }}
                    InputLabelProps={{ shrink: true }}
                    value={modalData.executingVenue}
                  />
                </div>
                <div className={classes.grdCell1}>
                  <TextField
                    label="Vendor"
                    fullWidth
                    InputProps={{
                      readOnly: true,
                    }}
                    InputLabelProps={{ shrink: true }}
                    value={modalData.vendor}
                  />
                </div>
              </div>

              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    label="Batch No"
                    fullWidth
                    InputProps={{
                      readOnly: true,
                    }}
                    InputLabelProps={{ shrink: true }}
                    value={modalData.batchNo}
                  />
                </div>
                <div className={classes.grdCell1}>
                  <TextField
                    label="Created by"
                    fullWidth
                    InputProps={{
                      readOnly: true,
                    }}
                    InputLabelProps={{ shrink: true }}
                    value={modalData.createdBy}
                  />
                </div>
              </div>

              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    label="Created At"
                    fullWidth
                    InputProps={{
                      readOnly: true,
                    }}
                    InputLabelProps={{ shrink: true }}
                    value={modalData.createdAt}
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
              </div>
            </form>
          </Box>
        </div>
      </Fade>
    </Modal>
  );
}
