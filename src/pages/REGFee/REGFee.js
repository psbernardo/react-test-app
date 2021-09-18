/*ReactJS*/
import React from 'react';

/*Material UI components*/
import { Typography, Breadcrumbs, Box } from '@material-ui/core';

/*Styles*/
import useStyles from '../../styles';

/*Table Component*/
import REGFeeTable from './components/REGFeeTable';

export default function REGFee(props) {
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
            Reg Fee
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Balance</span>
            <span color="inherit">Fee</span>
            <Typography color="primary">Reg Fee</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <REGFeeTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
