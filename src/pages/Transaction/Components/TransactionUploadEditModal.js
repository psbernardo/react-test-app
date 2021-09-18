/*ReactJS*/
import React, { useState, useEffect } from 'react';
import useStyles from '../../../styles';

/*Material-ui*/
import {
  Typography,
  Button,
  Modal,
  Backdrop,
  Fade,
  Box,
  TextField,
  InputLabel,
  MenuItem,
  Select,
} from '@material-ui/core';

import { checkEntryType } from '../../../services/TransactionService';

import SelectAccount from '../../../components/AutoComplete/SelectAccount';
import SelectSymbol from '../../../components/AutoComplete/SelectSymbol';
import EntryTypeSelect from '../../../components/AutoComplete/EntryType';
import SelectSubAccountNo from '../../../components/AutoComplete/SelectSubAccountNo';
import { DropDownListCapacity } from '../../../components/AutoComplete/DropDownListSystemCode';

import moment from 'moment-timezone';

export default function TransactionUploadEditModal({
  onClose: handleClose,
  open: isOpen,
  value,
}) {
  const classes = useStyles();
  const [modalData, setModalData] = useState({});

  const err = 'Missing Value';

  useEffect(() => {
    if (isOpen) {
      setModalData({ ...value });
    }
  }, [isOpen, value]);

  const handleChange = (e) => {
    const input = e.currentTarget.name ? e.currentTarget : e.target;
    setModalData({
      ...modalData,
      [input.name]: input.value,
    });
  };

  const formatDateTime = (v) => {
    return moment(new Date(v)).format('YYYY-MM-DDTh:mm');
  };

  const formatDate = (v) => {
    return moment(new Date(v)).format('yyyy-MM-DD');
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modalBackdrop}
      open={isOpen}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{ timeout: 500 }}
    >
      <Fade in={isOpen}>
        <div className={classes.fadeModalFull}>
          <Typography
            id="transition-modal-title"
            variant="h4"
            className={classes.textBold}
            gutterBottom
          >
            Edit Entries
          </Typography>
          <Box mt={5}>
            <form noValidate autoComplete="off">
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <SelectAccount
                    freeSolo={false}
                    type="correspondent"
                    name="correspondent"
                    label="Correspondent"
                    value={modalData.correspondent}
                    onChange={handleChange}
                  />
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <SelectAccount
                    freeSolo={false}
                    type="accountNo"
                    name="accountNo"
                    label="Account No"
                    value={
                      modalData.accountNo !== err ? modalData.accountNo : ''
                    }
                    showAccountName={true}
                    onChange={handleChange}
                    selectedCorrespondent={
                      modalData.correspondent ? modalData.correspondent : ''
                    }
                  />
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <SelectSubAccountNo
                    freeSolo={false}
                    name="subAccountNo"
                    id="subAccountNo"
                    label="Sub Account No"
                    value={
                      modalData.subAccountNo !== err
                        ? modalData.subAccountNo
                        : ''
                    }
                    accountNo={modalData.accountNo}
                    onChange={handleChange}
                  ></SelectSubAccountNo>
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <SelectAccount
                    freeSolo={false}
                    disabled={checkEntryType(modalData.entryType) === 'pm'}
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
                    selectedCorrespondent={''}
                  />
                </div>
                <div className={classes.grdCell1}>
                  <SelectSubAccountNo
                    freeSolo={false}
                    name="contraSubAccountNo"
                    id="contraSubAccountNo"
                    label="Contra Sub Account No"
                    value={
                      modalData.contraSubAccountNo !== err
                        ? modalData.contraSubAccountNo
                        : ''
                    }
                    accountNo={modalData.subAccountNo}
                    onChange={handleChange}
                  ></SelectSubAccountNo>
                </div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <EntryTypeSelect
                    freeSolo={false}
                    name="entryType"
                    label="Entry Type"
                    value={
                      modalData.entryType !== err ? modalData.entryType : ''
                    }
                    onChange={handleChange}
                    allowInputChange={true}
                  />
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    style={{ width: 200 }}
                    fullWidth
                    name="tradeDate"
                    label="Trade Date"
                    type="datetime-local"
                    disabled={
                      checkEntryType(modalData.entryType) === 'pm' ||
                      checkEntryType(modalData.entryType) === 'cm' ||
                      checkEntryType(modalData.entryType) === 'cpm'
                    }
                    value={
                      modalData.tradeDate !== err
                        ? formatDateTime(modalData.tradeDate)
                        : ''
                    }
                    onInput={handleChange}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    fullWidth
                    name="settleDate"
                    label="Settle Date"
                    type="date"
                    value={formatDate(modalData.settleDate)}
                    onInput={handleChange}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <SelectSymbol
                    freeSolo={true}
                    name="symbol"
                    label="Symbol"
                    disabled={checkEntryType(modalData.entryType) === 'cm'}
                    value={modalData.symbol !== err ? modalData.symbol : ''}
                    onChange={handleChange}
                  />
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <InputLabel shrink>Side</InputLabel>
                  <Select
                    fullWidth
                    name="side"
                    disabled={
                      checkEntryType(modalData.entryType) === 'pm' ||
                      checkEntryType(modalData.entryType) === 'cm' ||
                      checkEntryType(modalData.entryType) === 'cpm'
                    }
                    value={modalData.side !== err ? modalData.side : ''}
                    onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em>Blank</em>
                    </MenuItem>
                    <MenuItem value="sell">sell</MenuItem>
                    <MenuItem value="sell_short">sell_short</MenuItem>
                    <MenuItem value="buy">buy</MenuItem>
                  </Select>
                </div>
                <div className={classes.grdCell1}>
                  <TextField
                    fullWidth
                    name="qty"
                    label="Qty"
                    type="number"
                    disabled={checkEntryType(modalData.entryType) === 'cm'}
                    value={modalData.qty !== err ? modalData.qty : ''}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    fullWidth
                    name="price"
                    label="Price"
                    type="number"
                    disabled={checkEntryType(modalData.entryType) === 'cm'}
                    value={modalData.price !== err ? modalData.price : ''}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    fullWidth
                    name="commission"
                    label="Commission"
                    type="number"
                    disabled={checkEntryType(modalData.entryType) === 'cm'}
                    value={
                      modalData.commission !== err ? modalData.commission : ''
                    }
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    fullWidth
                    name="grossAmt"
                    label="Gross Amt"
                    type="number"
                    disabled={
                      checkEntryType(modalData.entryType) === 'pm' ||
                      checkEntryType(modalData.entryType) === 'cm' ||
                      checkEntryType(modalData.entryType) === 'cpm'
                    }
                    value={modalData.grossAmt}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    fullWidth
                    name="externalId"
                    label="External ID"
                    disabled={
                      checkEntryType(modalData.entryType) === 'pm' ||
                      checkEntryType(modalData.entryType) === 'cpm'
                    }
                    value={modalData.externalId}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    fullWidth
                    name="executingVenue"
                    label="Execution Venue"
                    disabled={
                      checkEntryType(modalData.entryType) === 'pm' ||
                      checkEntryType(modalData.entryType) === 'cm' ||
                      checkEntryType(modalData.entryType) === 'cpm'
                    }
                    value={modalData.executingVenue}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
                <div className={classes.grdCell1}>
                  <TextField
                    fullWidth
                    name="orderId"
                    label="Order ID"
                    disabled={
                      checkEntryType(modalData.entryType) === 'pm' ||
                      checkEntryType(modalData.entryType) === 'cm' ||
                      checkEntryType(modalData.entryType) === 'cpm'
                    }
                    value={modalData.orderId}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <DropDownListCapacity
                    style={{ width: 196 }}
                    name="capacity"
                    label="Capacity"
                    disabled={
                      checkEntryType(modalData.entryType) === 'pm' ||
                      checkEntryType(modalData.entryType) === 'cm' ||
                      checkEntryType(modalData.entryType) === 'cpm'
                    }
                    onChange={handleChange}
                    required={false}
                    value={modalData.capacity}
                  ></DropDownListCapacity>
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
