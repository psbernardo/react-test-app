import React, { useState, useEffect } from 'react';
import { notifyInfo, notifyError, notifySuccess } from 'components/Notification/Notification';
import { getSystemDate } from '../../../services/ProfileService';
import { Checkbox, Box, TextField, IconButton } from '@material-ui/core';
import { Check as CheckIcon, TextFieldsOutlined } from '@material-ui/icons';
import Table, { columnType } from 'components/Table/Table';
import QueryParam from '../../../services/QueryParamService';
import useStyles from '../../../styles';
import SelectHoliday from '../../../components/Dropdown/SelectHoliday';
import SearchButton from '../../../components/Button/Search';
import { listCalendar, updateSettleRecord, updateTradeRecord } from '../../../services/CalendarService';
import { protoDateObjectToString } from '../../../services/ConvertService';
export function CalendarTable({ params }) {
  const classes = useStyles();

  useEffect(
    () => {
      async function init() {
        const systemDate = await getSystemDate();
        const searchDataCopy = { ...searchData };

        if (!searchData.fromDate) {
          searchDataCopy.fromDate = systemDate;
        }

        if (!searchData.toDate) {
          searchDataCopy.toDate = systemDate;
        }

        setSearchData(searchDataCopy);
      }

      init();
    },
    // eslint-disable-next-line
    []
  );

  const options = {
    selectableRows: 'none',
  };

  const columns = [
    {
      name: 'systemDate',
      label: 'System Date',
      type: columnType.date,
    },
    {
      name: 'trade',
      label: 'Trade',
      options: {
        customBodyRenderLite: (dataIndex, a, c) => {
          return <Checkbox checked={rows[dataIndex].trade} onChange={event=> updateTrade(dataIndex)} />;
        },
      },
    },
    {
      name: 'settle',
      label: 'Settle',
      options: {
        customBodyRenderLite: (dataIndex, a, c) => {
          return <Checkbox checked={rows[dataIndex].settle} onChange={event=> updateSettle(dataIndex)}/>;
        },
      },
    },
    {
      name: 'dayOfTheWeek',
      label: 'Day of the Week',
    },
    {
      name: 'holidayName',
      label: 'Holiday Name',
    },
    {
      name: 'isCurrent',
      label: 'Is Current',
      options: {
        customBodyRenderLite: (dataIndex, a, c) => {
          return <Checkbox checked={rows[dataIndex].isCurrent} />;
        },
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

  const [loading, setLoading] = React.useState(false);
  const [showFilter, setShowFilter] = React.useState(true);
  const [rows, setRows] = useState([]);
  const [searchData, setSearchData] = React.useState(
    QueryParam.get({
      holidayName: '',
      fromDate: '',
      toDate: '',
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
      const data = await listCalendar(searchData);
      setRows(data.calendarsList);
      notifyInfo(data.calendarsList.length + ' search results.');
    } catch (error) {
      console.error(error);
      notifyError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const updateSettle = async (dataIndex) => {
    var settle = rows[dataIndex].settle

    if (settle) {
      settle = false;
    } else {
      settle = true;
    }

    const resp = await updateSettleRecord('' + rows[dataIndex].id, settle);
    const rowsCopy = [...rows];
    rowsCopy[dataIndex] = resp.calendar;
    setRows(rowsCopy);
    notifySuccess('Settle for ' + protoDateObjectToString(rows[dataIndex].systemDate) + ' has been updated.');
  };

  const updateTrade = async (dataIndex) => {
    var trade = rows[dataIndex].trade

    if (trade) {
      trade = false;
    } else {
      trade = true;
    }

    const resp = await updateTradeRecord('' + rows[dataIndex].id, trade);
    const rowsCopy = [...rows];
    rowsCopy[dataIndex] = resp.calendar;
    setRows(rowsCopy);
    notifySuccess('Trade for ' + protoDateObjectToString(rows[dataIndex].systemDate) + ' has been updated.');
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
                  name="fromDate"
                  label="From Date"
                  type="date"
                  value={searchData.fromDate}
                  onChange={handleChange}
                  className={classes.textField}
                  InputLabelProps={{ shrink: true }}
                  inputProps={{
                    max: searchData.toDate,
                  }}
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
                  className={classes.textField}
                  InputLabelProps={{ shrink: true }}
                  inputProps={{
                    min: searchData.fromDate,
                  }}
                />
              </div>
              <div className={classes.grdCell1}>
                <SelectHoliday
                  name="holidayName"
                  label="Holiday Name"
                  onChange={handleChange}
                  value={searchData.holidayName}
                ></SelectHoliday>
              </div>
              <div className={classes.grdCell1}></div>
              <div className={classes.grdCell1}></div>
            </div>
          </div>
        ) : null}
        <div className={classes.actionContainer}>
          <div className={classes.grdCellNone}>
            <SearchButton
              onClick={() => handleSearch()}
              loading={loading}
              showfilter={(status) => setShowFilter(status)}
            />
          </div>
        </div>
      </Box>
      <Box component="div" mt={2}>
        <Table
          title={'Calendar'}
          data={rows}
          columns={columns}
          options={options}
        />
      </Box>
    </div>
  );
}
