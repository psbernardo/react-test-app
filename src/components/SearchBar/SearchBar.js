/*ReactJS*/
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

/*Material UI Components*/
import { TextField, IconButton, InputAdornment } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';

/*List of entry types*/
import { menus } from './MenuLinks';

const useStyles = makeStyles((theme) => ({
  customHoverFocus: {
    '&:hover, &.Mui-focusVisible': { backgroundColor: 'rgba(0,0,0,0)' },
    color: '#f7f9ff',
  },
  input: {
    color: '#f7f9ff',
  },
}));

export default function NavigationMenuSelect(props) {
  const classes = useStyles();
  const history = useHistory();
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;

  useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      if (active) {
        setOptions(Object.keys(menus).map((name) => menus[name]));
      }
    })();

    return () => {
      active = false;
    };
  }, [loading, options]);

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  var trigger = 0;
  const onKeyDownHandler = (e) => {
    if (e.keyCode === 13) {
      if (trigger === 0) {
        trigger++;
        e.preventDefault();
        return;
      } else if (trigger === 1) {
        e.preventDefault();
        navigatePage();
        return;
      }
      return;
    }
    return;
  };

  const navigatePage = () => {
    const currentPath = window.location.pathname;
    history.push(props.value ? props.value : currentPath);
  };

  return (
    <Autocomplete
      autoHighlight={true}
      clearOnEscape={true}
      onKeyDown={onKeyDownHandler}
      onSubmit={navigatePage}
      style={{
        backgroundColor: 'rgba(57, 55, 64, 0.8)',
        padding: '5px 13px 5px 0px',
        borderRadius: 25,
      }}
      id={props.id}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      getOptionSelected={(option, value) => option.label === value.label}
      getOptionLabel={(option) => option.label || ''}
      options={options}
      groupBy={(option) => option.groupLabel}
      loading={loading}
      onChange={props.setNewValue}
      renderInput={(params) => (
        <TextField
          {...params}
          style={{ padding: 0 }}
          labelid={props.labelid}
          value={props.value}
          onChange={props.onChange}
          InputLabelProps={{ shrink: true }}
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <InputAdornment position="start" style={{ marginRight: 0 }}>
                <IconButton
                  aria-label="search"
                  className={classes.customHoverFocus}
                  onClick={navigatePage}
                >
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
            disableUnderline: true,
            className: classes.input,
          }}
        />
      )}
    />
  );
}
