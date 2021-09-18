import React, { useState, useEffect } from 'react';
import { TableCell, TableRow, Box, Button, TextField } from '@material-ui/core';
import {
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
} from '@material-ui/icons';
import MUIDataTable from 'mui-datatables';
import moment from 'moment-timezone';

import { getSystemDate } from '../../../services/ProfileService';
import { listBalanceSummaryReport } from '../../../services/BalanceService';
import { notifyInfo, notifyError } from 'components/Notification/Notification';
import SelectCorrespondent from '../../../components/AutoComplete/SelectCorrespondent';
import SelectAccountNo from '../../../components/AutoComplete/SelectAccountNo';
import SelectMasterAccountNo from '../../../components/AutoComplete/SelectMasterAccountNo';
import SelectAccountName from '../../../components/AutoComplete/SelectAccountName';
import SelectBranch from '../../../components/AutoComplete/SelectBranch';
import SelectRep from '../../../components/AutoComplete/SelectRep';
import SelectSystemCode from '../../../components/Dropdown/SelectSystemCode';
import { AutoCompleteSubAccountNo } from '../../../components/AutoComplete/SelectSystemCode';
import {
  formatPbDate,
  formatCurrency,
  formatPercentage,
  formatQty,
} from 'lib/fmt';
import QueryParam from '../../../services/QueryParamService';
import SearchButton from '../../../components/Button/Search';
import Table, { columnType } from 'components/Table/Table';
import { protoTimeSpanObjectToString } from '../../../services/ConvertService';
import { getArrayKeyIndex } from 'lib/utils/utils';
import ExcelJS from 'exceljs';
import FileSaver from 'file-saver';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import useStyles from '../../../styles';

