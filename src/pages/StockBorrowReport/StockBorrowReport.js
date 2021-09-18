/*ReactJS*/
import React from 'react';

/*Material UI Components*/
import { Typography, Breadcrumbs, Box } from '@material-ui/core';

/*Styles*/
import useStyles from '../../styles';

/*Table Components*/
import StockBorrowReportTable from './Components/StockBorrowReportTable';

export default function StockBorrowReport(props) {
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
            Report
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Position</span>
            <span color="inherit">Stock Borrow</span>
            <Typography color="primary">Report</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <StockBorrowReportTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
