import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

const ligasConfig = [
  {
    id: "LaLiga",
    nombre: "La Liga",
    logo: "/liga1.png",
    equipos: ["Real Sociedad", "Real Madrid", "FC Barcelona"]
  },
  {
    id: "PremierLeague",
    nombre: "Premier League",
    logo: "/liga3.png",
    equipos: ["Arsenal", "Manchester City", "Liverpool"]
  },
  {
    id: "Bundesliga",
    nombre: "Bundesliga",
    logo: "/liga5.png",
    equipos: ["Bayern Munich", "Bayer Leverkusen", "Borussia Dortmund"]
  },
  {
    id: "SerieA",
    nombre: "Serie A",
    logo: "/liga4.png",
    equipos: ["AC Milan", "Inter", "Juventus", "Napoli", "Roma", "Lazio"]
  },
  {
    id: "Ligue1",
    nombre: "Ligue 1",
    logo: "/liga2.svg",
    equipos: ["Paris Saint-Germain", "Marseille", "AS Monaco", "Olympique de Lyon", "Lille"]
  }
];

export default function Perfil() {
  const [perfil, setPerfil] = useState({
    LaLiga: "",
    PremierLeague: "",
    Bundesliga: "",
    SerieA: "",
    Ligue1: ""
  });
  const [modoEdicion, setModoEdicion] = useState(false);

  useEffect(() => {
    const datos = localStorage.getItem("perfilUsuario");
    if (datos) {
      setPerfil(JSON.parse(datos));
    } else {
      setModoEdicion(true);
    }
  }, []);

  const handleChange = (e) => {
    setPerfil({ ...perfil, [e.target.name]: e.target.value });
  };

  const guardarPerfil = () => {
    localStorage.setItem("perfilUsuario", JSON.stringify(perfil));
    setModoEdicion(false);
    window.dispatchEvent(new Event("storage")); // Esto avisa a Predikzioa.jsx
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col lg={8}>
          <Card className="shadow-lg border-0 rounded-4">
            <Card.Body className="p-4 p-md-5">
              <h2 className="fw-bold text-center mb-4">⚽ Mi Perfil</h2>
              {ligasConfig.map((liga) => (
                <Card key={liga.id} className="mb-3 bg-light border-0">
                  <Card.Body className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <img src={liga.logo} alt={liga.nombre} style={{ height: "35px", marginRight: "12px" }} />
                      <h6 className="mb-0 fw-bold">{liga.nombre}</h6>
                    </div>
                    {modoEdicion ? (
                      <Form.Select 
                        style={{ width: "200px" }}
                        name={liga.id} 
                        value={perfil[liga.id]} 
                        onChange={handleChange}
                      >
                        <option value="">Selecciona equipo</option>
                        {liga.equipos.map((eq) => <option key={eq} value={eq}>{eq}</option>)}
                      </Form.Select>
                    ) : (
                      <span className="text-primary fw-bold">{perfil[liga.id] || "No definido"}</span>
                    )}
                  </Card.Body>
                </Card>
              ))}
              <div className="d-flex justify-content-center mt-4">
                {modoEdicion ? (
                  <Button size="lg" onClick={guardarPerfil}>💾 Guardar perfil</Button>
                ) : (
                  <Button size="lg" variant="outline-primary" onClick={() => setModoEdicion(true)}>✏️ Editar perfil</Button>
                )}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}