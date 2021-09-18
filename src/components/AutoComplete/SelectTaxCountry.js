import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { lazySystemCode } from '../../services/CommonService';

export default function SelectTaxCountry(props) {
  const [options, setOptions] = React.useState([]);

  //get list from backend
  const getOptions = async (value) => {
    const { systemCodeList } = await lazySystemCode({
      type: 'Country',
      code: value,
    });
    setOptions(systemCodeList.filter((s) => s.code));
  };

  React.useEffect(() => {
    getOptions(props.value);
  }, [props.value]);

  return (
    <Autocomplete
      disabled={props.disabled}
      freeSolo={props.freeSolo}
      id={props.name}
      blurOnSelect={false}
      getOptionSelected={(option, value) => {
        return option.code === props.value;
      }}
      getOptionLabel={(option) => {
        if (option?.code) return option.code + ' - ' + option.description;
        return '';
      }}
      options={options}
      name={props.name}
      autoHighlight={true}
      clearOnEscape={true}
      value={options.find((o) => o.code === props.value) || {}}
      onChange={(_, obj) => props.onChange(obj)}
      renderInput={(params) => (
        <TextField
          {...params}
          error={props.error}
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
