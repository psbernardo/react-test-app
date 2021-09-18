import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone';
import { formatPbDate } from 'lib/fmt';
import {
  Box,
  FormControlLabel,
  Checkbox,
  IconButton,
  TextField,
} from '@material-ui/core';
import { Visibility as ViewIcon } from '@material-ui/icons';
import { notifyInfo, notifyError } from 'components/Notification/Notification';
import { listRequirement } from '../../../services/MarginRequirementService';
import SearchButton from '../../../components/Button/Search';
import SelectCorrespondent from '../../../components/AutoComplete/SelectCorrespondent';
import SelectMasterAccountNo from '../../../components/AutoComplete/SelectMasterAccountNo';
import SelectAccountName from '../../../components/AutoComplete/SelectAccountName';
import { getPreviousDate } from '../../../services/ProfileService';
import QueryParam from '../../../services/QueryParamService';
import useStyles from '../../../styles';
import Table, { columnType } from 'components/Table/Table';

export default function MarginRequirementTable({ params }) {
  const classes = useStyles();

  useEffect(
    () => {
      async function init() {
        if (searchData.tradeDate) return;

        const tradeDate = await getPreviousDate();
        setSearchData({ ...searchData, tradeDate: tradeDate });
      }

      init();
    },
    // eslint-disable-next-line
    []
  );

  const [rows, setRows] = useState([]);
  const [loading, setLoading] = React.useState(false);
  const [showFilter, setShowFilter] = React.useState(true);
  const [searchData, setSearchData] = React.useState(
    QueryParam.get({
      correspondent: '',
      accountName: '',
      accountNo: '',
      broker: '',
      masterAccountNo: '',
      type: '',
      tradeDate: '',
      exchangeCall: false,
      fedCall: false,
      houseCall: false,
      buyingPowerCall: false,
      minBalanceCall: false,
    })
  );

  const columns = [
    {
      name: '',
      type: columnType.buttons,
      options: {
        customBodyRenderLite: (dataIndex) => {
          return (
            <div
              align={'left'}
              className={classes.grdRow}
              style={{ margin: 0, padding: 0 }}
            >
              <div align={'left'} className={classes.grdCell1}>
                <IconButton
                  aria-label="view"
                  onClick={() => {
                    const tradeDate = moment(
                      new Date(formatPbDate(rows[dataIndex].tradeDate))
                    ).format('yyyy-MM-DD');

                    const paramPath =
                      '/margin-interest/margin-requirement-details/' +
                      tradeDate +
                      '/' +
                      rows[dataIndex].masterAccountNo;

                    window.open(paramPath, '_blank');
                  }}
                >
                  <ViewIcon />
                </IconButton>
              </div>
            </div>
          );
        },
      },
    },
    {
      name: 'tradeDate',
      label: 'Trade Date',
      type: columnType.date,
    },
    {
      name: 'correspondent',
      label: 'Correspondent',
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
      name: 'cashBalance',
      label: 'Cash Balance',
      type: columnType.amount,
      addFooter: true,
      options: {
        display: false,
      },
    },
    {
      name: 'longMarketValue',
      label: 'Long Market Value',
      type: columnType.amount,
      addFooter: true,
      options: {
        display: false,
      },
    },
    {
      name: 'shortMarketValue',
      label: 'Short Market Value',
      type: columnType.amount,
      addFooter: true,
      options: {
        display: false,
      },
    },
    {
      name: 'equity',
      label: 'Equity',
      type: columnType.amount,
      addFooter: true,
    },
    {
      name: 'marketValue',
      label: 'Market Value',
      type: columnType.amount,
      addFooter: true,
      options: {
        display: false,
      },
    },
    {
      name: 'exchangeReq',
      label: 'Exchange Req',
      type: columnType.amount,
      addFooter: true,
    },
    {
      name: 'exchangeCall',
      label: 'Exchange Call',
      type: columnType.amount,
      addFooter: true,
    },
    {
      name: 'fedReq',
      label: 'Fed Req',
      type: columnType.amount,
      addFooter: true,
    },
    {
      name: 'fedCall',
      label: 'Fed Call',
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
      name: 'houseCall',
      label: 'House Call',
      type: columnType.amount,
      addFooter: true,
    },
    {
      name: 'buyingPowerCall',
      label: 'Buying Power Call',
    },
    {
      name: 'minBalanceCall',
      label: 'Min Balance Call',
      type: columnType.amount,
      addFooter: true,
    },
    {
      name: 'sma',
      label: 'SMA',
      type: columnType.amount,
      addFooter: true,
      options: {
        display: false,
      },
    },
    {
      name: 'buyingPower',
      label: 'Buying Power',
      options: {
        display: false,
      },
    },
    {
      name: 'multiplier',
      label: 'Multiplier',
      type: columnType.quantity,
      addFooter: true,
      options: {
        display: false,
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
    selectableRows: 'none',
  };

  const handleSearch = async () => {
    try {
      setLoading(true);

      QueryParam.set(searchData);
      const data = await listRequirement(searchData);
      setRows(data.requirementsList);
      notifyInfo(data.requirementsList.length + ' search results.');
    } catch (error) {
      notifyError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e, checkboxValue) => {
    const input = e.currentTarget.name ? e.currentTarget : e.target;

    setSearchData({
      ...searchData,
      [input.name]: checkboxValue !== undefined ? checkboxValue : input.value,
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
                  fullWidth
                  name="tradeDate"
                  label="Trade Date"
                  type="date"
                  value={searchData.tradeDate}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectCorrespondent
                  name="correspondent"
                  value={searchData.correspondent}
                  onChange={handleChange}
                ></SelectCorrespondent>
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectMasterAccountNo
                  name="masterAccountNo"
                  label="Master Account No"
                  value={searchData.masterAccountNo}
                  correspondent={searchData.correspondent}
                  onChange={handleChange}
                ></SelectMasterAccountNo>
              </div>
              <div className={classes.grdCell1}>
                <SelectAccountName
                  freeSolo={true}
                  label="Account Name"
                  name="accountName"
                  value={searchData.accountName}
                  onChange={handleChange}
                ></SelectAccountName>
              </div>
            </div>
            <div className={classes.grdRow}>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <FormControlLabel
                  control={<Checkbox color="primary" />}
                  name="exchangeCall"
                  checked={searchData.exchangeCall}
                  onChange={handleChange}
                  label="Exchange Call"
                />
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <FormControlLabel
                  control={<Checkbox color="primary" />}
                  name="fedCall"
                  label="Fed Call"
                  checked={searchData.fedCall}
                  onChange={handleChange}
                />
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <FormControlLabel
                  control={<Checkbox color="primary" />}
                  name="houseCall"
                  label="House Call"
                  checked={searchData.houseCall}
                  onChange={handleChange}
                />
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <FormControlLabel
                  control={<Checkbox color="primary" />}
                  name="buyingPowerCall"
                  label="Buying Power Call"
                  checked={searchData.buyingPowerCall}
                  onChange={handleChange}
                />
              </div>
              <div className={classes.grdCell1}>
                <FormControlLabel
                  control={<Checkbox color="primary" />}
                  name="minBalanceCall"
                  label="Min Balance Call"
                  checked={searchData.minBalanceCall}
                  onChange={handleChange}
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
          title={'MARGIN REQUIREMENT'}
          data={rows}
          columns={columns}
          options={options}
        />
      </Box>
    </div>
  );
}
