/*ReactJS*/
import React from 'react';

/*Material UI Components*/
import { Typography, Breadcrumbs, Box } from '@material-ui/core';

/*Styles*/
import useStyles from '../../styles';

/*Table Components*/
import EntitlementTable from './Components/EntitlementTable';

export default function MarginRate(props) {
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
            Entitlement
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Position</span>
            <span color="inherit">Corp Action</span>
            <Typography color="primary">Entitlement</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <EntitlementTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
