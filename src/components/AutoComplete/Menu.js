/*ReactJS*/
import React, { useEffect } from 'react';

/*Material UI Components*/
import { TextField, CircularProgress } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

/*List of entry types*/
import { menus } from '../SearchBar/MenuLinks';

export default function MenuSelect(props) {
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
        setOptions(Object.keys(menus).map((menu) => menus[menu]));
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

  const selectedMenu = menus
    .filter(function(v) {
      return v.label === props.value ? v : '';
    })
    .map(function(type) {
      return type;
    });

  return (
    <Autocomplete
      autoHighlight={true}
      clearOnEscape={true}
      id={props.id}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      getOptionSelected={(option, value) => option.id === value.id}
      getOptionLabel={(option) => option.label}
      options={options}
      loading={loading}
      onChange={props.setNewValue}
      defaultValue={selectedMenu[0]}
      renderInput={(params) => (
        <TextField
          {...params}
          labelid={props.labelid}
          label={props.label}
          value={props.value}
          onChange={props.onChange}
          InputLabelProps={{ shrink: true }}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
}