export default function ExecutionReconTable({ params }) {
  const classes = useStyles();

  useEffect(() => {
    async function init() {
      const systemDate = await getSystemDate();
      const searchDataCopy = { ...searchData, date: systemDate };

      setSearchData(searchDataCopy);
    }

    init();
    // eslint-disable-next-line
  }, []);

  const [loading, setLoading] = React.useState(false);
  const [showFilter, setShowFilter] = React.useState(true);
  const [rows, setRows] = useState([]);
  const [origRows, setOrigRows] = useState([]);
  const [showZeroValues, setShowZeroValues] = React.useState(true);
  const [searchData, setSearchData] = React.useState(
    QueryParam.get({
      correspondent: '',
      accountName: '',
      accountNo: '',
      broker: '',
      masterAccountNo: '',
      type: '',
      date: '',
      dateType: 'System Date',
      subAccountNo: '',
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
    return { color: v < 0 && '#f44336' };
  };

  const mainColumns = [
    {
      name: 'accountId',
      label: 'Account ID',
      options: {
        display: false,
        setCellProps: () => ({
          style: { minWidth: '100px', maxWidth: '100px' },
        }),
      },
    },
    {
      name: 'dateType',
      label: 'Date Type',
      options: {
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
        customBodyRenderLite: (dataIndex) => {
          return formatPbDate(rows[dataIndex].date);
        },
      },
    },
    {
      name: 'masterAccountNo',
      label: 'Master Account No',
      options: {
        setCellProps: () => ({
          style: { minWidth: '200px', maxWidth: '200px' },
        }),
      },
    },
    {
      name: 'cashBalance',
      label: 'Cash Balance',
      type: columnType.amount,
      options: {
        setCellProps: () => ({
          style: { minWidth: '100px', maxWidth: '100px' },
        }),
        customBodyRenderLite: (dataIndex) => {
          const v = rows[dataIndex].cashBalance;
          const f = formatCurrency(v);
          return (
            <div align="center" style={amtColor(v)}>
              {f}
            </div>
          );
        },
      },
    },
    {
      name: 'shortMarketValue',
      label: 'Short Market Value',
      type: columnType.amount,
      options: {
        setCellProps: () => ({
          style: { minWidth: '100px', maxWidth: '100px' },
        }),
        customBodyRenderLite: (dataIndex) => {
          const v = rows[dataIndex].shortMarketValue;
          const f = formatCurrency(v);
          return (
            <div align="center" style={amtColor(v)}>
              {f}
            </div>
          );
        },
      },
    },
    {
      name: 'longMarketValue',
      label: 'Long Market Value',
      type: columnType.amount,
      options: {
        setCellProps: () => ({
          style: { minWidth: '100px', maxWidth: '100px' },
        }),
        customBodyRenderLite: (dataIndex, rowIndex) => {
          const v = rows[dataIndex].longMarketValue;
          const f = formatCurrency(v);
          return (
            <div align="center" style={amtColor(v)}>
              {f}
            </div>
          );
        },
      },
    },
    {
      name: 'equity',
      label: 'Equity',
      type: columnType.amount,
      options: {
        setCellProps: () => ({
          style: { minWidth: '100px', maxWidth: '100px' },
        }),
        customBodyRenderLite: (dataIndex) => {
          const v = rows[dataIndex].equity;
          const f = formatCurrency(v);
          return (
            <div align="center" style={amtColor(v)}>
              {f}
            </div>
          );
        },
      },
    },
    {
      name: 'accountBalancesList',
      options: { display: false, viewColumns: false, filter: false },
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

  const accountColumns = [
    {
      name: '',
      label: '',
      options: {
        customHeadRender: () => (
          <th style={{ backgroundColor: 'transparent' }} />
        ),
        setCellProps: () => ({
          style: { minWidth: '100px', maxWidth: '100px' },
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
      name: 'accountName',
      label: 'Account Name',
      options: {
        setCellProps: () => ({
          style: { minWidth: '250px', maxWidth: '250px' },
        }),
      },
    },
    {
      name: 'cashBalance',
      label: 'Cash Balance',
      options: {
        setCellProps: () => ({
          style: { minWidth: '100px', maxWidth: '100px' },
        }),
        customBodyRender: (value) => {
          const v = value;
          const f = formatCurrency(v);
          return (
            <div align="center" style={amtColor(v)}>
              {f}
            </div>
          );
        },
      },
    },
    {
      name: 'shortMarketValue',
      label: 'Short Market Value',
      options: {
        setCellProps: () => ({
          style: { minWidth: '100px', maxWidth: '100px' },
        }),
        customBodyRender: (value) => {
          const v = value;
          const f = formatCurrency(v);
          return (
            <div align="center" style={amtColor(v)}>
              {f}
            </div>
          );
        },
      },
    },

    {
      name: 'longMarketValue',
      label: 'Long Market Value',
      options: {
        setCellProps: () => ({
          style: { minWidth: '100px', maxWidth: '100px' },
        }),
        customBodyRender: (value) => {
          const v = value;
          const f = formatCurrency(v);
          return (
            <div align="center" style={amtColor(v)}>
              {f}
            </div>
          );
        },
      },
    },
    {
      name: 'equity',
      label: 'Equity',
      options: {
        setCellProps: () => ({
          style: { minWidth: '100px', maxWidth: '100px' },
        }),
        customBodyRender: (value) => {
          const v = value;
          const f = formatCurrency(v);
          return (
            <div align="center" style={amtColor(v)}>
              {f}
            </div>
          );
        },
      },
    },
    {
      name: 'subAccountBalancesList',
      options: { display: false, viewColumns: false, filter: false },
    },
  ];

  const subAccountColumns = [
    {
      name: '',
      label: '',
      options: {
        customHeadRender: () => (
          <th key={0} style={{ backgroundColor: 'transparent' }} />
        ),
        setCellProps: () => ({
          style: { minWidth: '280px', maxWidth: '280px' },
        }),
      },
    },
    {
      name: 'subAccountNo',
      label: 'Sub Account No',
      options: {
        setCellProps: () => ({
          style: { minWidth: '400px', maxWidth: '400px' },
        }),
      },
    },
    {
      name: 'cashBalance',
      label: 'Cash Balance',
      options: {
        setCellProps: () => ({
          style: { minWidth: '100px', maxWidth: '100px' },
        }),
        customBodyRender: (value) => {
          const v = value;
          const f = formatCurrency(v);
          return (
            <div align="center" style={amtColor(v)}>
              {f}
            </div>
          );
        },
      },
    },
    {
      name: 'shortMarketValue',
      label: 'Short Market Value',
      options: {
        setCellProps: () => ({
          style: { minWidth: '100px', maxWidth: '100px' },
        }),
        customBodyRender: (value) => {
          const v = value;
          const f = formatCurrency(v);
          return (
            <div align="center" style={amtColor(v)}>
              {f}
            </div>
          );
        },
      },
    },
    {
      name: 'longMarketValue',
      label: 'Long Market Value',
      options: {
        setCellProps: () => ({
          style: { minWidth: '100px', maxWidth: '100px' },
        }),
        customBodyRender: (value) => {
          const v = value;
          const f = formatCurrency(v);
          return (
            <div align="center" style={amtColor(v)}>
              {f}
            </div>
          );
        },
      },
    },
    {
      name: 'equity',
      label: 'Equity',
      options: {
        setCellProps: () => ({
          style: { minWidth: '100px', maxWidth: '100px' },
        }),
        customBodyRender: (value) => {
          const v = value;
          const f = formatCurrency(v);
          return (
            <div align="center" style={amtColor(v)}>
              {f}
            </div>
          );
        },
      },
    },
  ];

  const accountExpRows = (rowData, rowMeta) => {
    rowData = rows[rowMeta.dataIndex].accountBalancesList; //try to always keep the nested data item at the end of the array
    return (
      <TableRow>
        <TableCell class="nestedTable" colSpan={20}>
          <MuiThemeProvider theme={nested_tables_theme}>
            <MUIDataTable
              data={rowData}
              columns={accountColumns}
              options={nestedTableOptions(subAccountExpRows)}
            />
          </MuiThemeProvider>
        </TableCell>
      </TableRow>
    );
  };

  const subAccountExpRows = (rowData, rowMeta) => {
    rowData =
      rows[rowMeta.dataIndex].accountBalancesList[0].subAccountBalancesList; //try to always keep the nested data item at the end of the array
    return (
      <TableRow>
        <TableCell class="nestedTable" colSpan={20}>
          <MuiThemeProvider theme={nested_tables_theme}>
            <MUIDataTable
              data={rowData}
              columns={subAccountColumns}
              options={nestedTableOptions()}
            />
          </MuiThemeProvider>
        </TableCell>
      </TableRow>
    );
  };

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
    };
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
    // Create xlsx file
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Balance Summary');
    const columnTypes = getColumnTypes(cols, mainColumns);

    worksheet.properties.defaultColWidth = 20;

    // Variable for column number on the csv file
    var columnCounter = 1;
    var amountColumnExist = false;

    for (var c = 0; c < cols.length - 1; c++) {
      // Get column in csv file
      const csvColumn = worksheet.getColumn(columnCounter);

      // Set Column name on csv file if column is displayed on grid
      if (cols[c].display === 'true') {
        // Check if there amount values are aligned
        if (
          !amountColumnExist &&
          columnCounter < 5 &&
          columnTypes[c] === 'amount'
        ) {
          amountColumnExist = true;
          columnCounter = 5;
          c--;
        } else {
          // Set label value to column header
          csvColumn.header = cols[c].label;
          // Set columnCounter to next column in the header
          columnCounter++;
        }
      }
    }

    // Variable for row number and row cell number on the csv file
    var rowCounter = 2;
    var csvRow;
    for (var r = 0; r < data.length; r++) {
      // Get row in csv file
      csvRow = worksheet.getRow(rowCounter);
      // Set row cell to first cell
      var rowCellCounter = 1;

      for (var c2 = 0; c2 < cols.length - 1; c2++) {
        // Check if column is displayed on grid
        if (cols[c2].display === 'true') {
          // Check if there are 8 columns, if not put spaces to align amount values
          if (rowCellCounter < 5 && columnTypes[c2] === 'amount') {
            rowCellCounter = 5;
            // Set row value to cell
            csvRow.getCell(rowCellCounter).value = getColumnValue(
              columnTypes[c2],
              data[r].data[c2]
            );
            // Set rowCellCounter to next cell on the row
            rowCellCounter++;
          } else {
            // Set row value to cell
            csvRow.getCell(rowCellCounter).value = getColumnValue(
              columnTypes[c2],
              data[r].data[c2]
            );
            // Set rowCellCounter to next cell on the row
            rowCellCounter++;
          }
        }
      }
      // Set rowCounter to next row in the csv file
      rowCounter++;

      // Check if main record has a sub record
      if (data[r].data[8] !== undefined) {
        var subRows = data[r].data[8];

        for (var sr = 0; sr < subRows.length; sr++) {
          // Get row in csv file
          csvRow = worksheet.getRow(rowCounter);

          // Set sub row group to 1
          csvRow.outlineLevel = 1;

          // Set sub row color
          for (var rc = 2; rc <= 8; rc++) {
            csvRow.getCell(rc).fill = {
              type: 'pattern',
              pattern: 'solid',
              fgColor: { argb: '8698ff' },
            };
          }

          // Set subrows value to row cells
          csvRow.getCell(2).value = subRows[sr].correspondent;
          csvRow.getCell(3).value = subRows[sr].accountNo;
          csvRow.getCell(4).value = subRows[sr].accountName;
          csvRow.getCell(5).value = getColumnValue(
            columnType.amount,
            subRows[sr].cashBalance
          );
          csvRow.getCell(6).value = getColumnValue(
            columnType.amount,
            subRows[sr].shortMarketValue
          );
          csvRow.getCell(7).value = getColumnValue(
            columnType.amount,
            subRows[sr].longMarketValue
          );
          csvRow.getCell(8).value = getColumnValue(
            columnType.amount,
            subRows[sr].equity
          );

          // Set rowCounter to next row in the csv file
          rowCounter++;

          // Check if the sub record has a sub account balance list (second sub report)
          if (subRows[sr].subAccountBalancesList) {
            var subAccountRows = subRows[sr].subAccountBalancesList;

            for (var sa = 0; sa < subAccountRows.length; sa++) {
              // Get row in csv file
              csvRow = worksheet.getRow(rowCounter);

              // Set sub account row group to 2
              csvRow.outlineLevel = 2;

              // Set sub account row color
              for (var rc2 = 3; rc2 <= 8; rc2++) {
                csvRow.getCell(rc2).fill = {
                  type: 'pattern',
                  pattern: 'solid',
                  fgColor: { argb: 'BFC7F5' },
                };
              }
              // Set subrows value to row cells
              csvRow.getCell(3).value = subAccountRows[sa].subAccountNo;
              csvRow.getCell(5).value = getColumnValue(
                columnType.amount,
                subAccountRows[sa].cashBalance
              );
              csvRow.getCell(6).value = getColumnValue(
                columnType.amount,
                subAccountRows[sa].shortMarketValue
              );
              csvRow.getCell(7).value = getColumnValue(
                columnType.amount,
                subAccountRows[sa].longMarketValue
              );
              csvRow.getCell(8).value = getColumnValue(
                columnType.amount,
                subAccountRows[sa].equity
              );

              // Set rowCounter to next row in the csv file
              rowCounter++;
            }
          }
        }
      }

      // Set rowCounter to next row to have a separator row between records
      // rowCounter++;
    }

    // save csv file
    workbook.xlsx.writeBuffer().then((data) => {
      const blob = new Blob([data], {
        type:
          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8',
      });
      FileSaver.saveAs(
        blob,
        'BalanceSummary_' + moment().format('MMMM Do YYYY') + '.xlsx'
      );
    });
  };

  const getColumnTypes = (currentColumnSettings, baseColumnSettings) => {
    return currentColumnSettings.map((col) => {
      const columnSetting = getColumnSettingsByName(
        baseColumnSettings,
        col.name
      );
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
        break;
    }

    console.error('invalid column type');
    return value;
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
      const data = await listBalanceSummaryReport(searchData);
      setOrigRows(data.balanceSummaryReportsList);
      setRows(data.balanceSummaryReportsList);
      notifyInfo(data.balanceSummaryReportsList.length + ' search results.');
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
                <SelectSystemCode
                  name="dateType"
                  label="Date Type"
                  type="Date Type"
                  value={searchData.dateType}
                  onChange={handleChange}
                ></SelectSystemCode>
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <TextField
                  fullWidth
                  name="date"
                  label="Date"
                  type="date"
                  value={searchData.date}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectSystemCode
                  name="broker"
                  label="Broker"
                  type="Broker"
                  value={searchData.broker}
                  onChange={handleChange}
                ></SelectSystemCode>
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectSystemCode
                  name="type"
                  label="Type"
                  type="Type"
                  subType="Client Type"
                  value={searchData.type}
                  onChange={handleChange}
                ></SelectSystemCode>
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectCorrespondent
                  name="correspondent"
                  value={searchData.correspondent}
                  onChange={handleChange}
                  freeSolo={true}
                ></SelectCorrespondent>
              </div>
              <div className={classes.grdCell1}>
                <SelectBranch
                  freeSolo={true}
                  name="branch"
                  label="Branch"
                  value={searchData.branch}
                  onChange={handleChange}
                ></SelectBranch>
              </div>
            </div>
            <div className={classes.grdRow}>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectAccountNo
                  freeSolo={true}
                  name="accountNo"
                  label="Account No"
                  value={searchData.accountNo}
                  correspondent={searchData.correspondent}
                  onChange={handleChange}
                ></SelectAccountNo>
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectMasterAccountNo
                  freeSolo={true}
                  name="masterAccountNo"
                  label="Master Account No"
                  value={searchData.masterAccountNo}
                  onChange={handleChange}
                ></SelectMasterAccountNo>
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectRep
                  freeSolo={true}
                  name="rep"
                  label="Rep"
                  value={searchData.rep}
                  onChange={handleChange}
                ></SelectRep>
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
                <AutoCompleteSubAccountNo
                  fullWidth
                  freeSolo={true}
                  name="subAccountNo"
                  label="Sub Account No"
                  type="Sub Account No"
                  value={searchData.subAccountNo}
                  onChange={handleChange}
                />
              </div>
              <div className={classes.grdCell1}></div>
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
              startIcon={
                showZeroValues ? <VisibilityIcon /> : <VisibilityOffIcon />
              }
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
          title={'Balance Summary'}
          data={rows}
          columns={mainColumns}
          options={options}
        />
      </Box>
    </div>
  );
}
