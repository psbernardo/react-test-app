/*ReactJS*/
import React from 'react';

/*Material UI Components*/
import { Typography, Breadcrumbs, Box } from '@material-ui/core';

/*Styles*/
import useStyles from '../../styles';

/*Table Components*/
import SecurityMarginRateTable from './Components/SecurityMarginRateTable';

export default function SecurityMarginRate(props) {
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
            Security Margin Rate
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Admin</span>
            <span color="inherit">Security Details</span>
            <Typography color="primary">Security Margin Rate</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <SecurityMarginRateTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
