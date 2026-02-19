import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function AdminPanel() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [active, setActive] = useState("arbela");
  const [sidebarOpen, setSidebarOpen] = useState(false);


  const [erabiltzaileak, setErabiltzaileak] = useState([
    { id: 1, izena: "Iker Unanue", email: "iker@example.com", rola: "Admin" },
    { id: 2, izena: "Ane Garmendia", email: "ane@example.com", rola: "Editorea" },
    { id: 3, izena: "Koldo Mitxelena", email: "koldo@example.com", rola: "Erabiltzailea" },
  ]);
  const [newUser, setNewUser] = useState({ izena: "", email: "" });


  const addUser = (e) => {
    e.preventDefault();
    if (!newUser.izena || !newUser.email) return;
    const userObj = { 
      id: Date.now(), 
      izena: newUser.izena, 
      email: newUser.email, 
      rola: "Erabiltzailea" 
    };
    setErabiltzaileak([...erabiltzaileak, userObj]);
    setNewUser({ izena: "", email: "" });
  };

  const deleteUser = (id) => {
    if (window.confirm("Ziur zaude erabiltzaile hau ezabatu nahi duzula?")) {
      setErabiltzaileak(erabiltzaileak.filter((u) => u.id !== id));
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };


  const cardStyle = {
    borderRadius: "16px",
    border: "none",
    boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
  };

  return (
    <div className="container-fluid bg-light min-vh-100 p-0">
   
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css" />

      <div className="row g-0">
        

        <aside className={`col-md-3 col-lg-2 bg-white border-end shadow-sm vh-100 sticky-top ${sidebarOpen ? "d-block" : "d-none d-md-block"}`}>
          <div className="p-4">
            <h4 className="fw-bold text-primary mb-5 d-flex align-items-center">
              <i className="bi bi-speedometer2 me-2"></i> Kudeaketa
            </h4>

            <nav className="nav flex-column gap-2">
              <button onClick={() => {setActive("arbela"); setSidebarOpen(false);}} className={`btn text-start d-flex align-items-center gap-2 p-3 fw-semibold border-0 ${active === "arbela" ? "btn-primary shadow-sm" : "text-secondary"}`} style={{ borderRadius: "12px" }}>
                <i className="bi bi-house-door"></i> Arbela
              </button>
              <button onClick={() => {setActive("erabiltzaileak"); setSidebarOpen(false);}} className={`btn text-start d-flex align-items-center gap-2 p-3 fw-semibold border-0 ${active === "erabiltzaileak" ? "btn-primary shadow-sm" : "text-secondary"}`} style={{ borderRadius: "12px" }}>
                <i className="bi bi-people"></i> Erabiltzaileak
              </button>
              <button onClick={() => {setActive("berriak"); setSidebarOpen(false);}} className={`btn text-start d-flex align-items-center gap-2 p-3 fw-semibold border-0 ${active === "berriak" ? "btn-primary shadow-sm" : "text-secondary"}`} style={{ borderRadius: "12px" }}>
                <i className="bi bi-newspaper"></i> Berriak
              </button>
              <button onClick={() => {setActive("aurreikuspenak"); setSidebarOpen(false);}} className={`btn text-start d-flex align-items-center gap-2 p-3 fw-semibold border-0 ${active === "aurreikuspenak" ? "btn-primary shadow-sm" : "text-secondary"}`} style={{ borderRadius: "12px" }}>
                <i className="bi bi-graph-up-arrow"></i> Aurreikuspenak
              </button>
            </nav>

            <button className="btn btn-outline-danger w-100 mt-5 d-flex align-items-center justify-content-center gap-2 fw-bold border-2" style={{ borderRadius: "12px" }} onClick={handleLogout}>
              <i className="bi bi-box-arrow-right"></i> Saioa itxi
            </button>
          </div>
        </aside>

 
        <main className="col-md-9 col-lg-10 p-4 p-md-5">
          

          <header className="d-flex justify-content-between align-items-center mb-5">
            <div>
              <h1 className="fw-bold h2 mb-1">Kaixo, {user?.izena || "Administratzailea"}!</h1>
              <p className="text-muted mb-0">Hau da sistemaren egoera orokorra.</p>
            </div>
            <button className="btn btn-dark d-md-none" onClick={() => setSidebarOpen(!sidebarOpen)}>
              <i className={`bi ${sidebarOpen ? 'bi-x-lg' : 'bi-list'}`}></i>
            </button>
          </header>


          <div className="row g-4 mb-5">
            <div className="col-md-4">
              <div className="card p-4 text-center" style={cardStyle}>
                <i className="bi bi-people text-primary fs-1 mb-2"></i>
                <p className="text-muted small fw-bold text-uppercase mb-1">Erabiltzaileak</p>
                <h2 className="fw-bold mb-0">{erabiltzaileak.length}</h2>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-4 text-center" style={cardStyle}>
                <i className="bi bi-journal-text text-success fs-1 mb-2"></i>
                <p className="text-muted small fw-bold text-uppercase mb-1">Berriak</p>
                <h2 className="fw-bold mb-0">8</h2>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-4 text-center" style={cardStyle}>
                <i className="bi bi-trophy text-warning fs-1 mb-2"></i>
                <p className="text-muted small fw-bold text-uppercase mb-1">Aurreikuspenak</p>
                <h2 className="fw-bold mb-0">15</h2>
              </div>
            </div>
          </div>

   
          {active === "arbela" && (
            <div className="card p-5 border-0 shadow-sm text-center" style={{ borderRadius: "18px" }}>
              <i className="bi bi-pie-chart text-light-emphasis display-1 mb-3"></i>
              <h3 className="fw-bold">Ongi etorri Arbelara</h3>
              <p className="text-muted">Hemen datu estatistikoak eta grafikoak agertuko dira.</p>
            </div>
          )}


          {active === "erabiltzaileak" && (
            <div className="card border-0 shadow-sm p-4" style={{ borderRadius: "18px" }}>
              <h3 className="fw-bold mb-4">Erabiltzaileen Zerrenda</h3>
              
              <form onSubmit={addUser} className="row g-2 mb-4 p-3 bg-light rounded-3">
                <div className="col-md-5">
                  <input type="text" className="form-control" placeholder="Izena..." value={newUser.izena} onChange={(e) => setNewUser({...newUser, izena: e.target.value})} required />
                </div>
                <div className="col-md-5">
                  <input type="email" className="form-control" placeholder="Emaila..." value={newUser.email} onChange={(e) => setNewUser({...newUser, email: e.target.value})} required />
                </div>
                <div className="col-md-2">
                  <button type="submit" className="btn btn-primary w-100 fw-bold">Gehitu</button>
                </div>
              </form>

              <div className="table-responsive">
                <table className="table table-hover">
                  <thead className="table-light">
                    <tr>
                      <th className="border-0">Izena</th>
                      <th className="border-0">Emaila</th>
                      <th className="border-0">Rola</th>
                      <th className="border-0 text-end">Ekintzak</th>
                    </tr>
                  </thead>
                  <tbody>
                    {erabiltzaileak.map((u) => (
                      <tr key={u.id}>
                        <td className="fw-bold py-3">{u.izena}</td>
                        <td className="text-muted">{u.email}</td>
                        <td><span className="badge rounded-pill bg-info text-dark">{u.rola}</span></td>
                        <td className="text-end">
                          <button className="btn btn-sm btn-outline-danger border-0" onClick={() => deleteUser(u.id)}>
                            <i className="bi bi-trash3"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

    
          {active === "berriak" && (
            <div className="card p-4 border-0 shadow-sm" style={{ borderRadius: "18px" }}>
              <h3 className="fw-bold mb-4"><i className="bi bi-plus-circle me-2 text-primary"></i>Berri Berria Argitaratu</h3>
              <div className="p-4 border-dashed text-center bg-light rounded-3 border-2" style={{borderStyle: 'dashed'}}>
                <p className="mb-0 text-muted">Ez dago berririk kargatuta momentu honetan.</p>
              </div>
            </div>
          )}


          {active === "aurreikuspenak" && (
            <div className="card p-4 border-0 shadow-sm" style={{ borderRadius: "18px" }}>
              <h3 className="fw-bold mb-4">Aktibo dauden Aurreikuspenak</h3>
              <div className="list-group">
                <div className="list-group-item d-flex justify-content-between align-items-center p-3">
                  <span>Real Sociedad vs Athletic (Euskal Derbia)</span>
                  <span className="badge bg-primary px-3">Bihar</span>
                </div>
              </div>
            </div>
          )}

        </main>
      </div>
    </div>
  );
}