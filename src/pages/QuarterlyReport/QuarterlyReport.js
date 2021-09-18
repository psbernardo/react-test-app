import React, { useEffect } from 'react';
import {
  Typography,
  Breadcrumbs,
  Box,
} from '@material-ui/core';
import useStyles from '../../styles';
import QueryParam from '../../services/QueryParamService';
import FormCustodyTable from './Components/FormCustodyTable';
import NonRegularWaySDTable from './Components/NonRegularWaySDTable';
import SelectSystemCode from 'components/Dropdown/SelectSystemCode';

export default function MonthlyReport(props) {
  const classes = useStyles();

  const [gridType, setGridType] = React.useState('Form Custody');

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
              Quarterly Report
            </Typography>
            <Breadcrumbs aria-label="breadcrumb">
              <span color="inherit">Compliance</span>
              <span color="inherit">Regulatory Setup</span>
              <Typography color="primary">Quarterly Report</Typography>
            </Breadcrumbs>
          </div>
          <div className={classes.grdCell1}>
            <SelectSystemCode
              name="type"
              label="Regulatory Quarterly Report Type"
              type="Regulatory Quarterly Report Type"
              value={gridType}
              onChange={(e) => setGridType(e.target.value)}
            ></SelectSystemCode>
          </div>
        </div>
        <Box mt={2}>
          {gridType === 'Form Custody' ? (
            <FormCustodyTable params={props} segType={gridType} />
          ) : (
            <NonRegularWaySDTable params={props} segType={gridType} />
          )}
        </Box>
      </div>
    </React.Fragment>
  );
}
