/*ReactJS*/
import React, { useState, useEffect } from 'react';
import useStyles from '../../../styles';
import { dateProtoObjectToString } from '../../../services/ConvertService';
import {
  Typography,
  Button,
  TextField,
  Modal,
  Backdrop,
  Fade,
  Box,
} from '@material-ui/core';
import SelectSystemNumberSubType from '../../../components/AutoComplete/SelectSystemNumberSubType';
import SelectSystemCode from '../../../components/Dropdown/SelectSystemCode';

export default function SystemNumberModal({
  onClose: handleClose,
  open: isOpen,
  value,
}) {
  const classes = useStyles();
  const [modalData, setModalData] = useState({});
  const [isEdit, setIsEdit] = React.useState(false);

  useEffect(() => {
    if (isOpen) {
      let modalValue = { ...value };

      if (value.systemNumberId) {
        setIsEdit(true);
        modalValue.fromDate = dateProtoObjectToString(value.fromDate);
        modalValue.toDate = dateProtoObjectToString(value.toDate);
      }
      setModalData(modalValue);
      if (value.systemNumberId) {
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
            {isEdit ? 'Edit' : 'Add New'} System Number
          </Typography>
          <Box mt={5}>
            <form className={classes.modalForm} noValidate autoComplete="off">
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    required
                    fullWidth={true}
                    name="type"
                    label="Type"
                    value={modalData.type}
                    onChange={handleChange}
                    inputProps={{ maxLength: 20 }}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
                <div className={classes.grdCell1}>
                  <SelectSystemNumberSubType
                    freeSolo={true}
                    required={true}
                    name="subType"
                    label="Sub Type"
                    value={modalData.subType}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    fullWidth
                    name="fromDate"
                    label="From Date"
                    type="date"
                    value={modalData.fromDate}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
                <div className={classes.grdCell1}>
                  <TextField
                    fullWidth
                    name="toDate"
                    label="To Date"
                    type="date"
                    value={modalData.toDate}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    fullWidth
                    required={true}
                    name="rate"
                    label="Rate/Amount/Qty"
                    type="number"
                    value={modalData.rate}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
                <div className={classes.grdCell1}>
                  <SelectSystemCode
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
