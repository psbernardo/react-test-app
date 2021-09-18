import React, { useState, useEffect } from 'react';
import {
  Table as SubTable,
  TableBody,
  TableCell,
  TableRow,
  Box,
  TextField,
  Checkbox,
  FormControlLabel,
} from '@material-ui/core';
import { CheckCircle as CheckCircleIcon, SignalCellularNullSharp } from '@material-ui/icons';

import Table, { columnType } from 'components/Table/Table';
import moment from 'moment-timezone';

import { getSystemDate } from '../../../services/ProfileService';
import { listEntitlement } from '../../../services/EntitlementService';
import { listPendingTrns } from '../../../services/PendingTrnsService';
import { notifyInfo, notifyError } from 'components/Notification/Notification';
import SelectAccountNo from '../../../components/AutoComplete/SelectAccountNo';
import SelectAccountName from '../../../components/AutoComplete/SelectAccountName';
import {
  formatPbDate,
  formatCurrency,
  formatQty,
  dateProtoObjectToString,
} from 'lib/fmt';
import QueryParam from '../../../services/QueryParamService';
import SearchButton from '../../../components/Button/Search';
import EntryTypeSelect from '../../../components/AutoComplete/EntryType';
import SelectSymbol from '../../../components/AutoComplete/SelectSymbol';
/*Styles*/
import useStyles from '../../../styles';

