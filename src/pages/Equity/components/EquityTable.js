import React, { useState } from 'react';
import {
  notifySuccess,
  notifyInfo,
  notifyError,
} from 'components/Notification/Notification';
import EquityModal from './EquityModal';
import {
  listSecurityMaster,
  createSecurityMaster,
  updateSecurityMaster,
} from '../../../services/SecurityMasterService';
import {
  Add as AddIcon,
  Create as EditIcon,
  CheckCircle as CheckCircleIcon,
} from '@material-ui/icons';
import { Box, TextField, IconButton, Button } from '@material-ui/core';
import Table, { columnType } from 'components/Table/Table';
import useStyles from '../../../styles';
import SelectSymbol from '../../../components/AutoComplete/SelectSymbol';
import SearchButton from '../../../components/Button/Search';
import QueryParam from '../../../services/QueryParamService';

export default function EquityTable() {
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
      name: 'symbol',
      label: 'Symbol',
    },
    {
      name: 'cusip',
      label: 'Cusip',
    },
    {
      name: 'originalCusip',
      label: 'Original Cusip',
    },
    {
      name: 'symbolDescription',
      label: 'Symbol Description',
      options: {
        display: false,
      },
    },
    {
      name: 'isMarginable',
      label: 'Marginable',
      options: {
        //format date to string
        display: false,
        customBodyRenderLite: (dataIndex) => {
          return rows[dataIndex].isMarginable ? <CheckCircleIcon /> : null;
        },
      },
    },
    {
      name: 'securityType',
      label: 'Security Type',
    },
    {
      name: 'secSubType',
      label: 'Sec Sub Type',
    },
    {
      name: 'assetType',
      label: 'Asset Type',
    },
    {
      name: 'isWhenIssued',
      label: 'When Issued',
      options: {
        //format date to string
        customBodyRenderLite: (dataIndex) => {
          return rows[dataIndex].isWhenIssued ? <CheckCircleIcon /> : null;
        },
      },
    },
    {
      name: 'leveragedFactor',
      label: 'Leveraged Factor',
    },
    {
      name: 'status',
      label: 'Status',
    },
    {
      name: 'createdAt',
      label: 'Created At',
      type: columnType.dateTime,
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

  const [pagination, setPagination] = useState({});
  const [rowData, setRowData] = React.useState({});
  const [open, setOpen] = React.useState(false);
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = React.useState(false);
  const [showFilter, setShowFilter] = React.useState(true);
  const [searchData, setSearchData] = React.useState(
    QueryParam.get({
      symbol: '',
      cusip: '',
    })
  );

  const handleChange = (e, x) => {
    const input = e.currentTarget.name ? e.currentTarget : e.target;

    setSearchData({
      ...searchData,
      [input.name]: input.value,
    });
  };

  const getCsvData = async () => {
    const data = await listSecurityMaster(searchData);
    return data.securityMastersList;
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
        status: '',
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
    if (!data.symbolDescription) {
      notifyError('Symbol Description is required.');
      valid = false;
    }
    if (!data.cusip) {
      notifyError('Cusip is required.');
      valid = false;
    }
    if (!data.originalCusip) {
      notifyError('Original Cusip is required.');
      valid = false;
    }
    if (!data.securityType) {
      notifyError('Security Type is required.');
      valid = false;
    }
    if (!data.secSubType) {
      notifyError('Sec Sub Type is required.');
      valid = false;
    }
    if (!data.assetType) {
      notifyError('Asset Type is required.');
      valid = false;
    }
    if (!data.leveragedFactor) {
      notifyError('Leveraged Factor is required.');
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
        const resp = await updateSecurityMaster(data);
        let rowsCopy = [...rows];
        const index = rows.indexOf(rowData);
        rowsCopy[index].status = 'inactive';
        setRows([resp.securityMaster, ...rowsCopy]);
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
              <div className={classes.grdCell1}>
                <TextField
                  name="cusip"
                  fullWidth
                  label="Cusip"
                  type="text"
                  value={searchData.cusip}
                  onChange={handleChange}
                  className={classes.textField}
                  InputLabelProps={{ shrink: true }}
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
          title={'Equity'}
          data={rows}
          columns={columns}
          options={options}
          onSearch={handleSearch}
          pagination={pagination}
          setPagination={setPagination}
          getCsvData={getCsvData}
        />
      </Box>
      {open && (
        <EquityModal
          onClose={handleClose}
          open={open}
          value={rowData}
        ></EquityModal>
      )}
    </div>
  );
}
