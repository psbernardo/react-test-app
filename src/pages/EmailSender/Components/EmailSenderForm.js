import React, { useState, useEffect } from 'react';
import {
  Box,
  TextField,
  Button,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  Modal,
  Backdrop,
  Fade,
} from '@material-ui/core';
import LoopIcon from '@material-ui/icons/Loop';
import useStyles from '../../../styles';
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File
import SelectSystemCode from 'components/Dropdown/SelectSystemCode';
import SelectRecepientEmailGroup from '../../../components/Dropdown/SelectRecepientEmailGroup';
import { dateProtoObjectToString } from '../../../services/ConvertService';
import RecurringModal from '../../Recurrence/Components/RecurringModal';
import SunEditor from 'suneditor-react';
import { listRecurrence } from '../../../services/RecurrenceService';

export default function EmailSenderForm({
  onClose: handleClose,
  open: isOpen,
  value,
}) {
  const classes = useStyles();
  const [isEdit, setIsEdit] = React.useState(false);

  const [modalContentValue, setModalContentValue] = useState(value.body || '');

  const [formData, setFormData] = React.useState({
    template: '',
    sender: '',
    recipientEmailGroup: '',
    subject: '',
    body: '',
    status: 'Active',
  });

  const [recurringData, setRecurringData] = useState({
    recurringId: 0,
    functionName: 'Email Sender',
    report: value.template || '',
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
      functionName: 'Email Sender',
      report: value.template,
      linkId: value.emailSenderId,
    });
    if (recurrenceList.length != 0) {
      setRecurringData(recurrenceList[0]);
    }
  };

  useEffect(() => {
    if (isOpen) {
      let modalValue = { ...value };
      if (value.emailSenderId) {
        setIsEdit(true);
        getRecurrence(value);
        setModalContentValue(modalValue.body);
        modalValue.recurringDate = dateProtoObjectToString(
          modalValue.recurringDate
        );
      }
      setFormData(modalValue);
    }
    // eslint-disable-next-line
  }, [isOpen, value]);

  const handleChange = (e, x) => {
    const input = e.currentTarget.name ? e.currentTarget : e.target;

    setFormData({
      ...formData,
      [input.name]: input.value,
    });
  };

  const complex = [
    ['undo', 'redo'],
    ['font', 'fontSize', 'formatBlock'],
    ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
    ['removeFormat'],
    ['fontColor', 'hiliteColor'],
    ['outdent', 'indent'],
    ['align', 'horizontalRule', 'list', 'table'],
    ['link', 'image'],
    ['showBlocks', 'preview', 'fullScreen'],
  ];

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
        <div className={classes.fadeModalFull}>
          <Typography
            id="transition-modal-title"
            className={classes.textBold}
            variant="h4"
            gutterBottom
          >
            {isEdit ? 'Edit' : 'Add New'} Email Sender
          </Typography>
          <Box mt={5}>
            <div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    name="sender"
                    fullWidth
                    label="Sender"
                    required={true}
                    value={formData.sender || ''}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <SelectRecepientEmailGroup
                    name="recipientEmailGroup"
                    label="Recipients Email Group"
                    required={true}
                    value={formData.recipientEmailGroup || ''}
                    onChange={handleChange}
                  ></SelectRecepientEmailGroup>
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <SelectSystemCode
                    required={true}
                    name="template"
                    label="Template"
                    type="Email"
                    subType="Template"
                    value={formData.template || ''}
                    onChange={handleChange}
                  ></SelectSystemCode>
                </div>
                {/* <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <SelectSystemCode
                    required={true}
                    name="recurring"
                    label="Recurring"
                    type="Email"
                    subType="Recurring"
                    value={formData.recurring || ''}
                    onChange={handleChange}
                  ></SelectSystemCode>
                </div> */}
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <InputLabel shrink>Status*</InputLabel>
                  <Select
                    name="status"
                    displayEmpty
                    fullWidth
                    value={formData.status || ''}
                    onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em>Blank</em>
                    </MenuItem>
                    <MenuItem value="Inactive">Inactive</MenuItem>
                    <MenuItem value="Active">Active</MenuItem>
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
                  <TextField
                    name="subject"
                    fullWidth
                    label="Subject"
                    required={true}
                    value={formData.subject || ''}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
              </div>
              <div className={classes.grdRow}>
                <SunEditor
                  showToolbar={true}
                  setOptions={{
                    height: '100%',
                    minHeight: 300,
                    buttonList: complex,
                  }}
                  setContents={modalContentValue}
                  onChange={setModalContentValue}
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
                      handleClose(
                        formData,
                        modalContentValue,
                        recurringData,
                        isEdit
                      );
                    }}
                  >
                    Save
                  </Button>
                </div>
              </div>
            </div>
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
