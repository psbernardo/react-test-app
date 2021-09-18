import React from 'react';
import { Typography, Breadcrumbs, Box } from '@material-ui/core';
import useStyles from '../../styles';
import Grid15c3Table from './Components/Reserve15c3Table';

export default function Reserve15c3(props) {
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
            15C3
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Compliance</span>
            <span color="inherit">Regulatory</span>
            <Typography color="primary">15C3</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <Grid15c3Table params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
