import React, { useState, useEffect } from 'react';
import useStyles from '../../../styles';
import { IconButton, Modal, Backdrop, Fade, Box } from '@material-ui/core';
import { listMiniManipulationDetails } from '../../../services/MiniManipulationService';
import { Close as CloseIcon } from '@material-ui/icons';
import Table, { columnType } from 'components/Table/Table';

export default function MiniManipulationModal({
  onClose: handleClose,
  open: isOpen,
  value,
}) {
  const classes = useStyles();

  const [rows, setRows] = useState([]);

  const columns = [
    {
      name: 'trnsId',
      label: 'Transaction ID',
      options: {
        display: false,
      }
    },
    {
      name: 'correspondent',
      label: 'Correspondent',
    },
    {
      name: 'accountNo',
      label: 'Account No',
    },
    {
      name: 'traderId',
      label: 'Trader ID',
    },
    {
      name: 'tradeDate',
      label: 'Trade Date',
      type: columnType.date,
    },
    {
      name: 'tradeAt',
      label: 'Trade At',
      options: {
        customBodyRenderLite: (dataIndex) => {
          if(rows[dataIndex].tradeAt) {
            const v = rows[dataIndex].tradeAt;
            return new Date(v.seconds * 1000).toISOString().substr(11, 8);
          }
        },
      }
    },
    {
      name: 'symbol',
      label: 'Symbol',
    },
    {
      name: 'assetType',
      label: 'Asset Type',
      options: {
        display: false,
      }
    },
    {
      name: 'side',
      label: 'Side',
    },
    {
      name: 'qty',
      label: 'Qty',
      type: columnType.quantity,
    },
    {
      name: 'price',
      label: 'Price',
      type: columnType.amount,
    },
    {
      name: 'grossAmt',
      label: 'Gross Amount',
      type: columnType.amount,
    },
    {
      name: 'executingVenue',
      label: 'Executing Venue',
    },
    {
      name: 'volume',
      label: 'Volume',
      type: columnType.quantity,
    },
  ];

  const options = {
    selectableRows: 'none',
  };

  useEffect(
    () => {
      async function init() {
        console.log(value);
        const data = await listMiniManipulationDetails(value);
        console.log(data);
        setRows(data.miniManipulationsList);
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
              title="Mini Manipulation Details"
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
