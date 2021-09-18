/*ReactJS*/
import React from 'react';

/*Material UI Components*/
import { Typography, Breadcrumbs, Box } from '@material-ui/core';

/*Styles*/
import useStyles from '../../styles';

/*Table Components*/
import StockBorrowTable from './Components/StockBorrowTable';

export default function StockBorrow(props) {
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
            Stock Borrow
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Transaction</span>
            <span color="inherit">Position</span>
            <Typography color="primary">Stock Borrow</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <StockBorrowTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
