import React, { useState, useEffect } from "react";
import Klasifikazioa from "../components/Klasifikazioa.jsx";

function Premier() {
  const [taldeak, setTaldeak] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/sailkapena/ligue1")
      .then((res) => res.json())
      .then((data) => setTaldeak(data))
      .catch((err) => console.error("Error cargando la liga:", err));
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

      {/* Pasamos los equipos a Klasifikazioa */}
      <Klasifikazioa equipos={taldeak} />
    </div>
  );
}

export default Premier;
