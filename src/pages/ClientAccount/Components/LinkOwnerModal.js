import React, { useState } from 'react';
import useStyles from '../../../styles';
import {
  Typography,
  Button,
  Modal,
  Backdrop,
  Fade,
  Box,
} from '@material-ui/core';
import SelectSystemCode from '../../../components/Dropdown/SelectSystemCode';
import { notifyError } from 'components/Notification/Notification';

export default function LinkOwnerModal({
  onClose: handleClose,
  linkSelectedOwner,
}) {
  const classes = useStyles();
  const [ownerType, setOwnerType] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!ownerType) {
      return notifyError('Owner type is required.');
    }

    handleClose(ownerType, linkSelectedOwner);
  };

  return (
    <Modal
      className={classes.modalBackdrop}
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={!!linkSelectedOwner}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={!!linkSelectedOwner}>
        <div className={classes.fadeModalMd}>
          <Typography
            id="transition-modal-title"
            className={classes.textBold}
            variant="h4"
            gutterBottom
          >
            Do you want to link this owner to this account?
          </Typography>
          <Box mt={5}>
            <form
              className={classes.modalForm}
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit}
            >
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <SelectSystemCode
                    required={true}
                    label="Owner Type"
                    type="Owner Type"
                    onChange={(event) => {
                      setOwnerType(event.target.value);
                    }}
                    value={ownerType}
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
                    type="button"
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
                    type="submit"
                  >
                    Yes, Link
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
