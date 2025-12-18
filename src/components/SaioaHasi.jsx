import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const SaioaHasieraErregistroa = () => {
  // Egoerak saio hasierarako formularioa
  const [loginData, setLoginData] = useState({
    email: '',
    pasahitza: ''
  });
  
  // Egoerak erregistrorako formularioa
  const [registerData, setRegisterData] = useState({
    izena: '',
    email: '',
    pasahitza: '',
    pasahitzaBerretsi: ''
  });
  
  // Egoera orokorrak
  const [erregistroaErakutsi, setErregistroaErakutsi] = useState(false);
  const [kargatzen, setKargatzen] = useState(false);
  const [akatsak, setAkatsak] = useState({});
  const [saioAkatsa, setSaioAkatsa] = useState('');
  const [erregistroArrakasta, setErregistroArrakasta] = useState('');

  // Saio hasierarako formularioaren balidazioak
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

  // Erregistrorako formularioaren balidazioak
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

  // Saio hasierarako formularioaren bidalketa kudeatu
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const balidazioAkatsak = balidatuSaioa();
    
    if (Object.keys(balidazioAkatsak).length === 0) {
      setKargatzen(true);
      setAkatsak({});
      setSaioAkatsa('');
      
      // API eskaeraren simulazioa
      setTimeout(() => {
        setKargatzen(false);
        // Kredentzial okerren simulazioa
        if (loginData.pasahitza.length < 6) {
          setSaioAkatsa('Kredentzial okerrak. Mesedez, saiatu berriro.');
        } else {
          alert(`Saioa arrakastaz hasi da!\nOngi etorri, ${loginData.email}`);
          // Hemen normalean erabiltzailea birbideratuko genuke edo egoera globala eguneratuko
        }
      }, 1500);
    } else {
      setAkatsak(balidazioAkatsak);
    }
  };

  // Erregistrorako formularioaren bidalketa kudeatu
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    const balidazioAkatsak = balidatuErregistroa();
    
    if (Object.keys(balidazioAkatsak).length === 0) {
      setKargatzen(true);
      setAkatsak({});
      
      // API eskaeraren simulazioa
      setTimeout(() => {
        setKargatzen(false);
        setErregistroArrakasta('Kontua arrakastaz sortu da! Orain saioa hasi dezakezu.');
        
        // Formularioa berrezarri erregistro arrakastatsuaren ondoren
        setRegisterData({
          izena: '',
          email: '',
          pasahitza: '',
          pasahitzaBerretsi: ''
        });
        
        // Saio hasierarako formulariora aldatu 2 segundoren ondoren
        setTimeout(() => {
          setErregistroaErakutsi(false);
          setErregistroArrakasta('');
        }, 2000);
      }, 1500);
    } else {
      setAkatsak(balidazioAkatsak);
    }
  };

  // Input-etan aldaketak kudeatu
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Akats espezifikoa garbitu erabiltzailea idazten hasten denean
    if (akatsak[name]) {
      setAkatsak(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Akats espezifikoa garbitu erabiltzailea idazten hasten denean
    if (akatsak[name]) {
      setAkatsak(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Saioa hasi eta erregistro artean aldatu
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
            {/* Formularioaren sekzioa */}
            <div className="p-4 p-md-5 formularioa-sekzioa">
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
                    onClick={() => setSaioAkatsa('')}
                    aria-label="Itxi"
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
                    aria-label="Itxi"
                  ></button>
                </div>
              )}
              
              {/* Saio Hasierarako Formularioa */}
              {!erregistroaErakutsi ? (
                <form onSubmit={handleLoginSubmit} className="formularioa-estiloa" noValidate>
                  {/* POSTA ELEKTRONIKOA */}
                  <div className="form-group mb-4">
                    <label htmlFor="loginEmail" className="form-label fw-semibold">
                      <i className="bi bi-envelope-fill text-primary me-2"></i>
                      Posta elektronikoa *
                    </label>
                    <input
                      type="email"
                      id="loginEmail"
                      name="email"
                      value={loginData.email}
                      onChange={handleLoginChange}
                      placeholder="izena@adibidea.com"
                      className={`form-control form-control-lg ${akatsak.email ? 'is-invalid' : ''}`}
                      disabled={kargatzen}
                    />
                    {akatsak.email && (
                      <div className="invalid-feedback d-block animate-shake">
                        <i className="bi bi-exclamation-circle me-1"></i>
                        {akatsak.email}
                      </div>
                    )}
                  </div>
                  
                  {/* PASAHITZA */}
                  <div className="form-group mb-4">
                    <label htmlFor="loginPassword" className="form-label fw-semibold">
                      <i className="bi bi-key-fill text-primary me-2"></i>
                      Pasahitza *
                    </label>
                    <input
                      type="password"
                      id="loginPassword"
                      name="pasahitza"
                      value={loginData.pasahitza}
                      onChange={handleLoginChange}
                      placeholder="••••••••"
                      className={`form-control form-control-lg ${akatsak.pasahitza ? 'is-invalid' : ''}`}
                      disabled={kargatzen}
                    />
                    {akatsak.pasahitza && (
                      <div className="invalid-feedback d-block animate-shake">
                        <i className="bi bi-exclamation-circle me-1"></i>
                        {akatsak.pasahitza}
                      </div>
                    )}
                    <div className="form-text mt-2">
                      <i className="bi bi-info-circle me-1"></i>
                      Pasahitza ahaztu duzu? <a href="#" className="text-decoration-none">Berrezarri</a>
                    </div>
                  </div>
                  
                  {/* GOGORATU NAU */}
                  <div className="form-check mb-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="rememberMe"
                    />
                    <label className="form-check-label text-muted" htmlFor="rememberMe">
                      Gogoan izan nazazu ordenagailu honetan
                    </label>
                  </div>
                  
                  {/* SAIOA HASI BOTOIA */}
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg w-100 py-3 fw-bold shadow-sm mb-3 animate-btn"
                    disabled={kargatzen}
                  >
                    {kargatzen ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                        Saioa hasten...
                      </>
                    ) : (
                      <>
                        <i className="bi bi-box-arrow-in-right me-2"></i>
                        Saioa hasi
                      </>
                    )}
                  </button>
                  
                  <div className="text-center text-muted mb-4">
                    <small>
                      <i className="bi bi-asterisk text-primary me-1"></i>
                      eremuak derrigorrezkoak dira
                    </small>
                  </div>
                </form>
              ) : (
                /* Erregistrorako Formularioa */
                <form onSubmit={handleRegisterSubmit} className="formularioa-estiloa" noValidate>
                  {/* IZENA */}
                  <div className="form-group mb-4">
                    <label htmlFor="registerName" className="form-label fw-semibold">
                      <i className="bi bi-person-fill text-primary me-2"></i>
                      Izen abizenak *
                    </label>
                    <input
                      type="text"
                      id="registerName"
                      name="izena"
                      value={registerData.izena}
                      onChange={handleRegisterChange}
                      placeholder="Sartu zure izen abizenak"
                      className={`form-control form-control-lg ${akatsak.izena ? 'is-invalid' : ''}`}
                      disabled={kargatzen}
                    />
                    {akatsak.izena && (
                      <div className="invalid-feedback d-block animate-shake">
                        <i className="bi bi-exclamation-circle me-1"></i>
                        {akatsak.izena}
                      </div>
                    )}
                  </div>
                  
                  {/* POSTA ELEKTRONIKOA */}
                  <div className="form-group mb-4">
                    <label htmlFor="registerEmail" className="form-label fw-semibold">
                      <i className="bi bi-envelope-fill text-primary me-2"></i>
                      Posta elektronikoa *
                    </label>
                    <input
                      type="email"
                      id="registerEmail"
                      name="email"
                      value={registerData.email}
                      onChange={handleRegisterChange}
                      placeholder="izena@adibidea.com"
                      className={`form-control form-control-lg ${akatsak.email ? 'is-invalid' : ''}`}
                      disabled={kargatzen}
                    />
                    {akatsak.email && (
                      <div className="invalid-feedback d-block animate-shake">
                        <i className="bi bi-exclamation-circle me-1"></i>
                        {akatsak.email}
                      </div>
                    )}
                  </div>
                  
                  {/* PASAHITZA */}
                  <div className="form-group mb-4">
                    <label htmlFor="registerPassword" className="form-label fw-semibold">
                      <i className="bi bi-key-fill text-primary me-2"></i>
                      Pasahitza *
                    </label>
                    <input
                      type="password"
                      id="registerPassword"
                      name="pasahitza"
                      value={registerData.pasahitza}
                      onChange={handleRegisterChange}
                      placeholder="Gutxienez 6 karaktere"
                      className={`form-control form-control-lg ${akatsak.pasahitza ? 'is-invalid' : ''}`}
                      disabled={kargatzen}
                    />
                    {akatsak.pasahitza && (
                      <div className="invalid-feedback d-block animate-shake">
                        <i className="bi bi-exclamation-circle me-1"></i>
                        {akatsak.pasahitza}
                      </div>
                    )}
                    <div className="form-text mt-2">
                      <i className="bi bi-info-circle me-1"></i>
                      Pasahitzak gutxienez 6 karaktere izan behar ditu
                    </div>
                  </div>
                  
                  {/* PASAHITZA BERRETSI */}
                  <div className="form-group mb-4">
                    <label htmlFor="registerConfirmPassword" className="form-label fw-semibold">
                      <i className="bi bi-key-fill text-primary me-2"></i>
                      Pasahitza berretsi *
                    </label>
                    <input
                      type="password"
                      id="registerConfirmPassword"
                      name="pasahitzaBerretsi"
                      value={registerData.pasahitzaBerretsi}
                      onChange={handleRegisterChange}
                      placeholder="Errepikatu pasahitza"
                      className={`form-control form-control-lg ${akatsak.pasahitzaBerretsi ? 'is-invalid' : ''}`}
                      disabled={kargatzen}
                    />
                    {akatsak.pasahitzaBerretsi && (
                      <div className="invalid-feedback d-block animate-shake">
                        <i className="bi bi-exclamation-circle me-1"></i>
                        {akatsak.pasahitzaBerretsi}
                      </div>
                    )}
                  </div>
                  
                  {/* BALDINTZAK */}
                  <div className="form-check mb-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="terms"
                      required
                    />
                    <label className="form-check-label text-muted" htmlFor="terms">
                      Onartzen ditut{' '}
                      <a href="#" className="text-decoration-none">Erabilera Baldintzak</a>
                      {' '}eta{' '}
                      <a href="#" className="text-decoration-none">Pribatutasun Politika</a>
                    </label>
                  </div>
                  
                  {/* KONTUA SORTU BOTOIA */}
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg w-100 py-3 fw-bold shadow-sm mb-3 animate-btn"
                    disabled={kargatzen}
                  >
                    {kargatzen ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                        Kontua sortzen...
                      </>
                    ) : (
                      <>
                        <i className="bi bi-person-plus-fill me-2"></i>
                        Kontua sortu
                      </>
                    )}
                  </button>
                </form>
              )}
              
              {/* Lotura saioa hasi eta erregistro artean aldatzeko */}
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
              
              {/* Harremanetarako informazioa */}
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

          {/* Pie de página */}
          
        </div>
      </div>

      <style jsx>{`
        .saioa-hasiera-kontainerra {
          min-height: 100vh;
          background: linear-gradient(135deg, #f5f7fa 0%, #e4edf5 100%);
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          padding-top: 2rem;
          padding-bottom: 2rem;
        }
        
        .formularioa-sekzioa {
          background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
          border-radius: 1.5rem !important;
        }
        
        /* Animazioak */
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
          20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out;
        }
        
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
        
        .animate-btn {
          transition: all 0.3s ease;
        }
        
        .animate-btn:hover:not(:disabled) {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(13, 110, 253, 0.3) !important;
        }
        
        .form-control, .form-control-lg {
          border-radius: 0.75rem;
          border: 1px solid #dee2e6;
          transition: all 0.3s ease;
          padding: 0.75rem 1rem;
          font-size: 1rem;
        }
        
        .form-control:focus {
          border-color: #0d6efd;
          box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.15);
          transform: translateY(-2px);
        }
        
        .form-control.is-invalid {
          border-color: #dc3545;
        }
        
        .form-control.is-invalid:focus {
          box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.15);
        }
        
        .btn-primary {
          background: linear-gradient(135deg, #0d6efd 0%, #0b5ed7 100%);
          border: none;
          border-radius: 0.75rem;
          transition: all 0.3s ease;
          font-size: 1.1rem;
        }
        
        .btn-primary:hover:not(:disabled) {
          background: linear-gradient(135deg, #0b5ed7 0%, #0a58ca 100%);
        }
        
        .alert-success {
          border-radius: 0.75rem;
          border: none;
          border-left: 4px solid #198754;
        }
        
        .alert-danger {
          border-radius: 0.75rem;
          border: none;
          border-left: 4px solid #dc3545;
        }
        
        .shadow-lg {
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1) !important;
        }
        
        .rounded-4 {
          border-radius: 1.5rem !important;
        }
        
        /* Responsive doikuntzak */
        @media (max-width: 768px) {
          .h1 {
            font-size: 2rem;
          }
          
          .p-4 {
            padding: 1.5rem !important;
          }
          
          .p-md-5 {
            padding: 2rem !important;
          }
        }
        
        @media (max-width: 576px) {
          .h1 {
            font-size: 1.75rem;
          }
          
          .p-4 {
            padding: 1rem !important;
          }
          
          .btn-lg {
            padding: 0.75rem 1.5rem;
            font-size: 1rem;
          }
          
          .col-12 {
            padding-left: 15px;
            padding-right: 15px;
          }
        }
      `}</style>
    </div>
  );
};

export default SaioaHasieraErregistroa;