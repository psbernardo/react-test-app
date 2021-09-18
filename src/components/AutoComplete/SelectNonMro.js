import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { listNonMroFile } from '../../services/NonMroService';

export default function SelectNonMro(props) {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const [inputValue, setInputValue] = React.useState(props.value);
  // const [fileName, setFileName] = React.useState(0);

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

    if (options.find((o) => o.fileName === value)) {
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
    const { filesList } = await listNonMroFile({
      // key: value,
      // limit: 50,
    });
    setOptions(filesList.filter((s) => s.fileName));
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
        options.find((o) => o.fileName === e.target.value)
      ) {
        return;
      }
      if (!options.find((o) => o.fileName.indexOf(e.target.value) === -1)) {
        e.preventDefault();
        e.stopPropagation();
      }
    }
  };

  return (
    <Autocomplete
      style={props.style}
      disabled={props.disabled}
      freeSolo={props.freeSolo}
      id={props.name}
      onInputChange={handleInputChange}
      onBlur={() => {
        handleOnBlur(inputValue);
      }}
      blurOnSelect={false}
      onChange={(_, v) => {
        const value = v ? v.fileName : '';

        setPropsValue(value);
        setInputValue(value);
        // setFileName(value);
      }}
      getOptionSelected={(option, value) =>
        option.fileName === value.fileName ||
        options.find((o) => o.fileName !== value)
      }
      getOptionLabel={(option) => {
        return option.fileName;
      }}
      inputValue={inputValue}
      options={options}
      // groupBy={(option) => option.menu + ' / ' + option.subMenu}
      name={props.name}
      autoHighlight={false}
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
