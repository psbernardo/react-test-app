import React, { useState, useEffect } from 'react';
import ReserveCalcDetailsModal from './ReserveCalcDetailsModal';

import { Box, IconButton, TextField } from '@material-ui/core';
import Table, { columnType } from 'components/Table/Table';
import { notifyInfo, notifyError } from 'components/Notification/Notification';
import { listReserve } from '../../../services/ReserveCalcService';
import SearchButton from '../../../components/Button/Search';
import { getSettleDate } from '../../../services/ProfileService';
import { Visibility as ViewIcon } from '@material-ui/icons';
import QueryParam from '../../../services/QueryParamService';
import useStyles from '../../../styles';

export default function BalanceTable({ params }) {
  const classes = useStyles();

  useEffect(
    () => {
      async function init() {
        if (searchData.settleDate) return;

        const settleDate = await getSettleDate();
        setSearchData({ ...searchData, settleDate: settleDate });
      }

      init();
    },
    // eslint-disable-next-line
    []
  );

  const [rows, setRows] = useState([]);
  const [loading, setLoading] = React.useState(false);
  const [showFilter, setShowFilter] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  const [rowData, setRowData] = React.useState({});

  // //search parameters initial value
  const [searchData, setSearchData] = useState(
    QueryParam.get({
      settleDate: '',
      type: '',
      code: '',
    })
  );

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
              <div align={'left'} className={classes.grdCell1}>
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
      name: 'type',
      label: 'Type',
    },
    {
      name: 'code',
      label: 'Code',
    },
    {
      name: 'description',
      label: 'Description',
    },
    {
      name: 'debit',
      label: 'Debit',
      type: columnType.amount,
    },
    {
      name: 'credit',
      label: 'Credit',
      type: columnType.amount,
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

  const handleClose = () => {
    setOpen(false);
  };

  const handleSearch = async () => {
    try {
      setLoading(true);
      QueryParam.set(searchData);
      const data = await listReserve(searchData);
      setRows(data.reservesList);
      notifyInfo(data.reservesList.length + ' search results.');
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
                  name="settleDate"
                  fullWidth
                  label="Settle Date"
                  type="date"
                  value={searchData.settleDate}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <TextField
                  name="type"
                  label="Type"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  value={searchData.type}
                  onChange={handleChange}
                />
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <TextField
                  name="code"
                  label="Code"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  value={searchData.code}
                  onChange={handleChange}
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
        <Table
          title="RESERVE CALCULATION"
          data={rows}
          columns={columns}
          options={options}
        />
      </Box>

      {open && (
        <ReserveCalcDetailsModal
          onClose={handleClose}
          open={open}
          value={rowData}
        ></ReserveCalcDetailsModal>
      )}
    </div>
  );
}
