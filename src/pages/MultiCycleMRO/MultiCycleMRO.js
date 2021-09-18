import React from 'react';
import { Typography, Breadcrumbs, Box } from '@material-ui/core';

/*styles */
import useStyles from '../../styles';

/*components */
import MultiCycleMroTable from './Components/MultiCycleMROTable';

export default function MultiCycleMRO(props) {
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
            Transaction
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Position</span>
            <span color="inherit">ACATS</span>
            <Typography color="primary">Transaction</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <MultiCycleMroTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
