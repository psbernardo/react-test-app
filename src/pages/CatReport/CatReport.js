import React from 'react';
import { Typography, Breadcrumbs, Box } from '@material-ui/core';
import useStyles from '../../styles';
import CatReportTable from './Components/CatReportTable';

export default function CatReport(props) {
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
            Process Status
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Compliance</span>
            <span color="inherit">CAT</span>
            <Typography color="primary">Process Status</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <CatReportTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
