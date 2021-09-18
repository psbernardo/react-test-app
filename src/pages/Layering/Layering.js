import React from 'react';
import { Typography, Breadcrumbs, Box } from '@material-ui/core';
import LayeringTable from './Components/LayeringTable';
import useStyles from '../../styles';

export default function Layering(props) {
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
            Layering
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Surveillance</span>
            <span color="inherit">Trade Monitoring</span>
            <Typography color="primary">Layering</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <LayeringTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
