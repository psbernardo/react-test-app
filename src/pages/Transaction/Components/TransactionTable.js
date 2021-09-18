/*ReactJS*/
import React, { useState, useEffect } from 'react';

import { Box, IconButton } from '@material-ui/core';

/*Material UI Table*/
import Table from 'components/Table/Table';

import { Create as EditIcon, Delete as DeleteIcon } from '@material-ui/icons';

/*Styles*/
import useStyles from '../../../styles';
import moment from 'moment/moment.js';

import TransactionUploadEditModal from './TransactionUploadEditModal';

import { checkEntryType } from '../../../services/TransactionService';
import { downloadExcelData } from '../../../services/ExcelService';

// import { downloadExcelData } from '../../../services/ExcelService';

export default function TransactionTable({
  entrytype,
  data,
  isEdit,
  editData,
  onEditOpen: handleOpen,
  onEditClose: handleClose,
  onRowDelete: handleDelete,
}) {
  const classes = useStyles();

  const [tableTitle, setTableTitle] = useState('All');
  const [fileName, setFileName] = useState('All');

  useEffect(() => {
    if (checkEntryType(entrytype) === 'trd') {
      setTableTitle('Trade');
      setFileName('trade-sample-sheet');
    } else if (checkEntryType(entrytype) === 'pm') {
      setTableTitle('Position Movement');
      setFileName('position-movement-sample-sheet');
    } else if (checkEntryType(entrytype) === 'cm') {
      setTableTitle('Cash Movement');
      setFileName('cash-movement-sample-sheet');
    } else if (checkEntryType(entrytype) === 'cpm') {
      setTableTitle('Cash and/or Position Movement');
      setFileName('cash-position-movement-sample-sheet');
    } else {
      setFileName('all-entry-type-sample-sheet');
      setTableTitle('All');
    }
  }, [entrytype]);

  const columns = [
    {
      name: '',
      options: {
        draggable: false,
        resizable: false,
        print: false,
        searchable: false,
        filter: false,
        sort: false,
        empty: true,
        viewColumns: false,
        customBodyRenderLite: (dataIndex) => {
          return (
            <div
              align={'left'}
              className={classes.grdRow}
              style={{ margin: 0, padding: 0 }}
            >
              <div className={classes.grdCellNone}>
                <IconButton
                  aria-label="delete"
                  onClick={() => {
                    handleDelete([{ dataIndex: dataIndex }]);
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </div>
              <div align={'left'} className={classes.grdCellNone}>
                <IconButton
                  aria-label="edit"
                  onClick={() => handleOpen(data[dataIndex])}
                >
                  <EditIcon />
                </IconButton>
              </div>
            </div>
          );
        },
      },
    },
    {
      name: 'correspondent',
      label: 'Correspondent',
    },
    {
      name: 'accountNo',
      label: 'Account No',
      options: {
        customBodyRenderLite: (dataIndex) => {
          const v = data[dataIndex].accountNo;

          return (
            <div className={v === '' ? classes.errBadge : null}>
              {v === '' ? 'Missing Value' : v}
            </div>
          );
        },
      },
    },
    {
      name: 'subAccountNo',
      label: 'Sub Account No',
    },
    {
      name: 'contraCorrespondent',
      label: 'Contra Correspondent',
      options: {
        display:
          tableTitle === 'Trade' ||
          tableTitle === 'Cash Movement' ||
          tableTitle === 'Cash and/or Position Movement' ||
          tableTitle === 'All'
            ? true
            : false,
      },
    },
    {
      name: 'contraAccountNo',
      label: 'Contra Account No',
    },
    {
      name: 'contraSubAccountNo',
      label: 'Contra Sub Account No',
    },
    {
      name: 'entryType',
      label: 'Entry Type',
      options: {
        customBodyRenderLite: (dataIndex) => {
          const v = data[dataIndex].entryType;

          return (
            <div className={v === '' ? classes.errBadge : null}>
              {v === '' ? 'Missing Value' : v}
            </div>
          );
        },
      },
    },
    {
      name: 'tradeDate',
      label: 'Trade Date',
      options: {
        display: tableTitle === 'Trade' || tableTitle === 'All' ? true : false,
        customBodyRenderLite: (dataIndex) => {
          const v = data[dataIndex].tradeDate
            ? moment(data[dataIndex].tradeDate).format('YYYY-MM-DD')
            : '';

          return (
            <div className={v === '' ? classes.errBadge : null}>
              {v === '' ? 'Missing Value' : v}
            </div>
          );
        },
      },
    },
    {
      name: 'settleDate',
      label: 'Settle Date',
      options: {
        customBodyRenderLite: (dataIndex) => {
          const v = data[dataIndex].settleDate
            ? moment(data[dataIndex].settleDate).format('YYYY-MM-DD')
            : '';
          return <div>{v}</div>;
        },
      },
    },
    {
      name: 'symbol',
      label: 'Symbol',
      options: {
        display:
          tableTitle === 'Trade' ||
          tableTitle === 'Position Movement' ||
          tableTitle === 'Cash and/or Position Movement' ||
          tableTitle === 'All'
            ? true
            : false,
        customBodyRenderLite: (dataIndex) => {
          const v = data[dataIndex].symbol;
          const e = data[dataIndex].entryType;

          if (e !== 'ACATC' &&
              e !== 'CSD' &&
              e !== 'CSW' &&
              e !== 'INT' &&
              e !== 'JNLC' && 
              e !== 'PTC' &&
              e !== 'PTR' &&
              e !== 'FEE') {
                return (
                  <div className={v === '' ? classes.errBadge : null}>
                    {v === '' ? 'Missing Value' : v}
                  </div>
                );
          } else {
            return (
              <div>
                {v}
              </div>
            );
          }

          
        },
      },
    },
    {
      name: 'side',
      label: 'Side',
      options: {
        display: tableTitle === 'Trade' || tableTitle === 'All' ? true : false,
        customBodyRenderLite: (dataIndex) => {
          if (tableTitle === 'Trade') {
            const v = data[dataIndex].side;

            return (
              <div className={v === '' ? classes.errBadge : null}>
                {v === '' ? 'Missing Value' : v}
              </div>
            );
          }
        },
      },
    },
    {
      name: 'qty',
      label: 'Qty',
      options: {
        display:
          tableTitle === 'Trade' ||
          tableTitle === 'Position Movement' ||
          tableTitle === 'Cash and/or Position Movement' ||
          tableTitle === 'All'
            ? true
            : false,
      },
      customBodyRenderLite: (dataIndex) => {
        const v = data[dataIndex].qty;

        return (
          <div align="right" className={v === '' ? classes.errBadge : null}>
            {v === '' ? 'Missing Value' : v}
          </div>
        );
      },
    },
    {
      name: 'price',
      label: 'Price',
      options: {
        display:
          tableTitle === 'Trade' ||
          tableTitle === 'Position Movement' ||
          tableTitle === 'Cash and/or Position Movement' ||
          tableTitle === 'All'
            ? true
            : false,
        customBodyRenderLite: (dataIndex) => {
          const v = data[dataIndex].price;

          return (
            <div align="right" className={v === '' ? classes.errBadge : null}>
              {v === '' ? 'Missing Value' : v}
            </div>
          );
        },
      },
    },
    {
      name: 'commission',
      label: 'Commission',
      options: {
        display:
          tableTitle === 'Trade' ||
          tableTitle === 'Position Movement' ||
          tableTitle === 'Cash and/or Position Movement' ||
          tableTitle === 'All'
            ? true
            : false,
      },
    },
    {
      name: 'grossAmt',
      label: 'Gross Amt',
      options: {
        display: tableTitle === 'Trade' || tableTitle === 'All' ? true : false,
        options: {
          customBodyRenderLite: (dataIndex) => {
            const v = data[dataIndex].grossAmt;

            return <div align="right">{v}</div>;
          },
        },
      },
    },
    {
      name: 'description',
      label: 'Description',
    },
    {
      name: 'externalId',
      label: 'External ID',
      options: {
        display:
          tableTitle === 'Trade' ||
          tableTitle === 'Cash Movement' ||
          tableTitle === 'All'
            ? true
            : false,
      },
    },
    {
      name: 'executingVenue',
      label: 'Executing Venue',
      options: {
        display: tableTitle === 'Trade' || tableTitle === 'All' ? true : false,
        customBodyRenderLite: (dataIndex) => {
          const v = data[dataIndex].executingVenue;

          return (
            <div align="right" className={v === '' ? classes.errBadge : null}>
              {v === '' ? 'Missing Value' : v}
            </div>
          );
        },
      },
    },
    {
      name: 'orderId',
      label: 'Order ID',
      options: {
        display: tableTitle === 'Trade' || tableTitle === 'All' ? true : false,
      },
    },
    {
      name: 'capacity',
      label: 'Capacity',
      options: {
        display: tableTitle === 'Trade' || tableTitle === 'All' ? true : false,
        customBodyRenderLite: (dataIndex) => {
          const v = data[dataIndex].capacity;

          return (
            <div align="right" className={v === '' ? classes.errBadge : null}>
              {v === '' ? 'Missing Value' : v}
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
    filterType: 'select',
    download: true,
    filter: true,
    search: false,
    print: false,
    sort: true,
    viewColumns: true,
    selectableRows: 'none',
    onDownload: (buildHead, buildBody, columns, values) => {
      downloadExcelData(fileName, columns, values);
      return false;
    },
  };

  return (
    <div className={classes.root}>
      <Box component="div">
        <Table
          style={{ background: 'red' }}
          title={'Batch Transaction: ' + tableTitle}
          data={data}
          columns={columns}
          options={options}
        />
      </Box>
      {isEdit && (
        <TransactionUploadEditModal
          onClose={handleClose}
          open={isEdit}
          value={editData}
        ></TransactionUploadEditModal>
      )}
    </div>
  );
}
