import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

const ligas = [
  {
    id: "laliga",
    nombre: "LaLiga",
    logo: "/liga1.png",
    equipos: [
      "Real Madrid",
      "FC Barcelona",
      "Atlético de Madrid",
      "Real Sociedad",
      "Athletic Club",
      "Sevilla",
      "Villarreal",
      "Valencia"
    ]
  },
  {
    id: "premier",
    nombre: "Premier League",
    logo: "/liga3.png",
    equipos: [
      "Manchester City",
      "Manchester United",
      "Liverpool",
      "Arsenal",
      "Chelsea",
      "Tottenham"
    ]
  },
  {
    id: "serieA",
    nombre: "Serie A",
    logo: "/liga4.png",
    equipos: [
      "Juventus",
      "Inter",
      "AC Milan",
      "Napoli",
      "Roma",
      "Lazio"
    ]
  },
  {
    id: "bundesliga",
    nombre: "Bundesliga",
    logo: "/liga5.png",
    equipos: [
      "Bayern München",
      "Borussia Dortmund",
      "RB Leipzig",
      "Bayer Leverkusen"
    ]
  },
  {
    id: "ligue1",
    nombre: "Ligue 1",
    logo: "/liga2.svg",
    equipos: [
      "PSG",
      "Marseille",
      "Lyon",
      "Monaco",
      "Lille"
    ]
  }
];

export default function Perfil() {
  const [perfil, setPerfil] = useState({
    laliga: "",
    premier: "",
    serieA: "",
    bundesliga: "",
    ligue1: ""
  });

  const [modoEdicion, setModoEdicion] = useState(true);

  useEffect(() => {
    const datos = localStorage.getItem("perfilUsuario");
    if (datos) {
      setPerfil(JSON.parse(datos));
      setModoEdicion(false); // si hay datos, empieza en modo vista
    }
  }, []);

  const handleChange = (e) => {
    setPerfil({ ...perfil, [e.target.name]: e.target.value });
  };

  const guardarPerfil = () => {
    localStorage.setItem("perfilUsuario", JSON.stringify(perfil));
    setModoEdicion(false);
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col lg={9}>
          <Card className="shadow border-0 rounded-4">
            <Card.Body className="p-4 p-md-5">
              <h2 className="fw-bold text-center mb-4">
                ⚽ Perfil del Usuario
              </h2>

              

              {/* LIGAS */}
              {ligas.map((liga) => (
                <Card key={liga.id} className="mb-3 bg-light border-0">
                  <Card.Body>
                    <div className="d-flex align-items-center mb-2">
                      <img
                        src={liga.logo}
                        alt={liga.nombre}
                        style={{ height: "35px", marginRight: "12px" }}
                      />
                      <h6 className="mb-0 fw-bold">{liga.nombre}</h6>
                    </div>

                    {modoEdicion ? (
                      <Form.Select
                        name={liga.id}
                        value={perfil[liga.id]}
                        onChange={handleChange}
                      >
                        <option value="">Selecciona equipo</option>
                        {liga.equipos.map((equipo) => (
                          <option key={equipo} value={equipo}>
                            {equipo}
                          </option>
                        ))}
                      </Form.Select>
                    ) : (
                      <p className="mb-0">
                        {perfil[liga.id] || "No definido"}
                      </p>
                    )}
                  </Card.Body>
                </Card>
              ))}

              {/* BOTONES */}
              <div className="d-flex justify-content-center gap-3 mt-4">
                {modoEdicion ? (
                  <Button size="lg" onClick={guardarPerfil}>
                    💾 Guardar perfil
                  </Button>
                ) : (
                  <Button
                    size="lg"
                    variant="outline-primary"
                    onClick={() => setModoEdicion(true)}
                  >
                    ✏️ Editar perfil
                  </Button>
                )}
              </div>

            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}