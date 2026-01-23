import React from "react";
import Klasifikazioa from "../components/Klasifikazioa.jsx";

// Lista de equipos de LaLiga (la que ya tenías)
const taldeak = [
    { taldea: "Arsenal", PJ: 17, V: 14, E: 1, D: 2, GF: 49, GC: 20, escudo: "/T.Premier/arsenal.png" },
    { taldea: "Manchester City", PJ: 17, V: 14, E: 1, D: 2, GF: 49, GC: 20, escudo: "/T.Premier/city.png" },
    { taldea: "Aston Villa", PJ: 17, V: 14, E: 1, D: 2, GF: 49, GC: 20, escudo: "/T.Premier/astonVilla.png" },
    { taldea: "Liverpool", PJ: 17, V: 14, E: 1, D: 2, GF: 49, GC: 20, escudo: "/T.Premier/liverpool.png" },
    { taldea: "Brentford", PJ: 17, V: 14, E: 1, D: 2, GF: 49, GC: 20, escudo: "/T.Premier/brentford.png" },
    { taldea: "Newcastle", PJ: 17, V: 14, E: 1, D: 2, GF: 49, GC: 20, escudo: "/T.Premier/newcastle.png" },
    { taldea: "Manchester United", PJ: 17, V: 14, E: 1, D: 2, GF: 49, GC: 20, escudo: "/T.Premier/manchesterUnited.png" },
    { taldea: "Chelsea", PJ: 17, V: 14, E: 1, D: 2, GF: 49, GC: 20, escudo: "/T.Premier/chelsea.png" },
    { taldea: "Fulham", PJ: 17, V: 14, E: 1, D: 2, GF: 49, GC: 20, escudo: "/T.Premier/fulham.png" },
    { taldea: "Sunderland", PJ: 17, V: 14, E: 1, D: 2, GF: 49, GC: 20, escudo: "/T.Premier/sunderland.png" },
    { taldea: "Brighton", PJ: 17, V: 14, E: 1, D: 2, GF: 49, GC: 20, escudo: "/T.Premier/brighton.png" },
    { taldea: "Everton", PJ: 17, V: 14, E: 1, D: 2, GF: 49, GC: 20, escudo: "/T.Premier/everton.png" },
    { taldea: "Crystal Palace", PJ: 17, V: 14, E: 1, D: 2, GF: 49, GC: 20, escudo: "/T.Premier/crystal.png" },
    { taldea: "Tottenham", PJ: 17, V: 14, E: 1, D: 2, GF: 49, GC: 20, escudo: "/T.Premier/tottenham.png" },
    { taldea: "Bournemouth", PJ: 17, V: 14, E: 1, D: 2, GF: 49, GC: 20, escudo: "/T.Premier/bournemouth.png" },
    { taldea: "Leeds", PJ: 17, V: 14, E: 1, D: 2, GF: 49, GC: 20, escudo: "/T.Premier/leeds.png" },
    { taldea: "Nottingham Forest", PJ: 17, V: 14, E: 1, D: 2, GF: 49, GC: 20, escudo: "/T.Premier/nottinghamForest.png" },
    { taldea: "West Ham", PJ: 17, V: 14, E: 1, D: 2, GF: 49, GC: 20, escudo: "/T.Premier/westHam.png" },
    { taldea: "Burnley", PJ: 17, V: 14, E: 1, D: 2, GF: 49, GC: 20, escudo: "/T.Premier/burnley.png" },
    { taldea: "Wolves", PJ: 17, V: 14, E: 1, D: 2, GF: 49, GC: 20, escudo: "/T.Premier/wolves.png" },

];

function Premier() {
  return (
    <div className="bg-black container-fluid p-0">
      <h1 className="container pt-5">
        <img src="/liga3.png" alt="Premier League" width="100" height="100" />
      </h1>

      {/* Pasamos los equipos a Klasifikazioa */}
      <Klasifikazioa equipos={taldeak} />
    </div>
  );
}

export default Premier;
