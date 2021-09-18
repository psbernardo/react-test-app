/*ReactJS*/
import React from 'react';

/*Material UI components*/
import { Typography, Breadcrumbs, Box } from '@material-ui/core';

/*Styles*/
import useStyles from '../../styles';

/*Table Component*/
import ReserveCalcTable from './Components/ReserveCalcTable';
//import ReserveCalcDetailsTable from './Components/ReserveCalcDetailsTable';

export default function ReserveCalc() {
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
            Reserve Calculation
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Compliance</span>
            <span color="inherit">Calculation</span>
            <Typography color="primary">Reserve Calculation</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <ReserveCalcTable />
        </Box>
      </div>
    </React.Fragment>
  );
}
