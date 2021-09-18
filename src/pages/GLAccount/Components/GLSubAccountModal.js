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
import { AutoCompleteSubAccountNo } from '../../../components/AutoComplete/SelectSystemCode';
import SelectSystemCode from '../../../components/Dropdown/SelectSystemCode';

export default function GlSubAccountModal({
  onClose: handleSubAccountClose,
  open: isOpen,
  value,
}) {
  const classes = useStyles();
  const [modalData, setModalData] = useState({});
  const [isEdit, setIsEdit] = React.useState(false);

  useEffect(() => {
    if (isOpen) {
      setModalData({ ...value });

      if (value.subAccountId) {
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
      className={classes.modalBackdrop}
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={isOpen}
      onClose={() => {
        handleSubAccountClose();
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
            {isEdit ? 'Edit' : 'Add New'} GL Sub Account
          </Typography>
          <Box mt={5}>
            <form className={classes.modalForm} noValidate autoComplete="off">
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <AutoCompleteSubAccountNo
                    fullWidth
                    freeSolo={true}
                    required={true}
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
                      handleSubAccountClose();
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
                      handleSubAccountClose(modalData, isEdit);
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
