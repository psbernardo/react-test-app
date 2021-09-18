import React, { useState, useEffect } from 'react';
import useStyles from '../../../styles';
import { IconButton, Modal, Backdrop, Fade, Box } from '@material-ui/core';
import { listTafFeeDetails } from '../../../services/TafFeeService';
import { Close as CloseIcon } from '@material-ui/icons';
import Table, { columnType } from 'components/Table/Table';

export default function TAFFeeModal({
  onClose: handleClose,
  open: isOpen,
  value,
}) {
  const classes = useStyles();

  const [rows, setRows] = useState([]);

  const columns = [
    {
      name: 'month',
      label: 'Month',
    },
    {
      name: 'year',
      label: 'Year',
    },
    {
      name: 'tradeDate',
      label: 'Trade Date',
      type: columnType.date,
    },
    {
      name: 'accountId',
      label: 'Account ID',
    },
    {
      name: 'correspondent',
      label: 'Correspondent',
    },
    {
      name: 'branch',
      label: 'Branch',
    },
    {
      name: 'accountNo',
      label: 'Account No',
    },
    {
      name: 'masterAccountNo',
      label: 'Master Account No',
    },
    {
      name: 'rep',
      label: 'Rep',
    },
    {
      name: 'broker',
      label: 'Broker',
    },
    {
      name: 'accountName',
      label: 'Account Name',
    },
    {
      name: 'qty',
      label: 'Qty',
      type: columnType.quantity,
      addFooter: true,
    },
    {
      name: 'tafFee',
      label: 'TAF Fee',
      type: columnType.amount,
      addFooter: true,
    },
    {
      name: 'qtyLimit',
      label: 'Qty Limit',
      type: columnType.quantity,
      addFooter: true,
      options: {
        display: false,
      },
    },
    {
      name: 'maxQtyCount',
      label: 'Max Qty Count',
      type: columnType.quantity,
      addFooter: true,
    },
    {
      name: 'maxRate',
      label: 'Max Rate',
      type: columnType.percentage,
      addFooter: true,
    },
    {
      name: 'maxFee',
      label: 'Max Fee',
      type: columnType.amount,
      addFooter: true,
    },
    {
      name: 'minQty',
      label: 'Min Qty',
      type: columnType.quantity,
      addFooter: true,
    },
    {
      name: 'minRate',
      label: 'Min Rate',
      type: columnType.percentage,
      addFooter: true,
    },
    {
      name: 'minFee',
      label: 'Min Fee',
      type: columnType.amount,
      addFooter: true,
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
        const data = await listTafFeeDetails(value);
        setRows(data.tafFeesList);
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
              title="TAF FEE DETAILS"
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
