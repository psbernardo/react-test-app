import React, { useState, useEffect } from 'react';
import useStyles from '../../../styles';

import {
  Box,
  Modal,
  Button,
  Backdrop,
  Typography,
  Fade,
} from '@material-ui/core';
import ActivityTable from './ActivityTable';

export default function ActivityDetailsModal({
  onClose: handleClose,
  open: isOpen,
  value,
}) {
  const classes = useStyles();

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
        <div className={classes.fadeModalFull}>
          <Typography
            id="transition-modal-title"
            variant="h4"
            className={classes.textBold}
            gutterBottom
          >
            Activity Table Details
          </Typography>
          <Box mt={5}>
            <ActivityTable
              params={{
                modalTable: true,
                selectedRow: value,
              }}
            />
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
