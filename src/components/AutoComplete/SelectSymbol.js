import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { lazyLoadSecurity } from '../../services/CommonService';

export default function SelectSymbol(props) {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const [inputValue, setInputValue] = React.useState(props.value);

  const setPropsValue = (value, cusip) => {
    props.onChange({
      currentTarget: {
        name: props.name,
        value: value,
        cusip: cusip,
      },
      target: {
        name: props.name,
        value: value,
        cusip: cusip,
      },
    });
  };

  const handleOnBlur = async (value) => {
    if (props.freeSolo) {
      setPropsValue(value, '');
      return;
    }

    const v = options.find((o) => o.symbol === value);
    if (v) {
      setPropsValue(v.symbol, v.cusip);
      return;
    }

    // if selected value does not exist in options and is not a free solo
    setInputValue('');
    setPropsValue('', '');
  };

  //set local input value and get options
  const handleInputChange = async (event, value) => {
    if (!event) return;
    if (event.type === 'blur') return;
    if (event.type === 'click' && value) return;

    setInputValue(value.toUpperCase());
    getOptions(value);
  };

  //get list from backend
  const getOptions = async (value) => {
    const { securitiesList } = await lazyLoadSecurity(value, props.assetType);

    setOptions(securitiesList.filter((a) => a.symbol));
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
      onChange={(_, v) => {
        const value = v ? v.symbol : '';
        const cusip = v ? v.cusip : '';
        setPropsValue(value, cusip);
        setInputValue(value);
      }}
      getOptionSelected={(option, value) => option.symbol === value.symbol}
      getOptionLabel={(option) => option.symbol}
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
          inputProps={{ ...params.inputProps, maxLength: 30 }}
        />
      )}
    />
  );
}
