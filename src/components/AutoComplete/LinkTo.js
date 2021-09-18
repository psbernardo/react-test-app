/*ReactJS*/
import React, { useEffect } from 'react';

/*Material UI Components*/
import { TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

import {
  UserGuideServiceClient,
  UserGuide,
} from '../../proto/admpb/userguide_grpc_web_pb';

import { auth } from '../../lib/auth/Auth';

const userGuide = new UserGuideServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export default function LinkToSelect(props) {
  const [paths, setPaths] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loadingInit = open && options.length === 0;
  const [loading, setLoading] = React.useState(loadingInit);

  const linkToOnChange = async (key) => {
    setLoading(true);

    let listAccountReq = new UserGuide();

    await userGuide.listUserGuide(listAccountReq, {}, (err, res) => {
      if (err) {
        console.log(err);
        return;
      } else {
        let data = res.toObject().userGuidesList;

        if (data.length !== 0) {
          setOptions(data);
        } else {
          setOptions([
            {
              content: '',
              linkId: '',
              modifiedBy: '',
              modifiedDate: '',
              pageName: '',
              pagePath: 'Index',
              tags: '',
              title: '',
              type: '',
              userGuideId: '',
            },
          ]);
        }
      }
    });

    setLoading(false);
  };

  useEffect(() => {
    if (!open) {
      setOptions([]);
      const loadLinks = async () => {
        let listAccountReq = new UserGuide();

        await userGuide.listUserGuide(listAccountReq, {}, (err, res) => {
          if (err) {
            console.log(err);
            return;
          } else {
            let data = res.toObject().userGuidesList;

            if (data.length !== 0) {
              setPaths(data);
            } else {
              setPaths([
                {
                  content: '',
                  linkId: '',
                  modifiedBy: '',
                  modifiedDate: '',
                  pageName: '',
                  pagePath: 'Index',
                  tags: '',
                  title: '',
                  type: '',
                  userGuideId: '',
                },
              ]);
            }
          }
        });
      };

      loadLinks();
    }
  }, [open, props]);

  if (paths.length !== 0) {
    const selectedPath = paths
      .filter(function(v) {
        return v.pagePath === props.value ? v : '';
      })
      .map(function(path) {
        return path;
      });

    options.push({
      content: '',
      linkId: '',
      modifiedBy: '',
      modifiedDate: '',
      pageName: '',
      pagePath: 'Index',
      tags: '',
      title: '',
      type: '',
      userGuideId: '',
    });

    paths.push({
      content: '',
      linkId: '',
      modifiedBy: '',
      modifiedDate: '',
      pageName: '',
      pagePath: 'Index',
      tags: '',
      title: '',
      type: '',
      userGuideId: '',
    });

    return (
      <Autocomplete
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
          option.userGuideId === value.userGuideId
        }
        getOptionLabel={(option) => option.pagePath}
        options={options}
        loading={loading}
        onChange={props.setNewValue}
        onInputChange={props.setNewValue}
        defaultValue={props.value ? selectedPath[0] : null}
        renderInput={(params) => (
          <TextField
            {...params}
            onChange={(ev) => {
              if (ev.target.value !== '' || ev.target.value !== null) {
                linkToOnChange(ev.target.value);
              }
            }}
            onClick={(ev) => {
              if (ev.target.value !== '' || ev.target.value !== null) {
                linkToOnChange(ev.target.value);
              }
            }}
            label={props.label}
            InputLabelProps={{ shrink: true }}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <React.Fragment>
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
