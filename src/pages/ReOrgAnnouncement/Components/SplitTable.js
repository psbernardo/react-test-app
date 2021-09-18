import React, { useState, useEffect } from 'react';
import { notifyInfo, notifyError } from 'components/Notification/Notification';
import { Box, TextField } from '@material-ui/core';
import Table, { columnType } from 'components/Table/Table';
import useStyles from '../../../styles';
import SelectSymbol from '../../../components/AutoComplete/SelectSymbol';
import SearchButton from '../../../components/Button/Search';

import { listSplit } from '../../../services/ReorgAnnouncement';
import QueryParam from '../../../services/QueryParamService';
import { getSystemDate } from '../../../services/ProfileService';

export default function SplitTable({ params, announcementType }) {
  /*=========================================================================================
  Component style
  ===========================================================================================*/
  const classes = useStyles();

  /*=========================================================================================
  Table modifications
  ===========================================================================================*/

  const options = {
    selectableRows: 'none',
  };

  const columns = [
    {
      name: 'textNumber',
      label: 'Text Number',
    },
    {
      name: 'systemDate',
      label: 'System Date',
      type: columnType.date,
    },
    {
      name: 'expirationDate',
      label: 'Expiration Date',
      type: columnType.date,
    },
    {
      name: 'targetSymbol',
      label: 'Target Symbol',
    },
    {
      name: 'targetOriginalCusip',
      label: 'Target Original Cusip',
    },
    {
      name: 'initiatingSymbol',
      label: 'Initiating Symbol',
    },
    {
      name: 'initiatingOriginalCusip',
      label: 'Initiating Original Cusip',
    },
    {
      name: 'cash',
      label: 'Cash',
      type: columnType.amount,
    },
    {
      name: 'newRate',
      label: 'New Rate',
      type: columnType.amount,
    },
    {
      name: 'oldRate',
      label: 'Old Rate',
      type: columnType.amount,
    },
    {
      name: 'splitType',
      label: 'Split Type',
      options: {
        display: false,
      },
    },
    {
      name: 'recordDate',
      label: 'Record Date',
      type: columnType.date,
      options: {
        display: false,
      },
    },
    {
      name: 'positionDate',
      label: 'Position Date',
      type: columnType.date,
      options: {
        display: false,
      },
    },
    {
      name: 'processDate',
      label: 'Process Date',
      type: columnType.date,
      options: {
        display: false,
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
      const data = await listSplit(searchData);
      console.log(data.splitsList);
      setRows(data.splitsList);
      notifyInfo(data.splitsList.length + ' search results.');
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

  /*=========================================================================================
  Table component
  ===========================================================================================*/
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
                    max: searchData.toSystemDate,
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
                    min: searchData.fromSystemDate,
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
          title={'Split'}
          data={rows}
          columns={columns}
          options={options}
        />
      </Box>
    </div>
  );
}
