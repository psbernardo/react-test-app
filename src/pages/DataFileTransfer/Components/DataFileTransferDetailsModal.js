import React, { useState, useEffect } from 'react';
import useStyles from '../../../styles';
import { IconButton, Modal, Backdrop, Fade, Box } from '@material-ui/core';
import Table, { columnType } from 'components/Table/Table';
import { listDataFileTransferDetails } from '../../../services/DataFileTransferService';
import { Close as CloseIcon } from '@material-ui/icons';

export default function DayTradeBuyingPowerUsedDetailsModal({
  onClose: handleClose,
  open: isOpen,
  value,
}) {
  const classes = useStyles();

  const [rows, setRows] = useState([]);

  const columns = [
    {
      name: 'trNo',
      label: 'Transaction No',
    },
    {
      name: 'correspondent',
      label: 'Correspondent',
    },
    {
      name: 'office',
      label: 'Office',
    },
    {
      name: 'accountNo',
      label: 'Account No',
    },
    {
      name: 'subAccountNo',
      label: 'Sub Account No',
    },
    {
      name: 'contraAccountNo',
      label: 'Contra Account No',
    },
    {
      name: 'contraSubAccountNo',
      label: 'Contra Sub Account No',
    },
    {
      name: 'entryType',
      label: 'Entry Type',
    },
    {
      name: 'symbol',
      label: 'Symbol',
    },
    {
      name: 'qty',
      label: 'Qty',
      type: columnType.amount,
    },
    {
      name: 'grossAmount',
      label: 'Gross Amount',
      type: columnType.amount,
    },
    {
      name: 'description',
      label: 'Description',
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
        const data = await listDataFileTransferDetails(value);
        setRows(data.dataFileTransferDetailsList);
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
              title="Data File Transfer Details"
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
