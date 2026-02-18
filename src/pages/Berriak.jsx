import React, { useState, useEffect, useContext } from "react";
import {
  Container,
  Card,
  Row,
  Col,
  Modal,
  Button,
  Image,
  Form
} from "react-bootstrap";
import { LanguageContext } from "../context/LanguageContext";
import { noticiasMock } from "../Data/noticiasMock.js";

export default function Berriak() {
  const { idioma } = useContext(LanguageContext);

  const [noticias, setNoticias] = useState([]);
  const [show, setShow] = useState(false);
  const [noticiaSeleccionada, setNoticiaSeleccionada] = useState(null);
  const [equipoSeleccionado, setEquipoSeleccionado] = useState("..."); // <-- coincidir con opción inicial

  const noticiasPorPagina = 9;
  const [paginaActual, setPaginaActual] = useState(1);

  useEffect(() => {
    setNoticias(noticiasMock);
  }, []);

  // Equipos únicos + opción inicial "..."
  const equipos = ["...", ...new Set(noticias.map((n) => n.equipo))];

  // Filtrar noticias según equipo seleccionado
  const noticiasFiltradas =
    equipoSeleccionado === "..."
      ? noticias
      : noticias.filter((n) => n.equipo === equipoSeleccionado);

  // Paginación
  const indiceUltima = paginaActual * noticiasPorPagina;
  const indicePrimera = indiceUltima - noticiasPorPagina;
  const noticiasVisibles = noticiasFiltradas.slice(
    indicePrimera,
    indiceUltima
  );
  const totalPaginas = Math.ceil(noticiasFiltradas.length / noticiasPorPagina);

  return (
    <Container className="mt-5 mb-5">
      <h1 className="mb-4 text-center">
        {idioma === "eu" ? "Berriak" : idioma === "es" ? "Noticias" : "News"}
      </h1>

      {/* Selector de equipo */}
      <Form.Select
        className="mb-4"
        value={equipoSeleccionado}
        onChange={(e) => {
          setEquipoSeleccionado(e.target.value);
          setPaginaActual(1); // reiniciar paginación al cambiar de equipo
        }}
      >
        {equipos.map((equipo, index) => (
          <option key={index} value={equipo}>
            {equipo}
          </option>
        ))}
      </Form.Select>

      {/* Noticias */}
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

                <Card.Footer className="text-muted">
                  {n.equipo} — {n.fecha}
                </Card.Footer>
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

      {/* Modal de noticia completa */}
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
