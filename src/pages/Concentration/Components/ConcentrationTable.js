import React, { useState, useEffect } from 'react';
import ConcentrationModal from './ConcentrationModal';
import { TextField, Box, IconButton } from '@material-ui/core';
import { notifyInfo, notifyError } from 'components/Notification/Notification';
import { Visibility as DetailIcon } from '@material-ui/icons';
import SelectCusip from '../../../components/AutoComplete/SelectCusip';
import SelectSymbol from 'components/AutoComplete/SelectSymbol';
import SearchButton from '../../../components/Button/Search';
import QueryParam from '../../../services/QueryParamService';
import { listConcentration } from '../../../services/ConcentrationService';
import { getSystemDate } from '../../../services/ProfileService';
import { formatCurrency, formatDollar, formatQty } from 'lib/fmt';
import useStyles from '../../../styles';
import Table, { columnType } from 'components/Table/Table';

export default function ConcentrationTable() {
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
      name: 'settleDate',
      label: 'Settle Date',
      type: columnType.date,
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
      name: 'settleValue',
      label: 'Settle Value',
      type: columnType.amount,
      addFooter: true,
    },
    {
      name: 'excessMarginAmt',
      label: 'Excess Margin Amt',
      type: columnType.amount,
      addFooter: true,
    },
    {
      name: 'excessMarginSec',
      label: 'Excess Margin Sec',
      type: columnType.amount,
      addFooter: true,
    },
    {
      name: 'reserveReq',
      label: 'Reserve Req',
      type: columnType.amount,
      addFooter: true,
    },
    {
      name: 'segQty',
      label: 'Seg Qty',
      type: columnType.quantity,
      addFooter: true,
      options: {
        display: false,
      },
    },
    {
      name: 'excessMarginQty',
      label: 'Excess Margin Qty',
      type: columnType.quantity,
      addFooter: true,
      options: {
        display: false,
      },
    },
    {
      name: 'segAmt',
      label: 'Seg Amt',
      type: columnType.amount,
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

  const [pagination, setPagination] = useState({});
  const [footerData, setFooterData] = useState({});
  const [rowData, setRowData] = React.useState({});
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [showFilter, setShowFilter] = React.useState(true);
  const [rows, setRows] = useState([]);
  const [headData, setHeadData] = useState({
    marginDebit: '',
    markupMarketValue: '',
    threshold: '',
  });
  const [searchData, setSearchData] = React.useState(
    QueryParam.get({
      settleDate: '',
      symbol: '',
      cusip: '',
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

      const data = await listConcentration(searchData, paginationCopy);

      if (paginationChange !== true) {
        notifyInfo(data.summary.totalRows + ' search results.');
      }

      paginationCopy.count = data.summary.totalRows;
      setPagination(paginationCopy);
      setRows(data.concentrationsList);

      if (data.concentrationsList.length > 0) {
        setHeadData({
          marginDebit: data.concentrationsList[0].marginDebit,
          markupMarketValue: data.concentrationsList[0].markupMarketValue,
          threshold: data.concentrationsList[0].threshold,
        });
      }

      setFooterData({
        settleValue: formatDollar(data.summary.settleValue),
        excessMarginAmt: formatDollar(data.summary.excessMarginAmt),
        excessMarginSec: formatDollar(data.summary.excessMarginSec),
        reserveReq: formatDollar(data.summary.reserveReq),
        segQty: formatQty(data.summary.segQty),
        excessMarginQty: formatQty(data.summary.excessMarginQty),
        segAmt: formatDollar(data.summary.segAmt),
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
        settleDate: '',
        symbol: '',
        cusip: '',
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
        if (searchData.settleDate) return;

        const settleDate = await getSystemDate();
        setSearchData({ ...searchData, settleDate: settleDate });
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
    const data = await listConcentration(searchData);
    return data.concentrationsList;
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
                  name="settleDate"
                  label="Settle Date"
                  type="date"
                  value={searchData.settleDate}
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
              <div className={classes.grdCell1}>
                <SelectCusip
                  freeSolo={true}
                  name="cusip"
                  label="Cusip"
                  value={searchData.cusip}
                  onChange={handleChange}
                />
              </div>
              <div className={classes.grdCell1}></div>
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
          <div className={classes.grdCellNone}>
            <div className={classes.grdRow} style={{ margin: 0 }}>
              <div className={classes.grdCellNone} style={{ marginRight: 30 }}>
                <label>Margin Debit</label>
                <div style={{ fontWeight: 700 }}>
                  {formatCurrency(headData.marginDebit)}
                </div>
              </div>
              <div className={classes.grdCellNone} style={{ marginRight: 30 }}>
                <label>140% Market Value</label>
                <div style={{ fontWeight: 700 }}>
                  {formatCurrency(headData.markupMarketValue)}
                </div>
              </div>
              <div className={classes.grdCellNone}>
                <label>15% Threshold</label>
                <div style={{ fontWeight: 700 }}>
                  {formatCurrency(headData.threshold)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Box>
      <Box component="div" mt={2}>
        <Table
          title="Concentration"
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
        <ConcentrationModal
          onClose={handleClose}
          open={open}
          value={rowData}
        ></ConcentrationModal>
      )}
    </div>
  );
}
