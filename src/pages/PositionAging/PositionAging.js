import React from 'react';
import { Typography, Breadcrumbs, Box } from '@material-ui/core';
import useStyles from '../../styles';
import PositionAgingTable from './Components/PositionAgingTable';

export default function PositionAging(props) {
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
            Position Aging
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Position</span>
            <span color="inherit">CNS</span>
            <Typography color="primary">Position Aging</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <PositionAgingTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
