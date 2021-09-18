import React, { useState } from 'react';
import { Box, Checkbox } from '@material-ui/core';
import {
  notifyError,
} from 'components/Notification/Notification';
import Table from 'components/Table/Table';
import { listApiIdentification } from '../../../services/ApiIdentificationService';
import useStyles from '../../../styles';

export default function ApiValueIdentificationTable({ value }) {
  const classes = useStyles();
  const [rows, setRows] = useState([]);

  const options = {
    selectableRows: 'none',
  };

  const columns = [
    {
      name: 'identificationId',
      label: 'Identification ID',
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
      name: 'identificationTypeLabel', 
      label: 'Identification Type Label',
    },
    {
      name: 'frontUrl', 
      label: 'Front URL',
    },
    {
      name: 'backUrl', 
      label: 'Back URL',
    },
    {
      name: 'isTwoSided', 
      label: 'Is Two Sided',
      options: {
        customBodyRenderLite: (dataIndex, a, c) => {
          return <Checkbox checked={rows[dataIndex].isTwoSided}/>;
        },
      },
    },
    {
      name: 'countryOfIssuance', 
      label: 'Country Of Issuance',
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
      const data = await listApiIdentification(value);
      setRows(data.apiIdentificationsList);
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
          title={'Identifications'}
          data={rows}
          columns={columns}
          options={options}
        />
      </Box>
    </div>
  );
}
