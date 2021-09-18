import React, { useState, useEffect } from 'react';
import { notifyInfo, notifyError } from 'components/Notification/Notification';
import { Box, TextField } from '@material-ui/core';
import Table, { columnType } from 'components/Table/Table';
import useStyles from '../../../styles';
import SelectSymbol from '../../../components/AutoComplete/SelectSymbol';
import SearchButton from '../../../components/Button/Search';
import QueryParam from '../../../services/QueryParamService';
import { listDividend } from '../../../services/ReorgAnnouncement';

import { getSystemDate } from '../../../services/ProfileService';

export default function DividendTable({ params, announcementType }) {
  const classes = useStyles();
  const options = {
    selectableRows: 'none',
  };

  const columns = [
    {
      name: 'cashRate',
      label: 'Cash Rate',
      type: columnType.percentage,
    },
    {
      name: 'declarationDate',
      label: 'Declaration Date',
      type: columnType.date,
    },
    {
      name: 'expirationDate',
      label: 'Expiration Date',
      type: columnType.date,
    },
    {
      name: 'originalCusip',
      label: 'Original Cusip',
      options: {
        display: false,
      },
    },
    {
      name: 'payableDate',
      label: 'Payable Date',
      type: columnType.date,
    },
    {
      name: 'positionDate',
      label: 'Position Date',
      type: columnType.date,
    },
    {
      name: 'processDate',
      label: 'Process Date',
      type: columnType.date,
    },
    {
      name: 'qtyRate',
      label: 'QTY Rate',
      type: columnType.percentage,
    },
    {
      name: 'recordDate',
      label: 'Record Date',
      type: columnType.date,
    },
    {
      name: 'symbol',
      label: 'Symbol',
    },
    {
      name: 'systemDate',
      label: 'SystemDate',
      type: columnType.date,
    },
    {
      name: 'textNumber',
      label: 'Text Number',
    },
    {
      name: 'type',
      label: 'Type',
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
      fromSystemDate: '',
      toSystemDate: '',
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
      QueryParam.set({ ...searchData, announcementType: announcementType });
      const data = await listDividend(searchData);
      setRows(data.dividendsList);
      notifyInfo(data.dividendsList.length + ' search results.');
    } catch (error) {
      console.error(error);
      notifyError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(
    () => {
      async function init() {
        // if (searchData.systemDate) return;

        const systemDate = await getSystemDate();
        const searchDataCopy = { ...searchData };

        if (!searchData.fromSystemDate) {
          searchDataCopy.fromSystemDate = systemDate;
        }

        if (!searchData.toSystemDate) {
          searchDataCopy.toSystemDate = systemDate;
        }

        setSearchData(searchDataCopy);
      }

      init();
    },
    // eslint-disable-next-line
    []
  );

  return (
    <div className={classes.root}>
      <Box component="div" mt={5}>
        {showFilter ? (
          <div>
            <div className={classes.grdRow}>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <TextField
                  fullWidth
                  name="fromSystemDate"
                  label="From System Date"
                  type="date"
                  value={searchData.fromSystemDate}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                  inputProps={{
                    max: searchData.toDate,
                  }}
                />
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <TextField
                  fullWidth
                  name="toSystemDate"
                  label="To System Date"
                  type="date"
                  value={searchData.toSystemDate}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                  inputProps={{
                    min: searchData.fromDate,
                  }}
                />
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
              <div className={classes.grdCell1}></div>
              <div className={classes.grdCell1}></div>
              <div className={classes.grdCell1}></div>
            </div>
          </div>
        ) : null}
        <div className={classes.actionContainer} style={{ marginTop: 26 }}>
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
          title={'Dividend'}
          data={rows}
          columns={columns}
          options={options}
        />
      </Box>
    </div>
  );
}
