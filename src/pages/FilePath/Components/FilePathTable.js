import React, { useState } from 'react';
import FilePathModal from './FilePathModal';
import { Button, Box, IconButton, TextField } from '@material-ui/core';
import { useConfirm } from 'material-ui-confirm';
import Table, { columnType } from 'components/Table/Table';
import {
  notifySuccess,
  notifyError,
  notifyInfo,
} from 'components/Notification/Notification';
import {
  Add as AddIcon,
  Create as EditIcon,
  Delete as DeleteIcon,
} from '@material-ui/icons';
import SearchButton from '../../../components/Button/Search';

import {
  createFilePath,
  listFilePath,
  updateFilePath,
  deleteFilePath,
} from '../../../services/FilePathService';
import QueryParam from '../../../services/QueryParamService';
import SelectFilePathType from '../../../components/AutoComplete/SelectFilePathType';
import useStyles from '../../../styles';

export default function FilePathTable() {
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
      label: 'SubType',
    },
    {
      name: 'filePath',
      label: 'File Path',
    },
    {
      name: 'fileNameFormat',
      label: 'File Name Format',
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
      filePath: '',
      fileNameFormat: '',
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
      const data = await listFilePath(searchData);
      setRows(data.filePathsList);
      notifyInfo(data.filePathsList.length + ' search results.');
    } catch (error) {
      notifyError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = (rowsToDelete) => {
    let messageKey = '';
    if (rowsToDelete.length === 1) {
      messageKey =
        rows[rowsToDelete[0].dataIndex].type +
        ' - ' +
        rows[rowsToDelete[0].dataIndex].subType;
    } else {
      messageKey = rowsToDelete.length + ' items';
    }
    let idsToDelete = [];
    confirm({
      description:
        "You are about to delete '" +
        messageKey +
        "'. Please confirm your action.",
      confirmationText: 'Yes, delete',
    }).then(async () => {
      const rowsCopy = [...rows];
      try {
        for (const r of rowsToDelete) {
          const index = r.dataIndex;
          await deleteFilePath(rows[index].filePathId);
          idsToDelete.push(rows[index].filePathId);
        }
      } catch (error) {
        notifyError(error.message);
      } finally {
        const filtered = rowsCopy.filter(
          (r) => !idsToDelete.includes(r.filePathId)
        );
        setRows(filtered);
        notifySuccess(messageKey + ' File path has been deleted');
      }
    });
  };

  const handleOpen = (data) => {
    if (!data) {
      //ADD default values
      data = {
        type: '',
        subType: '',
        filePath: '',
        fileNameFormat: '',
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
    if (!data.type) {
      notifyError('Type is required.');
      valid = false;
    }

    if (!data.filePath) {
      notifyError('File Path is required.');
      valid = false;
    }

    if (!valid) {
      return;
    }

    try {
      if (isEdit) {
        //EDIT
        const resp = await updateFilePath(data);
        const rowsCopy = [...rows];
        const index = rows.indexOf(rowData);
        rowsCopy[index] = resp.filePath;
        setRows(rowsCopy);
        notifySuccess('File path has been updated.');
      } else {
        //ADD
        const resp = await createFilePath(data);
        setRows([resp.filePath, ...rows]);
        notifySuccess('New file path has been added.');
      }
      setOpen(false);
    } catch (error) {
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
                <SelectFilePathType
                  freeSolo={true}
                  name="type"
                  label="Type"
                  value={searchData.type}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectFilePathType
                  freeSolo={true}
                  name="subType"
                  label="Sub Type"
                  field="sub_type"
                  value={searchData.subType}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectFilePathType
                  freeSolo={true}
                  name="filePath"
                  label="File Path"
                  field="file_path"
                  value={searchData.filePath}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className={classes.grdCell1}>
                <SelectFilePathType
                  freeSolo={true}
                  name="fileNameFormat"
                  label="File Name Format"
                  field="file_name_format"
                  value={searchData.fileNameFormat}
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
          title={'FILE PATH'}
          data={rows}
          columns={columns}
          options={options}
        />
      </Box>
      {open && (
        <FilePathModal
          onClose={handleClose}
          open={open}
          value={rowData}
        ></FilePathModal>
      )}
    </div>
  );
}
