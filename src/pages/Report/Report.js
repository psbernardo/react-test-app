import React from 'react';
import { Typography, Breadcrumbs, Box } from '@material-ui/core';
import useStyles from '../../styles';
import ReportTable from './Components/ReportTable';

export default function Report(props) {
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
            <span color="inherit">Compliance</span>
            <span color="inherit">OATS</span>
            <Typography color="primary">Report</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <ReportTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
