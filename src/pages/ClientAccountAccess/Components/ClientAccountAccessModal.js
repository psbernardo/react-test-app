import React, { useState } from 'react';
import useStyles from '../../../styles';
import {
  Typography,
  Modal,
  Backdrop,
  Fade,
  Box,
  Button,
} from '@material-ui/core';
import ClientAccountAccessTable from './ClientAccountAccessTable';

export default function ClientAccountAccessModal({
  onClose: handleClose,
  open: isOpen,
  id,
}) {
  const classes = useStyles();

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
        <div className={classes.fadeModalFull}>
          <Typography
            id="transition-modal-title"
            variant="h4"
            className={classes.textBold}
          >
            Add/Remove Account Access
          </Typography>
          <Box>
            <ClientAccountAccessTable
              open={isOpen}
              id={id}
              tableLvl={2}
            ></ClientAccountAccessTable>
          </Box>
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
        </div>
      </Fade>
    </Modal>
  );
}
