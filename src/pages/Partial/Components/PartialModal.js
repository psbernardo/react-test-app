/*ReactJS*/
import React, { useState, useEffect } from 'react';
import useStyles from '../../../styles';
import {
  transferPartial,
  downloadPartial,
} from '../../../services/PartialService';
import {
  notifyError,
  notifySuccess,
} from 'components/Notification/Notification';
import {
  Typography,
  Button,
  Modal,
  Backdrop,
  Fade,
  Box,
  TextField,
} from '@material-ui/core';

export default function PartialModal({
  onClose: handleClose,
  open: isOpen,
  value,
}) {
  const classes = useStyles();
  const [modalData, setModalData] = useState({});
  const [rows, setRows] = useState([]);

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

  const handleDownload = async (modalData) => {
    try {
      let valid = true;
      if (!modalData.submittingParticipantNo) {
        notifyError('Submitting DTCC# is required.');
        valid = false;
      }
      if (!modalData.originalReceiverNo) {
        notifyError('Receiver DTCC# is required.');
        valid = false;
      }
      if (!modalData.originalDelivererNo) {
        notifyError('Deliverer DTCC# is required.');
        valid = false;
      }
      if (!valid) {
        return;
      } else {
        const resp = await downloadPartial(modalData);
        setRows([resp.message, ...rows]);
      }
    } catch (error) {
      console.error(error);
      notifyError(error);
    }
  };

  const handleTransfer = async (modalData) => {
    try {
      let valid = true;
      if (!modalData.submittingParticipantNo) {
        notifyError('Submitting DTCC# is required.');
        valid = false;
      }
      if (!modalData.originalReceiverNo) {
        notifyError('Receiver DTCC# is required.');
        valid = false;
      }
      if (!modalData.originalDelivererNo) {
        notifyError('Deliverer DTCC# is required.');
        valid = false;
      }
      if (!valid) {
        return;
      } else {
        const resp = await transferPartial(modalData);
        setRows([resp.message, ...rows]);
        notifySuccess('Created Pending Transfer Input.');
      }
      // setOpen(false);
    } catch (error) {
      console.error(error);
      notifyError(error.message);
    }

    handleClose();
  };

  return (
    <Modal
      className={classes.modalBackdrop}
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={isOpen}
      onClose={() => {
        handleClose();
      }}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={isOpen}>
        <div className={classes.fadeModalMd}>
          <Typography
            id="transition-modal-title"
            className={classes.textBold}
            variant="h4"
            gutterBottom
          >
            Transfer Input
          </Typography>
          <Box id="transition-modal-description">
            <form className={classes.modalForm} noValidate autoComplete="off">
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    name="submittingParticipantNo"
                    required
                    label="Submitting DTCC#"
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={modalData.submittingParticipantNo}
                    onChange={handleChange}
                    inputProps={{ maxLength: 4 }}
                  />
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    name="originalReceiverNo"
                    label="Receiver DTCC#"
                    required
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={modalData.originalReceiverNo}
                    onChange={handleChange}
                    inputProps={{ maxLength: 4 }}
                  />
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    name="originalDelivererNo"
                    label="Deliverer DTCC#"
                    required
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={modalData.originalDelivererNo}
                    onChange={handleChange}
                    inputProps={{ maxLength: 4 }}
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
                <div
                  className={classes.grdCellNone}
                  style={{ marginRight: 10 }}
                >
                  <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    onClick={() => {
                      handleTransfer(modalData);
                    }}
                  >
                    Transfer
                  </Button>
                </div>
                <div className={classes.grdCellNone}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={() => {
                      handleDownload(modalData);
                    }}
                  >
                    Download
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
