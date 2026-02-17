import React, { useState, useEffect } from "react";
import Klasifikazioa from "../components/Klasifikazioa.jsx";

function Bundesliga() {
  const [taldeak, setTaldeak] = useState([]);

  // Mapping Bundesliga: taldea_id → nombre
  const nombresBundesliga = {
    79: "Bayern Munich",
    80: "Borussia Dortmund",
    81: "Bayer Leverkusen",
    82: "RB Leipzig",
    83: "Hoffenheim",
    84: "Stuttgart",
    85: "Eintracht Frankfurt",
    86: "Union Berlin",
    87: "Friburgo",
    88: "Werder Bremen",
    89: "Köln",
    90: "Borussia M'gladbach",
    91: "Hamburgo",
    92: "Wolfsburg",
    93: "Augsburg",
    94: "St. Pauli",
    95: "Heidenheim",
    96: "Mainz",
  };

  useEffect(() => {
    fetch("http://10.14.1.26:8000/sailkapena/bundesliga")
      .then((res) => res.json())
      .then((data) => {
        // Agregamos el nombre de cada equipo según taldea_id
        const equiposConNombres = data.map((t) => ({
          ...t,
          taldea: nombresBundesliga[t.talde_id] || "Desconocido",
        }));
        setTaldeak(equiposConNombres);
      })
      .catch((err) => console.error("Error cargando Bundesliga:", err));
  }, []);

  return (
    <div className="bg-black container-fluid p-0">
      <h1 className="container pt-5">
        <img src="/liga5.png" alt="Bundesliga" width="100" height="100" />
        <button
          className="font-bold py-2 px-4 rounded ml-4"
          onClick={() => (window.location.href = "/partiduakBundesliga")}
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

export default Bundesliga;
