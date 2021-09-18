import React, { useState, useEffect } from 'react';
import useStyles from '../../../styles';
import { IconButton, Modal, Backdrop, Fade, Box } from '@material-ui/core';
import Table, { columnType } from 'components/Table/Table';
import { listSegDetail } from '../../../services/SegregationService';
import { Close as CloseIcon } from '@material-ui/icons';

export default function SymbolDetailsModal({
  onClose: handleClose,
  open: isOpen,
  value,
}) {
  const classes = useStyles();

  const [rows, setRows] = useState([]);

  const columns = [
    {
      name: 'correspondent',
      label: 'Correspondent',
    },
    {
      name: 'masterAccountNo',
      label: 'Master Account No',
    },
    {
      name: 'broker',
      label: 'Broker',
    },
    {
      name: 'qty',
      label: 'Qty',
      type: columnType.quantity,
    },
    {
      name: 'closingPrice',
      label: 'Closing Price',
      type: columnType.amount,
    },
    {
      name: 'marketValue',
      label: 'Market Value',
      type: columnType.amount,
    },
    {
      name: 'segQty',
      label: 'Seg Qty',
      type: columnType.quantity,
    },
    {
      name: 'segAmt',
      label: 'Seg Amt',
      type: columnType.amount,
    },
    {
      name: 'excessMarginQty',
      label: 'Excess Margin Qty',
      type: columnType.quantity,
    },
    {
      name: 'excessMarginAmt',
      label: 'Excess Margin Amt',
      type: columnType.amount,
    },
    {
      name: 'a-selectAll',
      label: 'Select All',
      options: {
        display: true,
        print: false,
        download: false,
        filter: false,
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
    selectableRows: 'none',
  };

  useEffect(
    () => {
      async function init() {
        const data = await listSegDetail(value);
        setRows(data.segDetailsList);
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
        <div className={classes.tableModalFull}>
          <Box component="div" mt={2}>
            <Table
              title="SEGREGATION SYMBOL DETAILS"
              data={rows}
              columns={columns}
              options={options}
            />
          </Box>

          <div className={classes.modalFooter}>
            <div className={classes.grdCellNone} style={{ marginRight: 10 }}>
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
        </div>
      </Fade>
    </Modal>
  );
}
