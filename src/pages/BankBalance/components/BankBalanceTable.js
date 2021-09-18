import React, { useState, useEffect } from 'react';
import { Box, TextField, IconButton } from '@material-ui/core';
import { Visibility as ViewIcon } from '@material-ui/icons';
import { notifyInfo, notifyError } from 'components/Notification/Notification';
import { listBalance } from '../../../services/BankBalanceService';
import SearchButton from '../../../components/Button/Search';
import QueryParam from '../../../services/QueryParamService';
import { getSystemDate } from '../../../services/ProfileService';
import Table, { columnType } from 'components/Table/Table';
import useStyles from '../../../styles';
import BankBalanceDetailsModal from './BankBalanceDetailsModal';
import BankSourceSelect from '../../../components/Dropdown/BankSource';

export default function BankBalanceTable({ params }) {
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
  const [open, setOpen] = React.useState(false);
  const [rowData, setRowData] = React.useState({});
  const [searchData, setSearchData] = React.useState(
    QueryParam.get({
      systemDate: '',
      source: '',
      account: '',
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
      name: 'source',
      label: 'Source',
    },
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
      name: 'amount',
      label: 'Amount',
      type: columnType.amount,
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
      const data = await listBalance(searchData);
      setRows(data.balancesList);
      notifyInfo(data.balancesList.length + ' search results.');
    } catch (error) {
      notifyError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setOpen(false);
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
                  fullWidth
                  name="systemDate"
                  label="System Date"
                  type="date"
                  value={searchData.systemDate}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <BankSourceSelect
                  name="source"
                  label="Source"
                  value={searchData.source}
                  onChange={handleChange}
                ></BankSourceSelect>
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <TextField
                  fullWidth
                  name="account"
                  label="Account"
                  value={searchData.account}
                  onChange={handleChange}
                  inputProps={{ maxLength: 50 }}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className={classes.grdCell1}></div>
              <div className={classes.grdCell1}></div>
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
          title={'Bank Balance'}
          data={rows}
          columns={columns}
          options={options}
          onSearch={handleSearch}
        />
      </Box>
      {open && (
        <BankBalanceDetailsModal
          onClose={handleClose}
          open={open}
          value={rowData}
        ></BankBalanceDetailsModal>
      )}
    </div>
  );
}
