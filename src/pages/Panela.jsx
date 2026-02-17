import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Panel() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [active, setActive] = useState("perfil");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  // --- CARD EFFECTS ---
  const cardStyle = {
    borderRadius: "18px",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
    background: "rgba(255,255,255,0.9)",
    backdropFilter: "blur(6px)",
  };

  const onHover = (e) => {
    if (window.innerWidth > 768) {
      e.currentTarget.style.transform = "translateY(-6px)";
      e.currentTarget.style.boxShadow = "0 12px 28px rgba(0,0,0,0.18)";
    }
  };

  const offHover = (e) => {
    if (window.innerWidth > 768) {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "0 4px 14px rgba(0,0,0,0.08)";
    }
  };

  // --- SIDEBAR BUTTON ---
  const navButton = (id, label) => (
    <button
      className={`btn w-100 text-start fw-semibold mb-2 ${
        active === id ? "btn-primary" : "btn-outline-secondary"
      }`}
      style={{
        borderRadius: "12px",
        transition: "0.3s",
        boxShadow: active === id ? "0 4px 12px rgba(0,123,255,0.35)" : "none",
      }}
      onClick={() => {
        setActive(id);
        setSidebarOpen(false);
      }}
    >
      {label}
    </button>
  );

  return (
    <div
      className="container-fluid"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #ffffff 0%, #e5e9f0 100%)",
      }}
    >
      <div className="row">

        {/* MOBILE SIDEBAR TOGGLE */}
        <div className="d-md-none p-3">
          <button
            className="btn btn-primary w-100 fw-bold"
            style={{ borderRadius: "12px" }}
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? "Itxi menua" : "Ireki menua"}
          </button>
        </div>

        {/* SIDEBAR */}
        <aside
          className={`col-md-3 col-lg-2 p-4 ${
            sidebarOpen ? "d-block" : "d-none d-md-block"
          }`}
          style={{
            background: "rgba(255,255,255,0.85)",
            backdropFilter: "blur(6px)",
            minHeight: "100vh",
            borderRight: "1px solid rgba(0,0,0,0.1)",
          }}
        >
          <h2 className="fw-bold mb-4 text-center">Nire Panela</h2>

          {navButton("perfil", "Nire profila")}
          {navButton("aurreikuspenak", "Nire aurreikuspenak")}
          {navButton("berriak", "Gordetako berriak")}
          {navButton("jarduera", "Azken jarduerak")}

          {/* LOGOUT BUTTON */}
          <button
            className="btn btn-danger w-100 mt-4 fw-bold"
            style={{ borderRadius: "12px" }}
            onClick={handleLogout}
          >
            Saioa itxi
          </button>
        </aside>

        {/* MAIN CONTENT */}
        <main className="col-md-9 col-lg-10 p-4">

          <h1 className="fw-bold mb-4">
            Ongi etorri, {user?.izena}
          </h1>

          {/* DASHBOARD CARDS */}
          <div className="row g-3 mb-4">
            {[
              { title: "Nire aurreikuspenak", num: 5 },
              { title: "Gordetako berriak", num: 8 },
              { title: "Azken jarduerak", num: 3 },
            ].map((item, i) => (
              <div className="col-12 col-md-4" key={i}>
                <div
                  className="card p-4 text-center"
                  style={cardStyle}
                  onMouseEnter={onHover}
                  onMouseLeave={offHover}
                >
                  <h4 className="fw-bold">{item.title}</h4>
                  <p className="display-5 fw-bold text-primary">{item.num}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CONTENT SECTIONS */}
          {active === "perfil" && (
            <div
              className="card p-4"
              style={cardStyle}
              onMouseEnter={onHover}
              onMouseLeave={offHover}
            >
              <h3 className="fw-bold mb-3">👤 Nire profila</h3>
              <p><strong>Izena:</strong> {user?.izena}</p>
              <p><strong>Emaila:</strong> {user?.email}</p>
              <p><strong>Kontua sortua:</strong> 2024/01/12</p>
            </div>
          )}

          {active === "aurreikuspenak" && (
            <div
              className="card p-4"
              style={cardStyle}
              onMouseEnter={onHover}
              onMouseLeave={offHover}
            >
              <h3 className="fw-bold mb-3">🔮 Nire aurreikuspenak</h3>
              <ul className="list-group">
                <li className="list-group-item">Real Sociedad 2 - 1 Athletic</li>
                <li className="list-group-item">Barcelona 3 - 0 Girona</li>
                <li className="list-group-item">Valencia 1 - 1 Sevilla</li>
              </ul>
            </div>
          )}

          {active === "berriak" && (
            <div
              className="card p-4"
              style={cardStyle}
              onMouseEnter={onHover}
              onMouseLeave={offHover}
            >
              <h3 className="fw-bold mb-3">📰 Gordetako berriak</h3>
              <ul className="list-group">
                <li className="list-group-item">“LaLiga: 22. jardunaldia”</li>
                <li className="list-group-item">“Real Madriden fitxaketa berria”</li>
                <li className="list-group-item">“Osasunaren garaipen handia”</li>
              </ul>
            </div>
          )}

          {active === "jarduera" && (
            <div
              className="card p-4"
              style={cardStyle}
              onMouseEnter={onHover}
              onMouseLeave={offHover}
            >
              <h3 className="fw-bold mb-3">📅 Azken jarduerak</h3>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  Aurreikuspena sortu duzu: <strong>Real Sociedad vs Athletic</strong>
                </li>
                <li className="list-group-item">
                  Berria gorde duzu: <strong>“LaLiga: 22. jardunaldia”</strong>
                </li>
                <li className="list-group-item">Profila eguneratu duzu</li>
              </ul>
            </div>
          )}

        </main>
      </div>
    </div>
  );
}
