import React from 'react';
import { Typography, Breadcrumbs, Box } from '@material-ui/core';
import useStyles from '../../styles';
import SettlementShortPositionTable from './Components/SettlementShortPositionTable';

export default function SettlementShortPosition(props) {
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
            Settlement Short Position
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Position</span>
            <span color="inherit">CNS</span>
            <Typography color="primary">Settlement Short Position</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <SettlementShortPositionTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
