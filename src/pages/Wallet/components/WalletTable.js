import React, { useState, useEffect } from 'react';
import WalletModal from './WalletModal';
import { Button, Box, IconButton } from '@material-ui/core';
import {
  notifySuccess,
  notifyInfo,
  notifyError,
} from 'components/Notification/Notification';
import { Add as AddIcon, Create as EditIcon } from '@material-ui/icons';
import SelectSymbol from 'components/AutoComplete/SelectSymbol';
import SelectSystemCode from 'components/Dropdown/SelectSystemCode';
import SearchButton from '../../../components/Button/Search';
import QueryParam from '../../../services/QueryParamService';
import {
  updateWallet,
  listWallet,
  createWallet,
} from '../../../services/WalletService';
import Table, { columnType } from 'components/Table/Table';
import { getSystemDate } from '../../../services/ProfileService';
import useStyles from '../../../styles';

export default function WalletTable() {
  const classes = useStyles();

  useEffect(
    () => {
      async function init() {
        // if (searchData.tradeDate) return;

        const systemDate = await getSystemDate();
        const searchDataCopy = { ...searchData };

        if (!searchData.fromSystemDate) {
          searchDataCopy.date = systemDate;
        }

        setSearchData(searchDataCopy);
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
              <div align={'left'} className={classes.grdCellNone}>
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
      name: 'symbol',
      label: 'Symbol',
    },
    {
      name: 'symbolDescription',
      label: 'Symbol Description',
    },
    {
      name: 'wallet',
      label: 'Wallet',
    },
    {
      name: 'accountNo',
      label: 'Account No',
    },
    {
      name: 'status',
      label: 'Status',
    },
    {
      name: 'note',
      label: 'Note',
    },
    {
      name: 'originalCusip',
      label: 'Original Cusip',
      options: {
        display: false,
      },
    },
    {
      name: 'systemDate',
      label: 'System Date',
      type: columnType.date,
    },
    {
      name: 'createdBy',
      label: 'Created By',
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

  const [rowData, setRowData] = React.useState({});
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [showFilter, setShowFilter] = React.useState(true);
  const [rows, setRows] = useState([]);
  const [searchData, setSearchData] = React.useState(
    QueryParam.get({
      status: '',
      symbol: '',
    })
  );

  const handleChange = (e, x) => {
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
      const data = await listWallet(searchData);
      setRows(data.listWalletsList);
      notifyInfo(data.listWalletsList.length + ' search results.');
    } catch (error) {
      notifyError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleOpen = (data) => {
    if (!data) {
      //ADD default values
      data = {
        symbol: '',
        wallet: '',
        status: 'Pending Approval',
        note: '',
        accountNo: '',
        accountId: 0,
      };
    }

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
    if (!data.status) {
      notifyError('Status is required.');
      valid = false;
    }
    if (!data.wallet) {
      notifyError('Wallet is required.');
      valid = false;
    }
    if (!valid) {
      return;
    }

    try {
      if (isEdit) {
        //EDIT
        const resp = await updateWallet(data);
        const rowsCopy = [...rows];
        const index = rows.indexOf(rowData);
        rowsCopy[index] = resp.wallet;
        setRows(rowsCopy);
        notifySuccess('Wallet has been updated.');
      } else {
        //ADD
        const resp = await createWallet(data);
        setRows([resp.wallet, ...rows]);
        notifySuccess('New Wallet has been added.');
      }

      setOpen(false);
    } catch (error) {
      notifyError(error.message);
    }
  };

  return (
    <div className={classes.root}>
      <Box component="div" mt={5}>
        {showFilter ? (
          <div>
            <div className={classes.grdRow}>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectSystemCode
                  name="status"
                  label="Status"
                  type="Status"
                  subType="Bank Account"
                  value={searchData.status}
                  onChange={handleChange}
                ></SelectSystemCode>
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
        <Table title="WALLET" data={rows} columns={columns} options={options} />
      </Box>
      {open && (
        <WalletModal
          onClose={handleClose}
          open={open}
          value={rowData}
        ></WalletModal>
      )}
    </div>
  );
}
