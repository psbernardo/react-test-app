import React, { useState, useEffect } from 'react';
import { Box, TextField } from '@material-ui/core';
import { notifyInfo, notifyError } from 'components/Notification/Notification';
import { listPositionRecon } from '../../../services/PositionReconService';
import SearchButton from '../../../components/Button/Search';
import { getSystemDate } from '../../../services/ProfileService';
import Table, { columnType } from 'components/Table/Table';
import useStyles from '../../../styles';
import QueryParam from '../../../services/QueryParamService';

export default function PositionReconTable({ params }) {
  const classes = useStyles();

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
      label: 'Contra Account',
    },
    {
      name: 'contraSource',
      label: 'Contra Source',
    },
    {
      name: 'originalcusip',
      label: 'Original Cusip',
      options: {
        display: false,
      },
    },
    {
      name: 'symbol',
      label: 'Symbol',
    },
    {
      name: 'cusip',
      label: 'Cusip',
    },
    {
      name: 'qty',
      label: 'Qty',
      type: columnType.quantity,
      addFooter: true,
    },
    {
      name: 'contraQty',
      label: 'Contra Qty',
      type: columnType.quantity,
      addFooter: true,
    },
    {
      name: 'diffQty',
      label: 'Diff Qty',
      type: columnType.quantity,
      addFooter: true,
    },
    {
      name: 'type',
      label: 'Type',
    },
    {
      name: 'qtyTwo',
      label: 'Qty2',
      type: columnType.quantity,
      addFooter: true,
    },
    {
      name: 'reorg',
      label: 'Reorg',
    },
    {
      name: 'dataType',
      label: 'Data Type',
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
      const data = await listPositionRecon(searchData);
      setRows(data.positionReconsList);
      notifyInfo(data.positionReconsList.length + ' search results.');
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
          title="POSITION RECONCILIATIONS"
          data={rows}
          columns={columns}
          options={options}
        />
      </Box>
    </div>
  );
}
