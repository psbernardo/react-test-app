/*ReactJS*/
import React from 'react';

/*Material UI Components*/
import { Typography, Breadcrumbs, Box } from '@material-ui/core';

/*Styles*/
import useStyles from '../../styles';

/*Table Components*/
import EntitlementReconTable from './Components/EntitlementReconTable';

export default function EntitlementRecon(props) {
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
            Entitlement Reconciliation
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Security</span>
            <span color="inherit">Corp Action</span>
            <Typography color="primary">Entitlement Reconciliation</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <EntitlementReconTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
