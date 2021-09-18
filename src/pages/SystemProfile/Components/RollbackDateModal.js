/*ReactJS*/
import React, { useState } from 'react';
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

export default function RollbackDateModal({
  onClose: handleClose,
  open: isOpen,
  value,
}) {
  const classes = useStyles();
  const [rollbackDate, setRollbackDate] = useState(value);
  const [isLoading, setIsLoading] = useState(false);

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
            Select Rollback Date
          </Typography>
          <Box mt={5}>
            <form className={classes.modalForm} noValidate autoComplete="off">
              <div className={classes.grdCellnone}>
                <TextField
                  fullWidth={true}
                  required={true}
                  label="Rollback Date"
                  type="date"
                  value={rollbackDate}
                  onChange={(e) => {
                    setRollbackDate(e.currentTarget.value);
                  }}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className={classes.modalFooter}>
                <div
                  className={classes.grdCellNone}
                  style={{ marginRight: 10 }}
                >
                  <Button
                    disabled={isLoading}
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
                    disabled={isLoading}
                    variant="contained"
                    color="secondary"
                    size="large"
                    onClick={() => {
                      setIsLoading(true);
                      handleClose(rollbackDate, setIsLoading);
                    }}
                  >
                    Rollback
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
