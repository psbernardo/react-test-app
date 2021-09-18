import React from 'react';
import { Typography, Breadcrumbs, Box } from '@material-ui/core';

/*styles */
import useStyles from '../../styles';

/*components */
import ClientAccountTable from './Components/ClientAccountTable';

export default function ClientAccount(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.pageContainer}>
        <div>
          <Typography
            variant="h2"
            className={classes.textBold}
            align="left"
            gutterBottom={true}
          >
            Client Account
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Admin</span>
            <span color="inherit">Account Setup</span>
            <Typography color="primary">Client Account</Typography>
          </Breadcrumbs>
        </div>
        <Box mt={2}>
          <ClientAccountTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
