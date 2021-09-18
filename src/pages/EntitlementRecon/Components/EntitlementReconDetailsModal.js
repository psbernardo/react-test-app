/*ReactJS*/
import React, { useState, useEffect } from 'react';
import useStyles from '../../../styles';
import Table, { columnType } from 'components/Table/Table';
import { IconButton, Modal, Backdrop, Fade, Box } from '@material-ui/core';
import { listEntitlementReconDetail } from '../../../services/EntitlementReconService';
import { Close as CloseIcon } from '@material-ui/icons';

export default function EntitlementReconDetailsModal({
  onClose: handleClose,
  open: isOpen,
  value,
}) {
  const classes = useStyles();

  const [rows, setRows] = useState([]);

  const [columnOrder, setColumnOrder] = React.useState([
    3,
    12,
    1,
    0,
    2,
    10,
    13,
    9,
    6,
    7,
    5,
    8,
    11,
    4,
  ]);

  const columns = [
    {
      name: 'accountNo', //0
      label: 'Account No',
    },
    {
      name: 'createdBy', //1
      label: 'Created By',
      options: {
        display: false,
      },
    },
    {
      name: 'contraAccountNo', //2
      label: 'Contra Account No',
      options: {
        display: false,
      },
    },
    {
      name: 'correspondent', //3
      label: 'Correspondent',
    },
    {
      name: 'description', //4
      label: 'Description',
      options: {
        display: false,
      },
    },
    {
      name: 'entryType', //5
      label: 'Entry Type',
    },
    {
      name: 'grossAmt', //6
      label: 'Gross Amt',
      type: columnType.amount,
    },
    {
      name: 'netAmt', //7
      label: 'Net Amt',
      type: columnType.amount,
    },
    {
      name: 'originalCusip', //8
      label: 'Original Cusip',
      options: {
        display: false,
      },
    },

    {
      name: 'qty', //9
      label: 'Qty',
      type: columnType.quantity,
    },
    {
      name: 'settleDate', //10
      label: 'Settle Date',
      type: columnType.date,
    },
    {
      name: 'symbol', //11
      label: 'Symbol',
    },
    {
      name: 'systemDate', //12
      label: 'System Date',
      type: columnType.date,
    },
    {
      name: 'tradeDate', //13
      label: 'Trade Date',
      type: columnType.date,
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
    columnOrder: columnOrder,
    filterType: 'select',
    responsive: 'standard',
    download: true,
    filter: true,
    search: true,
    print: false,
    sort: true,
    viewColumns: true,
    resizableColumns: true,
    draggableColumns: {
      enabled: true,
    },
    selectableRowsHeader: true,
    selectableRows: false,
    rowsPerPage: 10,
    // downloadOptions: {
    //   filename: 'BalanceRecon_' + moment().format('MMMM Do YYYY') + '.csv',
    // },
    onColumnOrderChange: (newColumnOrder) => {
      setColumnOrder(newColumnOrder);
    },
  };

  useEffect(
    () => {
      async function init() {
        const data = await listEntitlementReconDetail(value);
        setRows(data.entitlementReconDetailsList);

        // console.log(value);
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
              title="ENTITLEMENT RECONCILIATION DETAILS"
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
