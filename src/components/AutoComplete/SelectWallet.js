import React from 'react';
import { Select, MenuItem, InputLabel } from '@material-ui/core';
import { listWallet } from '../../services/WalletService';

export default function SelectWallet({ label, required, ...rest }) {
  const [options, setOptions] = React.useState([]);
  const getOptions = async () => {
    const { listWalletsList } = await listWallet({}); //status: 'active'
    setOptions(listWalletsList);
  };

  React.useEffect(() => {
    if (options.length === 0) {
      getOptions();
    }
  }, [options.length]);

  return (
    <>
      <InputLabel shrink>{label + (required ? ' *' : '')}</InputLabel>
      <Select displayEmpty fullWidth {...rest}>
        <MenuItem value={0}>
          <em></em>
        </MenuItem>
        {options.map((i) => (
          <MenuItem key={i.walletId} value={i.walletId}>
            {i.wallet} ({i.symbol})
          </MenuItem>
        ))}
      </Select>
    </>
  );
}
