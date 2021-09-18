import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { lazySystemCode } from '../../services/CommonService';

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
    const { systemCodeList } = await lazySystemCode({
      type: props.type,
      subType: props.subType,
      code: data.value,
      note: props.note,
    });
    setOptions(systemCodeList.filter((s) => s.code));
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
      getOptionLabel={(option) => {
        return props.type === 'Side' ? option?.code : option?.code + ' - ' + option?.description;
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

export const AutoCompleteSettleType = (props) => {
  return <SelectAutoCompleteSystemCode {...props} type={'Settle Type'} />;
};

export const AutoCompleteExecBroker = (props) => {
  return <SelectAutoCompleteSystemCode {...props} type={'Exec Broker'} />;
};

export const AutoCompleteExecBrokerNo = (props) => {
  return <SelectAutoCompleteSystemCode {...props} type={'Exec Broker No'} />;
};

export const AutoCompleteContraExecBroker = (props) => {
  return (
    <SelectAutoCompleteSystemCode {...props} type={'Contra Exec Broker'} />
  );
};

export const AutoCompleteContraExecBrokerNo = (props) => {
  return (
    <SelectAutoCompleteSystemCode {...props} type={'Contra Exec Broker No'} />
  );
};

export const AutoCompleteCusip = (props) => {
  return <SelectAutoCompleteSystemCode {...props} type={'Cusip'} />;
};

export const AutoCompleteCurrency = (props) => {
  return <SelectAutoCompleteSystemCode {...props} type={'Currency'} />;
};

export const AutoCompleteSubAccountNo = (props) => {
  return <SelectAutoCompleteSystemCode {...props} type={'Sub Account No'} />;
};

export const SelectEntryType = (props) => {
  return <SelectAutoCompleteSystemCode {...props} type={'Entry Type'} />;
};

export const SelectSicCode = (props) => {
  return <SelectAutoCompleteSystemCode {...props} type={'SIC Code'} />;
};

export const SelectReserveCalcCode = (props) => {
  return <SelectAutoCompleteSystemCode {...props} type={'15c3'} />;
};

export const SelectSide = (props) => {
  return (
    <SelectAutoCompleteSystemCode {...props} type={'Side'} subType={'Equity'} />
  );
};
