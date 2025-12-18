import React from "react";

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


const calcularPuntos = (equipo) => (equipo.V ?? 0) * 3 + (equipo.E ?? 0) * 1;

const taldeakConDatos = taldeak.map((t) => ({
  ...t,
  DG: (t.GF ?? 0) - (t.GC ?? 0), // diferencia de goles
  Pts: calcularPuntos(t)          // puntos calculados automáticamente
}));


const Klasifikazioa = () => {
  return (
    <div className="container mt-5 ">

      <div className="table-responsive">
        <table className="table table-dark table-hover text-center align-middle rounded-3 overflow-hidden">
          <thead className="table-secondary text-dark">
            <tr>
              <th scope="col" className="rounded-start">#</th>
              <th scope="col">{/* Taldea */}Taldea</th>
              <th scope="col">PJ</th>
              <th scope="col">V</th>
              <th scope="col">E</th>
              <th scope="col">D</th>
              <th scope="col">GF</th>
              <th scope="col">GC</th>
              <th scope="col">DG</th>
              <th scope="col" className="rounded-end">Pts</th>
            </tr>
          </thead>
          <tbody>
            {taldeakConDatos.map((t, index) => (
              <tr key={t.taldea}>
                <th scope="row">{index + 1}</th>
                <td className="d-flex align-items-center gap-2">
                  <img src={t.escudo} alt={t.taldea} width="35" height="35" className="rounded-circle" />
                  {t.taldea}
                </td>
                <td>{t.PJ}</td>
                <td className="text-success">{t.V}</td>
                <td className="text-danger">{t.E}</td>
                <td className="fw-bold">{t.D}</td>
                <td>{t.GF}</td>
                <td>{t.GC}</td>
                <td>{t.DG}</td>
                <td className="fw-bold">{t.Pts}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};


export default Klasifikazioa;
