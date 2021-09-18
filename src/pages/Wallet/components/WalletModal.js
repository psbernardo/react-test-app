import React, { useState, useEffect } from 'react';
import useStyles from '../../../styles';
import WalletAuditModal from './WalletAuditModal';
import {
  Typography,
  Button,
  TextField,
  Modal,
  Backdrop,
  Fade,
  Box,
} from '@material-ui/core';
import SelectSymbol from 'components/AutoComplete/SelectSymbol';
import SelectSystemCode from 'components/Dropdown/SelectSystemCode';
import SelectAccountNo from '../../../components/AutoComplete/SelectAccountNo';
export default function WalletModal({
  onClose: handleClose,
  open: isOpen,
  value,
}) {
  const classes = useStyles();
  const [modalData, setModalData] = useState({});
  const [isEdit, setIsEdit] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    if (isOpen) {
      setModalData({ ...value });
      if (value.walletId) {
        setIsEdit(true);
      }
    }
  }, [isOpen, value]);

  const handleChange = (e, checkboxValue) => {
    const input = e.currentTarget.name ? e.currentTarget : e.target;

    let copy = { ...modalData };
    copy[input.name] =
      checkboxValue === true || checkboxValue === false
        ? checkboxValue
        : input.value;

    if (input.name === 'accountNo') {
      copy['accountId'] = input.data ? input.data.accountId : 0;
    }

    setModalData(copy);
  };

  const handleCloseModal = async () => {
    setOpen(false);
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
            {isEdit ? 'Edit' : 'Add New'} Wallet
          </Typography>
          <Box mt={5}>
            <form noValidate autoComplete="off">
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <SelectSymbol
                    fullWidth
                    freeSolo={true}
                    required={true}
                    disabled={isEdit}
                    name="symbol"
                    label="Symbol"
                    value={modalData.symbol}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
                <div className={classes.grdCell1}>
                  <SelectAccountNo
                    freeSolo={false}
                    required={false}
                    disabled={isEdit}
                    name="accountNo"
                    label="Account No"
                    value={modalData.accountNo}
                    correspondent={modalData.correspondent}
                    onChange={handleChange}
                  ></SelectAccountNo>
                </div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    fullWidth
                    required={true}
                    disabled={isEdit}
                    name="wallet"
                    label="Wallet"
                    value={modalData.wallet}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                    inputProps={{ maxLength: 150 }}
                  />
                </div>
                <div className={classes.grdCell1}>
                  <SelectSystemCode
                    required={true}
                    name="status"
                    label="Status"
                    type="Status"
                    subType="Bank Account"
                    value={modalData.status}
                    onChange={handleChange}
                  ></SelectSystemCode>
                </div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1}>
                  <TextField
                    fullWidth
                    name="note"
                    label="Note"
                    value={modalData.note}
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
                        setOpen(true);
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
          {open && (
            <WalletAuditModal
              onClose={handleCloseModal}
              open={open}
              value={value.walletId}
            ></WalletAuditModal>
          )}
        </div>
      </Fade>
    </Modal>
  );
}
