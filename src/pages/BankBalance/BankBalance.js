/*ReactJS*/
import React from 'react';

/*Material UI components*/
import { Typography, Breadcrumbs, Box } from '@material-ui/core';

/*Styles*/
import useStyles from '../../styles';

/*Table Component*/
import BankBalanceTable from './components/BankBalanceTable';

export default function BankBalance(props) {
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
            Bank Balance
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Balance</span>
            <span color="inherit">Bank</span>
            <Typography color="primary">Bank Balance</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <BankBalanceTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
