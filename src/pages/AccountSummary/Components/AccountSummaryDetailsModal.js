/*ReactJS*/
import React, { useState, useEffect } from 'react';
import useStyles from '../../../styles';
import { IconButton, Modal, Backdrop, Fade, Box } from '@material-ui/core';
import { listAccountSummaryDetail } from '../../../services/AccountSummaryService';
import Table, { columnType } from 'components/Table/Table';
import { Close as CloseIcon } from '@material-ui/icons';

export default function AccountSummaryDetailsModal({
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
      name: 'accountNo',
      label: 'Account No',
    },
    {
      name: 'office',
      label: 'Office',
    },
    {
      name: 'marginType',
      label: 'Margin Type',
    },
    {
      name: 'houseOpeningPrice',
      label: 'House Opening Price',
      type: columnType.amount,
    },
    {
      name: 'houseValue',
      label: 'House Value',
      type: columnType.amount,
    },
    {
      name: 'houseQty',
      label: 'House Qty',
      type: columnType.quantity,
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
    selectableRows: false,
  };

  useEffect(
    () => {
      async function init() {
        const data = await listAccountSummaryDetail(value);
        setRows(data.accountSummaryDetailsList);

        console.log(value);
        console.log(data);
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
              title="ACCOUNT SUMMARY DETAILS"
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
