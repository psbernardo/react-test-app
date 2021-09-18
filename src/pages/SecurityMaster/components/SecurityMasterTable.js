import React, { useState } from 'react';
import {
  notifySuccess,
  notifyInfo,
  notifyError,
} from 'components/Notification/Notification';
import SecurityMasterModal from './SecurityMasterModal';
import SecurityMasterViewModal from './SecurityMasterViewModal';
import {
  listSecurityMaster,
  createSecurityMaster,
  updateSecurityMaster,
} from '../../../services/SecurityMasterService';
import {
  Add as AddIcon,
  Create as EditIcon,
  CheckCircle as CheckCircleIcon,
  Visibility as ViewIcon,
} from '@material-ui/icons';
import {
  Box,
  TextField,
  IconButton,
  Button,
  InputLabel,
  FormControlLabel,
  Checkbox,
  Tooltip,
} from '@material-ui/core';
import Table, { columnType } from 'components/Table/Table';
import useStyles from '../../../styles';
import SelectSymbol from '../../../components/AutoComplete/SelectSymbol';
import SelectSystemCode from '../../../components/Dropdown/SelectSystemCode';
import SearchButton from '../../../components/Button/Search';
import QueryParam from '../../../services/QueryParamService';

export default function SecurityMasterTable({ params }) {
  const classes = useStyles();

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
              {isViewEnabled(dataIndex) && (
                <div className={classes.grdCellNone}>
                  <Tooltip title="View" arrow>
                    <div>
                      <IconButton
                        aria-label="view"
                        onClick={() => {
                          handleView(rows[dataIndex]);
                        }}
                      >
                        <ViewIcon />
                      </IconButton>
                    </div>
                  </Tooltip>
                </div>
              )}
            </div>
          );
        },
      },
    },
    {
      name: 'symbol',
      label: 'Symbol',
      order: 1,
    },
    {
      name: 'cusip',
      label: 'Cusip',
      order: 2,
    },
    {
      name: 'originalCusip',
      label: 'Original Cusip',
      order: 3,
    },
    {
      name: 'symbolDescription',
      label: 'Symbol Description',
      order: 4,
    },
    {
      name: 'assetType',
      label: 'Asset Type',
      order: 5,
    },
    {
      name: 'status',
      label: 'Status',
      order: 6,
      options: {
        display: false,
      },
    },
    {
      name: 'startDate',
      label: 'Start Date',
      order: 7,
      type: columnType.date,
      options: {
        display: false,
      },
    },
    {
      name: 'endDate',
      label: 'End Date',
      type: columnType.date,
      order: 8,
      options: {
        display: false,
      },
    },
    {
      name: 'leveragedFactor',
      label: 'Leveraged Factor',
      order: 9,
      options: {
        display: false,
      },
    },
    {
      name: 'isMarginable',
      label: 'Marginable',
      order: 10,
      options: {
        display: false,
        customBodyRenderLite: (dataIndex) => {
          return rows[dataIndex].isMarginable ? <CheckCircleIcon /> : null;
        },
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

  const options = {
    selectableRows: 'none',
    serverSide: true,
  };

  const isViewEnabled = (dataIndex) => {
    return (
      rows[dataIndex].assetType === 'E' || rows[dataIndex].assetType === 'O'
    );
  };
  const [pagination, setPagination] = useState({});
  const [footerData, setFooterData] = useState({});
  const [rowData, setRowData] = React.useState({});
  const [open, setOpen] = React.useState(false);
  const [openView, setOpenView] = React.useState(false);
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = React.useState(false);
  const [showFilter, setShowFilter] = React.useState(true);
  const [searchData, setSearchData] = React.useState(
    QueryParam.get({
      symbol: '',
      cusip: '',
      assetType: '',
      status: '',
      isMarginable: true,
    })
  );

  const handleChange = (e, checkboxValue) => {
    const input = e.currentTarget.name ? e.currentTarget : e.target;

    setSearchData({
      ...searchData,
      [input.name]:
        checkboxValue === true || checkboxValue === false
          ? checkboxValue
          : input.value,
    });
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

      const data = await listSecurityMaster(searchData, paginationCopy);
      if (paginationChange !== true) {
        notifyInfo(data.summary.totalRows + ' search results.');
      }

      paginationCopy.count = data.summary.totalRows;
      setPagination(paginationCopy);
      setRows(data.securityMastersList);
      setFooterData({});
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
        symbol: '',
        symbolDescription: '',
        cusip: '',
        originalCusip: '',
        securityType: '',
        secSubType: '',
        isMarginable: false,
        isWhenIssued: false,
        assetType: '',
        leveragedFactor: '',
        status: 'Active',
      };
    }

    setRowData(data);
    setOpen(true);
  };

  const handleView = (data) => {
    setRowData(data);
    setOpenView(true);
  };

  const handleClose = async (data, isEdit) => {
    if (openView) {
      setOpenView(false);
      return;
    }
    if (!data) {
      setOpen(false);
      return;
    }

    let valid = true;

    if (!data.symbol) {
      notifyError('Symbol is required.');
      valid = false;
    }
    if (!data.symbolDescription) {
      notifyError('Symbol Description is required.');
      valid = false;
    }
    if (!data.originalCusip) {
      notifyError('Original Cusip is required.');
      valid = false;
    }
    if (!data.assetType) {
      notifyError('Asset Type is required.');
      valid = false;
    }
    if (!data.cusip && data.assetType !== 'O') {
      notifyError('Cusip is required.');
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
        await updateSecurityMaster(data);
        let rowsCopy = [...rows];
        const index = rows.indexOf(rowData);
        rowsCopy[index] = data;
        setRows(rowsCopy);
        notifySuccess('Security Master has been updated.');
      } else {
        //ADD
        const resp = await createSecurityMaster(data);
        setRows([resp.securityMaster, ...rows]);
        notifySuccess('New Security Master has been added.');
      }

      setOpen(false);
    } catch (error) {
      console.error(error);
      notifyError(error.message);
    }
  };

  const getCsvData = async () => {
    const data = await listSecurityMaster(searchData);
    return data.securityMastersList;
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
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectSystemCode
                  name="assetType"
                  label="Asset Type"
                  type="Asset Type"
                  value={searchData.assetType}
                  onChange={handleChange}
                ></SelectSystemCode>
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectSystemCode
                  name="status"
                  label="Status"
                  type="Status"
                  subType="AI"
                  value={searchData.status}
                  onChange={handleChange}
                ></SelectSystemCode>
              </div>
              <div className={classes.grdCell1}>
                <InputLabel shrink>Marginable</InputLabel>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="isMarginable"
                      checked={searchData.isMarginable}
                      onChange={handleChange}
                    />
                  }
                  label=""
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
        <Table
          title={'Master Profile'}
          data={rows}
          columns={columns}
          options={options}
          footerData={footerData}
          onSearch={handleSearch}
          pagination={pagination}
          setPagination={setPagination}
          getCsvData={getCsvData}
        />
      </Box>
      {open && (
        <SecurityMasterModal
          onClose={handleClose}
          open={open}
          value={rowData}
        ></SecurityMasterModal>
      )}
      {openView && (
        <SecurityMasterViewModal
          onClose={handleClose}
          open={openView}
          value={rowData}
        ></SecurityMasterViewModal>
      )}
    </div>
  );
}
