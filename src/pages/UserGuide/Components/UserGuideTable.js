import React, { useState } from 'react';
import {
  notifySuccess,
  notifyInfo,
  notifyError,
} from 'components/Notification/Notification';
import { IconButton, Button, Box, TextField } from '@material-ui/core';
import Table, { columnType } from 'components/Table/Table';
import { useConfirm } from 'material-ui-confirm';
import {
  Delete as DeleteIcon,
  Add as AddIcon,
  Create as EditIcon,
} from '@material-ui/icons';
import QueryParam from '../../../services/QueryParamService';
import {
  updateUserGuide,
  deleteUserGuide,
  listUserGuide,
  getNewUserGuideId,
} from '../../../services/UserGuideService';
import useStyles from '../../../styles';
import SearchButton from '../../../components/Button/Search';
import SelectPage from '../../../components/AutoComplete/SelectPage';
import UserGuideModal from './UserGuideModal';

export default function UserGuideTable() {
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
              style={{ margin: 0, padding: 0, maxWidth: 100 }}
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
                  onClick={() => handleOpen(rows[dataIndex], false)}
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
      name: 'pageName',
      label: 'Page Name',
    },
    {
      name: 'modifiedBy',
      label: 'Modified By',
    },
    {
      name: 'modifiedDate',
      label: 'Modified Date',
      type: columnType.date,
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
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [saving, setSaving] = React.useState(false);
  const [showFilter, setShowFilter] = React.useState(true);
  const [rows, setRows] = useState([]);
  const [searchData, setSearchData] = React.useState(
    QueryParam.get({
      pageId: '',
      pageName: '',
      content: '',
    })
  );

  const handleChange = (e, x) => {
    const input = e.currentTarget.name ? e.currentTarget : e.target;

    if (['pageName'].includes(input.name)) {
      searchData.pageId = input.pageId;
      searchData.pageName = input.value;
    }

    setSearchData({
      ...searchData,
      [input.name]: input.value,
    });
  };

  const handleSearch = async () => {
    try {
      setLoading(true);
      QueryParam.set(searchData);
      const data = await listUserGuide(searchData);
      setRows(data.userGuidesList);
      notifyInfo(data.userGuidesList.length + ' search results.');
    } catch (error) {
      console.error(error);
      notifyError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleOpen = async (data) => {
    if (!data) {
      try {
        const { userGuideId } = await getNewUserGuideId();

        data = {
          action: 'Add',
          userGuideId: userGuideId,
          pageId: '',
          pageName: '',
          content: '',
          tableName: '',
          tableSchema: '',
        };
      } catch (error) {
        notifyError(error.message);
      }
    }

    setRowData(data);
    setOpen(true);
  };

  const handleClose = async (data, isEdit, content) => {
    if (!data) {
      setOpen(false);
      return;
    }

    let valid = true;

    if (!data.pageId) {
      notifyError('Page name is required.');
      valid = false;
    }
    if (!content) {
      notifyError('Content is required.');
      valid = false;
    }
    if (!valid) {
      return;
    }

    if (content) {
      data.content = content;
    }

    setSaving(true);

    try {
      const resp = await updateUserGuide(data);
      const rowsCopy = [...rows];
      const index = rows.indexOf(rowData);
      rowsCopy[index] = resp.userGuide;

      if (isEdit && data.action !== 'Add') {
        setRows(rowsCopy);
        notifySuccess('User guide has been updated.');
      } else {
        setRows([resp.userGuide, ...rows]);
        notifySuccess('New user guide has been added.');
      }

      setSaving(false);
      setOpen(false);
    } catch (error) {
      console.error(error);
      setSaving(false);
      notifyError(error.message);
    }
  };

  const handleDelete = (rowsToDelete) => {
    let messageKey = '';
    if (rowsToDelete.length === 1) {
      messageKey = rows[rowsToDelete[0].dataIndex].pageName;
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
          await deleteUserGuide(rows[index].userGuideId);
          idsToDelete.push(rows[index].userGuideId);
        }
      } catch (error) {
        notifyError(error.message);
      } finally {
        const filtered = rowsCopy.filter(
          (r) => !idsToDelete.includes(r.userGuideId)
        );
        setRows(filtered);
        notifySuccess(messageKey + ' has been deleted');
      }
    });
  };

  return (
    <div className={classes.root}>
      <Box component="div" mt={5}>
        {showFilter ? (
          <div>
            <div className={classes.grdRow}>
              <div className={classes.grdCellNone} style={{ marginRight: 30 }}>
                <SelectPage
                  style={{ width: 288 }}
                  name="pageName"
                  label="Page Name"
                  value={searchData.pageName}
                  onChange={handleChange}
                ></SelectPage>
              </div>
              <div className={classes.grdCell1}>
                <TextField
                  fullWidth
                  name="content"
                  label="Content"
                  value={searchData.content}
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
                handleOpen('', true);
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
          title={'User Guides'}
          data={rows}
          columns={columns}
          options={options}
        />
      </Box>
      {open && (
        <UserGuideModal
          onClose={handleClose}
          open={open}
          value={rowData}
          saving={saving}
        ></UserGuideModal>
      )}
    </div>
  );
}
