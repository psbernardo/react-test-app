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

export default function ClientAccountSelect(props) {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const [accounts, setAccounts] = React.useState([]);
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

    listClient.lazyLoadClientAccount(listAccountReq, {}, (err, res) => {
      if (err) {
        notifyError(err.message);
        setOptions([]);
        return;
      } else {
        //GET ONLY NEEDED DATA
        const data = res
          .toObject()
          .accountsList.filter((value) => {
            return value.accountNo ? value : null;
          })
          .map((v) => ({
            accountNo: v.accountNo,
          }));

        const filteredValues = data.reduce((dup, current) => {
          const x = dup.find((item) => item.accountNo === current.accountNo);
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

  const getAccountsFromAPI = useCallback(
    async (value) => {
      //API CALL
      let req = new LazyLoadRequest();
      req.setLimit(100);
      req.setKey(value);

      listClient.lazyLoadClientAccount(req, {}, (err, res) => {
        if (err) {
          notifyError(err.message);
          setOptions([]);
          return;
        } else {
          //GET ONLY NEEDED DATA
          const data = res
            .toObject()
            .accountsList.filter((value) => {
              return value.accountNo ? value : null;
            })
            .map((v) => ({
              accountNo: v.accountNo,
            }));

          const filteredValues = data.reduce((dup, current) => {
            const x = dup.find((item) => item.accountNo === current.accountNo);
            if (!x) {
              return dup.concat([current]);
            } else {
              return dup;
            }
          }, []);

          setAccounts(filteredValues);
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
    getAccountsFromAPI('');
    // eslint-disable-next-line
  }, [open, props]);

  if (accounts.length !== 0) {
    const selectedAccount = accounts
      .filter(function(v) {
        return v.accountNo === props.value ? v : '';
      })
      .map(function(accounts) {
        return accounts;
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
        getOptionSelected={(option, value) =>
          option.accountNo === value.accountNo
        }
        getOptionLabel={(option) => option.accountNo}
        options={options}
        loading={loading}
        onInputChange={handleInputChange}
        onChange={(event, value) => {
          props.onChange({
            currentTarget: {
              name: props.name,
              value: value ? value.accountNo : null,
            },
          });
        }}
        defaultValue={props.value ? selectedAccount[0] : null}
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
