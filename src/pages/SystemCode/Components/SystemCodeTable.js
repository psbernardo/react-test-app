import React, { useState } from 'react';
import SystemCodeModal from './SystemCodeModal';
import {
  notifySuccess,
  notifyInfo,
  notifyError,
} from 'components/Notification/Notification';

import {
  createSystemCode,
  listSystemCode,
  deleteSystemCode,
  updateSystemCode,
} from '../../../services/SystemCodeService';
import { IconButton, Button, Box, TextField } from '@material-ui/core';
import {
  Delete as DeleteIcon,
  Add as AddIcon,
  Create as EditIcon,
} from '@material-ui/icons';
import { useConfirm } from 'material-ui-confirm';
import Table, { columnType } from 'components/Table/Table';
import useStyles from '../../../styles';
import QueryParam from '../../../services/QueryParamService';
import SearchButton from '../../../components/Button/Search';
import SelectCodeType from '../../../components/AutoComplete/SelectCodeType';

export default function SystemCodeTable({ params }) {
  const classes = useStyles();
  const confirm = useConfirm();

  const options = {
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
      name: 'type',
      label: 'Type',
    },
    {
      name: 'subType',
      label: 'Sub Type',
    },
    {
      name: 'code',
      label: 'Code',
    },
    {
      name: 'description',
      label: 'Code Description',
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

  const [rowData, setRowData] = React.useState({});
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [showFilter, setShowFilter] = React.useState(true);
  const [rows, setRows] = useState([]);
  const [searchData, setSearchData] = React.useState(
    QueryParam.get({
      type: '',
      subType: '',
      code: '',
      description: '',
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
      const data = await listSystemCode(searchData);

      setRows(data.systemCodesList);
      notifyInfo(data.systemCodesList.length + ' search results.');
    } catch (error) {
      console.error(error);
      notifyError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = (rowsToDelete) => {
    let messageKey = '';
    if (rowsToDelete.length === 1) {
      messageKey = rows[rowsToDelete[0].dataIndex].description;
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
          await deleteSystemCode(rows[index].systemCodeId);
          idsToDelete.push(rows[index].systemCodeId);
        }
      } catch (error) {
        notifyError(error.message);
      } finally {
        const filtered = rowsCopy.filter(
          (r) => !idsToDelete.includes(r.systemCodeId)
        );
        setRows(filtered);
        notifySuccess(messageKey + ' System code has been deleted');
      }
    });
  };

  const handleOpen = (data) => {
    if (!data) {
      //ADD default values
      data = {
        type: '',
        subType: '',
        code: '',
        description: '',
        note: '',
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

      if (!data.code) {
        notifyError('Code is required.');
        valid = false;
      }
      if (!data.type) {
        notifyError('Type is required.');
        valid = false;
      }

      if (!data.description) {
        notifyError('Description is required.');
        valid = false;
      }

      if (!valid) {
        return;
      }

      if (isEdit) {
        //EDIT
        const resp = await updateSystemCode(data);
        const rowsCopy = [...rows];
        const index = rows.indexOf(rowData);
        rowsCopy[index] = resp.systemCode;
        setRows(rowsCopy);
        notifySuccess('System Code has been updated.');
      } else {
        //ADD
        const resp = await createSystemCode(data);
        setRows([resp.systemCode, ...rows]);
        notifySuccess('New System Code has been added.');
      }

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
              <div
                className={classes.grdCellNone}
                style={{ marginRight: 30, width: 275 }}
              >
                <SelectCodeType
                  className={classes.searchField}
                  freeSolo={true}
                  name="type"
                  label="Type"
                  value={searchData.type}
                  onChange={handleChange}
                />
              </div>
              <div
                className={classes.grdCellNone}
                style={{ marginRight: 30, width: 275 }}
              >
                <SelectCodeType
                  className={classes.searchField}
                  freeSolo={true}
                  name="subType"
                  label="Sub Type"
                  field="sub_type"
                  value={searchData.subType}
                  onChange={handleChange}
                />
              </div>
              <div className={classes.grdCellNone} style={{ marginRight: 30 }}>
                <TextField
                  fullWidth
                  className={classes.searchField}
                  name="code"
                  label="Code"
                  value={searchData.code}
                  onChange={handleChange}
                  inputProps={{ maxLength: 300 }}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className={classes.grdCellNone}>
                <TextField
                  fullWidth
                  className={classes.searchField}
                  name="description"
                  label="Code Description"
                  value={searchData.description}
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
          title={'System Codes'}
          data={rows}
          columns={columns}
          options={options}
        />
      </Box>
      {open && (
        <SystemCodeModal
          onClose={handleClose}
          open={open}
          value={rowData}
        ></SystemCodeModal>
      )}
    </div>
  );
}
