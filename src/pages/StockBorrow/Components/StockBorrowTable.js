import React, { useState, useEffect } from 'react';
import { listStockBorrow } from '../../../services/StockBorrowService';
import { getSystemDate } from '../../../services/ProfileService';
import { notifyInfo, notifyError } from 'components/Notification/Notification';
import { Box, TextField, IconButton } from '@material-ui/core';
import Table, { columnType } from 'components/Table/Table';
import { Visibility as ViewIcon } from '@material-ui/icons';
import useStyles from '../../../styles';
import QueryParam from '../../../services/QueryParamService';
import SelectSymbol from '../../../components/AutoComplete/SelectSymbol';
import SearchButton from '../../../components/Button/Search';
import StockBorrowDetailsTable from './StockBorrowDetailsTable';
export default function StockBorrowTable({ params }) {
  const classes = useStyles();

  const options = {
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
      name: 'systemDate',
      label: 'System Date',
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
      name: 'symbolDescription',
      label: 'Symbol Description',
    },
    {
      name: 'settlementObligation',
      label: 'Settlement Obligation',
      type: columnType.amount,
    },
    {
      name: 'borrowed',
      label: 'Borrowed',
      type: columnType.amount,
    },
    {
      name: 'loaned',
      label: 'Loaned',
      type: columnType.amount,
    },
    {
      name: 'freePosition',
      label: 'Free Position',
      type: columnType.amount,
    },
    {
      name: 'needToReturn',
      label: 'Need To Returm',
      type: columnType.amount,
    },
    {
      name: 'originalCusip',
      label: 'Original Cusip',
      options: {
        display: false,
      },
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

  const [rowData, setRowData] = React.useState({});
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [showFilter, setShowFilter] = React.useState(true);
  const [rows, setRows] = useState([]);
  const [searchData, setSearchData] = React.useState(
    QueryParam.get({
      systemDate: '',
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
      setLoading(true);
      QueryParam.set(searchData);
      const data = await listStockBorrow(searchData);
      setRows(data.stockBorrowsList);
      notifyInfo(data.stockBorrowsList.length + ' search results.');
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
        if (searchData.systemDate) return;

        const systemDate = await getSystemDate();
        setSearchData({ ...searchData, systemDate: systemDate });
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
                <TextField
                  name="cusip"
                  fullWidth
                  label="Cusip"
                  value={searchData.cusip}
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
          title={'Stock Borrow'}
          data={rows}
          columns={columns}
          options={options}
        />
      </Box>
      {open && (
        <StockBorrowDetailsTable
          onClose={handleClose}
          open={open}
          value={rowData}
        ></StockBorrowDetailsTable>
      )}
    </div>
  );
}
