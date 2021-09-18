import React, { useState, useEffect } from 'react';
import useStyles from '../../../styles';

import {
  Typography,
  Button,
  Modal,
  Backdrop,
  Fade,
  Box,
  InputLabel,
  TextField,
} from '@material-ui/core';
import StateSelect from './../../../components/Dropdown/State';
import CountriesSelect from '../../../components/AutoComplete/Countries';
import TextFieldMobileNo from '../../../components/Textfield/TextFieldMobileNo';
export default function TransferAgentModal({
  onClose: handleClose,
  open: isOpen,
  value,
}) {
  const classes = useStyles();
  const [modalData, setModalData] = useState({});
  const [isEdit, setIsEdit] = React.useState(false);

  useEffect(() => {
    if (isOpen) {
      setModalData({ ...value });
      if (value.transferAgentId) {
        setIsEdit(true);
      }
    }
  }, [isOpen, value]);

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
      onClose={() => {
        handleClose();
      }}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{ timeout: 500 }}
    >
      <Fade in={isOpen}>
        <div className={classes.fadeModalMd}>
          <Typography
            id="transition-modal-title"
            variant="h4"
            className={classes.textBold}
            gutterBottom
          >
            {isEdit ? 'Edit' : 'Add New'} Transfer Agent
          </Typography>
          <Box mt={5}>
            <form noValidate autoComplete="off">
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    name="agentName"
                    label="Name*"
                    fullWidth
                    disabled={isEdit}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={modalData.agentName || ''}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    name="address"
                    label="Address*"
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={modalData.address || ''}
                    onChange={handleChange}
                  />
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    name="city"
                    label="City"
                    required={true}
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    value={modalData.city || ''}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    name="zipCode"
                    label="Zip Code*"
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={modalData.zipCode || ''}
                    onChange={handleChange}
                  />
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <InputLabel shrink>State*</InputLabel>
                  <StateSelect
                    name="state"
                    fullWidth
                    value={modalData.state || ''}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <CountriesSelect
                    name="country"
                    labelid="country"
                    label="Country"
                    value={modalData.country || ''}
                    onChange={handleChange}
                    setNewValue={(event, newValue) => {
                      if (newValue) {
                        setModalData.country(newValue.code);
                      } else {
                        setModalData.country('');
                        return;
                      }
                    }}
                  />
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextFieldMobileNo
                    name="contactNo"
                    label="Contact No"
                    value={modalData.contactNo || ''}
                    onChange={handleChange}
                    onInput={(e) => {
                      e.target.value = Math.max(0, parseInt(e.target.value))
                        .toString()
                        .slice(0, 11);
                    }}
                  ></TextFieldMobileNo>
                </div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    name="note"
                    label="Note"
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={modalData.note || ''}
                    onChange={handleChange}
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
