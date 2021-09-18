import React, { useState, useEffect } from 'react';
import useStyles from '../../../styles';
import {
  IconButton,
  Modal,
  Backdrop,
  Fade,
  Box,
  TextField,
} from '@material-ui/core';
import { listPositionDetail } from '../../../services/PositionDtccService';
import Table, { columnType } from 'components/Table/Table';
import { Close as CloseIcon } from '@material-ui/icons';
import { dateProtoObjectToString } from '../../../services/ConvertService';

export default function PositionDtccDetailsModal({
  onClose: handleClose,
  open: isOpen,
  value,
}) {
  const classes = useStyles();
  const [rows, setRows] = useState([]);
  const [modalData, setModalData] = useState({});

  useEffect(() => {
    if (isOpen) {
      let modalValue = { ...value };
      modalValue.settleDate = dateProtoObjectToString(value.settleDate);
      setModalData(modalValue);
    }
  }, [isOpen, value]);

  const handleChange = (e) => {
    const input = e.currentTarget.name ? e.currentTarget : e.target;
    setModalData({
      ...modalData,
      [input.name]: input.value,
    });
  };

  const columns = [
    {
      name: 'accountNo',
      label: 'Account No',
    },
    {
      name: 'correspondent',
      label: 'Correspondent',
    },
    {
      name: 'office',
      label: 'Office',
    },
    {
      name: 'marginType',
      label: 'Margin Type',
    },
    {
      name: 'sdQty',
      label: 'SD QTY',
      type: columnType.quantity,
    },
    {
      name: 'sdValue',
      label: 'SD Value',
      type: columnType.quantity,
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

  const options = {
    selectableRows: false,
  };

  useEffect(
    () => {
      async function init() {
        const data = await listPositionDetail(value);
        setRows(data.positionDetailsList);
      }

      if (isOpen) {
        init();
      }
    },
    // eslint-disable-next-line
    [isOpen]
  );

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
        <div className={classes.fadeModalFull}>
          <Box mt={5}>
            <form className={classes.modalForm} noValidate autoComplete="off">
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    name="settleDate"
                    label="Settle Date"
                    type="date"
                    disabled
                    fullWidth
                    value={modalData.settleDate}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    name="symbol"
                    label="Symbol"
                    disabled
                    fullWidth
                    value={modalData.symbol}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    name="cusip"
                    label="Cusip"
                    disabled
                    fullWidth
                    value={modalData.cusip}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    name="symbolDescription"
                    label="Symbol Description"
                    disabled
                    fullWidth
                    required={true}
                    value={modalData.symbolDescription}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
                <div
                  className={classes.grdCell1}
                  style={{ marginRight: 30 }}
                ></div>
                <div
                  className={classes.grdCell1}
                  style={{ marginRight: 30 }}
                ></div>
              </div>
              <Box component="div" mt={2}>
                <Table
                  title={'Position Details'}
                  data={rows}
                  columns={columns}
                  options={options}
                />
              </Box>
              <div className={classes.modalFooter}>
                <div
                  className={classes.grdCellNone}
                  style={{ marginRight: 10 }}
                >
                  <div
                    className={classes.modalCloseIcon}
                    style={{ marginRight: 10 }}
                  >
                    <IconButton
                      aria-label="close"
                      onClick={() => {
                        handleClose();
                      }}
                    >
                      <CloseIcon style={{ color: '#f1f1f1' }} />
                    </IconButton>
                  </div>
                </div>
              </div>
            </form>
          </Box>
        </div>
      </Fade>
    </Modal>
  );
}
