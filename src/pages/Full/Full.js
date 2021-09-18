/*ReactJS*/
import React from 'react';

/*Material UI Components*/
import { Typography, Breadcrumbs, Box } from '@material-ui/core';

/*Styles*/
import useStyles from '../../styles';

/*Table Components*/
import FullTable from './Components/FullTable';

export default function Full(props) {
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
            Incoming Full
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Position</span>
            <span color="inherit">ACATS</span>
            <Typography color="primary">Incoming Full</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <FullTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
