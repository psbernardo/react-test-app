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
import { listProjectionDetail } from '../../../services/ProjectionService';
import Table, { columnType } from 'components/Table/Table';
import { Close as CloseIcon } from '@material-ui/icons';
import { dateProtoObjectToString } from '../../../services/ConvertService';

export default function PositionAgingDetailsModal({
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
      name: 'settleDate',
      label: 'Settle Date',
      type: columnType.date,
    },
    {
      name: 'previousClosingBalance',
      label: 'Previous Closing Balance',
      type: columnType.amount,
    },
    {
      name: 'previousCnsSettlement',
      label: 'Previous CNS Settlement',
      type: columnType.amount,
    },
    {
      name: 'openingBalance',
      label: 'Opening Balance',
      type: columnType.amount,
    },
    {
      name: 'settlingTrades',
      label: 'Settling Trades',
      type: columnType.amount,
    },
    {
      name: 'closingBalance',
      label: 'Closing Balance',
      type: columnType.amount,
    },
    {
      name: 'settlementShortPosition',
      label: 'Settlement Short Position',
      type: columnType.amount,
    },
    {
      name: 'settlement',
      label: 'Settlement',
      type: columnType.amount,
    },
    {
      name: 'projection',
      label: 'Projection',
      type: columnType.amount,
    },
    {
      name: 'settlementVsProjection',
      label: 'Settlement Vs Projection',
      type: columnType.amount,
    },
    {
      name: 'status',
      label: 'Status',
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
        const data = await listProjectionDetail(value);
        setRows(data.projectionDetailsList);
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
                    name="status"
                    label="Status"
                    disabled
                    fullWidth
                    value={modalData.status}
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
                  title={'Projection Details'}
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
