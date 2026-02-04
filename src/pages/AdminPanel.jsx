import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../styles/admin.css";

export default function AdminPanel() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="admin-container">
      {/* Alboko barra */}
      <aside className="admin-sidebar">
        <h2 className="admin-title">Administrazio Panela</h2>

        <nav className="admin-nav">
          <button className="admin-nav-btn">Arbela</button>
          <button className="admin-nav-btn">Erabiltzaileak</button>
          <button className="admin-nav-btn">Berriak</button>
          <button className="admin-nav-btn">Aurreikuspenak</button>
        </nav>

        <button className="admin-logout-btn" onClick={handleLogout}>
          Saioa itxi
        </button>
      </aside>

      {/* Eduki nagusia */}
      <main className="admin-main">
        <h1 className="admin-welcome">
          Ongi etorri, {user?.izena} (Administratzailea)
        </h1>

        <div className="admin-cards">
          <div className="admin-card">
            <h3>Erregistratutako erabiltzaileak</h3>
            <p className="admin-number">10</p>
          </div>

          <div className="admin-card">
            <h3>Argitaratutako berriak</h3>
            <p className="admin-number">6</p>
          </div>

          <div className="admin-card">
            <h3>Aktibo dauden aurreikuspenak</h3>
            <p className="admin-number">5</p>
          </div>
        </div>

        <section className="admin-section">
          <h2>Azken jarduera</h2>
          <ul className="admin-list">
            <li>Erabiltzaile berria erregistratu da: <strong>Koldo</strong></li>
            <li>Berria argitaratua: <strong>“LaLiga: 22. jardunaldia”</strong></li>
            <li>Aurreikuspena eguneratua: <strong>Real Madrid vs Barça</strong></li>
          </ul>
        </section>
      </main>
    </div>
  );
}
