import React, { useState, useEffect } from 'react';
import { IconButton, Modal, Backdrop, Fade, Box } from '@material-ui/core';
import { listRequestAudit } from '../../../services/ACHWireService';
import {
  CheckCircle as CheckCircleIcon,
  Close as CloseIcon,
} from '@material-ui/icons';
import Table, { columnType } from 'components/Table/Table';
import useStyles from '../../../styles';

export default function ACHWireAuditModal({
  onClose: handleClose,
  open: isOpen,
  value: requestId,
}) {
  const classes = useStyles();
  const [rows, setRows] = useState([]);
  const [mounted, setMounted] = React.useState(false);

  const options = {
    selectableRows: 'none',
  };

  const columns = [
    {
      name: 'requestId',
      label: 'Request ID',
      options: {
        display: false,
      },
    },
    {
      name: 'correspondent',
      label: 'Correspondent',
    },
    {
      name: 'systemDate',
      label: 'System Date',
      type: columnType.date,
    },
    {
      name: 'accountId',
      label: 'Account ID',
      options: {
        display: false,
      },
    },
    {
      name: 'branch',
      label: 'Branch',
      options: {
        display: false,
      },
    },
    {
      name: 'accountNo',
      label: 'Account No',
      options: {
        display: false,
      },
    },
    {
      name: 'masterAccountNo',
      label: 'Master Account No',
    },
    {
      name: 'rep',
      label: 'Rep',
      options: {
        display: false,
      },
    },
    {
      name: 'bankId',
      label: 'Bank ID',
      options: {
        display: false,
      },
    },
    {
      name: 'bankAccountNo',
      label: 'Bank Account No',
      options: {
        display: false,
      },
    },
    {
      name: 'bankRoutingNo',
      label: 'Bank Routing No',
      options: {
        display: false,
      },
    },
    {
      name: 'bankName',
      label: 'Bank Name',
    },
    {
      name: 'requestType',
      label: 'Request Type',
    },
    {
      name: 'transferType',
      label: 'Transfer Type',
    },
    {
      name: 'amt',
      label: 'Amount',
      type: columnType.amount,
      options: {
        display: false,
      },
    },
    {
      name: 'fee',
      label: 'Fee',
      type: columnType.amount,
      options: {
        display: false,
      },
    },
    {
      name: 'fedNo',
      label: 'Fed No',
    },
    {
      name: 'externalId',
      label: 'External ID',
    },
    {
      name: 'bank',
      label: 'Bank',
    },
    {
      name: 'bankNote',
      label: 'Bank Note',
    },
    {
      name: 'internalNote',
      label: 'Internal Note',
      options: {
        display: false,
      },
    },
    {
      name: 'status',
      label: 'Status',
    },
    {
      name: 'createdBy',
      label: 'Created By',
      options: {
        display: false,
      },
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
      name: 'isInternational',
      label: 'Is International',
      options: {
        display: false,
        customBodyRenderLite: (dataIndex) => {
          return rows[dataIndex].isInternational ? <CheckCircleIcon /> : null;
        },
      },
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

  const setAuditData = async () => {
    const { requestList } = await listRequestAudit(requestId);
    setRows(requestList);
  };

  useEffect(() => {
    if (isOpen && !mounted) {
      setAuditData();
    }
    // eslint-disable-next-line
    return () => {
      setMounted(true); // This worked for me
    };
    // eslint-disable-next-line
  }, [isOpen, mounted]);

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
              title="ACH/Wire AUDIT LOG"
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
