import React, { Component } from 'react';

class Keypad extends Component {
  handleChange = (event) => {
    console.log('Entering password...');
  };

  render() {
    return (
      <div>
        <input type="password" onChange={this.handleChange} />
      </div>
    );
  }
}

export default Keypad;
