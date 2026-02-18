import React, { useState } from "react";
import { Link } from "react-router-dom";
import laliga from "../Data/json/laliga.json";

const logos = {
  "Alavés": "/T.Laliga/alaves.png",
  "Athletic Club": "/T.Laliga/athleticClub.png",
  "Atlético Madrid": "/T.Laliga/atleticoMadrid.png",
  "Atl. Madrid": "/T.Laliga/atleticoMadrid.png",
  "Barcelona": "/T.Laliga/barcelona.png",
  "Real Betis": "/T.Laliga/betis.png",
  "Celta de Vigo": "/T.Laliga/celtadevigo.png",
  "Celta": "/T.Laliga/celtadevigo.png",
  "Elche": "/T.Laliga/elche.png",
  "Espanyol": "/T.Laliga/espayol.png",
  "Getafe": "/T.Laliga/getafe.png",
  "Girona": "/T.Laliga/girona.png",
  "Levante": "/T.Laliga/levanted.png",
  "Real Madrid": "/T.Laliga/madrid.png",
  "Mallorca": "/T.Laliga/mallorca.png",
  "Osasuna": "/T.Laliga/osasuna.png",
  "Oviedo": "/T.Laliga/oviedo.png",
  "Real Oviedo": "/T.Laliga/oviedo.png",
  "Rayo Vallecano": "/T.Laliga/rayoVallecano.png",
  "Real Sociedad": "/T.Laliga/realSociedad.png",
  "Sevilla": "/T.Laliga/sevilla.png",
  "Valencia": "/T.Laliga/valencia.png",
  "Villarreal": "/T.Laliga/villareal.png"
};

const getLogo = (team) => logos[team] || "/default.png";



export default function PartiduakLaLiga() {

  const getPrimeraJornadaNoJugadada = () => {
    if (laliga.calendario_proximo.length > 0) {
      return laliga.calendario_proximo[0].ronda;
    }
    return laliga.jornadas[laliga.jornadas.length - 1].jornada;
  };

  const [jornadaActual, setJornadaActual] = useState(getPrimeraJornadaNoJugadada());

  const jornadaPasada = laliga.jornadas.find(j => j.jornada === jornadaActual);
  const jornadaFutura = laliga.calendario_proximo.find(j => j.ronda === jornadaActual);
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
              <img src={getLogo(p.local)} alt={p.local} className="rounded" style={{ width: "36px", height: "36px" }} />
              <span className="fw-semibold text-dark">{p.local}</span>
            </div>

            <span className="fw-bold text-muted">vs</span>

            <div className="d-flex align-items-center gap-2">
              <span className="fw-semibold text-dark">{p.visitante}</span>
              <img src={getLogo(p.visitante)} alt={p.visitante} className="rounded" style={{ width: "36px", height: "36px" }} />
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
          🏆 LaLiga 2025/26
        </h1>
        <p className="text-secondary fs-5">Emaitzak eta Egutegi ofiziala</p>
      </div>

      <div className="d-flex justify-content-between align-items-center mb-4">

        <button
          className="btn btn-outline-primary px-4 py-2 rounded-3"
          onClick={() => setJornadaActual(j => Math.max(20, j - 1))}
          disabled={jornadaActual === 20}
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
