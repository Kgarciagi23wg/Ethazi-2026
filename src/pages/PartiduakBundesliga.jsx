import React from "react";
import { Link } from "react-router-dom";


const logos = {
  "FC Augsburg": "/T.Bundesliga/Augsburg.png",
  "Bayer Leverkusen": "/T.Bundesliga/BayerLeverkusen.png",
  "Bayern Munich": "/T.Bundesliga/BayernMunich.png",
  "Borussia Dortmund": "/T.Bundesliga/BorussiaDortmund.png",
  "Eintracht Frankfurt": "/T.Bundesliga/Eintracht.png",
  "SC Freiburg": "/T.Bundesliga/Fribourg.png",
  "Hamburgo": "/T.Bundesliga/Hamburgo.png",
  "Heidenheim": "/T.Bundesliga/Heidenheim.png",
  "TSG Hoffenheim": "/T.Bundesliga/Hoffenheim.png",
  "FC Köln": "/T.Bundesliga/Koln.png",
  "Mainz 05": "/T.Bundesliga/Mainz.png",
  "Borussia Mönchengladbach": "/T.Bundesliga/Monchengladbach.png",
  "RB Leipzig": "/T.Bundesliga/RBLeipzig.png",
  "St. Pauli": "/T.Bundesliga/St.Pauli.png",
  "VfB Stuttgart": "/T.Bundesliga/Stuttgart.png",
  "Union Berlin": "/T.Bundesliga/UnionBerlin.png",
  "Werder Bremen": "/T.Bundesliga/WerderBremen.png",
  "VfL Wolfsburg": "/T.Bundesliga/Wolfsburg.png"
};


const getLogo = (team) => logos[team] || "/default.png";

const partidosJ17 = [
  { local: "Bayern Munich", visitante: "Borussia Dortmund", resultado: "2 - 1", fecha: "2026-01-19" },
  { local: "RB Leipzig", visitante: "Bayer Leverkusen", resultado: "1 - 1", fecha: "2026-01-20" },
  { local: "VfB Stuttgart", visitante: "SC Freiburg", resultado: "3 - 0", fecha: "2026-01-21" },
  { local: "Eintracht Frankfurt", visitante: "Union Berlin", resultado: "2 - 2", fecha: "2026-01-22" },
  { local: "TSG Hoffenheim", visitante: "Werder Bremen", resultado: "0 - 1", fecha: "2026-01-23" },
  { local: "Borussia Mönchengladbach", visitante: "Mainz 05", resultado: "", fecha: "2026-01-24" },
  { local: "FC Augsburg", visitante: "VfL Wolfsburg", resultado: "", fecha: "2026-01-25" },
  { local: "FC Köln", visitante: "Heidenheim", resultado: "", fecha: "2026-01-26" },
  { local: "Hamburgo", visitante: "St. Pauli", resultado: "", fecha: "2026-01-27" },
  { local: "Bayer Leverkusen", visitante: "Borussia Dortmund", resultado: "", fecha: "2026-01-28" }
];

export default function PartiduakBundesliga() {
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
      <h2 className="text-center mb-5 text-dark">🏆 Bundesliga – 17. Jardunaldia</h2>

      <div className="row">
        <div className="col-md-6 mb-4">{columna1.map(renderCard)}</div>
        <div className="col-md-6 mb-4">{columna2.map(renderCard)}</div>
      </div>
    </div>
  );
}
