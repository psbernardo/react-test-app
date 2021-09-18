import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { lazyAccountNo } from '../../services/CommonService';

export default function SelectAccountNo(props) {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const [inputValue, setInputValue] = React.useState(props.value);

  const setPropsValue = (value, data) => {
    props.onChange({
      currentTarget: {
        name: props.name,
        value: value,
        data: data,
      },
      target: {
        name: props.name,
        value: value,
        data: data,
      },
    });
  };

  const handleOnBlur = async (value) => {
    if (props.freeSolo) {
      setPropsValue(value, {});
      return;
    }

    let data = options.find((o) => o.accountNo === value);
    if (data) {
      setPropsValue(value, data);
      return;
    }

    // if selected value does not exist in options and is not a free solo
    setInputValue('');
    setPropsValue('', {});
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
    const { accountNosList } = await lazyAccountNo(
      props.correspondent,
      value,
      props.type
    );

    let result = accountNosList.reduce((unique, o) => {
      if (
        !unique.some(
          (obj) => obj.accountNo === o.accountNo && obj.value === o.value
        )
      ) {
        unique.push(o);
      }
      return unique;
    }, []);

    setOptions(result);
  };

  React.useEffect(
    () => {
      if (open) {
        getOptions(props.value);
      } else if (props.value === '') {
        setOptions([]);
        setInputValue('');
      }
    },
    // eslint-disable-next-line
    [open, props]
  );

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (
        e.target.value.length === 0 ||
        options.find((o) => o.accountNo === e.target.value)
      ) {
        return;
      }
      if (!options.find((o) => o.accountNo.indexOf(e.target.value) === -1)) {
        e.preventDefault();
        e.stopPropagation();
      }
    }
  };

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
        const value = v ? v.accountNo : '';
        setPropsValue(value, v || {});
        setInputValue(value);
      }}
      getOptionSelected={(option, value) =>
        option.accountNo === value.accountNo
      }
      getOptionLabel={(option) =>
        option.accountNo + ' (' + option.accountName + ')'
      }
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
      renderInput={(params) => {
        params.inputProps.onKeyDown = handleKeyDown;
        return (
          <TextField
            {...params}
            name={props.name}
            required={props.required}
            disabled={props.disabled}
            label={props.label}
            InputLabelProps={{ shrink: true }}
            inputProps={{ ...params.inputProps, maxLength: 50 }}
          />
        );
      }}
    />
  );
}
