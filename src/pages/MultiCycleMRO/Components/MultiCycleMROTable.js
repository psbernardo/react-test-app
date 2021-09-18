import React, { useState, useEffect } from 'react';
import { Box, TextField } from '@material-ui/core';
import { notifyInfo, notifyError } from 'components/Notification/Notification';
import { listAcatsMultiCycleMRO } from '../../../services/AcatsMultiCycleService';
import SearchButton from '../../../components/Button/Search';
import QueryParam from '../../../services/QueryParamService';
import { getSystemDate } from '../../../services/ProfileService';
import Table, { columnType } from 'components/Table/Table';
import useStyles from '../../../styles';

export default function MultiCycleMROTable({ params }) {
  const classes = useStyles();

  const [pagination, setPagination] = useState({});
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = React.useState(false);
  const [showFilter, setShowFilter] = React.useState(true);
  const [searchData, setSearchData] = React.useState(
    QueryParam.get({
      fromDate: '',
      toDate: '',
    })
  );

  useEffect(
    () => {
      async function init() {
        const systemDate = await getSystemDate();
        const searchDataCopy = { ...searchData };

        if (!searchData.fromDate) {
          searchDataCopy.fromDate = systemDate;
        }

        if (!searchData.toDate) {
          searchDataCopy.toDate = systemDate;
        }

        setSearchData(searchDataCopy);
      }

      init();
    },
    // eslint-disable-next-line
    []
  );

  const columns = [
    {
      name: 'processingDate',
      label: 'Processing Date',
      type: columnType.date,
    },
    {
      name: 'recordType',
      label: 'Record Type',
    },
    {
      name: 'recordSubTyp',
      label: 'Record Sub Type',
    },
    {
      name: 'controlNo',
      label: 'Control No',
    },
    {
      name: 'tiRefId',
      label: 'TI Reference ID',
    },
    {
      name: 'atRefId',
      label: 'AT Reference ID',
    },
    {
      name: 'accountNo',
      label: 'Account No',
    },
    {
      name: 'contraAccountNo',
      label: 'Contra Account No',
    },
    {
      name: 'contraAccountName',
      label: 'Contra Account Name',
    },
    {
      name: 'delParticipantNo',
      label: 'Deliverer Participant No',
    },
    {
      name: 'recParticipantNo',
      label: 'Receiver Participant No',
    },
    {
      name: 'status',
      label: 'Status',
    },
    {
      name: 'age',
      label: 'Age',
    },
    {
      name: 'transferType',
      label: 'Transfer Type',
    },
    {
      name: 'cusip',
      label: 'Cusip',
      options: {
        display: false,
      },
    },
    {
      name: 'checkDigit',
      label: 'Check Digit',
      options: {
        display: false,
      },
    },
    {
      name: 'symbolDescription',
      label: 'Symbol Description',
      options: {
        display: false,
      },
    },
    {
      name: 'requestQty',
      label: 'Request Qty',
      options: {
        display: false,
      },
    },
    {
      name: 'requestCostBasis',
      label: 'Request Cost Basis',
      options: {
        display: false,
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

  const options = {
    serverSide: true,
    selectableRows: 'none',
  };

  const getCsvData = async () => {
    const data = await listAcatsMultiCycleMRO(searchData);
    return data.transactionList;
  };

  const handleSearch = async () => {
    try {
      setLoading(true);
      QueryParam.set(searchData);
      const data = await listAcatsMultiCycleMRO(searchData);
      setRows(data.transactionList);

      notifyInfo(data.transactionList.length + ' search results.');
    } catch (error) {
      notifyError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e, x) => {
    const input = e.currentTarget.name ? e.currentTarget : e.target;
    setSearchData({
      ...searchData,
      [input.name]: input.value,
    });
  };

  return (
    <div className={classes.root}>
      <Box component="div" mt={5}>
        {showFilter ? (
          <div>
            <div className={classes.grdRow}>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <TextField
                  fullWidth
                  name="fromDate"
                  label="From Date"
                  type="date"
                  value={searchData.fromDate}
                  onChange={handleChange}
                  inputProps={{ max: searchData.toDate }}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <TextField
                  fullWidth
                  name="toDate"
                  label="To Date"
                  type="date"
                  value={searchData.toDate}
                  onChange={handleChange}
                  inputProps={{ min: searchData.fromDate }}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div
                className={classes.grdCell1}
                style={{ marginRight: 30 }}
              ></div>
              <div
                className={classes.grdCell1}
                style={{ marginRight: 30 }}
              ></div>
            </div>
          </div>
        ) : null}
        <div className={classes.actionContainer}>
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
          title={'Transaction'}
          data={rows}
          columns={columns}
          options={options}
          onSearch={handleSearch}
          pagination={pagination}
          setPagination={setPagination}
          getCsvData={getCsvData}
        />
      </Box>
    </div>
  );
}
