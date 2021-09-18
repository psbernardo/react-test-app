/*ReactJS*/
import React from 'react';

/*Material UI Components*/
import { Typography, Breadcrumbs, Box } from '@material-ui/core';

/*Styles*/
import useStyles from '../../styles';

/*Table Components*/
import SetupTable from './Components/SetupTable';

export default function Setup(props) {
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
            Surveillance Setup
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Surveillance</span>
            <span color="inherit">Surveillance</span>
            <Typography color="primary">Setup</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <SetupTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
