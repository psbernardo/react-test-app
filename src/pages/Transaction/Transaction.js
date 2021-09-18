import React from 'react';
import { Typography, Breadcrumbs, Box } from '@material-ui/core';

/*styles */

/*Components*/
import TransactionForm from './Components/TransactionForm.js';

import useStyles from './styles';

export default function Transaction(props) {
  const classes = useStyles();
  const actionType = props.location.pathname.split('/')[3];
  const trnsId = props.location.pathname.split('/')[4];
  const accountId = props.location.pathname.split('/')[5];
  const pageTitle =
    actionType === 'process-pending' ? 'Process Pending TRNS' : 'Enter TRNS';
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
            {' '}
            {pageTitle}{' '}
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Transaction</span>
            <span color="inherit">TRNS</span>
            <Typography color="primary">{pageTitle}</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <TransactionForm
            trnsid={trnsId}
            accountid={accountId}
            actionType={actionType}
          />
        </Box>
      </div>
    </React.Fragment>
  );
}
