/*ReactJS*/
import React, { useState, useEffect } from 'react';
import useStyles from '../../../styles';
import Table, { columnType } from 'components/Table/Table';
import { IconButton, Modal, Backdrop, Fade, Box } from '@material-ui/core';
import { listPositionReconDetail } from '../../../services/PositionReconService';
import { Close as CloseIcon } from '@material-ui/icons';

export default function PositionReconDetailsModal({
  onClose: handleClose,
  open: isOpen,
  value,
}) {
  const classes = useStyles();

  const [rows, setRows] = useState([]);

  const amtColor = (v) => {
    return { color: v < 0 && '#f44336' };
  };

  const [columnOrder, setColumnOrder] = React.useState([
    2,
    7,
    0,
    1,
    3,
    4,
    5,
    6,
    9,
    8,
  ]);

  const columns = [
    {
      name: 'accountNo', //0
      label: 'Account No',
    },
    {
      name: 'accountName', //1
      label: 'Account Name',
    },
    {
      name: 'correspondent', //2
      label: 'Correspondent',
    },
    {
      name: 'cusip', //3
      label: 'Cusip',
    },
    {
      name: 'originalCusip', //4
      label: 'Original Cusip',
      options: {
        display: false,
      },
    },
    {
      name: 'symbol', //5
      label: 'Symbol',
    },
    {
      name: 'symbolDescription', //6
      label: 'Symbol Description',
    },
    {
      name: 'systemDate', //7
      label: 'System Date',
      type: columnType.date,
    },
    {
      name: 'tdLongQty', //8
      label: 'TD Long Qty',
      type: columnType.quantity,
      options: {
        customBodyRenderLite: (dataIndex) => {
          const v = rows[dataIndex].tdLongQty;
          return (
            <div align="right" style={amtColor(v)}>
              {v}
            </div>
          );
        },
      },
    },
    {
      name: 'tdShortQty', //9
      label: 'TD Short Qty',
      type: columnType.quantity,
      options: {
        customBodyRenderLite: (dataIndex) => {
          const v = rows[dataIndex].tdShortQty;
          return (
            <div align="right" style={amtColor(v)}>
              {v}
            </div>
          );
        },
      },
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
        const data = await listPositionReconDetail(value);
        setRows(data.positionReconDetailsList);
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
              title="POSITION RECONCILIATION DETAILS"
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
