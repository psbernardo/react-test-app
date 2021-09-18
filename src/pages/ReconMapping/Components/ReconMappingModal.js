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
import SelectAccountNo from '../../../components/AutoComplete/SelectAccountNo';
import SelectSystemCode from '../../../components/Dropdown/SelectSystemCode';

export default function ReconMappingModal({
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
      if (value.accountMappingId) {
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
            {isEdit ? 'Edit' : 'Add New'} Recon Mapping
          </Typography>
          <Box mt={5}>
            <form noValidate autoComplete="off">
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <SelectSystemCode
                    required={true}
                    name="report"
                    label="Report"
                    type="Recon Account Mapping"
                    subType="Report"
                    value={modalData.report}
                    onChange={handleChange}
                  ></SelectSystemCode>
                </div>
                <div className={classes.grdCell1}>
                  <SelectSystemCode
                    required={true}
                    name="contraSource"
                    label="Contra Source"
                    type="Recon Account Mapping"
                    subType="Contra Source"
                    value={modalData.contraSource}
                    onChange={handleChange}
                  ></SelectSystemCode>
                </div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <SelectAccountNo
                    freeSolo={false}
                    required={true}
                    name="account"
                    label="Account"
                    value={modalData.account}
                    onChange={handleChange}
                  ></SelectAccountNo>
                </div>
                <div className={classes.grdCell1}>
                  <TextField
                    fullWidth
                    required={true}
                    name="contraAccount"
                    label="Contra Account"
                    value={modalData.contraAccount}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
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
