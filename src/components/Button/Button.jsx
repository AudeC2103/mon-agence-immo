import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.scss';

const Button = ({ children, type = 'primary', ...props }) => {
  return (
    <button className={`${styles.btn} ${styles[type]}`} {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['primary', 'secondary', 'accent', 'neutral']),
};

export default Button;
