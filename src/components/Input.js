import React from 'react';
import PropTypes from 'prop-types';

const Input = props => (
  <input type="text" className={`c-input ${props.className ? props.className : ''}`} />
);

Input.propTypes = {
  className: PropTypes.string,
};

Input.defaultProps = {};

export default Input;
