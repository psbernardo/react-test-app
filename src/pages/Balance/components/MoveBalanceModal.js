import React, { useState } from 'react';
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
import SelectAccount from '../../../components/AutoComplete/SelectAccount';
import SelectSubAccountNo from '../../../components/AutoComplete/SelectSubAccountNo';
import { SelectEntryType } from '../../../components/AutoComplete/SelectSystemCode';

export default function MoveBalanceModal({
  onClose: handleClose,
  open: isOpen,
}) {
  const classes = useStyles();
  const [modalData, setModalData] = useState({
    entryType: 'JNLC',
  });

  const handleChange = async (e, checkboxValue) => {
    const input = e.currentTarget.name ? e.currentTarget : e.target;
    const copyModalData = {
      ...modalData,
      [input.name]:
        checkboxValue === true || checkboxValue === false
          ? checkboxValue
          : input.value,
    };

    setModalData(copyModalData);
  };

  const err = 'Missing Value';

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
            Move Balance
          </Typography>
          <Box mt={5}>
            <form noValidate autoComplete="off">
              <div className={classes.grdRow}>
                <div
                  className={classes.grdCellNone}
                  style={{ width: 228, marginRight: 30 }}
                >
                  <SelectEntryType
                    required={true}
                    name="entryType"
                    label="Entry Type"
                    note="Cash Movement"
                    value={modalData.entryType}
                    onChange={handleChange}
                  ></SelectEntryType>
                </div>
                <div className={classes.grdCell1}>
                  <TextField
                    fullWidth
                    name="description"
                    label="Description"
                    value={modalData.description}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <SelectAccount
                    freeSolo={false}
                    type="correspondent"
                    name="contraCorrespondent"
                    label="Contra Correspondent"
                    value={modalData.contraCorrespondent}
                    onChange={handleChange}
                  />
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <SelectAccount
                    freeSolo={false}
                    required={true}
                    type="accountNo"
                    name="contraAccountNo"
                    label="Contra Account No"
                    value={
                      modalData.contraAccountNo !== err
                        ? modalData.contraAccountNo
                        : ''
                    }
                    showAccountName={true}
                    onChange={handleChange}
                    selectedCorrespondent={modalData.contraCorrespondent}
                  />
                </div>
                <div className={classes.grdCell1}>
                  <SelectSubAccountNo
                    freeSolo={false}
                    name="contraSubAccountNo"
                    label="Contra Sub Account No"
                    value={
                      modalData.contraSubAccountNo !== err
                        ? modalData.contraSubAccountNo
                        : ''
                    }
                    accountNo={modalData.contraAccountNo}
                    onChange={handleChange}
                    disabled={modalData.contraAccountNo ? false : true}
                  ></SelectSubAccountNo>
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
                      handleClose(modalData);
                    }}
                  >
                    Execute
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
