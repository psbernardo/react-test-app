import React from 'react';
import { Typography, Breadcrumbs, Box } from '@material-ui/core';
import CommissionTable from './Components/CommissionTable';
import useStyles from '../../styles';

export default function PageTemplate(props) {
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
            Commission
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Main Menu</span>
            <span color="inherit">Misc</span>
            <Typography color="primary">Commission</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <CommissionTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
