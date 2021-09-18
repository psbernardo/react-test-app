import React from 'react';
import { Typography, Breadcrumbs, Box } from '@material-ui/core';
import FinraShortPositionTable from './Components/FinraShortPositionTable';
import useStyles from '../../styles';

export default function FinraShortPosition(props) {
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
            FINRA Short Position
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Position</span>
            <span color="inherit">Position</span>
            <Typography color="primary">FINRA Short Position</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <FinraShortPositionTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
