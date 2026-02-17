import React, { useEffect, useState } from "react";
import Klasifikazioa from "../components/Klasifikazioa.jsx";

function Premier() {
  const [taldeak, setTaldeak] = useState([]);

  // Mapping de Premier League: talde_id → nombre
  const nombresPremier = {
    1: "Arsenal",
    2: "Manchester City",
    3: "Aston Villa",
    4: "Liverpool",
    5: "Brentford",
    6: "Newcastle",
    7: " Manchester United",
    8: "Chelsea",
    9: "Fulham",
    10: "Sunderland",
    11: "Brighton",
    12: "Everton",
    13: "Crystal Palace",
    14: "Tottenham",
    15: "Bournemouth",
    16: "Leeds United",
    17: "Nottingham Forest",
    18: "West Ham",
    19: "Burnley",
    20: "Wolverhampton",
  };

  useEffect(() => {
    fetch("http://10.14.1.26:8000/sailkapena/premier")
      .then((res) => res.json())
      .then((data) => {
        // Agregamos el nombre de cada equipo
        const equiposConNombres = data.map((t) => ({
          ...t,
          taldea: nombresPremier[t.talde_id] || "Desconocido",
        }));
        setTaldeak(equiposConNombres);
      })
      .catch((err) => console.error("Error cargando Premier:", err));
  }, []);

  return (
    <div className="bg-black container-fluid p-0">
      <h1 className="container pt-5">
        <img src="/liga3.png" alt="Premier League" width="100" height="100" />
        <button
          className="font-bold py-2 px-4 rounded ml-4"
          onClick={() => (window.location.href = "/partiduakPremier")}
        >
          Partiduak
        </button>
      </h1>

      <div className="container pt-3 pb-3"></div>

      {/* Componente compartido */}
      <Klasifikazioa equipos={taldeak} />
    </div>
  );
}

export default Premier;
