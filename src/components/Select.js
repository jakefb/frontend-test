import React from 'react';
import PropTypes from 'prop-types';

const Select = props => (
  <select className={`c-input ${props.className ? props.className : ''}`}>{props.children}</select>
);

Select.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};

Select.defaultProps = {};

export default Select;
