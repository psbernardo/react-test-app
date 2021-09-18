/*ReactJS*/
import React from 'react';

/*Material UI Components*/
import { Typography, Breadcrumbs, Box } from '@material-ui/core';

/*Style*/
import useStyles from '../../styles';

/*Table Component*/
import BankTransactionTable from './Components/BankTransactionTable';

export default function Activity(props) {
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
            Bank Transaction
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Transaction</span>
            <span color="inherit">TRNS</span>
            <Typography color="primary">Bank Transaction</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <BankTransactionTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
