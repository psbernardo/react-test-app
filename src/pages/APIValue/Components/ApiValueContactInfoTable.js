import React, { useState } from 'react';
import { Box } from '@material-ui/core';

import {
  notifyError,
} from 'components/Notification/Notification';
import { useConfirm } from 'material-ui-confirm';
import Table from 'components/Table/Table';
import { listApiContactInfo } from '../../../services/ApiContactInfoService';
import useStyles from '../../../styles';

export default function ApiValueContactInfoTable({ value }) {
  const classes = useStyles();
  const [rows, setRows] = useState([]);

  const options = {
    selectableRows: 'none',
  };

  const columns = [
    {
      name: 'id',
      label: 'ID',
    },
    {
      name: 'ownerId', 
      label: 'Owner ID',
    },
    {
      name: 'brokerId', 
      label: 'Broker ID',
    },
    {
      name: 'countryCode', 
      label: 'Country Code',
    },
    {
      name: 'nationalRoutingNumber', 
      label: 'National Routing Number',
    },
    {
      name: 'subscriberNumber', 
      label: 'Subscriber Number',
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

  const handleSearch = async (noNotif) => {
    try {
      const data = await listApiContactInfo(value);
      setRows(data.apiContactInfosList);
    } catch (error) {
      notifyError(error.message);
    }
  };

  React.useEffect(
    () => {
      handleSearch();
    },
    // eslint-disable-next-line
    []
  );

  return (
    <div className={classes.root}>
      <Box component="div" mt={2}>
        <Table
          title={'Contact Infos'}
          data={rows}
          columns={columns}
          options={options}
        />
      </Box>
    </div>
  );
}
