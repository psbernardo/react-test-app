/*ReactJS*/
import React, { useState, useEffect } from 'react';
import useStyles from '../../../styles';
import SelectSystemCode from '../../../components/Dropdown/SelectSystemCode';
import {
  Typography,
  Button,
  TextField,
  Modal,
  Backdrop,
  Fade,
  Box,
} from '@material-ui/core';
import ParameterAuditModal from './ParameterAuditModal';

export default function ParameterModal({
  onClose: handleClose,
  open: isOpen,
  value,
}) {
  const classes = useStyles();
  const [modalData, setModalData] = useState({});
  const [isEdit, setIsEdit] = React.useState(false);
  const [openAudit, setOpenAudit] = React.useState(false);

  useEffect(() => {
    if (isOpen) {
      let modalValue = { ...value };

      if (value.parameterId) {
        setIsEdit(true);
      }
      setModalData(modalValue);
    }
  }, [isOpen, value]);

  const handleChange = (e) => {
    const input = e.currentTarget.name ? e.currentTarget : e.target;

    setModalData({
      ...modalData,
      [input.name]: input.value,
    });
  };

  const handleCloseModal = async () => {
    setOpenAudit(false);
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
            {isEdit ? 'Edit' : 'Add New'} Parameter
          </Typography>
          <Box mt={5}>
            <form className={classes.modalForm} noValidate autoComplete="off">
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    required
                    fullWidth={true}
                    name="report"
                    label="Report"
                    value={modalData.report}
                    onChange={handleChange}
                    inputProps={{ maxLength: 150 }}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
                <div className={classes.grdCell1}>
                  <TextField
                    required
                    fullWidth={true}
                    name="field"
                    label="Field"
                    value={modalData.field}
                    onChange={handleChange}
                    inputProps={{ maxLength: 50 }}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <SelectSystemCode
                    required={true}
                    name="sign"
                    label="Sign"
                    type="Sign"
                    subType="Parameter"
                    value={modalData.sign}
                    onChange={handleChange}
                  ></SelectSystemCode>
                </div>
                <div className={classes.grdCell1}>
                  <TextField
                    fullWidth
                    required={true}
                    name="value"
                    label="Value"
                    type="number"
                    value={modalData.value}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
              </div>
              <div className={classes.modalFooter}>
                {isEdit && (
                  <div
                    className={classes.grdCellNone}
                    style={{ marginRight: 10 }}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      onClick={() => {
                        setOpenAudit(true);
                      }}
                    >
                      View Audit Logs
                    </Button>
                  </div>
                )}
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
          {openAudit && (
            <ParameterAuditModal
              onClose={handleCloseModal}
              open={openAudit}
              value={value.parameterId}
            ></ParameterAuditModal>
          )}
        </div>
      </Fade>
    </Modal>
  );
}
