import React, { useState, useEffect } from 'react';
import {
  TableCell,
  TableRow,
  Box,
  TextField,
  InputLabel,
  MenuItem,
  Select,
} from '@material-ui/core';

import MUIDataTable from 'mui-datatables';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Table, { columnType } from 'components/Table/Table';
import moment from 'moment-timezone';

import { getSystemDate } from '../../../services/ProfileService';
import { ListLocateLadderReport } from '../../../services/LocateLadderService';
import { notifyInfo, notifyError } from 'components/Notification/Notification';
import SelectCorrespondent from '../../../components/AutoComplete/SelectCorrespondent';
import SelectAccountNo from '../../../components/AutoComplete/SelectAccountNo';
import SelectMasterAccountNo from '../../../components/AutoComplete/SelectMasterAccountNo';
import SelectAccountName from '../../../components/AutoComplete/SelectAccountName';
import SelectSymbol from '../../../components/AutoComplete/SelectSymbol';
import SelectCusip from '../../../components/AutoComplete/SelectCusip';
import { protoTimeSpanObjectToString } from '../../../services/ConvertService';
import { getArrayKeyIndex } from 'lib/utils/utils';
import { formatPbDate, formatCurrency, formatQty, formatPercentage } from 'lib/fmt';
import QueryParam from '../../../services/QueryParamService';
import SearchButton from '../../../components/Button/Search';
import ExcelJS from 'exceljs'
import FileSaver from 'file-saver'

/*Styles*/
import useStyles from '../../../styles';

