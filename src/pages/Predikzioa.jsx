import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ligas } from "../Data/ligas";

const formaciones = {
  "4-3-3": [{ top: "10%", left: "50%" }, { top: "25%", left: "20%" }, { top: "25%", left: "40%" }, { top: "25%", left: "60%" }, { top: "25%", left: "80%" }, { top: "50%", left: "25%" }, { top: "50%", left: "50%" }, { top: "50%", left: "75%" }, { top: "75%", left: "25%" }, { top: "75%", left: "50%" }, { top: "75%", left: "75%" }],
  "4-2-3-1": [{ top: "10%", left: "50%" }, { top: "25%", left: "20%" }, { top: "25%", left: "40%" }, { top: "25%", left: "60%" }, { top: "25%", left: "80%" }, { top: "45%", left: "35%" }, { top: "45%", left: "65%" }, { top: "65%", left: "25%" }, { top: "65%", left: "50%" }, { top: "65%", left: "75%" }, { top: "80%", left: "50%" }],
  "4-4-2": [{ top: "10%", left: "50%" }, { top: "25%", left: "20%" }, { top: "25%", left: "40%" }, { top: "25%", left: "60%" }, { top: "25%", left: "80%" }, { top: "50%", left: "20%" }, { top: "50%", left: "40%" }, { top: "50%", left: "60%" }, { top: "50%", left: "80%" }, { top: "75%", left: "40%" }, { top: "75%", left: "60%" }],
  "5-3-2": [{ top: "10%", left: "50%" }, { top: "25%", left: "10%" }, { top: "25%", left: "30%" }, { top: "25%", left: "50%" }, { top: "25%", left: "70%" }, { top: "25%", left: "90%" }, { top: "50%", left: "25%" }, { top: "50%", left: "50%" }, { top: "50%", left: "75%" }, { top: "75%", left: "40%" }, { top: "75%", left: "60%" }],
  "5-4-1": [{ top: "10%", left: "50%" }, { top: "25%", left: "10%" }, { top: "25%", left: "30%" }, { top: "25%", left: "50%" }, { top: "25%", left: "70%" }, { top: "25%", left: "90%" }, { top: "50%", left: "20%" }, { top: "50%", left: "40%" }, { top: "50%", left: "60%" }, { top: "50%", left: "80%" }, { top: "75%", left: "50%" }]
};

