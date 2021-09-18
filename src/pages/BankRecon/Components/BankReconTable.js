import React, { useState, useEffect } from 'react';
import { Box, TextField, IconButton } from '@material-ui/core';
import { listRecon } from '../../../services/BankReconService';
import { getSystemDate } from '../../../services/ProfileService';
import { notifyInfo, notifyError } from 'components/Notification/Notification';
import Table, { columnType } from 'components/Table/Table';
import { Visibility as ViewIcon } from '@material-ui/icons';
import useStyles from '../../../styles';
import QueryParam from '../../../services/QueryParamService';
import SelectSignetWallet from '../../../components/Dropdown/SelectSignetWallet';
import SelectHouseAccount from '../../../components/Dropdown/SelectHouseAccount';
import SearchButton from '../../../components/Button/Search';
import BankReconDetailsTable from './BankReconDetailsTable';

export default function BankReconTable({ params }) {
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
              <div align={'left'} className={classes.grdCell1}>
                <IconButton
                  aria-label="details"
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
      name: 'systemDate',
      label: 'System Date',
      type: columnType.date,
    },
    {
      name: 'bankAccount',
      label: 'Bank Account',
    },
    {
      name: 'houseAccount',
      label: 'House Account',
    },
    {
      name: 'bankBeginningBalance',
      label: 'Bank Beginning Balance',
      type: columnType.amount,
    },
    {
      name: 'houseBeginningBalance',
      label: 'House Beginning Balance',
      type: columnType.amount,
    },
    {
      name: 'diffBeginningBalance',
      label: 'Diff Beginning Balance',
      type: columnType.amount,
    },
    {
      name: 'bankActivityBalance',
      label: 'Bank Activity Balance',
      type: columnType.amount,
    },
    {
      name: 'houseActivityBalance',
      label: 'House Activity Balance',
      type: columnType.amount,
    },
    {
      name: 'diffActivityBalance',
      label: 'Diff Activity Balance',
      type: columnType.amount,
    },
    {
      name: 'bankEndingBalance',
      label: 'Bank Ending Balance',
      type: columnType.amount,
    },
    {
      name: 'houseEndingBalance',
      label: 'House Ending Balance',
      type: columnType.amount,
    },
    {
      name: 'diffEndingBalance',
      label: 'Diff Ending Balance',
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

  const [rowData, setRowData] = React.useState({});
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [showFilter, setShowFilter] = React.useState(true);
  const [rows, setRows] = useState([]);
  const [searchData, setSearchData] = React.useState(
    QueryParam.get({
      systemDate: '',
      source: '',
      bankAccount: '',
      houseAccount: '',
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
      const data = await listRecon(searchData);
      setRows(data.reconsList);
      notifyInfo(data.reconsList.length + ' search results.');
    } catch (error) {
      notifyError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

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
                <SelectSignetWallet
                  name="bankAccount"
                  label="Bank Account"
                  value={searchData.bankAccount}
                  onChange={handleChange}
                />
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectHouseAccount
                  name="houseAccount"
                  label="House Account"
                  value={searchData.houseAccount}
                  onChange={handleChange}
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
          title={'Bank Recon'}
          data={rows}
          columns={columns}
          options={options}
        />
      </Box>
      {open && (
        <BankReconDetailsTable
          onClose={handleClose}
          open={open}
          value={rowData}
        ></BankReconDetailsTable>
      )}
    </div>
  );
}
