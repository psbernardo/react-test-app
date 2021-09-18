import React, { useState, useEffect } from 'react';
import { Box, TextField } from '@material-ui/core';
import { notifyInfo, notifyError } from 'components/Notification/Notification';
import { listBalanceRecon } from '../../../services/BalanceReconService';
import SearchButton from '../../../components/Button/Search';
import { getSystemDate } from '../../../services/ProfileService';
import QueryParam from '../../../services/QueryParamService';
import Table, { columnType } from 'components/Table/Table';
import useStyles from '../../../styles';

export default function BalanceTable({ params }) {
  const classes = useStyles();
  //Set value of system date search parameter
  useEffect(
    () => {
      async function init() {
        if (searchData.systemDate) return;

        const systemDate = await getSystemDate();
        setSearchData({ ...searchData, systemDate: systemDate });
      }

      init();
    },
    // eslint-disable-next-line
    []
  );

  const [rows, setRows] = useState([]);
  const [loading, setLoading] = React.useState(false);
  const [showFilter, setShowFilter] = React.useState(true);

  const [searchData, setSearchData] = useState(
    QueryParam.get({
      systemDate: '',
    })
  );

  const columns = [
    {
      name: 'systemDate',
      label: 'System Date',
      type: columnType.date,
    },
    {
      name: 'account',
      label: 'Account',
    },
    {
      name: 'contraAccount',
      label: 'Contra Account No',
    },
    {
      name: 'contraSource',
      label: 'Contra Source',
    },
    {
      name: 'amt',
      label: 'Amt',
      type: columnType.amount,
      addFooter: true,
    },
    {
      name: 'contraAmt',
      label: 'Contra Amt',
      type: columnType.amount,
      addFooter: true,
    },
    {
      name: 'amtDiff',
      label: 'Amt Diff',
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

  const handleSearch = async () => {
    try {
      setLoading(true);
      QueryParam.set(searchData);
      const data = await listBalanceRecon(searchData);
      setRows(data.balanceReconsList);
      notifyInfo(data.balanceReconsList.length + ' search results.');
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
              <div className={classes.grdCell1}></div>
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
          title="BALANCE RECONCILIATIONS"
          data={rows}
          columns={columns}
          options={options}
        />
      </Box>
    </div>
  );
}
