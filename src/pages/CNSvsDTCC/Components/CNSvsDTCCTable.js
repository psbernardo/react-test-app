import React, { useState, useEffect } from 'react';
import { Visibility as ViewIcon, Edit as EditIcon } from '@material-ui/icons';
import {
  Box,
  IconButton,
  TextField,
  Checkbox,
  FormControlLabel,
} from '@material-ui/core';
import CNSvsDTCCDetailsModal from './CNSvsDTCCDetailsModal';
import CNSvsDTCCUpdateNoteModal from './CNSvsDTCCUpdateNoteModal';
import {
  notifyInfo,
  notifyError,
  notifySuccess,
} from 'components/Notification/Notification';
import { listCNSvsDTCC, updateNote } from '../../../services/CNSvsDTCCService';
import SearchButton from '../../../components/Button/Search';
import SelectSymbol from '../../../components/AutoComplete/SelectSymbol';
import SelectCusip from '../../../components/AutoComplete/SelectCusip';
import { getSystemDate } from '../../../services/ProfileService';
import QueryParam from '../../../services/QueryParamService';
import Table, { columnType } from 'components/Table/Table';
import useStyles from '../../../styles';

export default function CNSvsDTCCDTable({ params }) {
  const classes = useStyles();
  //Set value of Settle date search parameter
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

  const [rows, setRows] = useState([]);
  const [loading, setLoading] = React.useState(false);
  const [showFilter, setShowFilter] = React.useState(true);
  const [rowData, setRowData] = React.useState({});
  const [open, setOpen] = React.useState(false);
  const [openNote, setOpenNote] = React.useState(false);
  //search parameters initial value
  const [searchData, setSearchData] = React.useState(
    QueryParam.get({
      settleDate: '',
      symbol: '',
      cusip: '',
      symbolDescription: '',
      showBreaksOnly: true,
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
              <div align={'left'} className={classes.grdCell1}>
                <IconButton
                  aria-label="edit"
                  onClick={() => {
                    setRowData(rows[dataIndex]);
                    setOpenNote(true);
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
      name: 'cnsQty',
      label: 'CNS QTY',
      type: columnType.quantity,
      addFooter: true,
    },
    {
      name: 'dtccQty',
      label: 'DTCC QTY',
      type: columnType.quantity,
      addFooter: true,
    },
    {
      name: 'breakQty',
      label: 'Break QTY',
      type: columnType.quantity,
      addFooter: true,
    },
    {
      name: 'cnsValue',
      label: 'CNS Value',
      type: columnType.amount,
      addFooter: true,
    },
    {
      name: 'dtccValue',
      label: 'DTCC Value',
      type: columnType.amount,
      addFooter: true,
    },
    {
      name: 'breakValue',
      label: 'Break Value',
      type: columnType.amount,
      addFooter: true,
    },
    {
      name: 'note',
      label: 'Note',
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

  const handleClose = () => {
    setOpen(false);
  };

  const handleSearch = async () => {
    try {
      setLoading(true);
      QueryParam.set(searchData);
      const data = await listCNSvsDTCC(searchData);
      console.log(data);
      setRows(data.cnsVsDtccList);
      notifyInfo(data.cnsVsDtccList.length + ' search results.');
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

  const handleNoteClose = async (data) => {
    setOpenNote(false);
    if (!data) {
      return;
    }
    const resp = await updateNote({
      cnsVsDtccId: data.cnsVsDtccId,
      note: data.note,
    });
    if (resp.cnsVsDtccId > 0) {
      const rowsCopy = [...rows];
      const index = rows.indexOf(rowData);
      rowsCopy[index] = { ...rowData, note: data.note };
      setRows(rowsCopy);
      notifySuccess('Note Succesfully Updated');
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
                  name="settleDate"
                  fullWidth
                  label="Settle Date"
                  type="date"
                  value={searchData.settleDate}
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
                <TextField
                  name="symbolDescription"
                  label="Symbol Description"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  value={searchData.symbolDescription}
                  onChange={handleChange}
                />
              </div>
              <div className={classes.grdCell1}>
                <FormControlLabel
                  control={
                    <Checkbox
                      color="primary"
                      checked={searchData.showBreaksOnly}
                      onChange={(e) => {
                        setSearchData({
                          ...searchData,
                          showBreaksOnly: e.target.checked,
                        });
                      }}
                    />
                  }
                  label="Show Breaks"
                />
              </div>
              <div
                className={classes.grdCell1}
                style={{ marginRight: 30 }}
              ></div>
              <div
                className={classes.grdCell1}
                style={{ marginRight: 30 }}
              ></div>
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
          title="CNS vs DTCC"
          data={rows}
          columns={columns}
          options={options}
        />
      </Box>
      {open && (
        <CNSvsDTCCDetailsModal
          onClose={handleClose}
          open={open}
          value={rowData}
        ></CNSvsDTCCDetailsModal>
      )}
      {openNote && (
        <CNSvsDTCCUpdateNoteModal
          onClose={handleNoteClose}
          open={openNote}
          value={rowData}
        ></CNSvsDTCCUpdateNoteModal>
      )}
    </div>
  );
}
