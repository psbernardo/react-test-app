import React, { useEffect } from 'react';
import {
  Typography,
  Breadcrumbs,
  Box,
} from '@material-ui/core';
import useStyles from '../../styles';
import CustomerBalanceTable from './Components/CustomerBalanceTable';
import FocusTable from './Components/FocusTable';
import SelectSystemCode from 'components/Dropdown/SelectSystemCode';
import QueryParam from '../../services/QueryParamService';

export default function MonthlyReport(props) {
  const classes = useStyles();

  const [gridType, setGridType] = React.useState('Focus');

  useEffect(() => {
    const segType = QueryParam.getUrlParameter('gridType');

    if (segType) {
      setGridType(segType);
    }
  }, []);

  return (
    <React.Fragment>
      <div className={classes.pageContainer}>
        <div className={classes.grdRow} style={{alignItems: 'flex-end'}}>
          <div className={classes.grdCellNone} style={{ marginRight: 30 }}>
            <Typography
              variant="h2"
              className={classes.textBold}
              align="left"
              gutterBottom={true}
            >
              Monthly Report
            </Typography>
            <Breadcrumbs aria-label="breadcrumb">
              <span color="inherit">Compliance</span>
              <span color="inherit">Regulatory</span>
              <Typography color="primary">Monthly Report</Typography>
            </Breadcrumbs>
          </div>
          <div className={classes.grdCell1}>
            <SelectSystemCode
              name="type"
              label="Regulatory Monthy Report Type"
              type="Regulatory Monthy Report Type"
              value={gridType}
              onChange={(e) => setGridType(e.target.value)}
            ></SelectSystemCode>
          </div>
        </div>
        <Box mt={2}>
          {gridType === 'Focus' ? (
            <FocusTable params={props} segType={gridType} />
          ) : (
            <CustomerBalanceTable params={props} segType={gridType} />
          )}
        </Box>
      </div>
    </React.Fragment>
  );
}
