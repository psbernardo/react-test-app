import React, { useState, useEffect } from 'react';
import useStyles from '../../../styles';
import Table, { columnType } from 'components/Table/Table';
import { formatCurrency } from 'lib/fmt';
import { IconButton, Modal, Backdrop, Fade, Box } from '@material-ui/core';
import { listQuarterlyReportFormCustodyDetails } from '../../../services/FormCustodyService';
import { Close as CloseIcon } from '@material-ui/icons';

export default function FormCustodyDetailsModal({
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
    3,
    4,
    0,
    1,
    2,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
  ]);

  const columns = [
    {
      name: 'systemDate',
      label: 'System Date',
      type: columnType.date,
    },
    {
      name: 'settleDate',
      label: 'Settle Date',
      type: columnType.date,
      options: {
        display: 'excluded',
      },
    },
    {
      name: 'companyName',
      label: 'Company Name',
      options: {
        display: 'excluded',
      },
    },
    {
      name: 'correspondent',
      label: 'Correspondent',
      options: {
        display: 'excluded',
      },
    },
    {
      name: 'accountNo',
      label: 'Account No',
      options: {
        display: 'excluded',
      },
    },
    {
      name: 'subAccountNo',
      label: 'Sub Account No',
      options: {
        display: 'excluded',
      },
    },
    {
      name: 'marginType',
      label: 'Margin Type',
    },
    {
      name: 'accountType',
      label: 'Account Type',
      options: {
        display: 'excluded',
      },
    },
    {
      name: 'broker',
      label: 'Broker',
    },
    {
      name: 'crossMarginAccount',
      label: 'Cross Margin Account',
    },
    {
      name: 'contraBrokerCode',
      label: 'Contra Broker Code',
      options: {
        display: 'excluded',
      },
    },
    {
      name: 'assetType',
      label: 'Asset Type',
    },
    {
      name: 'symbolNo',
      label: 'Symbol No',
      options: {
        display: 'excluded',
      },
    },
    {
      name: 'symbol',
      label: 'Symbol',
      options: {
        display: 'excluded',
      },
    },
    {
      name: 'cusip',
      label: 'Cusip',
      options: {
        display: 'excluded',
      },
    },
    {
      name: 'symbolDescription',
      label: 'Symbol Description',
      options: {
        display: 'excluded',
      },
    },
    {
      name: 'tdqty',
      label: 'TD Qty',
      type: columnType.quantity,
      options: {
        display: 'excluded',
        customBodyRenderLite: (dataIndex) => {
          const v = rows[dataIndex].tdqty;
          return (
            <div align="right" style={amtColor(v)}>
              {v}
            </div>
          );
        },
      },
    },
    {
      name: 'sdqty',
      label: 'SD Qty',
      type: columnType.quantity,
      options: {
        display: 'excluded',
        customBodyRenderLite: (dataIndex) => {
          const v = rows[dataIndex].sdqty;
          return (
            <div align="right" style={amtColor(v)}>
              {v}
            </div>
          );
        },
      },
    },
    {
      name: 'closingPrice',
      label: 'Closing Price',
      type: columnType.amount,
      options: {
        display: 'excluded',
        customBodyRenderLite: (dataIndex) => {
          const v = rows[dataIndex].closingPrice;
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
      name: 'openingPrice',
      label: 'Opening Price',
      type: columnType.amount,
      options: {
        display: 'excluded',
        customBodyRenderLite: (dataIndex) => {
          const v = rows[dataIndex].openingPrice;
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
      name: 'contractPrice',
      label: 'Contract Price',
      type: columnType.amount,
      options: {
        display: 'excluded',
        customBodyRenderLite: (dataIndex) => {
          const v = rows[dataIndex].contractPrice;
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
      name: 'multiplier',
      label: 'Multiplier',
      options: {
        display: 'excluded',
        customBodyRenderLite: (dataIndex) => {
          const v = rows[dataIndex].multiplier;
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
      name: 'tdValue',
      label: 'TD Value',
      type: columnType.amount,
      options: {
        display: 'excluded',
        customBodyRenderLite: (dataIndex) => {
          const v = rows[dataIndex].tdValue;
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
      name: 'sdValue',
      label: 'SD Value',
      type: columnType.amount,
      options: {
        customBodyRenderLite: (dataIndex) => {
          const v = rows[dataIndex].sdValue;
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
      name: 'tdCostValue',
      label: 'TD Cost Value',
      type: columnType.amount,
      options: {
        display: 'excluded',
        customBodyRenderLite: (dataIndex) => {
          const v = rows[dataIndex].tdCostValue;
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
      name: 'sdCostValue',
      label: 'SD Cost Value',
      type: columnType.amount,
      options: {
        display: 'excluded',
        customBodyRenderLite: (dataIndex) => {
          const v = rows[dataIndex].sdCostValue;
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
        const data = await listQuarterlyReportFormCustodyDetails(value);
        setRows(data.positionsList);
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
              title="QUARTERLY REPORT DETAILS"
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
