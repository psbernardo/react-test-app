import React, { useState } from 'react';
import useStyles from '../../../styles';
import ACHWireAuditModal from './ACHWireAuditModal';
import ACHWireBankDetailsModal from './ACHWireBankDetailsModal';
import {
  Typography,
  Button,
  Modal,
  Backdrop,
  Fade,
  Box,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  IconButton,
  InputAdornment,
} from '@material-ui/core';
import {
  Visibility as ViewIcon,
  AddCircle as AddCircleIcon,
} from '@material-ui/icons';
import { readMaximumWithdrawable } from 'services/ACHWireService';
import { readAccount } from '../../../services/BankAccountService';
import { listBankAccount } from '../../../services/CommonService';
import SelectCorrespondent from '../../../components/AutoComplete/SelectCorrespondent';
import SelectAccountNo from '../../../components/AutoComplete/SelectAccountNo';
import SelectSystemCode from '../../../components/Dropdown/SelectSystemCode';
import SelectStatus from '../../../components/Dropdown/SelectStatus';
import { formatCurrency } from 'lib/fmt/index';
import { formatCurrencyInput } from 'lib/fmt/input';
import MaximumWithdrawableModal from './MaximumWithdrawableModal';

function SelectBankAccount({
  correspondent,
  accountNo,
  triggerValue,
  ...rest
}) {
  const [options, setOptions] = React.useState([]);

  const getBankAccounts = async () => {
    if (!correspondent || !accountNo) return [];

    const { bankAccountsList } = await listBankAccount(
      correspondent,
      accountNo
    );
    console.log(triggerValue);
    setOptions(bankAccountsList);
  };

  React.useEffect(
    () => {
      getBankAccounts();
    },
    // eslint-disable-next-line
    [correspondent, accountNo, triggerValue]
  );

  return (
    <>
      <InputLabel required={{ ...rest }.required} shrink>
        {{ ...rest }.label}
      </InputLabel>
      <Select {...rest} displayEmpty fullWidth>
        {options.length ? (
          options.map((item) => (
            <MenuItem key={item.bankId} value={item.bankId}>
              {item.bankName + ': Bank Account # ' + item.bankAccountNo}
            </MenuItem>
          ))
        ) : (
          <MenuItem key="invalid" value="No Bank Available">
            No Bank Available
          </MenuItem>
        )}
      </Select>
    </>
  );
}

