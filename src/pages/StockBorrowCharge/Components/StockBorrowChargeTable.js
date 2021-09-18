import React, { useState, useEffect } from 'react';
import { listCharge } from '../../../services/StockBorrowChargeService';

import {
  notifyInfo,
  notifyError,
  notifySuccess,
} from 'components/Notification/Notification';

import { Box, TextField, Button } from '@material-ui/core';

import Table, { columnType } from 'components/Table/Table';
import useStyles from '../../../styles';
import SelectSymbol from '../../../components/AutoComplete/SelectSymbol';
import SearchButton from '../../../components/Button/Search';

import QueryParam from '../../../services/QueryParamService';
import { getSystemDate } from '../../../services/ProfileService';

import SelectAccountNo from '../../../components/AutoComplete/SelectAccountNo';
import SelectCorrespondent from '../../../components/AutoComplete/SelectCorrespondent';
import SelectCusip from '../../../components/AutoComplete/SelectCusip';

export default function StockBorrowChargeTable() {
  const classes = useStyles();

  const options = {
    selectableRows: 'none',
  };

  const columns = [
    {
      name: 'stockBorrowId',
      label: 'Stock Borrow ID',
      options: {
        display: false,
      },
    },
    {
      name: 'settleDate',
      label: 'Settle Date',
      type: columnType.date,
    },
    {
      name: 'borrowDate',
      label: 'Borrow Date',
      type: columnType.date,
    },
    {
      name: 'accountId',
      label: 'Account ID',
    },
    {
      name: 'correspondent',
      label: 'Correspondent',
    },
    {
      name: 'accountNo',
      label: 'Account No',
    },
    {
      name: 'originalCusip',
      label: 'Original Cusip',
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
      name: 'cusip',
      label: 'Cusip',
    },
    {
      name: 'qty',
      label: 'QTY',
      type: columnType.quantity,
    },
    {
      name: 'rate',
      label: 'Rate',
      type: columnType.percentage,
    },
    {
      name: 'fee',
      label: 'Fee',
      type: columnType.amount,
    },
    {
      name: 'age',
      label: 'Age',
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

  const [loading, setLoading] = React.useState(false);
  const [showFilter, setShowFilter] = React.useState(true);
  const [rows, setRows] = useState([]);
  const [searchData, setSearchData] = React.useState(
    QueryParam.get({
      settleDate: '',
      borrowDate: '',
      correspondent: '',
      accountNo: '',
      symbol: '',
      cusip: '',
    })
  );

  const handleChange = (e) => {
    const input = e.currentTarget.name ? e.currentTarget : e.target;

    setSearchData({
      ...searchData,
      [input.name]: input.value,
    });
  };

  const handleSearch = async () => {
    try {
      let valid = true;
      if (!searchData.settleDate) {
        notifyError('Settle Date is required.');
        valid = false;
      }

      if (!valid) {
        return;
      }
      setLoading(true);
      QueryParam.set(searchData);
      const data = await listCharge(searchData);
      setRows(data.chargesList);
      notifyInfo(data.chargesList.length + ' search results.');
    } catch (error) {
      console.error(error);
      notifyError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    async function initSystemDate() {
      let systemDate = await getSystemDate();
      setSearchData({
        ...searchData,
        settleDate: systemDate,
        borrowDate: systemDate,
      });
    }

    initSystemDate();
  }, []);

  /*=========================================================================================
  Table component
  ===========================================================================================*/
  return (
    <div className={classes.root}>
      <Box component="div" mt={5}>
        {showFilter ? (
          <div>
            <div className={classes.grdRow}>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <TextField
                  name="settleDate"
                  fullWidth
                  label="Settle Date"
                  type="date"
                  value={searchData.settleDate}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <TextField
                  name="borrowDate"
                  fullWidth
                  label="Borrow Date"
                  type="date"
                  value={searchData.borrowDate}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectCorrespondent
                  required={false}
                  freeSolo={true}
                  name="correspondent"
                  value={searchData.correspondent}
                  onChange={handleChange}
                ></SelectCorrespondent>
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectAccountNo
                  required={false}
                  freeSolo={true}
                  name="accountNo"
                  label="Account No"
                  value={searchData.accountNo}
                  correspondent={searchData.correspondent}
                  onChange={handleChange}
                  type=""
                ></SelectAccountNo>
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectSymbol
                  freeSolo={true}
                  name="symbol"
                  label="Symbol"
                  value={searchData.symbol}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectCusip
                  freeSolo={true}
                  name="cusip"
                  label="Cusip"
                  value={searchData.cusip}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
            </div>
          </div>
        ) : null}
        <div className={classes.actionContainer}>
          <div className={classes.grdCellNone} style={{ marginRight: 10 }}>
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
          title={'Stock Borrow Charge'}
          data={rows}
          columns={columns}
          options={options}
        />
      </Box>
    </div>
  );
}
