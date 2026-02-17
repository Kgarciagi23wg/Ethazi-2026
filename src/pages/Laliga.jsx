import React, { useEffect, useState } from "react";
import Klasifikazioa from "../components/Klasifikazioa.jsx";

function Ligue1() {
  const [taldeak, setTaldeak] = useState([]);

  useEffect(() => {
    fetch("http://10.14.1.26:8000/sailkapena/laliga")
      .then((res) => res.json())
      .then((data) => setTaldeak(data))
      .catch((err) => console.error("Error cargando laLiga:", err));
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

export default Ligue1;
