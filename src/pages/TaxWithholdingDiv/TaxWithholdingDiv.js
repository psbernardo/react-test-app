/*ReactJS*/
import React from 'react';

/*Material UI Components*/
import { Typography, Breadcrumbs, Box } from '@material-ui/core';

/*Styles*/
import useStyles from '../../styles';

/*Table Components*/
import TaxWithholdingDivTable from './Components/TaxWithholdingDivTable';

export default function TaxWithholdingDiv(props) {
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
            Dividend
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Balance</span>
            <span color="inherit">Withholding</span>
            <Typography color="primary">Dividend</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <TaxWithholdingDivTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
