/*ReactJS*/
import React from 'react';

/*Material UI Components*/
import { Typography, Breadcrumbs, Box } from '@material-ui/core';

/*Styles*/
import useStyles from '../../styles';

/*Table Components*/
import StockBorrowChargeTable from './Components/StockBorrowChargeTable';

export default function StockBorrowCharge(props) {
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
            Charge
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Position</span>
            <span color="inherit">Stock Borrow</span>
            <Typography color="primary">Charge</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <StockBorrowChargeTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
