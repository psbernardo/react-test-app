import React, { useState } from 'react';
import DataDictionaryModal from './DataDictionaryModal';
import {
  notifyError,
  notifyInfo,
  notifySuccess,
} from 'components/Notification/Notification';
import {
  listDataDictionary,
  updateDataDictionary,
} from '../../../services/DataDictionaryService';
import {
  IconButton,
  Box,
  TextField,
} from '@material-ui/core';
import { Create as EditIcon } from '@material-ui/icons';
import useStyles from '../../../styles';
import SearchButton from '../../../components/Button/Search';
import QueryParam from '../../../services/QueryParamService';
import Table from 'components/Table/Table';

export default function LargeTraderIDTable({ params }) {
  const classes = useStyles();

  const options = {
    selectableRows: 'none',
  };

  const columns = [
    {
      name: '',
      options: {
        draggable: false,
        resizable: false,
        print: false,
        searchable: false,
        filter: false,
        sort: false,
        empty: true,
        viewColumns: false,
        download: false,
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
      name: 'fieldId',
      label: 'Field ID',
      options: {
        display: false,
      }
    },
    {
      name: 'field',
      label: 'Field',
    },
    {
      name: 'dataType',
      label: 'Data Type',
    },
    {
      name: 'sampleValue',
      label: 'Sample Value',
    },
    {
      name: 'description',
      label: 'Description',
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

  // const isDeleteEnabled = (dataIndex) => {
  //   return rows[dataIndex].status !== 'disabled';
  // };

  const [rowData, setRowData] = React.useState({});
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [showFilter, setShowFilter] = React.useState(true);
  const [rows, setRows] = useState([]);
  //set initial value

  const [searchData, setSearchData] = React.useState(
    QueryParam.get({
      field: '',  
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
      const data = await listDataDictionary(searchData);
      setRows(data.dataDictionariesList);
      notifyInfo(data.dataDictionariesList.length + ' search results.');
    } catch (error) {
      notifyError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleOpen = (data) => {
    setRowData(data);
    setOpen(true);
  };

  const handleClose = async (data) => {
    if (!data) {
      setOpen(false);
      return;
    }

    try {

      //EDIT
      const resp = await updateDataDictionary(data);
      const rowsCopy = [...rows];
      const index = rows.indexOf(rowData);

      rowsCopy[index].description = resp.dataDictionary.description;
      rowsCopy[index].sampleValue = resp.dataDictionary.sampleValue;

      setRows(rowsCopy);
      notifySuccess('Data Dictionary has been updated.');
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
                <TextField
                  fullWidth
                  name="field"
                  label="Field"
                  value={searchData.field}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}></div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}></div>
            </div>
            <div>
              <div className={classes.grdRow}></div>
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
          title={'Data Dictionary'}
          data={rows}
          columns={columns}
          options={options}
        />
      </Box>
      {open && (
        <DataDictionaryModal
          onClose={handleClose}
          open={open}
          value={rowData}
        ></DataDictionaryModal>
      )}
    </div>
  );
}
