/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';

const Screen = ({ value }) => (
  <div className="screen">{value}</div>
);

Screen.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Screen;
