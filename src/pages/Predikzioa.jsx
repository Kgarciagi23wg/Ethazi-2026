import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const jugadores = [
  { dorsal: 1, nombre: "Álex Remiro", imagen: "/T.Laliga/RealSociedad/AlexRemiro.png", camiseta: "Remiro" },
  { dorsal: 13, nombre: "Unai Marrero", imagen: "/placeholder.png", camiseta: "Marrero" },
  { dorsal:32, nombre:"Aitor Fraga", imagen: "/placeholder.png", camiseta: "Fraga" },
  { dorsal:41, nombre:"Theo Folgado", imagen: "/placeholder.png", camiseta: "Folgado" },
  { dorsal:2, nombre:"Jon Aramburu", imagen: "/placeholder.png", camiseta: "Aramburu" },
  { dorsal:3, nombre:"Aihen Muñoz", imagen: "/placeholder.png", camiseta: "Muñoz" },
  { dorsal:4, nombre:"Jon Gorrotxategi", imagen: "/placeholder.png", camiseta: "Gorrotxategi" },
  { dorsal:5, nombre:"Igor Zubeldia", imagen: "/placeholder.png", camiseta: "Zubeldia" },
  { dorsal:6, nombre:"Aritz Elustondo", imagen: "/placeholder.png", camiseta: "Elustondo" },
  { dorsal:16, nombre:"Duje Ćaleta‑Car", imagen: "/placeholder.png", camiseta: "Ćaleta‑Car" },
  { dorsal:20, nombre:"Álvaro Odriozola", imagen: "/placeholder.png", camiseta: "Odriozola" },
  { dorsal:31, nombre:"Jon Martín", imagen: "/placeholder.png", camiseta: "Martín" },
  { dorsal:38, nombre:"Luken Beitia", imagen: "/placeholder.png", camiseta: "Beitia" },
  { dorsal:8, nombre:"Beñat Turrientes", imagen: "/placeholder.png", camiseta: "Turrientes" },
  { dorsal:12, nombre:"Yangel Herrera", imagen: "/placeholder.png", camiseta: "Herrera" },
  { dorsal:17, nombre:"Sergio Gómez", imagen: "/placeholder.png", camiseta: "Gómez" },
  { dorsal:18, nombre:"Carlos Soler", imagen: "/placeholder.png", camiseta: "Soler" },
  { dorsal:21, nombre:"Arsen Zakharyan", imagen: "/placeholder.png", camiseta: "Zakharyan" },
  { dorsal:22, nombre:"Mikel Goti López", imagen: "/placeholder.png", camiseta: "Goti" },
  { dorsal:23, nombre:"Brais Méndez", imagen: "/placeholder.png", camiseta: "Méndez" },
  { dorsal:7, nombre:"Ander Barrenetxea", imagen: "/placeholder.png", camiseta: "Barrenetxea" },
  { dorsal:9, nombre:"Orri Steinn Óskarsson", imagen: "/placeholder.png", camiseta: "Óskarsson" },
  { dorsal:10, nombre:"Mikel Oyarzabal", imagen: "/placeholder.png", camiseta: "Oyarzabal" },
  { dorsal:11, nombre:"Gonçalo Guedes", imagen: "/placeholder.png", camiseta: "Guedes" },
  { dorsal:14, nombre:"Takefusa Kubo", imagen: "/placeholder.png", camiseta: "Kubo" },
  { dorsal:19, nombre:"Jon Karrikaburu", imagen: "/placeholder.png", camiseta: "Karrikaburu" }
];

// Definimos las posiciones de los círculos según la alineación
const formaciones = {
  "4-3-3": [
    { top: "10%", left: "50%" }, // portero
    { top: "25%", left: "20%" },
    { top: "25%", left: "40%" },
    { top: "25%", left: "60%" },
    { top: "25%", left: "80%" },
    { top: "50%", left: "25%" },
    { top: "50%", left: "50%" },
    { top: "50%", left: "75%" },
    { top: "75%", left: "20%" },
    { top: "75%", left: "50%" },
    { top: "75%", left: "80%" }
  ],
  "4-2-3-1": [
    { top: "10%", left: "50%" },
    { top: "25%", left: "20%" },
    { top: "25%", left: "40%" },
    { top: "25%", left: "60%" },
    { top: "25%", left: "80%" },
    { top: "50%", left: "35%" },
    { top: "50%", left: "65%" },
    { top: "70%", left: "25%" },
    { top: "70%", left: "50%" },
    { top: "70%", left: "75%" },
    { top: "85%", left: "50%" }
  ],
  "4-4-2": [
    { top: "10%", left: "50%" },
    { top: "25%", left: "20%" },
    { top: "25%", left: "40%" },
    { top: "25%", left: "60%" },
    { top: "25%", left: "80%" },
    { top: "50%", left: "20%" },
    { top: "50%", left: "40%" },
    { top: "50%", left: "60%" },
    { top: "50%", left: "80%" },
    { top: "75%", left: "40%" },
    { top: "75%", left: "60%" }
  ],
  "5-3-2": [
    { top: "10%", left: "50%" },
    { top: "25%", left: "10%" },
    { top: "25%", left: "30%" },
    { top: "25%", left: "50%" },
    { top: "25%", left: "70%" },
    { top: "25%", left: "90%" },
    { top: "50%", left: "25%" },
    { top: "50%", left: "50%" },
    { top: "50%", left: "75%" },
    { top: "75%", left: "40%" },
    { top: "75%", left: "60%" }
  ],
  "5-4-1": [
    { top: "10%", left: "50%" },
    { top: "25%", left: "10%" },
    { top: "25%", left: "30%" },
    { top: "25%", left: "50%" },
    { top: "25%", left: "70%" },
    { top: "25%", left: "90%" },
    { top: "50%", left: "20%" },
    { top: "50%", left: "40%" },
    { top: "50%", left: "60%" },
    { top: "50%", left: "80%" },
    { top: "75%", left: "50%" }
  ]
};

