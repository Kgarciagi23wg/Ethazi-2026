import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
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

export default function EstadisticasPartido() {
  const { local, visitante } = useParams();
  const [tab, setTab] = useState("partida");
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 400);
    return () => clearTimeout(timer);
  }, [tab]);

  const normalize = (str) =>
    str?.normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim().toLowerCase();

  const partido = (() => {
    const partidos = [
      ...laliga.jornadas.flatMap(j => j.partidos),
      ...(laliga.calendario_proximo?.flatMap(j => j.partidos) || [])
    ];
    return partidos.find(
      p => normalize(p.local) === normalize(local) && normalize(p.visitante) === normalize(visitante)
    ) || null;
  })();

  if (!partido) return <div className="container py-5 text-center"><h2>Ez dago daturik</h2></div>;

  const haJugado = !!partido.resultado;

  const styles = {
    headerCard: {
      background: "linear-gradient(135deg, #1e2124 0%, #2b3035 100%)",
      color: "white", borderRadius: "24px", padding: "2.5rem 1rem",
      boxShadow: "0 15px 35px rgba(0,0,0,0.2)", marginBottom: "2rem"
    },
    logo: { width: "70px", height: "70px", objectFit: "contain", marginBottom: "0.5rem" },
    score: { fontSize: "3.2rem", fontWeight: "800", letterSpacing: "-2px" },
    navBtn: (active, disabled) => ({
      border: "none", background: "none", 
      color: disabled ? "#adb5bd" : (active ? "#0d6efd" : "#6c757d"),
      fontWeight: "700", padding: "12px 20px",
      borderBottom: active ? "3px solid #0d6efd" : "3px solid transparent",
      transition: "0.3s all",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? "0.6" : "1",
      fontSize: "0.9rem"
    }),
    contentCard: {
      borderRadius: "20px", border: "1px solid #eef2f7",
      boxShadow: "0 4px 15px rgba(0,0,0,0.04)",
      animation: animate ? "fadeInUp 0.4s ease-out" : "none"
    }
  };

  return (
    <div className="container-fluid py-4" style={{ backgroundColor: "#f4f7f9", minHeight: "100vh" }}>
      <style>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
        .timeline-item { border-left: 2px solid #e9ecef; padding-left: 25px; position: relative; padding-bottom: 20px; }
        .timeline-item::after { content: ''; width: 12px; height: 12px; background: #0d6efd; border-radius: 50%; position: absolute; left: -7px; top: 5px; }
        .stat-row:hover { background-color: #f8f9fa; transition: 0.2s; }
      `}</style>

      <div className="container">
        {/* --- CABECERA DE MARCADOR --- */}
        <div style={styles.headerCard} className="text-center shadow">
          <div className="row align-items-center">
            <div className="col-4">
              <img src={getLogo(partido.local)} alt="local" style={styles.logo} />
              <h4 className="fw-bold mb-0">{partido.local}</h4>
            </div>
            <div className="col-4">
              <div className="d-flex justify-content-center align-items-center">
                <span style={styles.score}>{partido.resultado?.split("-")[0] || "-"}</span>
                <span className="mx-3 opacity-25">|</span>
                <span style={styles.score}>{partido.resultado?.split("-")[1] || "-"}</span>
              </div>
              <div className={`badge ${haJugado ? 'bg-success' : 'bg-warning text-dark'} px-3 py-2 mt-2`}>
                {haJugado ? 'AMAIERA' : 'ORAINDIK EZ'}
              </div>
              <div className="small opacity-50 mt-3">{partido.fecha} • {partido.estadio}</div>
            </div>
            <div className="col-4">
              <img src={getLogo(partido.visitante)} alt="visitante" style={styles.logo} />
              <h4 className="fw-bold mb-0">{partido.visitante}</h4>
            </div>
          </div>
        </div>

        {/* --- NAVEGACIÓN TIPO FLASHSCORE --- */}
        <div className="d-flex justify-content-center mb-4 bg-white rounded-pill shadow-sm p-1 overflow-hidden">
          <button onClick={() => setTab("partida")} style={styles.navBtn(tab === "partida", false)}>INFO</button>
          
          <button 
            disabled={!haJugado}
            onClick={() => setTab("alineaciones")} 
            style={styles.navBtn(tab === "alineaciones", !haJugado)}
          >
            ALINEAZIOAK
          </button>

          <button 
            disabled={!haJugado}
            onClick={() => setTab("estadisticas")} 
            style={styles.navBtn(tab === "estadisticas", !haJugado)}
          >
            ESTATISTIKAK
          </button>

          <button 
            disabled={!haJugado}
            onClick={() => setTab("minuto")} 
            style={styles.navBtn(tab === "minuto", !haJugado)}
          >
            MINUTUZ MINUTU
          </button>
        </div>

        {/* --- CONTENIDOS --- */}
        <div className="row justify-content-center">
          <div className="col-12 col-lg-9">
            
            {/* 1. RESUMEN / INFO */}
            {tab === "partida" && (
              <div className="card border-0 p-4 shadow-sm" style={styles.contentCard}>
                <h5 className="fw-bold mb-4">🥅 GOLEAK</h5>
                {!haJugado && (
                   <div className="p-4 text-center bg-light rounded-4">
                      <p className="mb-0 text-muted">Partida oraindik ez da hasi. Estatistikak partida amaitzean agertuko dira.</p>
                   </div>
                )}
                {haJugado && partido.goles?.map((g, i) => (
                  <div key={i} className="d-flex align-items-center py-3 border-bottom stat-row">
                    <div className="fw-bold text-primary me-4" style={{width: "40px"}}>{g.minuto}'</div>
                    <div className="flex-grow-1">
                      <span className="fw-bold">{g.jugador}</span> 
                      <small className="text-muted ms-2">({g.equipo})</small>
                    </div>
                    <div className="h5 mb-0">⚽</div>
                  </div>
                ))}
                <div className="mt-5 p-3 rounded-4 bg-light border">
                  <div className="row text-center">
                    <div className="col-md-4 border-end"><strong>EPAILEA</strong><br/>{partido.arbitro}</div>
                    <div className="col-md-4 border-end"><strong>ESTADIOA</strong><br/>{partido.estadio}</div>
                    <div className="col-md-4"><strong>IKUSLEAK</strong><br/>{partido.asistencia || "---"}</div>
                  </div>
                </div>
              </div>
            )}

            {/* 2. ALINEACIONES (SOLO SI HA JUGADO) */}
            {haJugado && tab === "alineaciones" && (
              <div className="row g-4" style={{animation: "fadeInUp 0.4s ease-out"}}>
                {[
                  { name: partido.local, data: partido.alineaciones.local, sup: partido.suplentes.local, color: "#1a1d21" },
                  { name: partido.visitante, data: partido.alineaciones.visitante, sup: partido.suplentes.visitante, color: "#0d6efd" }
                ].map((team, idx) => (
                  <div className="col-md-6" key={idx}>
                    <div className="card border-0 shadow-sm" style={{borderRadius: "20px"}}>
                      <div className="p-3 text-white rounded-top" style={{backgroundColor: team.color}}>
                        <h6 className="mb-0 fw-bold">{team.name}</h6>
                      </div>
                      <div className="p-3">
                        <small className="fw-bold text-muted d-block mb-3">HAMAIKAKOA</small>
                        {team.data.titulares.map((p, i) => (
                          <div key={i} className="py-2 border-bottom small d-flex justify-content-between">
                            <span>{p}</span><span className="text-muted opacity-50">#{(i+1)*2}</span>
                          </div>
                        ))}
                        <small className="fw-bold text-muted d-block mt-4 mb-2">ORDEZKOAK</small>
                        <div className="text-muted small">
                          {team.sup.join(", ")}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* 3. ESTADÍSTICAS (SOLO SI HA JUGADO) */}
            {haJugado && tab === "estadisticas" && (
              <div className="card border-0 p-4 shadow-sm" style={styles.contentCard}>
                <h5 className="fw-bold mb-5 text-center">PARTIDAREN DATUAK</h5>
                {[
                  {label: "Tiroak", val: partido.tiros},
                  {label: "Tiroak portera", val: partido.tiros_puerta},
                  {label: "Faltak", val: partido.faltas},
                  {label: "Kornerak", val: partido.corners}
                ].map((stat, i) => (
                  <div key={i} className="mb-4">
                    <div className="d-flex justify-content-between mb-1 fw-bold">
                      <span className="fs-5">{stat.val.local}</span>
                      <span className="small text-muted text-uppercase pt-2">{stat.label}</span>
                      <span className="fs-5">{stat.val.visitante}</span>
                    </div>
                    <div className="progress" style={{height: "8px", borderRadius: "10px"}}>
                      <div className="progress-bar bg-dark" style={{width: `${(stat.val.local/(stat.val.local+stat.val.visitante))*100}%`}}></div>
                      <div className="progress-bar bg-primary" style={{width: `${(stat.val.visitante/(stat.val.local+stat.val.visitante))*100}%`}}></div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* 4. MINUTO A MINUTO (SOLO SI HA JUGADO) */}
            {haJugado && tab === "minuto" && (
              <div className="card border-0 p-5 shadow-sm" style={styles.contentCard}>
                <h5 className="fw-bold mb-5 text-center">⏱️ JARRAIPENA</h5>
                <div className="ms-4">
                  {partido.minuto_a_minuto.map((e, i) => (
                    <div key={i} className="timeline-item">
                      <p className="mb-0 fw-semibold text-dark">{e}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}