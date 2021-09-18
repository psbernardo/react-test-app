/*ReactJS*/
import React, { useState, useEffect } from 'react';
import useStyles from '../../../styles';
import Table, { columnType } from 'components/Table/Table';
import { formatPbDate, formatCurrency } from 'lib/fmt';
import { IconButton, Modal, Backdrop, Fade, Box } from '@material-ui/core';
import { listReOrgReconDetail } from '../../../services/ReorgReconService';
import CustomTableBodyFooter from '../../../components/Table/CustomTableBodyFooter';
import { Close as CloseIcon } from '@material-ui/icons';

export default function ReorgReconDetailsModal({
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
    8,
    0,
    1,
    9,
    6,
    3,
    7,
    4,
    5,
    2,
  ]);

  const columns = [
    {
      name: 'accountNo', //0
      label: 'Account No',
    },
    {
      name: 'contraAccountNo', //1
      label: 'Contra Account No',
    },
    {
      name: 'description', //2
      label: 'Description',
      options: {
        display: false,
      },
    },
    {
      name: 'entryType', //3
      label: 'Entry Type',
    },
    {
      name: 'qty', //4
      label: 'Qty',
      type: columnType.quantity,
      options: {
        customBodyRenderLite: (dataIndex) => {
          const v = rows[dataIndex].qty;
          return (
            <div align="right" style={amtColor(v)}>
              {v}
            </div>
          );
        },
      },
    },
    {
      name: 'netAmt', //5
      label: 'Net Amt',
      type: columnType.amount,
      options: {
        customBodyRenderLite: (dataIndex) => {
          const v = rows[dataIndex].netAmt;
          const f = formatCurrency(v);
          return (
            <div align="right" style={amtColor(v)}>
              {f}
            </div>
          );
        },
      },
    },
    {
      name: 'settleDate', //6
      label: 'Settle Date',
      type: columnType.date,
      options: {
        //format date to string
        customBodyRenderLite: (dataIndex) => {
          return formatPbDate(rows[dataIndex].settleDate);
        },
      },
    },
    {
      name: 'symbol', //7
      label: 'Symbol',
    },
    {
      name: 'systemDate', //8
      label: 'System Date',
      type: columnType.date,
      options: {
        //format date to string
        customBodyRenderLite: (dataIndex) => {
          return formatPbDate(rows[dataIndex].systemDate);
        },
      },
    },
    {
      name: 'tradeDate', //9
      label: 'trade Date',
      type: columnType.date,
      options: {
        //format date to string
        customBodyRenderLite: (dataIndex) => {
          return formatPbDate(rows[dataIndex].tradeDate);
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
    customTableBodyFooterRender: function(opts) {
      return (
        <CustomTableBodyFooter
          columnOrder={columnOrder}
          columns={opts.columns}
          columnsWithAmt={['netAmt']}
          columnsWithQty={['qty']}
          rows={rows}
        ></CustomTableBodyFooter>
      );
    },
  };

  useEffect(
    () => {
      async function init() {
        const data = await listReOrgReconDetail(value);
        setRows(data.reorgReconDetailsList);
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
              title="CORP REORG RECON DETAILS"
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
