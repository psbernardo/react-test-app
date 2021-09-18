import React, { useState, useEffect } from 'react';
import { notifyInfo, notifyError } from 'components/Notification/Notification';
import LayeringModal from './LayeringModal';
import { listLayering } from '../../../services/LayeringService';
import { Visibility as ViewIcon } from '@material-ui/icons';
import { Box, TextField, IconButton, InputLabel } from '@material-ui/core';
import Table, { columnType } from 'components/Table/Table';
import useStyles from '../../../styles';
import SearchButton from '../../../components/Button/Search';
import QueryParam from '../../../services/QueryParamService';
import SelectCorrespondent from 'components/AutoComplete/SelectCorrespondent';
import SelectSymbol from '../../../components/AutoComplete/SelectSymbol';
import SelectAccountNo from '../../../components/AutoComplete/SelectAccountNo';
import { getSystemDate } from '../../../services/ProfileService';

export default function LayeringTable({ params }) {
  const classes = useStyles();

  useEffect(
    () => {
      async function init() {
        const systemDate = await getSystemDate();
        const searchDataCopy = { ...searchData };

        if (!searchData.tradeDate) {
          searchDataCopy.tradeDate = systemDate;
        }

        setSearchData(searchDataCopy);
      }

      init();
    },
    // eslint-disable-next-line
    []
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
      name: 'tradeDate',
      label: 'Trade Date',
      type: columnType.date,
    },
    {
      name: 'tradeAt',
      label: 'Trade At',
      options: {
        customBodyRenderLite: (dataIndex) => {
          if (rows[dataIndex].tradeAt) {
            const v = rows[dataIndex].tradeAt;
            return new Date(v.seconds * 1000).toISOString().substr(11, 8);
          }
        },
      },
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
      name: 'traderId',
      label: 'Trader ID',
    },
    {
      name: 'symbol',
      label: 'Symbol',
    },
    {
      name: 'transactionCount',
      label: 'Transaction Count',
    },
    {
      name: 'cancelCount',
      label: 'Cancel Count',
    },
    {
      name: 'executionCount',
      label: 'Execution Count',
    },
    {
      name: 'executionCancelRatio',
      label: 'Execution / Cancel Ratio',
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

  const [rowData, setRowData] = React.useState({});
  const [open, setOpen] = React.useState(false);
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = React.useState(false);
  const [showFilter, setShowFilter] = React.useState(true);
  const [searchData, setSearchData] = React.useState(
    QueryParam.get({
      tradeDate: '',
      correspondent: '',
      accountNo: '',
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
      const data = await listLayering(searchData);
      console.log(data);
      setRows(data.layeringsList);
      notifyInfo(data.layeringsList.length + ' search results.');
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
                  freeSolo={true}
                  name="correspondent"
                  label="Correspondent"
                  value={searchData.correspondent}
                  onChange={handleChange}
                />
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectAccountNo
                  freeSolo={true}
                  name="accountNo"
                  label="Account No"
                  value={searchData.accountNo}
                  correspondent={searchData.correspondent}
                  onChange={handleChange}
                  type="client"
                ></SelectAccountNo>
              </div>
              <div className={classes.grdCell1}>
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
          title={'Layering Summary'}
          data={rows}
          columns={columns}
          options={options}
        />
      </Box>
      {open && (
        <LayeringModal
          onClose={handleClose}
          open={open}
          value={rowData}
        ></LayeringModal>
      )}
    </div>
  );
}
