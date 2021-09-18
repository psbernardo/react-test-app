/*ReactJS*/
import React, { useEffect } from 'react';

/*Material UI Components*/
import { TextField, CircularProgress } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

/*List of entry types*/
import { vendors } from './AutoCompleteData';

export default function VendorSelect(props) {
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
        setOptions(Object.keys(vendors).map((vendor) => vendors[vendor]));
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

  const selectedVendor = vendors
    .filter(function(v) {
      return v.code === props.value ? v : '';
    })
    .map(function(type) {
      return type;
    });

  return (
    <Autocomplete
      disabled={props.disabled}
      autoHighlight={true}
      autoComplete={true}
      autoSelect={true}
      clearOnEscape={true}
      id={props.id}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      getOptionSelected={(option, value) => option.code === value.code}
      getOptionLabel={(option) => option.codeDescription}
      options={options}
      loading={loading}
      onChange={props.setNewValue}
      defaultValue={selectedVendor[0]}
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
