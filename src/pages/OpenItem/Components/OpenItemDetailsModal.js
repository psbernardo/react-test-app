import React, { useState, useEffect } from 'react';
import useStyles from '../../../styles';
import Table, { columnType } from 'components/Table/Table';
import { IconButton, Modal, Backdrop, Fade, Box } from '@material-ui/core';
import { listOpenItemDetails } from '../../../services/OpenItemService';
import { Close as CloseIcon } from '@material-ui/icons';

export default function OpenItemDetailsModal({
  onClose: handleClose,
  open: isOpen,
  value,
}) {
  const classes = useStyles();

  const [rows, setRows] = useState([]);

  const [columnOrder, setColumnOrder] = React.useState([
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
  ]);

  const columns = [
    {
      name: 'date', //0
      label: 'Date',
      type: columnType.date,
    },
    {
      name: 'correspondent', //1
      label: 'Correspondent',
    },
    {
      name: 'accountNo', //2
      label: 'Account No',
    },
    {
      name: 'accountName', //3
      label: 'Account Name',
    },
    {
      name: 'subAccountNo', //4
      label: 'Sub Account No',
    },
    {
      name: 'masterAccountNo', //5
      label: 'Master Account No',
    },
    {
      name: 'qty', //6
      label: 'QTY',
      type: columnType.quantity,
    },
    {
      name: 'closingPrice', //7
      label: 'Closing Price',
      type: columnType.amount,
    },
    {
      name: 'marketValue', //8
      label: 'Market Value',
      type: columnType.amount,
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
    resizableColumns: false,
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
        const data = await listOpenItemDetails(value);
        setRows(data.openItemDetailsList);
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
              title="OPEN ITEM DETAILS"
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
