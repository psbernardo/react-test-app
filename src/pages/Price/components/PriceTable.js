import React, { useState, useEffect } from 'react';
import PriceDetailsModal from './PriceDetailsModal';
import { getSystemDate } from '../../../services/ProfileService';
import {
  listPrice,
  createPrice,
  editPrice,
  deletePrice,
} from '../../../services/PriceService';
import {
  notifyInfo,
  notifyError,
  notifySuccess,
} from 'components/Notification/Notification';
import {
  Box,
  TextField,
  IconButton,
  Button,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core';
import {
  Add as AddIcon,
  Create as EditIcon,
  Delete as DeleteIcon,
} from '@material-ui/icons';
import { useConfirm } from 'material-ui-confirm';
import Table, { columnType } from 'components/Table/Table';
import QueryParam from '../../../services/QueryParamService';
import useStyles from '../../../styles';
import SelectSymbol from '../../../components/AutoComplete/SelectSymbol';
import SearchButton from '../../../components/Button/Search';
import { formatDollar } from 'lib/fmt';

export default function PriceTable({ params }) {
  const classes = useStyles();
  const confirm = useConfirm();

  const options = {
    isRowSelectable: (dataIndex) => isDeleteEnabled(dataIndex),
    onRowsDelete: (selectedItems) => {
      handleDelete(selectedItems.data);
      return false;
    },
    serverSide: true,
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
                <IconButton
                  aria-label="delete"
                  disabled={!isDeleteEnabled(dataIndex)}
                  onClick={() => {
                    handleDelete([
                      {
                        dataIndex: dataIndex,
                      },
                    ]);
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </div>
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
      name: 'systemDate',
      label: 'System Date',
      type: columnType.date,
    },
    {
      name: 'originalCusip',
      label: 'Original Cusip',
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
      name: 'cusip',
      label: 'Cusip',
    },
    {
      name: 'currentPrice',
      label: 'Current Price',
      type: columnType.amount,
      addFooter: true,
    },
    {
      name: 'prevPrice',
      label: 'Prev Price',
      type: columnType.amount,
      addFooter: true,
    },
    {
      name: 'stalePriceAge',
      label: 'Stale Price Age',
      type: columnType.quantity,
      addFooter: true,
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

  const isDeleteEnabled = (dataIndex) => {
    return true;
  };

  const [rowData, setRowData] = React.useState({});
  const [open, setOpen] = React.useState(false);
  const [pagination, setPagination] = useState({});
  const [footerData, setFooterData] = useState({});
  const [loading, setLoading] = React.useState(false);
  const [showFilter, setShowFilter] = React.useState(true);
  const [rows, setRows] = useState([]);
  const [searchData, setSearchData] = React.useState(
    QueryParam.get({
      systemDate: '',
      symbol: '',
      cusip: '',
      stalePrice: false,
    })
  );

  const handleChange = (e, checkboxValue) => {
    const input = e.currentTarget.name ? e.currentTarget : e.target;

    setSearchData({
      ...searchData,
      [input.name]: checkboxValue !== undefined ? checkboxValue : input.value,
    });
  };

  const getCsvData = async () => {
    const data = await listPrice(searchData);
    return data.pricesList;
  };

  const handleSearch = async (paginationChange) => {
    try {
      setLoading(true);
      QueryParam.set(searchData);

      let paginationCopy = {
        ...pagination,
        reload: false,
        pageNo: paginationChange === true ? pagination.pageNo : 0,
      };

      const data = await listPrice(searchData, paginationCopy);

      if (paginationChange !== true) {
        notifyInfo(data.summary.totalRows + ' search results.');
      }

      paginationCopy.count = data.summary.totalRows;
      setPagination(paginationCopy);
      setRows(data.pricesList);

      setFooterData({
        currentPrice: formatDollar(data.summary.currentPrice),
        prevPrice: formatDollar(data.summary.prevPrice),
        stalePriceAge: formatDollar(data.summary.stalePriceAge),
      });
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
        systemDate: '',
        symbol: '',
        cusip: '',
        exchangeCode: '',
        sic: '',
        issueStatusCode: '',
        priceDate: '',
        prevPriceDate: '',
        currentPrice: '',
        prevPrice: '',
        originalCusip: '',
        volumn: '',
        tradeTypeCode: '0',
        isHalted: false,
        source: '',
        volume: 0,
      };
    }

    setRowData(data);
    setOpen(true);
  };

  const handleClose = async (data, isEdit) => {
    // Close modal if no data is retrieved
    if (!data) {
      setOpen(false);
      return;
    }

    let valid = true;

    // Check data for required fields
    if (!data.currentPrice) {
      notifyError('Current Price is required.');
      valid = false;
    }
    if (!data.cusip) {
      notifyError('Cusip is required.');
      valid = false;
    }
    if (!data.symbol) {
      notifyError('Symbol is required.');
      valid = false;
    }

    // If not all required fields have data, do not save/edit
    if (!valid) {
      return;
    }

    try {
      if (isEdit) {
        // EDIT
        const resp = await editPrice(data);
        const rowsCopy = [...rows];
        const index = rows.indexOf(rowData);
        rowsCopy[index] = resp.price;
        setRows(rowsCopy);

        if (resp.price.symbolDescription === '') {
          notifyInfo(
            'Please add the symbol ' + resp.price.symbol + ' to master profile.'
          );
        }

        notifySuccess('Price has been updated.');
      } else {
        //ADD
        const resp = await createPrice(data);
        setRows([resp.price, ...rows]);

        if (resp.price.symbolDescription === '') {
          notifyInfo(
            'Please add the symbol ' + resp.price.symbol + ' to master profile.'
          );
        }

        notifySuccess('New price has been added.');
      }
      setOpen(false);
    } catch (error) {
      notifyError(error.message);
    }
  };

  const handleDelete = (rowsToDelete) => {
    let messageKey = '';
    if (rowsToDelete.length === 1) {
      messageKey = rows[rowsToDelete[0].dataIndex].cusip;
    } else {
      messageKey = rowsToDelete.length + ' items';
    }

    let idsToDelete = [];
    confirm({
      description:
        "You are about to delete '" +
        messageKey +
        "'. Please confirm your action.",
      confirmationText: 'Yes, Delete',
    }).then(async () => {
      const rowsCopy = [...rows];
      try {
        for (const r of rowsToDelete) {
          const index = r.dataIndex;
          await deletePrice(rows[index].id);
          idsToDelete.push(rows[index].id);
        }
      } catch (error) {
        notifyError(error.message);
      } finally {
        const filtered = rowsCopy.filter((r) => !idsToDelete.includes(r.id));
        setRows(filtered);
        notifySuccess(messageKey + ' Price has been deleted');
      }
    });
  };

  //Get system date on page load
  useEffect(
    () => {
      async function init() {
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
                <SelectSymbol
                  freeSolo={true}
                  name="symbol"
                  label="Symbol"
                  value={searchData.symbol}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                  assetType="E"
                />
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <TextField
                  fullWidth
                  name="cusip"
                  label="Cusip"
                  type="text"
                  value={searchData.cusip}
                  onChange={handleChange}
                  inputProps={{ maxLength: 9 }}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className={classes.grdCell1}>
                <FormControlLabel
                  control={<Checkbox color="primary" />}
                  name="stalePrice"
                  label="Stale Price"
                  checked={searchData.stalePrice}
                  onChange={handleChange}
                />
              </div>
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
        <Table
          title={'Price'}
          data={rows}
          columns={columns}
          options={options}
          footerData={footerData}
          onSearch={handleSearch}
          pagination={pagination}
          setPagination={setPagination}
          getCsvData={getCsvData}
          additionalCell={true}
        />
      </Box>
      {open && (
        <PriceDetailsModal
          onClose={handleClose}
          open={open}
          value={rowData}
        ></PriceDetailsModal>
      )}
    </div>
  );
}
