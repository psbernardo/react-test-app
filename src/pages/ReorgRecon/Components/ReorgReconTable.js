import React, { useState, useEffect } from 'react';
import ReorgReconDetailsModal from './ReorgReconDetailsModal';
import { Box, IconButton, Tooltip, TextField } from '@material-ui/core';
import { notifyInfo, notifyError } from 'components/Notification/Notification';
import { listReOrgRecon } from '../../../services/ReorgReconService';
import SearchButton from '../../../components/Button/Search';
import SelectSymbol from '../../../components/AutoComplete/SelectSymbol';
import { getSystemDate } from '../../../services/ProfileService';
import { Visibility as ViewIcon } from '@material-ui/icons';
import UpdateIcon from '@material-ui/icons/Update';
import QueryParam from '../../../services/QueryParamService';
import useStyles from '../../../styles';
import Table, { columnType } from 'components/Table/Table';

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
  const [open, setOpen] = React.useState(false);
  const [rowData, setRowData] = React.useState({});

  // //search parameters initial value
  const [searchData, setSearchData] = useState(
    QueryParam.get({
      systemDate: '',
      symbol: '',
    })
  );

  const openPendingTrns = (symbol) => {
    const paramPath = '/app/trns/pending-trns/process/' + symbol;

    window.open(paramPath, '_blank');
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
              <div className={classes.grdCellNone}>
                <Tooltip title="Process" arrow>
                  <IconButton
                    aria-label="pending-trns"
                    onClick={() => {
                      openPendingTrns(rows[dataIndex].symbol);
                    }}
                  >
                    <UpdateIcon />
                  </IconButton>
                </Tooltip>
              </div>
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
      name: 'accountNo',
      label: 'Account No',
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
      name: 'qty',
      label: 'Qty',
      type: columnType.quantity,
      addFooter: true,
    },
    {
      name: 'netAmt',
      label: 'Net Amt',
      type: columnType.amount,
      addFooter: true,
    },
    {
      name: 'age',
      label: 'Age',
    },
    {
      name: 'originalCusip',
      label: 'Original Cusip',
      options: {
        display: false,
      },
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
      const data = await listReOrgRecon(searchData);
      setRows(data.reorgReconsList);
      notifyInfo(data.reorgReconsList.length + ' search results.');
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
          title="CORP REORG RECON"
          data={rows}
          columns={columns}
          options={options}
        />
      </Box>

      {open && (
        <ReorgReconDetailsModal
          onClose={handleClose}
          open={open}
          value={rowData}
        ></ReorgReconDetailsModal>
      )}
    </div>
  );
}
