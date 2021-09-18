import React, { useState, useEffect } from 'react';
import FinraShortPositionDetailsModal from './FinraShortPositionDetailsModal';

import { Box, IconButton, TextField, Button } from '@material-ui/core';
import {
  notifyInfo,
  notifyError,
  notifySuccess,
} from 'components/Notification/Notification';
import {
  listFinraShortPosition,
  downloadFinra,
} from '../../../services/FinraShortPositionService';
import SearchButton from '../../../components/Button/Search';
import SelectSymbol from '../../../components/AutoComplete/SelectSymbol';
import { getSystemDate } from '../../../services/ProfileService';
import {
  Visibility as ViewIcon,
  GetAppRounded as DownloadIcon,
} from '@material-ui/icons';
import Table, { columnType } from 'components/Table/Table';
import SelectExchangeCode from '../../../components/AutoComplete/SelectExchangeCode';
import useStyles from '../../../styles';
import QueryParam from '../../../services/QueryParamService';

/*Moment JS*/
import moment from 'moment-timezone';

export default function FinraShortPositionTable({ params }) {
  const classes = useStyles();

  useEffect(
    () => {
      async function init() {
        if (searchData.settleDate) return;

        const settleDate = await getSystemDate();
        const prevSettledate = new Date(settleDate);
        prevSettledate.setDate(prevSettledate.getDate() - 15);
        setSearchData({
          ...searchData,
          settleDate: settleDate,
          prevSettleDate: moment(prevSettledate)
            .format('yyyy-MM-DD')
            .toString(),
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
  const [open, setOpen] = React.useState(false);
  const [rowData, setRowData] = React.useState({});

  // //search parameters initial value
  const [searchData, setSearchData] = useState(
    QueryParam.get({
      settleDate: '',
      prevSettleDate: '',
      symbol: '',
      exchangeCode: '',
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
    },
    {
      name: 'masterAccountNo',
      label: 'Master Account No',
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
      name: 'exchangeCode',
      label: 'Exchange Code',
    },
    {
      name: 'previousSettleQty',
      label: 'Previous Settle QTY',
      type: columnType.quantity,
    },
    {
      name: 'settleQty',
      label: 'Settle QTY',
      type: columnType.quantity,
    },
    {
      name: 'finraFiling',
      label: 'Finra Filing',
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

  const options = {
    selectableRows: 'none',
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSearch = async () => {
    try {
      setLoading(true);
      QueryParam.set(searchData);
      const data = await listFinraShortPosition(searchData);
      setRows(data.finraShortPositionList);
      notifyInfo(data.finraShortPositionList.length + ' search results.');
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

  const handleDownload = async () => {
    try {
      QueryParam.set(searchData);
      const fileName = await downloadFinra(searchData);
      notifySuccess(fileName);
    } catch (error) {
      notifyError(error.message);
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
                  name="prevSettleDate"
                  fullWidth
                  label="Previous Settle Date"
                  type="date"
                  value={searchData.prevSettleDate}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectSymbol
                  freeSolo={true}
                  fullWidth
                  name="symbol"
                  label="Symbol"
                  value={searchData.symbol}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectExchangeCode
                  name="exchangeCode"
                  label="Exchange Code"
                  value={searchData.exchangeCode}
                  onChange={handleChange}
                />
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
              <div
                className={classes.grdCell1}
                style={{ marginRight: 30 }}
              ></div>
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
          <div className={classes.grdCell1} style={{ marginLeft: 10 }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              startIcon={<DownloadIcon />}
              onClick={() => handleDownload()}
            >
              Download
            </Button>
          </div>
        </div>
      </Box>
      <Box component="div" mt={2}>
        <Table
          title="FINRA Short Position"
          data={rows}
          columns={columns}
          options={options}
        />
      </Box>

      {open && (
        <FinraShortPositionDetailsModal
          onClose={handleClose}
          open={open}
          value={rowData}
        ></FinraShortPositionDetailsModal>
      )}
    </div>
  );
}
