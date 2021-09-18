import React from 'react';
import { Typography, Breadcrumbs, Box } from '@material-ui/core';

/*styles */
import useStyles from '../../styles';

/*components */
import PositionTable from './Components/PositionTable';

export default function Position(props) {
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
            Position
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Position</span>
            <span color="inherit">Position</span>
            <Typography color="primary">Position</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <PositionTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
