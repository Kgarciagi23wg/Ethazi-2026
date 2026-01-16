import React, { useState, useEffect, useContext } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { LanguageContext } from "../context/LanguageContext";

const noticiasMock = [
  {
    id: 1,
    titulo: { eu: "Partida garrantzitsua irabazi dugu", es: "Ganamos un partido importante", en: "We won an important match" },
    descripcion: { eu: "Azken partidaren laburpena...", es: "Resumen del último partido...", en: "Summary of the last match..." },
    fecha: "2026-01-14"
  },
  {
    id: 2,
    titulo: { eu: "Transferentzia berriak iritsi dira", es: "Llegan nuevos fichajes", en: "New transfers have arrived" },
    descripcion: { eu: "Taldeak jokalari berriak gehitu ditu...", es: "El equipo ha añadido nuevos jugadores...", en: "The team has added new players..." },
    fecha: "2026-01-13"
  },
  {
    id: 3,
    titulo: { eu: "Xabi Alonso Madriletik Kampo", es: "Xabi Alonso Fuera del Madrid", en: "Xabi Alonso Leaves Madrid" },
    descripcion: { eu: "Xabi Alonso Florentinokin itzegin du eta ...", es: "Xabi Alonso habla con Florentino y ...", en: "Xabi Alonso talks to Florentino and ..." },
    fecha: "2026-01-16"
  },
];

export default function Berriak() {
  const { idioma } = useContext(LanguageContext);
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    // Aquí podrías hacer fetch a una API real
    setNoticias(noticiasMock);
  }, []);

  return (
    <Container className="mt-5">
      <h1 className="mb-4 text-center">
        {idioma === "eu" ? "Berriak" : idioma === "es" ? "Noticias" : "News"}
      </h1>

      <Row xs={1} md={2} lg={3} className="g-4">
        {noticias.map(n => (
          <Col key={n.id}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>{n.titulo[idioma]}</Card.Title>
                <Card.Text>{n.descripcion[idioma]}</Card.Text>
              </Card.Body>
              <Card.Footer className="text-muted">{n.fecha}</Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}