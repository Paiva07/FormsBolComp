import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../buttom/Button';
import styles from './InfoPage.module.css';

const InfoPage = ({ dados, certificates, setActive }) => {
  const navigate = useNavigate();

  function finish() {
    setActive(true);
    navigate('/');
  }

  setActive(false);
  return (
    <div className={styles.boxInfo}>
      <p>
        Nome:<span>{dados[0]}</span>
      </p>
      <p>
        NickName:<span>{dados[1]}</span>
      </p>
      <p>
        Email:<span>{dados[2]}</span>
      </p>
      <p>
        Phone:<span>{dados[3]}</span>
      </p>
      <p>
        Idade:<span>{dados[4]}</span>
      </p>
      <p>
        GitHub:<span>{dados[5]}</span>
      </p>
      <p>
        Linkdin:<span>{dados[6]}</span>
      </p>
      <div>
        Certificados:{' '}
        <ul>
          {certificates.map((e) => (
            <li>{e}</li>
          ))}
        </ul>
      </div>
      <p>
        TeamName:<span>{dados[7]}</span>
      </p>
      <p>
        Instituição:<span>{dados[8]}</span>
      </p>
      <p>
        Graduação:<span>{dados[9]}</span>
      </p>
      <Button onClick={finish} title={'Finish'} />
    </div>
  );
};

export default InfoPage;