export default function ExecutionReconTable({ params }) {
  useEffect(() => {
    async function init() {
      // if (searchData.tradeDate) return;

      const systemDate = await getSystemDate();
      const searchDataCopy = { ...searchData, settleDate: systemDate };

      setSearchData(searchDataCopy);
    }

    init();

    // eslint-disable-next-line
  }, []);

  const [searchData, setSearchData] = React.useState(
    QueryParam.get({
      settleDate: '',
      correspondent: '',
      accountNo: '',
      accountName: '',
      masterAccountNo: '',
      broker: '',
      type: 'client',
      symbol: '',
      cusip: '',
    })
  );
  const [loading, setLoading] = React.useState(false);
  const [showFilter, setShowFilter] = React.useState(true);
  const [rows, setRows] = useState([]);
  const [origRows, setOrigRows] = useState([]);
  const [showZeroValues] = React.useState(true);

  useEffect(() => {
    setRows(filterZeroValues(origRows));
    // eslint-disable-next-line
  }, [showZeroValues]);

  const filterZeroValues = (list) => {
    if (showZeroValues) {
      return [...list];
    }

    const filteredRows = list.filter((row) => {
      return (
        row.cashBalance !== '0' ||
        row.equity !== '0' ||
        row.longMarketValue !== '0' ||
        row.shortMarketValue !== '0'
      );
    });

    return [...filteredRows];
  };

  const amtColor = (v) => {
    if (v.substring(0, 5) === 'Total') {
      return { color: '#ffffff' };
    }
    return { color: v < 0 && '#f44336' };
  };

  const classes = useStyles();

  const mainColumns = [
    {
      name: 'dateType',
      label: 'Date Type',
      options: {
        display: false,
        setCellProps: () => ({
          style: { minWidth: '150px', maxWidth: '150px' },
        }),
      },
    },
    {
      name: 'date',
      label: 'Date',
      type: columnType.date,
      options: {
        setCellProps: () => ({
          style: { minWidth: '150px', maxWidth: '150px' },
        }),
      },
    },
    {
      name: 'symbol',
      label: 'Symbol',
      options: {
        setCellProps: () => ({
          style: { minWidth: '150px', maxWidth: '150px' },
        }),
      },
    },
    {
      name: 'cusip',
      label: 'Cusip',
      options: {
        setCellProps: () => ({
          style: { minWidth: '150px', maxWidth: '150px' },
        }),
      },
    },
    {
      name: 'originalCusip',
      label: 'Original Cusip',
      options: {
        display: false,
        setCellProps: () => ({
          style: { minWidth: '150px', maxWidth: '150px' },
        }),
      },
    },
    {
      name: 'symbolDescription',
      label: 'Symbol Description',
      options: {
        display: false,
        setCellProps: () => ({
          style: { minWidth: '150px', maxWidth: '150px' },
        }),
      },
    },
    {
      name: 'assetType',
      label: 'Asset Type',
      options: {
        setCellProps: () => ({
          style: { minWidth: '150px', maxWidth: '150px' },
        }),
      },
    },
    {
      name: 'currentQty',
      label: 'Current Qty',
      type: columnType.quantity,
      options: {
        setCellProps: () => ({
          style: { minWidth: '150px', maxWidth: '150px' },
        }),
      },
    },
    {
      name: 'currentMarketValue',
      label: 'Current Market Value',
      type: columnType.amount,
      options: {
        setCellProps: () => ({
          style: { minWidth: '150px', maxWidth: '150px' },
        }),
      },
    },
    {
      name: 't1Qty',
      label: 'T1 Qty',
      type: columnType.quantity,
      options: {
        setCellProps: () => ({
          style: { minWidth: '150px', maxWidth: '150px' },
        }),
      },
    },
    {
      name: 't1MarketValue',
      label: 'T1 Market Value',
      type: columnType.amount,
      options: {
        setCellProps: () => ({
          style: { minWidth: '150px', maxWidth: '150px' },
        }),
      },
    },
    {
      name: 't2Qty',
      label: 'T2 Qty',
      type: columnType.quantity,
      options: {
        setCellProps: () => ({
          style: { minWidth: '150px', maxWidth: '150px' },
        }),
      },
    },
    {
      name: 't2MarketValue',
      label: 'T2 Market Value',
      type: columnType.amount,
      options: {
        setCellProps: () => ({
          style: { minWidth: '150px', maxWidth: '150px' },
        }),
      },
    },
    {
      name: 'subReportsList',
      options: { display: false, viewColumns: false, filter: false },
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

  const subReportColumns = [
    {
      name: '',
      label: '',
      options: {
        customHeadRender: () => (
          <th style={{ backgroundColor: 'transparent' }} />
        ),
        setCellProps: () => ({
          style: {
            minWidth: '100px',
            maxWidth: '100px',
            backgroundColor: 'white',
          },
        }),
      },
    },
    {
      name: 'correspondent',
      label: 'Correspondent',
      options: {
        setCellProps: () => ({
          style: { minWidth: '150px', maxWidth: '150px' },
        }),
      },
    },
    {
      name: 'accountNo',
      label: 'Account No',
      options: {
        setCellProps: () => ({
          style: { minWidth: '150px', maxWidth: '150px' },
        }),
      },
    },
    {
      name: 'type',
      label: 'Type',
      options: {
        setCellProps: () => ({
          style: { minWidth: '100px', maxWidth: '100px' },
        }),
      },
    },
    {
      name: 'accountName',
      label: 'Account Name',
      options: {
        setCellProps: () => ({
          style: { minWidth: '150px', maxWidth: '150px' },
        }),
      },
    },
    {
      name: 'currentQty',
      label: 'Current Qty',
      options: {
        setCellProps: () => ({
          style: { minWidth: '150px', maxWidth: '150px' },
        }),
        customBodyRender: (value) => {
          var v = value;
          if (v.substring(0, 5) === 'Total') {
            v = v.substring(5);
          }
          const f = formatQty(v);
          return (
            <div align="right" style={amtColor(value)}>
              {f}
            </div>
          );
        },
      },
    },
    {
      name: 'currentMarketValue',
      label: 'Current Market Value',
      options: {
        setCellProps: () => ({
          style: { minWidth: '150px', maxWidth: '150px' },
        }),
        customBodyRender: (value) => {
          var v = value;
          if (v.substring(0, 5) === 'Total') {
            v = v.substring(5);
          }
          const f = formatCurrency(v);
          return (
            <div align="right" style={amtColor(value)}>
              {f}
            </div>
          );
        },
      },
    },
    {
      name: 't1Qty',
      label: 'T1 Qty',
      options: {
        setCellProps: () => ({
          style: { minWidth: '150px', maxWidth: '150px' },
        }),
        customBodyRender: (value) => {
          var v = value;
          if (v.substring(0, 5) === 'Total') {
            v = v.substring(5);
          }
          const f = formatQty(v);
          return (
            <div align="right" style={amtColor(value)}>
              {f}
            </div>
          );
        },
      },
    },
    {
      name: 't1MarketValue',
      label: 'T1 Market Value',
      options: {
        setCellProps: () => ({
          style: { minWidth: '150px', maxWidth: '150px' },
        }),
        customBodyRender: (value) => {
          var v = value;
          if (v.substring(0, 5) === 'Total') {
            v = v.substring(5);
          }
          const f = formatCurrency(v);
          return (
            <div align="right" style={amtColor(value)}>
              {f}
            </div>
          );
        },
      },
    },
    {
      name: 't2Qty',
      label: 'T2 Qty',
      options: {
        setCellProps: () => ({
          style: { minWidth: '150px', maxWidth: '150px' },
        }),
        customBodyRender: (value) => {
          var v = value;
          if (v.substring(0, 5) === 'Total') {
            v = v.substring(5);
          }
          const f = formatQty(v);
          return (
            <div align="right" style={amtColor(value)}>
              {f}
            </div>
          );
        },
      },
    },
    {
      name: 't2MarketValue',
      label: 'T2 Market Value',
      options: {
        setCellProps: () => ({
          style: { minWidth: '150px', maxWidth: '150px' },
        }),
        customBodyRender: (value) => {
          var v = value;
          if (v.substring(0, 5) === 'Total') {
            v = v.substring(5);
          }
          const f = formatCurrency(v);
          return (
            <div align="right" style={amtColor(value)}>
              {f}
            </div>
          );
        },
      },
    },
  ];

  const accountExpRows = (rowData, rowMeta) => {
    rowData = rows[rowMeta.dataIndex].subReportsList; //try to always keep the nested data item at the end of the array
    return (
      <TableRow>
        <TableCell class="nestedTable" colSpan={20}>
          <MuiThemeProvider theme={nested_tables_theme}>
            <MUIDataTable
              data={rowData}
              columns={subReportColumns}
              options={nestedTableOptions()}
            />
          </MuiThemeProvider>
        </TableCell>
      </TableRow>
    );
  };

  const nested_tables_theme = createMuiTheme({
    overrides: {
      MUIDataTableBodyCell: {
        root: {
          paddingTop: 0,
          paddingBottom: 0,
        },
      },
      MUIDataTableSelectCell: {
        expandDisabled: {
          visibility: 'hidden',
        },
        root: {
          paddingTop: 0,
          paddingBottom: 0,
        },
      },
      MUIDataTableToolbar: {
        root: {
          display: 'none',
        },
      },
      MUIDataTableSearch: {
        clearIcon: {
          display: 'none',
        },
      },
      MUIDataTableHeadRow: {
        root: {
          display: 'true',
        },
      },
      MuiTypography: {
        h6: {
          textTransform: 'uppercase',
          fontWeight: 'bold',
        },
      },
      MUIDataTableHeadCell: {
        fixedHeader: {
          backgroundColor: '#8698ff',
          fontWeight: 'bold',
          color: '#ffffff',
          paddingTop: 0,
          paddingBottom: 0,
        },
      },
    },
  });

  const nestedTableOptions = (expandMethod) => {
    const has_expandable_rows = expandMethod !== undefined;
    return {
      pagination: false,
      responsive: 'standard',
      selectableRows: 'none',
      elevation: 0,
      expandableRows: has_expandable_rows,
      expandableRowsOnClick: has_expandable_rows,
      expandableRowsHeader: false,
      renderExpandableRow: expandMethod,
      searchOpen: true,
      search: false,
      download: false,
      print: false,
      setRowProps: (row) => {
        if (row[2] === '') {
          return {
            style: { background: '#8698ff' },
          };
        }
      },
    };
  };

  const options = {
    expandableRows: true,
    renderExpandableRow: accountExpRows,
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
    rowsPerPage: 50,
    rowsPerPageOptions: [50, 100, 500, 1000, 15000, 30000, 100000],
    onDownload: (buildHead, buildBody, cols, data) => {
      downloadWorksheet(data, cols);
      return false;
    },
  };

  const downloadWorksheet = async (data, cols) => {
    console.log(data);
    console.log(cols)
    // Create xlsx file
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("GL Report");
    const columnTypes = getColumnTypes(cols, mainColumns);

    worksheet.properties.defaultColWidth = 20;

    // Variable for column number on the csv file
    var columnCounter = 1;

    for (var c = 0; c < cols.length - 1; c++) {
      // Get column in csv file
      const csvColumn = worksheet.getColumn(columnCounter);

      // Set Column name on csv file if column is displayed on grid
      if (cols[c].display === "true") {
        // Set label value to column header
        csvColumn.header = cols[c].label
        // Set columnCounter to next column in the header
        columnCounter++;
      }
    }

    // Variable for row number and row cell number on the csv file
    var rowCounter = 2;

    for (var r = 0; r < data.length; r++) {

      // Get row in csv file
      var csvRow = worksheet.getRow(rowCounter);
      // Set row cell to first cell
      var rowCellCounter = 1;

      for (var c = 0; c < cols.length - 1; c++) {
        // Check if column is displayed on grid
        if (cols[c].display === "true") {
          // Set row value to cell
          csvRow.getCell(rowCellCounter).value = getColumnValue(columnTypes[c], data[r].data[c]);
          // Set rowCellCounter to next cell on the row
          rowCellCounter++;
        }

      }

      // Set rowCounter to next row in the csv file
      rowCounter++;

      // Check if main record has a sub record
      if (data[r].data[13].length !== 0) {
        var subRows = data[r].data[13];

        for (var sr = 0; sr < subRows.length; sr++) {
          // Get row in csv file
          var csvRow = worksheet.getRow(rowCounter);

          // Set sub row group to 1
          csvRow.outlineLevel = 1;

          // Set sub row color
          for (var rc = 2; rc <= 11; rc++) {

            // Check if row contains total
            if (subRows[sr].currentMarketValue.substring(0, 5) === 'Total') {
              csvRow.getCell(rc).font = {
                color: { argb: 'ffffffff' },
              };
            }

            csvRow.getCell(rc).fill = {
              type: 'pattern',
              pattern: 'solid',
              fgColor: { argb: '8698ff' }
            };

          }

          if (subRows[sr].currentMarketValue.substring(0, 5) === 'Total') {
            // Removed 'total' from value
            csvRow.getCell(6).value = getColumnValue(columnType.quantity, subRows[sr].currentQty.substring(5));
            csvRow.getCell(7).value = getColumnValue(columnType.amount, subRows[sr].currentMarketValue.substring(5));
            csvRow.getCell(8).value = getColumnValue(columnType.quantity, subRows[sr].t1Qty.substring(5));
            csvRow.getCell(9).value = getColumnValue(columnType.amount, subRows[sr].t1MarketValue.substring(5));
            csvRow.getCell(10).value = getColumnValue(columnType.quantity, subRows[sr].t2Qty.substring(5));
            csvRow.getCell(11).value = getColumnValue(columnType.amount, subRows[sr].t2MarketValue.substring(5));
          } else {
            csvRow.getCell(6).value = getColumnValue(columnType.quantity, subRows[sr].currentQty);
            csvRow.getCell(7).value = getColumnValue(columnType.amount, subRows[sr].currentMarketValue);
            csvRow.getCell(8).value = getColumnValue(columnType.quantity, subRows[sr].t1Qty);
            csvRow.getCell(9).value = getColumnValue(columnType.amount, subRows[sr].t1MarketValue);
            csvRow.getCell(10).value = getColumnValue(columnType.quantity, subRows[sr].t2Qty);
            csvRow.getCell(11).value = getColumnValue(columnType.amount, subRows[sr].t2MarketValue);
          }

          // Set subrows value to row cells
          csvRow.getCell(2).value = subRows[sr].correspondent;
          csvRow.getCell(3).value = subRows[sr].accountNo;
          csvRow.getCell(4).value = subRows[sr].type;
          csvRow.getCell(5).value = subRows[sr].accountName;

          // Set rowCounter to next row in the csv file
          rowCounter++;
        }

      }

    }

    // save csv file
    workbook.xlsx.writeBuffer().then(data => {
      const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
      FileSaver.saveAs(blob, 'LocateLadder_' + moment().format('MMMM Do YYYY') + '.xlsx');
    });
  };

  const getColumnTypes = (currentColumnSettings, baseColumnSettings) => {
    return currentColumnSettings.map((col) => {
      const columnSetting = getColumnSettingsByName(baseColumnSettings, col.name);
      return columnSetting.type;
    });
  };

  const getColumnValue = (type, value) => {
    switch (type) {
      case columnType.date:
        return formatPbDate(value);
      case columnType.dateTime:
        return protoTimeSpanObjectToString(value, 'DD/MM/YYYY HH:mm');
      case columnType.quantity:
        return formatQty(value);
      case columnType.percentage:
        return formatPercentage(value);
      case columnType.amount:
        return formatCurrency(value);
      case columnType.text:
      case '':
      case columnType.buttons:
      case undefined:
        return value;
      default:
        return value;
    }
  };

  const getColumnSettingsByName = (columnsSettings, name) => {
    const index = getArrayKeyIndex(columnsSettings, name, 'name');
    return columnsSettings[index];
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
      const data = await ListLocateLadderReport(searchData);
      setOrigRows(data.locateLadderReportsList);

      setRows(data.locateLadderReportsList);

      notifyInfo(data.locateLadderReportsList.length + ' search results.');
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
                  name="settleDate"
                  fullWidth
                  label="Date"
                  type="date"
                  value={searchData.settleDate}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectCorrespondent
                  name="correspondent"
                  value={searchData.correspondent}
                  onChange={handleChange}
                  freeSolo={true}
                ></SelectCorrespondent>
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectAccountNo
                  freeSolo={true}
                  name="accountNo"
                  label="Account No"
                  value={searchData.accountNo}
                  correspondent={searchData.correspondent}
                  onChange={handleChange}
                  type="" //client or gl
                ></SelectAccountNo>
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectAccountName
                  freeSolo={true}
                  label="Account Name"
                  name="accountName"
                  value={searchData.accountName}
                  onChange={handleChange}
                ></SelectAccountName>
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectMasterAccountNo
                  name="masterAccountNo"
                  label="Master Account No"
                  value={searchData.masterAccountNo}
                  // correspondent={searchData.correspondent}
                  onChange={handleChange}
                  type="" //client or gl
                  freeSolo={true}
                ></SelectMasterAccountNo>
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <InputLabel shrink>Broker</InputLabel>
                <Select
                  fullWidth
                  value={searchData.broker}
                  onChange={handleChange}
                  name="broker"
                >
                  <MenuItem value="">
                    <em>Blank</em>
                  </MenuItem>
                  <MenuItem value="broker_dealer">Broker Dealer</MenuItem>
                  <MenuItem value="non_broker_dealer">
                    Non Broker Dealer
                  </MenuItem>
                </Select>
              </div>
            </div>
            <div className={classes.grdRow}>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <InputLabel shrink id="type">
                  Type
                </InputLabel>
                <Select
                  name="type"
                  labelId="type"
                  fullWidth
                  value={searchData.type}
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>Blank</em>
                  </MenuItem>
                  <MenuItem value="client">Client</MenuItem>
                  <MenuItem value="gl">GL</MenuItem>
                </Select>
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
          <div className={classes.grdCellNone} style={{ marginRight: 10 }}>
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
          title={'Locate Ladder'}
          data={rows}
          columns={mainColumns}
          options={options}
        />
      </Box>
    </div>
  );
}
