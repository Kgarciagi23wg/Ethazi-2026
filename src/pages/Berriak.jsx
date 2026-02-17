import React, { useState, useEffect, useContext } from "react";
import { Container, Card, Row, Col, Modal, Button, Image } from "react-bootstrap";
import { LanguageContext } from "../context/LanguageContext";

const noticiasMock = [
  {
    id: 1,
    titulo: { eu: "Partida garrantzitsua irabazi dugu", es: "Ganamos un partido importante", en: "We won an important match" },
    descripcionCorta: { eu: "Azken partidaren laburpena...", es: "Resumen del último partido...", en: "Summary of the last match..." },
    contenido: [
      { texto: { eu: "Lehen zatian taldeak nagusitasuna erakutsi zuen eta bi gol sartu zituen.", es: "En la primera parte el equipo mostró superioridad y anotó dos goles.", en: "In the first half the team showed dominance and scored two goals." } },
      { texto: { eu: "Bigarren zatian emaitza kontrolatzea lortu zen.", es: "En la segunda parte se controló el resultado.", en: "In the second half the result was controlled." } }
    ],
    imagenFinal: {
      src: "/liga1.png",
      alt: { eu: "Ligako partida", es: "Partido de liga", en: "League match" }
    },
    fecha: "2026-01-14"
  },

  ...Array.from({ length: 14 }, (_, i) => ({
    id: i + 2,
    titulo: {
      eu: `Albistea ${i + 2}`,
      es: `Noticia ${i + 2}`,
      en: `News ${i + 2}`
    },
    descripcionCorta: {
      eu: "Albiste honen laburpena...",
      es: "Resumen de esta noticia...",
      en: "Short summary of this news..."
    },
    contenido: [
      {
        texto: {
          eu: "Albiste honen eduki nagusia hemen azaltzen da.",
          es: "Aquí se explica el contenido principal de la noticia.",
          en: "Here the main content of the news is explained."
        }
      },
      {
        texto: {
          eu: "Xehetasun gehiago bigarren paragrafoan.",
          es: "Más detalles en el segundo párrafo.",
          en: "More details in the second paragraph."
        }
      }
    ],
    imagenFinal: {
      src: "/liga1.png",
      alt: {
        eu: "Ligako irudia",
        es: "Imagen de liga",
        en: "League image"
      }
    },
    fecha: `2026-01-${String(13 - i).padStart(2, "0")}`
  }))
];

export default function Berriak() {
  const { idioma } = useContext(LanguageContext);

  const [noticias, setNoticias] = useState([]);
  const [show, setShow] = useState(false);
  const [noticiaSeleccionada, setNoticiaSeleccionada] = useState(null);

  const noticiasPorPagina = 9;
  const [paginaActual, setPaginaActual] = useState(1);

  useEffect(() => {
    setNoticias(noticiasMock);
  }, []);

  const indiceUltima = paginaActual * noticiasPorPagina;
  const indicePrimera = indiceUltima - noticiasPorPagina;
  const noticiasVisibles = noticias.slice(indicePrimera, indiceUltima);
  const totalPaginas = Math.ceil(noticias.length / noticiasPorPagina);

  return (
    <Container className="mt-5 mb-5">
      <h1 className="mb-5 text-center">
        {idioma === "eu" ? "Berriak" : idioma === "es" ? "Noticias" : "News"}
      </h1>

      {/* Altura fija para evitar saltos */}
      <div style={{ minHeight: "600px" }}>
        <Row xs={1} md={2} lg={3} className="g-4">
          {noticiasVisibles.map((n) => (
            <Col key={n.id}>
              <Card
                className="h-100 shadow-sm"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setNoticiaSeleccionada(n);
                  setShow(true);
                }}
              >
                <Card.Body>
                  <Card.Title>{n.titulo[idioma]}</Card.Title>
                  <Card.Text>{n.descripcionCorta[idioma]}</Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">{n.fecha}</Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      {/* Paginación */}
      {totalPaginas > 1 && (
        <div className="d-flex justify-content-center gap-3 mt-4">
          <Button
            variant="outline-primary"
            disabled={paginaActual === 1}
            onClick={() => setPaginaActual(paginaActual - 1)}
          >
            ← Anterior
          </Button>

          <span className="align-self-center">
            {paginaActual} / {totalPaginas}
          </span>

          <Button
            variant="outline-primary"
            disabled={paginaActual === totalPaginas}
            onClick={() => setPaginaActual(paginaActual + 1)}
          >
            Siguiente →
          </Button>
        </div>
      )}

      {/* Modal noticia completa */}
      <Modal show={show} onHide={() => setShow(false)} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{noticiaSeleccionada?.titulo[idioma]}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {noticiaSeleccionada?.contenido.map((p, index) => (
            <p key={index} style={{ lineHeight: "1.7" }}>
              {p.texto[idioma]}
            </p>
          ))}

          {noticiaSeleccionada?.imagenFinal && (
            <div className="text-center mt-4">
              <Image
                src={noticiaSeleccionada.imagenFinal.src}
                alt={noticiaSeleccionada.imagenFinal.alt[idioma]}
                style={{ maxWidth: "300px" }}
                className="img-fluid rounded shadow-sm"
              />
            </div>
          )}

          <small className="text-muted d-block mt-3">
            {noticiaSeleccionada?.fecha}
          </small>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
