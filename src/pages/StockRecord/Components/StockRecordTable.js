import React, { useState, useEffect } from 'react';
import {
  listStockRecord,
  listStockRecordDetails,
} from '../../../services/StockRecordService';
import { getSystemDate } from '../../../services/ProfileService';
import { notifyInfo, notifyError } from 'components/Notification/Notification';
import { Box, TextField, IconButton, InputLabel } from '@material-ui/core';
import Table, { columnType } from 'components/Table/Table';
import { Visibility as ViewIcon } from '@material-ui/icons';
import useStyles from '../../../styles';
import QueryParam from '../../../services/QueryParamService';
import SelectSymbol from '../../../components/AutoComplete/SelectSymbol';
import SelectCusip from '../../../components/AutoComplete/SelectCusip';
import AssetTypeSelect from 'components/Dropdown/AssetType';
import SearchButton from '../../../components/Button/Search';
import StockRecordDetailsTable from './StockRecordDetailsTable';
export default function StockBorrowTable({ params }) {
  const classes = useStyles();

  const options = {
    serverSide: true,
    selectableRows: 'none',
  };

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
                  aria-label="details"
                  onClick={() => {
                    setRowData(rows[dataIndex]);
                    setOpen(true);
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
      name: 'settleDate',
      label: 'Settle Date',
      type: columnType.date,
      options: {
        display: false,
      },
    },
    {
      name: 'originalCusip',
      label: 'Original Cusip',
      options: {
        display: false,
      },
    },
    {
      name: 'assetType',
      label: 'Asset Type',
      options: {
        display: false,
      },
    },
    {
      name: 'symbol',
      label: 'Symbol',
    },
    {
      name: 'cusip',
      label: 'Cusip',
      options: {
        display: false,
      },
    },
    {
      name: 'symbolDescription',
      label: 'Symbol Description',
      options: {
        display: false,
      },
    },
    {
      name: 'clientQty',
      label: 'Client Qty',
      type: columnType.quantity,
    },
    {
      name: 'segQty',
      label: 'Seg Qty',
      type: columnType.quantity,
    },
    {
      name: 'excessMarginQty',
      label: 'Excess Margin Qty',
      type: columnType.quantity,
    },
    {
      name: 'cnsQty',
      label: 'CNS Qty',
      type: columnType.quantity,
    },
    {
      name: 'dtccQty',
      label: 'DTCC Qty',
      type: columnType.quantity,
    },
    {
      name: 'ftrQty',
      label: 'FTR Qty',
      type: columnType.quantity,
    },
    {
      name: 'ftdQty',
      label: 'FTD Qty',
      type: columnType.quantity,
    },
    {
      name: 'loanQty',
      label: 'Loan Qty',
      type: columnType.quantity,
    },
    {
      name: 'borrowQty',
      label: 'Borrow Qty',
      type: columnType.quantity,
    },
    {
      name: 'suspenseQty',
      label: 'Suspense Qty',
      type: columnType.quantity,
    },
    {
      name: 'otherQty',
      label: 'Other Qty',
      type: columnType.quantity,
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

  const [pagination, setPagination] = useState({});
  const [rowData, setRowData] = React.useState({});
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [showFilter, setShowFilter] = React.useState(true);
  const [rows, setRows] = useState([]);
  const [searchData, setSearchData] = React.useState(
    QueryParam.get({
      settleDate: '',
      symbol: '',
      cusip: '',
      assetType: '',
    })
  );

  const handleChange = (e) => {
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
        pageNo: paginationChange === true ? pagination.pageNo : 1,
		    rowsPerPage: pagination.rowsPerPage || 50,
      };

      const data = await listStockRecord(searchData, paginationCopy);
      setRows(data.stockRecordsList);
      if (paginationChange !== true) {
        notifyInfo(data.totalRows + ' search results.');
      }
     
      paginationCopy.count = data.totalRows;
      setPagination(paginationCopy);

    } catch (error) {
      console.error(error);
      notifyError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
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
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <InputLabel shrink>Asset Type</InputLabel>
                <AssetTypeSelect
                  freeSolo={true}
                  name="assetType"
                  label="Asset Type"
                  value={searchData.assetType}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
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
          title={'Stock Record'}
          data={rows}
          columns={columns}
          options={options}
          onSearch={handleSearch}
          pagination={pagination}
          setPagination={setPagination}
        />
      </Box>
      {open && (
        <StockRecordDetailsTable
          onClose={handleClose}
          open={open}
          value={rowData}
        ></StockRecordDetailsTable>
      )}
    </div>
  );
}
