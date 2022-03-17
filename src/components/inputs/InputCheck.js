import React from 'react';
import styles from './InputCheck.module.css';

const InputCheck = ({ ...props }) => {
  return (
    <div className={styles.container}>
      <input type="checkbox" className={styles.input} {...props} />
      <label className={styles.label}>I accept the terms and privacy</label>
    </div>
  );
};

export default InputCheck;
