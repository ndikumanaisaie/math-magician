/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Screen extends Component {
  render() {
    const { value } = this.props;
    return (
      <div className="screen">{value}</div>
    );
  }
}

Screen.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Screen;
