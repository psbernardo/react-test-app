import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { listPage } from '../../services/CommonService';

export default function SelectPage(props) {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const [inputValue, setInputValue] = React.useState(props.value);
  const [pageId, setPageId] = React.useState(0);

  const setPropsValue = (value, id) => {
    props.onChange({
      currentTarget: {
        name: props.name,
        value: value,
        pageId: id ? id : pageId,
      },
      target: {
        name: props.name,
        value: value,
        pageId: id ? id : pageId,
      },
    });
  };

  const handleOnBlur = async (value, id) => {
    if (props.freeSolo) {
      setPropsValue(value, id);
      return;
    }

    if (options.find((o) => o.pageName === value)) {
      setPropsValue(value, id);
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
    const { pagesList } = await listPage({
      key: value,
      limit: 50,
    });

    setOptions(pagesList.filter((s) => s.pageName));
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
        options.find((o) => o.pageName === e.target.value)
      ) {
        return;
      }
      if (!options.find((o) => o.pageName.indexOf(e.target.value) === -1)) {
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
        handleOnBlur(inputValue, pageId);
      }}
      blurOnSelect={false}
      onChange={(_, v) => {
        const value = v ? v.pageName : '';

        setPropsValue(value);
        setInputValue(value);
        setPageId(v ? v.pageId.toString() : 0);
      }}
      getOptionSelected={(option, value) =>
        option.pageName === value.pageName ||
        options.find((o) => o.pageName !== value)
      }
      getOptionLabel={(option) => {
        return option.pageName;
      }}
      inputValue={inputValue}
      options={options}
      groupBy={(option) => option.menu + ' / ' + option.subMenu}
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
