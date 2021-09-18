/*ReactJS*/
import React from 'react';

/*Material UI Components*/
import { Typography, Breadcrumbs, Box } from '@material-ui/core';

/*Styles*/
import useStyles from '../../styles';

/*Table Components*/
import NonMROTable from './Components/NonMroTable';

export default function NonMro(props) {
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
            Non MRO
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Transaction</span>
            <span color="inherit">Reports</span>
            <Typography color="primary">Non MRO</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <NonMROTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
