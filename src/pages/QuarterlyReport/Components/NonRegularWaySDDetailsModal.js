/*ReactJS*/
import React, { useState, useEffect } from 'react';
import useStyles from '../../../styles';
import Table, { columnType } from 'components/Table/Table';
import { IconButton, Modal, Backdrop, Fade, Box } from '@material-ui/core';
import { listQuarterlyReportNonRegularWaySdDetails } from '../../../services/NonRegularWaySDService';
import { Close as CloseIcon } from '@material-ui/icons';

export default function NonRegularWaySDDetailsModal({
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
      name: 'grossAmount',
      label: 'Gross Amount',
      type: columnType.amount,
    },
    {
      name: 'price',
      label: 'Price',
      type: columnType.amount,
    },
    {
      name: 'qty',
      label: 'QTY',
      type: columnType.quantity,
    },
    {
      name: 'symbol',
      label: 'Symbol',
    },
    {
      name: 'settleDate',
      label: 'Settle Date',
      type: columnType.date,
    },
    {
      name: 'tradeDate',
      label: 'Trade Date',
      type: columnType.date,
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
        const data = await listQuarterlyReportNonRegularWaySdDetails(value);
        setRows(data.activityList);
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
              title="NON REGULAR WAY SD DETAILS"
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
