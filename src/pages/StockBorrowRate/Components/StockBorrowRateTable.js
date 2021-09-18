import React, { useState, useEffect } from 'react';
import {
  listRate,
  createRate,
  deleteRate,
  updateRate,
} from '../../../services/StockBorrowRateService';

import {
  notifyInfo,
  notifyError,
  notifySuccess,
} from 'components/Notification/Notification';

import {
  Box,
  TextField,
  IconButton,
  Select,
  MenuItem,
  InputLabel,
  Button,
} from '@material-ui/core';

import {
  Delete as DeleteIcon,
  Add as AddIcon,
  Create as EditIcon,
  AssignmentReturn as ImportIcon,
} from '@material-ui/icons';

import { useConfirm } from 'material-ui-confirm';
import Table, { columnType } from 'components/Table/Table';
import useStyles from '../../../styles';
import SelectSymbol from '../../../components/AutoComplete/SelectSymbol';
import SelectCusip from '../../../components/AutoComplete/SelectCusip';
import SearchButton from '../../../components/Button/Search';

import QueryParam from '../../../services/QueryParamService';
import { getSystemDate } from '../../../services/ProfileService';
import { listSystemCodes } from '../../../services/CommonService';

import StockBorrowRateModal from './StockBorrowRateModal';
import RateUploadModal from './RateUploadModal';

function SelectSystemCodeType({ type, subType, ...rest }) {
  const [options, setOptions] = React.useState([]);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    if (!options.length && !mounted) {
      const getSystemCodeTypes = async () => {
        const { systemcodesList } = await listSystemCodes(type, subType);
        setOptions(systemcodesList);
      };
      getSystemCodeTypes();
    }
    return () => {
      setMounted(true);
    };
  }, [type, subType, options, mounted]);

  return (
    <Select {...rest} fullWidth>
      <MenuItem value="">
        <em>Blank</em>
      </MenuItem>
      {options.length
        ? options.map((item) => (
            <MenuItem key={item.code} value={item.code}>
              {(rest.name === 'privacyContent' ? item.code + ' - ' : '') +
                item.description}
            </MenuItem>
          ))
        : ''}
    </Select>
  );
}

