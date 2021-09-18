import React, { useState, useEffect } from 'react';
import {
  Box,
  FormControlLabel,
  RadioGroup,
  Radio,
  Button,
  IconButton,
} from '@material-ui/core';
import { Add as AddIcon, Visibility as ViewIcon } from '@material-ui/icons';
import {
  notifySuccess,
  notifyInfo,
  notifyError,
} from 'components/Notification/Notification';
import SearchButton from '../../../components/Button/Search';
import QueryParam from '../../../services/QueryParamService';
import {
  listAccountAccess,
  createAccountAccess,
  deleteAccountAccess,
} from '../../../services/ClientAccountAccessService';
import Table, { columnType } from 'components/Table/Table';
import useStyles from '../../../styles';
import SelectCorrespondent from '../../../components/AutoComplete/SelectCorrespondent';
import SelectAccountNo from '../../../components/AutoComplete/SelectAccountNo';
import SelectMasterAccountNo from '../../../components/AutoComplete/SelectMasterAccountNo';
import SelectAccountName from '../../../components/AutoComplete/SelectAccountName';
import SelectSystemCode from 'components/Dropdown/SelectSystemCode';
import SelectBranch from '../../../components/AutoComplete/SelectBranch';
import SelectRep from '../../../components/AutoComplete/SelectRep';
import SelectAdministrator from '../../../components/Dropdown/SelectAdministrator';
import ClientAccountAccessModal from './ClientAccountAccessModal';
import ClientAccountAccessorModal from './ClientAccountAccessorModal';

