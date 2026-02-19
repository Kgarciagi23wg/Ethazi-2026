import React, { useState, useEffect, useContext } from "react";
import {
  Container,
  Card,
  Row,
  Col,
  Modal,
  Button,
  Image,
  Form,
  Pagination
} from "react-bootstrap";
import { LanguageContext } from "../context/LanguageContext";
import { noticiasMock } from "../Data/noticiasMock.js";

export default function Berriak() {
  const { idioma } = useContext(LanguageContext);

  const [noticias, setNoticias] = useState([]);
  const [show, setShow] = useState(false);
  const [noticiaSeleccionada, setNoticiaSeleccionada] = useState(null);
  const [equipoSeleccionado, setEquipoSeleccionado] = useState("Todos");
  const [paginaActual, setPaginaActual] = useState(1);

  const noticiasPorPagina = 6;

  useEffect(() => {
    setNoticias(noticiasMock);
  }, []);

  // Equipos para el select
  const equipos = ["Todos", ...new Set(noticias.map((n) => n.equipo))];

  // Filtrado
  const noticiasFiltradas =
    equipoSeleccionado === "Todos"
      ? noticias
      : noticias.filter((n) => n.equipo === equipoSeleccionado);

  // Paginación
  const indiceUltima = paginaActual * noticiasPorPagina;
  const indicePrimera = indiceUltima - noticiasPorPagina;
  const noticiasVisibles = noticiasFiltradas.slice(indicePrimera, indiceUltima);
  const totalPaginas = Math.ceil(noticiasFiltradas.length / noticiasPorPagina);

  return (
    <Container className="mt-5 mb-5">
      <h1 className="mb-4 text-center">
        {idioma === "eu"
          ? "Berriak"
          : idioma === "es"
          ? "Noticias"
          : "News"}
      </h1>

      {/* Select de equipos */}
      <Form.Select
        className="mb-4 w-auto mx-auto"
        value={equipoSeleccionado}
        onChange={(e) => {
          setEquipoSeleccionado(e.target.value);
          setPaginaActual(1); // resetear a la primera página
        }}
      >
        {equipos.map((equipo) => (
          <option key={equipo} value={equipo}>
            {equipo}
          </option>
        ))}
      </Form.Select>

      {/* Grid de noticias */}
      <div style={{ minHeight: "600px" }}>
        <Row xs={1} md={2} lg={3} className="g-4">
          {noticiasVisibles.map((n) => (
            <Col key={n.id}>
              <Card
                className="h-100 shadow-sm border-0"
                style={{
                  cursor: "pointer",
                  transition: "transform 0.2s, box-shadow 0.2s"
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                onClick={() => {
                  setNoticiaSeleccionada(n);
                  setShow(true);
                }}
              >
                {n.imagenFinal && (
                  <Card.Img
                    variant="top"
                    src={n.imagenFinal.src}
                    alt={n.imagenFinal.alt[idioma]}
                    style={{ height: "180px", objectFit: "cover" }}
                  />
                )}
                <Card.Body>
                  <Card.Title>{n.titulo[idioma]}</Card.Title>
                  <Card.Text>{n.descripcionCorta[idioma]}</Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between align-items-center">
                  <small className="text-muted">{n.fecha}</small>
                  <span className="badge bg-primary">{n.equipo}</span>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      {/* Paginación */}
      {totalPaginas > 1 && (
        <Pagination className="justify-content-center mt-4">
          <Pagination.Prev
            onClick={() => setPaginaActual(paginaActual - 1)}
            disabled={paginaActual === 1}
          />
          {[...Array(totalPaginas)].map((_, i) => (
            <Pagination.Item
              key={i + 1}
              active={i + 1 === paginaActual}
              onClick={() => setPaginaActual(i + 1)}
            >
              {i + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next
            onClick={() => setPaginaActual(paginaActual + 1)}
            disabled={paginaActual === totalPaginas}
          />
        </Pagination>
      )}

      {/* Modal de noticia completa */}
      <Modal
        show={show}
        onHide={() => setShow(false)}
        centered
        size="lg"
        className="text-center"
      >
        {noticiaSeleccionada?.imagenFinal && (
          <Image
            src={noticiaSeleccionada.imagenFinal.src}
            alt={noticiaSeleccionada.imagenFinal.alt[idioma]}
            className="img-fluid rounded mb-3 shadow"
          />
        )}
        <Modal.Body className="text-start">
          <h4>{noticiaSeleccionada?.titulo[idioma]}</h4>
          {noticiaSeleccionada?.contenido.map((p, index) => (
            <p key={index} style={{ lineHeight: "1.8" }}>
              {p.texto[idioma]}
            </p>
          ))}
          <small className="text-muted">{noticiaSeleccionada?.fecha}</small>
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
