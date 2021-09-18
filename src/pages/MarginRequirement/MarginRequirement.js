/*ReactJS*/
import React from 'react';

/*Material UI Components*/
import { Typography, Breadcrumbs, Box } from '@material-ui/core';

/*Styles*/
import useStyles from '../../styles';

/*Table Components*/
import MarginRequirementTable from './Components/MarginRequirementTable';

export default function MarginRequirement(props) {
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
            Margin Requirement
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Compliance</span>
            <span color="inherit">Risk Manager</span>
            <Typography color="primary">Margin Requirement</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <MarginRequirementTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
