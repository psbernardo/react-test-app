import React, { useState, useEffect } from 'react';
import {
  Box,
  Tooltip,
  IconButton,
  TextField,
  InputLabel,
} from '@material-ui/core';
import { Visibility as ViewIcon } from '@material-ui/icons';
import Table, { columnType } from 'components/Table/Table';

import useStyles from '../../../styles';

import { notifyInfo, notifyError } from 'components/Notification/Notification';

/*Moment JS*/
import SearchButton from '../../../components/Button/Search';
import { getSystemDate } from '../../../services/ProfileService';
import QueryParam from '../../../services/QueryParamService';
import {
  listBankTransaction,
  readBankTransaction,
} from '../../../services/BankTransactionService';
import { protoDateObjectToString } from 'services/ConvertService';
import BankTransactionModal from './BankTransactionModal';
import SelectAccountToWallet from 'components/AutoComplete/SelectAccountToWallet';
import BankSourceSelect from '../../../components/Dropdown/BankSource';

export default function BankTransactionTable() {
  const classes = useStyles();
  const [mounted, setMounted] = React.useState(false);

  useEffect(
    () => {
      async function init() {
        // if (searchData.systemDate) return;

        const systemDate = await getSystemDate();
        const searchDataCopy = { ...searchData };

        if (!searchData.systemDate) {
          searchDataCopy.systemDate = systemDate;
        }

        setSearchData(searchDataCopy);
      }

      if (!mounted) {
        init();
      }
      // eslint-disable-next-line
      return () => {
        setMounted(true); // This worked for me
      };
    },
    // eslint-disable-next-line
    [mounted]
  );

  const [rows, setRows] = useState([]);
  const [loading, setLoading] = React.useState(false);
  const [showFilter, setShowFilter] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  const [rowData, setRowData] = React.useState([]);
  const [sourceData, setSourceData] = React.useState('');
  //search parameters initial value
  const [searchData, setSearchData] = React.useState(
    QueryParam.get({
      source: '',
      systemDate: '',
      account: '',
      amount: '',
      trnsType: '',
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
              <div className={classes.grdCell1}>
                <Tooltip title="View" arrow>
                  <div>
                    <IconButton
                      aria-label="view"
                      onClick={() => {
                        handleOpen(rows[dataIndex]);
                      }}
                    >
                      <ViewIcon />
                    </IconButton>
                  </div>
                </Tooltip>
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
      name: 'contraAccount',
      label: 'Contra Account',
    },
    {
      name: 'requestId',
      label: 'Request Id',
    },
    {
      name: 'amount',
      label: 'Amount ',
      type: columnType.amount,
    },
    {
      name: 'trnsType',
      label: 'TRNS Type',
    },
    {
      name: 'description',
      label: 'Description',
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

  const handleSearch = async () => {
    try {
      setLoading(true);
      QueryParam.set(searchData);

      const data = await listBankTransaction(searchData);

      data.systemDate = protoDateObjectToString(data.systemDate, 'yyyy-MM-DD');
      setRows(data.bankTransactionList);
      notifyInfo(data.bankTransactionList.length + ' search results.');
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

  const handleOpen = async (data) => {
    try {
      const resp = await readBankTransaction(data);
      setSourceData(data.source);

      if (data.source === 'Signature Bank') {
        setRowData(resp.signatureBankDetails);
      } else if (data.source === 'BMO') {
        setRowData(resp.bmoDetails);
      } else if (data.source === 'FRB') {
        setRowData(resp.frbDetails);
      }
    } catch (error) {
      notifyError(error.message);
    } finally {
      setOpen(true);
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
              <div className={classes.grdCell1} style={{ marginRight: 20 }}>
                <InputLabel shrink>Source</InputLabel>
                <BankSourceSelect
                  fullWidth
                  displayEmpty
                  name="source"
                  value={searchData.source}
                  onChange={handleChange}
                ></BankSourceSelect>
              </div>
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
              <div className={classes.grdCell1} style={{ marginRight: 20 }}>
                <SelectAccountToWallet
                  name="account"
                  fullWidth
                  required={true}
                  label="Account"
                  value={searchData.account}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div
                className={classes.grdCell1}
                style={{ marginRight: 20 }}
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
          title={'BANK TRANSACTION'}
          data={rows}
          columns={columns}
          options={options}
        />
      </Box>
      {open && (
        <BankTransactionModal
          onClose={handleClose}
          open={open}
          value={rowData}
          source={sourceData}
        ></BankTransactionModal>
      )}
    </div>
  );
}
