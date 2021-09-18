/*ReactJS*/
import React, { useEffect } from 'react';

/*Material UI Components*/
import { TextField, CircularProgress } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

import {
  ListServiceClient,
  ListAccountRequest,
} from '../../proto/commonpb/list_grpc_web_pb';
import { auth } from '../../lib/auth/Auth';

const listClient = new ListServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export default function CorrespondentSelect(props) {
  const [accounts, setAccounts] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;

  useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      if (active) {
        let accountList = new ListAccountRequest();

        listClient.listAccount(accountList, {}, (err, res) => {
          if (err) {
            console.log(err);
            return;
          } else {
            let data = res.toObject().accountsList;

            const filteredValues = data.reduce((dup, current) => {
              const x = dup.find(
                (item) => item.correspondent === current.correspondent
              );
              if (!x) {
                return dup.concat([current]);
              } else {
                return dup;
              }
            }, []);
            setOptions(filteredValues);
          }
        });
      }
    })();

    return () => {
      active = false;
    };
  }, [loading, options]);

  useEffect(() => {
    if (!open) {
      setOptions([]);
      loadAccounts();
    }
  }, [open]);

  const loadAccounts = async () => {
    let listAccountReq = new ListAccountRequest();

    await listClient.listAccount(listAccountReq, {}, (err, res) => {
      if (err) {
        console.log(err);
        return;
      } else {
        let data = res.toObject().accountsList;

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
  };

  if (accounts.length > 0) {
    const selectedCorrespondent = accounts
      .filter(function(v) {
        return v.correspondent === props.value ? v : '';
      })
      .map(function(correspondent) {
        return correspondent;
      });

    return (
      <Autocomplete
        freeSolo={props.freeSolo}
        autoHighlight={true}
        clearOnEscape={true}
        id={props.id}
        open={open}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        getOptionSelected={(option, value) =>
          option.correspondent === value.correspondent
        }
        getOptionLabel={(option) => option.correspondent}
        options={options}
        loading={loading}
        onChange={props.setNewValue}
        defaultValue={props.value ? selectedCorrespondent[0] : null}
        renderInput={(params) => (
          <TextField
            {...params}
            required={props.required}
            labelid={props.labelid}
            label={props.label}
            value={props.value}
            // onChange={props.onChange}
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
          />
        )}
      />
    );
  } else {
    return <div>Loading component...</div>;
  }
}
