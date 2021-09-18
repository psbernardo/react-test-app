/*ReactJS*/
import React from 'react';
import useStyles from '../../../styles';

/*Material UI Core Components*/
import {
  Button,
  Typography,
  Modal,
  Backdrop,
  Fade,
  Box,
} from '@material-ui/core';

import ClientAccountTable from './ClientAccountTable';

export default function ClientAccountUploadModal({
  onClose: handleUploadClose,
  open: isOpen,
}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Modal
        className={classes.modalBackdrop}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isOpen}
        onClose={() => {
          handleUploadClose();
        }}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        disableBackdropClick
        disableEscapeKeyDown
      >
        <Fade in={isOpen}>
          <div className={classes.fadeModalFullNP}>
            <Typography
              id="transition-modal-title"
              className={classes.textBold}
              variant="h4"
              style={{ padding: '20px 25px 0px 25px' }}
            >
              Import Client Account
            </Typography>
            <Box mt={5}>
              <form className={classes.modalForm} noValidate autoComplete="off">
                <Box component="div" mt={2}>
                  <ClientAccountTable importMode={true}></ClientAccountTable>
                </Box>
              </form>
            </Box>
            <div
              className={classes.modalFooter}
              style={{ margin: 0, padding: '10px 30px 30px 25px' }}
            >
              <div className={classes.grdCellNone}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  onClick={() => {
                    handleUploadClose();
                  }}
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
