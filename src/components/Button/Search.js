/*ReactJS*/
import React from 'react';

/*Material UI Components*/
import { Button, CircularProgress } from '@material-ui/core';

import {
  Search as SearchIcon,
  FilterList as FilterListIcon,
} from '@material-ui/icons';

import useStyles from '../../styles';

export default function SearchButton(props) {
  const classes = useStyles();
  const [showFilter, setShowFilter] = React.useState(true);
  const [filterTextValue, setFilterTextValue] = React.useState('Hide');

  const toggle = () => {
    if (showFilter) {
      setShowFilter(false);
      setFilterTextValue('Show');
      return props.showfilter(false);
    } else {
      setShowFilter(true);
      setFilterTextValue('Hide');
      return props.showfilter(true);
    }
  };

  return (
    <div className={classes.grdRow} style={{ margin: 0 }}>
      <div className={classes.grdCellNone} style={{ marginRight: 10 }}>
        <Button
          className={classes.clearingButtonPrimary}
          variant="contained"
          color="primary"
          size="large"
          startIcon={
            props.loading ? (
              <CircularProgress
                style={{ color: '#ffffff', height: 20, width: 20 }}
              />
            ) : (
              <SearchIcon />
            )
          }
          onClick={props.onClick}
        >
          {props.loading ? 'Searching...' : 'Search'}
        </Button>
      </div>
      {!props.hideFilterButton ? (
        <div className={classes.grdCellNone}>
          <Button
            className={classes.clearingButtonPrimary}
            variant="contained"
            color="primary"
            size="large"
            startIcon={<FilterListIcon />}
            onClick={(e) => {
              toggle();
            }}
          >
            {filterTextValue} Search Fields
          </Button>
        </div>
      ) : null}
    </div>
  );
}
