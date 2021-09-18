import React, { useState } from 'react';
import GLAccountModal from './GLAccountModal';
import { Button, Box, IconButton } from '@material-ui/core';
import { useConfirm } from 'material-ui-confirm';
import {
  notifySuccess,
  notifyInfo,
  notifyError,
} from 'components/Notification/Notification';
import Table, { columnType } from 'components/Table/Table';
import {
  Add as AddIcon,
  Create as EditIcon,
  Delete as DeleteIcon,
} from '@material-ui/icons';
import SelectAccountNo from '../../../components/AutoComplete/SelectAccountNo';
import SelectMasterAccountNo from '../../../components/AutoComplete/SelectMasterAccountNo';
import SelectAccountName from '../../../components/AutoComplete/SelectAccountName';
import SelectSystemCode from '../../../components/Dropdown/SelectSystemCode';
import QueryParam from '../../../services/QueryParamService';
import SearchButton from '../../../components/Button/Search';
import {
  listGeneralLedger,
  updateGeneralLedger,
  deleteGeneralLedger,
  getNewIdGeneralLedger,
  createGeneralLedger,
} from '../../../services/GLAccountService';
import useStyles from '../../../styles';

export default function GLAccountTable({ params }) {
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
      name: 'accountName',
      label: 'Account Name',
    },
    {
      name: 'accountNo',
      label: 'Account No',
    },
    {
      name: 'masterAccountNo',
      label: 'Master Account No',
    },
    {
      name: 'glType',
      label: 'GL Type',
    },
    {
      name: 'subAccounts',
      label: 'Sub Account No',
      options: {
        customBodyRenderLite: (dataIndex) => {
          const data = rows[dataIndex].subAccounts.split(',');
          return data.map((d) => <div key={d}>{d}</div>);
        },
      },
    },
    {
      name: 'broker',
      label: 'Broker',
    },
    {
      name: 'status',
      label: 'Status',
    },
    {
      name: 'reserveCalcCode',
      label: 'Reserve Calc Code',
    },
    {
      name: 'side',
      label: 'Side',
    },
    {
      name: 'createdBy',
      label: 'Created By',
      options: {
        display: false,
      },
    },

    {
      name: 'createdAt',
      label: 'Created At',
      options: {
        display: false,
      },
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

  const isDeleteEnalbed = (dataIndex) => {
    return rows[dataIndex].status !== 'Disabled';
  };

  const [rowData, setRowData] = React.useState({});
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [showFilter, setShowFilter] = React.useState(true);
  const [rows, setRows] = useState([]);
  const [searchData, setSearchData] = React.useState(
    QueryParam.get({
      accountName: '',
      accountNo: '',
      masterAccountNo: '',
      glType: '',
      broker: '',
      status: 'Active',
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
      const data = await listGeneralLedger(searchData);
      setRows(data.generalLedgersList);
      notifyInfo(data.generalLedgersList.length + ' search results.');
    } catch (error) {
      notifyError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = (rowsToDelete) => {
    let messageKey = '';
    if (rowsToDelete.length === 1) {
      messageKey = rows[rowsToDelete[0].dataIndex].accountName;
    } else {
      messageKey = rowsToDelete.length + ' items';
    }

    confirm({
      description:
        "You are about to disable '" +
        messageKey +
        "'. Please confirm your action.",
      confirmationText: 'Yes, Disable',
    }).then(async () => {
      const rowsCopy = [...rows];
      try {
        for (const r of rowsToDelete) {
          const index = r.dataIndex;
          const { generalLedger } = await deleteGeneralLedger(
            rows[index].accountId
          );
          rowsCopy[index] = generalLedger;
        }
        notifySuccess(messageKey + ' GL account has been disabled');
      } catch (error) {
        notifyError(error.message);
      } finally {
        setRows(rowsCopy);
      }
    });
  };

  const handleOpen = async (data) => {
    if (!data) {
      const generalLedger = await getNewIdGeneralLedger();

      data = generalLedger;
      data.action = 'add';
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

      if (!data.accountName) {
        notifyError('Account name is required.');
        valid = false;
      }
      if (!data.accountNo) {
        notifyError('Account no. is required.');
        valid = false;
      }

      if (!valid) {
        return;
      }

      if (isEdit) {
        //EDIT
        const resp = await updateGeneralLedger(data);
        const rowsCopy = [...rows];
        const index = rows.indexOf(rowData);
        rowsCopy[index] = resp.generalLedger;
        setRows(rowsCopy);
        notifySuccess('GL account has been updated.');
      } else {
        //ADD
        const resp = await createGeneralLedger(data);
        setRows([resp.generalLedger, ...rows]);
        notifySuccess('New GL account has been added.');
        console.log(data);
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
                <SelectAccountName
                  freeSolo={true}
                  required={false}
                  label="Account Name"
                  name="accountName"
                  value={searchData.accountName}
                  onChange={handleChange}
                ></SelectAccountName>
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectAccountNo
                  required={false}
                  freeSolo={true}
                  name="accountNo"
                  label="Account No"
                  value={searchData.accountNo}
                  correspondent={searchData.correspondent}
                  onChange={handleChange}
                  type="gl" //client or gl
                ></SelectAccountNo>
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectMasterAccountNo
                  required={false}
                  name="masterAccountNo"
                  label="Master Account No"
                  value={searchData.masterAccountNo}
                  // correspondent={searchData.correspondent}
                  onChange={handleChange}
                  type="gl" //client or gl
                ></SelectMasterAccountNo>
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectSystemCode
                  name="glType"
                  label="GL Type"
                  type="GL Type"
                  value={searchData.glType}
                  onChange={handleChange}
                ></SelectSystemCode>
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectSystemCode
                  name="broker"
                  label="Broker"
                  type="Broker"
                  value={searchData.broker}
                  onChange={handleChange}
                ></SelectSystemCode>
              </div>
              <div className={classes.grdCell1}>
                <SelectSystemCode
                  name="status"
                  label="Status"
                  type="Status"
                  subType="Client Setup"
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
          title={'GL Accounts'}
          data={rows}
          columns={columns}
          options={options}
        />
      </Box>
      {open && (
        <GLAccountModal
          onClose={handleClose}
          open={open}
          value={rowData}
        ></GLAccountModal>
      )}
    </div>
  );
}
