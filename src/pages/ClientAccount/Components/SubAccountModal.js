import React, { useState, useEffect } from 'react';
import useStyles from '../../../styles';

import {
  Typography,
  Button,
  Modal,
  Backdrop,
  TextField,
  Fade,
  Box,
} from '@material-ui/core';

import SelectCorrespondent from '../../../components/AutoComplete/SelectCorrespondent';
import { AutoCompleteSubAccountNo } from '../../../components/AutoComplete/SelectSystemCode';
import SelectSystemCode from '../../../components/Dropdown/SelectSystemCode';

export default function SubAccountModal({
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
      if (isImport || value.subAccountId) {
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
            {isEdit ? 'Edit' : 'Add New'} Sub Account
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
                  <AutoCompleteSubAccountNo
                    fullWidth
                    freeSolo={true}
                    disabled={isEdit}
                    name="subAccount"
                    label="Sub Account No"
                    type="Sub Account No"
                    value={modalData.subAccount}
                    onChange={handleChange}
                  />
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
