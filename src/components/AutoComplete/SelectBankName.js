import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { listBankName } from '../../services/CommonService';

export default function SelectBankName(props) {
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

    if (options.find((o) => o.bankName === value)) {
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
  const getOptions = async (value) => {
    const { bankNamesList } = await listBankName({
      key: value,
      limit: 50,
    });
    setOptions(bankNamesList.filter((a) => a.bankName));
  };

  React.useEffect(
    () => {
      if ((!options.length && !props.value) || options.value !== inputValue) {
        getOptions(props.value);
      }
    },
    // eslint-disable-next-line
        [open, props.value]
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
        const value = v ? v.bankName : '';
        setPropsValue(v ? v : '');
        setInputValue(value);
      }}
      getOptionSelected={(option, value) => option?.bankName === value.bankName}
      getOptionLabel={(option) =>
        option?.bankRoutingNo + ' (' + option?.bankName + ')'
      }
      inputValue={inputValue ? inputValue : props.value}
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
