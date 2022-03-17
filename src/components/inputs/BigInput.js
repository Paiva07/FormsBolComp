import React from 'react';
import styles from './BigInput.module.css';

const BigInput = ({ title, type, placeholder, id, ...props }) => {
  return (
    <div className={styles.container}>
      <label className={styles.text} htmlFor={id}>
        {title}
      </label>
      <input
        className={styles.input}
        type={type}
        {...props}
        placeholder={placeholder}
        id={id}
      />
    </div>
  );
};

export default BigInput;
