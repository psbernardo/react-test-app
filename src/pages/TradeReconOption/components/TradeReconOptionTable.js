import React, { useState } from 'react';
import { notifyInfo, notifyError } from 'components/Notification/Notification';
import { listTradeRecon } from '../../../services/TradeReconOptionService';
import { Box, TextField } from '@material-ui/core';
import Table, { columnType } from 'components/Table/Table';
import useStyles from '../../../styles';
import SelectSymbol from '../../../components/AutoComplete/SelectSymbol';
import SearchButton from '../../../components/Button/Search';
import QueryParam from '../../../services/QueryParamService';

export default function TradeReconOptionTable({ params }) {
  const classes = useStyles();

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
            ></div>
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
      name: 'mpid',
      label: 'MPID',
    },
    {
      name: 'symbol',
      label: 'Symbol',
      // options: {
      //   display: false,
      // },
    },
    {
      name: 'side',
      label: 'Side',
    },
    {
      name: 'trdQty',
      label: 'Trade Qty',
    },
    {
      name: 'occQty',
      label: 'Occ Qty',
    },
    {
      name: 'trdPrice',
      label: 'Trade Price',
    },
    {
      name: 'occPrice',
      label: 'OCC Price',
    },
    {
      name: 'trdAmt',
      label: 'Trade Amount',
    },
    {
      name: 'occAmt',
      label: 'OCC Amount',
    },
    {
      name: 'qtyDiff',
      label: 'Qty Diff',
    },
    {
      name: 'moneyDiff',
      label: 'Money Diff',
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
    selectableRows: 'none',
  };

  const [rows, setRows] = useState([]);
  const [loading, setLoading] = React.useState(false);
  const [showFilter, setShowFilter] = React.useState(true);
  const [searchData, setSearchData] = React.useState(
    QueryParam.get({
      tradeDate: '',
      mpid: '',
      symbol: '',
    })
  );

  const handleChange = (e, x) => {
    const input = e.currentTarget.name ? e.currentTarget : e.target;

    setSearchData({
      ...searchData,
      [input.name]: input.value,
    });
  };

  const handleSearch = async () => {
    try {
      setLoading(true);
      QueryParam.set(searchData);
      const data = await listTradeRecon(searchData);
      setRows(data.tradeReconsList);
      notifyInfo(data.tradeReconsList.length + ' search results.');
    } catch (error) {
      console.error(error);
      notifyError(error.message);
    } finally {
      setLoading(false);
    }
  };
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
                  fullWidth
                  name="tradeDate"
                  label="Trade Date"
                  type="date"
                  value={searchData.tradeDate}
                  onChange={handleChange}
                  className={classes.textField}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <TextField
                  fullWidth
                  name="mpid"
                  label="Correspondent"
                  value={searchData.correspondent}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                />
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
          title={'Trade Recon Option'}
          data={rows}
          columns={columns}
          options={options}
        />
      </Box>
    </div>
  );
}
