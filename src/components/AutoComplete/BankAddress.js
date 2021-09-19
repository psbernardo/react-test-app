import React from 'react';
import { createSelector } from 'reselect'; //memoization
import { TextField, InputAdornment, IconButton } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {
  BankAddressServiceClient,
  LazyBankAddressRequest,
} from '../../proto/bankpb/address_grpc_web_pb';
import BankAddressModal from './BankAddressModal';
import { createBankAddress } from '../../services/AddBankAddressService';

import { AddCircle as AddCircleIcon } from '@material-ui/icons';
import {
  notifyError,
  notifySuccess,
} from '../../components/Notification/Notification';
import { auth } from '../../lib/auth/Auth';
import { getArrayKeyIndex } from 'lib/utils/utils';

const service = new BankAddressServiceClient(
  REACT_APP_GRPC_ENDPOINT,
  {},
  { ...auth }
);

//memoization -  cached result when the same inputs occur again
export const lazyBankAddress = createSelector(
  (a) => a,
  (a) => (async () => await lazyBankAddressPromise(a))()
);

async function lazyBankAddressPromise(value) {
  return new Promise((resolve, reject) => {
    let req = new LazyBankAddressRequest();
    req.setKey(value);
    req.setLimit(10);

    service.lazyBankAddress(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export default function BankAddressSelect(props) {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const [inputValue, setInputValue] = React.useState(
    props.value !== 0 ? props.value : ''
  );
  const [autoCompleteValue, setAutoCompleteValue] = React.useState({});
  const [openAddress, setOpenAddress] = React.useState(false);
  const [bankAddressesList, setBankAddressesList] = React.useState([]);

  const setPropsValue = (value, data) => {
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
      setPropsValue(value, {});
      return;
    }

    let data = options.find((o) => o.bankAddressId === value);
    if (data) {
      setPropsValue(value, data);
      return;
    }
    // if selected value does not exist in options and is not a free solo
    setInputValue('');
  };

  //set local input value and get options
  const handleInputChange = async (event, value) => {
    if (!event) return;
    if (event.type === 'blur') return;
    if (event.type === 'click' && value) return;

    setInputValue(value);
    getOptions(value);
  };

  const getOptions = async (value) => {
    const { bankAddressesList } = await lazyBankAddress(value);
    setOptions(bankAddressesList);

    if (props.value && typeof props.value !== 'object') {
      const selectedIndex = getArrayKeyIndex(
        bankAddressesList,
        props.value,
        'bankAddressId'
      );

      setAutoCompleteValue(bankAddressesList[selectedIndex]);
    }
  };

  React.useEffect(
    () => {
      if (open) {
        getOptions(props.value);
      }
    },
    // eslint-disable-next-line
    [open, props]
  );

  React.useEffect(
    () => {
      if (typeof props.value === 'object') {
        setAutoCompleteValue(props.value);
      }
    },
    // eslint-disable-next-line
    [props]
  );

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (
        e.target.value.length === 0 ||
        options.find((o) => o.bankAddressId === e.target.value)
      ) {
        return;
      }
      if (
        !options.find((o) => o.bankAddressId.indexOf(e.target.value) === -1)
      ) {
        e.preventDefault();
        e.stopPropagation();
      }
    }
  };

  const handleOpen = (data) => {
    if (!data) {
      //ADD default values
      data = {
        bankName: '',
        achRoutingNo: '',
        address: '',
        city: '',
        zipCode: '',
        state: '',
        status: '',
      };
    }

    setOpenAddress(true);
  };

  const handleCloseAddress = async (data) => {
    if (!data) {
      setOpenAddress(false);
      return;
    }

    let valid = true;
    if (!data.bankName) {
      notifyError('Bank name is required.');
      valid = false;
    }
    if (!data.bankRoutingNo) {
      notifyError('Bank routing no. is required.');
      valid = false;
    }
    if (!data.address) {
      notifyError('Address is required.');
      valid = false;
    }
    if (!data.city) {
      notifyError('City is required.');
      valid = false;
    }
    if (!data.zipCode) {
      notifyError('Zip code is required.');
      valid = false;
    }
    if (!data.state && data.country === 'US') {
      notifyError('State is required.');
      valid = false;
    }
    if (!data.status) {
      notifyError('Status is required.');
      valid = false;
    }
    if (!valid) {
      return;
    }

    try {
      //ADD
      const resp = await createBankAddress(data);
      setBankAddressesList([resp.bankAddress, ...bankAddressesList]);
      setAutoCompleteValue(resp.bankAddress);
      setPropsValue(resp.bankAddress.bankAddressId);
      notifySuccess('New bank address has been Added.');
      setOpenAddress(false);
    } catch (error) {
      console.error(error);
      notifyError(error.message);
    }
  };

  return (
    <React.Fragment>
      <Autocomplete
        onInputChange={handleInputChange}
        blurOnSelect={false}
        onBlur={() => {
          handleOnBlur(inputValue);
        }}
        name={props.name}
        autoHighlight={true}
        autoComplete={false}
        autoSelect={false}
        clearOnEscape={true}
        open={open}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        disabled={props.disabled}
        getOptionSelected={(option, v) => {
          if (!v) return;
          if (!v.bankAddressId) return;

          return option.bankAddressId === v.bankAddressId;
        }}
        getOptionLabel={(option) =>
          option.address
            ? option.address +
              ' ' +
              option.city +
              ' ' +
              option.zipCode +
              ', ' +
              option.state
            : ''
        }
        value={autoCompleteValue}
        options={options}
        onChange={(_, v) => {
          const value = v ? v.bankAddressId : 0;

          setAutoCompleteValue(v);
          setPropsValue(value);
          setInputValue(value);
        }}
        renderInput={(params) => {
          params.inputProps.onKeyDown = handleKeyDown;
          return (
            <TextField
              name={props.name}
              {...params}
              required={props.required}
              disabled={props.disabled}
              label={props.label}
              InputLabelProps={{ shrink: true }}
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <InputAdornment
                    style={{ marginRight: !props.disabled ? '-55px' : '-30px' }}
                    position="end"
                  >
                    <IconButton
                      aria-label="add bank address"
                      disabled={props.disabled}
                      onClick={handleOpen}
                    >
                      <AddCircleIcon color="primary" />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          );
        }}
      />
      {openAddress && (
        <BankAddressModal
          onClose={handleCloseAddress}
          open={openAddress}
        ></BankAddressModal>
      )}
    </React.Fragment>
  );
}
