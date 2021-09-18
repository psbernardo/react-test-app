/*ReactJS*/
import React, { useState, useEffect } from 'react';
import useStyles from '../../../styles';
import SelectPage from '../../../components/AutoComplete/SelectPage';
import SelectSurveillanceGroup from '../../../components/AutoComplete/SelectSurveillanceGroup';
import SelectSurveillance from '../../../components/AutoComplete/SelectSurveillance';
import TextEditor from '../../../components/TextEditor/TextEditor';
import RecurringModal from '../../Recurrence/Components/RecurringModal';
import LoopIcon from '@material-ui/icons/Loop';
import { listRecurrence } from '../../../services/RecurrenceService';

import {
  Typography,
  Button,
  Modal,
  Backdrop,
  Fade,
  Box,
  TextField,
  InputAdornment,
  Select,
  MenuItem,
  InputLabel,
} from '@material-ui/core';

export default function SetupModal({
  onClose: handleClose,
  open: isOpen,
  value,
}) {
  const classes = useStyles();
  const [modalData, setModalData] = useState({});
  const [editorValue, setEditorValue] = useState('');
  const [isEdit, setIsEdit] = React.useState(false);
  const [recurringData, setRecurringData] = useState({
    recurringId: 0,
    functionName: 'Surveillance Setup',
    report: 'Surveillance Group - Surveillance',
    linkId: 0,
    recurring: '',
    day: '',
    month: '',
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
    // sunday: false,
    settleDate: false,
    tradeDate: false,
    calendarDate: false,
  });
  const [openRecurring, setOpenRecurring] = React.useState(false);

  const getRecurrence = async (value) => {
    const { recurrenceList } = await listRecurrence({
      recurrenceId: value.recurrenceId,
      functionName: 'Surveillance Setup',
      report: '',
      linkId: value.setupId,
    });
    if (recurrenceList.length != 0) {
      setRecurringData(recurrenceList[0]);
    }
  };

  useEffect(() => {
    if (isOpen) {
      if (value.setupId) {
        setIsEdit(true);
        getRecurrence(value);
      }
      setEditorValue(value.note);
      setModalData({ ...value });
    }
  }, [isOpen, value]);

  const handleChange = async (e) => {
    const input = e.currentTarget.name ? e.currentTarget : e.target;
    const modalDataCopy = { ...modalData };

    if (['pageName'].includes(input.name)) {
      modalDataCopy.pageId = input.pageId;
      modalDataCopy.pageName = input.value;
      setModalData(modalDataCopy);
    } else {
      setModalData({
        ...modalDataCopy,
        [input.name]: input.value,
      });
    }
  };

  const handleRecurringOpen = async () => {
    setRecurringData(recurringData);
    setOpenRecurring(true);
  };

  const handleRecurringClose = async (data) => {
    if (!data) {
      setOpenRecurring(false);
      return;
    }
    setRecurringData(data);
    setOpenRecurring(false);
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
            {isEdit ? 'Edit' : 'Add New'} Surveillance Setup
          </Typography>
          <Box id="transition-modal-description">
            <form className={classes.modalForm} noValidate autoComplete="off">
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <SelectSurveillanceGroup
                    freeSolo={true}
                    required={true}
                    name="surveillanceGroup"
                    label="Surveillance Group"
                    value={modalData.surveillanceGroup}
                    onChange={handleChange}
                  ></SelectSurveillanceGroup>
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <SelectSurveillance
                    freeSolo={true}
                    required={true}
                    name="surveillance"
                    label="Surveillance"
                    value={modalData.surveillance}
                    onChange={handleChange}
                  ></SelectSurveillance>
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <SelectPage
                    name="pageName"
                    label="Page Name"
                    value={modalData.pageName || ''}
                    onChange={handleChange}
                  ></SelectPage>
                </div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    name="reviewerCount"
                    label="Reviewer Count"
                    type="number"
                    required={true}
                    fullWidth={true}
                    InputLabelProps={{ shrink: true }}
                    value={modalData.reviewerCount || 0}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">#</InputAdornment>
                      ),
                    }}
                    onChange={handleChange}
                  />
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <InputLabel shrink id="status">
                    Status *
                  </InputLabel>
                  <Select
                    name="status"
                    fullWidth
                    value={modalData.status || ''}
                    onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em>Blank</em>
                    </MenuItem>
                    <MenuItem value="Active">Active</MenuItem>
                    <MenuItem value="Inactive">Inactive</MenuItem>
                  </Select>
                </div>
                <div className={classes.grdCell1}>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    startIcon={<LoopIcon />}
                    onClick={() => {
                      handleRecurringOpen();
                    }}
                  >
                    Recurring
                  </Button>
                </div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1}>
                  <TextEditor
                    setContents={editorValue}
                    onChange={setEditorValue}
                  ></TextEditor>
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
                      handleClose(
                        modalData,
                        recurringData,
                        isEdit,
                        editorValue
                      );
                    }}
                  >
                    Save
                  </Button>
                </div>
              </div>
            </form>
          </Box>
          {openRecurring && (
            <RecurringModal
              onClose={handleRecurringClose}
              open={openRecurring}
              value={recurringData}
            ></RecurringModal>
          )}
        </div>
      </Fade>
    </Modal>
  );
}
