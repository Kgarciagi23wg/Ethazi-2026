import React from "react";
import { Link } from "react-router-dom";


const logos = {
  "Arsenal": "/T.Premier/arsenal.png",
  "Aston Villa": "/T.Premier/astonVilla.png",
  "Bournemouth": "/T.Premier/bournemouth.png",
  "Brentford": "/T.Premier/brentford.png",
  "Brighton": "/T.Premier/brighton.png",
  "Burnley": "/T.Premier/burnley.png",
  "Chelsea": "/T.Premier/chelsea.png",
  "Manchester City": "/T.Premier/city.png",
  "Crystal Palace": "/T.Premier/crystal.png",
  "Everton": "/T.Premier/everton.png",
  "Fulham": "/T.Premier/fulham.png",
  "Leeds United": "/T.Premier/leeds.png",
  "Liverpool": "/T.Premier/liverpool.png",
  "Manchester United": "/T.Premier/manchesterUnited.png",
  "Newcastle": "/T.Premier/newcastle.png",
  "Nottingham Forest": "/T.Premier/nottinghamForest.png",
  "Sunderland": "/T.Premier/sunderland.png",
  "Tottenham": "/T.Premier/tottenham.png",
  "West Ham": "/T.Premier/westHam.png",
  "Wolves": "/T.Premier/wolves.png"
};


const getLogo = (team) => logos[team] || "/default.png";


const partidosJ17 = [
  { local: "Manchester City", visitante: "Everton", resultado: "3 - 1", fecha: "2026-01-19" },
  { local: "Arsenal", visitante: "Brighton", resultado: "2 - 0", fecha: "2026-01-20" },
  { local: "Liverpool", visitante: "West Ham", resultado: "1 - 1", fecha: "2026-01-21" },
  { local: "Chelsea", visitante: "Newcastle", resultado: "0 - 2", fecha: "2026-01-22" },
  { local: "Manchester United", visitante: "Aston Villa", resultado: "2 - 2", fecha: "2026-01-23" },
  { local: "Tottenham", visitante: "Crystal Palace", resultado: "", fecha: "2026-01-24" },
  { local: "Leeds United", visitante: "Bournemouth", resultado: "", fecha: "2026-01-25" },
  { local: "Wolves", visitante: "Fulham", resultado: "", fecha: "2026-01-26" },
  { local: "Burnley", visitante: "Brentford", resultado: "", fecha: "2026-01-27" },
  { local: "Nottingham Forest", visitante: "Sunderland", resultado: "", fecha: "2026-01-28" }
];

export default function PartiduakPremier() {
  const columna1 = partidosJ17.slice(0, 5);
  const columna2 = partidosJ17.slice(5);

  const formatFecha = (fechaStr) => {
    const fecha = new Date(fechaStr);
    return fecha.toLocaleDateString("eu-ES", {
      weekday: "long",
      day: "numeric",
      month: "long"
    });
  };

  const renderCard = (p, i) => (
    <Link
      key={i}
      to={`/partida/${p.local}/${p.visitante}`}
      className="text-decoration-none text-dark"
    >
      <div className="card mb-3 rounded shadow-sm">
        <div className="card-body">
          <div className="text-muted fst-italic">{formatFecha(p.fecha)}</div>

          <div className="d-flex justify-content-between align-items-center mb-2">

            {/* LOCAL */}
            <div className="d-flex align-items-center gap-2">
              <img
                src={getLogo(p.local)}
                alt={p.local}
                style={{ width: "32px", height: "32px" }}
              />
              <span className="fw-bold">{p.local}</span>
            </div>

            <span className="text-muted">vs</span>

            {/* VISITANTE */}
            <div className="d-flex align-items-center gap-2">
              <span className="fw-bold">{p.visitante}</span>
              <img
                src={getLogo(p.visitante)}
                alt={p.visitante}
                style={{ width: "32px", height: "32px" }}
              />
            </div>

            <span className="fw-bold text-primary">{p.resultado || "Jokatzeke"}</span>
          </div>
        </div>
      </div>
    </Link>
  );

  return (
    <div className="container py-5" style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      <h2 className="text-center mb-5 text-dark">🏆 Premier League – 17. Jardunaldia</h2>

      <div className="row">
        <div className="col-md-6 mb-4">{columna1.map(renderCard)}</div>
        <div className="col-md-6 mb-4">{columna2.map(renderCard)}</div>
      </div>
    </div>
  );
}
