import React, { useState } from 'react';
import {
  notifyError,
  notifySuccess,
  notifyInfo,
} from 'components/Notification/Notification';
import EtfModal from './EtfModal';
import { Button, Box, TextField } from '@material-ui/core';
import { createEtf, listEtf } from '../../../services/EtfService';
import Table from 'components/Table/Table';
import { Add as AddIcon } from '@material-ui/icons';
import useStyles from '../../../styles';
import QueryParam from '../../../services/QueryParamService';
import SelectSymbol from '../../../components/AutoComplete/SelectSymbol';
import SearchButton from '../../../components/Button/Search';

export default function EtfTable({ params }) {
  /*=========================================================================================
  Component style
  ===========================================================================================*/
  const classes = useStyles();
  /*=========================================================================================
  End of component style
  ===========================================================================================*/
  /*=========================================================================================
  Table modifications
  ===========================================================================================*/
  const columns = [
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
      name: 'inverse',
      label: 'Inverse',
    },
    {
      name: 'leveragedFactor',
      label: 'Leveraged Factor',
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

  const [open, setOpen] = React.useState(false);
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = React.useState(false);
  const [rowData, setRowData] = React.useState({});
  const [showFilter, setShowFilter] = React.useState(true);
  const [searchData, setSearchData] = React.useState(
    QueryParam.get({
      symbol: '',
      cusip: '',
    })
  );

  const handleSearch = async () => {
    try {
      setLoading(true);
      QueryParam.set(searchData);
      const data = await listEtf(searchData);

      setRows(data.etfsList);
      notifyInfo(data.etfsList.length + ' search results.');
    } catch (error) {
      console.error(error);
      notifyError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e, x) => {
    const input = e.currentTarget.name ? e.currentTarget : e.target;

    setSearchData({
      ...searchData,
      [input.name]: input.value,
    });
  };

  const handleOpen = (data) => {
    if (!data) {
      //ADD default values
      data = {
        symbol: '',
        symbolDescription: '',
        cusip: '',
        inverse: '',
        leveragedFactor: '',
      };
    }

    setRowData(data);
    setOpen(true);
  };

  const handleClose = async (data) => {
    if (!data) {
      setOpen(false);
      return;
    }

    try {
      let valid = true;
      if (!data.symbol) {
        notifyError('Symbol is required.');
        valid = false;
      }

      if (!data.leveragedFactor) {
        notifyError('Leverage Factor is required.');
        valid = false;
      }

      if (!valid) {
        return;
      }

      const resp = await createEtf(data);
      setRows([resp.etf, ...rows]);
      notifySuccess('New ETF has been added.');

      setOpen(false);
    } catch (error) {
      console.error(error);
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
                <SelectSymbol
                  freeSolo={true}
                  name="symbol"
                  label="Symbol"
                  value={searchData.symbol}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className={classes.grdCell1}>
                <TextField
                  name="cusip"
                  label="Cusip"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  value={searchData.cusip}
                  onChange={handleChange}
                />
              </div>
              <div className={classes.grdCell1}></div>
              <div className={classes.grdCell1}></div>
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
        <Table title={'ETF'} data={rows} columns={columns} options={options} />
      </Box>
      {open && (
        <EtfModal onClose={handleClose} open={open} value={rowData}></EtfModal>
      )}
    </div>
  );
}
