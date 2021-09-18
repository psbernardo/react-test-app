import React, { useState } from 'react';
import TransferAgentModal from './TransferAgentModal';
import { Button, Box, IconButton } from '@material-ui/core';
import { useConfirm } from 'material-ui-confirm';
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

import {
  createTransferAgent,
  listTransferAgent,
  updateTransferAgent,
  deleteTransferAgent,
} from '../../../services/TransferAgentService';
import SearchButton from '../../../components/Button/Search';
import Table, { columnType } from 'components/Table/Table';
import QueryParam from '../../../services/QueryParamService';
import useStyles from '../../../styles';

export default function TransferAgentTable() {
  const classes = useStyles();
  const confirm = useConfirm();
  const options = {
    isRowSelectable: (dataIndex) => isDeleteEnabled(dataIndex),
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
      name: 'agentName',
      label: 'Agent Name',
    },
    {
      name: 'address',
      label: 'Address',
    },
    {
      name: 'city',
      label: 'City',
    },
    {
      name: 'state',
      label: 'State',
    },
    {
      name: 'zipCode',
      label: 'Zip Code',
    },
    {
      name: 'country',
      label: 'Country',
    },
    {
      name: 'contactNo',
      label: 'Contact No',
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

  const isDeleteEnabled = (dataIndex) => {
    return rows[dataIndex].status !== 'disabled';
  };

  const [rowData, setRowData] = React.useState({});
  const [open, setOpen] = React.useState(false);
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = React.useState(false);
  const [, setShowFilter] = React.useState(true);
  const [searchData] = React.useState(QueryParam.get({}));

  // const handleChange = (e, x) => {
  //   const input = e.currentTarget.name ? e.currentTarget : e.target;

  //   setSearchData({
  //     ...searchData,
  //     [input.name]: input.value,
  //   });
  // };

  // const handleSearch = async (noNotif) => {
  //   try {
  //     const { transferAgentsList } = await listTransferAgent();
  //     setRows(transferAgentsList);
  //   } catch (error) {
  //     notifyError(error.message);
  //   }
  // };

  // useEffect(() => {
  //   handleSearch();
  // }, []);

  const handleSearch = async () => {
    try {
      setLoading(true);
      QueryParam.set(searchData);
      const data = await listTransferAgent(searchData);
      setRows(data.transferAgentsList);
      notifyInfo(data.transferAgentsList.length + ' search results.');
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
          await deleteTransferAgent(rows[index].transferAgentId);
          idsToDelete.push(rows[index].transferAgentId);
        }
      } catch (error) {
        console.error(error);
        notifyError(error.message);
      } finally {
        const filtered = rowsCopy.filter(
          (r) => !idsToDelete.includes(r.transferAgentId)
        );
        setRows(filtered);
        notifySuccess(messageKey + ' has been deleted');
      }
    });
  };

  const handleOpen = (data) => {
    if (!data) {
      //ADD default values
      data = {
        name: '',
        address: '',
        city: '',
        zipCode: '',
        state: '',
        country: 'US',
        contactNo: '',
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
    let valid = true;
    if (!data.agentName) {
      notifyError('Name is required.');
      valid = false;
    }
    if (!data.address) {
      notifyError('Address No is required.');
      valid = false;
    }
    if (!data.city) {
      notifyError('City is required.');
      valid = false;
    }
    if (!data.state && data.country === 'US') {
      notifyError('State is required.');
      valid = false;
    }
    if (data.state && data.country !== 'US') {
      notifyError('State is invalid.');
      valid = false;
    }
    if (!data.zipCode) {
      notifyError('Zip Code is required.');
      valid = false;
    }
    if (!data.country) {
      notifyError('Country is required.');
      valid = false;
    }
    if (!data.contactNo) {
      notifyError('Contact No is required.');
      valid = false;
    }
    if (!valid) {
      return;
    }
    try {
      if (isEdit) {
        //EDIT
        const resp = await updateTransferAgent(data);
        const rowsCopy = [...rows];
        const index = rows.indexOf(rowData);
        rowsCopy[index] = resp.transferagent;
        setRows(rowsCopy);
        notifySuccess('Transfer Agent has been updated.');
      } else {
        //ADD
        const resp = await createTransferAgent(data);
        setRows([resp.transferAgent, ...rows]);
        notifySuccess('New Transfer Agent has been added.');
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
          title={'TRANSFER AGENT'}
          data={rows}
          columns={columns}
          options={options}
        />
      </Box>
      {open && (
        <TransferAgentModal
          onClose={handleClose}
          open={open}
          value={rowData}
        ></TransferAgentModal>
      )}
    </div>
  );
}
