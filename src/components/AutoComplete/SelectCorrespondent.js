import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { lazyCorrespondent } from '../../services/CommonService';

export default function SelectCorrespondent(props) {
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

    if (options.find((o) => o === value)) {
      setPropsValue(value);
      return;
    }

    // if selected value does not exist in options and is not a free solo
    setInputValue('');
    setPropsValue('');
  };

  const handleInputChange = async (event, value) => {
    if (!event) return;
    if (event.type === 'blur') return;
    if (event.type === 'click' && value) return;

    setInputValue(value.toUpperCase());
    getOptions(value);
  };

  const getOptions = async (value) => {
    const data = await lazyCorrespondent();
    setOptions(
      data.correspondentsList.filter((correspondent) => correspondent)
    );
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
      disabled={props.disabled}
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
      inputValue={inputValue ? inputValue : props.value}
      options={options}
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
          error={props.error}
          required={props.required}
          disabled={props.disabled}
          label={props.label || 'Correspondent'}
          InputLabelProps={{ shrink: true }}
          inputProps={{ ...params.inputProps, maxLength: 4 }}
        />
      )}
    />
  );
}
