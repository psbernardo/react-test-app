/*ReactJS*/
import React from 'react';

/*Material UI components*/
import { Typography, Breadcrumbs, Box } from '@material-ui/core';

/*Styles*/
import useStyles from '../../styles';

/*Table Component*/
import MiniManipulationTable from './components/MiniManipulationTable';

export default function MiniManipulation(props) {
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
            Mini Manipulation
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Surveillance</span>
            <span color="inherit">Trade Monitoring</span>
            <Typography color="primary">Mini Manipulation</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <MiniManipulationTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
