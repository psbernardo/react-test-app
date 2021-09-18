/*ReactJS*/
import React from 'react';

/*Material UI Components*/
import { Typography, Breadcrumbs, Box } from '@material-ui/core';

/*Styles*/
import useStyles from '../../styles';

/*Table Components*/
import MarginInterestCalcTable from './Components/MarginInterestCalcTable';

export default function MarginInterestCalc(props) {
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
            Margin Interest Calc
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Balance</span>
            <span color="inherit">Fee</span>
            <Typography color="primary">Margin Interest Calc</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <MarginInterestCalcTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
