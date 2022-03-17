import React from 'react';
import styles from './AddCertificates.module.css';

const AddCertificates = ({ certificates }) => {
  return (
    <div className={styles.add}>
      {certificates.length !== 0
        ? certificates.map((e, i) => <li key={i}>{e}</li>)
        : null}
    </div>
  );
};

export default AddCertificates;
