import React from "react";
import { Link } from "react-router-dom";


const logos = {
  "Angers SCO": "/T.Ligue1/Angers.png",
  "AJ Auxerre": "/T.Ligue1/Auxerre.png",
  "Stade Brest": "/T.Ligue1/Brest.png",
  "Racing Strasbourg": "/T.Ligue1/Estrasburgo.png",
  "Le Havre AC": "/T.Ligue1/LeHavre.png",
  "RC Lens": "/T.Ligue1/Lens.png",
  "FC Lorient": "/T.Ligue1/Lorient.png",
  "OSC Lille": "/T.Ligue1/LOSClille.png",
  "Olympique Lyonnais": "/T.Ligue1/Lyon.png",
  "FC Metz": "/T.Ligue1/Metz.png",
  "AS Monaco": "/T.Ligue1/Monaco.png",
  "FC Nantes": "/T.Ligue1/Nantes.png",
  "OGC Nice": "/T.Ligue1/Niza.png",
  "Olympique de Marseille": "/T.Ligue1/OlympiqueMarsella.png",
  "Paris FC": "/T.Ligue1/ParisFC.png",
  "Paris Saint-Germain": "/T.Ligue1/PSG.png",
  "Stade Rennais": "/T.Ligue1/Rennes.png",
  "Toulouse FC": "/T.Ligue1/Toulouse.png"
};


const getLogo = (team) => logos[team] || "/default.png";


const partidosJ17 = [
  { local: "Paris Saint-Germain", visitante: "Olympique de Marseille", resultado: "3 - 0", fecha: "2026-01-19" },
  { local: "Olympique Lyonnais", visitante: "RC Lens", resultado: "2 - 2", fecha: "2026-01-20" },
  { local: "OSC Lille", visitante: "Stade Brest", resultado: "1 - 0", fecha: "2026-01-21" },
  { local: "AS Monaco", visitante: "Racing Strasbourg", resultado: "2 - 1", fecha: "2026-01-22" },
  { local: "Stade Rennais", visitante: "OGC Nice", resultado: "1 - 1", fecha: "2026-01-23" },
  { local: "Toulouse FC", visitante: "Paris FC", resultado: "", fecha: "2026-01-24" },
  { local: "FC Nantes", visitante: "AJ Auxerre", resultado: "", fecha: "2026-01-25" },
  { local: "FC Lorient", visitante: "FC Metz", resultado: "", fecha: "2026-01-26" },
  { local: "Le Havre AC", visitante: "Angers SCO", resultado: "", fecha: "2026-01-27" },
  { local: "Stade Brest", visitante: "RC Lens", resultado: "", fecha: "2026-01-28" }
];

export default function PartiduakLigue1() {
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
      <h2 className="text-center mb-5 text-dark">🏆 Ligue 1 – 17. Jardunaldia</h2>

      <div className="row">
        <div className="col-md-6 mb-4">{columna1.map(renderCard)}</div>
        <div className="col-md-6 mb-4">{columna2.map(renderCard)}</div>
      </div>
    </div>
  );
}
