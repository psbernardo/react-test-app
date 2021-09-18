import React, { useState, useEffect } from 'react';
import useStyles from '../../../styles';
import {
  notifySuccess,
  notifyError,
} from 'components/Notification/Notification';
import DcRequestAuditModal from './DcRequestAuditModal';
import {
  Typography,
  Button,
  TextField,
  Modal,
  Backdrop,
  Fade,
  Box,
  IconButton,
  InputAdornment,
} from '@material-ui/core';
import { AddCircle as AddCircleIcon } from '@material-ui/icons';
import { createDc, updateDc } from '../../../services/DcRequestService';
import SelectCorrespondent from '../../../components/AutoComplete/SelectCorrespondent';
import SelectAccountNo from '../../../components/AutoComplete/SelectAccountNo';
import SelectWallet from '../../../components/AutoComplete/SelectWallet';
import SelectSystemCode from 'components/Dropdown/SelectSystemCode';
import SelectStatus from '../../../components/Dropdown/SelectStatus';
import { formatCurrencyInput } from 'lib/fmt/input';

const getPrivateDescriptionValue = (internalValueParameter) => {
  if (!internalValueParameter) {
    return '';
  }

  return "Add'l Info for Beneficiary: " + internalValueParameter;
};

export default function DcRequestModal({
  onClose: handleClose,
  open: isOpen,
  value,
}) {
  const classes = useStyles();
  const [modalData, setModalData] = useState({});
  const [isEdit, setIsEdit] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    if (isOpen) {
      setModalData({
        ...value,
        privateDescription: getPrivateDescriptionValue(value.internalId),
      });
      if (value.dcRequestId) {
        setIsEdit(true);
      }
    }
  }, [isOpen, value]);

  const handleChange = (e) => {
    const input = e.target.name ? e.target : e.currentTarget;

    let data = {
      ...modalData,
      [input.name]: input.value,
    };

    if (input.name === 'internalId') {
      data.privateDescription = getPrivateDescriptionValue(input.value);
    }

    setModalData(data);
  };

  const minimumMultiLine = 3;

  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleOpenAddWallet = () => {
    const copyModalData = {
      ...modalData,
      isAddWallet: true,
    };

    handleClose(copyModalData, isEdit);
  };

  const handleSave = async () => {
    setIsLoading(true);

    if (!modalData) {
      setIsLoading(false);
      handleClose();
      return;
    }

    let valid = true;

    if (!modalData.correspondent) {
      notifyError('Correspondent is required.');
      valid = false;
    }
    if (!modalData.accountNo) {
      notifyError('Account No is required.');
      valid = false;
    }
    if (!modalData.transferType) {
      notifyError('Transfer Type is required.');
      valid = false;
    }
    if (!modalData.status) {
      notifyError('Status is required.');
      valid = false;
    }
    if (!modalData.amt) {
      notifyError('Amount is required.');
      valid = false;
    }
    if (!modalData.walletId) {
      notifyError('Wallet is required.');
      valid = false;
    }
    if (!valid) {
      setIsLoading(false);
      return;
    }

    try {
      if (isEdit) {
        // EDIT
        const resp = await updateDc(modalData);
        setIsLoading(false);
        handleClose(resp, isEdit);
      } else {
        // ADD
        const resp = await createDc(modalData);
        setIsLoading(false);
        handleClose(resp, isEdit);
      }
    } catch (error) {
      if (error.code === 9) {
        if (isEdit) {
          notifySuccess('DcRequest has been updated.');
        } else {
          notifySuccess('New DcRequest has been added.');
        }
      }
      notifyError(error.message);
      setIsLoading(false);
    }
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
            {isEdit ? 'Edit ' : 'Add New '}
            Digital Bank Request
          </Typography>
          <Box mt={5}>
            <form noValidate autoComplete="off">
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <SelectCorrespondent
                    freeSolo={true}
                    required={false}
                    disabled={isEdit}
                    name="correspondent"
                    label="Correspondent"
                    value={modalData.correspondent}
                    onChange={handleChange}
                  ></SelectCorrespondent>
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <SelectAccountNo
                    freeSolo={true}
                    required={false}
                    disabled={isEdit}
                    name="accountNo"
                    label="Account No"
                    value={modalData.accountNo}
                    correspondent={modalData.correspondent}
                    onChange={handleChange}
                  ></SelectAccountNo>
                </div>
                <div className={classes.grdCell1}>
                  <SelectSystemCode
                    required={true}
                    disabled={isEdit}
                    name="transferType"
                    label="Transfer Type"
                    type="Transfer Type"
                    value={modalData.transferType}
                    onChange={handleChange}
                  ></SelectSystemCode>
                </div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <SelectWallet
                    required={false}
                    disabled={isEdit}
                    name="walletId"
                    label="Wallet"
                    value={modalData.walletId}
                    onChange={handleChange}
                  ></SelectWallet>
                </div>

                {!isEdit && (
                  <div className={classes.grdCell1}>
                    <IconButton
                      aria-label="add"
                      onClick={() => {
                        handleOpenAddWallet();
                      }}
                    >
                      <AddCircleIcon color="primary" />
                    </IconButton>
                  </div>
                )}
              </div>
              {modalData.transferType === 'Transfer Send' && (
                <div className={classes.grdRow}>
                  <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                    <SelectWallet
                      required={false}
                      disabled={isEdit}
                      name="contraWalletId"
                      label="Contra Wallet"
                      value={modalData.contraWalletId}
                      onChange={handleChange}
                    ></SelectWallet>
                  </div>
                  <div className={classes.grdCell1}></div>
                </div>
              )}
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    fullWidth
                    required={true}
                    disabled={isEdit}
                    name="amt"
                    label="Amount"
                    value={modalData.amt}
                    onChange={handleChange}
                    onInput={(e) => {
                      e.target.value = e.target.value.toString().slice(0, 25);
                    }}
                    InputProps={{
                      inputComponent: formatCurrencyInput,
                      startAdornment: (
                        <InputAdornment position="start">{'$'}</InputAdornment>
                      ),
                    }}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
                <div className={classes.grdCell1}>
                  <SelectStatus
                    value={modalData.status}
                    onChange={handleChange}
                    disabled={!isEdit}
                  ></SelectStatus>
                </div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    fullWidth
                    disabled={true}
                    name="referenceId"
                    label="Reference ID"
                    value={modalData.referenceId}
                    onChange={handleChange}
                    inputProps={{ maxLength: 50 }}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
                <div className={classes.grdCell1}>
                  <TextField
                    fullWidth
                    disabled={true}
                    name="confirmationId"
                    label="Confirmation ID"
                    value={modalData.confirmationId}
                    onChange={handleChange}
                    inputProps={{ maxLength: 50 }}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    fullWidth
                    disabled={modalData.status === 'Sent'}
                    name="internalId"
                    label="Internal ID"
                    value={modalData.internalId}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                    inputProps={{ maxLength: 20 }}
                  />
                </div>
                <div className={classes.grdCell1}>
                  <TextField
                    fullWidth
                    disabled
                    name="privateDescription"
                    label="Private Description"
                    value={modalData.privateDescription}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                    inputProps={{ maxLength: 40 }}
                  />
                </div>
              </div>
              {modalData.transferType === 'Transfer Send' && (
                <div className={classes.grdRow}>
                  <div className={classes.grdCell1}>
                    <TextField
                      fullWidth
                      disabled={modalData.status === 'Sent'}
                      name="publicDescription"
                      label="Public Description"
                      value={modalData.publicDescription}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                      inputProps={{ maxLength: 58 }}
                    />
                  </div>
                </div>
              )}
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
                    disabled={isLoading}
                    onClick={handleSave}
                  >
                    {isLoading ? 'Saving...' : 'Save'}{' '}
                  </Button>
                </div>
              </div>
            </form>
          </Box>
          {open && (
            <DcRequestAuditModal
              onClose={handleCloseModal}
              open={open}
              value={value.dcRequestId}
            ></DcRequestAuditModal>
          )}{' '}
        </div>
      </Fade>
    </Modal>
  );
}
