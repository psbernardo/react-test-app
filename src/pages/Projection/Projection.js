import React from 'react';
import { Typography, Breadcrumbs, Box } from '@material-ui/core';
import useStyles from '../../styles';
import ProjectionTable from './Components/ProjectionTable';

export default function Projection(props) {
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
            Projection
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Position</span>
            <span color="inherit">CNS</span>
            <Typography color="primary">Projection</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <ProjectionTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
