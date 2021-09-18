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
  TextField,
  MenuItem,
  InputLabel,
  Select,
} from '@material-ui/core';

export default function SllModal({
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
      if (value.sllUuid) {
        setIsEdit(true);
      }
    }
  }, [isOpen, value]);

  const handleChange = (e) => {
    const input = e.currentTarget.name ? e.currentTarget : e.target;

    setModalData({
      ...modalData,
      [input.name]: input.value,
    });
  };

  const Statuses = [
    {
      value: 0,
      desc: '',
    },
    {
      value: 1,
      desc: 'Easy to borrow',
    },
    {
      value: 2,
      desc: 'Locate required',
    },
    {
      value: 3,
      desc: 'Pre borrow',
    },
    {
      value: 4,
      desc: 'Short Sale Prohibited',
    },
    {
      name: 'a-selectAll',
      label: 'Select All',
      options: {
        display: true,
        setCellHeaderProps: () => ({
          style: {
            width: '0px',
            display: 'table-cell',
            padding: 0,
            pointerEvents: 'none',
            fontSize: 0,
          },
        }),
      },
    },
  ];

  useEffect(
    () => {
      if (modalData.statusId) {
        let status = Statuses[modalData.statusId];
        setModalData({
          ...modalData,
          statusDescription: status.desc,
        });
      }
    },
    // eslint-disable-next-line
    [modalData.statusId]
  );

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
            {isEdit ? 'Edit' : 'Add New'} SLL
          </Typography>
          <Box mt={5}>
            <form noValidate autoComplete="off">
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    name="symbol"
                    required
                    label="Symbol"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    value={modalData.symbol}
                    onChange={handleChange}
                  />
                </div>
                <div className={classes.grdRow}>
                  <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                    <TextField
                      name="market"
                      label="Market"
                      fullWidth
                      InputLabelProps={{ shrink: true }}
                      value={modalData.market}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    required
                    name="symbolDescription"
                    label="Symbol Description"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    value={modalData.symbolDescription}
                    onChange={handleChange}
                  />
                </div>
                <div className={classes.grdCell1}>
                  <InputLabel shrink>Status *</InputLabel>
                  <Select
                    name="statusId"
                    fullWidth
                    value={modalData.statusId}
                    onChange={handleChange}
                  >
                    <MenuItem value="0">
                      <em>Blank</em>
                    </MenuItem>
                    <MenuItem value="1">Easy to borrow</MenuItem>
                    <MenuItem value="2">Locate required</MenuItem>
                    <MenuItem value="3">Pre borrow</MenuItem>
                    <MenuItem value="4">Short Sale Prohibited</MenuItem>
                  </Select>
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
