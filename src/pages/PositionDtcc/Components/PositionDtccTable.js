import React, { useState, useEffect } from 'react';
import PositionDtccDetailsModal from './PositionDtccDetailsModal';
import PositionDtccModal from './PositionDtccModal';
import {
  Box,
  IconButton,
  TextField,
  FormControlLabel,
  Checkbox,
  InputLabel,
} from '@material-ui/core';
import {
  notifySuccess,
  notifyInfo,
  notifyError,
} from 'components/Notification/Notification';
import { Visibility as ViewIcon, Create as EditIcon } from '@material-ui/icons';
import SearchButton from '../../../components/Button/Search';
import QueryParam from '../../../services/QueryParamService';
import { getSystemDate } from '../../../services/ProfileService';
import useStyles from '../../../styles';
import Table, { columnType } from 'components/Table/Table';
import {
  listPosition,
  updatePosition,
} from '../../../services/PositionDtccService';
import SelectSymbol from 'components/AutoComplete/SelectSymbol';
import SelectCusip from '../../../components/AutoComplete/SelectCusip';
export default function PositionTable() {
  const classes = useStyles();

  useEffect(
    () => {
      async function init() {
        if (searchData.settleDate) return;

        const systemDate = await getSystemDate();
        setSearchData({ ...searchData, settleDate: systemDate });
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
                  aria-label="edit"
                  onClick={() => handleOpenEdit(rows[dataIndex])}
                >
                  <EditIcon />
                </IconButton>
              </div>
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
      name: 'symbolNo',
      label: 'Symbol No',
    },
    {
      name: 'houseQty',
      label: 'House QTY',
      type: columnType.quantity,
      addFooter: true,
    },
    {
      name: 'streetQty',
      label: 'Street QTY',
      type: columnType.quantity,
      addFooter: true,
    },
    {
      name: 'breakQty',
      label: 'Break QTY',
      type: columnType.quantity,
      addFooter: true,
    },
    {
      name: 'houseValue',
      label: 'House Value',
      type: columnType.amount,
      addFooter: true,
    },
    {
      name: 'streetValue',
      label: 'Street Value',
      type: columnType.amount,
      addFooter: true,
    },
    {
      name: 'breakValue',
      label: 'Break Value',
      type: columnType.amount,
      addFooter: true,
    },
    {
      name: 'age',
      label: 'Age',
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

  const [rowData, setRowData] = React.useState({});
  const [open, setOpen] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [showFilter, setShowFilter] = React.useState(true);
  const [rows, setRows] = useState([]);
  const [searchData, setSearchData] = React.useState(
    QueryParam.get({
      settleDate: '',
      symbol: '',
      cusip: '',
      symbolDescription: '',
      showBreakOnly: false,
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
      const data = await listPosition(searchData);
      setRows(data.positionsList);
      notifyInfo(data.positionsList.length + ' search results.');
    } catch (error) {
      console.error(error);
      notifyError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCloseEdit = async (data, isEdit) => {
    if (!data) {
      setOpenEdit(false);
      return;
    }
    try {
      if (isEdit) {
        //EDIT
        const resp = await updatePosition(data);
        const rowsCopy = [...rows];
        const index = rows.indexOf(rowData);
        rowsCopy[index] = resp.position;
        setRows(rowsCopy);
        notifySuccess('Position has been updated.');
      }
      setOpenEdit(false);
    } catch (error) {
      console.error(error);
      notifyError(error.message);
    }
  };

  const handleOpenEdit = (data) => {
    if (!data) {
      data = {
        Note: '',
      };
    }

    setRowData(data);
    setOpenEdit(true);
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
                <TextField
                  name="symbolDescription"
                  fullWidth
                  label="Symbol Description"
                  value={searchData.symbolDescription}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <InputLabel shrink></InputLabel>
                <FormControlLabel
                  control={<Checkbox color="primary" />}
                  name="showBreakOnly"
                  label="Show Breaks"
                  checked={searchData.showBreakOnly}
                  onChange={handleChange}
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
          title={'DTCC Position'}
          data={rows}
          columns={columns}
          options={options}
        />
      </Box>
      {open && (
        <PositionDtccDetailsModal
          onClose={handleClose}
          open={open}
          value={rowData}
        ></PositionDtccDetailsModal>
      )}
      {openEdit && (
        <PositionDtccModal
          onClose={handleCloseEdit}
          open={openEdit}
          value={rowData}
        ></PositionDtccModal>
      )}
    </div>
  );
}
