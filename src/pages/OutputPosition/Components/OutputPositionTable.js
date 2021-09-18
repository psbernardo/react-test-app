import React, { useState, useEffect } from 'react';
import { Box, TextField } from '@material-ui/core';
import { notifyInfo, notifyError } from 'components/Notification/Notification';
import { listOutputPositionMRO } from '../../../services/AcatsOutputPositionService';
import SearchButton from '../../../components/Button/Search';
import QueryParam from '../../../services/QueryParamService';
import { getSystemDate } from '../../../services/ProfileService';
import Table, { columnType } from 'components/Table/Table';
import useStyles from '../../../styles';

export default function OutputPositionTable({ params }) {
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
      name: 'recordType',
      label: 'Record Type',
    },
    {
      name: 'subrecordType',
      label: 'Subrecord Type',
    },
    {
      name: 'distributionSide',
      label: 'Distribution Side',
    },
    {
      name: 'acatsControlNumber',
      label: 'ACATS Control Number',
    },
    {
      name: 'assetSequenceNumber',
      label: 'Asset Seequence Number',
    },
    {
      name: 'processingDate',
      label: 'Processing Date',
      type: columnType.date,
    },
    {
      name: 'distributionParticipant',
      label: 'Distribution Participant',
    },
    {
      name: 'status',
      label: 'Status',
    },
    {
      name: 'daysInStatus',
      label: 'Days In Status',
      options: {
        display: false,
      },
    },
    {
      name: 'registrationIndicator',
      label: 'Registration Indicator',
      options: {
        display: false,
      },
    },
    {
      name: 'settlementDate',
      label: 'Settlement Date',
      type: columnType.date,
    },
    {
      name: 'settlementTiming',
      label: 'Settlement Timing',
      options: {
        display: false,
      },
    },
    {
      name: 'valueFreeIndicator',
      label: 'Value/Free Indicator',
      options: {
        display: false,
      },
    },
    {
      name: 'debitCreditIndicator',
      label: 'Debit/Credit Indicator',
      options: {
        display: false,
      },
    },
    {
      name: 'tiAcatsControlNumber',
      label: 'TI ACATS Control Number',
      options: {
        display: false,
      },
    },
    {
      name: 'atAcatsControlNumber',
      label: 'AT ACATS Control Number',
      options: {
        display: false,
      },
    },
    {
      name: 'tiTransferType',
      label: 'TI Transfer Type',
      options: {
        display: false,
      },
    },
    {
      name: 'atTransferType',
      label: 'AT Transfer Type',
      options: {
        display: false,
      },
    },
    {
      name: 'tiOriginalReceiverNumber',
      label: 'TI Original Receiver Number',
      options: {
        display: false,
      },
    },
    {
      name: 'atOriginalReceiverNumber',
      label: 'AT Original Receiver Number',
      options: {
        display: false,
      },
    },
    {
      name: 'tiOriginalDelivererNumber',
      label: 'TI Original Deliverer Number',
      options: {
        display: false,
      },
    },
    {
      name: 'atOriginalDelivererNumber',
      label: 'AT Original Deliverer Number',
      options: {
        display: false,
      },
    },
    {
      name: 'originalReceiverCustomerAccountNumber',
      label: 'Original Receiver Customer Account Number',
      options: {
        display: false,
      },
    },
    {
      name: 'originalReceiverCustomerAccountName',
      label: 'Original Receiver Customer Account Name',
      options: {
        display: false,
      },
    },
    {
      name: 'originalReceiverTaxIdPrimary',
      label: 'Original Receiver Tax Id Primary',
      options: {
        display: false,
      },
    },
    {
      name: 'originalReceiverTaxIdSecondary',
      label: 'Original Receiver Tax Id Secondary',
      options: {
        display: false,
      },
    },
    {
      name: 'originalReceiverCustomerAccountType',
      label: 'Original Receiver Customer Account Type',
      options: {
        display: false,
      },
    },
    {
      name: 'giftDonationIndicator',
      label: 'Gift Donation Indicator',
      options: {
        display: false,
      },
    },
    {
      name: 'originalReceiverOccBrokerNumber',
      label: 'Original Receiver Occ Broker Number',
      options: {
        display: false,
      },
    },
    {
      name: 'originalReceiverCorrespondent',
      label: 'Original Receiver Correspondent',
      options: {
        display: false,
      },
    },
    {
      name: 'contraParticipantType',
      label: 'Contra Participant Type',
      options: {
        display: false,
      },
    },
    {
      name: 'originalDelivererCustomerAccountNumber',
      label: 'Original Deliverer Customer Account Number',
      options: {
        display: false,
      },
    },
    {
      name: 'transferTypeReject',
      label: 'Transfer Type Reject',
      options: {
        display: false,
      },
    },
    {
      name: 'associatedAcatsControlNumber',
      label: 'Associated Acats Control Number',
      options: {
        display: false,
      },
    },
    {
      name: 'associatedSettlementDate',
      label: 'Associated Settlement Date',
      type: columnType.date,
      options: {
        display: false,
      },
    },
    {
      name: 'tiTransactionReferenceId',
      label: 'TI Transaction Reference Id',
      options: {
        display: false,
      },
    },
    {
      name: 'atTransactionReferenceId',
      label: 'AT Transaction Reference Id',
      options: {
        display: false,
      },
    },
    {
      name: 'atAssetSequenceNumber',
      label: 'AT Asset Sequence Number',
      options: {
        display: false,
      },
    },
    {
      name: 'assetCategory',
      label: 'Asset Category',
      options: {
        display: false,
      },
    },
    {
      name: 'optionCategory',
      label: 'Option Category',
      options: {
        display: false,
      },
    },
    {
      name: 'settlingLocation',
      label: 'Settling Location',
      options: {
        display: false,
      },
    },
    {
      name: 'settlingLocationReason',
      label: 'Settling Location Reason',
      options: {
        display: false,
      },
    },
    {
      name: 'isinCountryCode',
      label: 'ISIN Country Code',
      options: {
        display: false,
      },
    },
    {
      name: 'isinSecurityIssueId',
      label: 'ISIN Security Issue Id',
      options: {
        display: false,
      },
    },
    {
      name: 'isinSecurityCheckDigit',
      label: 'ISIN Security Check Digit',
      options: {
        display: false,
      },
    },
    {
      name: 'dtcSubIssueType',
      label: 'DTC Sub Issue Type',
      options: {
        display: false,
      },
    },
    {
      name: 'foreignSecurityTradeDate',
      label: 'Foreign Security Trade Date',
      type: columnType.date,
      options: {
        display: false,
      },
    },
    {
      name: 'assetDescription1',
      label: 'assetDescription1',
      options: {
        display: false,
      },
    },
    {
      name: 'assetDescription2',
      label: 'assetDescription2',
      options: {
        display: false,
      },
    },
    {
      name: 'assetQuantityRequestIndicator',
      label: 'Asset Quantity Request Indicator',
      options: {
        display: false,
      },
    },
    {
      name: 'assetRequestTransactionCode',
      label: 'Asset Request Transaction Code',
      options: {
        display: false,
      },
    },
    {
      name: 'assetQuantity',
      label: 'Asset Quantity',
    },
    {
      name: 'assetPercent',
      label: 'Asset Percent',
    },
    {
      name: 'positionCode',
      label: 'Position Code',
      options: {
        display: false,
      },
    },
    {
      name: 'isoCurrencyCode',
      label: 'ISO Currency Code',
      options: {
        display: false,
      },
    },
    {
      name: 'assetAmount',
      label: 'Asset Amount',
      options: {
        display: false,
      },
    },
    {
      name: 'bearerBond',
      label: 'Bearer Bond',
      options: {
        display: false,
      },
    },
    {
      name: 'cashMarginShortCode',
      label: 'Cash Margin Short Code',
      options: {
        display: false,
      },
    },
    {
      name: 'whenIssuedIndicator',
      label: 'When Issued Indicator',
      options: {
        display: false,
      },
    },
    {
      name: 'transferTypeReason',
      label: 'Transfer Type Reason',
      options: {
        display: false,
      },
    },
    {
      name: 'mbsSerialNote',
      label: 'MBS Serial Note',
      options: {
        display: false,
      },
    },
    {
      name: 'assetComment1',
      label: 'Asset Comment1',
      options: {
        display: false,
      },
    },
    {
      name: 'assetComment2',
      label: 'Asset Comment2',
      options: {
        display: false,
      },
    },
    {
      name: 'comments1',
      label: 'Comments1',
      options: {
        display: false,
      },
    },
    {
      name: 'comments2',
      label: 'Comments2',
      options: {
        display: false,
      },
    },
  ];

  const options = {
    serverSide: true,
    selectableRows: 'none',
  };

  const getCsvData = async () => {
    const data = await listOutputPositionMRO(searchData);
    return data.outputPositionList;
  };

  const handleSearch = async () => {
    try {
      setLoading(true);
      QueryParam.set(searchData);
      const data = await listOutputPositionMRO(searchData);
      setRows(data.outputPositionList);

      notifyInfo(data.outputPositionList.length + ' search results.');
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
          title={'Output Position'}
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
