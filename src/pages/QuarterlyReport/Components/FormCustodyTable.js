import React, { useState, useEffect } from 'react';
import { Visibility as ViewIcon } from '@material-ui/icons';
import { Box, IconButton, TextField } from '@material-ui/core';
import FormCustodyDetailsModal from './FormCustodyDetailsModal';
import { notifyInfo, notifyError } from 'components/Notification/Notification';
import { listQuarterlyReportFormCustody } from '../../../services/FormCustodyService';
import SearchButton from '../../../components/Button/Search';
import Table, { columnType } from 'components/Table/Table';
import { getSystemDate } from '../../../services/ProfileService';
import QueryParam from '../../../services/QueryParamService';
import useStyles from '../../../styles';

export default function FormCustodyTable({ params, segType }) {
  const classes = useStyles();

  useEffect(
    () => {
      async function init() {
        const systemDate = await getSystemDate();
        const searchDataCopy = { ...searchData };

        if (!searchData.fromDate) {
          searchDataCopy.fromDate = systemDate;
        }

        if (!searchData.toDate) {
          searchDataCopy.toDate = systemDate;
        }

        setSearchData(searchDataCopy);
      }

      init();
    },
    // eslint-disable-next-line
    []
  );

  const [rows, setRows] = useState([]);
  const [loading, setLoading] = React.useState(false);
  const [showFilter, setShowFilter] = React.useState(true);
  const [rowData, setRowData] = React.useState({});
  const [open, setOpen] = React.useState(false);
  const [searchData, setSearchData] = React.useState(
    QueryParam.get({
      fromDate: '',
      toDate: '',
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
      name: 'quarter',
      label: 'Quarter',
    },
    {
      name: 'year',
      label: 'Year',
    },
    {
      name: 'fromDate',
      label: 'From Date',
      type: columnType.date,
    },
    {
      name: 'toDate',
      label: 'To Date',
      type: columnType.date,
    },
    {
      name: 'box20501',
      label: 'Box 20501',
      type: columnType.quantity,
      addFooter: true,
    },
    {
      name: 'box20521', 
      label: 'Box 20521',
      type: columnType.quantity,
      addFooter: true,
    },
    {
      name: 'box20301', 
      label: 'Box 20301',
      type: columnType.quantity,
      addFooter: true,
    },
    {
      name: 'box20321',
      label: 'Box 20321',
      type: columnType.quantity,
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

  const handleClose = () => {
    setOpen(false);
  };

  const handleSearch = async () => {
    try {
      setLoading(true);
      QueryParam.set({ ...searchData, gridType: segType });
      const data = await listQuarterlyReportFormCustody(searchData);
      setRows(data.quarterlyFormCustodyList);
      notifyInfo(data.quarterlyFormCustodyList.length + ' search results.');
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

  return (
    <div className={classes.root}>
      <Box component="div" mt={5}>
        {showFilter ? (
          <div>
            <div className={classes.grdRow}>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <TextField
                  fullWidth
                  name="fromDate"
                  label="From Date"
                  type="date"
                  value={searchData.fromDate}
                  onChange={handleChange}
                  inputProps={{ max: searchData.toDate }}
                  InputLabelProps={{ shrink: true }} 
                />
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <TextField
                  fullWidth
                  name="toDate"
                  label="To Date"
                  type="date"
                  value={searchData.toDate}
                  onChange={handleChange}
                  inputProps={{ min: searchData.fromDate }}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className={classes.grdCell1}></div>
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
        <Table
          title="Form Custody - Quarterly Report"
          data={rows}
          columns={columns}
          options={options}
        />
      </Box>
      {open && (
        <FormCustodyDetailsModal
          onClose={handleClose}
          open={open}
          value={rowData}
        ></FormCustodyDetailsModal>
      )}
    </div>
  );
}
