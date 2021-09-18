/*ReactJS*/
import React from 'react';

/*Material UI Components*/
import { Select, MenuItem } from '@material-ui/core';

class GLTypeSelect extends React.Component {
  render() {
    return (
      <Select
        name={this.props.name}
        required
        displayEmpty
        fullWidth
        value={this.props.value}
        onChange={this.props.onChange}
        inputProps={this.props.inputProps}
      >
        <MenuItem value="">
          <em>Blank</em>
        </MenuItem>
        <MenuItem value="bank">Bank</MenuItem>
        <MenuItem value="current_asset">Current Asset</MenuItem>
        <MenuItem value="equity">Equity</MenuItem>
        <MenuItem value="fees">Fees</MenuItem>
        <MenuItem value="liability">Liability</MenuItem>
        <MenuItem value="prop">Prop</MenuItem>
        <MenuItem value="stock_borrow">Stock Borrow</MenuItem>
        <MenuItem value="transfer">Transfer</MenuItem>
        <MenuItem value="velox">Velox</MenuItem>
        <MenuItem value="frb">FRB</MenuItem>
        <MenuItem value="fee">Fee</MenuItem>
      </Select>
    );
  }
}

export default GLTypeSelect;
