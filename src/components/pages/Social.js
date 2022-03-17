import React from 'react';
import BigInput from '../inputs/BigInput';
import Button from '../buttom/Button';
import { useNavigate } from 'react-router-dom';

const Social = ({ dados, setDados }) => {
  const navigate = useNavigate();
  const [git, setGit] = React.useState(null);
  const [link, setLink] = React.useState(null);

  function handleSubmit() {
    setDados([...dados, git, link]);
    if (git.length !== 0) navigate('/certificates');
  }
  console.log(dados);
  return (
    <form>
      <BigInput
        title={'GitHub *'}
        placeholder={'https://github.com/Paiva07'}
        id={'git'}
        required
        onChange={({ target }) => setGit(target.value)}
      />
      <BigInput
        title={'Linkdin'}
        placeholder={'https://www.linkedin.com/in/guilherme-paiva-7b906a218/'}
        id={'link'}
        onChange={({ target }) => setLink(target.value)}
      />
      <Button
        onClick={handleSubmit}
        title={'Next >'}
        style={{ marginTop: '100px' }}
      />
    </form>
  );
};

export default Social;
