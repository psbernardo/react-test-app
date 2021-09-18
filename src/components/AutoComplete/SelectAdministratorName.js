import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { lazyAdministratorName } from '../../services/CommonService';

export default function SelectAdministratorName(props) {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const [inputValue, setInputValue] = React.useState(props.value);

  const setPropsValue = (value) => {
    props.onChange({
      currentTarget: {
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

    if (options.find((o) => o === value)) {
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

  const getOptions = async (value) => {
    const { administratorNamesList } = await lazyAdministratorName(value);
    setOptions(administratorNamesList);
  };

  React.useEffect(
    () => {
      if (open) {
        getOptions(props.value);
      }
    },
    // eslint-disable-next-line
    [open]
  );

  return (
    <Autocomplete
      freeSolo={props.freeSolo}
      id={props.name}
      onInputChange={handleInputChange}
      onBlur={() => {
        handleOnBlur(inputValue);
      }}
      blurOnSelect={false}
      onChange={(_, value) => {
        setInputValue(value ? value : '');
        setPropsValue(value ? value : '');
      }}
      getOptionSelected={(option, value) => option === value}
      getOptionLabel={(option) => option}
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
          label={props.label}
          InputLabelProps={{ shrink: true }}
          inputProps={{ ...params.inputProps, maxLength: 300 }}
        />
      )}
    />
  );
}
