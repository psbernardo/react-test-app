/*ReactJS*/
import React from 'react';

/*Material UI Components*/
import { Typography, Breadcrumbs, Box } from '@material-ui/core';

/*Styles*/
import useStyles from '../../styles';

/*Table Components*/
import GLReportTable from './Components/GLReportTable';

export default function GLReport(props) {
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
            GL Report
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Balance</span>
            <span color="inherit">Cash</span>
            <Typography color="primary">GL Report</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <GLReportTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
