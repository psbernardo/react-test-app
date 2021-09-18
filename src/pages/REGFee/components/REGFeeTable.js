import React, { useState, useEffect } from 'react';
import { notifyInfo, notifyError } from 'components/Notification/Notification';
import { listRegFee } from '../../../services/RegFeeService';
import { Box, TextField } from '@material-ui/core';
import Table, { columnType } from 'components/Table/Table';
import useStyles from '../../../styles';
import SearchButton from '../../../components/Button/Search';
import QueryParam from '../../../services/QueryParamService';
import SelectCorrespondent from 'components/AutoComplete/SelectCorrespondent';
import { getSystemDate } from '../../../services/ProfileService';
import { dateStringToDate, padString } from '../../../services/ConvertService';
import SelectSystemCode from '../../../components/Dropdown/SelectSystemCode';
import SelectAutoCompleteBroker from '../../../components/AutoComplete/SelectAutoCompleteBroker';

export default function REGFeeTable({ params }) {
  const classes = useStyles();

  useEffect(
    () => {
      async function init() {
        const systemDate = await getSystemDate();
        const searchDataCopy = { ...searchData };

        if (!searchData.fromDate) {
          const formatSystemDate = dateStringToDate(systemDate);
          const m = padString(formatSystemDate.getMonth() + 1, '0', 2);
          const d = padString(1, '0', 2);
          searchDataCopy.fromDate = `${formatSystemDate.getFullYear()}-${m}-${d}`;
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

  const columns = [
    {
      name: 'correspondent',
      label: 'Correspondent',
    },
    {
      name: 'contraAccountNo',
      label: 'Contra Account No',
    },
    {
      name: 'executingVenue',
      label: 'Executing Venue',
    },
    {
      name: 'regFee',
      label: 'Reg Fee',
      type: columnType.amount,
      addFooter: true,
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

  const [rows, setRows] = useState([]);
  const [loading, setLoading] = React.useState(false);
  const [showFilter, setShowFilter] = React.useState(true);
  const [searchData, setSearchData] = React.useState(
    QueryParam.get({
      dateType: 'System Date',
      fromDate: '',
      toDate: '',
      correspondent: '',
      executingVenue: '',
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
      const data = await listRegFee(searchData);
      setRows(data.regFeesList);
      notifyInfo(data.regFeesList.length + ' search results.');
    } catch (error) {
      console.error(error);
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
              <div className={classes.grdCell1}>
                <SelectAutoCompleteBroker
                  freeSolo={true}
                  required={true}
                  name="executingVenue"
                  label="Executing Venue"
                  value={searchData.executingVenue}
                  onChange={handleChange}
                ></SelectAutoCompleteBroker>
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
          title={'Reg Fee'}
          data={rows}
          columns={columns}
          options={options}
        />
      </Box>
    </div>
  );
}
