import { Box, IconButton, TextField } from '@material-ui/core';
import { Visibility as ViewIcon } from '@material-ui/icons';
import { notifyError, notifyInfo } from 'components/Notification/Notification';
import Table, { columnType } from 'components/Table/Table';
import React, { useEffect, useState } from 'react';
import EntryTypeSelect from '../../../components/AutoComplete/EntryType';
import SelectSymbol from '../../../components/AutoComplete/SelectSymbol';
import SearchButton from '../../../components/Button/Search';
import { listEntitlementRecon } from '../../../services/EntitlementReconService';
import { getSettleDate, getSystemDate } from '../../../services/ProfileService';
import QueryParam from '../../../services/QueryParamService';
import useStyles from '../../../styles';
import EntitlementReconDetailsModal from './EntitlementReconDetailsModal';

export default function EntitlementReconTable({ params }) {
  const classes = useStyles();

  useEffect(
    () => {
      async function init() {
        // if (searchData.tradeDate) return;

        const searchDataCopy = { ...searchData };

        if (!searchData.systemDate) {
          const systemDate = await getSystemDate();
          searchDataCopy.systemDate = systemDate;
        }

        if (!searchData.settleDate) {
          const settleDate = await getSettleDate();
          searchDataCopy.settleDate = settleDate;
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
  const [open, setOpen] = React.useState(false);
  const [rowData, setRowData] = React.useState({});

  // //search parameters initial value
  const [searchData, setSearchData] = useState(
    QueryParam.get({
      systemDate: '',
      settleDate: '',
      textNumber: '',
      entryType: '',
      symbol: '',
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
      name: 'textNumber',
      label: 'Text Number',
    },
    {
      name: 'entryType',
      label: 'Entry Type',
    },
    {
      name: 'systemDate',
      label: 'System Date',
      type: columnType.date,
    },
    {
      name: 'settleDate',
      label: 'Settle Date',
      type: columnType.date,
    },
    {
      name: 'originalCusip',
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
      options: {
        display: false,
      },
    },
    {
      name: 'symbolDescription',
      label: 'SymbolDescription',
      options: {
        display: false,
      },
    },
    {
      name: 'houseQty',
      label: 'House Qty',
      type: columnType.quantity,
    },
    {
      name: 'streetQty',
      label: 'Street Qty',
      type: columnType.quantity,
    },
    {
      name: 'diffQty',
      label: 'Diff Qty',
      type: columnType.quantity,
    },
    {
      name: 'houseAmt',
      label: 'House Amt',
      type: columnType.amount,
    },
    {
      name: 'streetAmt',
      label: 'Street Amt',
      type: columnType.amount,
    },
    {
      name: 'diffAmt',
      label: 'Diff Amt',
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
      const data = await listEntitlementRecon(searchData);
      setRows(data.entitlementReconsList);
      notifyInfo(data.entitlementReconsList.length + ' search results.');
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
                  name="textNumber"
                  label="Text Number"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  value={searchData.textNumber}
                  onChange={handleChange}
                />
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <EntryTypeSelect
                  freeSolo={true}
                  name="entryType"
                  label="Entry Type"
                  value={searchData.entryType}
                  onChange={handleChange}
                  setNewValue={(event, newValue) => {
                    handleChange({
                      currentTarget: {
                        name: 'entryType',
                        value: newValue ? newValue.code : '',
                      },
                    });
                  }}
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
          title="ENTITLEMENT RECONCILIATION"
          data={rows}
          columns={columns}
          options={options}
        />
      </Box>

      {open && (
        <EntitlementReconDetailsModal
          onClose={handleClose}
          open={open}
          value={rowData}
        ></EntitlementReconDetailsModal>
      )}
    </div>
  );
}
