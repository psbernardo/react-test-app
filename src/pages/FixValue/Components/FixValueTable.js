import React, { useState } from 'react';
import { Box, TextField } from '@material-ui/core';
import { useConfirm } from 'material-ui-confirm';
import Table from 'components/Table/Table';
import {
  notifyError,
  notifyInfo,
} from 'components/Notification/Notification';
import SearchButton from '../../../components/Button/Search';
import SelectSystemCode from 'components/Dropdown/SelectSystemCode';
import { listFixTagValue } from '../../../services/FixTagService';
import QueryParam from '../../../services/QueryParamService';
import useStyles from '../../../styles';

export default function FixValueTable() {
  const classes = useStyles();

  const options = {
    selectableRows: 'none',
  };

  const columns = [
    {
      name: 'report',
      label: 'Report',
    },
    {
      name: 'fixTag',
      label: 'Fix Tag',
    },
    {
      name: 'fieldName',
      label: 'Field Name',
    },
    {
      name: 'fieldValue',
      label: 'Field Value',
    },
    {
      name: 'ordinalPosition',
      label: 'Ordinal Position',
    },
    {
      name: 'a-selectAll',
      label: 'Select All',
      options: {
        display: true,
        setCellHeaderProps: () => ({
          style: {
            width: '0px',
            display: 'table-cell',
            padding: 0,
            pointerEvents: 'none',
            fontSize: 0,
          },
        }),
      },
    },
  ];

  const [loading, setLoading] = React.useState(false);
  const [showFilter, setShowFilter] = React.useState(true);
  const [rows, setRows] = useState([]);
  const [searchData, setSearchData] = React.useState(
    QueryParam.get({
      report: '',
      identityValue: '',
    })
  );

  const handleChange = (e, x) => {
    const input = e.currentTarget.name ? e.currentTarget : e.target;

    setSearchData({
      ...searchData,
      [input.name]: input.value,
    });
  };

  const handleSearch = async () => {
    try {
      setLoading(true);
      QueryParam.set(searchData);
      const data = await listFixTagValue(searchData);
      setRows(data.fixTagsList);
      notifyInfo(data.fixTagsList.length + ' search results.');
    } catch (error) {
      notifyError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={classes.root}>
      <Box component="div" mt={5}>
        {' '}
        {showFilter ? (
          <div>
            <div className={classes.grdRow}>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectSystemCode
                  name="report"
                  label="Report"
                  type="Fix Tag"
                  subType="tZERO"
                  value={searchData.report}
                  onChange={handleChange}
                ></SelectSystemCode>
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <TextField
                  fullWidth
                  name="identityValue"
                  label="Identity Value"
                  value={searchData.identityValue}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}></div>
              <div className={classes.grdCell1}></div>
            </div>
          </div>
        ) : null}
        <div className={classes.actionContainer}>
          <div className={classes.grdCellNone}>
            <SearchButton
              onClick={handleSearch}
              loading={loading}
              showfilter={(status) => setShowFilter(status)}
            />
          </div>
        </div>
      </Box>
      <Box component="div" mt={2}>
        <Table
          title={'FIX VALUE'}
          data={rows}
          columns={columns}
          options={options}
        />
      </Box>
    </div>
  );
}
