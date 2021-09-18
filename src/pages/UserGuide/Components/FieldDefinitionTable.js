import React, { useState, useEffect } from 'react';
import {
  notifyInfo,
  notifySuccess,
  notifyError,
} from 'components/Notification/Notification';
import {
  IconButton,
  Button,
  Box,
  Tooltip,
  TextField,
  CircularProgress,
} from '@material-ui/core';
import Table, { columnType } from 'components/Table/Table';
import { useConfirm } from 'material-ui-confirm';
import {
  Delete as DeleteIcon,
  Create as EditIcon,
  Search as SearchIcon,
} from '@material-ui/icons';
import {
  createFieldDefinition,
  updateFieldDefinition,
  deleteFieldDefinition,
  readFieldDefinition,
  listFieldDefinition,
} from '../../../services/FieldDefinitionService';
import useStyles from '../../../styles';
import FieldDefinitionModal from './FieldDefinitionModal';

export default function FieldDefinitionTable({
  open: isOpen,
  value,
  isEdit,
  userGuideId,
  modalLvl,
}) {
  const classes = useStyles();
  const confirm = useConfirm();

  const [rowData, setRowData] = React.useState({});
  const [rowsSelected, setRowsSelected] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [rows, setRows] = useState([]);
  const [isEditValues, setIsEditValues] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [fieldValue, setFieldValue] = React.useState('');

  async function fetchData() {
    const id = value.userGuideId ? value.userGuideId : userGuideId || '';
    const data =
      modalLvl === 1
        ? await readFieldDefinition(id)
        : await listFieldDefinition(id);

    setRows(data.fieldDefinitionsList);

    if (modalLvl === 2) {
      let selected = [];

      data.fieldDefinitionsList.filter(function(v, index) {
        if (v.selected === 1) {
          selected.push(index);
        }
      });

      setRowsSelected(selected);
    }
  }

  useEffect(() => {
    if (isEdit) {
      fetchData();
    }
  }, [isOpen]);

  const options = {
    selectableRowsOnClick: modalLvl === 1 ? false : true,
    selectableRowsHeader: modalLvl === 1 ? true : false,
    rowsSelected: rowsSelected,
    onRowsDelete: (selectedItems) => {
      handleDelete(selectedItems.data);
      return false;
    },
    setRowProps: (rowData, dataIndex, rowIndex) => ({
      onMouseUp: () => {
        if (modalLvl === 2) {
          const param = {
            fieldDefinitionId: rows[dataIndex].fieldDefinitionId,
            fieldId: rows[dataIndex].fieldId,
            userGuideId: userGuideId,
            field: rows[dataIndex].field,
          };

          if (rows[dataIndex].selected === 1) {
            rows[dataIndex].selected = 0;
            handleRemove(param);
          } else {
            rows[dataIndex].selected = 1;
            handleAdd(param);
          }
        }
      },
    }),
    customToolbarSelect: (selectedRows, a, b) => {
      return (
        <div
          className={classes.grdRow}
          style={{ margin: 0, padding: 0, marginRight: 20 }}
        >
          {modalLvl === 1 ? (
            <div className={classes.grdCell1}>
              <Tooltip title="Delete" arrow>
                <div>
                  <IconButton
                    aria-label="delete"
                    onClick={() => {
                      handleDelete(selectedRows.data);
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </div>
              </Tooltip>
            </div>
          ) : null}
        </div>
      );
    },
    onRowSelectionChange: (
      currentRowsSelected,
      allRowsSelected,
      rowsSelected
    ) => {
      setRowsSelected(rowsSelected);
    },
  };

  const columns = [
    {
      name: '',
      type: columnType.buttons,
      options: {
        customBodyRenderLite: (dataIndex) => {
          return modalLvl === 1 ? (
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
                  onClick={() => handleOpen(rows[dataIndex], true)}
                >
                  <EditIcon />
                </IconButton>
              </div>
            </div>
          ) : null;
        },
      },
    },
    {
      name: 'ordinalPosition',
      label: 'Ordinal Position',
      options: {
        display: false,
      },
    },
    {
      name: 'field',
      label: 'Field Name',
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
      options: {
        customBodyRenderLite: (dataIndex) => {
          return (
            <div
              dangerouslySetInnerHTML={{ __html: rows[dataIndex].description }}
            />
          );
        },
      },
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

  const handleSearch = async () => {
    try {
      setLoading(true);
      const id = value.userGuideId ? value.userGuideId : userGuideId || '';
      const data = await listFieldDefinition(id, fieldValue);
      setRows(data.fieldDefinitionsList);
      notifyInfo(data.fieldDefinitionsList.length + ' search results.');
    } catch (error) {
      console.error(error);
      notifyError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleOpen = (data, isEditValue) => {
    if (!data) {
      data = {
        userGuideId: value.userGuideId,
      };
    }

    if (isEditValue) {
      setIsEditValues(true);
    }
    setRowData(data);
    setOpen(true);
  };

  const handleClose = async (reload, saved, data, description) => {
    if (reload) {
      fetchData();
    }

    if (description) {
      data.description = description;
    }

    if (saved) {
      const resp = await updateFieldDefinition(data);
      const rowsCopy = [...rows];
      const index = rows.indexOf(rowData);
      rowsCopy[index] = resp.fieldDefinition;
      setRows(rowsCopy);
      notifySuccess('Field definition has been updated.');
    }

    setIsEditValues(false);
    setOpen(false);
    return;
  };

  const handleAdd = async (param) => {
    try {
      await createFieldDefinition(param);
      notifySuccess('Field name ' + param.field + ' has been added.');
    } catch (error) {
      console.error(error);
      notifyError(error.message);
    }
  };

  const handleRemove = async (param) => {
    try {
      await deleteFieldDefinition(param);
      notifySuccess('Field name ' + param.field + ' has been removed.');
    } catch (error) {
      console.error(error);
      notifyError(error.message);
    }
  };

  const handleDelete = (rowsToDelete) => {
    let messageKey = '';
    if (rowsToDelete.length === 1) {
      messageKey = rows[rowsToDelete[0].dataIndex].field;
    } else {
      messageKey = rowsToDelete.length + ' items';
    }

    let idsToDelete = [];
    confirm({
      description:
        "You are about to delete field '" +
        messageKey +
        "'. Please confirm your action.",
      confirmationText: 'Yes, Delete',
    }).then(async () => {
      const rowsCopy = [...rows];
      try {
        for (const r of rowsToDelete) {
          const index = r.dataIndex;
          const param = {
            fieldDefinitionId: rows[index].fieldDefinitionId,
            fieldId: rows[index].fieldId,
            userGuideId: value.userGuideId ? value.userGuideId : '',
          };

          await deleteFieldDefinition(param);
          idsToDelete.push(rows[index].fieldId);
        }
      } catch (error) {
        notifyError(error.message);
      } finally {
        const filtered = rowsCopy.filter(
          (r) => !idsToDelete.includes(r.fieldId)
        );
        setRows(filtered);
        notifySuccess(messageKey + ' has been deleted');
        setRowsSelected([]);
      }
    });
  };

  return (
    <div className={classes.root}>
      <div className={classes.actionContainer}>
        <div className={classes.grdCell1}>
          {modalLvl === 1 ? (
            <Button
              variant="contained"
              color="secondary"
              size="large"
              onClick={() => {
                handleOpen('', false);
              }}
            >
              Add/Remove Field Definition
            </Button>
          ) : (
            <div className={classes.grdRow} style={{ marginTop: 20 }}>
              <div className={classes.grdCell1} style={{ marginRight: 15 }}>
                <TextField
                  fullWidth
                  name="field"
                  label="Field"
                  value={fieldValue}
                  onChange={(e) => setFieldValue(e.target.value)}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className={classes.grdCellNone}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  onClick={handleSearch}
                  startIcon={
                    loading ? (
                      <CircularProgress
                        style={{ color: '#ffffff', height: 20, width: 20 }}
                      />
                    ) : (
                      <SearchIcon />
                    )
                  }
                >
                  {loading ? 'Searching...' : 'Search'}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
      <Box component="div" mt={modalLvl === 1 ? 2 : 1}>
        {(rows?.length > 0 && modalLvl === 2) || modalLvl === 1 ? (
          <Table
            title={'Field Definitions'}
            data={rows}
            columns={columns}
            options={options}
          />
        ) : (
          'Please wait while we fetch the list of field definitions...'
        )}
      </Box>
      {open && (
        <FieldDefinitionModal
          onClose={handleClose}
          open={open}
          value={rowData}
          isEditValues={isEditValues}
        ></FieldDefinitionModal>
      )}
    </div>
  );
}
