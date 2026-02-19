import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Panel() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [active, setActive] = useState("perfil");
  const [sidebarOpen, setSidebarOpen] = useState(false);


  const [aurreikuspenak, setAurreikuspenak] = useState([
    { id: 1, partida: "Real Sociedad 2 - 1 Athletic", data: "2024/02/10" },
    { id: 2, partida: "Barcelona 3 - 0 Girona", data: "2024/02/12" },
  ]);
  const [newPred, setNewPred] = useState("");

  const handleLogout = () => {
    logout();
    navigate("/");
  };


  const addAurreikuspena = (e) => {
    e.preventDefault();
    if (!newPred.trim()) return;
    const item = {
      id: Date.now(),
      partida: newPred,
      data: new Date().toLocaleDateString(),
    };
    setAurreikuspenak([...aurreikuspenak, item]);
    setNewPred("");
  };

  const deleteAurreikuspena = (id) => {
    setAurreikuspenak(aurreikuspenak.filter((a) => a.id !== id));
  };


  const cardStyle = {
    borderRadius: "20px",
    border: "none",
    boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
    background: "#ffffff",
    transition: "transform 0.3s ease",
  };

  return (
    <div className="container-fluid bg-light min-vh-100 p-0">
   
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css" />

      <div className="row g-0">
        

        <aside className={`col-md-3 col-lg-2 bg-white border-end vh-100 sticky-top ${sidebarOpen ? "d-block" : "d-none d-md-block"}`}>
          <div className="p-4">
            <div className="text-center mb-4">
              <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-2" style={{width: "60px", height: "60px"}}>
                <i className="bi bi-person-fill fs-2"></i>
              </div>
              <h5 className="fw-bold mb-0">{user?.izena || "Erabiltzailea"}</h5>
              <small className="text-muted text-uppercase fw-bold" style={{fontSize: '10px'}}>Kide gunea</small>
            </div>

            <nav className="nav flex-column gap-2">
              {[
                { id: "perfil", label: "Nire profila", icon: "bi-person" },
                { id: "aurreikuspenak", label: "Aurreikuspenak", icon: "bi-magic" },
                { id: "berriak", label: "Gordetakoak", icon: "bi-bookmark-star" },
                { id: "jarduera", label: "Jarduera", icon: "bi-clock-history" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => { setActive(item.id); setSidebarOpen(false); }}
                  className={`btn text-start d-flex align-items-center gap-3 p-3 fw-semibold border-0 ${active === item.id ? "btn-primary shadow-sm" : "text-secondary hover-bg-light"}`}
                  style={{ borderRadius: "15px" }}
                >
                  <i className={`bi ${item.icon}`}></i> {item.label}
                </button>
              ))}
            </nav>

            <button className="btn btn-outline-danger w-100 mt-5 fw-bold border-2 d-flex align-items-center justify-content-center gap-2" style={{ borderRadius: "15px" }} onClick={handleLogout}>
              <i className="bi bi-door-open"></i> Saioa itxi
            </button>
          </div>
        </aside>

  
        <main className="col-md-9 col-lg-10 p-4 p-md-5">
          
          <header className="d-flex justify-content-between align-items-center mb-5">
            <h2 className="fw-bold text-dark">Ongi etorri berriro, <span className="text-primary">{user?.izena}</span></h2>
            <button className="btn btn-dark d-md-none rounded-circle" onClick={() => setSidebarOpen(!sidebarOpen)}>
              <i className={`bi ${sidebarOpen ? 'bi-x' : 'bi-list'}`}></i>
            </button>
          </header>

          <div className="row g-4 mb-5">
            {[
              { title: "Aurreikuspenak", num: aurreikuspenak.length, icon: "bi-magic", color: "text-primary" },
              { title: "Gordetakoak", num: 8, icon: "bi-bookmark", color: "text-success" },
              { title: "Puntuak", num: 3200, icon: "bi-star", color: "text-warning" },
            ].map((item, i) => (
              <div className="col-12 col-md-4" key={i}>
                <div className="card p-4 border-0 shadow-sm" style={cardStyle}>
                  <div className="d-flex align-items-center gap-3">
                    <div className={`fs-1 ${item.color}`}><i className={`bi ${item.icon}`}></i></div>
                    <div>
                      <p className="text-muted small fw-bold mb-0 text-uppercase">{item.title}</p>
                      <h3 className="fw-bold mb-0">{item.num}</h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>


          
   
          {active === "perfil" && (
            <div className="card p-4 shadow-sm" style={cardStyle}>
              <h4 className="fw-bold mb-4 border-bottom pb-2">👤 Nire datuak</h4>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="text-muted small fw-bold">IZENA</label>
                  <p className="fs-5 fw-semibold">{user?.izena}</p>
                </div>
                <div className="col-md-6 mb-3">
                  <label className="text-muted small fw-bold">POSTA ELEKTRONIKOA</label>
                  <p className="fs-5 fw-semibold">{user?.email}</p>
                </div>
                <div className="col-md-6">
                  <label className="text-muted small fw-bold">KONTU MOTA</label>
                  <p><span className="badge bg-soft-primary text-primary" style={{backgroundColor: '#e7f1ff'}}>Erabiltzaile Arrunta</span></p>
                </div>
              </div>
            </div>
          )}


          {active === "aurreikuspenak" && (
            <div className="card p-4 shadow-sm" style={cardStyle}>
              <h4 className="fw-bold mb-4">Nire Aurreikuspenak</h4>
              
              <form onSubmit={addAurreikuspena} className="input-group mb-4 shadow-sm rounded-pill overflow-hidden border">
                <input 
                  type="text" 
                  className="form-control border-0 px-4" 
                  placeholder="Adib: Osasuna 1 - 0 Alaves" 
                  value={newPred}
                  onChange={(e) => setNewPred(e.target.value)}
                />
                <button className="btn btn-primary px-4 fw-bold" type="submit">Gorde</button>
              </form>

              <div className="list-group list-group-flush">
                {aurreikuspenak.map((a) => (
                  <div key={a.id} className="list-group-item d-flex justify-content-between align-items-center border-bottom py-3 px-0 bg-transparent">
                    <div>
                      <div className="fw-bold">{a.partida}</div>
                      <small className="text-muted"><i className="bi bi-calendar3 me-1"></i> {a.data}</small>
                    </div>
                    <button className="btn btn-outline-danger btn-sm border-0" onClick={() => deleteAurreikuspena(a.id)}>
                      <i className="bi bi-trash3"></i>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}


          {active === "berriak" && (
            <div className="card p-4 shadow-sm" style={cardStyle}>
              <h4 className="fw-bold mb-4 text-success"><i className="bi bi-bookmark-check me-2"></i>Gordetako Berriak</h4>
              <div className="row g-3">
                {["“LaLiga: 22. jardunaldia”", "“Real Madriden fitxaketa”"].map((item, i) => (
                  <div className="col-12" key={i}>
                    <div className="p-3 bg-light rounded-3 d-flex justify-content-between align-items-center">
                      <span className="fw-semibold">{item}</span>
                      <i className="bi bi-chevron-right"></i>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

    
          {active === "jarduera" && (
            <div className="card p-4 shadow-sm" style={cardStyle}>
              <h4 className="fw-bold mb-4">📅 Azken Mugimenduak</h4>
              <div className="timeline-container">
                <div className="border-start ps-4">
                  <div className="mb-4 position-relative">
                    <i className="bi bi-circle-fill text-primary position-absolute" style={{left: '-31px', top: '5px', fontSize: '12px'}}></i>
                    <p className="mb-0 fw-bold">Aurreikuspena gehitu duzu</p>
                    <small className="text-muted">Gaur, 10:30etan</small>
                  </div>
                  <div className="mb-4 position-relative">
                    <i className="bi bi-circle-fill text-secondary position-absolute" style={{left: '-31px', top: '5px', fontSize: '12px'}}></i>
                    <p className="mb-0 fw-bold">Saioa hasi duzu</p>
                    <small className="text-muted">Gaur, 09:00etan</small>
                  </div>
                </div>
              </div>
            </div>
          )}

        </main>
      </div>
    </div>
  );
}