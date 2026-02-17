import { useParams } from "react-router-dom";
import { useState } from "react";
import datuak from "/src/Data/laliga17.json";

export default function EstadisticasPartido() {
  const { local, visitante } = useParams();
  const key = `${local}-${visitante}`;
  const partido = datuak[key];

  const [tab, setTab] = useState("partida");

  if (!partido) {
    return (
      <div className="container py-5">
        <h2 className="text-center">Ez dago daturik partida honentzat</h2>
      </div>
    );
  }

  // --- EFFECTS ---
  const cardBase = {
    borderRadius: "18px",
    transition: "all 0.35s ease",
    boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
    background: "rgba(255,255,255,0.9)",
    backdropFilter: "blur(6px)",
  };

  const onHover = (e) => {
    if (window.innerWidth > 768) {
      e.currentTarget.style.transform = "translateY(-6px)";
      e.currentTarget.style.boxShadow = "0 12px 28px rgba(0,0,0,0.18)";
    }
  };

  const offHover = (e) => {
    if (window.innerWidth > 768) {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "0 4px 14px rgba(0,0,0,0.08)";
    }
  };

  const tabButton = (id, label) => (
    <button
      className={`btn mx-2 px-4 py-2 fw-semibold ${
        tab === id ? "btn-primary" : "btn-outline-secondary"
      }`}
      style={{
        borderRadius: "30px",
        transition: "0.3s",
        boxShadow: tab === id ? "0 6px 16px rgba(0,123,255,0.35)" : "none",
        width: "100%",
        maxWidth: "180px",
      }}
      onClick={() => setTab(id)}
    >
      {label}
    </button>
  );

  return (
    <div
      className="container py-4"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #ffffff 0%, #e5e9f0 100%)",
      }}
    >
      {/* TITULO */}
      <div className="text-center mb-4">
        <h1 className="fw-bold display-6">{local} vs {visitante}</h1>
        <p className="text-muted">{partido.estadio} • 17. Jardunaldia</p>
      </div>

      {/* TABS RESPONSIVE */}
      <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
        {tabButton("partida", "Partida")}
        {tabButton("alineazioak", "Alineazioak")}
        {tabButton("estatistikak", "Estatistikak")}
        {tabButton("minutuak", "Minutuz Minutu")}
      </div>

      {/* TAB 1 — PARTIDA */}
      {tab === "partida" && (
        <div
          className="card p-4 mb-4"
          style={cardBase}
          onMouseEnter={onHover}
          onMouseLeave={offHover}
        >
          <h4 className="fw-bold mb-3">🥅 Goleak</h4>

          {partido.goles.length === 0 && (
            <p className="text-muted">Ez da golik egon</p>
          )}

          {partido.goles.map((g, i) => (
            <div
              key={i}
              className="d-flex justify-content-between py-2 border-bottom"
            >
              <span className="fw-bold">{g.minuto}'</span>
              <span>{g.equipo}</span>
              <span className="fw-semibold">{g.jugador}</span>
            </div>
          ))}

          <hr className="my-4" />

          <h4 className="fw-bold mb-3">📍 Informazio orokorra</h4>
          <p><strong>Estadioa:</strong> {partido.estadio}</p>
          <p><strong>Epailea:</strong> {partido.arbitro}</p>
        </div>
      )}

      {/* TAB 2 — ALINEACIONES */}
      {tab === "alineazioak" && (
        <div className="row g-3">

          {[ 
            { title: local, list: partido.alineacionLocal, supl: partido.suplentesLocal, color: "🟧" },
            { title: visitante, list: partido.alineacionVisitante, supl: partido.suplentesVisitante, color: "🟦" }
          ].map((team, idx) => (
            <div className="col-12 col-md-6" key={idx}>
              <div
                className="card p-4 h-100"
                style={cardBase}
                onMouseEnter={onHover}
                onMouseLeave={offHover}
              >
                <h4 className="fw-bold mb-3">{team.color} {team.title} – Hamaikakoa</h4>

                <ul className="list-group list-group-flush">
                  {team.list.map((j, i) => (
                    <li key={i} className="list-group-item">{j}</li>
                  ))}
                </ul>

                <h5 className="mt-4 fw-bold">Ordezkoak</h5>
                <ul className="list-group list-group-flush">
                  {team.supl.map((j, i) => (
                    <li key={i} className="list-group-item">{j}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

        </div>
      )}

      {/* TAB 3 — ESTADISTICAS */}
      {tab === "estatistikak" && (
        <div
          className="card p-4 mb-4"
          style={cardBase}
          onMouseEnter={onHover}
          onMouseLeave={offHover}
        >
          <h4 className="fw-bold mb-4">⚽ Posesioa</h4>

          <div className="d-flex justify-content-between mb-2">
            <span className="fw-bold">{local}</span>
            <span className="fw-bold">{visitante}</span>
          </div>

          <div
            className="progress mb-4"
            style={{
              height: "22px",
              background: "rgba(0,0,0,0.1)",
              borderRadius: "20px",
              overflow: "hidden",
            }}
          >
            <div
              className="progress-bar bg-primary"
              style={{
                width: `${partido.posesion.local}%`,
                transition: "width 0.6s ease",
              }}
            ></div>
          </div>

          <h4 className="fw-bold mb-3">📊 Estatistika Orokorrak</h4>

          <table className="table">
            <tbody>
              {[
                ["Tiroak", partido.tiros.local, partido.tiros.visitante],
                ["Tiroak portera", partido.tirosPuerta.local, partido.tirosPuerta.visitante],
                ["Faltak", partido.faltas.local, partido.faltas.visitante],
                ["Kornerak", partido.corners.local, partido.corners.visitante],
              ].map((row, i) => (
                <tr key={i}>
                  <td className="fw-bold">{row[1]}</td>
                  <td className="text-center text-muted">{row[0]}</td>
                  <td className="fw-bold text-end">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* TAB 4 — MINUTO A MINUTO */}
      {tab === "minutuak" && (
        <div
          className="card p-4"
          style={cardBase}
          onMouseEnter={onHover}
          onMouseLeave={offHover}
        >
          <h4 className="fw-bold mb-3">⏱️ Minutuz Minutu</h4>

          <ul className="list-group list-group-numbered">
            {partido.minutoMinuto.map((e, i) => (
              <li key={i} className="list-group-item">{e}</li>
            ))}
          </ul>
        </div>
      )}

    </div>
  );
}
