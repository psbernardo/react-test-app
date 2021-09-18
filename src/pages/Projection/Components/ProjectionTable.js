import React, { useState, useEffect } from 'react';
import ProjectionDetailsModal from './ProjectionDetailsModal';
import { Box, IconButton, TextField } from '@material-ui/core';
import { notifyInfo, notifyError } from 'components/Notification/Notification';
import { Visibility as ViewIcon } from '@material-ui/icons';
import SearchButton from '../../../components/Button/Search';
import QueryParam from '../../../services/QueryParamService';
import { getSystemDate } from '../../../services/ProfileService';
import useStyles from '../../../styles';
import Table, { columnType } from 'components/Table/Table';
import { listProjection } from '../../../services/ProjectionService';
export default function ProjectionTable() {
  const classes = useStyles();

  useEffect(
    () => {
      async function init() {
        if (searchData.settleDate) return;

        const settleDate = await getSystemDate();
        setSearchData({
          ...searchData,
          fromDate: settleDate,
          toDate: settleDate,
        });
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
      name: '',
      type: columnType.buttons,
      options: {
        customBodyRenderLite: (dataIndex) => {
          return (
            <div
              align={'left'}
              className={classes.grdRow}
              style={{ margin: 0, padding: 0 }}
            >
              <div align={'left'} className={classes.grdCeNone}>
                <IconButton
                  aria-label="view"
                  onClick={() => {
                    setRowData(rows[dataIndex]);
                    setOpen(true);
                  }}
                >
                  <ViewIcon />
                </IconButton>
              </div>
            </div>
          );
        },
      },
    },
    {
      name: 'settleDate',
      label: 'Settle Date',
      type: columnType.date,
    },
    {
      name: 'previousClosingBalance',
      label: 'Previous Closing Balance',
      type: columnType.amount,
    },
    {
      name: 'previousCnsSettlement',
      label: 'Previous CNS Settlement',
      type: columnType.amount,
    },
    {
      name: 'openingBalance',
      label: 'Opening Balance',
      type: columnType.amount,
    },
    {
      name: 'settlingTrades',
      label: 'Settling Trades',
      type: columnType.amount,
    },
    {
      name: 'closingBalance',
      label: 'Closing Balance',
      type: columnType.amount,
    },
    {
      name: 'settlementShortPosition',
      label: 'Settlement Short Position',
      type: columnType.amount,
    },
    {
      name: 'settlement',
      label: 'Settlement',
      type: columnType.amount,
    },
    {
      name: 'projection',
      label: 'Projection',
      type: columnType.amount,
    },
    {
      name: 'settlementVsProjection',
      label: 'Settlement Vs Projection',
      type: columnType.amount,
    },
    {
      name: 'status',
      label: 'Status',
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

  const [rowData, setRowData] = React.useState({});
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [showFilter, setShowFilter] = React.useState(true);
  const [rows, setRows] = useState([]);
  const [searchData, setSearchData] = React.useState(
    QueryParam.get({
      fromDate: '',
      toDate: '',
    })
  );

  const handleChange = (e, checkboxValue) => {
    const input = e.currentTarget.name ? e.currentTarget : e.target;

    setSearchData({
      ...searchData,
      [input.name]: checkboxValue !== undefined ? checkboxValue : input.value,
    });
  };

  const handleSearch = async () => {
    try {
      setLoading(true);
      QueryParam.set(searchData);
      const data = await listProjection(searchData);
      setRows(data.projectionsList);
      notifyInfo(data.projectionsList.length + ' search results.');
    } catch (error) {
      console.error(error);
      notifyError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = async (data, isEdit) => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Box component="div" mt={5}>
        {showFilter ? (
          <div>
            <div className={classes.grdRow}>
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
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
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
              <div
                className={classes.grdCell1}
                style={{ marginRight: 30 }}
              ></div>
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
          title="Projection"
          data={rows}
          columns={columns}
          options={options}
        />
      </Box>
      {open && (
        <ProjectionDetailsModal
          onClose={handleClose}
          open={open}
          value={rowData}
        ></ProjectionDetailsModal>
      )}
    </div>
  );
}
