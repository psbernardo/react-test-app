/*ReactJS*/
import React from 'react';

/*Material UI components*/
import { Typography, Breadcrumbs, Box } from '@material-ui/core';

/*Styles*/
import useStyles from '../../styles';

/*Table Component*/
import TrialBalanceTable from './Components/TrialBalanceTable';

export default function TrialBalance(props) {
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
            Trial Balance
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Balance</span>
            <span color="inherit">Cash</span>
            <Typography color="primary">Trial Balance</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <TrialBalanceTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
