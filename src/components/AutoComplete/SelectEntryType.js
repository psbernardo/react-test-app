import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { LazySystemCodePromise } from '../../services/CommonService';

function SelectAutoCompleteSystemCode(props) {
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

    if (options.find((o) => o.code === value)) {
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
    await LazySystemCodePromise({
      type: props.type,
      code: data,
      limit: 70,
    }).then((items) => {
      if (props.filter == null) {
        setOptions(items?.systemCodeList);
      } else {
        setOptions(props.filter(items?.systemCodeList));
      }
    });
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
        options.find((o) => o.code === e.target.value)
      ) {
        return;
      }
      if (!options.find((o) => o.code.indexOf(e.target.value) === -1)) {
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
        const value = v ? v.code : '';
        setPropsValue(value);
        setInputValue(value);
      }}
      getOptionSelected={(option, value) =>
        option.code === value.code || options.find((o) => o.code !== value)
      }
      getOptionLabel={(option) => option?.code + ' - ' + option?.description}
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

export const SelectEntryType = (props) => {
  const filter = (systemCodeList) => {
    let listEntryType = systemCodeList?.filter((x) => {
      return x.note?.length > 0;
    });

    function getScreenNo(note) {
      if (note === 'Trade') return 1;
      if (note === 'Cash Movement') return 2;
      if (note === 'Position Movement') return 3;
      if (note === 'Cash and Position Movement') return 4;
    }

    listEntryType = listEntryType.map((x) => {
      return {
        code: x.code,
        value: x.code,
        label: x.code,
        description: x.description,
        screen: x.note,
        screen_no: getScreenNo(x.note),
      };
    });
    return listEntryType;
  };

  return (
    <SelectAutoCompleteSystemCode
      {...props}
      filter={filter}
      type={'Entry Type'}
    />
  );
};
