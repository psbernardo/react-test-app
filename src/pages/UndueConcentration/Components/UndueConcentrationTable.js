import React, { useState, useEffect } from 'react';
import UndueConcentrationModal from './UndueConcentrationModal';
import { TextField, Box, IconButton } from '@material-ui/core';
import { notifyInfo, notifyError } from 'components/Notification/Notification';
import { Visibility as DetailIcon } from '@material-ui/icons';
import SelectCusip from '../../../components/AutoComplete/SelectCusip';
import SelectSymbol from 'components/AutoComplete/SelectSymbol';
import SelectGroupBy from 'components/Dropdown/SelectGroupBy';
import SearchButton from '../../../components/Button/Search';
import QueryParam from '../../../services/QueryParamService';
import { listUndueConcentration } from '../../../services/UndueConcentrationService';
import { getPreviousDate } from '../../../services/ProfileService';
import { formatQty, formatPercentage, formatDollar } from 'lib/fmt';
import useStyles from '../../../styles';
import Table, { columnType } from 'components/Table/Table';

export default function UndueConcentrationTable() {
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
            >
              <div align={'left'} className={classes.grdCell1}>
                <IconButton
                  aria-label="edit"
                  onClick={() => handleOpen(rows[dataIndex])}
                >
                  <DetailIcon />
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
      name: 'branch',
      label: 'Branch',
    },
    {
      name: 'accountNo',
      label: 'Account No',
    },
    {
      name: 'masterAccountNo',
      label: 'Master Account No',
    },
    {
      name: 'rep',
      label: 'Rep',
    },
    {
      name: 'adjustedBalance',
      label: 'Adjusted Balance',
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
      name: 'originalCusip',
      label: 'Original Cusip',
    },
    {
      name: 'symbol',
      label: 'Symbol',
    },
    {
      name: 'cusip',
      label: 'Cusip',
    },
    {
      name: 'volume',
      label: 'Volume',
      type: columnType.quantity,
      addFooter: true,
    },
    {
      name: 'qty',
      label: 'Qty',
      type: columnType.quantity,
      addFooter: true,
    },
    {
      name: 'sharePercent',
      label: 'Share Percent',
      type: columnType.percentage,
      addFooter: true,
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
      addFooter: true,
    },
    {
      name: 'cashPercent',
      label: 'Cash Percent',
      type: columnType.percentage,
      addFooter: true,
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

  const [pagination, setPagination] = useState({});
  const [footerData, setFooterData] = useState({});
  const [rowData, setRowData] = React.useState({});
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [showFilter, setShowFilter] = React.useState(true);
  const [rows, setRows] = useState([]);
  const [searchData, setSearchData] = React.useState(
    QueryParam.get({
      tradeDate: '',
      symbol: '',
      cusip: '',
      groupby: '',
    })
  );

  const handleChange = (e, x) => {
    const input = e.currentTarget.name ? e.currentTarget : e.target;

    setSearchData({
      ...searchData,
      [input.name]: input.value,
    });
  };

  const handleSearch = async (paginationChange) => {
    try {
      setLoading(true);
      QueryParam.set(searchData);

      let paginationCopy = {
        ...pagination,
        reload: false,
        pageNo: paginationChange === true ? pagination.pageNo : 0,
      };

      const data = await listUndueConcentration(searchData, paginationCopy);

      if (paginationChange !== true) {
        notifyInfo(data.summary.totalRows + ' search results.');
      }

      paginationCopy.count = data.summary.totalRows;
      setPagination(paginationCopy);
      setRows(data.undueConcentrationsList);

      setFooterData({
        adjustedBalance: formatDollar(data.summary.adjustedBalance),
        equity: formatDollar(data.summary.equity),
        qty: formatQty(data.summary.qty),
        sharePercent: formatPercentage(data.summary.sharePercent),
        marketValue: formatDollar(data.summary.marketValue),
        cashPercent: formatPercentage(data.summary.cashPercent),
        volume: formatQty(data.summary.volume),
      });
    } catch (error) {
      notifyError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleOpen = (data) => {
    if (!data) {
      data = {
        tradeDate: '',
        masterAccountNo: '',
      };
    }

    setRowData(data);
    setOpen(true);
  };

  const handleClose = async () => {
    setOpen(false);
  };

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

  const options = {
    serverSide: true,
    selectableRows: 'none',
  };

  const getCsvData = async () => {
    const data = await listUndueConcentration(searchData);
    return data.undueConcentrationsList;
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
                <SelectSymbol
                  freeSolo={true}
                  name="symbol"
                  label="Symbol"
                  value={searchData.symbol}
                  onChange={handleChange}
                />
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectCusip
                  freeSolo={true}
                  name="cusip"
                  label="Cusip"
                  value={searchData.cusip}
                  onChange={handleChange}
                />
              </div>
              <div className={classes.grdCell1}>
                <SelectGroupBy
                  name="groupby"
                  label="Group By"
                  value={searchData.groupby}
                  onChange={handleChange}
                />
              </div>
              <div className={classes.grdCell1}></div>
              <div className={classes.grdCell1}></div>
            </div>
          </div>
        ) : null}
        <div className={classes.actionContainer}>
          <div className={classes.grdCell1}>
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
          title="Undue Concentration"
          data={rows}
          columns={columns}
          options={options}
          footerData={footerData}
          onSearch={handleSearch}
          pagination={pagination}
          setPagination={setPagination}
          getCsvData={getCsvData}
        />
      </Box>
      {open && (
        <UndueConcentrationModal
          onClose={handleClose}
          open={open}
          value={rowData}
        ></UndueConcentrationModal>
      )}
    </div>
  );
}
