import React, { useState, useEffect } from 'react';
import { Button, Modal, Backdrop, Fade, Box } from '@material-ui/core';
import { listRateAudit } from '../../../services/StockBorrowRateService';

import Table, { columnType } from 'components/Table/Table';
import useStyles from '../../../styles';

export default function StockBorrowRateAuditModal({
  onClose: handleClose,
  open: isOpen,
  value: rateId,
}) {
  const classes = useStyles();
  const [rows, setRows] = useState([]);
  const [columns, setColumns] = useState([]);
  const options = {
    selectableRows: 'none',
  };

  const setRateTable = async () => {
    setColumns([
      {
        name: 'systemDate',
        label: 'System Date',
        type: columnType.date,
      },
      {
        name: 'symbol',
        label: 'Symbol',
      },
      {
        name: 'borrowRate',
        label: 'Borrow Rate',
        type: columnType.amount,
      },
      {
        name: 'loanRate',
        label: 'Loan Rate',
        type: columnType.amount,
      },
      {
        name: 'lendingPitRate',
        label: 'Lending Pit Rate',
        type: columnType.amount,
      },
      {
        name: 'highestRate',
        label: 'Highest Rate',
        type: columnType.amount,
      },
      {
        name: 'markUpRate',
        label: 'Mark Up Rate',
        type: columnType.amount,
      },
      {
        name: 'finalRate',
        label: 'Final Rate',
        type: columnType.amount,
      },
      {
        name: 'source',
        label: 'Source',
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
    ]);

    const { rateList } = await listRateAudit(rateId);
    setRows(rateList);
  };

  useEffect(() => {
    if (isOpen) {
      setRateTable();
    }
    // eslint-disable-next-line
  }, [isOpen]);

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
          <Box mt={1}>
            <Box component="div">
              <Table
                title={'Stock Borrow Rate Audit'}
                data={rows}
                columns={columns}
                options={options}
              />
            </Box>
            <div className={classes.modalFooter}>
              <div className={classes.grdCellNone} style={{ marginRight: 10 }}>
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
              </div>
            </div>
          </Box>
        </div>
      </Fade>
    </Modal>
  );
}
