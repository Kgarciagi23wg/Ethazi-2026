import React, { useState } from "react";

// Lista de jugadores con dorsal y nombre
const jugadores = [
  { dorsal: 1, nombre: "Álex Remiro" },
  { dorsal: 13, nombre: "Unai Marrero" },
  { dorsal:32, nombre:"Aitor Fraga"},
  { dorsal:41, nombre:"Theo Folgado"},
  { dorsal:2, nombre:"Jon Aramburu"},
  { dorsal:3, nombre:"Aihen Muñoz"},
  { dorsal:4, nombre:"Jon Gorrotxategi"},
  { dorsal:5, nombre:"Igor Zubeldia"},
  { dorsal:6, nombre:"Aritz Elustondo"},
  { dorsal:16, nombre:"Duje Ćaleta‑Car"},
  { dorsal:20, nombre:"Álvaro Odriozola"},
  { dorsal:31, nombre:"Jon Martín"},
  { dorsal:38, nombre:"Luken Beitia"},
  { dorsal:8, nombre:"Beñat Turrientes"},
  { dorsal:12, nombre:"Yangel Herrera"},
  { dorsal:17, nombre:"Sergio Gómez"},
  { dorsal:18, nombre:"Carlos Soler"},
  { dorsal:21, nombre:"Arsen Zakharyan"},
  { dorsal:22, nombre:"Mikel Goti López"},
  { dorsal:23, nombre:"Brais Méndez"},
  { dorsal:7, nombre:"Ander Barrenetxea"},
  { dorsal:9, nombre:"Orri Steinn Óskarsson"},
  { dorsal:10, nombre:"Mikel Oyarzabal"},
  { dorsal:11, nombre:"Gonçalo Guedes"},
  { dorsal:14, nombre:"Takefusa Kubo"},
  { dorsal:19, nombre:"Jon Karrikaburu"}
];

export default function OnceInicial() {
  // Array con 11 elementos (para los 11 jugadores)
  const [once, setOnce] = useState(Array(11).fill(""));

  // Maneja el cambio de un select
  const handleChange = (index, valor) => {
    const nuevoOnce = [...once];
    nuevoOnce[index] = valor;
    setOnce(nuevoOnce);
  };

  return (
    <div>
      <h1>Elige tu once inicial</h1>
      {once.map((jugadorSeleccionado, index) => (
        <div key={index} style={{ margin: "10px 0" }}>
          <label>Jugador {index + 1}: </label>
          <select
            value={jugadorSeleccionado}
            onChange={(e) => handleChange(index, e.target.value)}
          >
            {/* Opción en blanco */}
            <option value="">-- Selecciona --</option>

            {jugadores.map((jugador) => {
              // Si el jugador ya está seleccionado en otro select, deshabilitarlo
              const estaSeleccionadoEnOtro =
                once.includes(jugador.nombre) && jugador.nombre !== jugadorSeleccionado;
              return (
                <option
                  key={jugador.dorsal}
                  value={jugador.nombre}
                  disabled={estaSeleccionadoEnOtro}
                >
                  {jugador.dorsal} - {jugador.nombre}
                </option>
              );
            })}
          </select>
        </div>
      ))}

      <h2>Once elegido:</h2>
      <ul>
        {once.map((j, i) => (
          <li key={i}>{j || "(vacío)"}</li>
        ))}
      </ul>
    </div>
  );
}
