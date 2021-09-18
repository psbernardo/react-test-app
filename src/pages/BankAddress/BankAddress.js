/*ReactJS*/
import React from 'react';

/*Material UI Components*/
import { Typography, Breadcrumbs, Box } from '@material-ui/core';

/*Styles*/
import useStyles from '../../styles';

/*Table Components*/
import BankAddressTable from './Components/BankAddressTable';

export default function BankAddress(props) {
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
            Bank Address
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Admin</span>
            <span color="inherit">Bank</span>
            <Typography color="primary">Bank Address</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <BankAddressTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
