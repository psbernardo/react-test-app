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
import SelectContactInfoType from '../../../components/Dropdown/SelectContactInfoType';
import TextFieldMobileNoAreaCode from '../../../components/Textfield/TextFieldMobileNoAreaCode.js';
import SelectSystemCode from '../../../components/Dropdown/SelectSystemCode';

export default function ContactInfoModal({
  onClose: handleClose,
  open: isOpen,
  importMode: isImport,
  value,
  validation,
}) {
  const classes = useStyles();
  const [modalData, setModalData] = useState({});
  const [isEditContactinfo, setisEditContactinfo] = React.useState(false);

  useEffect(() => {
    if (isOpen) {
      value.status = !value.status ? 'Active' : value.status;

      setModalData({ ...value });
      if (isImport || value.contactInfoId) {
        setisEditContactinfo(true);
      }
    }
  }, [isOpen, value, isImport]);

  const handleContactInfoChange = (value, data, event, formattedValue) => {
    setModalData({
      ...modalData,
      contactInfo: formattedValue,
    });
  };

  const handleChange = (e) => {
    const input = e.currentTarget.name ? e.currentTarget : e.target;
    setModalData({
      ...modalData,
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
        <div className={classes.fadeModalMd}>
          <Typography
            id="transition-modal-title"
            className={classes.textBold}
            variant="h4"
            gutterBottom
          >
            {isEditContactinfo ? 'Edit' : 'Add New'} Contact Information
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
                      name="accountNo"
                      label="Account No"
                      value={modalData.accountNo}
                      onChange={handleChange}
                      inputProps={{ maxLength: 50 }}
                      InputLabelProps={{ shrink: true }}
                    />
                  </div>
                </div>
              )}
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <SelectSystemCode
                    error={validation.contactInfoType}
                    required={true}
                    name="contactInfoType"
                    label="Contact Info Type"
                    type="Contact Info Type"
                    value={modalData.contactInfoType}
                    onChange={handleChange}
                  ></SelectSystemCode>
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  {modalData.contactInfoType === 'Primary' ||
                  modalData.contactInfoType === 'Mobile' ||
                  modalData.contactInfoType === 'Office' ? (
                    <TextFieldMobileNoAreaCode
                      required={true}
                      name="contactInfo"
                      label="Contact Info"
                      value={modalData.contactInfo}
                      onChange={handleContactInfoChange}
                    ></TextFieldMobileNoAreaCode>
                  ) : (
                    <TextField
                      error={validation.contactInfo}
                      fullWidth
                      required={true}
                      name="contactInfo"
                      label="Contact Info"
                      type="email"
                      value={modalData.contactInfo}
                      onChange={handleChange}
                      inputProps={{ maxLength: 100 }}
                      InputLabelProps={{ shrink: true }}
                    />
                  )}
                </div>
                <div className={classes.grdCell1}>
                  <SelectSystemCode
                    error={validation.status}
                    required={true}
                    name="status"
                    label="Status"
                    type="Status"
                    subType="Client Setup"
                    value={modalData.status}
                    onChange={handleChange}
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
                      handleClose(modalData, isEditContactinfo);
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
