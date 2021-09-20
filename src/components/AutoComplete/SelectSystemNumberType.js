/*ReactJS*/
import React, { useCallback } from 'react';

import {
  SystemNumber,
  SystemNumberServiceClient,
} from '../../proto/admpb/systemnumber_grpc_web_pb';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import debounce from 'lodash/debounce';
import { notifyError } from 'components/Notification/Notification';
import { auth } from '../../lib/auth/Auth';
const listType = new SystemNumberServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

let defaultValue = undefined;

export default function SelectSystemNumberType(props) {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);

  if (defaultValue === undefined) {
    defaultValue = props.value;
  }

  let loading = false;

  const debouncedGetListFromAPI = useCallback(
    debounce((nextValue) => getListFromAPI(nextValue), 1000),
    [] // will be created only once initially
  );

  const getListFromAPI = (value) => {
    loading = true;
    //API CALL
    let listTypeReq = new SystemNumber();

    listType.listSystemNumber(listTypeReq, {}, (err, res) => {
      if (err) {
        notifyError(err.message);
        setOptions([]);
        return;
      } else {
        //GET ONLY NEEDED DATA
        const data = res
          .toObject()
          .systemNumbersList.reduce((dup, current) => {
            const x = dup.find((item) => item.type === current.type);
            if (!x) {
              return dup.concat([current]);
            } else {
              return dup;
            }
          }, [])
          .map((v) => v.type);

        setOptions(data);

        if (!data.length) {
          setOpen(false);
        }
      }
      loading = false;
    });
  };

  const handleInputChange = (event, value) => {
    props.onChange({
      currentTarget: {
        name: props.name,
        value: value ? value : null,
      },
    });
    debouncedGetListFromAPI(value);
  };

  React.useEffect(() => {
    if (!options.length && !props.value) {
      //removed this from if condition [open]
      getListFromAPI(props.value);
    }
    // eslint-disable-next-line
  }, [open, props]);

  return (
    <Autocomplete
      blurOnSelect={true}
      freeSolo={props.freeSolo}
      clearOnEscape
      id={props.name || props.id}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      getOptionSelected={(option, value) => option === value}
      getOptionLabel={(option) => option}
      options={options}
      loading={loading}
      onInputChange={handleInputChange}
      onChange={(event, value) => {
        props.onChange({
          currentTarget: {
            name: props.name,
            value: value ? value : '',
          },
        });
      }}
      defaultValue={defaultValue}
      renderInput={(params) => (
        <TextField
          {...params}
          label={props.label}
          name={props.name}
          InputLabelProps={{ shrink: true }}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
          style={props.style}
          onClick={(ev) => {
            if (ev.target.value !== '' || ev.target.value !== null) {
              getListFromAPI(ev.target.value);
            }
          }}
        />
      )}
    />
  );
}
