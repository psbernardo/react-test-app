/*ReactJS*/
import React from 'react';

/*Material UI Components*/
import { Typography, Breadcrumbs, Box } from '@material-ui/core';

/*Styles*/
import useStyles from '../../styles';

/*Table Components*/
import LocateLadderTable from './Components/LocateLadderTable';

export default function LocateLadder(props) {
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
            Locate Ladder
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Transaction</span>
            <span color="inherit">Position</span>
            <Typography color="primary">Locate Ladder</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <LocateLadderTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
