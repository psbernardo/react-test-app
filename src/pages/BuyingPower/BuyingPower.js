import React from 'react';
import { Typography, Breadcrumbs, Box } from '@material-ui/core';
import useStyles from '../../styles';
import BuyingPowerTable from './Components/BuyingPowerTable';

export default function BuyingPower(props) {
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
            Buying Power
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Compliance</span>
            <span color="inherit">Risk Manager</span>
            <Typography color="primary">Buying Power</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <BuyingPowerTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
