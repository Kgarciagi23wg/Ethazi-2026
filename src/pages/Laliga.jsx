import React from "react";
import Klasifikazioa from "../components/Klasifikazioa.jsx";

// Lista de equipos de LaLiga (la que ya tenías)
const taldeak = [
  { taldea: "FC Barcelona", PJ: 17, V: 14, E: 1, D: 2, GF: 49, GC: 20, escudo: "/T.Laliga/barcelona.png" },
  { taldea: "Real Madrid", PJ: 17, V: 12, E: 3, D: 2, GF: 34, GC: 16, escudo: "/T.Laliga/madrid.png" },
  { taldea: "Villareal", PJ: 15, V: 11, E: 2, D: 2, GF: 31, GC: 13, escudo: "/T.Laliga/villareal.png" },
  { taldea: "Atletico Madrid", PJ: 17, V: 10, E: 4, D: 3, GF: 30, GC: 16, escudo: "/T.Laliga/atleticoMadrid.png" },
  { taldea: "RCD Espayol", PJ: 16, V: 9, E: 3, D: 5, GF: 20, GC: 16, escudo: "/T.Laliga/espayol.png" },
  { taldea: "Real Betis", PJ: 16, V: 6, E: 7, D: 3, GF: 25, GC: 19, escudo: "/T.Laliga/betis.png" },
  { taldea: "Athletic Club", PJ: 17, V: 7, E: 5, D: 5, GF: 22, GC: 21, escudo: "/T.Laliga/athleticClub.png" },
  { taldea: "Celta de Vigo", PJ: 16, V: 5, E: 7, D: 4, GF: 29, GC: 19, escudo: "/T.Laliga/celtadevigo.png" },
  { taldea: "Sevilla", PJ: 16, V: 6, E: 2, D: 8, GF: 24, GC: 24, escudo: "/T.Laliga/sevilla.png" },
  { taldea: "Getafe", PJ: 16, V: 6, E: 2, D: 8, GF: 13, GC: 18, escudo: "/T.Laliga/getafe.png" },
  { taldea: "Elche C.F.", PJ: 16, V: 4, E: 7, D: 5, GF: 19, GC: 20, escudo: "/T.Laliga/elche.png" },
  { taldea: "Alaves", PJ: 16, V: 5, E: 3, D: 8, GF: 14, GC: 17, escudo: "/T.Laliga/alaves.png" },
  { taldea: "Rayo Vallecano", PJ: 16, V: 4, E: 6, D: 6, GF: 13, GC: 16, escudo: "/T.Laliga/rayoVallecano.png" },
  { taldea: "R.C.D. Mallorca", PJ: 16, V: 4, E: 5, D: 7, GF: 18, GC: 23, escudo: "/T.Laliga/mallorca.png" },
  { taldea: "Real Sociedad", PJ: 16, V: 4, E: 4, D: 8, GF: 20, GC: 24, escudo: "/T.Laliga/realSociedad.png" },
  { taldea: "Osasuna", PJ: 16, V: 4, E: 3, D: 9, GF: 14, GC: 20, escudo: "/T.Laliga/osasuna.png" },
  { taldea: "Valencia C.F.", PJ: 16, V: 3, E: 6, D: 7, GF: 15, GC: 25, escudo: "/T.Laliga/valencia.png" },
  { taldea: "Girona", PJ: 16, V: 3, E: 6, D: 7, GF: 15, GC: 30, escudo: "/T.Laliga/girona.png" },
  { taldea: "Real Oviedo", PJ: 16, V: 2, E: 4, D: 10, GF: 7, GC: 26, escudo: "/T.Laliga/oviedo.png" },
  { taldea: "Levante", PJ: 15, V: 2, E: 3, D: 10, GF: 16, GC: 28, escudo: "/T.Laliga/levanted.png" },
];

function Laliga() {
  return (
    <div className="bg-black container-fluid p-0">
      <h1 className="container pt-5">
        <img src="/public/liga1.png" alt="La Liga" width="100" height="100" />
         <button
          className=" font-bold py-2 px-4 rounded ml-4"
          onClick={() => (window.location.href = "/partiduakLaliga")}
        >
          Partiduak
        </button>
      </h1>

      {/* Botón que lleva a /partiduakLaliga */}
      <div className="container pt-3 pb-3">
       
      </div>

      {/* Pasamos los equipos a Klasifikazioa */}
      <Klasifikazioa equipos={taldeak} />
    </div>
  );
}


export default Laliga;
