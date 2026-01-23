import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm"; 
import "../styles/saioa.css";
const SaioaHasieraErregistroa = () => {

  const [saioArrakasta, setSaioArrakasta] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: '',
    pasahitza: ''
  });

  const [registerData, setRegisterData] = useState({
    izena: '',
    email: '',
    pasahitza: '',
    pasahitzaBerretsi: ''
  });

  const [erregistroaErakutsi, setErregistroaErakutsi] = useState(false);
  const [kargatzen, setKargatzen] = useState(false);
  const [akatsak, setAkatsak] = useState({});
  const [saioAkatsa, setSaioAkatsa] = useState('');
  const [erregistroArrakasta, setErregistroArrakasta] = useState('');

  const balidatuSaioa = () => {
    const akatsBerriak = {};

    if (!loginData.email.trim()) {
      akatsBerriak.email = 'Posta elektronikoa derrigorrezkoa da';
    } else if (!/\S+@\S+\.\S+/.test(loginData.email)) {
      akatsBerriak.email = 'Posta elektronikoa ez da baliozkoa';
    }

    if (!loginData.pasahitza) {
      akatsBerriak.pasahitza = 'Pasahitza derrigorrezkoa da';
    }

    return akatsBerriak;
  };

  const balidatuErregistroa = () => {
    const akatsBerriak = {};

    if (!registerData.izena.trim()) {
      akatsBerriak.izena = 'Izena derrigorrezkoa da';
    } else if (registerData.izena.length < 2) {
      akatsBerriak.izena = 'Izenak gutxienez 2 karaktere izan behar ditu';
    }

    if (!registerData.email.trim()) {
      akatsBerriak.email = 'Posta elektronikoa derrigorrezkoa da';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(registerData.email)) {
      akatsBerriak.email = 'Posta elektroniko baliogabea';
    }

    if (!registerData.pasahitza) {
      akatsBerriak.pasahitza = 'Pasahitza derrigorrezkoa da';
    } else if (registerData.pasahitza.length < 6) {
      akatsBerriak.pasahitza = 'Pasahitzak gutxienez 6 karaktere izan behar ditu';
    }

    if (registerData.pasahitza !== registerData.pasahitzaBerretsi) {
      akatsBerriak.pasahitzaBerretsi = 'Pasahitzak ez datoz bat';
    }

    return akatsBerriak;
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const balidazioAkatsak = balidatuSaioa();

    if (Object.keys(balidazioAkatsak).length === 0) {
      setKargatzen(true);
      setAkatsak({});
      setSaioAkatsa('');

      setTimeout(() => {
        setKargatzen(false);

        if (loginData.pasahitza.length < 6) {
          setSaioAkatsa('Kredentzial okerrak. Mesedez, saiatu berriro.');
        } else {
          login({
            email: loginData.email,
            izena: loginData.email.split("@")[0]
          });

          setSaioArrakasta(`Saioa arrakastaz hasi da! Ongi etorri, ${loginData.email}`);
        }
      }, 1500);
    } else {
      setAkatsak(balidazioAkatsak);
    }
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    const balidazioAkatsak = balidatuErregistroa();

    if (Object.keys(balidazioAkatsak).length === 0) {
      setKargatzen(true);
      setAkatsak({});

      setTimeout(() => {
        setKargatzen(false);
        setErregistroArrakasta('Kontua arrakastaz sortu da! Orain saioa hasi dezakezu.');

        setRegisterData({
          izena: '',
          email: '',
          pasahitza: '',
          pasahitzaBerretsi: ''
        });

        setTimeout(() => {
          setErregistroaErakutsi(false);
          setErregistroArrakasta('');
        }, 2000);
      }, 1500);
    } else {
      setAkatsak(balidazioAkatsak);
    }
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prev => ({ ...prev, [name]: value }));
    if (akatsak[name]) setAkatsak(prev => ({ ...prev, [name]: '' }));
  };

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterData(prev => ({ ...prev, [name]: value }));
    if (akatsak[name]) setAkatsak(prev => ({ ...prev, [name]: '' }));
  };

  const toggleForm = () => {
    setErregistroaErakutsi(!erregistroaErakutsi);
    setAkatsak({});
    setSaioAkatsa('');
    setErregistroArrakasta('');
  };

  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center saioa-hasiera-kontainerra">
      <div className="row justify-content-center w-100">
        <div className="col-12 col-md-8 col-lg-6 col-xl-5">

          <div className="shadow-lg rounded-4 overflow-hidden">
            <div className="p-4 p-md-5 formularioa-sekzioa">

              {/* Título */}
              <div className="mb-4">
                <h2 className="h1 fw-bold mb-3">
                  <i className={`bi ${erregistroaErakutsi ? 'bi-person-plus-fill' : 'bi-box-arrow-in-right'} text-primary me-2`}></i>
                  {erregistroaErakutsi ? 'Kontu berria sortu' : 'Saioa hasi'}
                </h2>
                <p className="text-muted mb-0">
                  {erregistroaErakutsi
                    ? 'Sortu zure kontua eta hasi gure zerbitzuak erabiltzen'
                    : 'Sartu zure kredentzialak plataforman sartzeko'}
                </p>
              </div>

              {/* Alertas */}
              {saioAkatsa && (
                <div className="alert alert-danger alert-dismissible fade show shadow-sm mb-4 animate-fade-in" role="alert">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-exclamation-triangle-fill fs-4 me-3"></i>
                    <div>
                      <h4 className="alert-heading mb-1">Errorea!</h4>
                      <p className="mb-0">{saioAkatsa}</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => {
                      setSaioArrakasta('');
                      navigate('/');
                    }}
                  ></button>
                </div>
              )}

              {saioArrakasta && (
                <div className="alert alert-success alert-dismissible fade show shadow-sm mb-4 animate-fade-in" role="alert">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-check-circle-fill fs-4 me-3"></i>
                    <div>
                      <h4 className="alert-heading mb-1">Ongi etorri!</h4>
                      <p className="mb-0">{saioArrakasta}</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => {
                      setSaioArrakasta('');
                      navigate('/');
                    }}
                  ></button>
                </div>
              )}

              {erregistroArrakasta && (
                <div className="alert alert-success alert-dismissible fade show shadow-sm mb-4 animate-fade-in" role="alert">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-check-circle-fill fs-4 me-3"></i>
                    <div>
                      <h4 className="alert-heading mb-1">Ongi egin duzu!</h4>
                      <p className="mb-0">{erregistroArrakasta}</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setErregistroArrakasta('')}
                  ></button>
                </div>
              )}

              {/* Formularios */}
              {!erregistroaErakutsi ? (
                <LoginForm
                  loginData={loginData}
                  akatsak={akatsak}
                  kargatzen={kargatzen}
                  handleLoginChange={handleLoginChange}
                  handleLoginSubmit={handleLoginSubmit}
                />
              ) : (
                <RegisterForm
                  registerData={registerData}
                  akatsak={akatsak}
                  kargatzen={kargatzen}
                  handleRegisterChange={handleRegisterChange}
                  handleRegisterSubmit={handleRegisterSubmit}
                />
              )}

              {/* Toggle */}
              <div className="text-center mt-4 pt-3 border-top">
                <p className="mb-0 text-muted">
                  {erregistroaErakutsi ? 'Dagoeneko kontua duzu?' : 'Ez duzu konturik?'}
                  <button
                    type="button"
                    className="btn btn-link fw-bold text-decoration-none p-0 ms-1"
                    onClick={toggleForm}
                  >
                    {erregistroaErakutsi ? 'Saioa hasi' : 'Kontua sortu'}
                  </button>
                </p>
              </div>

              {/* Info */}
              <div className="mt-4 pt-2 text-center">
                <div className="d-flex align-items-center justify-content-center text-muted small mb-2">
                  <i className="bi bi-headset me-2"></i>
                  <span>Zalantzarik? <a href="#" className="text-decoration-none">Deitu guri: 943 89 92 92</a></span>
                </div>

                <div className="d-flex align-items-center justify-content-center text-muted small">
                  <i className="bi bi-shield-check me-2"></i>
                  <span>Zure datuak segurtasunez gordetzen ditugu</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SaioaHasieraErregistroa;
