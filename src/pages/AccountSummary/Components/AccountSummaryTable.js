import React, { useState, useEffect } from 'react';
import AccountSummaryDetailsModal from './AccountSummaryDetailsModal';
import {
  Box,
  IconButton,
  TextField,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core';
import { notifyInfo, notifyError } from 'components/Notification/Notification';
import { Visibility as ViewIcon, Create as EditIcon } from '@material-ui/icons';
import SearchButton from '../../../components/Button/Search';
import QueryParam from '../../../services/QueryParamService';
import { getSystemDate } from '../../../services/ProfileService';
import SelectSymbol from '../../../components/AutoComplete/SelectSymbol';
import SelectCusip from '../../../components/AutoComplete/SelectCusip';
import { listAccountSummary } from '../../../services/AccountSummaryService';
import useStyles from '../../../styles';
import Table, { columnType } from 'components/Table/Table';

export default function AccountSummaryTable() {
  const classes = useStyles();

  useEffect(
    () => {
      async function init() {
        if (searchData.settleDate) return;

        const settleDate = await getSystemDate();
        setSearchData({ ...searchData, settleDate: settleDate });
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
      name: 'cusip',
      label: 'Cusip',
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
      name: 'houseOpeningPrice',
      label: 'House Opening Price',
      type: columnType.amount,
    },
    {
      name: 'cnsOpeningPrice',
      label: 'CNS Opening Price',
      type: columnType.amount,
    },
    {
      name: 'dtccOpeningPrice',
      label: 'DTCC Opening Price',
      type: columnType.amount,
    },
    {
      name: 'houseQty',
      label: 'House QTY',
      type: columnType.quantity,
    },
    {
      name: 'cnsQty',
      label: 'CNS QTY',
      type: columnType.quantity,
    },
    {
      name: 'dtccQty',
      label: 'DTCC QTY',
      type: columnType.quantity,
    },
    {
      name: 'breakQty',
      label: 'Break QTY',
      type: columnType.quantity,
    },
    {
      name: 'houseValue',
      label: 'House Value',
      type: columnType.amount,
    },
    {
      name: 'cnsValue',
      label: 'CNS Value',
      type: columnType.amount,
    },
    {
      name: 'dtccValue',
      label: 'DTCC Value',
      type: columnType.amount,
    },
    {
      name: 'breakValue',
      label: 'Break Value',
      type: columnType.amount,
    },
    {
      name: 'originalCusip',
      label: 'Original Cusip',
    },
    {
      name: 'age',
      label: 'Age',
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
      settleDate: '',
      symbol: '',
      cusip: '',
      showBreakOnly: false,
    })
  );

  const handleChange = (e, checkboxValue) => {
    const input = e.currentTarget.name ? e.currentTarget : e.target;

    setSearchData({
      ...searchData,
      [input.name]:
        checkboxValue === true || checkboxValue === false
          ? checkboxValue
          : input.value,
    });
  };

  const handleSearch = async () => {
    try {
      setLoading(true);
      QueryParam.set(searchData);
      const data = await listAccountSummary(searchData);
      setRows(data.accountSummarysList);
      notifyInfo(data.accountSummarysList.length + ' search results.');
    } catch (error) {
      console.error(error);
      notifyError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = async () => {
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
                <FormControlLabel
                  control={
                    <Checkbox
                      name="showBreakOnly"
                      checked={searchData.showBreakOnly}
                      onChange={handleChange}
                    />
                  }
                  label="Show Break Only"
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
          title="ACCOUNT SUMMARY"
          data={rows}
          columns={columns}
          options={options}
        />
      </Box>
      {open && (
        <AccountSummaryDetailsModal
          onClose={handleClose}
          open={open}
          value={rowData}
        ></AccountSummaryDetailsModal>
      )}
    </div>
  );
}
