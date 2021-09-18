import React, { useState, useEffect } from 'react';
import {
  Typography,
  Button,
  Box,
  Modal,
  Backdrop,
  Fade,
  CircularProgress,
} from '@material-ui/core';
import { CSVLink } from 'react-csv';
import { notifyError } from 'components/Notification/Notification';
import useStyles from 'styles';

export default function CsvDownload({
  onClose: handleClose,
  open: isOpen,
  filename,
  getData,
}) {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await getData();
        setData(data);
        setLoading(false);
      } catch (error) {
        notifyError(error.message);
        setLoading(false);
      }
    })();
    // eslint-disable-next-line
  }, []);

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
      BackdropProps={{ timeout: 100 }}
    >
      <Fade in={isOpen}>
        <div className={classes.fadeModalLg}>
          <Typography
            id="transition-modal-title"
            variant="h4"
            className={classes.textBold}
            gutterBottom
          >
            CSV Download
          </Typography>
          <Box mt={2}>
            {loading ? (
              <div>
                <CircularProgress color="inherit" size={20} /> Getting data...
              </div>
            ) : (
              <div>
                <div>({data.length}) data found.</div>
                <CSVLink
                  id="csvDL"
                  data={data}
                  filename={filename}
                  target="_blank"
                >
                  Download {filename}
                </CSVLink>
              </div>
            )}

            <div className={classes.modalFooter}>
              <div className={classes.grdCellNone} style={{ marginRight: 10 }}>
                <Button
                  variant="contained"
                  color="secondary"
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
