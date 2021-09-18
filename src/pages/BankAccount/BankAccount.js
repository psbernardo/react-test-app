/*ReactJS*/
import React from 'react';

/*Material UI Components*/
import { Typography, Breadcrumbs, Box } from '@material-ui/core';

/*Styles*/
import useStyles from '../../styles';

/*Table Component*/
import BankAccountTable from './Components/BankAccountTable';

export default function BankAccount(props) {
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
            Bank Account
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Admin</span>
            <span color="inherit">Bank</span>
            <Typography color="primary">Bank Account</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <BankAccountTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
