import React from 'react';
import { Typography, Breadcrumbs, Box } from '@material-ui/core';
import useStyles from '../../styles';
import TradeSummaryTable from './Components/TradeSummaryTable';

export default function TradeSummary(props) {
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
            Trade Summary
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Position</span>
            <span color="inherit">CNS</span>
            <Typography color="primary">Trade Summary</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <TradeSummaryTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
