import React, { useState } from 'react';
import StatementDisclosureModal from './StatementDisclosureModal';
import {
  notifySuccess,
  notifyInfo,
  notifyError,
} from 'components/Notification/Notification';

import {
  createStatementDisclosure,
  listStatementDisclosure,
  updateStatementDisclosure,
  deleteStatementDisclosure,
} from '../../../services/StatementDisclosureService';
import { IconButton, Button, Box } from '@material-ui/core';
import {
  CheckCircle as CheckCircleIcon,
  Add as AddIcon,
  Create as EditIcon,
  Delete as DeleteIcon,
} from '@material-ui/icons';
import { useConfirm } from 'material-ui-confirm';
import Table, { columnType } from 'components/Table/Table';
import useStyles from '../../../styles';
import QueryParam from '../../../services/QueryParamService';
import SearchButton from '../../../components/Button/Search';
import SelectCorrespondent from '../../../components/AutoComplete/SelectCorrespondent';
import SelectSystemCode from '../../../components/Dropdown/SelectSystemCode';
import { dateProtoObjectToString } from '../../../services/ConvertService';

export default function StatementDisclosureTable({ params }) {
  const classes = useStyles();
  const confirm = useConfirm();

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
                  disabled={!isDeleteEnabled(dataIndex)}
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
      name: 'correspondent',
      label: 'Correspondent',
    },
    {
      name: 'reportType',
      label: 'Report Type',
    },
    {
      name: 'disclosure',
      label: 'Disclosure',
      options: {
        display: false,
        customBodyRenderLite: (dataIndex) => {
          return (
            <div
              dangerouslySetInnerHTML={{ __html: rows[dataIndex].disclosure }}
            />
          );
        },
      },
    },
    {
      name: 'status',
      label: 'Status',
      options: {
        customBodyRenderLite: (dataIndex) => {
          return rows[dataIndex].status === 'Active' ? (
            <CheckCircleIcon />
          ) : null;
        },
      },
    },
    {
      name: 'createdBy',
      label: 'Created By',
    },
    {
      name: 'modifiedDate',
      label: 'Modified Date',
      type: columnType.date,
    },
    {
      name: 'createdAt',
      label: 'Created At',
      type: columnType.dateTime,
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
      correspondent: '',
      status: '',
    })
  );

  const handleChange = (e, checkboxValue) => {
    const input = e.currentTarget.name ? e.currentTarget : e.target;

    setSearchData({
      ...searchData,
      [input.name]:
        checkboxValue === true || checkboxValue === false
          ? checkboxValue
          : input.value,
    });
  };

  const handleSearch = async () => {
    try {
      setLoading(true);
      QueryParam.set(searchData);
      const data = await listStatementDisclosure(searchData);
      setRows(data.disclosuresList);
      notifyInfo(data.disclosuresList.length + ' search results.');
    } catch (error) {
      console.error(error);
      notifyError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleOpen = (data) => {
    if (!data) {
      //ADD default values
      data = {
        correspondent: '',
        reportType: '',
        status: 'Active',
      };
    }

    setRowData(data);
    setOpen(true);
  };

  const handleClose = async (data, isEdit, disclosure) => {
    if (!data) {
      setOpen(false);
      return;
    }
    try {
      let valid = true;

      if (!data.correspondent) {
        notifyError('Correspondent is required.');
        valid = false;
      }
      if (!data.status) {
        notifyError('Status is required.');
        valid = false;
      }
      if (!disclosure) {
        notifyError('Disclosure is required.');
        valid = false;
      }
      if (!valid) {
        return;
      }

      if (disclosure) {
        data.disclosure = disclosure;
      }

      if (isEdit) {
        //EDIT
        await updateStatementDisclosure(data);
        setLoading(true);
        QueryParam.set(searchData);
        const { disclosuresList } = await listStatementDisclosure(searchData);
        setRows(disclosuresList);
        setLoading(false);
        notifySuccess('Disclosure has been updated.');
      } else {
        //ADD
        await createStatementDisclosure(data);
        QueryParam.set(searchData);
        const allData = await listStatementDisclosure(searchData);
        setRows(allData.disclosuresList);
        notifySuccess('New disclosure has been added.');
      }
      setOpen(false);
    } catch (error) {
      console.error(error);
      notifyError(error.message);
    }
  };

  const handleDelete = (rowsToDelete) => {
    let messageKey = '';
    if (rowsToDelete.length === 1) {
      messageKey =
        'Disclosure Id : ' + rows[rowsToDelete[0].dataIndex].disclosureId;
    } else {
      messageKey = rowsToDelete.length + ' items';
    }
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
          const resp = await deleteStatementDisclosure(
            rows[index].disclosureId
          );
          resp.modifiedDate = dateProtoObjectToString(resp.modifiedDate);
          rowsCopy[index] = resp.disclosure;
        }
        setRows(rowsCopy);
      } catch (error) {
        console.error(error);
        notifyError(error.message);
      } finally {
        notifySuccess(messageKey + ' has been deleted');
      }
    });
  };

  const isDeleteEnabled = (dataIndex) => {
    return rows[dataIndex].status !== 'Disabled';
  };

  const options = {
    // rowsSelected: rowsSelected,
    selectableRows: 'multiple',
    isRowSelectable: (dataIndex) => isDeleteEnabled(dataIndex),
    onRowsDelete: (selectedItems) => {
      handleDelete(selectedItems.data);
      return false;
    },
  };

  return (
    <div className={classes.root}>
      <Box component="div" mt={5}>
        {showFilter ? (
          <div>
            <div className={classes.grdRow}>
              <div
                className={classes.grdCellNone}
                style={{ marginRight: 30, width: 300 }}
              >
                <SelectCorrespondent
                  name="correspondent"
                  label="Correspondent"
                  value={searchData.correspondent}
                  onChange={handleChange}
                ></SelectCorrespondent>
              </div>
              <div className={classes.grdCellNone} style={{ width: 300 }}>
                <SelectSystemCode
                  name="status"
                  label="Status"
                  type="Status"
                  subType="AD"
                  value={searchData.status}
                  onChange={handleChange}
                ></SelectSystemCode>
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
          title={'Disclosure'}
          data={rows}
          columns={columns}
          options={options}
        />
      </Box>
      {open && (
        <StatementDisclosureModal
          onClose={handleClose}
          open={open}
          value={rowData}
        ></StatementDisclosureModal>
      )}
    </div>
  );
}
