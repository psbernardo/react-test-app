/*ReactJS*/
import React from 'react';

/*Material UI components*/
import { Typography, Breadcrumbs, Box } from '@material-ui/core';

/*Styles*/
import useStyles from '../../styles';

/*Table Component*/
import MonthlyStatementTable from './Components/MonthlyStatementTable';

export default function MonthlyStatement(props) {
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
            Monthly Statement
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Transaction</span>
            <span color="inherit">Reports</span>
            <Typography color="primary">Monthly Statement</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <MonthlyStatementTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
