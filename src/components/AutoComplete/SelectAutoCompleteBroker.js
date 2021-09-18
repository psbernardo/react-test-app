import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { lazyBroker } from '../../services/CommonService';

export default function SelectAutoCompleteBroker(props) {
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

    if (options.find((o) => o.broker === value)) {
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
  const getOptions = async (data) => {
    const val = data.value ? data.value : data;
    const { brokersList } = await lazyBroker({
      broker: val,
      limit: 50,
    });

    let result = brokersList.reduce((unique, o) => {
      if (
        !unique.some((obj) => obj.broker === o.broker && obj.value === o.value)
      ) {
        unique.push(o);
      }
      return unique;
    }, []);

    setOptions(result);
  };

  React.useEffect(() => {
    if (!options.length && !props.value) {
      //removed this from if condition [open]
      getOptions(props);
    }
    // eslint-disable-next-line
  }, [props]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (
        e.target.value.length === 0 ||
        options.find((o) => o.broker === e.target.value)
      ) {
        return;
      }
      if (!options.find((o) => o.broker.indexOf(e.target.value) === -1)) {
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
        const value = v ? v.broker : '';
        setPropsValue(value);
        setInputValue(value);
      }}
      getOptionSelected={(option, value) =>
        option.broker === value.broker ||
        options.find((o) => o.broker !== value)
      }
      getOptionLabel={(option) => {
        return option?.broker;
      }}
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
          />
        );
      }}
    />
  );
}
