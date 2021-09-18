import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { listSurveillance } from '../../services/SurveillanceSetupService';

export default function SelectSurveillance(props) {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
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

  const handleOnBlur = async (value) => {
    if (props.freeSolo) {
      setPropsValue(value);
      return;
    }

    if (options.find((o) => o.surveillance === value)) {
      setPropsValue(value);
      return;
    }

    // if selected value does not exist in options and is not a free solo
    setInputValue('');
    setPropsValue('');
  };

  //set local input value and get options
  const handleInputChange = async (event, value) => {
    if (!event) return;
    if (event.type === 'blur') return;
    if (event.type === 'click' && value) return;

    setInputValue(value);
    getOptions(value);
  };

  //get list from backend
  const getOptions = async (props) => {
    const data = await listSurveillance(props.value);

    setOptions(data.setupList);
  };

  React.useEffect(
    () => {
      if (open) {
        getOptions(props);
      }
    },
    // eslint-disable-next-line
    [open]
  );

  return (
    <Autocomplete
      disabled={props.disabled}
      freeSolo={props.freeSolo}
      id={props.name}
      onInputChange={handleInputChange}
      onBlur={() => {
        handleOnBlur(inputValue);
      }}
      blurOnSelect={false}
      onChange={(_, v) => {
        const value = v ? v.surveillance : '';
        setPropsValue(value);
        setInputValue(value);
      }}
      getOptionSelected={(option, value) =>
        option.surveillance === value.surveillance
      }
      getOptionLabel={(option) => option.surveillance}
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
        />
      )}
    />
  );
}