export default function OnceCampoFormaciones() {
  const [once, setOnce] = useState(Array(11).fill(null));
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [alineacion, setAlineacion] = useState("4-3-3");

  const handleSelect = (index, jugador) => {
    const nuevoOnce = [...once];
    nuevoOnce[index] = jugador;
    setOnce(nuevoOnce);
    setModalVisible(false);
    setSelectedIndex(null);
  };

  return (
    <div style={{ width: "100%", maxWidth: "600px", margin: "0 auto" }}>
      {/* Selector de alineación */}
      <div className="d-flex justify-content-center my-3">
        {Object.keys(formaciones).map(f => (
          <button
            key={f}
            className={`btn mx-1 ${alineacion === f ? "btn-primary" : "btn-outline-primary"}`}
            onClick={() => setAlineacion(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="position-relative">
        <img src="/campo2.jpg" alt="Campo" className="img-fluid w-100" />

        {/* Círculos */}
        {once.map((jugadorSeleccionado, index) => {
          const pos = formaciones[alineacion][index];
          return (
            <div
              key={index}
              className="position-absolute"
              style={{
                top: pos.top,
                left: pos.left,
                transform: "translate(-50%, -50%)",
                textAlign: "center",
              }}
            >
              <div
                className="rounded-circle border border-dark d-flex align-items-center justify-content-center"
                style={{
                  width: "50px",
                  height: "50px",
                  backgroundColor: "#f0f0f0",
                  overflow: "hidden",
                  cursor: "pointer",
                  zIndex: 2,
                }}
                onClick={() => {
                  setSelectedIndex(index);
                  setModalVisible(true);
                }}
              >
                {jugadorSeleccionado && jugadorSeleccionado.imagen ? (
                  <img
                    src={jugadorSeleccionado.imagen}
                    alt={jugadorSeleccionado.nombre}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                ) : (
                  <span>+</span>
                )}
              </div>

              {/* Camiseta debajo */}
              {jugadorSeleccionado && jugadorSeleccionado.camiseta && (
                <div style={{ marginTop: "5px", fontSize: "0.8rem", fontWeight: "bold" }}>
                  {jugadorSeleccionado.camiseta}
                </div>
              )}
            </div>
          );
        })}

        {/* Modal de selección */}
        {modalVisible && selectedIndex !== null && (
          <>
            <div
              className="position-fixed top-50 start-50 translate-middle bg-light border rounded shadow p-3"
              style={{ zIndex: 1000, maxHeight: "400px", overflowY: "auto", width: "300px" }}
            >
              <h5 className="text-center mb-3">Elige jugador</h5>
              {jugadores.map(j => {
                const estaSeleccionadoEnOtro = once.some(
                  (sel, i) => sel?.nombre === j.nombre && i !== selectedIndex
                );
                return (
                  <button
                    key={j.dorsal}
                    className="btn btn-sm btn-outline-primary mb-1 w-100 d-flex align-items-center"
                    onClick={() => handleSelect(selectedIndex, j)}
                    disabled={estaSeleccionadoEnOtro}
                  >
                    {j.imagen && (
                      <img 
                        src={j.imagen} 
                        alt={j.nombre} 
                        style={{ width: "30px", height: "30px", objectFit: "cover", marginRight: "10px", borderRadius: "50%" }} 
                      />
                    )}
                    {j.dorsal} - {j.nombre}
                  </button>
                );
              })}
              <button
                className="btn btn-secondary mt-2 w-100"
                onClick={() => setModalVisible(false)}
              >
                Cancelar
              </button>
            </div>

            {/* Fondo oscuro */}
            <div
              className="position-fixed top-0 start-0 w-100 h-100"
              style={{ backgroundColor: "rgba(0,0,0,0.3)", zIndex: 999 }}
              onClick={() => setModalVisible(false)}
            />
          </>
        )}
      </div>
    </div>
  );
}
