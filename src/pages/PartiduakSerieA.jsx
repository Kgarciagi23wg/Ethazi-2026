import React from "react";
import { Link } from "react-router-dom";


const logos = {
  "AC Milan": "/T.SerieA/ACMilan.png",
  "AS Roma": "/T.SerieA/ASRoma.png",
  "Atalanta": "/T.SerieA/Atalanta.png",
  "Bologna": "/T.SerieA/Bologna.png",
  "Cagliari": "/T.SerieA/Cagliari.png",
  "Como": "/T.SerieA/Como.png",
  "Cremonese": "/T.SerieA/Cremonese.png",
  "Fiorentina": "/T.SerieA/Fiorentina.png",
  "Genoa": "/T.SerieA/Genoa.png",
  "Hellas Verona": "/T.SerieA/HellasVerona.png",
  "Inter": "/T.SerieA/InterMilan.png",
  "Juventus": "/T.SerieA/Juventus.png",
  "Lazio": "/T.SerieA/Lazio.png",
  "Lecce": "/T.SerieA/Lecce.png",
  "Napoli": "/T.SerieA/Napoles.png",
  "Parma": "/T.SerieA/Parma.png",
  "Pisa": "/T.SerieA/Pisa.png",
  "Sassuolo": "/T.SerieA/Sassuolo.png",
  "Torino": "/T.SerieA/Torino.png",
  "Udinese": "/T.SerieA/Udinese.png"
};


const getLogo = (team) => logos[team] || "/default.png";


const partidosJ17 = [
  { local: "Inter", visitante: "Udinese", resultado: "3 - 1", fecha: "2026-01-19" },
  { local: "Juventus", visitante: "Torino", resultado: "1 - 1", fecha: "2026-01-20" },
  { local: "AC Milan", visitante: "Atalanta", resultado: "2 - 0", fecha: "2026-01-21" },
  { local: "Napoli", visitante: "Fiorentina", resultado: "0 - 2", fecha: "2026-01-22" },
  { local: "AS Roma", visitante: "Lazio", resultado: "2 - 2", fecha: "2026-01-23" },
  { local: "Bologna", visitante: "Genoa", resultado: "", fecha: "2026-01-24" },
  { local: "Sassuolo", visitante: "Cagliari", resultado: "", fecha: "2026-01-25" },
  { local: "Hellas Verona", visitante: "Empoli", resultado: "", fecha: "2026-01-26" },
  { local: "Lecce", visitante: "Monza", resultado: "", fecha: "2026-01-27" },
  { local: "Parma", visitante: "Como", resultado: "", fecha: "2026-01-28" }
];

export default function PartiduakSerieA() {
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
      <h2 className="text-center mb-5 text-dark">🏆 Serie A – 17. Jardunaldia</h2>

      <div className="row">
        <div className="col-md-6 mb-4">{columna1.map(renderCard)}</div>
        <div className="col-md-6 mb-4">{columna2.map(renderCard)}</div>
      </div>
    </div>
  );
}
