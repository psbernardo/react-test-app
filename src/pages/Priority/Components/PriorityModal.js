import React, { useState, useEffect } from 'react';
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
import { getPriorityNo } from '../../../services/PriorityService';
import { dateProtoObjectToString } from '../../../services/ConvertService';
import SelectSymbol from 'components/AutoComplete/SelectSymbol';
import SelectPriorityType from 'components/Dropdown/SelectPriorityType';
import SelectSystemCode from 'components/Dropdown/SelectSystemCode';

export default function PriorityModal({
  onClose: handleClose,
  open: isOpen,
  value,
}) {
  const classes = useStyles();
  const [modalData, setModalData] = useState({});
  const [isEdit, setIsEdit] = React.useState(false);

  useEffect(() => {
    if (isOpen) {
      let modalValue = { ...value };

      modalValue.fromDate = value.segPriorityId
        ? dateProtoObjectToString(value.fromDate)
        : value.fromDate;
      modalValue.toDate = value.segPriorityId
        ? dateProtoObjectToString(value.toDate)
        : value.toDate;

      setModalData(modalValue);

      if (value.segPriorityId) {
        setIsEdit(true);
      }
    }
  }, [isOpen, value]);

  const handleChange = async (e) => {
    const input = e.currentTarget.name ? e.currentTarget : e.target;

    if (input.name === 'priorityType') {
      let pn = await getPriorityNo(input.value);
      modalData.priorityNo = pn !== 0 ? pn : 1;
    }

    setModalData({
      ...modalData,
      [input.name]: input.value,
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
            {isEdit ? 'Edit' : 'Add New'} Priority
          </Typography>
          <Box mt={5}>
            <form noValidate autoComplete="off">
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <SelectSymbol
                    freeSolo={true}
                    required={true}
                    name="symbol"
                    label="Symbol"
                    value={modalData.symbol}
                    onChange={handleChange}
                  />
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    fullWidth
                    required={true}
                    name="fromDate"
                    label="From Date"
                    type="date"
                    value={modalData.fromDate}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
                <div className={classes.grdCell1}>
                  <TextField
                    fullWidth
                    required={true}
                    name="toDate"
                    label="To Date"
                    type="date"
                    value={modalData.toDate}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <SelectPriorityType
                    required={true}
                    name="priorityType"
                    label="Priority Type"
                    value={modalData.priorityType}
                    onChange={handleChange}
                  ></SelectPriorityType>
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    fullWidth
                    required={true}
                    name="priorityNo"
                    label="Priority No"
                    type="number"
                    value={modalData.priorityNo}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
                <div className={classes.grdCell1}>
                  <SelectSystemCode
                    required={true}
                    disabled={!isEdit}
                    name="status"
                    label="Status"
                    type="Status"
                    subType="AI"
                    value={modalData.status}
                    onChange={handleChange}
                  ></SelectSystemCode>
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
