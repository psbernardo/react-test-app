import React, { useState } from 'react';
 import AccountProcessModal from './AccountProcessModal';
import {
  notifySuccess,
  notifyInfo,
  notifyError,
} from 'components/Notification/Notification';

import {
    listAccountProcess,
    createAccountProcess,
} from '../../../services/AccountProcessService';
import { IconButton, Button, Box } from '@material-ui/core';
import {
  Add as AddIcon,
  Create as EditIcon,
} from '@material-ui/icons';
import { useConfirm } from 'material-ui-confirm';
import Table, { columnType } from 'components/Table/Table';
import useStyles from '../../../styles';
import QueryParam from '../../../services/QueryParamService';
import SearchButton from '../../../components/Button/Search';
import SelectCorrespondent from '../../../components/AutoComplete/SelectCorrespondent'; 
import SelectBranch from '../../../components/AutoComplete/SelectBranch';
import SelectAccountNo from '../../../components/AutoComplete/SelectAccountNo';
import SelectMasterAccountNo from '../../../components/AutoComplete/SelectMasterAccountNo';
import SelectRep from '../../../components/AutoComplete/SelectRep';
import SelectAccountProcess from '../../../components/Dropdown/SelectAccountProcess';
import SelectSystemCode from '../../../components/Dropdown/SelectSystemCode';

export default function AccountProcessTable({ params }) {
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
      name: 'branch',
      label: 'Branch',
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
      name: 'rep',
      label: 'Rep',
    },
    {
        name: 'process',
        label: 'Process',
    },
    {
        name: 'fromDate',
        label: 'From Date',
        type: columnType.date,
    },
    {
        name: 'toDate',
        label: 'To Date',
        type: columnType.date,
    },
    {
        name: 'amt',
        label: 'Amount',
        type: columnType.amount,
        addFooter: true,
    },
    {
        name: 'qty',
        label: 'Qty',
        type: columnType.quantity,
        addFooter: true,
    },
    {
        name: 'rate',
        label: 'Rate',
        type: columnType.amount,
        addFooter: true,
    },
    {
        name: 'status',
        label: 'Status',
    },
    {
        name: 'notes',
        label: 'Notes',
        options: {
            display: false
            }
    },
    {
      name: 'type',
      label: 'Type',
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
      branch: '',
      accountNo: '',
      masterAccountNo: '',
      rep: '',
      process: '',
      status: '',
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
      const data = await listAccountProcess(searchData);
      setRows(data.accountProcessList);
      notifyInfo(data.accountProcessList.length + ' search results.');
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
        //  await deleteSystemCode(rows[index].systemCodeId);
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
        processId:0,
        process:"Available Cash Min",
        correspondent:'',
        branch:'',
        accountNo:'',
        masterAccountNo:'',
        rep:'',
        fromDate:'',
        toDate:'',
        amt:'',
        qty:'',
        rate:'',
        status:'Active',
        note:'',
        type:'',
      };
    }

    setRowData(data);
    setOpen(true);
  };

  const handleClose = async (data, isValid, ref) => {
    if (!data) {
      setOpen(false);
      return;
    }

    try {
      if (!isValid) {
        return;
      }

      if (data.processId > 0) {
        //EDIT
       createAccountProcess(data,ref).then((resp)=>{
            const rowsCopy = [...rows];
            const index = rows.indexOf(rowData);
            rowsCopy[index] = resp;
             setRows(rowsCopy);
             notifySuccess('Account process has been updated.');
        }).catch(error =>{
          notifyError(error.message)
        });
      

     
      } else {
        //ADD
       createAccountProcess(data,ref).then((resp)=>{
           setRows([resp, ...rows]);
            notifySuccess('New Account process has been added.');
        }).catch(error => {
          notifyError(error.message)
        });;
      }

      if(isValid){
        setOpen(false);
      }
     
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
                <SelectCorrespondent
                  name="corresponent"
                  label="Correspondent"
                  value={searchData.correspondent}
                  onChange={handleChange}
                ></SelectCorrespondent>
              </div>
              <div className={classes.grdCell1}style={{ marginRight: 30 }}>
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
                  correspondent=""
                  onChange={handleChange}
                  allowInputChange={true}
                ></SelectAccountNo>
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectMasterAccountNo
                  name="masterAccountNo"
                  label="Master Account No"
                  value={searchData.masterAccountNo}
                  correspondent={searchData.correspondent}
                  onChange={handleChange}
                ></SelectMasterAccountNo>
              </div>
              <div className={classes.grdCell1}>
                <SelectRep
                  freeSolo={true}
                  name="rep"
                  label="Rep"
                  value={searchData.rep}
                  onChange={handleChange}> 
                </SelectRep>
              </div>
            </div>
            <div className={classes.grdRow}>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectAccountProcess
                  name="process"
                  label="Process"
                  type ="Account Process"
                  subType=""
                  optionType=""
                  value={searchData.process}
                  onChange={handleChange}
                ></SelectAccountProcess>
              </div>
                 <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                    <SelectSystemCode
                      name="status"
                      label="Status"
                      type="Status"
                      subType="AI"
                      value={searchData.status}
                      onChange={handleChange}
                    ></SelectSystemCode>
                 </div>
                 <div className={classes.grdCell1} style={{ marginRight: 30 }}></div>
                 <div className={classes.grdCell1} style={{ marginRight: 30 }}></div>
                 <div className={classes.grdCell1}></div>
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
          title={'Account Process'}
          data={rows}
          columns={columns}
          options={options}
        />
      </Box>
      {open && (
        <AccountProcessModal
          onClose={handleClose}
          open={open}
          value={rowData}
        ></AccountProcessModal>
      )}
    </div>
  );
}
