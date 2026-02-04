import React from "react";
import { useAuth } from "../context/AuthContext";
import "../styles/panel.css";

export default function Panel() {
  const { user } = useAuth();

  return (
    <div className="userpanel-container">

      {/* Sidebar */}
      <aside className="userpanel-sidebar">
        <h2 className="userpanel-title">Nire Panela</h2>

        <nav className="userpanel-nav">
          <button className="userpanel-nav-btn">Nire profila</button>
          <button className="userpanel-nav-btn">Nire aurreikuspenak</button>
          <button className="userpanel-nav-btn">Gordetako berriak</button>
          <button className="userpanel-nav-btn">Jarduera</button>
        </nav>
      </aside>

      {/* Main content */}
      <main className="userpanel-main">
        <h1 className="userpanel-welcome">
          Ongi etorri, {user?.izena}
        </h1>

        <div className="userpanel-cards">
          <div className="userpanel-card">
            <h3>Nire aurreikuspenak</h3>
            <p className="userpanel-number">5</p>
          </div>

          <div className="userpanel-card">
            <h3>Gordetako berriak</h3>
            <p className="userpanel-number">8</p>
          </div>

          <div className="userpanel-card">
            <h3>Azken jarduerak</h3>
            <p className="userpanel-number">3</p>
          </div>
        </div>

        <section className="userpanel-section">
          <h2>Azken jarduera</h2>
          <ul className="userpanel-list">
            <li>Aurreikuspena sortu duzu: <strong>Real Sociedad vs Athletic</strong></li>
            <li>Berria gorde duzu: <strong>“LaLiga: 22. jardunaldia”</strong></li>
            <li>Profila eguneratu duzu</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
