import React, { useState, useEffect } from 'react';
import {
  Box,
  IconButton,
  TextField,
} from '@material-ui/core';
import {
  notifySuccess,
  notifyInfo,
  notifyError,
} from 'components/Notification/Notification';
import { Visibility as ViewIcon, Create as EditIcon } from '@material-ui/icons';
import SearchButton from '../../../components/Button/Search';
import SelectSystemCode from '../../../components/Dropdown/SelectSystemCode';
import QueryParam from '../../../services/QueryParamService';
import { getSystemDate } from '../../../services/ProfileService';
import useStyles from '../../../styles';
import Table, { columnType } from 'components/Table/Table';
import {
  listReserve15c3,
  updateReserve15c3,
} from '../../../services/Reserve15c3Service';
import Reserve15c3Modal from './Reserve15c3Modal';
import Reserve15c3ModalDetails from './Reserve15c3ModalDetails';

export default function Reserve15c3Table() {
  const classes = useStyles();

  useEffect(
    () => {
      async function init() {
        if (searchData.settleDate) return;

        const settleDate = await getSystemDate();
        setSearchData({ ...searchData, settleDate: settleDate });
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
                  aria-label="view"
                  onClick={() => {
                    setRowData(rows[dataIndex]);
                    setOpenDetails(true);
                
                  }}
                >
                  <ViewIcon />
                </IconButton>
              </div>

              <div align={'left'} className={classes.grdCeNone}>
                <IconButton
                  aria-label="edit"
                  onClick={() => { 
                     setRowData(rows[dataIndex]);
                     setOpenEdit(true);
                     setRowIndex(dataIndex);
                    }}
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
      name: 'settleDate',
      label: 'Settle Date',
      type: columnType.date,
    },
    {
      name: 'code',
      label: 'Code',
    },
    {
      name: 'description',
      label: 'Description',
    },
    {
      name: 'broker',
      label: 'Broker',
    },
    {
      name: 'houseCredit',
      label: 'House Credit',
      type: columnType.amount,
      addFooter: true,
      options: {
        display: false
      }
    },
    {
      name: 'houseDebit',
      label: 'House Debit',
      type: columnType.amount,
      addFooter: true,
      options: {
        display: false
      }
    },
    {
      name: 'houseNetAmt',
      label: 'House Net Amount',
      type: columnType.amount,
      addFooter: true,
      options: {
        display: false
      }
    },
    {
      name: 'adjCredit',
      label: 'ADJ Credit',
      type: columnType.amount,
      addFooter: true,
      options: {
        display: false
      }
    },
    {
      name: 'adjDebit',
      label: 'ADJ Debit',
      type: columnType.amount,
      addFooter: true,
      options: {
        display: false
      }
    },
    {
      name: 'adjNetAmt',
      label: 'ADJ Net Amout',
      type: columnType.amount,
      addFooter: true,
      options: {
        display: false
      }
    },
    {
      name: 'credit',
      label: 'Credit',
      type: columnType.amount,
      addFooter: true,
    },
    {
      name: 'debit',
      label: 'Debit',
      type: columnType.amount,
      addFooter: true,
    },
    {
      name: 'netAmt',
      label: 'Net Amount',
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

  const [rowData, setRowData] = React.useState({});
  const [openEdit, setOpenEdit] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [showFilter, setShowFilter] = React.useState(true);
  const [rows, setRows] = useState([]);
  const [openDetails, setOpenDetails] = React.useState(false);
  const [rowIndex, setRowIndex] = React.useState(0);
  const [searchData, setSearchData] = React.useState(
    QueryParam.get({
      settleDate: '',
      code:'',
      broker: '',
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
      const data = await listReserve15c3(searchData);
      setRows(data.reserve15c3List);
      notifyInfo(data.reserve15c3List.length + ' search results.');
    } catch (error) {
      console.error(error);
      notifyError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCloseEdit = async (data, isEdit) => {
    if (!data) {
      setOpenEdit(false);
      return;
    }

    if (data.adjCredit === '0' || !data.adjCredit) {
      notifyError('Adj. Credit is required.');
      return;
    }
    if (data.adjDebit === '') {
      data.adjDebit = '0'
    }

    try {
      if (isEdit) {
        //EDIT
        const resp = await updateReserve15c3(data);
        const rowsCopy = [...rows];
        rowsCopy[rowIndex] = resp.reserve15c3;
        setRows(rowsCopy);
        notifySuccess('Reserved 15C3 has been updated.');
      }
      setOpenEdit(false);
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
                <TextField
                  fullWidth
                  name="settleDate"
                  label="Settle Date"
                  type="date"
                  value={searchData.settleDate}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <TextField
                  fullWidth
                  name="code"
                  label="Code"
                  value={searchData.code}
                  onChange={handleChange}
                  inputProps={{ maxLength: 10 }}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectSystemCode
                  name="broker"
                  label="Broker"
                  type="Broker"
                  value={searchData.broker}
                  onChange={handleChange}
                ></SelectSystemCode>
              </div>
              <div className={classes.grdCell1}></div>
              <div className={classes.grdCell1}></div>
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
        <Table title="15C3" data={rows} columns={columns} options={options} />
      </Box>
      {openEdit && (
        <Reserve15c3Modal
          onClose={handleCloseEdit}
          open={openEdit}
          value={rowData}
        ></Reserve15c3Modal>
      )}
      {openDetails && (
        <Reserve15c3ModalDetails
          onClose={() => { setOpenDetails(false); }}
          open={openDetails}
          value={rowData}
        ></Reserve15c3ModalDetails>
      )}
    </div>
  );
}
