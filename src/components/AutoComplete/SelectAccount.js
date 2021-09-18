import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { lazyLoadAccount } from '../../services/CommonService';

export default function SelectAccount(props) {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const [inputValue, setInputValue] = React.useState(props.value);

  const setPropsValue = (v) => {
    props.onChange({
      currentTarget: {
        name: props.name,
        value: v,
      },
      target: {
        name: props.name,
        value: v,
      },
    });
  };

  const handleOnBlur = async (v) => {
    if (props.freeSolo) {
      setPropsValue(v);
      return;
    }

    if (options.find((o) => o[props.type] === v)) {
      setPropsValue(v);
      return;
    }

    // if selected value does not exist in options and is not a free solo
    setInputValue('');
    setPropsValue('');
  };

  //set local input value and get options
  const handleInputChange = async (event, v) => {
    if (!event) return;
    if (event.type === 'blur') return;
    if (event.type === 'click' && v) return;

    setInputValue(v);
    setPropsValue(v);
    getOptions(v);
  };

  //get list from backend
  const getOptions = async (v, editInputValue) => {
    const list = await lazyLoadAccount(
      v,
      props.selectedCorrespondent,
      props.type,
      props.showAccountName
    );

    setOptions(list.filter((acct) => acct[props.type]));

    //editInputValue to setup the visible value of autocomplete for query string
    if (
      editInputValue &&
      list.some((e) => {
        return e[props.type] === v;
      })
    ) {
      setInputValue(props.value);
    }
  };

  React.useEffect(() => {
    if (open) {
      getOptions(props.value);
    } else if (props.value && !options.length && !inputValue) {
      const editInputValue = true;
      getOptions(props.value, editInputValue);
    }
    // eslint-disable-next-line
  }, [open, props.value]);

  return (
    <Autocomplete
      key={props.clear}
      disabled={props.disabled}
      freeSolo={props.freeSolo}
      id={props.name}
      onInputChange={handleInputChange}
      onBlur={() => {
        handleOnBlur(inputValue);
      }}
      blurOnSelect={false}
      onChange={(_, v) => {
        const newValue = v ? v[props.type] : '';
        setPropsValue(newValue);
        setInputValue(newValue);
      }}
      getOptionSelected={(option, v) => option[props.type] === v[props.type]}
      getOptionLabel={(option) =>
        option.accountName && props.type !== 'accountName'
          ? option[props.type] + ' (' + option.accountName + ')'
          : option[props.type]
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
