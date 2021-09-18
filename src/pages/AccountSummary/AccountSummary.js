/*ReactJS*/
import React from 'react';

/*Material UI Components*/
import { Typography, Breadcrumbs, Box } from '@material-ui/core';

/*Styles */
import useStyles from '../../styles';
/*Table Components */
import AccountSummaryTable from './Components/AccountSummaryTable';

export default function AccountSummary(props) {
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
            Account Summary
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Position</span>
            <span color="inherit">CNS</span>
            <Typography color="primary">Account Summary</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <AccountSummaryTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
