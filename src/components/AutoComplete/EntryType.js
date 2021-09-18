/*ReactJS*/
import React, { useEffect } from 'react';

/*Material UI Components*/
import { TextField, CircularProgress } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

/*List of entry types*/
import { entryTypes } from './AutoCompleteData';

export default function EntryTypeSelect(props) {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;
  const [inputValue, setInputValue] = React.useState(props.value);

  const setPropsValue = (value) => {
    props.onChange({
      currentTarget: {
        name: props.name,
        value: value,
      },
      target: {
        name: props.name,
        value: value,
      },
    });
  };

  //set local input value and get options
  const handleInputChange = async (event, value) => {
    if (!event) return;
    if (event.type === 'blur') return;
    if (event.type === 'click' && value) return;

    setInputValue(value);
    setPropsValue(value);
    // getOptions(value);
  };

  //get list from backend
  // const getOptions = async (value) => {
  //   const list = await lazyEntryType(entryTypes);
  //   setOptions(list.filter((et) => et.code));
  // };

  useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      if (active) {
        setOptions(Object.keys(entryTypes).map((type) => entryTypes[type]));
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

  return (
    <Autocomplete
      disabled={props.disabled}
      freeSolo={props.freeSolo}
      id={props.name}
      onInputChange={handleInputChange}
      onChange={(_, v) => {
        const value = v ? v.code : '';
        setPropsValue(value);
        setInputValue(value);
      }}
      getOptionSelected={(option, value) => option.code === value.code}
      getOptionLabel={(option) => option.code}
      inputValue={inputValue}
      options={options}
      name={props.name}
      autoHighlight={true}
      clearOnEscape={true}
      onClose={() => {
        setOpen(false);
      }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          name={props.name}
          required={props.required}
          disabled={props.disabled}
          label={props.label}
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
