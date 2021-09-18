import React, { useState, useEffect } from 'react';
import useStyles from '../../../styles';

import {
  Typography,
  Button,
  TextField,
  Modal,
  Backdrop,
  Fade,
  Box,
  InputLabel,
  MenuItem,
  Select,
  Checkbox,
  FormControlLabel,
} from '@material-ui/core';
import SelectSymbol from 'components/AutoComplete/SelectSymbol';
export default function EquityModal({
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
      if (value.id) {
        setIsEdit(true);
      }
    }
  }, [isOpen, value]);

  const handleChange = (e, checkboxValue) => {
    const input = e.currentTarget.name ? e.currentTarget : e.target;
    setModalData({
      ...modalData,
      [input.name]:
        checkboxValue === true || checkboxValue === false
          ? checkboxValue
          : input.value,
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
            {isEdit ? 'Edit' : 'Add New'} Equity
          </Typography>
          <Box mt={5}>
            <form noValidate autoComplete="off">
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <SelectSymbol
                    disabled={isEdit}
                    freeSolo={true}
                    name="symbol"
                    label="Symbol"
                    fullWidth
                    required={true}
                    value={modalData.symbol}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    name="symbolDescription"
                    required={true}
                    fullWidth
                    label="Symbol Description"
                    value={modalData.symbolDescription}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    name="cusip"
                    required={true}
                    fullWidth
                    label="Cusip"
                    value={modalData.cusip}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    name="originalCusip"
                    required={true}
                    fullWidth
                    label="Original Cusip"
                    value={modalData.originalCusip}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    name="securityType"
                    required={true}
                    fullWidth
                    label="Security Type"
                    value={modalData.securityType}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <InputLabel shrink id="secSubType">
                    Sec SubType *
                  </InputLabel>
                  <Select
                    name="secSubType"
                    required={true}
                    labelId="secSubType"
                    fullWidth
                    value={modalData.secSubType}
                    onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em>Blank</em>
                    </MenuItem>
                    <MenuItem value="1">
                      1 - Inflation protected Prin & Int
                    </MenuItem>
                    <MenuItem value="2">2 - Exch-traded funds (ETFs)</MenuItem>
                    <MenuItem value="3">3 - index-linked</MenuItem>
                    <MenuItem value="B">B - Options on interest rates</MenuItem>
                    <MenuItem value="C">C - Convertible</MenuItem>
                    <MenuItem value="D">D - Dollar Issue</MenuItem>
                    <MenuItem value="E">E - Options on currencies</MenuItem>
                    <MenuItem value="F">F - Foreign basis</MenuItem>
                    <MenuItem value="G">
                      G - Issued in foreign currency
                    </MenuItem>
                    <MenuItem value="H">H - Options on stock indices</MenuItem>
                    <MenuItem value="J">
                      J - Options on commodity contracts
                    </MenuItem>
                    <MenuItem value="K">K - Exchangeable</MenuItem>
                    <MenuItem value="L">L - Extendible</MenuItem>
                    <MenuItem value="M">M - Variable</MenuItem>
                    <MenuItem value="N">
                      N - Adjustable (stepped or reset)
                    </MenuItem>
                    <MenuItem value="P">P - Floating rate</MenuItem>
                    <MenuItem value="Q">Q - Zero Coupon</MenuItem>
                    <MenuItem value="R">R - Registered</MenuItem>
                    <MenuItem value="S">S - Amortizing issue</MenuItem>
                    <MenuItem value="T">
                      T - Money multiplier/capital appreciation
                    </MenuItem>
                    <MenuItem value="V">V - Money Market Mutual fund</MenuItem>
                    <MenuItem value="W">
                      W - When issued, or when distributed
                    </MenuItem>
                    <MenuItem value="X">
                      X - MAPs/RPs (Mkt Auction preferreds/Re-Mktd Preferreds)
                    </MenuItem>
                    <MenuItem value="Y">Y - ADR Preferreds</MenuItem>
                    <MenuItem value="Z">Z - Discount issue</MenuItem>
                  </Select>
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <InputLabel shrink id="assetType">
                    Asset Type*
                  </InputLabel>
                  <Select
                    name="assetType"
                    required={true}
                    labelId="assetType"
                    fullWidth
                    value={modalData.assetType}
                    onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em>Blank</em>
                    </MenuItem>
                    <MenuItem value="E">E - Equity</MenuItem>
                    <MenuItem value="O">O - Option</MenuItem>
                  </Select>
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    name="leveragedFactor"
                    required={true}
                    fullWidth
                    label="Leveraged Factor"
                    type="number"
                    value={modalData.leveragedFactor}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <InputLabel shrink id="isWhenIssued">
                    When Issued
                  </InputLabel>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="isWhenIssued"
                        checked={modalData.isWhenIssued}
                        onChange={handleChange}
                      />
                    }
                    label=""
                  />
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <InputLabel shrink id="isMarginable">
                    Marginable
                  </InputLabel>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="isMarginable"
                        checked={modalData.isMarginable}
                        onChange={handleChange}
                      />
                    }
                    label=""
                  />
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <InputLabel shrink id="status">
                    Status *
                  </InputLabel>
                  <Select
                    name="status"
                    labelId="status"
                    required={true}
                    fullWidth
                    value={modalData.status}
                    onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em>Blank</em>
                    </MenuItem>
                    <MenuItem value="active">Active</MenuItem>
                    <MenuItem value="inactive">Inactive</MenuItem>
                  </Select>
                </div>
                <div
                  className={classes.grdCell1}
                  style={{ marginRight: 30 }}
                ></div>
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
