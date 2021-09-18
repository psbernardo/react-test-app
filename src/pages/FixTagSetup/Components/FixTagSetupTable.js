import React, { useState } from 'react';
import FixTagSetupModal from './FixTagSetupModal';
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
  createFixTag,
  listFixTagSetup,
  updateFixTag,
  deleteFixTag,
} from '../../../services/FixTagService';
import SelectSystemCode from 'components/Dropdown/SelectSystemCode';
import QueryParam from '../../../services/QueryParamService';
import useStyles from '../../../styles';

export default function FixTagSetupTable() {
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
              style={{
                margin: 0,
                padding: 0,
              }}
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
      name: 'tagId',
      label: 'Tag ID',
    },
    {
      name: 'report',
      label: 'Report',
    },
    {
      name: 'fixTag',
      label: 'Fix Tag',
    },
    {
      name: 'fieldName',
      label: 'Field Name',
    },
    {
      name: 'description',
      label: 'Description',
    },
    {
      name: 'uiDescription',
      label: 'UI Description',
    },
    {
      name: 'identityCol',
      label: 'Identity Col',
    },
    {
      name: 'tableName',
      label: 'Table Name',
    },
    {
      name: 'columnName',
      label: 'Column Name',
    },
    {
      name: 'ordinalPosition',
      label: 'Ordinal Position',
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
      report: '',
      fixTag: '',
      fieldName: '',
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
      const data = await listFixTagSetup(searchData);
      setRows(data.fixTagsList);
      notifyInfo(data.fixTagsList.length + ' search results.');
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
        rows[rowsToDelete[0].dataIndex].report +
        ' - ' +
        rows[rowsToDelete[0].dataIndex].fixTag;
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
          await deleteFixTag(rows[index].tagId);
          idsToDelete.push(rows[index].tagId);
        }
      } catch (error) {
        notifyError(error.message);
      } finally {
        const filtered = rowsCopy.filter((r) => !idsToDelete.includes(r.tagId));
        setRows(filtered);
        notifySuccess(messageKey + ' Fix tag has been deleted');
      }
    });
  };

  const handleOpen = (data) => {
    if (!data) {
      // ADD default values
      data = {
        report: '',
        fixTag: '',
        fieldname: '',
        description: '',
        uiDescription: '',
        identityCol: '',
        tableName: '',
        columnName: '',
        ordinalPosition: '',
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
    if (!data.report) {
      notifyError('Report is required.');
      valid = false;
    }
    if (!data.fixTag) {
      notifyError('Fix tag No is required.');
      valid = false;
    }
    if (!data.fieldName) {
      notifyError('Field name is required.');
      valid = false;
    }

    if (!valid) {
      return;
    }

    try {
      if (isEdit) {
        // EDIT
        const resp = await updateFixTag(data);
        const rowsCopy = [...rows];
        const index = rows.indexOf(rowData);
        rowsCopy[index] = resp.fixTag;
        setRows(rowsCopy);
        notifySuccess('Fix tag has been updated.');
      } else {
        // ADD
        const resp = await createFixTag(data);
        setRows([resp.fixTag, ...rows]);
        notifySuccess('New fix tag has been added.');
      }
      setOpen(false);
    } catch (error) {
      notifyError(error.message);
    }
  };

  return (
    <div className={classes.root}>
      <Box component="div" mt={5}>
        {' '}
        {showFilter ? (
          <div>
            <div className={classes.grdRow}>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectSystemCode
                  name="report"
                  label="Report"
                  type="Fix Tag"
                  subType="tZERO"
                  value={searchData.report}
                  onChange={handleChange}
                ></SelectSystemCode>
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <TextField
                  fullWidth
                  name="fixTag"
                  label="Fix Tag"
                  type="number"
                  value={searchData.fixTag}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <TextField
                  fullWidth
                  name="fieldName"
                  label="Field Name"
                  value={searchData.fieldName}
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
          title={'FIX TAG'}
          data={rows}
          columns={columns}
          options={options}
        />
      </Box>
      {open && (
        <FixTagSetupModal
          onClose={handleClose}
          open={open}
          value={rowData}
        ></FixTagSetupModal>
      )}{' '}
    </div>
  );
}
