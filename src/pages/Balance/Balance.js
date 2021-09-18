/*ReactJS*/
import React from 'react';

/*Material UI components*/
import { Typography, Breadcrumbs, Box } from '@material-ui/core';

/*Styles*/
import useStyles from '../../styles';

/*Table Component*/
import BalanceTable from './components/BalanceTable';

export default function Balance(props) {
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
            Balance
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Balance</span>
            <span color="inherit">Cash</span>
            <Typography color="primary">Balance</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <BalanceTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
