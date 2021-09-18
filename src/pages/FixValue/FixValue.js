/*ReactJS*/
import React from 'react';

/*Material UI Components*/
import { Typography, Breadcrumbs, Box } from '@material-ui/core';

/*Styles*/
import useStyles from '../../styles';

/*Table Components*/
import FixValueTable from './Components/FixValueTable';

export default function FixValue(props) {
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
            Fix Value
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Admin</span>
            <span color="inherit">Integration</span>
            <Typography color="primary">Fix Value</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <FixValueTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
