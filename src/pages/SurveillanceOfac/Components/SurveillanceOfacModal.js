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
  Select,
  MenuItem,
  InputLabel,
} from '@material-ui/core';

import { protoDateObjectToString } from '../../../services/ConvertService';
import { listNoteGeneric, createNote } from '../../../services/NoteService';
import { notifyError } from 'components/Notification/Notification';

import NoteTable from './NoteTable';
import AttachmentTable from './AttachmentTable';

export default function SurveillanceOfacModal({
  onClose: handleClose,
  open: isOpen,
  value,
}) {
  const classes = useStyles();
  const [modalData, setModalData] = useState({});
  const [noteList, setNoteList] = React.useState([]);

  useEffect(() => {
    if (isOpen) {
      let modalValue = { ...value };
      getNotes(modalValue);

      modalValue.ofacDate = protoDateObjectToString(
        value.ofacDate,
        'yyyy-MM-DD'
      );

      setModalData(modalValue);
    }
  }, [isOpen, value]);

  const getNotes = async (value) => {
    try {
      const param = {
        accountId: value.accountId,
        linkId: value.ofacId,
        noteType: 'OFAC',
      };
      const data = await listNoteGeneric(param);
      setNoteList(data.notesList);
    } catch (error) {
      notifyError(error.message);
    }
  };

  const handleChange = async (e) => {
    const input = e.currentTarget.name ? e.currentTarget : e.target;
    const modalDataCopy = { ...modalData };

    setModalData({
      ...modalDataCopy,
      [input.name]: input.value,
    });
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
        <div className={classes.fadeModalFull}>
          <Typography
            id="transition-modal-title"
            className={classes.textBold}
            variant="h4"
            gutterBottom
          >
            Edit OFAC
          </Typography>
          <Box id="transition-modal-description">
            <form className={classes.modalForm} noValidate autoComplete="off">
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <InputLabel shrink>Name</InputLabel>
                  <TextField
                    fullWidth
                    value={modalData.firstName + ' ' + modalData.lastName}
                    contentEditable={false}
                  />
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <InputLabel shrink id="ofacStatus">
                    OFAC Status
                  </InputLabel>
                  <Select
                    name="ofacStatus"
                    fullWidth
                    value={modalData.ofacStatus}
                    onChange={handleChange}
                  >
                    <MenuItem value="Pending">Pending</MenuItem>
                    <MenuItem value="Approved">Approved</MenuItem>
                    <MenuItem value="Denied">Denied</MenuItem>
                  </Select>
                </div>
                <div className={classes.grdCell1}>
                  <TextField
                    fullWidth
                    name="ofacDate"
                    label="OFAC Date"
                    type="date"
                    value={modalData.ofacDate}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
              </div>
              <div className={classes.grdRow}>
                <NoteTable
                  ofacId={modalData.ofacId}
                  accountId={modalData.accountId}
                  list={noteList}
                  set={setNoteList}
                  style={{ paddingBottom: 0 }}
                />
              </div>
              <div className={classes.grdRow}>
                <AttachmentTable
                  ofacId={modalData.ofacId}
                  style={{ paddingBottom: 0 }}
                />
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
                      handleClose(modalData);
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
