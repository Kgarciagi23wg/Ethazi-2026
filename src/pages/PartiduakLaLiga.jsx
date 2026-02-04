import React from "react";

// Datos de los partidos con fecha
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
  { local: "Athletic Club", visitante: "Espanyol", resultado: "", fecha: "2026-01-28" },
];

export default function PartiduakLaLiga() {
  const columna1 = partidosJ17.slice(0, 5);
  const columna2 = partidosJ17.slice(5);

  // Función para formatear la fecha en español: "Lunes 15 Enero"
  const formatFecha = (fechaStr) => {
    const fecha = new Date(fechaStr);
    return fecha.toLocaleDateString("es-ES", {
      weekday: "long",
      day: "numeric",
      month: "long",
    });
  };

  return (
    <div className="container py-5" style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      <h2 className="text-center mb-5 text-dark">🏆 LaLiga – Jornada 17</h2>

      <div className="row">
        {/* Columna 1 */}
        <div className="col-md-6 mb-4">
          {columna1.map((p, i) => (
            <div key={i} className="card mb-3 rounded shadow-sm">
              <div className="card-body">
                <div className="text-muted fst-italic">{formatFecha(p.fecha)}</div>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span className="fw-bold">{p.local}</span>
                  <span className="text-muted">vs</span>
                  <span className="fw-bold">{p.visitante}</span>
                  <span className="fw-bold text-primary">{p.resultado || "Por jugar"}</span>
                </div>
                
              </div>
            </div>
          ))}
        </div>

        {/* Columna 2 */}
        <div className="col-md-6 mb-4">
          {columna2.map((p, i) => (
            <div key={i} className="card mb-3 rounded shadow-sm">
              <div className="card-body">
                <div className="text-muted fst-italic">{formatFecha(p.fecha)}</div>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span className="fw-bold">{p.local}</span>
                  <span className="text-muted">vs</span>
                  <span className="fw-bold">{p.visitante}</span>
                  <span className="fw-bold text-primary">{p.resultado || "Por jugar"}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
