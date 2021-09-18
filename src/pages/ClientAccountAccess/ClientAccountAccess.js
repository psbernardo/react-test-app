import React from 'react';
import { Typography, Breadcrumbs, Box } from '@material-ui/core';
import useStyles from '../../styles';
import ClientAccountAccessTable from './Components/ClientAccountAccessTable';

export default function ClientAccountAccess(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.pageContainer}>
        <Box>
          <Typography
            variant="h2"
            className={classes.textBold}
            align="left"
            gutterBottom={true}
          >
            Client Account Access
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Admin</span>
            <span color="inherit">Account Setup</span>
            <Typography color="primary">Client Account Access</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <ClientAccountAccessTable tableLvl={1} />
        </Box>
      </div>
    </React.Fragment>
  );
}
