import React from "react";
import Klasifikazioa from "../components/Klasifikazioa.jsx";

// Lista de equipos de LaLiga (la que ya tenías)
const taldeak = [
    { taldea: "Bayern Munich", PJ: 17, V: 14, E: 1, D: 2, GF: 49, GC: 20, escudo: "/T.Bundesliga/BayernMunich.png" },
    { taldea: "Borussia Dortmund", PJ: 17, V: 14, E: 1, D: 2, GF: 49, GC: 20, escudo: "/T.Bundesliga/BorussiaDortmund.png" },
    { taldea: "Bayer Leverkusen", PJ: 17, V: 14, E: 1, D: 2, GF: 49, GC: 20, escudo: "/T.Bundesliga/BayerLeverkusen.png" },
    { taldea: "RB Leipzig", PJ: 17, V: 14, E: 1, D: 2, GF: 49, GC: 20, escudo: "/T.Bundesliga/RBLeipzig.png" },
    { taldea: "TSG Hoffenheim", PJ: 17, V: 14, E: 1, D: 2, GF: 49, GC: 20, escudo: "/T.Bundesliga/Hoffenheim.png" },
    { taldea: "VfB Stuttgart", PJ: 17, V: 14, E: 1, D: 2, GF: 49, GC: 20, escudo: "/T.Bundesliga/Stuttgart.png" },
    { taldea: "Eintracht Frankfurt", PJ: 17, V: 14, E: 1, D: 2, GF: 49, GC: 20, escudo: "/T.Bundesliga/Eintracht.png" },
    { taldea: "1. FC Union Berlin", PJ: 17, V: 14, E: 1, D: 2, GF: 49, GC: 20, escudo: "/T.Bundesliga/UnionBerlin.png" },
    { taldea: "SC Freiburg", PJ: 17, V: 14, E: 1, D: 2, GF: 49, GC: 20, escudo: "/T.Bundesliga/Friburgo.png" },
    { taldea: "SV Werder Bremen", PJ: 17, V: 14, E: 1, D: 2, GF: 49, GC: 20, escudo: "/T.Bundesliga/WerderBremen.png" },
    { taldea: "1. FC Köln", PJ: 17, V: 14, E: 1, D: 2, GF: 49, GC: 20, escudo: "/T.Bundesliga/Koln.png" },
    { taldea: "Borussia Monchengladbach", PJ: 17, V: 14, E: 1, D: 2, GF: 49, GC: 20, escudo: "/T.Bundesliga/Monchengladbach.png" },
    { taldea: "Hamburgo", PJ: 17, V: 14, E: 1, D: 2, GF: 49, GC: 20, escudo: "/T.Bundesliga/Hamburgo.png" },
    { taldea: "VfL Wolfsburg", PJ: 17, V: 14, E: 1, D: 2, GF: 49, GC: 20, escudo: "/T.Bundesliga/Wolfsburg.png" },
    { taldea: "FC Augsburg", PJ: 17, V: 14, E: 1, D: 2, GF: 49, GC: 20, escudo: "/T.Bundesliga/Augsburg.png" },
    { taldea: "St . Pauli", PJ: 17, V: 14, E: 1, D: 2, GF: 49, GC: 20, escudo: "/T.Bundesliga/St.Pauli.png" },
    { taldea: "Heidenheim", PJ: 17, V: 14, E: 1, D: 2, GF: 49, GC: 20, escudo: "/T.Bundesliga/Heidenheim.png" },
    { taldea: "1. FSV Mainz 05", PJ: 17, V: 14, E: 1, D: 2, GF: 49, GC: 20, escudo: "/T.Bundesliga/Mainz.png" },

];

function Bundesliga() {
  return (
    <div className="bg-black container-fluid p-0">
      <h1 className="container pt-5">
        <img src="/public/liga5.png" alt="Bundesliga" width="100" height="100" />
      </h1>

      {/* Pasamos los equipos a Klasifikazioa */}
      <Klasifikazioa equipos={taldeak} />
    </div>
  );
}

export default Bundesliga;