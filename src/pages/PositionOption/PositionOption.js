/*ReactJS*/
import React from 'react';

/*Material UI Components*/
import { Typography, Breadcrumbs, Box } from '@material-ui/core';

/*Styles*/
import useStyles from '../../styles';

/*Table Components*/
import PositionOptionTable from './Components/PositionOptionTable';

export default function PositionOption(props) {
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
            Option
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Position</span>
            <span color="inherit">Position</span>
            <Typography color="primary">Option</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <PositionOptionTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
