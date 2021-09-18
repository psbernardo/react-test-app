/*ReactJS*/
import React, { useState, useEffect } from 'react';
import BankAccountAuditModal from './BankAccountAuditModal';
import useStyles from '../../../styles';
import { notifyError } from '../../../components/Notification/Notification';
import {
  Typography,
  Button,
  TextField,
  Modal,
  Backdrop,
  Fade,
  Box,
  InputLabel,
  Checkbox,
  FormControlLabel,
} from '@material-ui/core';
import SelectCorrespondent from '../../../components/AutoComplete/SelectCorrespondent';
import SelectAccountNo from '../../../components/AutoComplete/SelectAccountNo';
import BankAddressSelect from '../../../components/AutoComplete/BankAddress';
import SelectBankName from '../../../components/AutoComplete/SelectBankName';
import SelectGLBankAccount from '../../../components/Dropdown/SelectGLBankAccount';
import SelectSystemCode from '../../../components/Dropdown/SelectSystemCode';
import { readPrimaryOwner } from '../../../services/CommonService';
import { readDefaultGlBank } from '../../../services/BankAccountService';
import { readCompleteAddress } from '../../../services/BankAddressService';

export default function BankAccountDetailsModal({
  onClose: handleClose,
  open: isOpen,
  value,
}) {
  const classes = useStyles();
  const [modalData, setModalData] = useState({
    bankAccountType: '',
    bankAddressId: 0,
    status: '',
    bankId: 0,
    glAccountId: 0,
    bankOwnerName: '',
    bankName: '',
    bankAccountNo: '',
    correspondent: '',
    accountNo: '',
    achRoutingNo: '',
    wireRoutingNo: '',
    plaidAccessToken: '',
    isInternational: false,
    bankIdentifierCode: '',
    approvedMethod: '',
  });
  const [isEdit, setIsEdit] = React.useState(false);
  const [isPlaid, setIsPlaid] = React.useState(false);
  const [isInternational, setIsInternational] = React.useState(false);
  const isEnabled = !value.bankId || value.status === 'Pending Approval';
  const [open, setOpen] = React.useState(false);
  const [bankOwnerNameLoaded, setBankOwnerNameLoaded] = React.useState(false);
  const [bankAddressLoaded, setBankAddressLoaded] = React.useState(false);

  const getBankOwnerName = async (param) => {
    try {
      if (!param.correspondent || !param.accountNo) {
        return '';
      }
      setBankOwnerNameLoaded(true);

      const { fullName } = await readPrimaryOwner({
        correspondent: param.correspondent,
        accountNo: param.accountNo,
      });

      return fullName;
    } catch (err) {
      notifyError(err.message);
    }

    return '';
  };

  const getCompleteAddress = async (param) => {
    try {
      if (!param.bankName && (!param.achRoutingNo || !param.wireRoutingNo)) {
        return '';
      }
      setBankAddressLoaded(true);

      if (param.achRoutingNo.length > 7 || param.wireRoutingNo.length > 7) {
        const { bankAddress } = await readCompleteAddress({
          bankRoutingNo: param.achRoutingNo
            ? param.achRoutingNo
            : param.wireRoutingNo || '',
          bankName: param.bankName,
        });

        return bankAddress;
      }
    } catch (err) {
      //notifyError(err.message);
    }

    return '';
  };

  useEffect(() => {
    if (isOpen) {
      if (value.bankId) {
        setIsEdit(true);
      }
      if (value.isInternational) {
        setIsInternational(true);
      }
      if (!value.glAccountId) {
        const init = async () => {
          const data = await readDefaultGlBank();
          setModalData({ ...value, glAccountId: data.accountId });
        };
        init();
      } else {
        setModalData({ ...value });
      }
    }
  }, [isOpen, value]);

  const handleChange = async (e, checkboxValue) => {
    const input = e.currentTarget.name ? e.currentTarget : e.target;
    const modalDataCopy = { ...modalData };

    if (['accountNo', 'correspondent'].includes(input.name)) {
      setBankOwnerNameLoaded(false);
    }

    if (!bankOwnerNameLoaded) {
      if (
        modalDataCopy.correspondent &&
        modalDataCopy.accountNo &&
        !modalDataCopy.bankOwnerName
      ) {
        modalDataCopy.bankOwnerName = await getBankOwnerName(modalDataCopy);
      }
    }

    modalDataCopy[input.name] =
      checkboxValue === true || checkboxValue === false
        ? checkboxValue
        : input.value;

    if (['bankName', 'achRoutingNo', 'wireRoutingNo'].includes(input.name)) {
      setBankAddressLoaded(false);

      if (typeof modalDataCopy.bankName === 'object') {
        modalDataCopy.bankAddressId = '';
        modalDataCopy.achRoutingNo = modalDataCopy.bankName.bankRoutingNo;
        modalDataCopy.bankName = modalDataCopy.bankName.bankName;
      }
    }

    if (!bankAddressLoaded) {
      if (
        (modalDataCopy.bankName.bankName ||
          modalDataCopy.achRoutingNo ||
          modalDataCopy.wireRoutingNo) &&
        !modalDataCopy.bankAddressId
      ) {
        modalDataCopy.bankAddressId = await getCompleteAddress(modalDataCopy);
      }
    }

    if (input.name === 'approvedMethod' && input.value === 'Micro Deposit') {
      setIsPlaid(false);
    } else if (input.name === 'approvedMethod' && input.value === 'Plaid') {
      setIsPlaid(true);
    }

    if (input.name === 'isInternational') {
      setIsInternational(checkboxValue);
    }

    setModalData(modalDataCopy);
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
        <div className={classes.fadeModalLg}>
          <Typography
            id="transition-modal-title"
            variant="h4"
            className={classes.textBold}
            gutterBottom
          >
            {isEdit ? 'Edit' : 'Add New'} Bank Account
          </Typography>
          <Box mt={5}>
            <form className={classes.modalForm} noValidate autoComplete="off">
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <SelectCorrespondent
                    required={true}
                    disabled={!isEnabled}
                    name="correspondent"
                    value={modalData.correspondent}
                    onChange={handleChange}
                  ></SelectCorrespondent>
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <SelectAccountNo
                    required={true}
                    disabled={!isEnabled}
                    name="accountNo"
                    label="Account No"
                    value={modalData.accountNo}
                    correspondent={modalData.correspondent}
                    onChange={handleChange}
                  ></SelectAccountNo>
                </div>
                <div className={classes.grdCell1}>
                  <TextField
                    fullWidth
                    required={true}
                    disabled={!isEnabled}
                    name="bankOwnerName"
                    label="Bank Owner Name"
                    value={modalData.bankOwnerName}
                    onChange={handleChange}
                    inputProps={{ maxLength: 300 }}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1}>
                  <SelectBankName
                    freeSolo={true}
                    required={true}
                    disabled={!isEnabled}
                    name="bankName"
                    label="Bank Name"
                    value={modalData.bankName}
                    onChange={handleChange}
                  ></SelectBankName>
                </div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1}>
                  <BankAddressSelect
                    required={true}
                    disabled={!isEnabled}
                    name="bankAddressId"
                    label="Bank Address"
                    value={modalData.bankAddressId}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    fullWidth
                    required={true}
                    disabled={!isEnabled}
                    name="bankAccountNo"
                    label="Bank Account No"
                    value={modalData.bankAccountNo}
                    onChange={handleChange}
                    inputProps={{ maxLength: 12 }}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    fullWidth
                    required={!modalData.wireRoutingNo}
                    disabled={!isEnabled}
                    name="achRoutingNo"
                    label="ACH Routing No"
                    value={modalData.achRoutingNo}
                    onChange={handleChange}
                    inputProps={{ maxLength: 10 }}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
                <div className={classes.grdCell1}>
                  <TextField
                    fullWidth
                    required={!modalData.achRoutingNo}
                    disabled={!isEnabled}
                    name="wireRoutingNo"
                    label="Wire Routing No"
                    value={modalData.wireRoutingNo}
                    onChange={handleChange}
                    inputProps={{ maxLength: 10 }}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <SelectSystemCode
                    required={true}
                    disabled={!isEnabled}
                    name="bankAccountType"
                    label="Bank Account Type"
                    type="Bank Account Type"
                    value={modalData.bankAccountType}
                    onChange={handleChange}
                  />
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <SelectSystemCode
                    required={true}
                    disabled={!isEnabled}
                    name="approvedMethod"
                    label="Approved Method"
                    type="Approved Method"
                    value={modalData.approvedMethod}
                    onChange={handleChange}
                  ></SelectSystemCode>
                </div>
                <div className={classes.grdCell1}>
                  <TextField
                    fullWidth
                    required={isPlaid}
                    disabled={!isEnabled}
                    name="plaidAccessToken"
                    label="Plaid Access Token"
                    value={modalData.plaidAccessToken}
                    onChange={handleChange}
                    inputProps={{ maxLength: 60 }}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
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
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <InputLabel shrink>Is International</InputLabel>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="isInternational"
                        disabled={!isEnabled}
                        checked={modalData.isInternational}
                        onChange={handleChange}
                        color="primary"
                      />
                    }
                  />
                </div>
                <div className={classes.grdCell1}>
                  <TextField
                    fullWidth
                    required={isInternational}
                    disabled={!isEnabled ? !isEnabled : !isInternational}
                    name="bankIdentifierCode"
                    label="Bank Identifier Code (BIC)"
                    value={modalData.bankIdentifierCode}
                    onChange={handleChange}
                    inputProps={{ maxLength: 30 }}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <SelectGLBankAccount
                    required={true}
                    disabled={!isEnabled}
                    name="glAccountId"
                    label="GL Account"
                    value={modalData.glAccountId}
                    onChange={handleChange}
                  ></SelectGLBankAccount>
                </div>
                <div
                  className={classes.grdCell1}
                  style={{ marginRight: 30 }}
                ></div>
                <div className={classes.grdCell1}></div>
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
            <BankAccountAuditModal
              onClose={handleCloseModal}
              open={open}
              value={value.bankId}
            ></BankAccountAuditModal>
          )}
        </div>
      </Fade>
    </Modal>
  );
}
