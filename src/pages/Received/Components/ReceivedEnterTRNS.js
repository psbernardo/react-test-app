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
  InputLabel,
  TextField,
  Select,
  MenuItem,
} from '@material-ui/core';

import SelectAccount from '../../../components/AutoComplete/SelectAccount';
import { getSystemDate } from '../../../services/ProfileService';
import SelectCorrespondent from 'components/AutoComplete/SelectCorrespondent';
import SelectAccountNo from '../../../components/AutoComplete/SelectAccountNo';
import { formatCurrency } from 'lib/fmt';

export default function UnmatchedReceivedEnterTRNS({
  onClose: handleSubmit,
  open: isOpen,
  value,
}) {
  const classes = useStyles();
  const [modalData, setModalData] = useState({});

  useEffect(() => {
    async function init() {
      let modalValue = { ...value };

      const systemDate = await getSystemDate();
      modalValue.settleDate = systemDate;

      const netAmt =
        (value.unmatchedAmt / value.unmatchedQty) * value.unmatchedQty;
      const price = value.unmatchedAmt / value.unmatchedQty;

      modalValue.price = '' + price;
      modalValue.netAmt = '' + netAmt;
      modalValue.netAmtDisplay = formatCurrency(netAmt);
      modalValue.priceDisplay = formatCurrency(price);

      let description = 'Received ' + value.unmatchedQty + ' shares ';

      if (value.radQty > value.houseQty) {
        description =
          description +
          'more from RAD at ' +
          formatCurrency(price) +
          ' per share';
      } else {
        description =
          description +
          'less from RAD at ' +
          formatCurrency(price) +
          ' per share';
      }

      modalValue.description = description;

      setModalData(modalValue);
    }
    if (isOpen) {
      init();
    }

    console.log(modalData)
    // eslint-disable-next-line
  }, [isOpen, value]);

  const handleChange = (e, checkboxValue) => {
    const input = e.currentTarget.name ? e.currentTarget : e.target;
    const copyModalData = {
      ...modalData,
      [input.name]:
        checkboxValue === true || checkboxValue === false
          ? checkboxValue
          : input.value,
    };

    if (input.name === 'cusip') {
      copyModalData.originalCusip = input.value;
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
        handleSubmit();
      }}
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
            Cash and Position Movement
          </Typography>
          <Box mt={2}>
            <form noValidate autoComplete="off">
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <InputLabel shrink>Entry Type</InputLabel>
                  <TextField
                    fullWidth
                    name="entryType"
                    value="FTR - Fail To Receive"
                    readOnly
                    onChange={handleChange}
                  />
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <SelectCorrespondent
                    name="correspondent"
                    label="Correspondent"
                    value={modalData.correspondent}
                    onChange={handleChange}
                  ></SelectCorrespondent>
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <SelectAccountNo
                    required={true}
                    name="accountNumber"
                    label="Account No"
                    value={modalData.accountNumber}
                    correspondent={modalData.correspondent}
                    onChange={handleChange}
                    type="" //client or gl
                  ></SelectAccountNo>
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <InputLabel shrink>Sub Account No</InputLabel>
                  <Select
                    fullWidth
                    name="subAccountNo"
                    required={true}
                    value={modalData.subAccountNo}
                    onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em>Blank</em>
                    </MenuItem>
                    <MenuItem value="main">000 - Main</MenuItem>
                    <MenuItem value="graybox">G - Graybox</MenuItem>
                    <MenuItem value="real_tick">R - RealTick</MenuItem>
                    <MenuItem value="sterling">S - Sterling</MenuItem>
                    <MenuItem value="speed_route">SR - SpeedRoute</MenuItem>
                    <MenuItem value="succession">SS - Succession</MenuItem>
                    <MenuItem value="velox">V - Velox</MenuItem>
                    <MenuItem value="laser">Z - Laser</MenuItem>
                  </Select>
                </div>
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
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <SelectAccountNo
                    required={true}
                    freeSolo={true}
                    name="contraAccount"
                    label="Contra Account"
                    value={modalData.contraAccount}
                    onChange={handleChange}
                    type="" //client or gl
                  ></SelectAccountNo>
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <InputLabel shrink>Contra Sub Account No.</InputLabel>
                  <TextField
                    fullWidth
                    name="contraSubAccountNo"
                    value={modalData.contraSubAccountNo}
                    onChange={handleChange}
                  />
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <InputLabel shrink>Symbol</InputLabel>
                  <TextField
                    fullWidth
                    name="symbol"
                    readOnly
                    value={modalData.symbol}
                    onChange={handleChange}
                  />
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <InputLabel shrink>Qty</InputLabel>
                  <TextField
                    required={true}
                    fullWidth
                    name="unmatchedQty"
                    InputProps={{
                      readOnly: true,
                    }}
                    value={modalData.unmatchedQty}
                    onChange={handleChange}
                  />
                </div>
                <div className={classes.grdCell1}>
                  <InputLabel shrink>Price</InputLabel>
                  <TextField
                    required={true}
                    fullWidth
                    name="price"
                    readOnly
                    value={modalData.priceDisplay}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <InputLabel shrink>Net Amount</InputLabel>
                  <TextField
                    name="netAmt"
                    InputProps={{
                      readOnly: true,
                    }}
                    fullWidth
                    value={modalData.netAmtDisplay}
                    onChange={handleChange}
                  />
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <InputLabel shrink>Description</InputLabel>
                  <TextField
                    name="description"
                    readOnly
                    fullWidth
                    value={modalData.description}
                    onChange={handleChange}
                  />
                </div>
                <div className={classes.grdCell1}>
                  <InputLabel shrink>Settle Date</InputLabel>
                  <TextField
                    fullWidth
                    name="settleDate"
                    type="date"
                    value={modalData.settleDate}
                    onChange={handleChange}
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
                      handleSubmit();
                    }}
                  >
                    Close
                  </Button>
                </div>
                <div
                  className={classes.grdCellNone}
                  style={{ marginRight: 10 }}
                >
                  <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    onClick={() => {
                      handleSubmit(modalData);
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
