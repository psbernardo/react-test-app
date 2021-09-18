import React, { useState, useEffect } from 'react';
import { Button, Box, IconButton, Tooltip, TextField } from '@material-ui/core';
import { notifyInfo, notifyError } from 'components/Notification/Notification';
import {
  CompareArrowsRounded as CancelAndCorrectIcon,
  Visibility as ViewIcon,
} from '@material-ui/icons';
import DataFileTransferDetailsModal from './DataFileTransferDetailsModal';
import SearchButton from '../../../components/Button/Search';
import QueryParam from '../../../services/QueryParamService';
import { getSystemDate } from '../../../services/ProfileService';
import { listDataFileTransfer } from '../../../services/DataFileTransferService';
import useStyles from '../../../styles';
import Table, { columnType } from 'components/Table/Table';

export default function DataFileTransferTable() {
  const classes = useStyles();

  useEffect(
    () => {
      async function init() {
        if (searchData.systemDate) return;

        const systemDate = await getSystemDate();
        setSearchData({ ...searchData, systemDate: systemDate });
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
              <div align={'left'} className={classes.grdCeNone}>
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
              <div align={'left'} className={classes.grdCeNone}>
                <Tooltip title="Process" arrow>
                  <div>
                    <IconButton
                      aria-label="process"
                      disabled={
                        rows[dataIndex].status === 'canceled' ? true : false
                      }
                      // onClick={() => {
                      //   handleProcessTrns(
                      //     rows[dataIndex].stageId,
                      //     rows[dataIndex].accountId
                      //   );
                      // }}
                    >
                      <CancelAndCorrectIcon />
                    </IconButton>
                  </div>
                </Tooltip>
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
      name: 'fileName',
      label: 'File name',
    },
    {
      name: 'processTime',
      label: 'Process Time',
      type: columnType.dateTime,
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
  const [searchData, setSearchData] = React.useState(
    QueryParam.get({
      systemDate: '',
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
      const data = await listDataFileTransfer(searchData);
      setRows(data.dataFileTransfersList);
      notifyInfo(data.dataFileTransfersList.length + ' search results.');
    } catch (error) {
      console.error(error);
      notifyError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = async (data, isEdit) => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Box component="div" mt={5}>
        {showFilter ? (
          <div>
            <div className={classes.grdRow}>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <TextField
                  name="systemDate"
                  label="System Date"
                  type="date"
                  value={searchData.systemDate}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
            </div>
          </div>
        ) : null}
        <div className={classes.actionContainer}>
          <div className={classes.grdCellNone} style={{ marginRight: 10 }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              // onClick={() => {
              //   executeProcess('bod');
              // }}
            >
              Process
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
          title="DATA FILE TRANSFER"
          data={rows}
          columns={columns}
          options={options}
        />
      </Box>
      {open && (
        <DataFileTransferDetailsModal
          onClose={handleClose}
          open={open}
          value={rowData}
        ></DataFileTransferDetailsModal>
      )}
    </div>
  );
}
