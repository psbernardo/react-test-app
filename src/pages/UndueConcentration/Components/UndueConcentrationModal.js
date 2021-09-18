import React, { useState, useEffect } from 'react';
import useStyles from '../../../styles';
import { listUndueConcentrationDetail } from '../../../services/UndueConcentrationService';
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
      name: 'date',
      label: 'Date',
      type: columnType.date,
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
      name: 'symbolDescription',
      label: 'Symbol Description',
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
      name: 'equity',
      label: 'Equity',
      type: columnType.amount,
    },
    {
      name: 'cashPercent',
      label: 'Cash Percent',
      type: columnType.percentage,
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
        const data = await listUndueConcentrationDetail(value);
        setRows(data.undueConcentrationDetailsList);
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
              title="Undue Concentration Details"
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
