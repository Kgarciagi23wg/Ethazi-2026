import React, { useState, useEffect } from "react";
import Klasifikazioa from "../components/Klasifikazioa.jsx";

function SerieA() {
  const [taldeak, setTaldeak] = useState([]);

  // Mapping Serie A: taldea_id → nombre
  const nombresSerieA = {
    59: "Inter Milan",
    60: "AC Milan",
    61: "Napoles",
    62: "Juventus",
    63: "AS Roma",
    64: "Como",
    65: "Atalanta",
    66: "Bologna",
    67: "Lazio",
    68: "Udinese",
    69: "Sassuolo",
    70: "Torino",
    71: "Cremonese",
    72: "Cagliari",
    73: "Parma",
    74: "Lecce",
    75: "Genoa",
    76: "Hellas Verona",
    77: "Fiorentina",
    78: "Pisa",
  };

  useEffect(() => {
    fetch("http://10.14.1.26:8000/sailkapena/serieA")
      .then((res) => res.json())
      .then((data) => {
        // Agregamos el nombre de cada equipo según taldea_id
        const equiposConNombres = data.map((t) => ({
          ...t,
          taldea: nombresSerieA[t.talde_id] || "Desconocido",
        }));
        setTaldeak(equiposConNombres);
      })
      .catch((err) => console.error("Error cargando Serie A:", err));
  }, []);

  return (
    <div className="bg-black container-fluid p-0">
      <h1 className="container pt-5">
        <img src="/liga4.png" alt="Serie A" width="100" height="100" />
        <button
          className="font-bold py-2 px-4 rounded ml-4"
          onClick={() => (window.location.href = "/partiduakSerieA")}
        >
          Partiduak
        </button>
      </h1>

      <div className="container pt-3 pb-3"></div>

      {/* Pasamos los equipos a Klasifikazioa */}
      <Klasifikazioa equipos={taldeak} />
    </div>
  );
}

export default SerieA;
