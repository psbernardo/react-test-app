/*ReactJS*/
import React, { useEffect } from 'react';

/*Material UI Components*/
import { TextField, CircularProgress } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

/*List of Call Status Reason*/
import { callStatusReasons } from './AutoCompleteData';

export default function CallStatusReasonSelect(props) {
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
        setOptions(
          Object.keys(callStatusReasons).map(
            (callStatusReason) => callStatusReasons[callStatusReason]
          )
        );
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

  const selectedCallStatusReason = callStatusReasons
    .filter(function(v) {
      return v.code === props.value ? v : '';
    })
    .map(function(callStatusReason) {
      return callStatusReason;
    });

  return (
    <Autocomplete
      freeSolo={true}
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
      getOptionSelected={(option, value) => option.code === value.code}
      getOptionLabel={(option) => option.codeDescription}
      options={options}
      loading={loading}
      onChange={props.setNewValue}
      onInputChange={props.setNewValue}
      defaultValue={selectedCallStatusReason[0]}
      renderInput={(params) => (
        <TextField
          {...params}
          required
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
