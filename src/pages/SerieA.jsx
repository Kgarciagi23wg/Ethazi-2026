import React from "react";
import Klasifikazioa from "../components/Klasifikazioa.jsx";

// Lista de equipos de Serie A
const taldeak = [
    { taldea: "Inter Milan", PJ: 17, V: 14, E: 1, D: 2, GF: 49, GC: 20, escudo: "/T.SerieA/InterMilan.png" },
    { taldea: "AC Milan", PJ: 17, V: 14, E: 1, D: 2, GF: 49, GC: 20, escudo: "/T.SerieA/ACMilan.png" },
    { taldea: "Napoli", PJ: 17, V: 14, E: 1, D: 2, GF: 49, GC: 20, escudo: "/T.SerieA/Napoles.png" },
    { taldea: "Juventus", PJ: 17, V: 14, E: 1, D: 2, GF: 49, GC: 20, escudo: "/T.SerieA/Juventus.png" },
    { taldea: "Roma", PJ: 17, V: 14, E: 1, D: 2, GF: 49, GC: 20, escudo: "/T.SerieA/ASRoma.png" },
    { taldea: "Como", PJ: 17, V: 14, E: 1, D: 2, GF: 49, GC: 20, escudo: "/T.SerieA/Como.png" },
    { taldea: "Atalanta", PJ: 17, V: 14, E: 1, D: 2, GF: 49, GC: 20, escudo: "/T.SerieA/Atalanta.png" },
    { taldea: "Bologna", PJ: 17, V: 14, E: 1, D: 2, GF: 49, GC: 20, escudo: "/T.SerieA/Bologna.png" },
    { taldea: "Lazio", PJ: 17, V: 14, E: 1, D: 2, GF: 49, GC: 20, escudo: "/T.SerieA/Lazio.png" },
    { taldea: "Udinese", PJ: 17, V: 14, E: 1, D: 2, GF: 49, GC: 20, escudo: "/T.SerieA/Udinese.png" },
    { taldea: "Sassuolo", PJ: 17, V: 14, E: 1, D: 2, GF: 49, GC: 20, escudo: "/T.SerieA/Sassuolo.png" },
    { taldea: "Torino", PJ: 17, V: 14, E: 1, D: 2, GF: 49, GC: 20, escudo: "/T.SerieA/Torino.png" },
    { taldea: "Cremonese", PJ: 17, V: 14, E: 1, D: 2, GF: 49, GC: 20, escudo: "/T.SerieA/Cremonese.png" },
    { taldea: "Cagliari", PJ: 17, V: 14, E: 1, D: 2, GF: 49, GC: 20, escudo: "/T.SerieA/Cagliari.png" },
    { taldea: "Parma", PJ: 17, V: 14, E: 1, D: 2, GF: 49, GC: 20, escudo: "/T.SerieA/Parma.png" },
    { taldea: "Lecce", PJ: 17, V: 14, E: 1, D: 2, GF: 49, GC: 20, escudo: "/T.SerieA/Lecce.png" },
    { taldea: "Genoa", PJ: 17, V: 14, E: 1, D: 2, GF: 49, GC: 20, escudo: "/T.SerieA/Genoa.png" },
    { taldea: "Hellas Verona", PJ: 17, V: 14, E: 1, D: 2, GF: 49, GC: 20, escudo: "/T.SerieA/HellasVerona.png" },
    { taldea: "Fiorentina", PJ: 17, V: 14, E: 1, D: 2, GF: 49, GC: 20, escudo: "/T.SerieA/Fiorentina.png" },
    { taldea: "Pisa", PJ: 17, V: 14, E: 1, D: 2, GF: 49, GC: 20, escudo: "/T.SerieA/Pisa.png" },
    

];

function SerieA() {
  return (
    <div className="bg-black container-fluid p-0">
      <h1 className="container pt-5">
        <img src="/public/liga4.png" alt="Bundesliga" width="100" height="100" />
      </h1>

      {/* Pasamos los equipos a Klasifikazioa */}
      <Klasifikazioa equipos={taldeak} />
    </div>
  );
}

export default SerieA;