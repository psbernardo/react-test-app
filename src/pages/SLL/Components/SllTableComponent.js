import React, { useState } from 'react';
import SllModal from './SLLModal';
import { createSll, listSll, updateSll } from '../../../services/SllService';
import {
  notifySuccess,
  notifyInfo,
  notifyError,
} from 'components/Notification/Notification';
import { Button, Box, IconButton } from '@material-ui/core';
import Table, { columnType } from 'components/Table/Table';
import { Add as AddIcon, Create as EditIcon } from '@material-ui/icons';

import QueryParam from '../../../services/QueryParamService';
import useStyles from '../../../styles';
import SelectSymbol from '../../../components/AutoComplete/SelectSymbol';
import SearchButton from '../../../components/Button/Search';

export default function SllTable({ params }) {
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
      name: 'sllUuid',
      label: 'ID',
      options: {
        display: false,
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
      name: 'market',
      label: 'Market',
    },
    {
      name: 'statusDescription',
      label: 'Status Description',
    },
    {
      name: 'statusId',
      label: 'Status ID',
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

  const [rowData, setRowData] = React.useState({});
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [showFilter, setShowFilter] = React.useState(true);
  const [rows, setRows] = useState([]);
  const [searchData, setSearchData] = React.useState(
    QueryParam.get({
      sllUuid: '',
      symbol: '',
      symbolDescription: '',
      market: '',
      statusDescription: '',
      statusId: '',
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
      const data = await listSll(searchData);
      setRows(data.sllsList);
      notifyInfo(data.sllsList.length + ' search results.');
    } catch (error) {
      console.error(error);
      notifyError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleOpen = (data) => {
    if (!data) {
      //ADD default values
      data = {
        sllUuid: '',
        symbol: '',
        symbolDescription: '',
        market: '',
        statusDescription: '',
        statusId: '',
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

    try {
      let valid = true;
      if (!data.symbol) {
        notifyError('Symbol is required.');
        valid = false;
      }

      if (!data.symbolDescription) {
        notifyError('Symbol Description is required.');
        valid = false;
      }

      if (!data.statusId) {
        notifyError('Status is required.');
        valid = false;
      }

      if (!valid) {
        return;
      }

      if (isEdit) {
        //EDIT
        const resp = await updateSll(data);
        const rowsCopy = [...rows];
        const index = rows.indexOf(rowData);
        rowsCopy[index] = resp.sll;
        setRows(rowsCopy);
        notifySuccess('SLL has been updated.');
      } else {
        //ADD
        const resp = await createSll(data);
        setRows([resp.sll, ...rows]);
        notifySuccess('New SLL has been added.');
      }

      setOpen(false);
    } catch (error) {
      console.error(error);
      notifyError(error.message);
    }
  };

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
                <SelectSymbol
                  freeSolo={true}
                  name="symbol"
                  label="Symbol"
                  value={searchData.symbol}
                  onChange={handleChange}
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
        <Table title={'SLL'} data={rows} columns={columns} options={options} />
      </Box>
      {open && (
        <SllModal onClose={handleClose} open={open} value={rowData}></SllModal>
      )}
    </div>
  );
}
