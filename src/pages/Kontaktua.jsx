import React from "react";
import Formularioa from "../components/Formularioa.jsx";
import Informazioa from "../components/Informazioa.jsx";
import "../components/Home.css";

export default function Kontaktua() {
  return (
    <div className="container-fluid p-0">
      {/* Banner superior */}
      <div className="position-relative" style={{ height: "40vh", overflow: "hidden" }}>
        <div 
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background: "linear-gradient(135deg, #0d3b66 0%, #4170bd 100%)",
            opacity: 0.9
          }}
        ></div>
        <div className="position-relative text-white text-center d-flex flex-column justify-content-center align-items-center h-100">
          <h1 className="display-4 fw-bold mb-3">KONTAKTUA</h1>
         
        </div>
      </div>

      {/* Contenido principal */}
      <div className="container py-5">
        <div className="row g-5">
          {/* Columna Izquierda: Informazioa */}
          <div className="col-12 col-lg-6">
            <Informazioa />
          </div>
          
          {/* Columna Derecha: Formularioa */}
          <div className="col-12 col-lg-6">
            <Formularioa />
          </div>
        </div>
      </div>
    </div>
  );
}