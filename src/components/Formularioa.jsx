import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Formularioa = () => {
  // Estados para el formulario
  const [datuak, setDatuak] = useState({
    izena: '',
    postaElektronikoa: '',
    mezua: ''
  });
  
  const [bidalita, setBidalita] = useState(false);
  const [bidaltzen, setBidaltzen] = useState(false);
  const [erroreak, setErroreak] = useState({});

  const aldaketakKudeatu = (e) => {
    const { name, value } = e.target;
    setDatuak({
      ...datuak,
      [name]: value
    });
    
    // Errorea kendu eremua editatzen denean
    if (erroreak[name]) {
      setErroreak({
        ...erroreak,
        [name]: null
      });
    }
  };

  const balidatu = () => {
    const erroreBerriak = {};
    
    if (!datuak.izena.trim()) {
      erroreBerriak.izena = 'Izena derrigorrezkoa da';
    } else if (datuak.izena.length < 2) {
      erroreBerriak.izena = 'Izenak gutxienez 2 karaktere izan behar ditu';
    }
    
    if (!datuak.postaElektronikoa.trim()) {
      erroreBerriak.postaElektronikoa = 'Posta elektronikoa derrigorrezkoa da';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(datuak.postaElektronikoa)) {
      erroreBerriak.postaElektronikoa = 'Posta elektroniko baliogabea';
    }
    
    if (!datuak.mezua.trim()) {
      erroreBerriak.mezua = 'Mezua derrigorrezkoa da';
    } else if (datuak.mezua.length < 10) {
      erroreBerriak.mezua = 'Mezuak gutxienez 10 karaktere izan behar ditu';
    }
    
    setErroreak(erroreBerriak);
    return Object.keys(erroreBerriak).length === 0;
  };

  const bidali = async (e) => {
    e.preventDefault();
    
    if (!balidatu()) {
      return;
    }
    
    setBidaltzen(true);
    
    try {
      // Simulatu backend bidalketa
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Formularioa bidalita:', datuak);
      
      setBidalita(true);
      setDatuak({
        izena: '',
        postaElektronikoa: '',
        mezua: ''
      });
      setErroreak({});
      
      // 5 segundotan mezua ezkutatu
      setTimeout(() => {
        setBidalita(false);
      }, 5000);
      
    } catch (error) {
      console.error('Errorea bidaltzean:', error);
    } finally {
      setBidaltzen(false);
    }
  };

  return (
    <div className="container-fluid py-5 harremanetarako-container">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10 col-xl-8">
         
          <div className="row g-0 shadow-lg rounded-4 overflow-hidden mb-5">
            {/* Sección de Información de Contacto */}
            <div className="col-lg-6 p-4 p-lg-5 informazioa-sekzioa">
              <div className="mb-4 mb-lg-5">
                <h2 className="h1 fw-bold mb-4">
                  <span className="text-primary">Kontaktu</span> Informazioa
                </h2>
                <p className="text-muted">
                  Gurekin harremanetan jarri zaitezke honako bideetatik. Zure kontsulta edo iradokizunak jasotzeko prest gaude.
                </p>
              </div>
              
              {/* Separador visual */}
              <div className="d-flex align-items-center mb-5">
                <div className="flex-grow-1 border-top"></div>
                <div className="px-3">
                  <i className="bi bi-geo-alt-fill text-primary fs-5"></i>
                </div>
                <div className="flex-grow-1 border-top"></div>
              </div>

              {/* Elementos de contacto con animaciones */}
              <div className="kontaktu-elementuak">
                {/* EMAILA */}
                <div className="kontaktu-elementua mb-4 animate-on-hover">
                  <div className="d-flex align-items-start">
                    <div className="kontaktu-ikonoa bg-primary bg-gradient rounded-circle p-3 me-4 text-white shadow">
                      <i className="bi bi-envelope-fill fs-4"></i>
                    </div>
                    <div className="kontaktu-testua">
                      <h4 className="h5 fw-semibold mb-2">Posta elektronikoa</h4>
                      <p className="text-muted mb-0">365scorebusiness@gmail.com</p>
                    </div>
                  </div>
                </div>
                
                {/* HELBIDEA */}
                <div className="kontaktu-elementua mb-4 animate-on-hover">
                  <div className="d-flex align-items-start">
                    <div className="kontaktu-ikonoa bg-primary bg-gradient rounded-circle p-3 me-4 text-white shadow">
                      <i className="bi bi-geo-alt-fill fs-4"></i>
                    </div>
                    <div className="kontaktu-testua">
                      <h4 className="h5 fw-semibold mb-2">Helbidea</h4>
                      <p className="text-muted mb-0">C. Jose Miguel Barandiaran, 10-12, 20013 Zubiri, Gipuzkoa</p>
                    </div>
                  </div>
                </div>
                
                {/* TELEFONOAK */}
                <div className="kontaktu-elementua mb-4 animate-on-hover">
                  <div className="d-flex align-items-start">
                    <div className="kontaktu-ikonoa bg-primary bg-gradient rounded-circle p-3 me-4 text-white shadow">
                      <i className="bi bi-telephone-fill fs-4"></i>
                    </div>
                    <div className="kontaktu-testua">
                      <h4 className="h5 fw-semibold mb-2">Telefonoa</h4>
                      <p className="text-muted mb-0">943 89 92 92</p>
                    </div>
                  </div>
                </div>
                
                {/* ORDUAK */}
                <div className="kontaktu-elementua mb-4 animate-on-hover">
                  <div className="d-flex align-items-start">
                    <div className="kontaktu-ikonoa bg-primary bg-gradient rounded-circle p-3 me-4 text-white shadow">
                      <i className="bi bi-clock-fill fs-4"></i>
                    </div>
                    <div className="kontaktu-testua">
                      <h4 className="h5 fw-semibold mb-2">Lan orduak</h4>
                      <p className="text-muted mb-0">Asteazkenetik Ostiralera<br />08:00 - 14:00</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Información adicional */}
              <div className="mt-5 p-4 bg-light bg-gradient rounded-3 border">
                <h5 className="fw-semibold mb-3">
                  <i className="bi bi-lightning-charge-fill text-primary me-2"></i>
                  Erantzun azkarra
                </h5>
                <p className="mb-0 text-muted">
                  Gure helburua 24 ordu baino gutxiagoan erantzutea da. Zure mezua jasotakoan berarekin harremanetan jarriko gara.
                </p>
              </div>
              
              <div className="mt-4">
                <div className="d-flex align-items-center">
                  <div className="me-3">
                    <i className="bi bi-shield-check text-primary fs-3"></i>
                  </div>
                  <div>
                    <h6 className="fw-semibold mb-1">Datuen babesa</h6>
                    <p className="text-muted small mb-0">Zure datuak segurtasunez gordetzen ditugu</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Separador vertical en desktop */}
            <div className="col-lg-1 d-none d-lg-flex align-items-center justify-content-center separador-vertical">
              <div className="vr"></div>
            </div>

            {/* Separador horizontal en mobile */}
            <div className="col-12 d-lg-none my-4">
              <div className="border-top"></div>
            </div>

            {/* Sección del Formulario */}
            <div className="col-lg-5 p-4 p-lg-5 formularioa-sekzioa">
              <div className="mb-4">
                <h2 className="h1 fw-bold mb-3">
                  <i className="bi bi-pencil-square text-primary me-2"></i>
                  Bidali <span className="text-primary">Mezua</span>
                </h2>
                <p className="text-muted mb-0">
                  Mesedez, bete beheko formularioa eta gurekin harremanetan jarri zaitezke.
                </p>
              </div>
              
              {bidalita && (
                <div className="alert alert-success alert-dismissible fade show shadow-sm mb-4 animate-fade-in" role="alert">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-check-circle-fill fs-4 me-3"></i>
                    <div>
                      <h4 className="alert-heading mb-1">Eskerrik asko!</h4>
                      <p className="mb-0">Zure mezua ondo bidali da. Lasterren zurekin harremanduko gara.</p>
                    </div>
                  </div>
                  <button 
                    type="button" 
                    className="btn-close" 
                    onClick={() => setBidalita(false)}
                    aria-label="Itxi"
                  ></button>
                </div>
              )}
              
              <form onSubmit={bidali} className="formularioa-estiloa" noValidate>
                {/* IZENA */}
                <div className="form-group mb-4">
                  <label htmlFor="izena" className="form-label fw-semibold">
                    <i className="bi bi-person-fill text-primary me-2"></i>
                    Izena *
                  </label>
                  <input
                    type="text"
                    id="izena"
                    name="izena"
                    value={datuak.izena}
                    onChange={aldaketakKudeatu}
                    placeholder="Sartu zure izena"
                    className={`form-control form-control-lg ${erroreak.izena ? 'is-invalid' : ''}`}
                    disabled={bidaltzen}
                  />
                  {erroreak.izena && (
                    <div className="invalid-feedback d-block animate-shake">
                      <i className="bi bi-exclamation-circle me-1"></i>
                      {erroreak.izena}
                    </div>
                  )}
                </div>
                
                {/* POSTA ELEKTRONIKOA */}
                <div className="form-group mb-4">
                  <label htmlFor="postaElektronikoa" className="form-label fw-semibold">
                    <i className="bi bi-envelope-fill text-primary me-2"></i>
                    Posta elektronikoa *
                  </label>
                  <input
                    type="email"
                    id="postaElektronikoa"
                    name="postaElektronikoa"
                    value={datuak.postaElektronikoa}
                    onChange={aldaketakKudeatu}
                    placeholder="Sartu zure posta elektronikoa"
                    className={`form-control form-control-lg ${erroreak.postaElektronikoa ? 'is-invalid' : ''}`}
                    disabled={bidaltzen}
                  />
                  {erroreak.postaElektronikoa && (
                    <div className="invalid-feedback d-block animate-shake">
                      <i className="bi bi-exclamation-circle me-1"></i>
                      {erroreak.postaElektronikoa}
                    </div>
                  )}
                </div>
                
                {/* MEZUA */}
                <div className="form-group mb-5">
                  <label htmlFor="mezua" className="form-label fw-semibold">
                    <i className="bi bi-chat-left-text-fill text-primary me-2"></i>
                    Mezua *
                  </label>
                  <textarea
                    id="mezua"
                    name="mezua"
                    value={datuak.mezua}
                    onChange={aldaketakKudeatu}
                    placeholder="Idatzi hemen zure mezua..."
                    className={`form-control form-control-lg ${erroreak.mezua ? 'is-invalid' : ''}`}
                    disabled={bidaltzen}
                    rows="5"
                  />
                  {erroreak.mezua && (
                    <div className="invalid-feedback d-block animate-shake">
                      <i className="bi bi-exclamation-circle me-1"></i>
                      {erroreak.mezua}
                    </div>
                  )}
                  <div className="form-text mt-2">
                    <i className="bi bi-info-circle me-1"></i>
                    Gutxienez 10 karaktere idatzi behar dituzu.
                  </div>
                </div>
                
                {/* BIDALI BOTOIA */}
                <button
                  type="submit"
                  className="btn btn-primary btn-lg w-100 py-3 fw-bold shadow-sm mb-3 animate-btn"
                  disabled={bidaltzen}
                >
                  {bidaltzen ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                      Bidaltzen...
                    </>
                  ) : (
                    <>
                      <i className="bi bi-send-fill me-2"></i>
                      Bidali mezua
                    </>
                  )}
                </button>
                
                <div className="text-center text-muted">
                  <small>
                    <i className="bi bi-asterisk text-primary me-1"></i>
                    eremuak derrigorrezkoak dira
                  </small>
                </div>
              </form>
            </div>
          </div>

          {/* Pie de página */}
          <div className="text-center mt-4 text-muted">
            <p className="mb-0">
              <i className="bi bi-c-circle me-1"></i>
              2026 Harremanetarako Orria. Eskubide guztiak erreserbatuak.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .harremanetarako-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #f5f7fa 0%, #e4edf5 100%);
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        .informazioa-sekzioa {
          background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
          border-right: 1px solid #eaeaea;
        }
        
        .formularioa-sekzioa {
          background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
        }
        
        .separador-vertical {
          background-color: #f8f9fa;
        }
        
        .kontaktu-ikonoa {
          min-width: 56px;
          min-height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.3s ease;
        }
        
        .kontaktu-elementua:hover .kontaktu-ikonoa {
          transform: translateY(-5px) scale(1.05);
          box-shadow: 0 10px 20px rgba(13, 110, 253, 0.2) !important;
        }
        
        .kontaktu-elementua {
          transition: transform 0.3s ease;
        }
        
        .kontaktu-elementua:hover {
          transform: translateX(5px);
        }
        
        /* Animaciones */
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
          20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
        
        .fade-in {
          animation: fadeIn 0.8s ease-out;
        }
        
        .animate-on-hover {
          transition: all 0.3s ease;
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
        }
        
        .btn-primary:hover:not(:disabled) {
          background: linear-gradient(135deg, #0b5ed7 0%, #0a58ca 100%);
        }
        
        .alert-success {
          border-radius: 0.75rem;
          border: none;
          border-left: 4px solid #198754;
        }
        
        .shadow-lg {
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1) !important;
        }
        
        .rounded-4 {
          border-radius: 1.5rem !important;
        }
        
        /* Responsive adjustments */
        @media (max-width: 992px) {
          .informazioa-sekzioa {
            border-right: none;
            border-bottom: 1px solid #eaeaea;
          }
          
          .harremanetarako-container {
            padding-top: 2rem;
            padding-bottom: 2rem;
          }
        }
        
        @media (max-width: 768px) {
          .display-4 {
            font-size: 2.5rem;
          }
          
          .h1 {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Formularioa;