/*ReactJS*/
import React from 'react';

/*Material UI Components*/
import { Typography, Breadcrumbs, Box } from '@material-ui/core';

/*Styles*/
import useStyles from '../../styles';

/*Table Components*/
import TaxRateTable from './Components/TaxRateTable';

export default function TaxRate(props) {
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
            Tax Rate
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Admin</span>
            <span color="inherit">Misc</span>
            <Typography color="primary">Tax Rate</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <TaxRateTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
