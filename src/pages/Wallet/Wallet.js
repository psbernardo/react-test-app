/*ReactJS*/
import React from 'react';

/*Material UI components*/
import { Typography, Breadcrumbs, Box } from '@material-ui/core';

/*Styles*/
import useStyles from '../../styles';

/*Table Component*/
import WalletTable from './components/WalletTable';

export default function Wallet(props) {
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
            Wallet
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Admin</span>
            <span color="inherit">Bank</span>
            <Typography color="primary">Wallet</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <WalletTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
