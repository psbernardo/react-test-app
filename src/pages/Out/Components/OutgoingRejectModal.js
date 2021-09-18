/*ReactJS*/
import React, { useState, useEffect } from 'react';
import useStyles from '../../../styles';
import { rejectOutgoing } from '../../../services/OutgoingService';
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
import SelectSystemCode from '../../../components/Dropdown/SelectSystemCode';

export default function OutgoingRejectModal({
  onClose: handleClose,
  open: isOpen,
  value,
}) {
  const classes = useStyles();
  const [modalData, setModalData] = useState({});

  useEffect(() => {
    if (isOpen) {
      console.log(value);
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

  const handleReject = async (modalData) => {
    try {
      let valid = true;
      if (!modalData.reason) {
        notifyError('Reason is required.');
        valid = false;
      }
      if (!valid) {
        return;
      } else {
        await rejectOutgoing(modalData);
      }
    } catch (error) {
      console.error(error);
      notifyError(error);
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
            Reject Outgoing
          </Typography>
          <Box id="transition-modal-description">
            <form className={classes.modalForm} noValidate autoComplete="off">
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <SelectSystemCode
                    name="reason"
                    label="Reject Reason"
                    type="ACATS"
                    subType="Reject Codes"
                    value={modalData.reason}
                    onChange={handleChange}
                  ></SelectSystemCode>
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
                    color="primary"
                    size="large"
                    onClick={() => {
                      handleReject(modalData);
                    }}
                  >
                    Reject
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