export default function Predikzioa() {
  const [once, setOnce] = useState(Array(11).fill(null));
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [alineacion, setAlineacion] = useState("4-3-3");
  const [ligaSeleccionada, setLigaSeleccionada] = useState("LaLiga");
  const [equipoSeleccionado, setEquipoSeleccionado] = useState(null);

  const equipos = ligas[ligaSeleccionada]?.equipos || {};
  const jugadores = equipoSeleccionado ? equipos[equipoSeleccionado]?.jugadores : [];

  // Lógica de sincronización con el Perfil
  useEffect(() => {
    const cargarFavorito = () => {
      const datos = localStorage.getItem("perfilUsuario");
      if (datos) {
        const perfil = JSON.parse(datos);
        const nombreFavorito = perfil[ligaSeleccionada];
        
        if (nombreFavorito) {
          const idEncontrado = Object.keys(equipos).find(key => equipos[key].nombre === nombreFavorito);
          if (idEncontrado) setEquipoSeleccionado(idEncontrado);
        }
      }
    };
    cargarFavorito();
    window.addEventListener("storage", cargarFavorito);
    return () => window.removeEventListener("storage", cargarFavorito);
  }, [ligaSeleccionada, equipos]);

  const handleSelect = (index, jugador) => {
    const nuevoOnce = [...once];
    nuevoOnce[index] = jugador;
    setOnce(nuevoOnce);
    setModalVisible(false);
  };

  return (
    <div className="container-fluid py-3">
      <div className="row">
        {/* IZQUIERDA VACÍA */}
        <div className="col-md-2"></div>

        {/* CENTRO - CAMPO */}
        <div className="col-md-8 d-flex flex-column align-items-center">
          <div className="d-flex justify-content-center my-3 flex-wrap">
            {Object.keys(formaciones).map(f => (
              <button key={f} className={`btn mx-1 my-1 ${alineacion === f ? "btn-primary" : "btn-outline-primary"}`} onClick={() => setAlineacion(f)} disabled={!equipoSeleccionado}>
                {f}
              </button>
            ))}
          </div>

          <div className="position-relative" style={{ width: "100%", maxWidth: "600px", height: "90vh", overflow: "hidden" }}>
            <img src="/campo3.png" alt="Campo" style={{ width: "100%", height: "100%", objectFit: "contain" }} />

            {once.map((jugadorSeleccionado, index) => {
              const pos = formaciones[alineacion][index];
              return (
                <div key={index} className="position-absolute" style={{ top: pos.top, left: pos.left, transform: "translate(-50%, -50%)", textAlign: "center" }}>
                  <div
                    className="rounded-circle border border-dark d-flex align-items-center justify-content-center shadow-sm"
                    style={{ width: "50px", height: "50px", backgroundColor: "#f0f0f0", cursor: equipoSeleccionado ? "pointer" : "not-allowed" }}
                    onClick={() => { if (!equipoSeleccionado) return; setSelectedIndex(index); setModalVisible(true); }}
                  >
                    {jugadorSeleccionado ? (
                      <img src={jugadorSeleccionado.imagen} alt={jugadorSeleccionado.nombre} style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" }} />
                    ) : ( <span>+</span> )}
                  </div>
                  {jugadorSeleccionado && (
                    <div style={{ fontSize: "0.8rem", fontWeight: "bold", background: "rgba(255,255,255,0.7)", borderRadius: "4px", padding: "0 2px" }}>
                      {jugadorSeleccionado.camiseta}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* MODAL DE SELECCIÓN DE JUGADORES (Estilo original restaurado) */}
          {modalVisible && (
            <>
              <div
                className="position-fixed top-50 start-50 translate-middle bg-light border rounded shadow p-3"
                style={{ zIndex: 1000, width: "300px", maxHeight: "400px", overflowY: "auto" }}
              >
                <h5 className="text-center mb-3">Elige jugador</h5>

                {jugadores.map(j => {
                  const ocupado = once.some(sel => sel?.nombre === j.nombre);
                  return (
                    <button
                      key={j.nombre}
                      className="btn btn-sm btn-outline-primary w-100 mb-1 d-flex align-items-center"
                      disabled={ocupado}
                      onClick={() => handleSelect(selectedIndex, j)}
                    >
                      {j.imagen && (
                        <img
                          src={j.imagen}
                          alt={j.nombre}
                          style={{ width: "35px", height: "35px", objectFit: "cover", borderRadius: "50%", marginRight: "10px" }}
                        />
                      )}
                      <span>{j.dorsal} - {j.nombre}</span>
                    </button>
                  );
                })}

                <button className="btn btn-secondary w-100 mt-2" onClick={() => setModalVisible(false)}>
                  Cancelar
                </button>
              </div>

              <div
                className="position-fixed top-0 start-0 w-100 h-100"
                style={{ backgroundColor: "rgba(0,0,0,0.3)", zIndex: 999 }}
                onClick={() => setModalVisible(false)}
              />
            </>
          )}
        </div>

        {/* DERECHA - SELECTORES */}
        <div className="col-md-2">
          <div className="mb-3">
            <select
              className="form-select"
              value={ligaSeleccionada}
              onChange={(e) => {
                setLigaSeleccionada(e.target.value);
                setEquipoSeleccionado(null);
                setOnce(Array(11).fill(null));
              }}
            >
              {Object.entries(ligas).map(([key, liga]) => (
                <option key={key} value={key}>{liga.nombre}</option>
              ))}
            </select>
          </div>

          <div>
            <h6>Elige equipo</h6>
            {Object.entries(equipos).map(([key, equipo]) => (
              <div key={key} className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="equipo"
                  id={key}
                  checked={equipoSeleccionado === key}
                  onChange={() => {
                    setEquipoSeleccionado(key);
                    setOnce(Array(11).fill(null));
                  }}
                />
                <label className="form-check-label" htmlFor={key}>
                  {equipo.nombre}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}