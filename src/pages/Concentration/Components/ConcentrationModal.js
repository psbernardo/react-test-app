/*ReactJS*/
import React, { useState, useEffect } from 'react';
import useStyles from '../../../styles';
import { listConcentrationDetail } from '../../../services/ConcentrationService';
import { Modal, Backdrop, Fade, Box, IconButton } from '@material-ui/core';
import { Close as CloseIcon } from '@material-ui/icons';
import Table, { columnType } from 'components/Table/Table';

export default function ConcentrationModal({
  onClose: handleClose,
  open: isOpen,
  value,
}) {
  const classes = useStyles();

  const [rows, setRows] = useState([]);

  const columns = [
    {
      name: 'settleDate',
      label: 'Settle Date',
      type: columnType.date,
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
      name: 'adjustedBalance',
      label: 'Adjusted Balance',
      type: columnType.amount,
    },
    {
      name: 'equity',
      label: 'Equity',
      type: columnType.amount,
    },
    {
      name: 'originalCusip',
      label: 'Original Cusip',
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
      name: 'qty',
      label: 'Qty',
      type: columnType.quantity,
    },
    {
      name: 'marketValue',
      label: 'Market Value',
      type: columnType.amount,
    },
    {
      name: 'cashPercent',
      label: 'Cash Percent',
      type: columnType.percentage,
    },
    {
      name: 'segQty',
      label: 'Seg Qty',
      type: columnType.quantity,
    },
    {
      name: 'excessMarginQty',
      label: 'Excess Margin Qty',
      type: columnType.quantity,
    },
    {
      name: 'segAmt',
      label: 'Seg Amt',
      type: columnType.amount,
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
        const data = await listConcentrationDetail(value);
        setRows(data.concentrationDetailsList);
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
              title="Concentration Details"
              data={rows}
              columns={columns}
              options={options}
            />
          </Box>
          <div className={classes.modalFooter} style={{ margin: 0 }}>
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
