import React, { useState } from "react";
import { Link } from "react-router-dom";
import laliga from "../Data/json/laliga.json";

const logos = {
  "Alavés": "/T.Laliga/alaves.png",
  "Athletic Club": "/T.Laliga/athleticClub.png",
  "Atlético Madrid": "/T.Laliga/atleticoMadrid.png",
  "Barcelona": "/T.Laliga/barcelona.png",
  "Real Betis": "/T.Laliga/betis.png",
  "Celta de Vigo": "/T.Laliga/celtadevigo.png",
  "Elche": "/T.Laliga/elche.png",
  "Espanyol": "/T.Laliga/espayol.png",
  "Getafe": "/T.Laliga/getafe.png",
  "Girona": "/T.Laliga/girona.png",
  "Levante": "/T.Laliga/levanted.png",
  "Real Madrid": "/T.Laliga/madrid.png",
  "Mallorca": "/T.Laliga/mallorca.png",
  "Osasuna": "/T.Laliga/osasuna.png",
  "Oviedo": "/T.Laliga/oviedo.png",
  "Rayo Vallecano": "/T.Laliga/rayoVallecano.png",
  "Real Sociedad": "/T.Laliga/realSociedad.png",
  "Sevilla": "/T.Laliga/sevilla.png",
  "Valencia": "/T.Laliga/valencia.png",
  "Villarreal": "/T.Laliga/villareal.png"
};

const getLogo = (team) => logos[team] || "/default.png";

export default function PartiduakLaLiga() {
  const [jornadaActual, setJornadaActual] = useState(20);

  // Buscar jornada jugada
  const jornadaPasada = laliga.jornadas.find(j => j.jornada === jornadaActual);

  // Buscar jornada futura
  const jornadaFutura = laliga.calendario_proximo.find(j => j.ronda === jornadaActual);

  // Elegir cuál usar
  const jornada = jornadaPasada || jornadaFutura;

  const partidos = jornada.partidos;
  const columna1 = partidos.slice(0, 5);
  const columna2 = partidos.slice(5);

  const renderCard = (p, i) => (
    <div key={i} className="card mb-3 rounded shadow-sm">
      <div className="card-body">

        <div className="text-muted fst-italic">
          {p.fecha} {p.hora ? `· ${p.hora}` : ""}
        </div>

        <div className="d-flex justify-content-between align-items-center mb-2">

          <div className="d-flex align-items-center gap-2">
            <img src={getLogo(p.local)} alt={p.local} style={{ width: "32px", height: "32px" }} />
            <span className="fw-bold">{p.local}</span>
          </div>

          <span className="text-muted">vs</span>

          <div className="d-flex align-items-center gap-2">
            <span className="fw-bold">{p.visitante}</span>
            <img src={getLogo(p.visitante)} alt={p.visitante} style={{ width: "32px", height: "32px" }} />
          </div>

          <span className="fw-bold text-primary">
            {p.resultado || "—"}
          </span>
        </div>

        {p.incidencias && (
          <div className="text-danger small fst-italic">
            {p.incidencias}
          </div>
        )}

      </div>
    </div>
  );

  return (
    <div className="container py-5" style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>

      <div className="d-flex justify-content-between align-items-center mb-4">
        <button
          className="btn btn-outline-primary"
          onClick={() => setJornadaActual(j => Math.max(1, j - 1))}
        >
          ← Anterior
        </button>

        <h2 className="text-center text-dark">
          🏆 LaLiga – Jornada {jornadaActual}
        </h2>

        <button
          className="btn btn-outline-primary"
          onClick={() => setJornadaActual(j => j + 1)}
        >
          Siguiente →
        </button>
      </div>

      <div className="row">
        <div className="col-md-6 mb-4">{columna1.map(renderCard)}</div>
        <div className="col-md-6 mb-4">{columna2.map(renderCard)}</div>
      </div>
    </div>
  );
}
