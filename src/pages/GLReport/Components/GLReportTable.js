import React, { useState, useEffect } from 'react';
import {
  Table as SubTable,
  TableBody,
  TableCell,
  TableRow,
  Box,
  Button,
  TextField,
} from '@material-ui/core';
import {
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
} from '@material-ui/icons';
import Table, { columnType } from 'components/Table/Table';
import moment from 'moment-timezone';
import { getSystemDate } from '../../../services/ProfileService';
import { listGLBalance } from '../../../services/GLReportService';
import { notifyInfo, notifyError } from 'components/Notification/Notification';
import SelectCorrespondent from '../../../components/AutoComplete/SelectCorrespondent';
import SelectAccountNo from '../../../components/AutoComplete/SelectAccountNo';
import SelectMasterAccountNo from '../../../components/AutoComplete/SelectMasterAccountNo';
import SelectAccountName from '../../../components/AutoComplete/SelectAccountName';
import SelectBranch from '../../../components/AutoComplete/SelectBranch';
import SelectRep from '../../../components/AutoComplete/SelectRep';
import SelectSystemCode from '../../../components/Dropdown/SelectSystemCode';
import {
  formatPbDate,
  formatCurrency,
  formatPercentage,
  formatQty,
} from 'lib/fmt';
import QueryParam from '../../../services/QueryParamService';
import SearchButton from '../../../components/Button/Search';
import { protoTimeSpanObjectToString } from '../../../services/ConvertService';
import { getArrayKeyIndex } from 'lib/utils/utils';
import ExcelJS from 'exceljs';
import FileSaver from 'file-saver';
import useStyles from '../../../styles';

