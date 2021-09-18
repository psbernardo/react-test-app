import React, { useState } from 'react';
import ReconMappingModal from './ReconMappingModal';
import { Button, Box, IconButton } from '@material-ui/core';
import { useConfirm } from 'material-ui-confirm';
import {
  notifySuccess,
  notifyInfo,
  notifyError,
} from 'components/Notification/Notification';
import {
  Add as AddIcon,
  Create as EditIcon,
  Delete as DeleteIcon,
} from '@material-ui/icons';
import Table, { columnType } from 'components/Table/Table';
import SelectAccountNo from '../../../components/AutoComplete/SelectAccountNo';
import QueryParam from '../../../services/QueryParamService';
import SearchButton from '../../../components/Button/Search';
import SelectSystemCode from '../../../components/Dropdown/SelectSystemCode';

import {
  createAccountMapping,
  listAccountMapping,
  updateAccountMapping,
  deleteAccountMapping,
} from '../../../services/ReconMappingService';
import useStyles from '../../../styles';

export default function ReconMappingTable() {
  const classes = useStyles();
  const confirm = useConfirm();
  const options = {
    isRowSelectable: (dataIndex) => isDeleteEnalbed(dataIndex),
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
                  disabled={!isDeleteEnalbed(dataIndex)}
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
      name: 'account',
      label: 'Account No',
    },
    {
      name: 'report',
      label: 'Report',
    },
    {
      name: 'contraAccount',
      label: 'Contra Account No',
    },
    {
      name: 'contraSource',
      label: 'Contra Source',
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

  const isDeleteEnalbed = (dataIndex) => {
    return rows[dataIndex].status !== 'disabled';
  };

  const [rowData, setRowData] = React.useState({});
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [showFilter, setShowFilter] = React.useState(true);
  const [rows, setRows] = useState([]);
  const [searchData, setSearchData] = React.useState(
    QueryParam.get({
      account: '',
      report: '',
      contraAccount: '',
      contraSource: '',
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
      const data = await listAccountMapping(searchData);
      setRows(data.accountMappingsList);
      notifyInfo(data.accountMappingsList.length + ' search results.');
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
      messageKey = rows[rowsToDelete[0].dataIndex].account;
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
          await deleteAccountMapping(rows[index].accountMappingId);
          idsToDelete.push(rows[index].accountMappingId);
        }
      } catch (error) {
        console.error(error);
        notifyError(error.message);
      } finally {
        const filtered = rowsCopy.filter(
          (r) => !idsToDelete.includes(r.accountMappingId)
        );
        setRows(filtered);
        notifySuccess(messageKey + ' Recon Mapping has been deleted');
      }
    });
  };

  const handleOpen = (data) => {
    if (!data) {
      //ADD default values
      data = {
        account: '',
        report: '',
        contraAccount: '',
        contraSource: '',
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
    if (!data.account) {
      notifyError('Account is required.');
      valid = false;
    }
    if (!data.report) {
      notifyError('Report is required.');
      valid = false;
    }
    if (!data.contraAccount) {
      notifyError('Contra Account is required.');
      valid = false;
    }
    if (!data.contraSource) {
      notifyError('Contra Source is required.');
      valid = false;
    }

    if (!valid) {
      return;
    }

    try {
      if (isEdit) {
        //EDIT
        const resp = await updateAccountMapping(data);
        const rowsCopy = [...rows];
        const index = rows.indexOf(rowData);
        rowsCopy[index] = resp.accountMapping;
        setRows(rowsCopy);
        notifySuccess('Recon Mapping has been updated.');
      } else {
        //ADD
        const resp = await createAccountMapping(data);
        setRows([resp.accountMapping, ...rows]);
        notifySuccess('New Recon Mapping has been added.');
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
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectAccountNo
                  freeSolo={true}
                  required={false}
                  name="account"
                  label="Account No"
                  value={searchData.account}
                  onChange={handleChange}
                ></SelectAccountNo>
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectSystemCode
                  name="report"
                  label="Report"
                  type="Recon Account Mapping"
                  subType="Report"
                  value={searchData.report}
                  onChange={handleChange}
                ></SelectSystemCode>
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectAccountNo
                  freeSolo={true}
                  name="contraAccount"
                  label="Contra Account No"
                  value={searchData.contraAccount}
                  onChange={handleChange}
                ></SelectAccountNo>
              </div>
              <div className={classes.grdCell1}>
                <SelectSystemCode
                  name="contraSource"
                  label="Contra Source"
                  type="Recon Account Mapping"
                  subType="Contra Source"
                  value={searchData.contraSource}
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
          title={'RECON MAPPING'}
          data={rows}
          columns={columns}
          options={options}
        />
      </Box>
      {open && (
        <ReconMappingModal
          onClose={handleClose}
          open={open}
          value={rowData}
        ></ReconMappingModal>
      )}
    </div>
  );
}
