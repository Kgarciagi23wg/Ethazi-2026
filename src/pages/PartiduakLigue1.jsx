import React, { useState } from "react";
import { Link } from "react-router-dom";
import ligue1 from "../Data/json/ligue1.json";

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

export default function PartiduakLigue1() {

  const getPrimeraJornadaNoJugadada = () => {
    if (ligue1.calendario_proximo.length > 0) {
      return ligue1.calendario_proximo[0].ronda;
    }
    return ligue1.jornadas[ligue1.jornadas.length - 1].jornada;
  };

  const [jornadaActual, setJornadaActual] = useState(getPrimeraJornadaNoJugadada());

  const jornadaPasada = ligue1.jornadas.find(j => j.jornada === jornadaActual);
  const jornadaFutura = ligue1.calendario_proximo.find(j => j.ronda === jornadaActual);
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

          {p.incidencias && (
            <div className="text-danger small fst-italic mt-2">
              {p.incidencias}
            </div>
          )}

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
          🏆 Ligue 1 2025/26
        </h1>
        <p className="text-secondary fs-5">Emaitzak eta Egutegi ofiziala</p>
      </div>

      <div className="d-flex justify-content-between align-items-center mb-4">

        <button
          className="btn btn-outline-primary px-4 py-2 rounded-3"
          onClick={() => setJornadaActual(j => Math.max(1, j - 1))}
          disabled={jornadaActual === 1}
        >
          ← Aurrekoa
        </button>

        <h2 className="fw-bold text-dark">
          Jornada {jornadaActual}
        </h2>

        <button
          className="btn btn-outline-primary px-4 py-2 rounded-3"
          onClick={() => setJornadaActual(j => Math.min(34, j + 1))}
          disabled={jornadaActual === 34}
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
