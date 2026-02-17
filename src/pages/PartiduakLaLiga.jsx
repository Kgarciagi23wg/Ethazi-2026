import React from "react";
import { Link } from "react-router-dom";

const partidosJ17 = [
  { local: "Valencia", visitante: "Mallorca", resultado: "1 - 1", fecha: "2026-01-19" },
  { local: "Oviedo", visitante: "Celta", resultado: "0 - 0", fecha: "2026-01-20" },
  { local: "Levante", visitante: "Real Sociedad", resultado: "1 - 1", fecha: "2026-01-21" },
  { local: "Osasuna", visitante: "Alavés", resultado: "3 - 0", fecha: "2026-01-22" },
  { local: "Real Madrid", visitante: "Sevilla", resultado: "2 - 0", fecha: "2026-01-23" },
  { local: "Girona", visitante: "Atlético Madrid", resultado: "", fecha: "2026-01-24" },
  { local: "Villarreal", visitante: "Barcelona", resultado: "", fecha: "2026-01-25" },
  { local: "Elche", visitante: "Rayo Vallecano", resultado: "", fecha: "2026-01-26" },
  { local: "Real Betis", visitante: "Getafe", resultado: "", fecha: "2026-01-27" },
  { local: "Athletic Club", visitante: "Espanyol", resultado: "", fecha: "2026-01-28" }
];

export default function PartiduakLaLiga() {
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
            <span className="fw-bold">{p.local}</span>
            <span className="text-muted">vs</span>
            <span className="fw-bold">{p.visitante}</span>
            <span className="fw-bold text-primary">{p.resultado || "Jokatzeke"}</span>
          </div>
        </div>
      </div>
    </Link>
  );

  return (
    <div className="container py-5" style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      <h2 className="text-center mb-5 text-dark">🏆 LaLiga – 17. Jardunaldia</h2>

      <div className="row">
        <div className="col-md-6 mb-4">{columna1.map(renderCard)}</div>
        <div className="col-md-6 mb-4">{columna2.map(renderCard)}</div>
      </div>
    </div>
  );
}
