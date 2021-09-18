import React, { useState, useEffect } from 'react';
import useStyles from '../../../styles';
import { IconButton, Modal, Backdrop, Fade, Box } from '@material-ui/core';
import Table, { columnType } from 'components/Table/Table';
import { listStockBorrowDetails } from '../../../services/StockBorrowService';
import { Close as CloseIcon } from '@material-ui/icons';

export default function StockBorrowDetailsTable({
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
      name: 'accountNo',
      label: 'Account No',
    },
    {
      name: 'accountName',
      label: 'Account Name',
    },
    {
      name: 'symbol',
      label: 'Symbol',
    },
    {
      name: 'cusip',
      label: 'Cusip',
    },
    {
      name: 'masterAccountNo',
      label: 'Master Account No',
    },
    {
      name: 'originalcusip',
      label: 'Original Cusip',
    },
    {
      name: 'settlementObligation',
      label: 'Settlement Obligation',
    },
    {
      name: 'systemDate',
      label: 'System Date',
      type: columnType.date,
    },
    {
      name: 'symbolDescription',
      label: 'Symbol Description',
    },
    {
      name: 'borrowed',
      label: 'Borrowed',
    },
    {
      name: 'loaned',
      label: 'Loaned',
    },
    {
      name: 'broker',
      label: 'Broker',
    },
    {
      name: 'type',
      label: 'type',
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
    selectableRows: 'none',
  };

  useEffect(
    () => {
      async function init() {
        const data = await listStockBorrowDetails(value);
        console.log(data);
        setRows(data.stockBorrowDetailsList);

        console.log(value);
        console.log(data);
      }

      if (isOpen) {
        init();
      }
    }, // eslint-disable-next-line
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
              title="STOCK BORROW DETAILS"
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