export default function ExecutionReconTable({ params }) {
  const classes = useStyles();

  useEffect(() => {
    async function init() {
      const systemDate = await getSystemDate();
      const searchDataCopy = { ...searchData };

      if (!searchData.fromDate) {
        searchDataCopy.fromDate = systemDate;
      }

      if (!searchData.toDate) {
        searchDataCopy.toDate = systemDate;
      }

      setSystemDate(systemDate);
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
  const [systemDate, setSystemDate] = React.useState('');
  const [searchData, setSearchData] = React.useState(
    QueryParam.get({
      dateType: 'Settle Date',
      fromDate: '',
      toDate: '',
      correspondent: '',
      accountNo: '',
      masterAccountNumber: '',
      accountName: '',
      type: '',
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
        row.beginningBalance !== '0' ||
        row.activityAmount !== '0' ||
        row.endingBalance !== '0'
      );
    });

    return [...filteredRows];
  };

  const amtColor = (v) => {
    return { color: v < 0 && '#f44336' };
  };

  const columns = [
    {
      name: 'accountId',
      label: 'Account ID',
      options: {
        display: false,
      },
    },
    {
      name: 'fromDate',
      label: 'From Date',
      type: columnType.date,
    },
    {
      name: 'toDate',
      label: 'To Date',
      type: columnType.date,
    },
    {
      name: 'type',
      label: 'Type',
    },
    {
      name: 'correspondent',
      label: 'Correspondent',
    },
    {
      name: 'branch',
      label: 'Branch',
      type: columnType.text,
      options: {
        display: false,
      },
    },
    {
      name: 'accountNo',
      label: 'Account No',
    },
    {
      name: 'rep',
      label: 'Rep',
      type: columnType.text,
      options: {
        display: false,
      },
    },
    {
      name: 'accountName',
      label: 'Account Name',
    },
    {
      name: 'beginningBalance',
      label: 'Beginning Balance',
      type: columnType.amount,
    },
    {
      name: 'activityAmount',
      label: 'Activity Amount',
      type: columnType.amount,
    },

    {
      name: 'endingBalance',
      label: 'Ending Balance',
      type: columnType.amount,
    },

    {
      name: 'glActivitiesList',
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

  const subColumns = [
    {
      name: 'entryType',
      label: 'Entry Type',
    },
    {
      name: 'externalId',
      label: 'External ID',
    },
    {
      name: 'date',
      label: 'Date',
      format: (v) => {
        return formatPbDate(v);
      },
    },
    {
      name: 'vendor',
      label: 'Vendor',
    },
    {
      name: 'description',
      label: 'Description',
    },
    {
      name: 'contraAccountNo',
      label: 'Contra Account No',
    },
    {
      name: 'activityAmount',
      label: 'Amount',
      format: (v) => {
        return <div style={amtColor(v)}>{formatCurrency(v)}</div>;
      },
    },
  ];

  const options = {
    expandableRows: true,
    renderExpandableRow: (rowData, rowMeta) => {
      const subRows = rows[rowMeta.dataIndex].glActivitiesList;

      return (
        <TableRow key={rowMeta.rowIndex}>
          <TableCell colSpan={15} style={{ padding: 0 }}>
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
    const worksheet = workbook.addWorksheet('GL Report');
    const columnTypes = getColumnTypes(cols, columns);

    worksheet.properties.defaultColWidth = 20;

    // Variable for column number on the csv file
    var columnCounter = 1;

    for (var c = 0; c < cols.length - 1; c++) {
      // Get column in csv file
      const csvColumn = worksheet.getColumn(columnCounter);

      // Set Column name on csv file if column is displayed on grid
      if (cols[c].display === 'true') {
        // Set label value to column header
        csvColumn.header = cols[c].label;
        // Set columnCounter to next column in the header
        columnCounter++;
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
          // Set row value to cell
          csvRow.getCell(rowCellCounter).value = getColumnValue(
            columnTypes[c2],
            data[r].data[c2]
          );
          // Set rowCellCounter to next cell on the row
          rowCellCounter++;
        }
      }

      // Set rowCounter to next row in the csv file
      rowCounter++;

      // Check if main record has a sub record
      if (data[r].data[12].length !== 0) {
        var subRows = data[r].data[12];

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
          csvRow.getCell(2).value = subRows[sr].entryType;
          csvRow.getCell(3).value = subRows[sr].externalId;
          csvRow.getCell(4).value = getColumnValue(
            columnType.date,
            subRows[sr].date
          );
          csvRow.getCell(5).value = subRows[sr].vendor;
          csvRow.getCell(6).value = subRows[sr].description;
          csvRow.getCell(7).value = subRows[sr].contraAccountNo;
          csvRow.getCell(8).value = getColumnValue(
            columnType.amount,
            subRows[sr].activityAmount
          );

          // Set rowCounter to next row in the csv file
          rowCounter++;
        }
      }
    }

    // save csv file
    workbook.xlsx.writeBuffer().then((data) => {
      const blob = new Blob([data], {
        type:
          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8',
      });
      FileSaver.saveAs(
        blob,
        'GLReport_' + moment().format('MMMM Do YYYY') + '.xlsx'
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
      const { glBalancesList } = await listGLBalance(searchData);
      setOrigRows(glBalancesList);
      const filteredRows = filterZeroValues(glBalancesList);
      setRows(filteredRows);
      notifyInfo(filteredRows.length + ' search results.');
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
                  name="fromDate"
                  label="From Date"
                  type="date"
                  value={searchData.fromDate}
                  onChange={handleChange}
                  inputProps={{ max: searchData.toDate }}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <TextField
                  fullWidth
                  name="toDate"
                  label="To Date"
                  type="date"
                  value={searchData.toDate}
                  onChange={handleChange}
                  inputProps={{
                    max:
                      searchData.dateType !== 'Settle Date' ? systemDate : null,
                  }}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectCorrespondent
                  freeSolo={true}
                  name="correspondent"
                  value={searchData.correspondent}
                  onChange={handleChange}
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
              <div className={classes.grdCell1}>
                <SelectSystemCode
                  name="type"
                  label="Type"
                  type="Type"
                  subType="Client Type"
                  value={searchData.type}
                  onChange={handleChange}
                ></SelectSystemCode>
              </div>
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
          title={'GL REPORT'}
          data={rows}
          columns={columns}
          options={options}
        />
      </Box>
    </div>
  );
}
