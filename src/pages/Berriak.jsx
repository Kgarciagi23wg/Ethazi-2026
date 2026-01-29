import React, { useState, useEffect, useContext } from "react";
import { Container, Card, Row, Col, Modal, Button } from "react-bootstrap";
import { LanguageContext } from "../context/LanguageContext";

const noticiasMock = [
  {
    id: 1,
    titulo: {
      eu: "Partida garrantzitsua irabazi dugu",
      es: "Ganamos un partido importante",
      en: "We won an important match"
    },
    descripcion: {
      eu: "Azken partidaren laburpena...",
      es: "Resumen del último partido...",
      en: "Summary of the last match..."
    },
    fecha: "2026-01-14"
  }, 
  
  {
    id: 2,
    titulo: {
      eu: "Transferentzia berriak iritsi dira",
      es: "Llegan nuevos fichajes",
      en: "New transfers have arrived"
    },
    descripcion: {
      eu: "Taldeak jokalari berriak gehitu ditu...",
      es: "El equipo ha añadido nuevos jugadores...",
      en: "The team has added new players..."
    },
    fecha: "2026-01-13"
  },
  {
    id: 3,
    titulo: {
      eu: "Entrenamendu saio berezia",
      es: "Sesión especial de entrenamiento",
      en: "Special training session"
    },
    descripcion: {
      eu: "Entrenatzaileak lan saio intentsiboa antolatu du...",
      es: "El entrenador organizó una sesión intensa...",
      en: "The coach organized an intense training session..."
    },
    fecha: "2026-01-12"
  },
  {
    id: 4,
    titulo: {
      eu: "Gazteek aukera izan dute",
      es: "Oportunidad para los jóvenes",
      en: "Opportunity for young players"
    },
    descripcion: {
      eu: "Harrobiko jokalariek lehen taldearekin jokatu dute...",
      es: "Los jugadores de la cantera jugaron con el primer equipo...",
      en: "Academy players trained with the first team..."
    },
    fecha: "2026-01-11"
  },
  {
    id: 5,
    titulo: {
      eu: "Hurrengo partidaren aurkezpena",
      es: "Previa del próximo partido",
      en: "Preview of the next match"
    },
    descripcion: {
      eu: "Datorren aurkariaren analisia egin dugu...",
      es: "Analizamos al próximo rival...",
      en: "We analyze the next opponent..."
    },
    fecha: "2026-01-10"
  },
  {
    id: 6,
    titulo: {
      eu: "Zaleen babesa funtsezkoa",
      es: "El apoyo de la afición es clave",
      en: "Fans’ support is crucial"
    },
    descripcion: {
      eu: "Zaleek taldeari indarra eman diote...",
      es: "La afición dio un gran impulso al equipo...",
      en: "Fans gave the team a huge boost..."
    },
    fecha: "2026-01-09"
  }
];

export default function Berriak() {
  const { idioma } = useContext(LanguageContext);

  const [noticias, setNoticias] = useState([]);
  const [show, setShow] = useState(false);
  const [noticiaSeleccionada, setNoticiaSeleccionada] = useState(null);

  useEffect(() => {
    setNoticias(noticiasMock);
  }, []);

  const handleClose = () => setShow(false);

  const handleShow = (noticia) => {
    setNoticiaSeleccionada(noticia);
    setShow(true);
  };

  return (
    <Container className="mt-5 mb-5">
      <h1 className="mb-4 text-center">
        {idioma === "eu" ? "Berriak" : idioma === "es" ? "Noticias" : "News"}
      </h1>

      <Row xs={1} md={2} lg={3} className="g-4">
        {noticias.map((n) => (
          <Col key={n.id}>
            <Card
              className="h-100 shadow-sm"
              style={{ cursor: "pointer" }}
              onClick={() => handleShow(n)}
            >
              <Card.Body>
                <Card.Title>{n.titulo[idioma]}</Card.Title>
                <Card.Text>{n.descripcion[idioma]}</Card.Text>
              </Card.Body>
              <Card.Footer className="text-muted">
                {n.fecha}
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
 

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {noticiaSeleccionada?.titulo[idioma]}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>{noticiaSeleccionada?.descripcion[idioma]}</p>
          <small className="text-muted">
            {noticiaSeleccionada?.fecha}
          </small>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
