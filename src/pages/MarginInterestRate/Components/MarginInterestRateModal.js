/*ReactJS*/
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
import { dateProtoObjectToString } from '../../../services/ConvertService';
import SelectAccountName from '../../../components/AutoComplete/SelectAccountName';
import SelectSystemCode from '../../../components/Dropdown/SelectSystemCode';
import SelectCorrespondent from '../../../components/AutoComplete/SelectCorrespondent';

export default function MarginInterestRateModal({
  onClose: handleClose,
  open: isOpen,
  value,
}) {
  const classes = useStyles();
  const [modalData, setModalData] = useState({});
  const [isEdit, setIsEdit] = React.useState(false);

  React.useEffect(
    () => {
      if (isOpen) {
        let modalValue = { ...value };
        if (value.marginRateId) {
          modalValue.fromDate = dateProtoObjectToString(value.fromDate);
          modalValue.toDate = dateProtoObjectToString(value.toDate);
          setIsEdit(true);
        }
        setModalData(modalValue);
      }
    },
    // eslint-disable-next-line
    [open]
  );

  const handleChange = (e) => {
    const input = e.currentTarget.name ? e.currentTarget : e.target;

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
      onClose={handleClose}
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
            {isEdit ? 'Edit' : 'Add New'} Margin Interest Rate
          </Typography>
          <Box mt={5}>
            <form noValidate autoComplete="off">
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <SelectCorrespondent
                    name="correspondent"
                    value={modalData.correspondent}
                    onChange={handleChange}
                  ></SelectCorrespondent>
                </div>
                <div className={classes.grdCell1}>
                  <TextField
                    fullWidth
                    name="branch"
                    label="Branch"
                    value={modalData.branch}
                    onChange={handleChange}
                    inputProps={{ maxLength: 50 }}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
              </div>
              <div className={classes.grdRow}>
                {/* <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <SelectAccountNo
                    name="accountNo"
                    label="Account No"
                    value={modalData.accountNo}
                    correspondent={modalData.correspondent}
                    onChange={handleChange}
                  />
                </div> */}
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  {/* <TextField
                    fullWidth
                    name="masterAccountNo"
                    label="Master Account No"
                    value={modalData.masterAccountNo}
                    onChange={handleChange}
                    inputProps={{ maxLength: 50 }}
                    InputLabelProps={{ shrink: true }}
                  /> */}
                  <SelectAccountName
                    name="masterAccountNo"
                    label="Master Account Name"
                    value={modalData.masterAccountNo}
                    onChange={handleChange}
                    type="client" //client or gl
                  ></SelectAccountName>
                </div>
                <div className={classes.grdCell1}>
                  <TextField
                    fullWidth
                    name="rep"
                    label="Rep/Advisor"
                    value={modalData.rep}
                    onChange={handleChange}
                    inputProps={{ maxLength: 150 }}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
              </div>
              <div className={classes.grdRow}>
                {/* <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    fullWidth
                    name="rep"
                    label="Rep/Advisor"
                    value={modalData.rep}
                    onChange={handleChange}
                    inputProps={{ maxLength: 150 }}
                    InputLabelProps={{ shrink: true }}
                  />
                </div> */}
                <div
                  className={classes.grdCell1}
                  style={{ marginRight: 30 }}
                ></div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    fullWidth
                    required
                    name="fromDate"
                    label="From Date"
                    type="date"
                    value={modalData.fromDate}
                    onChange={handleChange}
                    className={classes.textField}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
                <div className={classes.grdCell1}>
                  <TextField
                    fullWidth
                    required
                    name="toDate"
                    label="To Date"
                    type="date"
                    title="Default: +50 Years of FromDate"
                    disabled={false}
                    value={modalData.toDate}
                    onChange={handleChange}
                    className={classes.textField}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    fullWidth
                    required
                    name="creditRate"
                    label="Credit Rate"
                    type="number"
                    value={modalData.creditRate}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
                <div className={classes.grdCell1}>
                  <TextField
                    fullWidth
                    required
                    name="debitRate"
                    label="Debit Rate"
                    type="number"
                    value={modalData.debitRate}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    fullWidth
                    name="note"
                    label="Note"
                    value={modalData.note}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
                <div className={classes.grdCell1}>
                  <div className={classes.grdCell1}>
                    <SelectSystemCode
                      name="status"
                      label="Status"
                      type="Status"
                      value={modalData.status}
                      subType="Client Setup"
                      onChange={handleChange}
                    ></SelectSystemCode>
                  </div>
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
