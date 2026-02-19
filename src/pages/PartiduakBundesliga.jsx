import React, { useState } from "react";
import { Link } from "react-router-dom";
import bundesliga from "../Data/json/bundesliga.json";

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

export default function PartiduakBundesliga() {

  const getPrimeraJornadaNoJugadada = () => {
    if (bundesliga.calendario_proximo.length > 0) {
      return bundesliga.calendario_proximo[0].ronda;
    }
    return bundesliga.jornadas[bundesliga.jornadas.length - 1].jornada;
  };

  const [jornadaActual, setJornadaActual] = useState(getPrimeraJornadaNoJugadada());

  const jornadaPasada = bundesliga.jornadas.find(j => j.jornada === jornadaActual);
  const jornadaFutura = bundesliga.calendario_proximo.find(j => j.ronda === jornadaActual);
  const jornada = jornadaPasada || jornadaFutura;

  const partidos = jornada.partidos;
  const columna1 = partidos.slice(0, 5);
  const columna2 = partidos.slice(5);

  const renderCard = (p, i) => (
    <Link
      to={`/estadisticas/${p.local}/${p.visitante}`}
      className="text-decoration-none"
      key={i}
    >
      <div className="card partido-card mb-3 border-0 shadow-sm rounded-4">
        <div className="card-body">

          <div className="text-secondary small mb-2">
            <strong>{p.fecha}</strong> {p.hora ? `· ${p.hora}` : ""}
          </div>

          <div className="d-flex justify-content-between align-items-center">

            <div className="d-flex align-items-center gap-2">
              <img src={getLogo(p.local)} alt={p.local} style={{ width: "36px", height: "36px" }} />
              <span className="fw-semibold text-dark">{p.local}</span>
            </div>

            <span className="fw-bold text-muted">vs</span>

            <div className="d-flex align-items-center gap-2">
              <span className="fw-semibold text-dark">{p.visitante}</span>
              <img src={getLogo(p.visitante)} alt={p.visitante} style={{ width: "36px", height: "36px" }} />
            </div>

            <span className="fw-bold fs-5 text-primary">
              {p.resultado || "—"}
            </span>
          </div>

        </div>
      </div>
    </Link>
  );

  return (
    <div className="container py-5" style={{ minHeight: "100vh" }}>

      <style>{`
        .partido-card {
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .partido-card:hover {
          transform: scale(1.03);
          box-shadow: 0 8px 20px rgba(0,0,0,0.15);
        }
      `}</style>

      <div className="text-center mb-5">
        <h1 className="fw-bold mb-3" style={{ fontSize: "2.4rem" }}>
          🏆 Bundesliga 2025/26
        </h1>
        <p className="text-secondary fs-5">Emaitzak eta Egutegi ofiziala</p>
      </div>

      <div className="d-flex justify-content-between align-items-center mb-4">

        <button
          className="btn btn-outline-primary px-4 py-2 rounded-3"
          onClick={() => setJornadaActual(j => Math.max(24, j - 1))}
          disabled={jornadaActual === 24}
        >
          ← Aurrekoa
        </button>

        <h2 className="fw-bold text-dark">
          Jornada {jornadaActual}
        </h2>

        <button
          className="btn btn-outline-primary px-4 py-2 rounded-3"
          onClick={() => setJornadaActual(j => Math.min(26, j + 1))}
          disabled={jornadaActual === 26}
        >
          Hurrengoa →
        </button>

      </div>

      <div className="row">
        <div className="col-md-6 mb-4">{columna1.map(renderCard)}</div>
        <div className="col-md-6 mb-4">{columna2.map(renderCard)}</div>
      </div>

    </div>
  );
}