export default function ClientAccountAccessTable({ id, tableLvl }) {
  const classes = useStyles();

  const [loading, setLoading] = React.useState(false);
  const [showFilter, setShowFilter] = React.useState(true);
  const [rows, setRows] = useState([]);
  const [rowsSelected, setRowsSelected] = React.useState([]);
  const [newRowsSelected, setNewRowsSelected] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [openAccessor, setOpenAccessor] = React.useState(false);
  const [accountId, setAccountId] = React.useState(0);
  const [selectedListStatus, setSelectedListStatus] = React.useState(
    'Show All'
  );
  const [searchData, setSearchData] = React.useState(
    QueryParam.get({
      usrId: 2,
      correspondent: '',
      branch: '',
      accountNo: '',
      accountName: '',
      masterAccountNo: '',
      rep: '',
      broker: '',
      status: 'Active',
    })
  );

  async function fetchData() {
    const data = await listAccountAccess({ usrId: id });
    setRows(data.accountAccessesList);

    let selected = [];
    data.accountAccessesList.filter(function(v, index) {
      if (v.accountAccessId !== 0) {
        selected.push(index);
      }
    });
    setRowsSelected(selected);
  }

  useEffect(() => {
    if (tableLvl === 2) {
      fetchData();
    }
  }, []);

  const options = {
    selectableRowsOnClick: tableLvl === 1 ? false : true,
    selectableRows: tableLvl === 1 ? 'none' : 'multiple',
    selectableRowsHeader: true,
    selectToolbarPlacement: 'none',
    rowsSelected: rowsSelected,
    setRowProps: (rowData, dataIndex, rowIndex) => ({
      onMouseUp: () => {
        if (tableLvl === 2) {
          const param = {
            accountAccessId: rows[dataIndex].accountAccessId,
            usrId: searchData.usrId,
            accountId: rows[dataIndex].accountId,
            accountName: rows[dataIndex].accountName,
            accountNo: rows[dataIndex].accountNo,
          };

          if (rows[dataIndex].accountAccessId !== 0) {
            rows[dataIndex].accountAccessId = 0;
            handleRemove(param, false, 0);

            if (selectedListStatus === 'Show Selected') {
              rows.splice(dataIndex, 1);

              let selected = [];

              rows.filter(function(v, index) {
                if (v.accountAccessId !== 0) {
                  selected.push(index);
                }
              });

              setNewRowsSelected(selected);
            }
          } else {
            rows[dataIndex].accountAccessId = 1;
            handleAdd(param, false, 0);

            if (selectedListStatus === 'Show Unselected') {
              rows.splice(dataIndex, 1);
              setNewRowsSelected([]);
            }
          }
        }
      },
    }),
    customToolbarSelect: (selectedRows, a, b) => {
      return null;
    },
    onRowSelectionChange: (
      currentRowsSelected,
      allRowsSelected,
      rowsSelected,
    ) => {
      if (selectedListStatus === 'Show All') {
        setRowsSelected(rowsSelected);
      } else {
        setRowsSelected(newRowsSelected);
      }

      if (currentRowsSelected.length === 0) {
        function removeMultipleAccountaccess(item, index) {
          const param = {
            accountAccessId: rows[index].accountAccessId,
            usrId: searchData.usrId,
            accountId: rows[index].accountId,
          };

          rows[index].accountAccessId = 0;
          handleRemove(param, true, index);
        }
        rows.forEach(removeMultipleAccountaccess);

        setRowsSelected(rowsSelected);

        if(selectedListStatus === 'Show Selected') {
          rows.splice(0, rows.length);
        }
      }
      if (rowsSelected.length === rows.length && (selectedListStatus === 'Show All' || selectedListStatus === 'Show Unselected')) {
        let count = 0;

        function addMultipleAccountaccess(index) {
          count++;

          const param = {
            accountAccessId: rows[index].accountAccessId,
            usrId: searchData.usrId,
            accountId: rows[index].accountId,
          };

          rows[index].accountAccessId = 1;
          handleAdd(param, true, index, count);  
        }
        rowsSelected.forEach(addMultipleAccountaccess);  

        if(selectedListStatus === 'Show Unselected') {
          rows.splice(0, rows.length);
        }
      }
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
              {tableLvl === 1 ? (
                <div align={'left'} className={classes.grdCeNone}>
                  <IconButton
                    aria-label="view"
                    onClick={() => {
                      setAccountId(rows[dataIndex].accountId);
                      setOpenAccessor(true);
                    }}
                  >
                    <ViewIcon />
                  </IconButton>
                </div>
              ) : null}
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
      name: 'branch',
      label: 'Branch',
    },
    {
      name: 'accountNo',
      label: 'Account No',
    },
    {
      name: 'accountName',
      label: 'Account Name',
    },
    {
      name: 'masterAccountNo',
      label: 'Master Account No',
    },
    {
      name: 'rep',
      label: 'Rep',
    },
    {
      name: 'accountType',
      label: 'Account Type',
    },
    {
      name: 'marginType',
      label: 'Margin Type',
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

  const handleChange = (e) => {
    const input = e.currentTarget.name ? e.currentTarget : e.target;

    setSearchData({
      ...searchData,
      [input.name]: input.value,
    });
  };

  const handleListStatusChange = async (e) => {
    const selectedOption = e.target.value;
    const data = await listAccountAccess({ usrId: id });

    let selected = [];

    if (selectedOption === 'Show All') {
      data.accountAccessesList.filter(function(v, index) {
        if (v.accountAccessId !== 0) {
          selected.push(index);
        }
      });

      setRows(data.accountAccessesList);
      setRowsSelected(selected);
    } else if (selectedOption === 'Show Selected') {
      let showSelected = [];

      data.accountAccessesList.filter(function(v, index) {
        if (v.accountAccessId !== 0) {
          showSelected.push(v);
        }
      });

      showSelected.filter(function(v, index) {
        selected.push(index);
      });

      setRows(showSelected);
      setRowsSelected(selected);
    } else {
      let showUnselected = [];

      data.accountAccessesList.filter(function(v, index) {
        if (v.accountAccessId === 0) {
          showUnselected.push(v);
        }
      });

      setRows(showUnselected);
      setRowsSelected([]);
    }

    setSelectedListStatus(selectedOption);
  };

  const handleSearch = async (notify) => {
    try {
      setLoading(true);
      QueryParam.set(searchData);
      const data = await listAccountAccess(searchData);
      const filteredRows = data.accountAccessesList.filter((value) => {
        return value.accountAccessId !== 0 ? value : null;
      });
      setRows(filteredRows);
      if (notify !== false) {
        notifyInfo(filteredRows.length + ' search results.');
      }
    } catch (error) {
      console.error(error);
      notifyError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = async () => {
    handleSearch(false);
    setOpen(false);
  };

  const handleCloseAccessor = async () => {
    setOpenAccessor(false);
  };

  const handleAdd = async (param, multiple, count, lastItem) => {
    const message = multiple ? 'All account(s)' : param.accountName;

    try {
      await createAccountAccess(param);
      if (count === 0) {
        notifySuccess(message + ' has been added.');
      }
    } catch (error) {
      console.error(error);
      notifyError(error.message);
    }

    if (rows.length === lastItem || !multiple && selectedListStatus !== 'Show Unselected') {
        fetchData();
    }
  };

  const handleRemove = async (param, multiple, count) => {
    const message = multiple ? 'All account(s)' : param.accountName;
    
    try {
      await deleteAccountAccess(param);
      if (count === 0) {
        notifySuccess(message + ' has been removed.');
      }
    } catch (error) {
      console.error(error);
      notifyError(error.message);
    }
  };

  return (
    <div className={classes.root}>
      <Box component="div" mt={5}>
        {showFilter && tableLvl === 1 ? (
          <div>
            <div className={classes.grdRow}>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectAdministrator
                  name="usrId"
                  label="Access"
                  value={searchData.usrId}
                  onChange={handleChange}
                ></SelectAdministrator>
              </div>
              <div
                className={classes.grdCell1}
                style={{ marginRight: 30 }}
              ></div>
              <div
                className={classes.grdCell1}
                style={{ marginRight: 30 }}
              ></div>
              <div className={classes.grdCell1}></div>
            </div>
            <div className={classes.grdRow}>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectCorrespondent
                  name="correspondent"
                  value={searchData.correspondent}
                  onChange={handleChange}
                ></SelectCorrespondent>
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectBranch
                  freeSolo={true}
                  name="branch"
                  label="Branch"
                  value={searchData.branch}
                  onChange={handleChange}
                ></SelectBranch>
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectAccountNo
                  freeSolo={true}
                  name="accountNo"
                  label="Account No"
                  value={searchData.accountNo}
                  correspondent={searchData.correspondent}
                  onChange={handleChange}
                ></SelectAccountNo>
              </div>
              <div className={classes.grdCell1}>
                <SelectMasterAccountNo
                  name="masterAccountNo"
                  label="Master Account No"
                  value={searchData.masterAccountNo}
                  onChange={handleChange}
                ></SelectMasterAccountNo>
              </div>
            </div>
            <div className={classes.grdRow}>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectRep
                  freeSolo={true}
                  name="rep"
                  label="Rep"
                  value={searchData.rep}
                  onChange={handleChange}
                ></SelectRep>
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectAccountName
                  freeSolo={true}
                  label="Account Name"
                  name="accountName"
                  value={searchData.accountName}
                  onChange={handleChange}
                ></SelectAccountName>
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
                  subType="AI"
                  value={searchData.status}
                  onChange={handleChange}
                ></SelectSystemCode>
              </div>
            </div>
          </div>
        ) : null}
        <div className={classes.actionContainer}>
          {tableLvl === 1 ? (
            <div className={classes.grdRow} style={{ margin: 0 }}>
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
                  Add/Remove Account Access
                </Button>
              </div>
              <div className={classes.grdCellNone} style={{ marginRight: 30 }}>
                <SearchButton
                  onClick={handleSearch}
                  loading={loading}
                  showfilter={(status) => setShowFilter(status)}
                />
              </div>
            </div>
          ) : null}
          <div className={classes.grdCellNone}>
            {tableLvl === 2 ? (
              <RadioGroup
                style={{ flexDirection: 'row' }}
                name="listStatus"
                value={selectedListStatus}
                onChange={handleListStatusChange}
              >
                <FormControlLabel
                  name="showAll"
                  label="Show All"
                  value="Show All"
                  control={<Radio />}
                />
                <FormControlLabel
                  name="showSelected"
                  label="Show Selected"
                  value="Show Selected"
                  control={<Radio />}
                />
                <FormControlLabel
                  name="showUnselected"
                  label="Show Unselected"
                  value="Show Unselected"
                  control={<Radio />}
                />
              </RadioGroup>
            ) : null}
          </div>
        </div>
      </Box>
      <Box component="div" mt={2}>
        <Table
          title="Client Account Access"
          data={rows}
          columns={columns}
          options={options}
        />
      </Box>
      {open && (
        <ClientAccountAccessModal
          onClose={handleClose}
          open={open}
          id={searchData.usrId}
        ></ClientAccountAccessModal>
      )}
      {openAccessor && (
        <ClientAccountAccessorModal
          onClose={handleCloseAccessor}
          open={openAccessor}
          id={accountId}
        ></ClientAccountAccessorModal>
      )}
    </div>
  );
}