export default function StockBorrowRateTable() {
  const classes = useStyles();
  const confirm = useConfirm();

  const options = {
    isRowSelectable: (dataIndex) => isDeleteEnalbed(dataIndex),
    onRowsDelete: (selectedItems) => {
      handleDelete(selectedItems.data);
      return false;
    },
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
                  disabled={!isDeleteEnalbed(dataIndex)}
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
      name: 'systemDate',
      label: 'System Date',
      type: columnType.date,
    },
    {
      name: 'symbol',
      label: 'Symbol',
    },
    {
      name: 'borrowRate',
      label: 'Borrow Rate',
      type: columnType.percentage,
    },
    {
      name: 'loanRate',
      label: 'Loan Rate',
      type: columnType.percentage,
    },
    {
      name: 'lendingPitRate',
      label: 'Lending Pit Rate',
      type: columnType.percentage,
    },
    {
      name: 'highestRate',
      label: 'Highest Rate',
      type: columnType.percentage,
    },
    {
      name: 'markUpRate',
      label: 'Mark Up Rate',
      type: columnType.percentage,
    },
    {
      name: 'finalRate',
      label: 'Final Rate',
      type: columnType.percentage,
    },
    {
      name: 'source',
      label: 'Source',
    },
    {
      name: 'status',
      label: 'Status',
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
  const [systemDate, setSystemDate] = useState(null);
  const [openImport, setOpenImport] = React.useState(false);
  const [searchData, setSearchData] = React.useState(
    QueryParam.get({
      symbol: '',
      cusip: '',
      source: '',
      status: '',
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
      const data = await listRate(searchData);
      setRows(data.ratesList);
      notifyInfo(data.ratesList.length + ' search results.');
    } catch (error) {
      console.error(error);
      notifyError(error.message);
    } finally {
      setLoading(false);
    }
  };

  //Opens modal for edit
  const handleOpen = (data) => {
    if (!data) {
      //ADD default values
      data = {
        systemDate: systemDate,
        originalCusip: '',
        symbol: '',
        cusip: '',
        borrowRate: '0',
        loanRate: '0',
        lendingPitRate: '0',
        highestRate: '0',
        markUpRate: '1',
        finalRate: '0',
        source: '',
        status: 'Active',
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
    if (!data.systemDate) {
      notifyError('System Date is required.');
      valid = false;
    }
    if (!data.symbol) {
      notifyError('Symbol is required.');
      valid = false;
    }

    if (!data.cusip) {
      notifyError('Cusip is required.');
      valid = false;
    }

    if (!data.markUpRate) {
      notifyError('Mark Up Rate is required.');
      valid = false;
    }

    if (!data.source) {
      notifyError('Source is required.');
      valid = false;
    }

    if (!data.status) {
      notifyError('Status is required.');
      valid = false;
    }

    if (!valid) {
      return;
    }

    try {
      if (isEdit) {
        //EDIT
        const resp = await updateRate(data);
        const rowsCopy = [...rows];
        const index = rows.indexOf(rowData);
        rowsCopy[index] = resp.rate;
        setRows(rowsCopy);
        notifySuccess('Rate has been updated.');
      } else {
        //ADD
        const resp = await createRate(data);
        setRows([resp.rate, ...rows]);
        notifySuccess('New Rate has been added.');
      }

      setOpen(false);
    } catch (error) {
      notifyError(error.message);
      console.error(error);
    }
  };

  useEffect(() => {
    async function initSystemDate() {
      let systemDate = await getSystemDate();
      setSystemDate(systemDate);
    }

    initSystemDate();
  }, []);

  const handleDelete = (rowsToDelete) => {
    let messageKey = '';
    if (rowsToDelete.length === 1) {
      messageKey =
        rows[rowsToDelete[0].dataIndex].correspondent +
        '-' +
        rows[rowsToDelete[0].dataIndex].accountNo;
    } else {
      messageKey = rowsToDelete.length + ' items';
    }

    confirm({
      description:
        "You are about to disable '" +
        messageKey +
        "'. Please confirm your action.",
      confirmationText: 'Yes, disable',
    })
      .then(async () => {
        const rowsCopy = [...rows];
        try {
          for (const r of rowsToDelete) {
            const index = r.dataIndex;
            const { rate } = await deleteRate(rows[index].rateId);
            rowsCopy[index] = rate;
          }
          notifySuccess(messageKey + 'Rate has been disabled');
        } catch (error) {
          notifyError(error.message);
        } finally {
          setRows(rowsCopy);
        }
      })
      .catch(() => {});
  };

  const isDeleteEnalbed = (dataIndex) => {
    return rows[dataIndex].status !== 'Inactive';
  };

  const handleUploadClose = async () => {
    setOpenImport(false);
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
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <InputLabel shrink>Source</InputLabel>
                <SelectSystemCodeType
                  required={true}
                  name="source"
                  labelId="source"
                  type="Stock Borrow"
                  subType="Rate"
                  value={searchData.source}
                  onChange={handleChange}
                />
              </div>
              <div className={classes.grdCell1}>
                <InputLabel shrink id="status">
                  Status
                </InputLabel>
                <Select
                  name="status"
                  fullWidth
                  value={searchData.status}
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>Blank</em>
                  </MenuItem>
                  <MenuItem value="Active">Active</MenuItem>
                  <MenuItem value="Inactive">Inactive</MenuItem>
                </Select>
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
          <div className={classes.grdCellNone} style={{ marginRight: 10 }}>
            <SearchButton
              onClick={handleSearch}
              loading={loading}
              showfilter={(status) => setShowFilter(status)}
            />
          </div>
          <div className={classes.grdCellNone}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              startIcon={<ImportIcon />}
              onClick={() => {
                setOpenImport(true);
              }}
            >
              Import
            </Button>
          </div>
        </div>
      </Box>
      <Box component="div" mt={2}>
        <Table
          title={'Stock Borrow Rate'}
          data={rows}
          columns={columns}
          options={options}
        />
      </Box>
      {open && (
        <StockBorrowRateModal
          onClose={handleClose}
          open={open}
          value={rowData}
        ></StockBorrowRateModal>
      )}

      {openImport && (
        <RateUploadModal
          onClose={handleUploadClose}
          open={openImport}
        ></RateUploadModal>
      )}
    </div>
  );
}
