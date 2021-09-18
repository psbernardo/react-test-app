import React, { useState, useEffect } from 'react';
import { IconButton, Modal, Backdrop, Fade, Box } from '@material-ui/core';
import { Close as CloseIcon } from '@material-ui/icons';
import { listAccountAudit } from '../../../services/BankAccountService';

import Table, { columnType } from 'components/Table/Table';
import useStyles from '../../../styles';

export default function BankAccountAuditModal({
  onClose: handleClose,
  open: isOpen,
  value: bankId,
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
      name: 'masterAccountNo',
      label: 'Master Account No',
    },
    {
      name: 'accountNo',
      label: 'Account No',
    },
    {
      name: 'bankOwnerName',
      label: 'Bank Owner Name',
    },
    {
      name: 'bankName',
      label: 'Bank Name',
    },
    {
      name: 'achRoutingNo',
      label: 'Ach Routing No',
    },
    {
      name: 'wireRoutingNo',
      label: 'Wire Routing No',
    },
    {
      name: 'bankAccountNo',
      label: 'Bank Account No',
    },
    {
      name: 'bankAccountType',
      label: 'Bank Account Type',
    },
    {
      name: 'approvedMethod',
      label: 'Approved Method',
    },
    {
      name: 'plaidAccessToken',
      label: 'Plaid Access Token',
    },
    {
      name: 'bankIdentifierCode',
      label: 'BIC',
    },
    {
      name: 'systemDate',
      label: 'System Date',
      type: columnType.date,
    },
    {
      name: 'status',
      label: 'Status',
    },
    {
      name: 'glAccountNo',
      label: 'GL Account No',
    },
    {
      name: 'createdAt',
      label: 'Created At',
      type: columnType.dateTime,
    },
    {
      name: 'createdBy',
      label: 'Created By',
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
    const { accountList } = await listAccountAudit(bankId);
    setRows(accountList);
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
              title="BANK ACCOUNT AUDIT LOG"
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
