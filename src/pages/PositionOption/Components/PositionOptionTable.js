import React, { useState, useEffect } from 'react';
import { Button, Box, TextField, Tooltip, IconButton} from '@material-ui/core';
import { notifyInfo, notifyError, notifySuccess } from 'components/Notification/Notification';
import Table, { columnType } from 'components/Table/Table';
import { CompareArrowsRounded as CancelAndCorrectIcon } from '@material-ui/icons';
import { getSystemDate } from '../../../services/ProfileService';
import SelectAccountNo from '../../../components/AutoComplete/SelectAccountNo';
import SelectMasterAccountNo from '../../../components/AutoComplete/SelectMasterAccountNo';
import SelectSystemCode from '../../../components/Dropdown/SelectSystemCode';
import SelectBranch from '../../../components/AutoComplete/SelectBranch';
import SelectRep from '../../../components/AutoComplete/SelectRep';
import SelectSymbol from '../../../components/AutoComplete/SelectSymbol';
import QueryParam from '../../../services/QueryParamService';
import SearchButton from '../../../components/Button/Search';
import useStyles from '../../../styles';
import SelectCorrespondent from 'components/AutoComplete/SelectCorrespondent';
import { listPositionOption, processPositionOption } from '../../../services/PositionOptionService';

export default function OptionPositionTable({ params }) {
  const classes = useStyles();

  useEffect(
    () => {
      async function init() {
        const systemDate = await getSystemDate();
        var searchDataCopy = {... searchData};
        
        searchDataCopy.settleDate = systemDate;

        setSearchData(searchDataCopy);
        setCurrentDate(systemDate);
      }

      init();
    },
    // eslint-disable-next-line
    []
  );

  const [isNotCurrentDate, setIsNotCurrentDate] = React.useState(false);
  const [selectableRows, setSelectableRows] = useState('multiple');
  const [currentDate, setCurrentDate] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [showFilter, setShowFilter] = React.useState(true);
  const [rows, setRows] = useState([]);
  const [rowsToUpdate] = React.useState([]);
  const [searchData, setSearchData] = React.useState(
    QueryParam.get({
      settleDate: '',
      entryType: '',
      correspondent: '',
      branch: '',
      accountNo: '',
      masterAccountNo: '',
      rep: '',
      broker: '',
      symbol: '',
    })
  );

  const columns = [
    {
      name: '',
      type: columnType.buttons,
      options: {
        customBodyRenderLite: (dataIndex) => {
          return (
             <div align={'left'} className={classes.grdCell1}>
               {  !isNotCurrentDate &&
                <Tooltip title="Process" arrow>
                  <div>
                    <IconButton
                      aria-label="process"
                      onClick={() => {}}
                    >
                      <CancelAndCorrectIcon />
                    </IconButton>
                  </div>
                </Tooltip>
              }
              </div>  
          );
        },
      },
    },
    {
      name: 'stageId',
      label: 'Stage ID',
      options: {
        display: false,
      }
    },
    {
      name: 'entryType',
      label: 'Entry Type',
    },
    {
      name: 'correspondent',
      label: 'Correspondent',
    },
    {
      name: 'branch',
      label: 'Branch',
      options: {
        display: false,
      }
    },
    {
      name: 'accountNo',
      label: 'Account No',
    },
    {
      name: 'subAccountNo',
      label: 'Sub Account No',
    },
    {
      name: 'systemDate',
      label: 'System Date',
      type: columnType.date,
    },
    {
      name: 'tradeDate',
      label: 'Trade Date',
      type: columnType.date,
    },
    {
      name: 'settleDate',
      label: 'Settle Date',
      type: columnType.date,
    },
    {
      name: 'symbol',
      label: 'Symbol',
    },
    {
      name: 'qty',
      label: 'Qty',
      type: columnType.quantity,
    },
    {
      name: 'price',
      label: 'Price',
      type: columnType.amount,
    },
    {
      name: 'contraAccountNo',
      label: 'Contra Account No',
    },
    {
      name: 'description',
      label: 'Description',
    },
    {
      name: 'executingVenue',
      label: 'Executing Venue',
      options: {
        display: false,
      }
    },
    {
      name: 'status',
      label: 'Status',
    },
    {
      name: 'batchNo',
      label: 'Batch No',
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

  const options = {
    selectableRows: selectableRows,
    selectableRowsHideCheckboxes: isNotCurrentDate,
    customToolbarSelect: (selectedRows, a, b) => {
      return (
        <div
          className={classes.grdRow}
          style={{ margin: 0, padding: 0, marginRight: 20 }}
        >
          <div className={classes.grdCell1}>
            <Button
              style={{ marginRight: 20 }}
              variant="contained"
              color="primary"
              size="medium"
              onClick={() => { handleProcess(selectedRows.data) }}
            >
              Process
            </Button>
          </div>
        </div>
      );
    },
  };

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
      const data = await listPositionOption(searchData);
      console.log(data);
      setRows(data.positionsList);
      notifyInfo(data.positionsList.length + ' search results.');

      // Show Checkboxes if date is equal to current date
      if (searchData.settleDate === currentDate) {
        setIsNotCurrentDate(false);
        setSelectableRows('multiple');
      } else {
        setIsNotCurrentDate(true);
        setSelectableRows('none');
      }

    } catch (error) {
      notifyError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleProcess = async (data) => {
    // Set Selected Rows to Local Variable
    rowsToUpdate.splice(0);
    for (var a = 0; a < data.length; a++) {
      rowsToUpdate[a] = data[a].dataIndex;
    }

    try {
      //PROCESS
      var positionsList = [];
      positionsList.splice(0);
      for (var a = 0; a < rowsToUpdate.length; a++) {
        positionsList.push(rows[rowsToUpdate[a]]);
      }

      const res = await processPositionOption({
        positions: positionsList,
      });

      notifySuccess( positionsList.length + ' positions has been moved successfully' );
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
                <TextField
                  name="settleDate"
                  fullWidth
                  label="Settle Date"
                  type="date"
                  value={searchData.settleDate}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                  inputProps={{ min: currentDate }}
                />
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectSystemCode
                    name="entryType"
                    label="Entry Type"
                    type="Entry Type"
                    subType="option"
                    value={searchData.entryType}
                    onChange={handleChange}
                  ></SelectSystemCode>
              </div>
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
              <div className={classes.grdCell1}>
                <SelectAccountNo
                  freeSolo={true}
                  name="accountNo"
                  label="Account No"
                  type="client"
                  value={searchData.accountNo}
                  correspondent=""
                  onChange={handleChange}
                  allowInputChange={true}
                ></SelectAccountNo>
              </div>
            </div>
            <div className={classes.grdRow}>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectMasterAccountNo
                  name="masterAccountNo"
                  label="Master Account No"
                  value={searchData.masterAccountNo}
                  correspondent={searchData.correspondent}
                  onChange={handleChange}
                ></SelectMasterAccountNo>
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectRep
                  freeSolo={true}
                  name="rep"
                  label="Rep"
                  value={searchData.rep}
                  onChange={handleChange}> 
                </SelectRep>
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
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectSymbol
                  freeSolo={true}
                  name="symbol"
                  label="Symbol"
                  value={searchData.symbol}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className={classes.grdCell1}></div>
            </div>
          </div>
        ) : null}
        <div className={classes.actionContainer}>
          <div className={classes.grdCellNone} style={{ marginRight: 10 }}>
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
          title={'Option'}
          data={rows}
          columns={columns}
          options={options}
        />
      </Box>
    </div>
  );
}
