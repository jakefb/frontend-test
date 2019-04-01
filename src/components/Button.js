import React from 'react';
import PropTypes from 'prop-types';

/**
 * @public
 * Map of button types to class names
 */
export const buttonTypes = {
  submit: 'submit',
  button: 'button',
  reset: 'reset',
};

const star = (
  <svg className="c-icon" viewBox="0 0 15 15" role="presentation">
    <path d="M7.5 12.5l-5 2.5.833-5.417L0 5.833 5 5l2.5-5L10 5l5 .833-3.333 3.75L12.5 15z" />
  </svg>
);

const Button = props => {
  return (
    <button className={`c-button`} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,

  /** Determines if the button is disabled or not. */
  isDisabled: PropTypes.bool,

  /** Bind a function to fire when the button is clicked */
  onClick: PropTypes.func,

  /** Link href attribute */
  href: PropTypes.string,

  /** If true, sets appropriate `rel` values to prevent new page from having access to
   * `window.opener`. Should be used for links pointing at external sites. */
  isExternalLink: PropTypes.bool,

  /** Whether or not to render this button using an <a> tag */
  isLink: PropTypes.bool,

  /** The HTML tabIndex attribute value */
  tabIndex: PropTypes.number,

  /** The `target` attribute to use on the anchor element (ignored unless `isLink` is `true`) */
  target: PropTypes.string,

  /** The `title` attribute */
  title: PropTypes.string,

  /** isFavourite */
  isFavourite: PropTypes.bool,
};

Button.defaultProps = {
  isDisabled: false,
  isExternalLink: false,
  isLink: false,
  tabIndex: 0,
  type: buttonTypes.button,
};

export default Button;
