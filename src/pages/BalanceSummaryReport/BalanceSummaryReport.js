/*ReactJS*/
import React from 'react';

/*Material UI Components*/
import { Typography, Breadcrumbs, Box } from '@material-ui/core';

/*Styles*/
import useStyles from '../../styles';

/*Table Components*/
import BalanceSummaryReportTable from './Components/BalanceSummaryReportTable';

export default function BalanceSummaryReport(props) {
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
            Balance Summary
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Balance</span>
            <span color="inherit">Cash</span>
            <Typography color="primary">Balance Summary</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <BalanceSummaryReportTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
