import React from "react";
import Klasifikazioa from "../components/Klasifikazioa.jsx";

// Lista de equipos de Ligue 1
const taldeak = [
    { taldea: "Lens", PJ: 17, V: 14, E: 1, D: 2, GF: 49, GC: 20, escudo: "/T.Ligue1/Lens.png" },
    { taldea: "PSG", PJ: 17, V: 14, E: 1, D: 2, GF: 49, GC: 20, escudo: "/T.Ligue1/PSG.png" },
    { taldea: "Marseille", PJ: 17, V: 14, E: 1, D: 2, GF: 49, GC: 20, escudo: "/T.Ligue1/OlympiqueMarsella.png" },
    { taldea:"Lille", PJ :17 ,V :14 ,E :1 ,D :2 ,GF :49 ,GC :20 ,escudo:"/T.Ligue1/LOSCLille.png"},
    { taldea: "Lyon", PJ: 17, V: 14, E: 1, D: 2, GF: 49, GC: 20, escudo: "/T.Ligue1/Lyon.png" },
    { taldea:"Rennes", PJ :17 ,V :14 ,E :1 ,D :2 ,GF :49 ,GC :20 ,escudo:"/T.Ligue1/Rennes.png"},
    { taldea:"Estrasburgo", PJ :17 ,V :14 ,E :1 ,D :2 ,GF :49 ,GC :20 ,escudo:"/T.Ligue1/Estrasburgo.png"},
    { taldea:"Toulouse", PJ :17 ,V :14 ,E :1 ,D :2 ,GF :49 ,GC :20 ,escudo:"/T.Ligue1/Toulouse.png"},
    { taldea: "Monaco", PJ: 17, V: 14, E: 1, D: 2, GF: 49, GC: 20, escudo: "/T.Ligue1/Monaco.png" },
    { taldea:"Angers", PJ :17 ,V :14 ,E :1 ,D :2 ,GF :49 ,GC :20 ,escudo:"/T.Ligue1/Angers.png"},
    { taldea:"Brest", PJ :17 ,V :14 ,E :1 ,D :2 ,GF :49 ,GC :20 ,escudo:"/T.Ligue1/Brest.png"},
    { taldea:"Lorient", PJ :17 ,V :14 ,E :1 ,D :2 ,GF :49 ,GC :20 ,escudo:"/T.Ligue1/Lorient.png"},
    { taldea:"Le Havre", PJ :17 ,V :14 ,E :1 ,D :2 ,GF :49 ,GC :20 ,escudo:"/T.Ligue1/LeHavre.png"},
    { taldea:"Niza", PJ :17 ,V :14 ,E :1 ,D :2 ,GF :49 ,GC :20 ,escudo:"/T.Ligue1/Niza.png"},
    { taldea:"Paris FC", PJ :17 ,V :14 ,E :1 ,D :2 ,GF :49 ,GC :20 ,escudo:"/T.Ligue1/ParisFC.png"},
    { taldea:"Nantes", PJ :17 ,V :14 ,E :1 ,D :2 ,GF :49 ,GC :20 ,escudo:"/T.Ligue1/Nantes.png"},
    { taldea:"Auxerre", PJ :17 ,V :14 ,E :1 ,D :2 ,GF :49 ,GC :20 ,escudo:"/T.Ligue1/Auxerre.png"},
    { taldea:"Metz", PJ :17 ,V :14 ,E :1 ,D :2 ,GF :49 ,GC :20 ,escudo:"/T.Ligue1/Metz.png"},

];
function Ligue1() {
  return (
    <div className="bg-black container-fluid p-0">
      <h1 className="container pt-5">
        <img src="/liga2.svg" alt="Ligue 1" width="100" height="100" />
      </h1>

      {/* Pasamos los equipos a Klasifikazioa */}
      <Klasifikazioa equipos={taldeak} />
    </div>
  );
}

export default Ligue1;