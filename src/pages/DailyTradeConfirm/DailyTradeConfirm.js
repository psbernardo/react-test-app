/*ReactJS*/
import React from 'react';

/*Material UI components*/
import { Typography, Breadcrumbs, Box } from '@material-ui/core';

/*Styles*/
import useStyles from '../../styles';

/*Table Component*/
import DailyTradeConfirmTable from './Components/DailyTradeConfirmTable';

export default function DailyTradeConfirm(props) {
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
            Daily Trade Confirm
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Transaction</span>
            <span color="inherit">Report</span>
            <Typography color="primary">Daily Trade Confirm</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <DailyTradeConfirmTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
