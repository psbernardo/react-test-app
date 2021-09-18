import React, { useState, useEffect } from 'react';
import {
  Box,
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from '@material-ui/core';

import { notifyInfo, notifyError } from 'components/Notification/Notification';
import { listFee } from '../../../services/FeeService';
import SearchButton from '../../../components/Button/Search';
import SelectAccountNo from '../../../components/AutoComplete/SelectAccountNo';
import { getSystemDate } from '../../../services/ProfileService';
import QueryParam from '../../../services/QueryParamService';
import Table, { columnType } from 'components/Table/Table';
import useStyles from '../../../styles';

export default function FeeTable({ params }) {
  const classes = useStyles();

  useEffect(
    () => {
      async function init() {
        // if (searchData.systemDate) return;

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

  const [rows, setRows] = useState([]);
  const [loading, setLoading] = React.useState(false);
  const [showFilter, setShowFilter] = React.useState(true);
  //search parameters initial value
  const [searchData, setSearchData] = React.useState(
    QueryParam.get({
      contraAccount: '',
      feeType: '',
      dateType: 'settle_date',
      fromDate: '',
      toDate: '',
    })
  );

  const columns = [
    {
      name: 'contraAccount',
      label: 'Contra Account',
    },
    {
      name: 'feeType',
      label: 'Fee Type',
    },
    {
      name: 'fee',
      label: 'Fee',
      type: columnType.amount,
      addFooter: true,
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
  const options = {
    selectableRows: 'none',
  };

  const handleSearch = async () => {
    try {
      setLoading(true);
      QueryParam.set(searchData);
      const data = await listFee(searchData);
      console.log(searchData);
      setRows(data.feesList);
      notifyInfo(data.feesList.length + ' search results.');
    } catch (error) {
      notifyError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const input = e.currentTarget.name ? e.currentTarget : e.target;

    setSearchData({
      ...searchData,
      [input.name]: input.value,
    });
  };

  return (
    <div className={classes.root}>
      <Box component="div" mt={5}>
        {showFilter ? (
          <div>
            <div className={classes.grdRow}>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectAccountNo
                  required={false}
                  freeSolo={true}
                  name="contraAccountNo"
                  label="Contra Account No"
                  value={searchData.contraAccountNo}
                  // correspondent={searchData.correspondent}
                  onChange={handleChange}
                  type="" //client or gl
                ></SelectAccountNo>
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <InputLabel shrink>Fee Type</InputLabel>
                <Select
                  fullWidth
                  name="feeType"
                  value={searchData.feeType}
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>Blank</em>
                  </MenuItem>
                  <MenuItem value="REG Fee">REG Fee</MenuItem>
                  <MenuItem value="TAF Fee">TAF Fee</MenuItem>
                </Select>
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <InputLabel shrink>Date Type</InputLabel>
                <Select
                  fullWidth
                  value={searchData.dateType}
                  onChange={handleChange}
                  name="dateType"
                >
                  <MenuItem value="system_date">System Date</MenuItem>
                  <MenuItem value="trade_date">Trade Date</MenuItem>
                  <MenuItem value="settle_date">Settle Date</MenuItem>
                </Select>
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <TextField
                  name="fromDate"
                  fullWidth
                  label="From Date"
                  type="date"
                  value={searchData.fromDate}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className={classes.grdCell1}>
                <TextField
                  name="toDate"
                  fullWidth
                  label="To Date"
                  type="date"
                  value={searchData.toDate}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                />
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
        <Table title={'FEE'} data={rows} columns={columns} options={options} />
      </Box>
    </div>
  );
}
