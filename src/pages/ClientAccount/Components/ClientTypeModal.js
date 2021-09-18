import React, { useState, useEffect } from 'react';
import useStyles from '../../../styles';

import {
  Typography,
  Button,
  Modal,
  Backdrop,
  Select,
  InputLabel,
  TextField,
  MenuItem,
  Fade,
  Box,
} from '@material-ui/core';

import SelectCorrespondent from '../../../components/AutoComplete/SelectCorrespondent';
import AccountType from '../../../components/Dropdown/AccountType';

export default function ClientTypeModal({
  onClose: handleClose,
  open: isOpen,
  importMode: isImport,
  value,
}) {
  const classes = useStyles();
  const [modalData, setModalData] = useState({});
  const [isEdit, setIsEdit] = React.useState(false);

  useEffect(() => {
    if (isOpen) {
      setModalData({ ...value });
      if (isImport || value.typeId) {
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
            {isEdit ? 'Edit' : 'Add New'} Account Type
          </Typography>
          <Box mt={5}>
            <form className={classes.modalForm} noValidate autoComplete="off">
              {isImport && (
                <div className={classes.grdRow}>
                  <div className={classes.grdCell1} style={{ marginRight: 20 }}>
                    <SelectCorrespondent
                      required={true}
                      freeSolo={true}
                      fullWidth
                      name="correspondent"
                      value={modalData.correspondent}
                      onChange={handleChange}
                    ></SelectCorrespondent>
                  </div>
                  <div className={classes.grdCell1} style={{ marginRight: 20 }}>
                    <TextField
                      name="accountNo"
                      fullWidth
                      required={true}
                      label="Account No"
                      value={modalData.accountNo}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                  </div>
                </div>
              )}
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <InputLabel id="type" shrink>
                    Type
                  </InputLabel>
                  <Select
                    name="type"
                    displayEmpty
                    labelId="type"
                    fullWidth
                    value={modalData.type}
                    onChange={handleChange}
                  >
                    <MenuItem value="client">Client</MenuItem>
                    <MenuItem value="margin">Margin</MenuItem>
                  </Select>
                </div>
                <div className={classes.grdCell1}>
                  <InputLabel id="typeCode" shrink>
                    {' '}
                    Type Code{' '}
                  </InputLabel>
                  <AccountType
                    name="typeCode"
                    displayEmpty
                    labelId="typeCode"
                    fullWidth
                    type={modalData.type}
                    value={modalData.typeCode}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1}>
                  <InputLabel shrink>Status</InputLabel>
                  <Select
                    name="status"
                    displayEmpty
                    fullWidth
                    required={true}
                    value={modalData.status}
                    onChange={handleChange}
                  >
                    <MenuItem value=""></MenuItem>
                    <MenuItem value="active">active</MenuItem>
                    <MenuItem value="disabled">disabled</MenuItem>
                  </Select>
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
