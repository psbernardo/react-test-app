import React, { useState, useEffect } from 'react';
import useStyles from '../../../styles';
import {
  Typography,
  Button,
  Modal,
  Backdrop,
  Fade,
  Box,
} from '@material-ui/core';
import NoteTable from './NoteTable';
import { listNotes } from '../../../services/CommonService';
import SelectSystemCode from 'components/Dropdown/SelectSystemCode';

export default function CallLogModal({
  onClose: handleClose,
  open: isOpen,
  value,
}) {
  const classes = useStyles();
  const [modalData, setModalData] = useState({});
  const [noteList, setNoteList] = React.useState();
  const [mounted, setMounted] = React.useState(false);

  useEffect(() => {
    async function getNotes() {
      try {
        const data = await listNotes(
          modalData.accountId,
          modalData.requirementLogId,
          'call_logs'
        );
        setNoteList(data.notesList);
      } catch (error) {
        console.error(error);
      }
    }

    if (isOpen && !mounted) {
      setModalData({ ...value });
      getNotes();
    }
    return () => {
      setMounted(true);
    };
  }, [isOpen, value, modalData, mounted]);

  const handleChange = (e) => {
    const input = e.currentTarget.name ? e.currentTarget : e.target;

    setModalData({
      ...modalData,
      [input.name]: input.value,
    });
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modalBackdrop}
      open={isOpen}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{ timeout: 500 }}
    >
      <Fade in={isOpen}>
        <div className={classes.fadeModalLg}>
          <Typography
            id="transition-modal-title"
            variant="h4"
            className={classes.textBold}
            gutterBottom
          >
            Edit Call Log - [{modalData.masterAccountNo}] -{' '}
            {modalData.accountName} [{modalData.callType}]
          </Typography>
          <Box mt={5}>
            <form noValidate autoComplete="off">
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <SelectSystemCode
                    required={true}
                    name="callStatus"
                    label="Call Status"
                    type="Status"
                    subType="Call Status"
                    value={modalData.callStatus}
                    onChange={handleChange}
                  ></SelectSystemCode>
                </div>
                <div className={classes.grdCell1}>
                  <SelectSystemCode
                    required={true}
                    name="callStatusReason"
                    label="Call Status Reason"
                    type="Status"
                    subType="Call Status Reason"
                    value={modalData.callStatusReason}
                    onChange={handleChange}
                  ></SelectSystemCode>
                </div>
              </div>
              <div>
                <NoteTable
                  accountid={modalData.accountId}
                  linkid={modalData.requirementLogId}
                  notelist={noteList}
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
