/*ReactJS*/
import React from 'react';

/*Material UI Components*/
import { Typography, Breadcrumbs, Box } from '@material-ui/core';

/*Styles */
import useStyles from '../../styles';

/*Table Components */
import FeeManagementTable from './Components/FeeManagementTable';

export default function FeeManagement(props) {
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
            Fee Management
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Transaction</span>
            <span color="inherit">TRNS</span>
            <Typography color="primary">Fee Management</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <FeeManagementTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
