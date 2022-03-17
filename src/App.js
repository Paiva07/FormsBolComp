import React from 'react';
import Header from './components/header/Header';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Basic from './components/pages/Basic';
import Social from './components/pages/Social';
import Certificates from './components/pages/Certificates';
import InfoPage from './components/pages/InfoPage';
import ProtectedRoute from './components/pages/ProtectedRouter';

function App() {
  const [dados, setDados] = React.useState([]);
  const [certificates, setCertificates] = React.useState([]);
  const [active, setActive] = React.useState(true);
  return (
    <div className="container">
      <BrowserRouter>
        {active && <Header title={'Team Sing Up'} />}
        <Routes>
          <Route
            path="/"
            element={<Basic dados={dados} setDados={setDados} />}
          />
          <Route
            path="social"
            element={
              <ProtectedRoute dados={dados}>
                {' '}
                <Social dados={dados} setDados={setDados} />{' '}
              </ProtectedRoute>
            }
          />

          <Route
            path="certificates"
            element={
              <ProtectedRoute dados={dados}>
                <Certificates
                  dados={dados}
                  setDados={setDados}
                  certificates={certificates}
                  setCertificates={setCertificates}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="info"
            element={
              <InfoPage
                dados={dados}
                setDados={setDados}
                certificates={certificates}
                setCertificates={setCertificates}
                setActive={setActive}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
