import React, { useState, useEffect } from 'react';
import {
  SegregationServiceClient,
  ListSegregationLockupRequest,
} from '../../../proto/reportpb/segregation_grpc_web_pb';
import useStyles from '../../../styles';
import { Box } from '@material-ui/core';
import Table, { columnType } from 'components/Table/Table';
import { notifyError, notifyInfo } from 'components/Notification/Notification';
import moment from 'moment-timezone';
import { formatPbDate, formatCurrency } from 'lib/fmt';
import { auth } from '../../../lib/auth/Auth';
const google_date = require('../../../google/type/date_pb.js');

const segregation = new SegregationServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export default function QuarterlyReportLockUpTable(props) {
  const classes = useStyles();

  const [rows, setRows] = useState([]);

  useEffect(() => {
    const settleDate = props.match.params.settleDate;
    const numberOrCusip = props.match.params.numberOrCusip;
    const type = props.match.params.type;

    let list = new ListSegregationLockupRequest();
    let gglSettleDate = new google_date.Date();
    let [y, m, d] = settleDate.split('-');
    gglSettleDate.setYear(y);
    gglSettleDate.setMonth(m);
    gglSettleDate.setDay(d);
    list.setSettleDate(gglSettleDate);

    if (type === 'Account') {
      list.setMasterAccountNo(numberOrCusip);
    }
    if (type === 'Symbol') {
      list.setOriginalCusip(numberOrCusip);
    }

    segregation.listSegregationLockup(list, {}, (err, res) => {
      if (err) {
        notifyError(err.message);
        return;
      }
      const rows = res.toObject().segregationLockupsList.map((data) => ({
        settleDate: formatPbDate(data.settleDate),
        masterAccountNo: data.masterAccountNo,
        accountName: data.accountName,
        originalCusip: data.originalCusip,
        cusip: data.cusip,
        symbol: data.symbol,
        symbolDescription: data.symbolDescription,
        quantity: data.quantity,
        closingPrice: formatCurrency(data.closingPrice),
        marketValue: formatCurrency(data.marketValue),
        previousSegQty: data.previousSegQty,
        previousMarginPaidQty: data.previousMarginPaidQty,
        previousShortPaidQty: data.previousShortPaidQty,
        segQty: data.segQty,
        marginPaidQty: data.marginPaidQty,
        shortPaidQty: data.shortPaidQty,
        segAmt: formatCurrency(data.segAmt),
        marginPaidAmt: formatCurrency(data.marginPaidAmt),
        shortPaidAmt: formatCurrency(data.shortPaidAmt),
      }));
      setRows(rows);
      notifyInfo(rows.length + ' search results.');
    });
  }, [
    props.match.params.settleDate,
    props.match.params.numberOrCusip,
    props.match.params.type,
  ]);

  const columns = [
    {
      name: 'settleDate',
      label: 'Settle Date',
    },
    {
      name: 'masterAccountNo',
      label: 'Master Account No',
    },
    {
      name: 'accountName',
      label: 'Account Name',
    },
    {
      name: 'originalCusip',
      label: 'Original Cusip',
    },
    {
      name: 'cusip',
      label: 'Cusip',
    },
    {
      name: 'symbol',
      label: 'Symbol',
    },
    {
      name: 'symbolDescription',
      label: 'Symbol Description',
    },
    {
      name: 'quantity',
      label: 'Quantity',
      type: columnType.quantity,
    },
    {
      name: 'closingPrice',
      label: 'Closing Price',
      type: columnType.amount,
    },
    {
      name: 'marketValue',
      label: 'Market Value',
      type: columnType.amount,
    },
    {
      name: 'previousSegQty',
      label: 'Previous Seg Qty',
      type: columnType.quantity,
    },
    {
      name: 'previousMarginPaidQty',
      label: 'Previous Margin Paid Qty',
      type: columnType.quantity,
    },
    {
      name: 'previousShortPaidQty',
      label: 'Previous Short Paid Qty',
      type: columnType.quantity,
    },
    {
      name: 'segQty',
      label: 'Seg Qty',
      type: columnType.quantity,
    },
    {
      name: 'marginPaidQty',
      label: 'Margin Paid Qty',
      type: columnType.quantity,
    },
    {
      name: 'shortPaidQty',
      label: 'Short Paid Qty',
      type: columnType.quantity,
    },
    {
      name: 'segAmt',
      label: 'Seg Amt',
      type: columnType.amount,
    },
    {
      name: 'marginPaidAmt',
      label: 'Margin Paid Amt',
      type: columnType.amount,
    },
    {
      name: 'shortPaidAmt',
      label: 'Short Paid Amt',
      type: columnType.amount,
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
    columnOrder: [
      0,
      1,
      2,
      3,
      4,
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
    ],
    filterType: 'select',
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
    downloadOptions: {
      filename: 'SegregationLockUp_' + moment().format('MMMM Do YYYY') + '.csv',
    },
  };

  return (
    <React.Fragment>
      <div className={classes.pageContainer}>
        <Box component="div">
          <Table
            title="QUARTERLY REPORT LOCK UP"
            data={rows}
            columns={columns}
            options={options}
          />
        </Box>
      </div>
    </React.Fragment>
  );
}
