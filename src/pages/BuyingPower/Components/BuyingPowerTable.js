import React, { useState, useEffect } from 'react';
import { Button, Box, TextField } from '@material-ui/core';
import { notifyInfo, notifyError } from 'components/Notification/Notification';
import {
  Visibility as ViewIcon,
  VisibilityOff as VisibilityOffIcon,
} from '@material-ui/icons';
import SearchButton from '../../../components/Button/Search';
import QueryParam from '../../../services/QueryParamService';
import { getTradeDate } from '../../../services/ProfileService';
import useStyles from '../../../styles';
import Table, { columnType } from 'components/Table/Table';
import SelectCorrespondent from '../../../components/AutoComplete/SelectCorrespondent';
import SelectMasterAccountNo from '../../../components/AutoComplete/SelectMasterAccountNo';
import SelectAccountName from '../../../components/AutoComplete/SelectAccountName';
import { listBuyingPower } from '../../../services/BuyingPowerService';

export default function BuyingPowerTable() {
  const classes = useStyles();

  useEffect(
    () => {
      async function init() {
        if (searchData.fromDate && searchData.toDate) return;

        const tradeDate = await getTradeDate();
        const copy = { ...searchData };

        if (!searchData.fromDate) {
          copy.fromDate = tradeDate;
        }

        if (!searchData.toDate) {
          copy.toDate = tradeDate;
        }

        setSearchData(copy);
      }

      init();
    },
    // eslint-disable-next-line
    []
  );

  const options = {
    selectableRows: 'none',
  };

  const columns = [
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
      name: 'equity',
      label: 'Equity',
      type: columnType.amount,
      options: {
        display: false,
      },
    },
    {
      name: 'exchangeReq',
      label: 'Exchang eReq',
      type: columnType.amount,
      options: {
        display: false,
      },
    },
    {
      name: 'multiplier',
      label: 'Multiplier',
      type: columnType.quantity,
      options: {
        display: false,
      },
    },
    {
      name: 'percentDeduction',
      label: 'Percent Deduction',
      type: columnType.percentage,
    },
    {
      name: 'openingBuyingPower',
      label: 'Opening Buying Power',
      type: columnType.amount,
      options: {
        display: false,
      },
    },
    {
      name: 'deposit',
      label: 'Deposit',
      type: columnType.amount,
      options: {
        display: false,
      },
    },
    {
      name: 'buyingPower',
      label: 'Buying Power',
      type: columnType.amount,
    },
    {
      name: 'buyingPowerUsed',
      label: 'Buying Power Used',
      type: columnType.amount,
    },
    {
      name: 'buyingPowerCall',
      label: 'Buying Power Call',
      type: columnType.amount,
    },
    {
      name: 'buyingPowerPercent',
      label: 'Buying Power Percent',
      type: columnType.percentage,
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
  const [origRows, setOrigRows] = useState([]);
  const [showZeroValues, setShowZeroValues] = React.useState(true);
  const [searchData, setSearchData] = React.useState(
    QueryParam.get({
      fromDate: '',
      toDate: '',
      correspondent: '',
      masterAccountNo: '',
      accountName: '',
    })
  );

  useEffect(() => {
    setRows(filterZeroValues(origRows));
    // eslint-disable-next-line
  }, [showZeroValues]);

  const filterZeroValues = (list) => {
    if (showZeroValues) {
      return [...list];
    }

    const filteredRows = list.filter((row) => {
      return row.buyingPowerUsed !== '0';
    });

    return [...filteredRows];
  };

  const handleChange = (e, checkboxValue) => {
    const input = e.currentTarget.name ? e.currentTarget : e.target;

    setSearchData({
      ...searchData,
      [input.name]: checkboxValue !== undefined ? checkboxValue : input.value,
    });
  };

  const handleSearch = async () => {
    try {
      setLoading(true);
      QueryParam.set(searchData);
      const data = await listBuyingPower(searchData);
      setOrigRows(data.buyingPowersList);
      const filteredRows = filterZeroValues(data.buyingPowersList);
      setRows(filteredRows);
      notifyInfo(data.buyingPowersList.length + ' search results.');
    } catch (error) {
      console.error(error);
      notifyError(error.message);
    } finally {
      setLoading(false);
    }
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
                  name="fromDate"
                  label="From Date"
                  type="date"
                  value={searchData.fromDate}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <TextField
                  fullWidth
                  name="toDate"
                  label="To Date"
                  type="date"
                  value={searchData.toDate}
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
                  onChange={handleChange}
                ></SelectMasterAccountNo>
              </div>
              <div className={classes.grdCell1}>
                <SelectAccountName
                  freeSolo={true}
                  name="accountName"
                  label="Account Name"
                  value={searchData.accountName}
                  onChange={handleChange}
                ></SelectAccountName>
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
          <div className={classes.grdCellNone}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              startIcon={showZeroValues ? <ViewIcon /> : <VisibilityOffIcon />}
              onClick={() => {
                setShowZeroValues(showZeroValues ? false : true);
              }}
            >
              {showZeroValues ? 'Hide' : 'Show'} Zero Values
            </Button>
          </div>
        </div>
      </Box>
      <Box component="div" mt={2}>
        <Table
          title="Buying Power"
          data={rows}
          columns={columns}
          options={options}
        />
      </Box>
    </div>
  );
}