export default function ExecutionReconTable({ params }) {
  useEffect(() => {
    async function init() {
      // if (searchData.tradeDate) return;

      const systemDate = await getSystemDate();
      const searchDataCopy = { ...searchData };

      if (!searchData.systemDate) {
        searchDataCopy.systemDate = systemDate;
      }

      setSystemDate(systemDate);
      setSearchData(searchDataCopy);
    }

    init();

    // eslint-disable-next-line
  }, []);

  const [searchData, setSearchData] = React.useState(
    QueryParam.get({
      textNumber: '',
      entryType: '',
      accountNo: '',
      accountName: '',
      symbol: '',
      systemDate: '',
      processDateDate: '',
      positionDate: '',
      pendingTrnsOnly: true,
    })
  );
  const [loading, setLoading] = React.useState(false);
  const [showFilter, setShowFilter] = React.useState(true);
  const [rows, setRows] = useState([]);
  const [, setSystemDate] = React.useState('');
  const [subRows, setSubRows] = useState({});

  const amtColor = (v) => {
    return { color: v < 0 && '#f44336' };
  };

  const classes = useStyles();
  const columns = [
    {
      name: 'processDate',
      label: 'Process Date',
      type: columnType.date,
    },
    {
      name: 'payableDate',
      label: 'Payable Date',
      type: columnType.date,
    },
    {
      name: 'declarationDate',
      label: 'Declaration Date',
      type: columnType.date,
    },
    {
      name: 'recordDate',
      label: 'Record Date',
      type: columnType.date,
    },
    {
      name: 'recordDate',
      label: 'Record Date',
      type: columnType.date,
    },
    {
      name: 'expirationDate',
      label: 'Expiration Date',
      type: columnType.date,
    },
    {
      name: 'positionDate',
      label: 'Position Date',
      type: columnType.date,
    },

    {
      name: 'systemDate',
      label: 'System Date',
      type: columnType.date,
    },

    {
      name: 'textNumber',
      label: 'Text Number',
    },
    {
      name: 'symbol',
      label: 'Symbol',
    },
    {
      name: 'entryType',
      label: 'Entry Type',
    },
    {
      name: 'accountNo',
      label: 'Account No',
    },
    {
      name: 'accountName',
      label: 'Account Name',
    },
    {
      name: 'originalCusip',
      label: 'Original Cusip',
    },
    {
      name: 'type',
      label: 'Type',
    },
    {
      name: 'qtyRate',
      label: 'QTY Rate',
      type: columnType.quantity,
    },
    {
      name: 'cashRate',
      label: 'Cash Rate',
      type: columnType.quantity,
    },
    {
      name: 'netCash',
      label: 'Net Cash',
      type: columnType.amount,
    },
    {
      name: 'netQty',
      label: 'Net QTY',
      type: columnType.quantity,
    },
    {
      name: 'netPayCash',
      label: 'Net Pay Cash',
      type: columnType.amount,
    },
    {
      name: 'netPayQty',
      label: 'Net Pay QTY',
      type: columnType.quantity,
    },
    {
      name: 'taxRate',
      label: 'Tax Rate',
      type: columnType.quantity,
    },
    {
      name: 'dtccCashRate',
      label: 'DTCC Cash Rate',
      type: columnType.quantity,
    },
    {
      name: 'noCil',
      label: 'No CIL',
      options: {
        customBodyRenderLite: (dataIndex) => {
          const f = rows[dataIndex].noCil;
          return (
            <div align="center">{f === true ? <CheckCircleIcon /> : null }</div>
          );
        },
      },
    },
    {
      name: 'taxCountry',
      label: 'Tax Country',
    },
    {
      name: 'detail',
      label: 'Detail',
    },
    {
      name: 'pendingTrnsCount',
      label: 'Pending TRNS Count',
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

  const subColumns = [
    {
      name: 'correspondent',
      label: 'Correspondent',
    },
    {
      name: 'accountNo',
      label: 'Account No',
    },
    {
      name: 'contraAccountNo',
      label: 'Contra Account No',
    },
    {
      name: 'tradeDate',
      label: 'Trade Date',
      format: (v) => {
        return formatPbDate(v);
      },
    },
    {
      name: 'settleDate',
      label: 'Settle Date',
      format: (v) => {
        return formatPbDate(v);
      },
    },
    {
      name: 'qty',
      label: 'QTY',
      format: (v) => {
        return formatQty(v);
      },
    },
    {
      name: 'netAmt',
      label: 'Net Amt',
      format: (v) => {
        return <div style={amtColor(v)}>{formatCurrency(v)}</div>;
      },
    },
    {
      name: 'description',
      label: 'Description',
    },
  ];

  const options = {
    expandableRows: true, // searchData.pendingTrnsOnly ? true : false,
    renderExpandableRow: (rowData, rowMeta) => {
      return (
        <TableRow key={rowMeta.rowIndex}>
          <TableCell colSpan={15} style={{ padding: 0 }}>
            <SubTable>
              <TableBody>
                <TableRow style={{ background: '#131215' }}>
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

                {(subRows['dataIndex' + rowMeta.dataIndex] || []).map(
                  (row, index) => {
                    return (
                      <TableRow key={index} style={{ background: '#f3f5f6' }}>
                        {subColumns.map((col, colIndex) => {
                          const v = row[col.name];
                          const f = col.format ? col.format(v) : v;

                          return <TableCell key={colIndex}>{f}</TableCell>;
                        })}
                      </TableRow>
                    );
                  }
                )}
              </TableBody>
            </SubTable>
          </TableCell>
        </TableRow>
      );
    },
    onRowExpansionChange: (curExpanded, allExpanded, rowsExpanded) => {
      (async () => {
        let sub = { ...subRows };
        for (let i = 0; i < curExpanded.length; i++) {
          const currentIndex = curExpanded[i].dataIndex;
          const currentRow = rows[currentIndex];

          if (currentRow) {
            let param = {
              ...currentRow,
              status: 'rejected',
              dateType: 'system_date',
              fromDate: dateProtoObjectToString(currentRow.systemDate),
              toDate: dateProtoObjectToString(currentRow.systemDate),
            };
            const { pendingTransactionsList } = await listPendingTrns(param);
            sub['dataIndex' + currentIndex] = pendingTransactionsList;
          }
        }

        setSubRows(sub);
      })();
    },
    columnOrder: [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
    ],
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
    downloadOptions: {
      filename: 'Entitlement' + moment().format('MMMM Do YYYY') + '.csv',
    },
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
      const { entitlementsList } = await listEntitlement(searchData);
      setRows(entitlementsList);

      notifyInfo(entitlementsList.length + ' search results.');
    } catch (error) {
      notifyError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // const components = {
  //   ExpandButton: function(props) {
  //     if (props.dataIndex >= 0) {
  //       if (!searchData.pendingTrnsOnly) {
  //         return <div style={{ width: '24px' }} />;
  //       }
  //     }
  //     return <ExpandButton {...props} />;
  //   },
  // };

  return (
    <div className={classes.root}>
      <Box component="div" mt={5}>
        {showFilter ? (
          <div>
            <div className={classes.grdRow}>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <TextField
                  name="textNumber"
                  label="Text Number"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  value={searchData.textNumber}
                  onChange={handleChange}
                />
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <EntryTypeSelect
                  freeSolo={true}
                  name="entryType"
                  label="Entry Type"
                  value={searchData.entryType}
                  onChange={handleChange}
                  setNewValue={(event, newValue) => {
                    handleChange({
                      currentTarget: {
                        name: 'entryType',
                        value: newValue ? newValue.code : '',
                      },
                    });
                  }}
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
                  type="" //client or gl
                ></SelectAccountNo>
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectAccountName
                  freeSolo={true}
                  required={false}
                  label="Account Name"
                  name="accountName"
                  value={searchData.accountName}
                  onChange={handleChange}
                ></SelectAccountName>
              </div>
            </div>
            <div className={classes.grdRow}>
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
                <TextField
                  name="processDate"
                  fullWidth
                  label="Process Date"
                  type="date"
                  value={searchData.processDate}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <TextField
                  name="positionDate"
                  fullWidth
                  label="Position Date"
                  type="date"
                  value={searchData.positionDate}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
            </div>
            <div className={classes.grdCell1}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={searchData.pendingTrnsOnly}
                    onChange={(e) => {
                      setSearchData({
                        ...searchData,
                        pendingTrnsOnly: e.target.checked,
                      });
                    }}
                  />
                }
                label="Show with Pending TRNS only"
              />
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
          title={'Entitlement'}
          data={rows}
          columns={columns}
          options={options}
          // components={components}
        />
      </Box>
    </div>
  );
}
