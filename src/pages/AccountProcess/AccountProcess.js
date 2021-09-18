/*ReactJS*/
import React from 'react';

/*Material UI Components*/
import { Typography, Breadcrumbs, Box } from '@material-ui/core';

/*Styles */
import useStyles from '../../styles';
/*Table Components */
import AccountProcessTable from './Components/AccountProcessTable';

export default function AccountProcess(props) {
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
            Account Process
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
          <span color="inherit">Admin</span>
            <span color="inherit">Account Setup</span>
            <Typography color="primary">Account Process</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <AccountProcessTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
