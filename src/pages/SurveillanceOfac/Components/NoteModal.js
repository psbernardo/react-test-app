/*ReactJS*/
import React, { useState, useEffect } from 'react';
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
import SelectCorrespondent from '../../../components/AutoComplete/SelectCorrespondent';
import SelectSystemCode from '../../../components/Dropdown/SelectSystemCode';

export default function NoteModal({
  onClose: handleClose,
  open: isOpen,
  importMode: isImport,
  value,
  validation,
}) {
  const classes = useStyles();
  const [modalData, setModalData] = useState({});
  const [isEdit, setIsEdit] = React.useState(false);

  useEffect(() => {
    if (isOpen) {
      setModalData({ ...value });
      if (isImport || value.noteId) {
        setIsEdit(true);
      }
    }
  }, [isOpen, value, isImport]);

  const handleChange = (e) => {
    const input = e.currentTarget.name ? e.currentTarget : e.target;

    setModalData({
      ...modalData,
      [input.name]: input.value,
    });
  };

  const minimumMultiLine = 10;

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
            {isEdit ? 'Edit' : 'Add New'} Note
          </Typography>
          <Box mt={5}>
            <form className={classes.modalForm} noValidate autoComplete="off">
              {isImport && (
                <div className={classes.grdRow}>
                  <div className={classes.grdCell1} style={{ marginRight: 20 }}>
                    <SelectCorrespondent
                      fullWidth
                      required={true}
                      freeSolo={true}
                      name="correspondent"
                      value={modalData.correspondent}
                      onChange={handleChange}
                    ></SelectCorrespondent>
                  </div>
                  <div className={classes.grdCell1} style={{ marginRight: 20 }}>
                    <TextField
                      fullWidth
                      required={true}
                      name="ofacId"
                      label="OFAC ID"
                      value={modalData.ofacId}
                      onChange={handleChange}
                      inputProps={{ maxLength: 50 }}
                      InputLabelProps={{ shrink: true }}
                    />
                  </div>
                </div>
              )}
              <div className={classes.grdRow}>
                <div className={classes.grdCell1}>
                  <TextField
                    error={validation.subject}
                    fullWidth
                    required={true}
                    name="subject"
                    label="Subject"
                    value={modalData.subject}
                    onChange={handleChange}
                    inputProps={{ maxLength: 100 }}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1}>
                  <TextField
                    error={validation.note}
                    multiline
                    fullWidth
                    required={true}
                    name="note"
                    label="Note"
                    rows={minimumMultiLine}
                    rowsMax={Infinity}
                    value={modalData.note}
                    onChange={handleChange}
                    inputProps={{ maxLength: 150 }}
                    InputLabelProps={{ shrink: true }}
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
                <div className={classes.grdCellNone}>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    onClick={() => {
                      handleClose(modalData, isEdit);
                    }}
                  >
                    Save
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
