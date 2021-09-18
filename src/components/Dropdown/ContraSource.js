/*ReactJS*/
import React from 'react';

/*Material UI Components*/
import { Select, MenuItem } from '@material-ui/core';

class ContraSourceSelect extends React.Component {
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
        <MenuItem value="frb">FRB</MenuItem>
        <MenuItem value="velox">Velox</MenuItem>
      </Select>
    );
  }
}

export default ContraSourceSelect;
