import React, { useState, useEffect } from 'react';
import { Box, TextField, IconButton } from '@material-ui/core';
import { Visibility as ViewIcon } from '@material-ui/icons';
import { notifyInfo, notifyError } from 'components/Notification/Notification';
import { listTransactionRecon, readTransactionRecon } from '../../../services/TransactionReconService';
import SearchButton from '../../../components/Button/Search';
import { getSystemDate } from '../../../services/ProfileService';
import Table, { columnType } from 'components/Table/Table';
import useStyles from '../../../styles';
import QueryParam from '../../../services/QueryParamService';
import SelectAccountNo from '../../../components/AutoComplete/SelectAccountNo';
import { SelectEntryType } from '../../../components/AutoComplete/SelectSystemCode';
import SelectSymbol from '../../../components/AutoComplete/SelectSymbol';
import TRNSReconDetailsModal from './TRNSReconDetailsModal';

export default function TRNSReconTable({ params }) {
  const classes = useStyles();

  useEffect(
    () => {
      async function init() {
        if (searchData.tradeDate) return;

        const systemDate = await getSystemDate();
        setSearchData({ ...searchData, tradeDate: systemDate });
      }

      init();
    },
    // eslint-disable-next-line
    []
  );

  const [rowData, setRowData] = React.useState({});
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = React.useState(false);
  const [showFilter, setShowFilter] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  const [searchData, setSearchData] = useState(
    QueryParam.get({
      tradeDate: '',
      account: '',
      contraAccountNo: '',
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
                    handleDetails(rows[dataIndex]);
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
      name: 'tradeDate',
      label: 'Trade Date',
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
      name: 'contraSource',
      label: 'Contra Source',
    },
    {
      name: 'entryType',
      label: 'Entry Type',
    },
    {
      name: 'symbol',
      label: 'Symbol',
    },
    {
      name: 'grossAmt',
      label: 'Gross Amount',
      type: columnType.amount,
      addFooter: true,
      options: {
        display: false,
      }
    },
    {
      name: 'contraGrossAmt',
      label: 'Contra Gross Amount',
      type: columnType.amount,
      addFooter: true,
      options: {
        display: false,
      }
    },
    {
      name: 'diffGrossAmt',
      label: 'Diff Gross Amount',
      type: columnType.amount,
      addFooter: true,
      options: {
        display: false,
      }
    },
    {
      name: 'feeAmt',
      label: 'Fee Amount',
      type: columnType.amount,
      addFooter: true,
      options: {
        display: false,
      }
    },
    {
      name: 'contraFeeAmt',
      label: 'Contra Fee Amount',
      type: columnType.amount,
      addFooter: true,
      options: {
        display: false,
      }
    },
    {
      name: 'diffFeeAmt',
      label: 'Diff Fee Amount',
      type: columnType.amount,
      addFooter: true,
      options: {
        display: false,
      }
    },
    {
      name: 'netAmt',
      label: 'Net Amount',
      type: columnType.amount,
      addFooter: true,
    },
    {
      name: 'contraNetAmt',
      label: 'Contra Net Amount',
      type: columnType.amount,
      addFooter: true,
    },
    {
      name: 'diffNetAmt',
      label: 'Diff Net Amount',
      type: columnType.amount,
      addFooter: true,
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
      const data = await listTransactionRecon(searchData);
      setRows(data.transactionReconsList);
      notifyInfo(data.transactionReconsList.length + ' search results.');
    } catch (error) {
      notifyError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDetails = async(data) => {
    try{
      const res = await readTransactionRecon(data);
      console.log(res);
      setRowData({ ...res.transactionRecon });
      setOpen(true);
    } catch (error) {
      notifyError(error.message);
    }
  }

  const handleChange = (e) => {
    const input = e.currentTarget.name ? e.currentTarget : e.target;

    setSearchData({
      ...searchData,
      [input.name]: input.value,
    });
  };

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <div className={classes.root}>
      <Box component="div" mt={5}>
        {showFilter ? (
          <div>
            <div className={classes.grdRow}>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <TextField
                  name="tradeDate"
                  fullWidth
                  label="Trade Date"
                  type="date"
                  value={searchData.tradeDate}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectAccountNo
                  freeSolo={true}
                  name="account"
                  label="Account"
                  value={searchData.account}
                  onChange={handleChange}
                ></SelectAccountNo>
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectAccountNo
                  freeSolo={true}
                  name="contraAccountNo"
                  label="Contra Account"
                  value={searchData.contraAccountNo}
                  onChange={handleChange}
                ></SelectAccountNo>
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectEntryType
                  name="entryType"
                  label="Entry Type"
                  value={searchData.entryType}
                  onChange={handleChange}
                ></SelectEntryType>
              </div>
              <div className={classes.grdCell1}>
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
          title="TRANSACTION RECONCILIATIONS"
          data={rows}
          columns={columns}
          options={options}
        />
      </Box>

      {open && (
        <TRNSReconDetailsModal
          onClose={handleClose}
          open={open}
          value={rowData}
        ></TRNSReconDetailsModal>
      )}

    </div>
  );
}
