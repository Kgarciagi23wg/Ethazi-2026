import React, { useEffect, useState } from "react";
import Klasifikazioa from "../components/Klasifikazioa.jsx";

function Ligue1() {
  const [taldeak, setTaldeak] = useState([]);

  // Mapping de Ligue 1: taldea_id → nombre
  const nombresLigue1 = {
    41: "Lens",
    42: "Paris Saint-Germain",
    43: "Olympique Marsella",
    44: "LOSCLille",
    45: "Lyon",
    46: "Rennes",
    47: "Estrasburgo",
    48: "Toulouse",
    49: "Monaco",
    50: "Angers",
    51: "Brest",
    52: "Lorient",
    53: "Le Havre",
    54: "Niza",
    55: "Paris FC",
    56: "Nantes",
    57: "Auxerre",
    58: "Metz",
  };

  useEffect(() => {
    fetch("http://10.14.1.26:8000/sailkapena/ligue1")
      .then((res) => res.json())
      .then((data) => {
        // Agregamos el nombre de cada equipo según taldea_id
        const equiposConNombres = data.map((t) => ({
          ...t,
          taldea: nombresLigue1[t.talde_id] || "Desconocido",
        }));
        setTaldeak(equiposConNombres);
      })
      .catch((err) => console.error("Error cargando Ligue1:", err));
  }, []);

  return (
    <div className="bg-black container-fluid p-0">
      <h1 className="container pt-5">
        <img src="/liga2.svg" alt="Ligue 1" width="100" height="100" />
        <button
          className="font-bold py-2 px-4 rounded ml-4"
          onClick={() => (window.location.href = "/partiduakLigue1")}
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

export default Ligue1;
