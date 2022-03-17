import React from 'react';
import '../../App.css';
import { useNavigate } from 'react-router-dom';
import Button from '../buttom/Button';
import BigInput from '../inputs/BigInput';
import InputCheck from '../inputs/InputCheck';
import MediumInput from '../inputs/MediumInput';
import SmallInput from '../inputs/SmallInput';

const Basic = ({ dados, setDados }) => {
  const navigate = useNavigate();
  const [name, setName] = React.useState(null);
  const [nick, setNick] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  const [phone, setPhone] = React.useState(null);
  const [day, setDay] = React.useState(null);
  const [month, setMonth] = React.useState(null);
  const [year, setYear] = React.useState(null);
  const [age, setAge] = React.useState(null);

  function handleSubmit() {
    setDados([...dados, name, nick, email, phone, age]);
    if (name.length !== 0 && email.length !== 0 && age.length !== 0) {
      navigate('/social');
    }
  }
  function caclAge() {
    let dataAtual = new Date();

    let anoAtual = dataAtual.getFullYear();
    let mesAtual = dataAtual.getMonth() + 1;
    let diaAtual = dataAtual.getDay();

    let idade = anoAtual - year;
    if (mesAtual < month) {
      idade--;
    } else {
      if (mesAtual == month) {
        if (diaAtual < day) {
          idade--;
        }
      }
    }
    setAge(idade);
  }
  return (
    <form>
      <BigInput
        title={'Full Name *'}
        type={'text'}
        id={'nome'}
        placeholder={'Foo Bar'}
        required
        onChange={({ target }) => setName(target.value)}
      />
      <BigInput
        title={'Nick Name'}
        type={'text'}
        id={'nickname'}
        placeholder={'Juanito'}
        onChange={({ target }) => setNick(target.value)}
      />
      <div className="email-phone">
        <MediumInput
          title={'Email *'}
          type={'email'}
          id={'email'}
          placeholder={'foo@bar.com'}
          required
          onChange={({ target }) => setEmail(target.value)}
        />
        <div className="space"></div>
        <MediumInput
          title={'Phone'}
          type={'phone'}
          id={'phone'}
          placeholder={'(xx) xxxx-xxxx'}
          onChange={({ target }) => setPhone(target.value)}
        />
      </div>
      <div className="birthBox">
        <SmallInput
          title="Day"
          type="number"
          id="Day"
          placeholder={'07'}
          onChange={({ target }) => setDay(target.value)}
          onBlur={caclAge}
          required
        />
        <SmallInput
          title="Month"
          type="number"
          id="Month"
          placeholder={'04'}
          onChange={({ target }) => setMonth(target.value)}
          onBlur={caclAge}
          required
        />
        <SmallInput
          title="Year"
          type="number"
          id="Year"
          placeholder={'1995'}
          onChange={({ target }) => setYear(target.value)}
          onBlur={caclAge}
          required
        />
        <SmallInput
          title="Age"
          type="number"
          id="Age"
          placeholder={'26'}
          value={age}
          required
        />
      </div>
      <InputCheck required />
      <Button title={'Next >'} onClick={handleSubmit} />
    </form>
  );
};

export default Basic;
