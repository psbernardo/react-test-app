import React, { useState, useEffect } from 'react';
import {
  listReport,
  updateReport,
} from '../../../services/StockBorrowReportService';
import { getSystemDate } from '../../../services/ProfileService';
import {
  notifyInfo,
  notifyError,
  notifySuccess,
} from 'components/Notification/Notification';
import { Box, TextField, IconButton } from '@material-ui/core';
import Table, { columnType } from 'components/Table/Table';
import { Create as EditIcon } from '@material-ui/icons';
import useStyles from '../../../styles';
import QueryParam from '../../../services/QueryParamService';
import SelectSymbol from '../../../components/AutoComplete/SelectSymbol';
import SelectCusip from '../../../components/AutoComplete/SelectCusip';
import SearchButton from '../../../components/Button/Search';
import StockBorrowReportDetailsTable from './StockBorrowReportDetailsTable';

export default function StockBorrowReportTable() {
  const classes = useStyles();

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
              <div align={'left'} className={classes.grdCellNone}>
                <IconButton
                  aria-label="edit"
                  onClick={() => handleOpen(rows[dataIndex], true)}
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
      name: 'tradeObligation',
      label: 'Trade Obligation',
      type: columnType.quantity,
      options: {
        display: false,
      },
    },
    {
      name: 'settlementObligation',
      label: 'Settlement Obligation',
      type: columnType.quantity,
    },
    {
      name: 'borrowed',
      label: 'Borrowed',
      type: columnType.quantity,
    },
    {
      name: 'loaned',
      label: 'Loaned',
      type: columnType.quantity,
    },
    {
      name: 'freePosition',
      label: 'Free Position',
      type: columnType.quantity,
    },
    {
      name: 'needToRecall',
      label: 'Need To Recall',
      type: columnType.quantity,
    },
    {
      name: 'needToBorrow',
      label: 'Need To Borrow',
      type: columnType.quantity,
    },
    {
      name: 'needToReturn',
      label: 'Need To Return',
      type: columnType.quantity,
    },
    {
      name: 'preFailCredit',
      label: 'Pre Fail Credit',
      type: columnType.quantity,
    },
    {
      name: 'age',
      label: 'Fail Aging',
      type: columnType.quantity,
    },
    {
      name: 'note',
      label: 'Note',
    },
  ];

  const [rowData, setRowData] = React.useState({});
  const [open, setOpen] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [showFilter, setShowFilter] = React.useState(true);
  const [rows, setRows] = useState([]);
  const [isEdit, setIsEdit] = React.useState(false);
  const [searchData, setSearchData] = React.useState(
    QueryParam.get({
      settleDate: '',
      symbol: '',
      cusip: '',
    })
  );

  const handleChange = (e) => {
    const input = e.currentTarget.name ? e.currentTarget : e.target;

    setSearchData({
      ...searchData,
      [input.name]: input.value,
    });
  };

  const handleSearch = async () => {
    try {
      setLoading(true);
      QueryParam.set(searchData);
      const data = await listReport(searchData);
      setRows(data.reportsList);
      notifyInfo(data.reportsList.length + ' search results.');
    } catch (error) {
      console.error(error);
      notifyError(error.message);
    } finally {
      setLoading(false);
    }
  };

  //Opens modal for edit
  const handleOpen = (data, isEditMode) => {
    setRowData(data);
    setOpen(true);
    setIsEdit(isEditMode);
  };

  const handleClose = async (data) => {
    if (!data) {
      setOpen(false);
      return;
    }

    try {
      //EDIT
      const resp = await updateReport(data);
      const rowsCopy = [...rows];
      const index = rows.indexOf(rowData);
      rowsCopy[index] = resp.report;
      setRows(rowsCopy);
      notifySuccess('Report has been updated.');

      setOpen(false);
    } catch (error) {
      notifyError(error.message);
      console.error(error);
    }
  };

  useEffect(() => {
    async function init() {
      if (searchData.systemDate) return;

      const systemDate = await getSystemDate();
      setSearchData({ ...searchData, settleDate: systemDate });
    }

    if (!mounted) {
      init();
    }
    return () => {
      setMounted(true);
    };
  }, [mounted, searchData]);

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
          title={'Stock Borrow'}
          data={rows}
          columns={columns}
          options={options}
        />
      </Box>
      {open && (
        <StockBorrowReportDetailsTable
          onClose={handleClose}
          open={open}
          value={rowData}
          edit={isEdit}
        ></StockBorrowReportDetailsTable>
      )}
    </div>
  );
}
