/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class Screen extends Component {
  render() {
    const { value } = this.props;
    return (
      <div className="screen">{value}</div>
    );
  }
}

export default Screen;
