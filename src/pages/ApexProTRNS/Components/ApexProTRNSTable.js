import React, { useState, useEffect } from 'react';
import { Box, TextField, IconButton } from '@material-ui/core';
import { Visibility as ViewIcon } from '@material-ui/icons';
import { notifyInfo, notifyError } from 'components/Notification/Notification';
import { listApexProTRNS } from '../../../services/ApexProTransactionService';
import SearchButton from '../../../components/Button/Search';
import { getSystemDate } from '../../../services/ProfileService';
import Table, { columnType } from 'components/Table/Table';
import useStyles from '../../../styles';
import QueryParam from '../../../services/QueryParamService';
import SelectAccountNo from '../../../components/AutoComplete/SelectAccountNo';
import { SelectEntryType } from '../../../components/AutoComplete/SelectSystemCode';
import SelectSymbol from '../../../components/AutoComplete/SelectSymbol';
import SelectSystemCode from '../../../components/Dropdown/SelectSystemCode';

export default function ApexProTRNSTable({ params }) {
  const classes = useStyles();

  useEffect(
    () => {
      async function init() {
        if (searchData.fromDate) return;
        if (searchData.toDate) return;

        const systemDate = await getSystemDate();
        setSearchData({ ...searchData, 
          fromDate: systemDate,
          toDate: systemDate, 
        });
      }

      init();
    },
    // eslint-disable-next-line
    []
  );

  const [rows, setRows] = useState([]);
  const [loading, setLoading] = React.useState(false);
  const [showFilter, setShowFilter] = React.useState(true);

  const [searchData, setSearchData] = useState(
    QueryParam.get({
      dateType: 'Trade Date',
      fromDate: '',
      toDate: '',
      accountNo: '',
      entryType: '',
      symbol: '',
    })
  );

  const columns = [
    {
      name: 'trNo',
      label: 'TR No',
    },
    {
      name: 'correspondent',
      label: 'Correspondent',
    },
    {
      name: 'branch',
      label: 'Branch',
    },
    {
      name: 'accountNo',
      label: 'Account No',
    },
    {
      name: 'accountName',
      label: 'Account Name',
    },
    {
      name: 'entryType',
      label: 'Entry Type',
    },
    {
      name: 'entryTypeDescription',
      label: 'Entry Type Description',
    },
    {
      name: 'side',
      label: 'Side',
    },
    {
      name: 'qty',
      label: 'Qty',
      type: columnType.quantity,
    },
    {
      name: 'symbol',
      label: 'Symbol',
    },
    {
      name: 'price',
      label: 'Price',
      type: columnType.amount,
    },
    {
      name: 'grossAmt',
      label: 'Gross Amount',
      type: columnType.amount,
    },
    {
      name: 'netAmt',
      label: 'Net Amount',
      type: columnType.amount,
    },
    {
      name: 'commission',
      label: 'Commission',
      type: columnType.amount,
    },
    {
      name: 'regFee',
      label: 'REG Fee',
      type: columnType.amount,
    },
    {
      name: 'exchangeFee',
      label: 'Exchange Fee',
      type: columnType.amount,
    },
    {
      name: 'tafFee',
      label: 'TAF Fee',
      type: columnType.amount,
    },
    {
      name: 'ecnFee',
      label: 'ECN Fee',
      type: columnType.amount,
    },
    {
      name: 'brokerFee',
      label: 'Broker Fee',
      type: columnType.amount,
    },
    {
      name: 'occFee',
      label: 'OCC Fee',
      type: columnType.amount,
    },
    {
      name: 'ptpFee',
      label: 'PTP Fee',
      type: columnType.amount,
    },
    {
      name: 'secFee_2',
      label: 'SEC Fee 2',
      type: columnType.amount,
    },
    {
      name: 'tefraFee',
      label: 'Tefra Fee',
      type: columnType.amount,
    },
    {
      name: 'fees',
      label: 'Fees',
      type: columnType.amount,
    },
    {
      name: 'brokerCode',
      label: 'Broker Code',
    },
    {
      name: 'contraCorrespondent',
      label: 'Contra Correspondent',
    },
    {
      name: 'contraBranch',
      label: 'Contra Branch',
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
      name: 'accountType',
      label: 'Account Type',
    },
    {
      name: 'subAccountNo',
      label: 'Sub Account No',
    },
    {
      name: 'description',
      label: 'Description',
    },
    {
      name: 'systemDate',
      label: 'System Date',
      type: columnType.date,
    },
    {
      name: 'entryTime',
      label: 'Entry Time',
      type: columnType.dateTime,
    },
    {
      name: 'tradeDate',
      label: 'Trade Date',
      type: columnType.date,
    },
    {
      name: 'settleDate',
      label: 'Settle Date',
      type: columnType.date,
    },
    {
      name: 'executeDate',
      label: 'Execute Date',
      type: columnType.date,
    },
    {
      name: 'cusip',
      label: 'Cusip',
    },
    {
      name: 'houseAccount',
      label: 'House Account',
    },
    {
      name: 'contraSource',
      label: 'Contra Source',
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
    selectableRows: 'none',
  };

  const handleSearch = async () => {
    try {
      setLoading(true);
      QueryParam.set(searchData);
      const data = await listApexProTRNS(searchData);
      setRows(data.transactionsList);
      notifyInfo(data.transactionsList.length + ' search results.');
    } catch (error) {
      notifyError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const input = e.currentTarget.name ? e.currentTarget : e.target;

    setSearchData({
      ...searchData,
      [input.name]: input.value,
    });
  };

  return (
    <div className={classes.root}>
      <Box component="div" mt={5}>
        {showFilter ? (
          <div>
            <div className={classes.grdRow}>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectSystemCode
                  name="dateType"
                  label="Date Type"
                  type="Date Type"
                  value={searchData.dateType}
                  onChange={handleChange}
                ></SelectSystemCode>
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <TextField
                  fullWidth
                  name="fromDate"
                  label="From Date"
                  type="date"
                  value={searchData.fromDate}
                  onChange={handleChange}
                  inputProps={{ max: searchData.toDate }}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className={classes.grdCell1}>
                <TextField
                  fullWidth
                  name="toDate"
                  label="To Date"
                  type="date"
                  value={searchData.toDate}
                  onChange={handleChange}
                  inputProps={{ min: searchData.fromDate }}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
            </div>
            <div className={classes.grdRow}>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectAccountNo
                  freeSolo={true}
                  name="accountNo"
                  label="Account No"
                  value={searchData.accountNo}
                  onChange={handleChange}
                ></SelectAccountNo>
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectEntryType
                  name="entryType"
                  label="Entry Type"
                  value={searchData.entryType}
                  onChange={handleChange}
                ></SelectEntryType>
              </div>
              <div className={classes.grdCell1}>
                <SelectSymbol
                  freeSolo={true}
                  name="symbol"
                  label="Symbol"
                  value={searchData.symbol}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
            </div>
          </div>
        ) : null}
        <div className={classes.actionContainer}>
          <div className={classes.grdCellNone}>
            <SearchButton
              onClick={handleSearch}
              loading={loading}
              showfilter={(status) => setShowFilter(status)}
            />
          </div>
        </div>
      </Box>
      <Box component="div" mt={2}>
        <Table
          title="ApexPro Transactions"
          data={rows}
          columns={columns}
          options={options}
        />
      </Box>
    </div>
  );
}
