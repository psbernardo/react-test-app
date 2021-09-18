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
  Checkbox,
  FormControlLabel,
  TextField,
} from '@material-ui/core';

import SelectExchangeCode from '../../../components/AutoComplete/SelectExchangeCode';
import { SelectSicCode } from '../../../components/AutoComplete/SelectSystemCode';
import SelectSymbol from '../../../components/AutoComplete/SelectSymbol';
import { getSystemDate } from '../../../services/ProfileService';
import { protoDateObjectToString } from 'services/ConvertService';

export default function PriceDetailsModal({
  onClose: handleClose,
  open: isOpen,
  value,
}) {
  const classes = useStyles();
  const [modalData, setModalData] = useState({
    systemDate: '',
    symbol: '',
    cusip: '',
    exchangeCode: '',
    sic: '',
    issueStatusCode: '',
    priceDate: '',
    prevPriceDate: '',
    currentPrice: '',
    prevPrice: '',
    originalCusip: '',
    volumn: '',
    tradeTypeCode: '0',
    isHalted: false,
    source: '',
    volume: 0,
  });
  const [isEdit, setIsEdit] = React.useState(false);

  useEffect(() => {
    if (isOpen) {
      let modalValue = { ...value };

      // Set date from data
      modalValue.systemDate = protoDateObjectToString(
        value.systemDate,
        'yyyy-MM-DD'
      );
      modalValue.priceDate = protoDateObjectToString(
        value.priceDate,
        'yyyy-MM-DD'
      );
      modalValue.prevPriceDate = protoDateObjectToString(
        value.prevPriceDate,
        'yyyy-MM-DD'
      );
      modalValue.fileDate = protoDateObjectToString(
        value.fileDate,
        'yyyy-MM-DD'
      );

      if (modalValue.prevPriceDate === '1900-01-01') {
        modalValue.prevPriceDate = '';
      }

      setModalData({ ...modalValue });

      if (value.id) {
        setIsEdit(true);
      } else {
        init();
      }
    }

    // Get default date from adm.profile
    async function init() {
      const systemDate = await getSystemDate();
      setModalData({
        ...modalData,
        systemDate: systemDate,
        priceDate: systemDate,
      });
    }
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
    } else if (input.name === 'symbol') {
      copyModalData.originalCusip = input.cusip;
      copyModalData.cusip = input.cusip;
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
            {isEdit ? 'Edit' : 'Add New'} Price
          </Typography>
          <Box mt={5}>
            <form noValidate autoComplete="off">
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <SelectSymbol
                    freeSolo={false}
                    required={true}
                    disabled={isEdit}
                    name="symbol"
                    label="Symbol"
                    assetType="E"
                    value={modalData.symbol}
                    onChange={handleChange}
                  />
                </div>
                <div className={classes.grdCell1}>
                  <TextField
                    fullWidth
                    required={true}
                    disabled={isEdit}
                    name="cusip"
                    label="Cusip"
                    value={modalData.cusip}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <SelectExchangeCode
                    disabled={isEdit}
                    name="exchangeCode"
                    label="Exchange Code"
                    value={modalData.exchangeCode}
                    onChange={handleChange}
                  />
                </div>
                <div className={classes.grdCell1}>
                  <SelectSicCode
                    disabled={isEdit}
                    name="sic"
                    label="SIC Code"
                    value={modalData.sic}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    fullWidth
                    disabled
                    name="issueStatusCode"
                    label="Issue Status Code"
                    value={modalData.issueStatusCode}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
                <div className={classes.grdCell1}>
                  <TextField
                    fullWidth
                    disabled={isEdit}
                    name="systemDate"
                    label="System Date"
                    type="date"
                    value={modalData.systemDate}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    fullWidth
                    disabled={isEdit}
                    name="priceDate"
                    label="Price Date"
                    type="date"
                    value={modalData.priceDate}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
                <div className={classes.grdCell1}>
                  <TextField
                    fullWidth
                    disabled={isEdit}
                    name="prevPriceDate"
                    label="Previous Price Date"
                    type="date"
                    value={modalData.prevPriceDate}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    fullWidth
                    required={true}
                    name="currentPrice"
                    label="Current Price"
                    type="number"
                    value={modalData.currentPrice}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
                <div className={classes.grdCell1}>
                  <TextField
                    fullWidth
                    disabled={isEdit}
                    name="prevPrice"
                    label="Previous Price"
                    type="number"
                    value={modalData.prevPrice}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    fullWidth
                    disabled={true}
                    name="originalCusip"
                    label="Original Cusip"
                    value={modalData.originalCusip}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
                <div className={classes.grdCell1}>
                  <TextField
                    fullWidth
                    disabled={isEdit}
                    name="volume"
                    label="Volume"
                    type="number"
                    value={modalData.volume}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
              </div>
              <div className={classes.grdRow}>
                <div
                  className={classes.grdCell1}
                  style={{ marginRight: 30, display: isEdit ? '' : 'none' }}
                >
                  <TextField
                    fullWidth
                    disabled={isEdit}
                    name="tradeTypeCode"
                    label="Trade Type Code"
                    value={modalData.tradeTypeCode}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
                <div className={classes.grdCell1}>
                  <InputLabel shrink>Is Halted</InputLabel>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="isHalted"
                        value={modalData.isHalted}
                        checked={modalData.isHalted}
                        onChange={handleChange}
                        color="primary"
                      />
                    }
                  />
                </div>
              </div>
              <Box display={isEdit ? '' : 'none'}>
                <div className={classes.grdRow}>
                  <div className={classes.grdCell1}>
                    <TextField
                      fullWidth
                      disabled={isEdit}
                      name="source"
                      label="Source"
                      value={modalData.source}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                  </div>
                </div>
              </Box>
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
