import React, { useState, useEffect } from 'react';
import { listRequirementDetail } from '../../services/MarginRequirementService';
import useStyles from '../../styles';
import { Box } from '@material-ui/core';
import { CheckCircle as CheckCircleIcon } from '@material-ui/icons';
import Table, { columnType } from 'components/Table/Table';
import { notifyError } from 'components/Notification/Notification';

export default function MarginRequirementDetails(props) {
  const classes = useStyles();

  const [rows, setRows] = useState([]);

  useEffect(() => {
    async function init() {
      try {
        const data = await listRequirementDetail(props.match.params);
        setRows(data.requirementDetailsList);
      } catch (error) {
        notifyError(error.message);
      }
    }
    init();
  }, [props.match.param]);

  const options = {
    selectableRows: 'none',
    tableBodyHeight: '100%',
  };

  const columns = [
    {
      name: 'symbol',
      label: 'Symbol',
    },
    {
      name: 'cusip',
      label: 'Cusip',
    },
    {
      name: 'assetType',
      label: 'Asset Type',
    },
    {
      name: 'tradeDate',
      label: 'Trade Date',
      type: columnType.date,
    },
    {
      name: 'masterAccountNo',
      label: 'Master Account No',
    },
    {
      name: 'accountName',
      label: 'Account Name',
    },
    {
      name: 'originalCusip',
      label: 'Original Cusip',
      options: {
        display: false,
      },
    },
    {
      name: 'isMarginable',
      label: 'Marginable',
      options: {
        display: false,
        customBodyRenderLite: (dataIndex) => {
          return rows[dataIndex].isMarginable ? <CheckCircleIcon /> : null;
        },
      },
    },
    {
      name: 'leveragedFactor',
      label: 'Leveraged Factor',
      type: columnType.quantity,
    },
    {
      name: 'closingPrice',
      label: 'Closing Price',
      type: columnType.amount,
    },
    {
      name: 'longQty',
      label: 'Long Qty',
      type: columnType.quantity,
      addFooter: true,
    },
    {
      name: 'shortQty',
      label: 'Short Qty',
      type: columnType.quantity,
      addFooter: true,
    },
    {
      name: 'previousQty',
      label: 'Previous Qty',
      type: columnType.quantity,
      addFooter: true,
    },
    {
      name: 'longMarketValue',
      label: 'Long Market Value',
      type: columnType.amount,
      addFooter: true,
    },
    {
      name: 'shortMarketValue',
      label: 'Short Market Value',
      type: columnType.amount,
      addFooter: true,
    },
    {
      name: 'marketValue',
      label: 'Market Value',
      type: columnType.amount,
      addFooter: true,
    },
    {
      name: 'previousMarketValue',
      label: 'Previous Market Value',
      type: columnType.amount,
      addFooter: true,
    },
    {
      name: 'exchangeReq',
      label: 'Exchange Req',
      type: columnType.amount,
      addFooter: true,
    },
    {
      name: 'exchangeRate',
      label: 'Exchange Rate',
      type: columnType.percentage,
    },
    {
      name: 'houseReq',
      label: 'House Req',
      type: columnType.amount,
      addFooter: true,
    },
    {
      name: 'houseRate',
      label: 'House Rate',
      type: columnType.percentage,
    },
    {
      name: 'fedReq',
      label: 'Fed Req',
      type: columnType.amount,
      addFooter: true,
    },
    {
      name: 'fedRate',
      label: 'Fed Rate',
      type: columnType.percentage,
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

  return (
    <React.Fragment>
      <div className={classes.pageContainer}>
        <Box component="div">
          <Table
            title={'Margin Requirement Details'}
            data={rows}
            columns={columns}
            options={options}
          />
        </Box>
      </div>
    </React.Fragment>
  );
}
