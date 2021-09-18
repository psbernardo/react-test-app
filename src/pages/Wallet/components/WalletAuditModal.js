import React, { useState, useEffect } from 'react';
import { IconButton, Modal, Backdrop, Fade, Box } from '@material-ui/core';
import { Close as CloseIcon } from '@material-ui/icons';
import { listWalletAudit } from '../../../services/WalletService';
import Table, { columnType } from 'components/Table/Table';
import useStyles from '../../../styles';

export default function WalletAuditModal({
  onClose: handleClose,
  open: isOpen,
  value: walletId,
}) {
  const classes = useStyles();
  const [rows, setRows] = useState([]);
  const [mounted, setMounted] = React.useState(false);
  const options = {
    selectableRows: 'none',
  };

  const columns = [
    {
      name: 'symbol',
      label: 'Symbol',
    },
    {
      name: 'symbolDescription',
      label: 'Symbol Description',
    },
    {
      name: 'wallet',
      label: 'Wallet',
    },
    {
      name: 'accountNo',
      label: 'Account No',
    },
    {
      name: 'status',
      label: 'Status',
    },
    {
      name: 'note',
      label: 'Note',
    },
    {
      name: 'originalCusip',
      label: 'Original Cusip',
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
      name: 'createdBy',
      label: 'Created By',
    },
    {
      name: 'createdAt',
      label: 'Created At',
      type: columnType.dateTime,
      options: {
        display: false,
      },
    },
    {
      name: 'modifiedAt',
      label: 'Modified At',
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

  useEffect(() => {
    const setAuditData = async () => {
      const { walletsList } = await listWalletAudit(walletId);
      setRows(walletsList);
    };

    if (isOpen && !mounted) {
      setAuditData();
    }
    // eslint-disable-next-line
    return () => {
      setMounted(true);
    };
  }, [isOpen, mounted, walletId]);

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
          <Box component="div">
            <Table
              title="WALLET AUDIT LOG"
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
