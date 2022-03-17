import React from 'react';
import BigInput from '../inputs/BigInput';
import Button from '../buttom/Button';
import AddCertificates from '../certificates/AddCertificates';
import { useNavigate } from 'react-router-dom';

const Certificates = ({ dados, setDados, certificates, setCertificates }) => {
  const navigate = useNavigate();
  const [team, setTeam] = React.useState(null);
  const [institution, setInstitution] = React.useState(null);
  const [graduation, setGraduation] = React.useState(null);
  const [ativo, setAtivo] = React.useState(false);
  const [certificate, setCertificate] = React.useState('');

  function handleSubmit() {
    setDados([...dados, team, institution, graduation]);
    if (graduation.length !== 0 && institution.lenth !== 0 && team.length !== 0)
      navigate('/info');
  }

  function addCertificates(e) {
    e.preventDefault();
    if (certificates.length < 5) {
      if (certificate.length !== 0) {
        setCertificates([...certificates, certificate]);
        if (ativo === false) setAtivo(true);
      }
    } else {
      alert('São aceitos no máximo 5 certificados');
    }
  }
  console.log(certificates);
  return (
    <form>
      <BigInput
        title={'Certificates'}
        id={'Cerficates'}
        placeholder="https://www.notion.so/React-Router-afbba3a041a0452989e044f2cacd00fa"
        onChange={({ target }) => setCertificate(target.value)}
      />
      {ativo ? <AddCertificates certificates={certificates} /> : null}
      <Button
        onClick={addCertificates}
        title={'Add+'}
        style={{ marginTop: '50px' }}
        required
      />
      <BigInput
        title={'TeamName *'}
        id={'Team'}
        placeholder="Compass.uol"
        required
        onChange={({ target }) => setTeam(target.value)}
      />
      <BigInput
        title={'Institution *'}
        id={'Inst'}
        placeholder="Senac"
        required
        onChange={({ target }) => setInstitution(target.value)}
      />
      <BigInput
        title={'Graduation *'}
        id={'Graduation'}
        placeholder="Analise e Desenvolvimento de Sistemas"
        onChange={({ target }) => setGraduation(target.value)}
        required
      />
      <Button
        onClick={handleSubmit}
        title={'Finish'}
        style={{ marginTop: '100px' }}
      />
    </form>
  );
};

export default Certificates;
