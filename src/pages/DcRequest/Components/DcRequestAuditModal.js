import React, { useState, useEffect } from 'react';
import { IconButton, Modal, Backdrop, Fade, Box } from '@material-ui/core';
import { Close as CloseIcon } from '@material-ui/icons';
import { listDcAudit } from '../../../services/DcRequestService';
import Table, { columnType } from 'components/Table/Table';
import useStyles from '../../../styles';

export default function DcRequestAuditModal({
  onClose: handleClose,
  open: isOpen,
  value: dcRequestId,
}) {
  const classes = useStyles();
  const [rows, setRows] = useState([]);
  const [mounted, setMounted] = React.useState(false);
  const options = {
    selectableRows: 'none',
  };

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
    },
    {
      name: 'type',
      label: 'Type',
    },
    {
      name: 'amt',
      label: 'Amount',
    },
    {
      name: 'transferType',
      label: 'Transfer Type',
    },
    {
      name: 'referenceId',
      label: 'Reference ID',
    },
    {
      name: 'confirmationId',
      label: 'Confirmation ID',
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
      name: 'createdBy',
      label: 'Created By',
    },
    {
      name: 'systemDate',
      label: 'System Date',
      type: columnType.date,
    },
    {
      name: 'modifiedBy',
      label: 'Modified By',
      type: columnType.text,
    },
    {
      name: 'modifiedAt',
      label: 'Modified At',
      type: columnType.dateTime,
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
      const { dcRequestsList } = await listDcAudit(dcRequestId);
      setRows(dcRequestsList);
    };

    if (isOpen && !mounted) {
      setAuditData();
    }
    // eslint-disable-next-line
    return () => {
      setMounted(true);
    };
  }, [isOpen, mounted, dcRequestId]);

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
              title="DIGITAL BANK REQUEST AUDIT LOG"
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