export default function ACHWireDetailsModal({
  onClose: handleClose,
  open: isOpen,
  value,
}) {
  const classes = useStyles();
  const [modalData, setModalData] = useState({});
  const [isEdit, setIsEdit] = React.useState(false);
  const [, setIsInternational] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [openBankDetails, setOpenBankDetails] = React.useState(false);
  const [openBalanceDetails, setOpenBalanceDetails] = React.useState(false);
  const [isBankIdSelected, setIsBankIdSelected] = React.useState(false);
  const [rowData, setRowData] = React.useState({});
  const [maximumWithdrawable, setMaximumWithdrawable] = React.useState({
    totalAmount: 0,
    withdrawableAmount: 0,
    charges: 0,
    pendingCallLog: 0,
  });

  React.useEffect(() => {
    if (isOpen) {
      if (value.requestId) {
        setIsEdit(true);
        if (value.transferType === 'Withdrawal') {
          getMaximumWithdrawable(value.correspondent, value.accountNo);
        }
      }

      if (value.isInternational) {
        setIsInternational(true);
      }

      if (value.bankId) {
        getBankAccount(value.bankId).then(
          (result) => (setRowData(result), setIsBankIdSelected(true))
        );
      }

      // delay to allow it to be rendered
      setTimeout(function() {
        const maxWithdrawHelper = document.getElementsByClassName(
          'MuiFormHelperText-root'
        )[0];
        // set cursor to pointer
        maxWithdrawHelper.style.cursor = 'pointer';
        // make it clickable
        maxWithdrawHelper.addEventListener('click', function() {
          setOpenBalanceDetails(true);
        });
        toggleMaxWithdrawHelperVisibility(value.transferType);
      }, 100);

      setModalData({ ...value });
    }
  }, [isOpen, value]);

  const toggleMaxWithdrawHelperVisibility = (transferType) => {
    const maxWithdrawHelper = document.getElementsByClassName(
      'MuiFormHelperText-root'
    )[0];
    if (transferType === 'Withdrawal') {
      maxWithdrawHelper.style.display = 'block';
    } else {
      maxWithdrawHelper.style.display = 'none';
    }
  };

  const getBankAccount = async (bankId) => {
    const { bankAccount } = await readAccount(bankId);

    if (bankAccount.bankIdentifierCode !== '') {
      setIsInternational(true);
      bankAccount.isInternational = true;
      return bankAccount;
    } else {
      setIsInternational(false);
      bankAccount.isInternational = false;
      return bankAccount;
    }
  };

  const getMaximumWithdrawable = async (correspondent, accountNo) => {
    const resp = await readMaximumWithdrawable(correspondent, accountNo);
    setMaximumWithdrawable({
      totalAmount: resp.totalAmount,
      withdrawableAmount: resp.withdrawableAmount,
      charges: resp.charges,
      pendingCallLog: resp.pendingCallLog,
    });
  };

  const handleOpenAddBank = () => {
    const copyModalData = {
      ...modalData,
      isAddBank: true,
    };

    handleClose(copyModalData, isEdit);
  };

  const handleCloseModal = async () => {
    setOpen(false);
    setOpenBankDetails(false);
    setOpenBalanceDetails(false);
  };

  const handleChange = (e, checkboxValue) => {
    const input = e.target.name ? e.target : e.currentTarget;
    const copyModalData = {
      ...modalData,
      [input.name]:
        checkboxValue === true || checkboxValue === false
          ? checkboxValue
          : input.value,
    };

    if (['transferType'].includes(input.name)) {
      toggleMaxWithdrawHelperVisibility(copyModalData.transferType);
    }

    // Remove Bank
    if (['correspondent', 'accountNo'].includes(input.name)) {
      copyModalData.bankId = '';
      setIsBankIdSelected(false);
      if (copyModalData.correspondent && copyModalData.accountNo) {
        getMaximumWithdrawable(
          copyModalData.correspondent,
          copyModalData.accountNo
        );
      }
    }

    // Get Bank Details
    if (input.name === 'bankId' && input.value !== 'No Bank Available') {
      getBankAccount(input.value).then(
        (result) => (
          (copyModalData.isInternational = result.isInternational),
          (copyModalData.bank = result.bankName),
          console.log(result),
          setRowData(result)
        )
      );
      setIsBankIdSelected(true);
    } else if (input.name === 'bankId' && input.value === 'No Bank Available') {
      setIsBankIdSelected(false);
    } else if (input.name === 'bankId' && input.value === '') {
      setIsBankIdSelected(false);
    }
    setModalData(copyModalData);
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
            {isEdit ? 'Edit' : 'Add New'} ACH\Wire
          </Typography>
          <Box mt={5}>
            <form noValidate autoComplete="off">
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <SelectCorrespondent
                    required={true}
                    disabled={isEdit}
                    name="correspondent"
                    label="Correspondent"
                    value={modalData.correspondent}
                    onChange={handleChange}
                  ></SelectCorrespondent>
                </div>
                <div className={classes.grdCell1}>
                  <SelectAccountNo
                    required={true}
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
                  <SelectBankAccount
                    required={true}
                    disabled={isEdit}
                    name="bankId"
                    label="Bank"
                    correspondent={modalData.correspondent}
                    accountNo={modalData.accountNo}
                    triggerValue={modalData.triggerValue}
                    value={modalData.bankId}
                    onChange={handleChange}
                  />
                </div>
                <div className={classes.grdCell1}>
                  {isBankIdSelected && (
                    <IconButton
                      aria-label="view"
                      onClick={() => {
                        setOpenBankDetails(true);
                      }}
                    >
                      <ViewIcon color="primary" />
                    </IconButton>
                  )}
                  {!isEdit && (
                    <IconButton
                      aria-label="add"
                      onClick={() => {
                        handleOpenAddBank();
                      }}
                    >
                      <AddCircleIcon color="primary" />
                    </IconButton>
                  )}
                </div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    fullWidth
                    name="externalId"
                    label="External ID"
                    value={modalData.externalId}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
                <div className={classes.grdCell1}>
                  <TextField
                    fullWidth
                    name="fedNo"
                    label="Fed No"
                    value={modalData.fedNo}
                    onChange={handleChange}
                    inputProps={{ maxLength: 10 }}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
              </div>
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
                      inputProps: {
                        min: 1,
                        max: maximumWithdrawable.withdrawableAmount,
                      },
                      inputComponent: formatCurrencyInput,
                      startAdornment: (
                        <InputAdornment position="start">{'$'}</InputAdornment>
                      ),
                    }}
                    InputLabelProps={{ shrink: true }}
                    helperText={
                      'Maximum Withdrawable: ' +
                      formatCurrency(maximumWithdrawable.withdrawableAmount)
                    }
                  />
                </div>
                <div className={classes.grdCell1}>
                  <TextField
                    fullWidth
                    required={true}
                    disabled={isEdit}
                    name="fee"
                    label="Fee"
                    type="number"
                    value={modalData.fee}
                    onChange={handleChange}
                    onInput={(e) => {
                      e.target.value = e.target.value.toString().slice(0, 25);
                    }}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <SelectSystemCode
                    required={true}
                    disabled={isEdit}
                    name="requestType"
                    label="Request Type"
                    type="Type"
                    subType="Request Type"
                    value={modalData.requestType}
                    onChange={handleChange}
                  ></SelectSystemCode>
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <SelectSystemCode
                    required={true}
                    disabled={isEdit}
                    name="transferType"
                    label="Transfer Type"
                    type="Type"
                    subType="Transfer Type"
                    value={modalData.transferType}
                    onChange={handleChange}
                  ></SelectSystemCode>
                </div>

              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1}>
                  <SelectStatus
                    value={modalData.status}
                    onChange={handleChange}
                    disabled={!isEdit}
                  ></SelectStatus>
                </div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1}>
                  <TextField
                    fullWidth
                    name="internalNote"
                    label="Internal Note"
                    value={modalData.internalNote}
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
                      const copyModalData = {
                        ...modalData,
                        maximumWithdrawable: maximumWithdrawable,
                      };
                      handleClose(copyModalData, isEdit);
                    }}
                  >
                    Save
                  </Button>
                </div>
              </div>
            </form>
          </Box>
          {open && (
            <ACHWireAuditModal
              onClose={handleCloseModal}
              open={open}
              value={value.requestId}
            ></ACHWireAuditModal>
          )}
          {openBankDetails && (
            <ACHWireBankDetailsModal
              onClose={handleCloseModal}
              open={openBankDetails}
              value={rowData}
            ></ACHWireBankDetailsModal>
          )}
          {openBalanceDetails && (
            <MaximumWithdrawableModal
              onClose={handleCloseModal}
              open={openBalanceDetails}
              value={maximumWithdrawable}
            ></MaximumWithdrawableModal>
          )}
        </div>
      </Fade>
    </Modal>
  );
}
