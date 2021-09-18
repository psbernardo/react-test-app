import React, { useState, useEffect } from 'react';
import { Box, InputLabel, IconButton, TextField } from '@material-ui/core';
import { Visibility as ViewIcon, Create as EditIcon } from '@material-ui/icons';
import ApibalDetailsModal from './ApibalDetailsModal';
import ApibalEditModal from './ApibalEditModal';
import {
  notifyInfo,
  notifyError,
  notifySuccess,
} from 'components/Notification/Notification';
import { listApibal, editApibal } from '../../../services/ApibalService';
import SearchButton from '../../../components/Button/Search';
import { getSystemDate } from '../../../services/ProfileService';
import QueryParam from '../../../services/QueryParamService';
import SelectSymbol from '../../../components/AutoComplete/SelectSymbol';
import SelectCusip from '../../../components/AutoComplete/SelectCusip';

import useStyles from '../../../styles';
import Table, { columnType } from 'components/Table/Table';

export default function ApibalTable({ params }) {
  const classes = useStyles();
  //Set value of Settle date search parameter
  useEffect(
    () => {
      async function init() {
        if (searchData.systemDate) return;

        const systemDate = await getSystemDate();
        setSearchData({ ...searchData, settleDate: systemDate });
      }

      init();
    },
    // eslint-disable-next-line
    []
  );

  const [rows, setRows] = useState([]);
  const [loading, setLoading] = React.useState(false);
  const [showFilter, setShowFilter] = React.useState(true);
  const [edit, setEdit] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [rowData, setRowData] = React.useState({});

  //search parameters initial value
  const [searchData, setSearchData] = React.useState(
    QueryParam.get({
      settleDate: '',
      symbol: '',
      cusip: '',
      symbolDescription: '',
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
                <IconButton
                  aria-label="edit"
                  onClick={() => {
                    setRowData(rows[dataIndex]);
                    setEdit(true);
                  }}
                >
                  <EditIcon />
                </IconButton>
              </div>
            </div>
          );
        },
      },
    },
    {
      name: 'apibalId',
      label: 'APIBAL ID',
    },
    {
      name: 'settleDate',
      label: 'Settle Date',
      type: columnType.date,
    },
    {
      name: 'originalCusip',
      label: 'Original Cusip',
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
      name: 'symbolDescription',
      label: 'Symbol Description',
    },
    {
      name: 'apibal',
      label: 'APIBAL',
    },
    {
      name: 'houseDtcc',
      label: 'House DTCC',
    },
    {
      name: 'pb_break',
      label: 'Break',
    },
    {
      name: 'dtccFree',
      label: 'DTCC Free',
    },
    {
      name: 'houseFree',
      label: 'House Free',
    },
    {
      name: 'breakFree',
      label: 'Break Free',
    },
    {
      name: 'dtccPledge',
      label: 'DTCC Pledge',
    },
    {
      name: 'housePledge',
      label: 'House Pledge',
    },
    {
      name: 'breaksPledge',
      label: 'Breaks Pledge',
    },
    {
      name: 'segregation',
      label: 'Segregation',
    },
    {
      name: 'age',
      label: 'Age',
    },
    {
      name: 'correctedDate',
      label: 'Corrected Date',
      type: columnType.date,
    },
    {
      name: 'note',
      label: 'Note',
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

  const handleEditClose = async (data) => {
    if (!data) {
      setEdit(false);
      return;
    }

    try {
      // EDIT
      const resp = await editApibal(data);
      const rowsCopy = [...rows];
      const index = rows.indexOf(rowData);
      rowsCopy[index] = resp.apibal;
      setRows(rowsCopy);

      notifySuccess('APIBAL has been updated.');
    } catch (error) {
      notifyError(error.message);
    }

    setEdit(false);
  };

  const handleSearch = async () => {
    try {
      setLoading(true);
      QueryParam.set(searchData);
      const data = await listApibal(searchData);
      console.log(data.apibalsList);
      setRows(data.apibalsList);
      notifyInfo(data.apibalsList.length + ' search results.');
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
                <SelectSymbol
                  freeSolo={true}
                  name="symbol"
                  label="Symbol"
                  value={searchData.symbol}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectCusip
                  freeSolo={true}
                  name="cusip"
                  label="Cusip"
                  value={searchData.cusip}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <InputLabel shrink id="symbolDescription">
                  Symbol Description
                </InputLabel>
                <TextField
                  fullWidth
                  name="symbolDescription"
                  value={searchData.symbolDescription}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        ) : null}
        <div className={classes.actionContainer}>
          <div className={classes.grdCellNone} style={{ marginRight: 10 }}>
            <SearchButton
              onClick={handleSearch}
              loading={loading}
              showfilter={(status) => setShowFilter(status)}
            />
          </div>
        </div>
      </Box>
      <Box component="div" mt={2}>
        <Table title="APIBAL" data={rows} columns={columns} options={options} />
      </Box>

      {open && (
        <ApibalDetailsModal
          onClose={handleClose}
          open={open}
          value={rowData}
        ></ApibalDetailsModal>
      )}

      {edit && (
        <ApibalEditModal
          onClose={handleEditClose}
          open={edit}
          value={rowData}
        ></ApibalEditModal>
      )}
    </div>
  );
}
