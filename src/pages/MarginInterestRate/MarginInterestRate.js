/*ReactJS*/
import React from 'react';

/*Material UI Components*/
import { Typography, Breadcrumbs, Box } from '@material-ui/core';

/*Styles*/
import useStyles from '../../styles';

/*Table Components*/
import MarginInterestRateTable from './Components/MarginInterestRateTable';

export default function MarginInterestRate(props) {
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
            Margin Interest Rate
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Admin</span>
            <span color="inherit">Misc</span>
            <Typography color="primary">Margin Interest Rate</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <MarginInterestRateTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
