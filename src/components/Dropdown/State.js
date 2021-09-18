/*ReactJS*/
import React from 'react';

/*Material UI Components*/
import { Select, MenuItem } from '@material-ui/core';

class StateSelect extends React.Component {
  render() {
    return (
      <Select
        autoComplete="off"
        required
        displayEmpty
        fullWidth
        name={this.props.name}
        value={this.props.value}
        onChange={this.props.onChange}
        inputProps={this.props.inputProps}
      >
        <MenuItem value="">Non US</MenuItem>
        <MenuItem value="AK">Alaska</MenuItem>
        <MenuItem value="AL">Alabama</MenuItem>
        <MenuItem value="AR">Arkansas</MenuItem>
        <MenuItem value="AZ">Arizona</MenuItem>
        <MenuItem value="CA">California</MenuItem>
        <MenuItem value="CO">Colorado</MenuItem>
        <MenuItem value="CT">Connecticut</MenuItem>
        <MenuItem value="DC">District of Columbia</MenuItem>
        <MenuItem value="DE">Delaware</MenuItem>
        <MenuItem value="FL">Florida</MenuItem>
        <MenuItem value="GA">Georgia</MenuItem>
        <MenuItem value="HI">Hawaii</MenuItem>
        <MenuItem value="IA">Iowa</MenuItem>
        <MenuItem value="ID">Idaho</MenuItem>
        <MenuItem value="IL">Illinois</MenuItem>
        <MenuItem value="IN">Indiana</MenuItem>
        <MenuItem value="KS">Kansas</MenuItem>
        <MenuItem value="KY">Kentucky</MenuItem>
        <MenuItem value="LA">Louisiana</MenuItem>
        <MenuItem value="MA">Massachusetts</MenuItem>
        <MenuItem value="MD">Maryland</MenuItem>
        <MenuItem value="ME">Maine</MenuItem>
        <MenuItem value="MI">Michigan</MenuItem>
        <MenuItem value="MN">Minnesota</MenuItem>
        <MenuItem value="MO">Missouri</MenuItem>
        <MenuItem value="MS">Mississippi</MenuItem>
        <MenuItem value="MT">Montana</MenuItem>
        <MenuItem value="NC">North Carolina</MenuItem>
        <MenuItem value="ND">North Dakota</MenuItem>
        <MenuItem value="NE">Nebraska</MenuItem>
        <MenuItem value="NH">New Hampshire</MenuItem>
        <MenuItem value="NJ">New Jersey</MenuItem>
        <MenuItem value="NM">New Mexico</MenuItem>
        <MenuItem value="NV">Nevada</MenuItem>
        <MenuItem value="NY">New York</MenuItem>
        <MenuItem value="OH">Ohio</MenuItem>
        <MenuItem value="OK">Oklahoma</MenuItem>
        <MenuItem value="OR">Oregon</MenuItem>
        <MenuItem value="PA">Pennsylvania</MenuItem>
        <MenuItem value="RI">Rhode Island</MenuItem>
        <MenuItem value="SC">South Carolina</MenuItem>
        <MenuItem value="SD">South Dakota</MenuItem>
        <MenuItem value="TN">Tennessee</MenuItem>
        <MenuItem value="TX">Texas</MenuItem>
        <MenuItem value="UT">Utah</MenuItem>
        <MenuItem value="VA">Virginia</MenuItem>
        <MenuItem value="VT">Vermont</MenuItem>
        <MenuItem value="WA">Washington</MenuItem>
        <MenuItem value="WI">Wisconsin</MenuItem>
        <MenuItem value="WV">West Virginia</MenuItem>
        <MenuItem value="WY">Wyoming</MenuItem>
      </Select>
    );
  }
}

export default StateSelect;
