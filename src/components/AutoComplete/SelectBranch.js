import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { lazyBranch } from '../../services/CommonService';

export default function SelectBranch(props) {
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

    if (options.find((o) => o.branch === value)) {
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

    setInputValue(value.toUpperCase());
    getOptions(value);
  };

  const getOptions = async (value) => {
    const { branchesList } = await lazyBranch(value);
    setOptions(branchesList);
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
      onChange={(_, v) => {
        const value = v ? v.branch : '';
        setPropsValue(value);
        setInputValue(value);
      }}
      getOptionSelected={(option, value) => option.branch === value.branch}
      getOptionLabel={(option) => option.branch}
      inputValue={inputValue}
      options={options}
      name={props.name}
      autoHighlight={true}
      clearOnEscape={true}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          name={props.name}
          required={props.required}
          label={props.label}
          InputLabelProps={{ shrink: true }}
          inputProps={{ ...params.inputProps, maxLength: 50 }}
        />
      )}
    />
  );
}
