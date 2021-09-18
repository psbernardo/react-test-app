import React from 'react';
import { Select, MenuItem, InputLabel } from '@material-ui/core';
import { LazySystemCodePromise } from '../../services/CommonService';

function DropDownListSystemCode(props, request, filterRecords, showCode) {
  const [options, setOptions] = React.useState([]);
  const { name, onChange, value } = props;
  const { type, code, limit } = request;
  const getOptions = async () => {
    await LazySystemCodePromise({
      type: type,
      code: code,
      limit: limit,
    }).then((items) => {
      if (filterRecords == null) {
        setOptions(items?.systemCodeList);
      } else {
        setOptions(filterRecords(items?.systemCodeList));
      }
    });
  };

  React.useEffect(() => {
    if (options.length === 0) {
      getOptions(setOptions);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <InputLabel shrink id={name}>
        {props.label + (props.required ? ' *' : '')}
      </InputLabel>
      <Select
        name={name}
        displayEmpty
        fullWidth
        key={name}
        onChange={onChange}
        value={value || ''}
      >
        <MenuItem value="">
          <em></em>
        </MenuItem>
        {options.length > 0
          ? options?.map(function(item) {
              return (
                <MenuItem
                  key={keyRandomizer()}
                  value={
                    item?.overrideValue?.length > 0
                      ? item?.overrideValue
                      : item?.code || ''
                  }
                >
                  {showCode ? item?.code + ' - ' : ''}{' '}
                  {item?.description ? item?.description : ''}
                </MenuItem>
              );
            })
          : null}
      </Select>
    </>
  );
}

export const DropDownListEntryType = (props) => {
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
  let req = {
    type: 'Entry Type',
    code: '',
    limit: 70,
  };
  return new DropDownListSystemCode(props, req, filter, true);
};

export const DropDownListSide = (props) => {
  let req = {
    type: 'Side',
    code: '',
    limit: 15,
  };

  const filter = (systemCodeList) => {
    let sides = systemCodeList?.filter((x) => {
      return ['S', 'SS', 'B'].indexOf(x?.code) >= 0;
    });

    sides = sides?.map((x) => {
      x.overrideValue = x.description.replace(/\s+/g, '_').toLowerCase();
      return x;
    });
    return sides.sort();
  };
  return new DropDownListSystemCode(props, req, filter, true);
};

export const DropDownListCapacity = (props) => {
  let req = {
    type: 'Capacity',
    code: '',
    limit: 15,
  };

  return new DropDownListSystemCode(props, req, null, false);
};

function keyRandomizer() {
  return Math.random()
    .toString(36)
    .substring(7);
}
