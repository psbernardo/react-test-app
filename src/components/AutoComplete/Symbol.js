/*ReactJS*/
import React, { useCallback } from 'react';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import debounce from 'lodash/debounce';
import { notifyError } from 'components/Notification/Notification';

import {
  ListServiceClient,
  LazyLoadRequest,
} from '../../proto/commonpb/list_grpc_web_pb';

import { auth } from '../../lib/auth/Auth';

const listClient = new ListServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export default function SymbolSelect(props) {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const [symbols, setSymbols] = React.useState([]);
  let loading = false;

  const debouncedGetListFromAPI = useCallback(
    debounce((nextValue) => getListFromAPI(nextValue), 1000),
    [] // will be created only once initially
  );

  const getListFromAPI = (value) => {
    loading = true;
    //API CALL
    let listAccountReq = new LazyLoadRequest();
    listAccountReq.setLimit(100);
    listAccountReq.setKey(value);

    listClient.lazyLoadSecurity(listAccountReq, {}, (err, res) => {
      if (err) {
        notifyError(err.message);
        setOptions([]);
        return;
      } else {
        //GET ONLY NEEDED DATA
        const data = res
          .toObject()
          .securitiesList.filter((value) => {
            return value.symbol ? value : null;
          })
          .map((v) => ({
            symbol: v.symbol,
          }));

        const filteredValues = data.reduce((dup, current) => {
          const x = dup.find((item) => item.symbol === current.symbol);
          if (!x) {
            return dup.concat([current]);
          } else {
            return dup;
          }
        }, []);

        setOptions(filteredValues);

        if (!data.length) {
          setOpen(false);
        }
      }
      loading = false;
    });
  };

  const getSymbolsFromAPI = useCallback(
    async (value) => {
      //API CALL
      let req = new LazyLoadRequest();
      req.setLimit(100);
      req.setKey(value);

      listClient.lazyLoadSecurity(req, {}, (err, res) => {
        if (err) {
          notifyError(err.message);
          setOptions([]);
          return;
        } else {
          //GET ONLY NEEDED DATA
          const data = res
            .toObject()
            .securitiesList.filter((value) => {
              return value.symbol ? value : null;
            })
            .map((v) => ({
              symbol: v.symbol,
            }));

          const filteredValues = data.reduce((dup, current) => {
            const x = dup.find((item) => item.symbol === current.symbol);
            if (!x) {
              return dup.concat([current]);
            } else {
              return dup;
            }
          }, []);

          setSymbols(filteredValues);
        }
      });
    },
    // eslint-disable-next-line
    [listClient]
  );

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
    getSymbolsFromAPI('');
    // eslint-disable-next-line
  }, [open, props]);

  if (symbols.length !== 0) {
    const selectedSymbol = symbols
      .filter(function(v) {
        return v.symbol === props.value ? v : '';
      })
      .map(function(symbol) {
        return symbol;
      });

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
        disabled={props.disabled}
        getOptionSelected={(option, value) => option.symbol === value.symbol}
        getOptionLabel={(option) => option.symbol}
        options={options}
        loading={loading}
        onInputChange={handleInputChange}
        onChange={(event, value) => {
          props.onChange({
            currentTarget: {
              name: props.name,
              value: value ? value.symbol : null,
            },
          });
        }}
        defaultValue={props.value ? selectedSymbol[0] : null}
        renderInput={(params) => (
          <TextField
            {...params}
            label={props.label}
            name={props.name}
            disabled={props.disabled}
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
            onClick={(ev) => {
              if (ev.target.value !== '' || ev.target.value !== null) {
                getListFromAPI(ev.target.value);
              }
            }}
          />
        )}
      />
    );
  } else {
    return <div>Loading component...</div>;
  }
}
