import React, { useEffect, useState } from "react";
import Klasifikazioa from "../components/Klasifikazioa.jsx";

function Laliga() {
  const [taldeak, setTaldeak] = useState([]);

  // Mapping de Laliga: talde_id → nombre
  const nombresLaliga = {
    1: "Barcelona",
    2: "Real Madrid",
    3: "Villareal",
    4: "Atlético Madrid",
    5: "Espanyol",
    6: "Betis",
    7: "Athletic Club",
    8: "Celta de Vigo",
    9: "Sevilla",
    10: "Getafe",
    11: "Elche",
    12: "Alavés",
    13: "Rayo Vallecano",
    14: "Mallorca",
    15: "Real Sociedad",
    16: "Osasuna",
    17: "Valencia",
    18: "Girona",
    19: "Oviedo",
    20: "Levante",
  };

  useEffect(() => {
    fetch("http://10.14.1.26:8000/sailkapena/laliga")
      .then((res) => res.json())
      .then((data) => {
        // Agregamos el nombre de cada equipo
        const equiposConNombres = data.map((t) => ({
          ...t,
          taldea: nombresLaliga[t.talde_id] || "Desconocido",
        }));
        setTaldeak(equiposConNombres);
      })
      .catch((err) => console.error("Error cargando LaLiga:", err));
  }, []);

  return (
    <div className="bg-black container-fluid p-0">
      <h1 className="container pt-5">
        <img src="/liga1.png" alt="La Liga" width="100" height="100" />
        <button
          className="font-bold py-2 px-4 rounded ml-4"
          onClick={() => (window.location.href = "/partiduakLaliga")}
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

export default Laliga;
