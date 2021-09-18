// IN COLUMN SETTINGS
//  {
//   name: 'sdDebitCashBalance',
//   label: 'SD Debit Cash Balance',
//   type: 'quantity', //custom quantity/amount/percentage/date/dateTime
//   addFooter: true, //custom true/false
// },

//pending: filter retain values

import {
  FormGroup,
  TextField,
  Checkbox,
  Tooltip,
  IconButton,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import moment from 'moment-timezone';
import MUIDataTable from 'mui-datatables';
import { MuiThemeProvider } from '@material-ui/core/styles';
import tableTheme from './TableStyle';
import TableBodyFooter from './TableBodyFooter';
import CsvDownload from './CsvDownload';
import ServerSideTableBodyFooter from './ServerSideTableBodyFooter';

import {
  Save as SaveIcon,
  CheckCircle as CheckCircleIcon,
} from '@material-ui/icons';

import {
  getArrayKeyIndex,
  getArrayIndex,
  moveArrayIndex,
  tableDateTimeSortCompare,
  tableDateSortCompare,
  tableAmountSortCompare,
} from 'lib/utils/utils';
import {
  formatPbDate,
  formatCurrency,
  formatPercentage,
  formatQty,
  formatStatus,
} from 'lib/fmt';
import {
  protoTimeSpanObjectToString,
  protoDateObjectToDate,
  protoDatTimeObjectToDate,
  dateStringToDate,
  stringToDateTime,
} from '../../services/ConvertService';
import authSvc from '../../services/AuthService';
import {
  updateTableSettings,
  readTableSettings,
  createTableSettings,
} from '../../services/TableSettingsService';

export const columnType = {
  date: 'date',
  dateTime: 'dateTime',
  quantity: 'quantity',
  percentage: 'percentage',
  amount: 'amount',
  text: 'text',
  buttons: 'buttons',
  bool: 'bool',
  status: 'status',
};

const rowsPerPage = 50;
export default function Table({
  data: rows,
  columns,
  title,
  options,
  footerData,
  onSearch,
  pagination,
  setPagination,
  getCsvData,
  additionalCell,
}) {
  const [filterList, setFilterList] = useState({});
  const filterRows = () => {
    const filterKeys = Object.keys(filterList);
    if (!filterKeys.length) {
      return rows;
    }

    const filtered = rows.filter((r) => {
      let ok = true;
      filterKeys.forEach((key) => {
        if (filterList[key] !== r[key]) {
          ok = false;
          return false;
        }
      });
      return ok;
    });

    return filtered;
  };
  rows = filterRows();

  const [visibleColumns, setVisibleColumns] = React.useState([]);
  const [rowsSelected] = React.useState([]);
  const [columnOrder, setColumnOrder] = React.useState(
    columns.map((a, index) => {
      return index;
    })
  );

  const user = authSvc.getCurrentUser();
  const params = {
    title: title,
    userId: user.UserId,
    visibleColumns: visibleColumns,
    columnOrder: columnOrder,
  };

  const [openCsvDownload, setOpenCsvDownload] = React.useState(false);
  const columnSettings = getColumnSettings(
    columns,
    visibleColumns,
    rows,
    options
  );
  const optionSettings = getOptionSettings(
    options,
    columns,
    rows,
    title,
    columnOrder,
    setColumnOrder,
    visibleColumns,
    setVisibleColumns,
    rowsSelected,
    params,
    footerData,
    pagination,
    setPagination,
    setOpenCsvDownload,
    setFilterList,
    additionalCell
  );

  useEffect(() => {
    if (setPagination) {
      setPagination({
        count: 0,
        rowsPerPage: 50,
        pageNo: 0,
        reload: false,
        sortName: '',
        sortDirection: '',
      });
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (pagination) {
      if (pagination.reload) {
        onSearch(true);
      }
    }
    // eslint-disable-next-line
  }, [pagination]);

  // useEffect(
  //   () => {
  //     setColumnOrder(getColumnOrder(columns, columnSettings));
  //     setVisibleColumns(getVisibleColumns(columns));
  //   },
  //   // eslint-disable-next-line
  //   []
  // );

  useEffect(
    () => {
      params.visibleColumns = getVisibleColumns(columns);
      params.columnOrder = getColumnOrder(columns, columnSettings);

      const checkSettings = readTableSettings(params);

      checkSettings
        .then(function(res) {
          const currentColumnCount = params.columnOrder.length;
          const saveColumnCount = res.columnOrder.split(',').length;

          setVisibleColumns(
            currentColumnCount === saveColumnCount
              ? res.visibleColumns.split(',')
              : params.visibleColumns
          );
          setColumnOrder(
            currentColumnCount === saveColumnCount
              ? res.columnOrder.split(',')
              : params.columnOrder
          );
        })
        .catch((err) => {
          // Create table for settings when none is found
          const checkSettings = createTableSettings(params);
          checkSettings
            .then(function(res) {
              setVisibleColumns(res.tableSettings.visibleColumns.split(','));
              setColumnOrder(res.tableSettings.columnOrder.split(','));
            })
            .catch((err) => {
              console.error(err);
              return;
            });
          console.error(err);
          return;
        });
    },
    // eslint-disable-next-line
    []
  );

  const getFormattedCsvData = async () => {
    // const types = getColumnTypes(cols, columns);
    const raw = await getCsvData();
    if (!raw.length) {
      return [];
    }

    let keys = Object.keys(raw[0]);
    moveArrayIndex(keys, getArrayIndex(keys, 'accountId'), 0);
    moveArrayIndex(keys, getArrayIndex(keys, 'trnsId'), 0);

    let columnTypes = {};
    keys.forEach((key) => {
      const set = getColumnSettingsByName(columnSettings, key);
      columnTypes[key] = set ? set.type : undefined;
    });

    const formatted = raw.map((data) => {
      let r = {};
      keys.forEach((key) => {
        r[key] = getColumnValue(columnTypes[key], data[key]);
      });

      return r;
    });

    return formatted;
  };

  return (
    <React.Fragment>
      {openCsvDownload && (
        <CsvDownload
          getData={getFormattedCsvData}
          filename={getCsvFileName(title)}
          open={openCsvDownload}
          onClose={() => {
            setOpenCsvDownload(false);
          }}
        />
      )}
      <MuiThemeProvider theme={tableTheme(title)}>
        <MUIDataTable
          title={title}
          data={rows}
          columns={columnSettings}
          options={optionSettings}
          components={{
            Checkbox: CustomCheckbox,
          }}
        />
      </MuiThemeProvider>
    </React.Fragment>
  );
}

const CustomCheckbox = (props) => {
  const bgColor =
    props['data-description'] === 'row-select-header' ? '' : 'whitesmoke';

  return (
    <Checkbox
      style={{
        backgroundColor: bgColor,
      }}
      {...props}
    />
  );
};

const getColumnSettings = (columns, visibleColumns, rows, options) => {
  const sortedColumns = sortColumnSettings([...columns]);

  return sortedColumns.map((col) => {
    col.options = col.options || {};

    //visibility state
    if (visibleColumns.includes(col.name)) {
      col.options.display = true;
    } else if (visibleColumns.length) {
      col.options.display = false;
    }

    switch (col.type) {
      case columnType.date:
        if (!options.serverSide) {
          col.options.filterType = 'custom';
          col.options.filterList = [];
          col.options.customFilterListOptions = getCustomFilterListOptions(col);
          col.options.filterOptions = {
            names: [],
            logic(stringValue, filters) {
              const from = dateStringToDate(filters[0]);
              const to = dateStringToDate(filters[1]);
              const value = protoDateObjectToDate(stringValue);

              if (from && to) {
                return !(value >= from && value <= to);
              } else if (from) {
                return !(value >= from);
              } else if (to) {
                return !(value <= to);
              }

              return false;
            },
            display: (filterList, onChange, index, column) => {
              return dateRangeTemplate(
                filterList,
                onChange,
                index,
                column,
                col,
                'date'
              );
            },
          };
        } else {
          col.options.filter = false;
        }

        col.options.customBodyRenderLite = (dataIndex) => {
          return getColumnValue(col.type, rows[dataIndex][col.name]);
        };

        col.options.sortCompare = tableDateSortCompare;
        break;
      case columnType.dateTime:
        if (!options.serverSide) {
          col.options.filterType = 'custom';
          col.options.filterList = [];
          col.options.customFilterListOptions = getCustomFilterListOptions(col);
          col.options.filterOptions = {
            fullWidth: true,
            names: [],
            logic(stringValue, filters) {
              const from = stringToDateTime(filters[0]);
              const to = stringToDateTime(filters[1]);
              const value = protoDatTimeObjectToDate(stringValue);

              if (from && to) {
                return !(value >= from && value <= to);
              } else if (from) {
                return !(value >= from);
              } else if (to) {
                return !(value <= to);
              }

              return false;
            },
            display: (filterList, onChange, index, column) => {
              return dateRangeTemplate(
                filterList,
                onChange,
                index,
                column,
                col,
                'datetime-local'
              );
            },
          };
        } else {
          col.options.filter = false;
        }

        if (!col.options.customBodyRenderLite && rows?.length) {
          col.options.customBodyRenderLite = (dataIndex) => {
            return getColumnValue(col.type, rows[dataIndex][col.name]);
          };
        }

        col.options.sortCompare = tableDateTimeSortCompare;
        break;
      case columnType.amount:
      case columnType.percentage:
      case columnType.quantity:
        col.options.customBodyRenderLite = (dataIndex) => {
          const value = rows[dataIndex][col.name];
          const formattedValue = getColumnValue(col.type, value);

          return (
            <div align="right" style={{ color: value < 0 && '#f44336' }}>
              {formattedValue}
            </div>
          );
        };

        col.options.sortCompare = tableAmountSortCompare;
        break;
      case columnType.bool:
        col.options.customBodyRenderLite = (dataIndex) => {
          return (
            <div style={{ textAlign: 'center' }}>
              {rows[dataIndex][col.name] ? <CheckCircleIcon /> : null}
            </div>
          );
        };
        break;
      case columnType.status:
        col.options.customBodyRenderLite = (dataIndex) => {
          const value = rows[dataIndex][col.name];
          const formattedValue = getColumnValue(col.type, value);

          return <div align="right">{formattedValue}</div>;
        };

        break;
      case columnType.buttons:
        col.options = {
          ...{
            draggable: false,
            resizable: false,
            print: false,
            searchable: false,
            filter: false,
            sort: false,
            empty: true,
            viewColumns: false,
            download: false,
          },
          ...col.options,
        };

        break;
      default:
        break;
    }

    return col;
  });
};

const getCustomFilterListOptions = (col) => {
  return {
    render: (value) => {
      if (value[0] && value[1]) {
        return `From ${col.label}: ${value[0]}, To ${col.label}: ${value[1]}`;
      } else if (value[0]) {
        return `From ${col.label}: ${value[0]}`;
      } else if (value[1]) {
        return `To ${col.label}: ${value[1]}`;
      }
      return [];
    },
    update: (filterList, filterPos, index) => {
      if (filterPos === 0) {
        filterList[index].splice(filterPos, 1, '');
      } else if (filterPos === 1) {
        filterList[index].splice(filterPos, 1);
      } else if (filterPos === -1) {
        filterList[index] = [];
      }

      return filterList;
    },
  };
};

const getCsvFileName = (title) => {
  return (
    title.replace(/ /g, '') + '_' + moment().format('MMMM Do YYYY') + '.csv'
  );
};

const dateRangeTemplate = (
  filterList,
  onChange,
  index,
  column,
  col,
  dateType
) => (
  <div>
    <FormGroup row>
      <TextField
        label={'From ' + col.label}
        type={dateType}
        InputLabelProps={{ shrink: true }}
        value={filterList[index][0] || ''}
        onChange={(event) => {
          filterList[index][0] = event.target.value;
          onChange(filterList[index], index, column);
        }}
        style={{ width: '45%', marginRight: '5%' }}
        inputProps={{
          max: filterList[index][1],
        }}
      />
      <TextField
        label={'To ' + col.label}
        type={dateType}
        InputLabelProps={{ shrink: true }}
        value={filterList[index][1] || ''}
        onChange={(event) => {
          filterList[index][1] = event.target.value;
          onChange(filterList[index], index, column);
        }}
        style={{ width: '45%' }}
        inputProps={{
          min: filterList[index][0],
        }}
      />
    </FormGroup>
  </div>
);

const getOptionSettings = (
  options,
  columns,
  rows,
  title,
  columnOrder,
  setColumnOrder,
  visibleColumns,
  setVisibleColumns,
  rowsSelected,
  params,
  footerData,
  pagination,
  setPagination,
  setOpenCsvDownload,
  setFilterList,
  additionalCell
) => {
  const footerSettings = getFooterSettings(columns);

  let defaultSettings = {
    columnOrder: columnOrder,
    filterType: 'multiselect',
    responsive: 'standard',
    download: true,
    filter: true,
    search: true,
    print: false,
    sort: true,
    viewColumns: true,
    resizableColumns: false,
    draggableColumns: {
      enabled: true,
    },
    selectableRowsHeader: true,
    selectableRows: 'multiple',
    rowsSelected: rowsSelected,
    rowsPerPage: rowsPerPage,
    rowsPerPageOptions: [50, 100, 500, 1000, 15000, 30000, 100000],
    downloadOptions: {
      filename: getCsvFileName(title),
    },
    fixedHeader: true,
    fixedSelectColumn: false,
    tableBodyHeight: title !== 'Locations' ? '400px' : 'auto',
    onColumnOrderChange: (newColumnOrder) => {
      setColumnOrder(newColumnOrder);
    },
    customTableBodyFooterRender: function(opts) {
      return (
        <TableBodyFooter
          columnOrder={columnOrder}
          columns={opts.columns}
          columnsWithAmt={footerSettings.columnsWithAmt}
          columnsWithQty={footerSettings.columnsWithQty}
          columnsWithPercentage={footerSettings.columnsWithPercentage}
          rows={rows}
          selectableRows={options.selectableRows}
        ></TableBodyFooter>
      );
    },
    onViewColumnsChange: (changedColumn, action) => {
      if (action === 'add') {
        if (changedColumn === 'a-selectAll') {
          showAllColumns(columns, setVisibleColumns);
        } else {
          setVisibleColumns([...visibleColumns, changedColumn]);
        }
      } else {
        let copy = [...visibleColumns];
        let index = copy.indexOf(changedColumn);

        if (changedColumn === 'a-selectAll') {
          copy = [''];
          setVisibleColumns(copy);
        } else {
          copy.splice(index, 1);
          setVisibleColumns(copy);
        }
      }
    },
    customSearch: (searchQuery, currentRow, cols) => {
      const types = getColumnTypes(cols, columns);
      for (let i = 0; i < currentRow.length; i++) {
        const value = currentRow[i];
        if (!value) continue;
        if (typeof value === 'string') {
          if (value.toLowerCase().includes(searchQuery.toLowerCase()))
            return true;
        }
        const formattedValue = getColumnValue(types[i], value);
        if (
          formattedValue
            .toString()
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
          return true;
      }
      return false;
    },
    onDownload: (buildHead, buildBody, cols, data) => {
      const types = getColumnTypes(cols, columns);
      const body = data.map((row) => {
        row.data = row.data.map((value, index) => {
          return getColumnValue(types[index], value);
        });
        return row;
      });
      return '\uFEFF' + buildHead(cols) + buildBody(body).replace(/"'/g, '"');
    },
    customToolbar: function() {
      return (
        <Tooltip title="Save Table" arrow>
          <IconButton
            onClick={() => {
              updateTableSettings(params);
            }}
          >
            <SaveIcon />
          </IconButton>
        </Tooltip>
      );
    },
  };

  if (options.serverSide) {
    defaultSettings.customSearch = undefined;
    defaultSettings.onDownload = () => {
      setOpenCsvDownload(true);
      return false;
    };
    defaultSettings.filterType = 'select';
    defaultSettings.count = pagination.count;
    defaultSettings.page = pagination.pageNo;
    defaultSettings.rowsPerPage = pagination.rowsPerPage;
    defaultSettings.onTableChange = (action, tableState) => {
      switch (action) {
        case 'changePage':
          setPagination({
            ...pagination,
            pageNo: tableState.page,
            reload: true,
          });
          break;
        case 'changeRowsPerPage':
          setPagination({
            ...pagination,
            rowsPerPage: tableState.rowsPerPage,
            reload: true,
          });
          break;
        case 'sort':
          setPagination({
            ...pagination,
            sortDirection: tableState.sortOrder.direction,
            sortName: tableState.sortOrder.name,
            reload: true,
          });
          break;
        case 'filterChange':
          {
            let filter = {};

            tableState.filterList.forEach((item, index) => {
              if (item.length) {
                filter[tableState.columns[index].name] = item[0];
              }
            });
            setFilterList(filter);
          }
          break;
        default:
      }
    };
    defaultSettings.customTableBodyFooterRender = function(opts) {
      if (!footerData) return null;
      return (
        <ServerSideTableBodyFooter
          columnOrder={columnOrder}
          columns={opts.columns}
          data={footerData}
          additionalCell={additionalCell}
        ></ServerSideTableBodyFooter>
      );
    };
  }

  if (!options) {
    return defaultSettings;
  }

  return { ...defaultSettings, ...options };
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
      return protoTimeSpanObjectToString(value, 'MM/DD/YYYY HH:mm:ss');
    case columnType.quantity:
      return formatQty(value);
    case columnType.percentage:
      return formatPercentage(value);
    case columnType.amount:
      return formatCurrency(value);
    case columnType.status:
      return formatStatus(value);
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

const getFooterSettings = (columns) =>
  columns.reduce(
    (settings, col) => {
      if (col.addFooter)
        switch (col.type) {
          case columnType.amount:
            settings.columnsWithAmt.push(col.name);
            break;
          case columnType.percentage:
            settings.columnsWithPercentage.push(col.name);
            break;
          case columnType.quantity:
            settings.columnsWithQty.push(col.name);
            break;
          default:
            console.error(
              "cannot add custom footer, object have invalid 'type' property"
            );
            break;
        }

      return settings;
    },
    {
      columnsWithAmt: [],
      columnsWithQty: [],
      columnsWithPercentage: [],
    }
  );

const getVisibleColumns = (columns) =>
  columns.reduce((filtered, col) => {
    if (
      col.options === undefined ||
      col.options.display === undefined ||
      col.options.display === true ||
      col.options.display === 'true'
    ) {
      filtered.push(col.name);
    }
    return filtered;
  }, []);

const getColumnOrder = (columns, columnsSettings) =>
  columns.map((col) => {
    return getArrayKeyIndex(columnsSettings, col.name, 'name');
  });

const getColumnSettingsByName = (columnsSettings, name) => {
  const index = getArrayKeyIndex(columnsSettings, name, 'name');
  return columnsSettings[index];
};

const sortColumnSettings = (columns) =>
  columns.sort(function(a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

const showAllColumns = (col, setVisibleColumns) => {
  const showColumns = col.reduce((filtered, col) => {
    if (col.type === 'buttons') {
      filtered.push(col.name);
    }
    if (
      col.options === undefined ||
      col.options.display === undefined ||
      col.options.display === false ||
      col.options.display === 'false'
    ) {
      col.options.display = true;
      filtered.push(col.name);
    }

    return filtered;
  }, []);

  setVisibleColumns(showColumns);
};
