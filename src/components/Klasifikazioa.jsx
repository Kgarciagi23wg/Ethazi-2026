import React from "react";

// Función para calcular puntos
const calcularPuntos = (equipo) => (equipo.V ?? 0) * 3 + (equipo.E ?? 0);

const Klasifikazioa = ({ equipos }) => {
  // Agregar DG y Pts dinámicamente
  const equiposConDatos = equipos.map((t) => ({
    ...t,
    DG: (t.GF ?? 0) - (t.GC ?? 0),
    Pts: calcularPuntos(t),
  }));

  // Ordenar por Pts, luego DG, luego GF
  equiposConDatos.sort((a, b) => b.Pts - a.Pts || b.DG - a.DG || b.GF - a.GF);

  return (
    <div className="container mt-5">
      <div className="table-responsive">
        <table className="table table-dark table-hover text-center align-middle rounded-3 overflow-hidden">
          <thead className="table-secondary text-dark">
            <tr>
              <th scope="col" className="rounded-start">#</th>
              <th scope="col">Taldea</th>
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
  {equiposConDatos.map((t, index) => (
    <tr key={t.taldea}>
      <th scope="row">{index + 1}</th>

      <td>
        <div className="d-flex align-items-center gap-2">
          <img src={t.escudo} alt={t.taldea} width="35" height="35" />
          <span>{t.taldea}</span>
        </div>
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
