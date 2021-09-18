/*ReactJS*/
import React from 'react';

/*Material UI Components*/
import { Typography, Breadcrumbs, Box } from '@material-ui/core';

/*Styles*/
import useStyles from '../../styles';

/*Table Components*/
import PriorityTable from './Components/PriorityTable';

export default function SegregationPriority(props) {
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
            Priority
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Compliance</span>
            <span color="inherit">Segregation</span>
            <Typography color="primary">Priority</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <PriorityTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
