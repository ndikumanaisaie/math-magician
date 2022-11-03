/* eslint-disable react/require-default-props */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';

const Screen = ({ value }) => (
  <div className="screen">{value || '0'}</div>
);

Screen.propTypes = {
  value: PropTypes.string,
};

export default Screen;
