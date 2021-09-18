import React from 'react';
import { Typography, Breadcrumbs, Box } from '@material-ui/core';

/*styles */
import useStyles from '../../styles';

/*components */
import ProfitAndLossTable from './Components/ProfitAndLossTable';

export default function ProfitAndLoss(props) {
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
            Profit and Loss
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Transaction</span>
            <span color="inherit">Report</span>
            <Typography color="primary">Profit and Loss</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <ProfitAndLossTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
