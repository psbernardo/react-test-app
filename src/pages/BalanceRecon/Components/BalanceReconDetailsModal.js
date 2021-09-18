/*ReactJS*/
import React, { useState, useEffect } from 'react';
import useStyles from '../../../styles';
import { IconButton, Modal, Backdrop, Fade, Box } from '@material-ui/core';
import { listBalanceReconDetail } from '../../../services/BalanceReconService';
import { Close as CloseIcon } from '@material-ui/icons';
import Table, { columnType } from 'components/Table/Table';

export default function BalanceReconDetailsModal({
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
      name: 'masterAccountNo',
      label: 'Master Account No',
    },
    {
      name: 'broker',
      label: 'Broker',
      options: {
        display: false,
      },
    },
    {
      name: 'type',
      label: 'type',
      options: {
        display: false,
      },
    },
    {
      name: 'systemDate',
      label: 'System Date',
      type: columnType.date,
    },
    {
      name: 'tdCashBalance',
      label: 'TD Cash Balance',
      type: columnType.amount,
      addFooter: true,
    },
    {
      name: 'tdLongMarketValue',
      label: 'TD Long Market Value',
      type: columnType.amount,
      addFooter: true,
    },
    {
      name: 'tdShortMarketValue',
      label: 'TD Short Market Value',
      type: columnType.amount,
      addFooter: true,
    },
    {
      name: 'tdEquity',
      label: 'TD Equity',
      type: columnType.quantity,
      addFooter: true,
    },
    {
      name: 'tdAdjustedBalance',
      label: 'TD Adjsuted Balance',
      type: columnType.amount,
      addFooter: true,
    },
    {
      name: 'sdCashBalance',
      label: 'SD Cash Balance',
      type: columnType.amount,
      addFooter: true,
      options: {
        display: false,
      },
    },
    {
      name: 'sdLongMarketValue',
      label: 'SD Long Market Value',
      type: columnType.amount,
      addFooter: true,
      options: {
        display: false,
      },
    },
    {
      name: 'sdShortMarketValue',
      label: 'SD Short Market Value',
      type: columnType.amount,
      addFooter: true,
      options: {
        display: false,
      },
    },
    {
      name: 'sdEquity',
      label: 'SD Equity',
      type: columnType.amount,
      addFooter: true,
      options: {
        display: false,
      },
    },
    {
      name: 'sdAdjustedBalance',
      label: 'SD Adjusted Balance',
      type: columnType.amount,
      addFooter: true,
      options: {
        display: false,
      },
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
        const data = await listBalanceReconDetail(value);
        setRows(data.balanceReconDetailsList);

        console.log(value);
        console.log(data);
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
              title="BALANCE RECONCILIATIONS DETAILS"
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
