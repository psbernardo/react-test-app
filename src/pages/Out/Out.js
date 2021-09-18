/*ReactJS*/
import React from 'react';

/*Material UI Components*/
import { Typography, Breadcrumbs, Box } from '@material-ui/core';

/*Styles*/
import useStyles from '../../styles';

/*Table Components*/
import OutTable from './Components/OutTable';

export default function Out(props) {
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
            Outgoing Position
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Position</span>
            <span color="inherit">ACATS</span>
            <Typography color="primary">Outgoing Position</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <OutTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
