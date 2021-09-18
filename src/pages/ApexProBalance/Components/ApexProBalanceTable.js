import React, { useState, useEffect } from 'react';
import { Box, TextField } from '@material-ui/core';
import { notifyInfo, notifyError } from 'components/Notification/Notification';
import { listBalance } from '../../../services/ApexProBalanceService';
import SearchButton from '../../../components/Button/Search';
import { getSystemDate } from '../../../services/ProfileService';
import QueryParam from '../../../services/QueryParamService';
import Table, { columnType } from 'components/Table/Table';
import useStyles from '../../../styles';
import SelectAccountNo from '../../../components/AutoComplete/SelectAccountNo';

export default function ApexProBalanceTable() {
  const classes = useStyles();
  //Set value of system date search parameter
  useEffect(
    () => {
      async function init() {
        if (searchData.systemDate) return;

        const systemDate = await getSystemDate();
        setSearchData({ ...searchData, systemDate: systemDate });
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
      systemDate: '',
    })
  );

  const columns = [
    {
      name: 'systemDate',
      label: 'System Date',
      type: columnType.date,
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
      name: 'accountType',
      label: 'Account Type',
    },
    {
      name: 'cashBalance',
      label: 'Cash Balance',
      type: columnType.amount,
      addFooter: true,
    },
    {
      name: 'longMarketValue',
      label: 'Long Market Value',
      type: columnType.amount,
      addFooter: true,
    },
    {
      name: 'shortMarketValue',
      label: 'Short Market Value',
      type: columnType.amount,
      addFooter: true,
    },
    {
      name: 'equity',
      label: 'Equity',
      type: columnType.amount,
      addFooter: true,
    },
    {
      name: 'exchangeReq',
      label: 'Exchange Req',
      type: columnType.amount,
      addFooter: true,
    },
    {
      name: 'houseReq',
      label: 'House Req',
      type: columnType.amount,
      addFooter: true,
    },
    {
      name: 'sma',
      label: 'SMA',
      type: columnType.amount,
      addFooter: true,
    },
    {
      name: 'multiplier',
      label: 'Multiplier',
      type: columnType.quantity,
    },
    {
      name: 'buyingPower',
      label: 'Buying Power',
      type: columnType.amount,
      addFooter: true,
    },
    {
      name: 'previousDateBuyingPower',
      label: 'Previous Date Buying Power',
      type: columnType.amount,
      addFooter: true,
    },
    {
      name: 'previousDateBuyingPowerUsed',
      label: 'Previous Date Buying Power Used',
      type: columnType.amount,
      addFooter: true,
    },
    {
      name: 'previousDateCallAmt',
      label: 'Previous Date Call Amt',
      type: columnType.amount,
      addFooter: true,
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
      const data = await listBalance(searchData);
      setRows(data.balancesList);
      notifyInfo(data.balancesList.length + ' search results.');
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
                <TextField
                  name="systemDate"
                  fullWidth
                  label="System Date"
                  type="date"
                  value={searchData.systemDate}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectAccountNo
                  freeSolo={true}
                  name="accountNo"
                  label="Account No"
                  value={searchData.accountNo}
                  correspondent=""
                  onChange={handleChange}
                  allowInputChange={true}
                ></SelectAccountNo>
              </div>
              <div
                className={classes.grdCell1}
                style={{ marginRight: 30 }}
              ></div>
              <div
                className={classes.grdCell1}
                style={{ marginRight: 30 }}
              ></div>
              <div
                className={classes.grdCell1}
                style={{ marginRight: 30 }}
              ></div>
              <div className={classes.grdCell1}></div>
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
          title="APEXPRO BALANCE"
          data={rows}
          columns={columns}
          options={options}
        />
      </Box>
    </div>
  );
}
