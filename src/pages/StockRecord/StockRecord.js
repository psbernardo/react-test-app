/*ReactJS*/
import React from 'react';

/*Material UI Components*/
import { Typography, Breadcrumbs, Box } from '@material-ui/core';

/*Styles*/
import useStyles from '../../styles';

/*Table Components*/
import StockRecordTable from './Components/StockRecordTable';

export default function StockRecord(props) {
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
            Stock Record
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Position</span>
            <span color="inherit">Position</span>
            <Typography color="primary">Stock Record</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <StockRecordTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
