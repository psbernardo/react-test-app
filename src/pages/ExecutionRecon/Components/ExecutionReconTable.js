import React, { useState, useEffect } from 'react';
import {
  Table as SubTable,
  TableBody,
  TableCell,
  TableRow,
  Box,
  TextField,
  InputLabel,
  MenuItem,
  Select,
} from '@material-ui/core';
import Table, { columnType } from 'components/Table/Table';
import moment from 'moment-timezone';

import { getSystemDate } from '../../../services/ProfileService';
import { listExecutionRecon } from '../../../services/ExecutionReconService';
import { notifyInfo, notifyError } from 'components/Notification/Notification';
import SelectCorrespondent from '../../../components/AutoComplete/SelectCorrespondent';
import { formatPbDate, formatCurrency, formatQty } from 'lib/fmt';
import QueryParam from '../../../services/QueryParamService';
import SearchButton from '../../../components/Button/Search';

/*Styles*/
import useStyles from '../../../styles';
import SelectSymbol from 'components/AutoComplete/SelectSymbol';

export default function ExecutionReconTable({ params }) {
  const [searchData, setSearchData] = React.useState(
    QueryParam.get({
      tradeDate: '',
      correspondent: '',
      symbol: '',
      side: '',
      // status: '',
    })
  );

  const [loading, setLoading] = React.useState(false);
  const [showFilter, setShowFilter] = React.useState(true);
  const [rows, setRows] = useState([]);

  useEffect(
    () => {
      async function init() {
        if (searchData.tradeDate) return;

        const tradeDate = await getSystemDate();
        setSearchData({ ...searchData, tradeDate: tradeDate });
      }

      init();
    },
    // eslint-disable-next-line
    []
  );

  const amtColor = (v) => {
    return { color: v < 0 && '#f44336' };
  };

  const classes = useStyles();
  const columns = [
    {
      name: 'correspondent',
      label: 'Correspondent',
    },
    {
      name: 'symbol',
      label: 'Symbol',
    },
    {
      name: 'side',
      label: 'Side',
    },
    {
      name: 'qty',
      label: 'QTY',
      type: columnType.quantity,
    },
    {
      name: 'netAmt',
      label: 'Net Amount',
      type: columnType.amount,
    },
    {
      name: 'tradeDate',
      label: 'Trade Date',
      type: columnType.date,
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

  const subColumns = [
    {
      name: 'venue',
      label: 'Venue',
    },
    {
      name: 'houseQty',
      label: 'House QTY',
      format: (v) => {
        return formatQty(v);
      },
    },
    {
      name: 'nsccQty',
      label: 'NSCC QTY',
      format: (v) => {
        return formatQty(v);
      },
    },
    {
      name: 'diffQty',
      label: 'Diff QTY',
      format: (v) => {
        return formatQty(v);
      },
    },
    {
      name: 'houseAmt',
      label: 'House Amount',
      format: (v) => {
        return formatCurrency(v);
      },
    },
    {
      name: 'nsccAmt',
      label: 'NSCC Amount',
      format: (v) => {
        return formatCurrency(v);
      },
    },
    {
      name: 'diffAmt',
      label: 'Diff Amount',
      format: (v) => {
        return formatCurrency(v);
      },
    },
  ];

  const options = {
    expandableRows: true,
    renderExpandableRow: (rowData, rowMeta) => {
      const subRows = rows[rowMeta.dataIndex].itemsList;

      return (
        <TableRow key={rowMeta.rowIndex}>
          <TableCell colSpan={7} style={{ padding: 0 }}>
            <SubTable>
              <TableBody>
                <TableRow style={{ background: '#8698ff' }}>
                  {subColumns.map((col) => (
                    <TableCell
                      style={{
                        height: 20,
                        borderBottom: 'none',
                        fontWeight: 'bold',
                        color: '#ffffff',
                      }}
                      align={col.align || 'left'}
                      key={col.name}
                    >
                      {col.label}
                    </TableCell>
                  ))}
                </TableRow>

                {subRows.map((row, index) => {
                  return (
                    <TableRow key={index} style={{ background: '#f3f5f6' }}>
                      {subColumns.map((col, colIndex) => {
                        const v = row[col.name];
                        const f = col.format ? col.format(v) : v;

                        return <TableCell key={colIndex}>{f}</TableCell>;
                      })}
                    </TableRow>
                  );
                })}
              </TableBody>
            </SubTable>
          </TableCell>
        </TableRow>
      );
    },
    columnOrder: [5, 0, 4, 3, 2, 1, 6],
    filterType: 'select',
    download: true,
    filter: true,
    search: true,
    print: false,
    sort: true,
    viewColumns: true,
    resizableColumns: false,
    draggableColumns: {
      enabled: false,
    },
    selectableRowsHeader: false,
    selectableRows: 'none',
    rowsPerPage: 10,
    downloadOptions: {
      filename:
        'ExecutionReconciliation_' + moment().format('MMMM Do YYYY') + '.csv',
    },
    // onDownload: (buildHead, buildBody, columns, data) => {
    //   const body = data.map((row) => {
    //     row.data[8] = row.data[8]
    //       ? moment(new Date(row.data[8].seconds * 1000)).format(
    //           'MM/DD/YYYY hh:mm'
    //         )
    //       : '--';

    //     return row;
    //   });

    //   return '\uFEFF' + buildHead(columns) + buildBody(body);
    // },
  };

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
      const data = await listExecutionRecon(searchData);

      setRows(data.executionReconsList);
      notifyInfo(data.executionReconsList.length + ' search results.');
    } catch (error) {
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
                  required={false}
                  name="correspondent"
                  value={searchData.correspondent}
                  onChange={handleChange}
                ></SelectCorrespondent>
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
                <InputLabel shrink>Side</InputLabel>
                <Select
                  fullWidth
                  value={searchData.side}
                  onChange={handleChange}
                  name="side"
                >
                  <MenuItem value="">
                    <em>Blank</em>
                  </MenuItem>
                  <MenuItem value="sell">Sell</MenuItem>
                  <MenuItem value="sell_short">Sell Short</MenuItem>
                  <MenuItem value="buy">Buy</MenuItem>
                </Select>
              </div>
              {/* <div className={classes.grdCell1}>
                <InputLabel shrink>Status</InputLabel>
                <Select
                  fullWidth
                  value={searchData.status}
                  onChange={handleChange}
                  name="status"
                >
                  <MenuItem value="">
                    <em>Blank</em>
                  </MenuItem>
                  <MenuItem value="executed">Executed</MenuItem>
                  <MenuItem value="canceled">Canceled</MenuItem>
                  <MenuItem value="correct">Correct</MenuItem>
                </Select>
              </div> */}
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
          title={'Execution Reconciliations'}
          data={rows}
          columns={columns}
          options={options}
        />
      </Box>
    </div>
  );
}
