import React, { useState } from 'react';
import {
  notifySuccess,
  notifyInfo,
  notifyError,
} from 'components/Notification/Notification';
import OptionProfileModal from './OptionProfileModal';
import {
  listOptionProfile,
  createOptionProfile,
  updateOptionProfile,
} from '../../../services/OptionProfileService';
import { Add as AddIcon, Create as EditIcon } from '@material-ui/icons';
import {
  Box,
  TextField,
  IconButton,
  Button,
  Select,
  MenuItem,
  InputLabel,
} from '@material-ui/core';
import Table, { columnType } from 'components/Table/Table';
import useStyles from '../../../styles';
import SelectSymbol from '../../../components/AutoComplete/SelectSymbol';
import SearchButton from '../../../components/Button/Search';
import QueryParam from '../../../services/QueryParamService';

export default function OptionProfileTable({ params }) {
  const classes = useStyles();

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
                  aria-label="edit"
                  onClick={() => handleOpen(rows[dataIndex])}
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
      name: 'originalCusip',
      label: 'Original Cusip',
    },
    {
      name: 'underlyingOriginalCusip',
      label: 'Underlying Original Cusip',
    },
    {
      name: 'symbol',
      label: 'Symbol',
    },
    {
      name: 'symbolDescription',
      label: 'Symbol Description',
    },
    {
      name: 'secType',
      label: 'Sec Type',
    },
    {
      name: 'pc',
      label: 'Put/Call',
    },
    {
      name: 'strikePrice',
      label: 'Strike Price',
    },
    {
      name: 'month',
      label: 'Month',
    },
    {
      name: 'year',
      label: 'Year',
    },
    {
      name: 'expirationDate',
      label: 'Expiration Date',
      type: columnType.date,
    },
    {
      name: 'unitMultiplier',
      label: 'Unit Multiplier',
      type: columnType.quantity,
      options: {
        display: true,
      },
    },
    {
      name: 'systemDate',
      label: 'System Date',
      type: columnType.date,
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

  const options = {
    selectableRows: 'none',
  };

  const [pagination, setPagination] = useState({});
  const [rowData, setRowData] = React.useState({});
  const [open, setOpen] = React.useState(false);
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = React.useState(false);
  const [showFilter, setShowFilter] = React.useState(true);
  const [searchData, setSearchData] = React.useState(
    QueryParam.get({
      underlyingSymbol: '',
      symbol: '',
      expirationDate: '',
      month: '',
      year: '',
      pc: '',
      securityType: '',
      status: '',
    })
  );

  const handleChange = (e, x) => {
    const input = e.currentTarget.name ? e.currentTarget : e.target;

    setSearchData({
      ...searchData,
      [input.name]: input.value,
    });
  };

  const getCsvData = async () => {
    const data = await listOptionProfile(searchData);
    return data.optionProfilesList;
  };

  const handleSearch = async (paginationChange) => {
    try {
      setLoading(true);
      QueryParam.set(searchData);

      let paginationCopy = {
        ...pagination,
        reload: false,
        pageNo: paginationChange === true ? pagination.pageNo : 0,
      };

      const data = await listOptionProfile(searchData, paginationCopy);
      if (paginationChange !== true) {
        notifyInfo(data.summary.totalRows + ' search results.');
      }
      paginationCopy.count = data.summary.totalRows;
      console.log(paginationCopy);
      setPagination(paginationCopy);
      setRows(data.optionProfilesList);
    } catch (error) {
      console.error(error);
      notifyError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleOpen = (data) => {
    if (!data) {
      //ADD default values
      data = {
        underlyingOriginalCusip: '',
        symbol: '',
        expirationDate: '',
        month: '',
        year: '',
        pc: '',
        secType: '',
        status: '',
      };
    }
    console.log(data);
    setRowData(data);
    setOpen(true);
  };

  const handleClose = async (data, isEdit) => {
    if (!data) {
      setOpen(false);
      return;
    }

    let valid = true;
    if (!data.symbol) {
      notifyError('Symbol is required.');
      valid = false;
    }
    if (!data.symbolDescription) {
      notifyError('Symbol Description is required.');
      valid = false;
    }
    if (!data.multiplier) {
      notifyError('Multiplier is required.');
      valid = false;
    }
    if (!data.status) {
      notifyError('Status is required.');
      valid = false;
    }
    if (!data.secType) {
      notifyError('Security Type is required.');
      valid = false;
    }

    if (!valid) {
      return;
    }

    console.log(rowData);
    console.log(data);

    try {
      if (isEdit) {
        //EDIT
        // const resp = await updateOptionProfile(data);
        await updateOptionProfile(data);
        let rowsCopy = [...rows];
        const index = rows.indexOf(rowData);
        rowsCopy[index] = data;
        setRows(rowsCopy);
        notifySuccess('Security Master has been updated.');
      } else {
        // ADD
        const resp = await createOptionProfile(data);
        setRows([resp.optionProfile, ...rows]);
        notifySuccess('New Option Profile has been added.');
      }

      setOpen(false);
    } catch (error) {
      console.error(error);
      notifyError(error.message);
    }
    setOpen(false);
  };
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
                  name="underlyingOriginalCusip"
                  fullWidth
                  label="Underlying OriginalCusip"
                  value={searchData.underlyingOriginalCusip}
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
                <TextField
                  fullWidth
                  name="expirationDate"
                  label="Expiration Date"
                  type="date"
                  value={searchData.expirationDate}
                  onChange={handleChange}
                  className={classes.textField}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <InputLabel shrink>Month</InputLabel>
                <Select
                  fullWidth
                  name="month"
                  value={searchData.month}
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>Blank</em>
                  </MenuItem>
                  <MenuItem value="January">January</MenuItem>
                  <MenuItem value="February">February</MenuItem>
                  <MenuItem value="March">March</MenuItem>
                  <MenuItem value="April">April</MenuItem>
                  <MenuItem value="May">May</MenuItem>
                  <MenuItem value="June">June</MenuItem>
                  <MenuItem value="July">July</MenuItem>
                  <MenuItem value="August">August</MenuItem>
                  <MenuItem value="September">September</MenuItem>
                  <MenuItem value="October">October</MenuItem>
                  <MenuItem value="November">November</MenuItem>
                  <MenuItem value="December">December</MenuItem>
                </Select>
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <TextField
                  fullWidth
                  name="year"
                  label="Year"
                  value={searchData.year}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <InputLabel shrink>Put/Call</InputLabel>
                <Select
                  name="pc"
                  fullWidth
                  value={searchData.pc}
                  onChange={handleChange}
                >
                  <MenuItem value="P">Put</MenuItem>
                  <MenuItem value="C">Call</MenuItem>
                </Select>
              </div>
            </div>
            <div className={classes.grdRow}>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <InputLabel shrink>Security Type</InputLabel>
                <Select
                  name="secType"
                  fullWidth
                  value={searchData.secType}
                  onChange={handleChange}
                >
                  <MenuItem value="OI">Index Options</MenuItem>
                  <MenuItem value="OS">Stock Option</MenuItem>
                </Select>
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <InputLabel shrink>Status</InputLabel>
                <Select
                  name="status"
                  fullWidth
                  value={searchData.status}
                  onChange={handleChange}
                >
                  <MenuItem value="active">Active</MenuItem>
                  <MenuItem value="inactive">Inactive</MenuItem>
                </Select>
              </div>

              <div className={classes.grdCell1} style={{ marginRight: 30 }} />
              <div className={classes.grdCell1} style={{ marginRight: 30 }} />
              <div className={classes.grdCell1} style={{ marginRight: 30 }} />
              <div className={classes.grdCell1} style={{ marginRight: 30 }} />
            </div>
          </div>
        ) : null}
        <div className={classes.actionContainer}>
          <div className={classes.grdCellNone} style={{ marginRight: 10 }}>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              startIcon={<AddIcon />}
              onClick={() => {
                handleOpen();
              }}
            >
              Add New
            </Button>
          </div>
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
          title={'Option Profile'}
          data={rows}
          columns={columns}
          options={options}
          onSearch={handleSearch}
          pagination={pagination}
          setPagination={setPagination}
          getCsvData={getCsvData}
        />
      </Box>
      {open && (
        <OptionProfileModal
          onClose={handleClose}
          open={open}
          value={rowData}
        ></OptionProfileModal>
      )}
    </div>
  );
}
