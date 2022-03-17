import React from 'react';
import styles from './Button.module.css';

const Button = ({ title, ...props }) => {
  return (
    <div className={styles.buttonBox}>
      <button className={styles.button} {...props}>
        {title}
      </button>
    </div>
  );
};

export default Button;
