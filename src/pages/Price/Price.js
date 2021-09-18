/*ReactJS*/
import React from 'react';

/*Material UI components*/
import { Typography, Breadcrumbs, Box } from '@material-ui/core';

/*Styles*/
import useStyles from '../../styles';

/*Table Component*/
import PriceTable from './components/PriceTable';

export default function Price(props) {
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
            Price
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Security</span>
            <span color="inherit">Security Details</span>
            <Typography color="primary">Price</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <PriceTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
