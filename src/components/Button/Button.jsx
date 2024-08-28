import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './style.module.scss';

const Button = ({ children, variant = 'primary', to, disabled = false, onClick, ...props }) => {
  const classNames = `${styles.btn} ${styles[variant]} ${disabled ? styles.disabled : ''}`;

  // Si la prop `to` est fournie, utiliser un `Link`
  if (to) {
    return (
      <Link
        to={to}
        className={classNames}
        {...props}
      >
        {children}
      </Link>
    );
  }

  // Sinon, utiliser un bouton normal
  return (
    <button
      className={classNames}
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'accent', 'neutral']),
  to: PropTypes.string,  // Lien de navigation si fourni
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
