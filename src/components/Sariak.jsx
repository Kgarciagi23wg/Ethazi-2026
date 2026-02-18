import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Badge, InputGroup, Form, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import sariakData from "../Data/sariak.json";

const Sariak = () => {
  const [sariak] = useState(sariakData.sariak);
  const [kategoria, setKategoria] = useState('guztiak');
  const [bilaketa, setBilaketa] = useState('');
  const [puntuakErabiltzailea] = useState(3200);

  const kategoriaIzenak = {
    guztiak: 'Denak',
    kamiseta: 'Kamiseta',
    bidaiak: 'Bidaiak',
    sarrerak: 'Sarrerak',
    tourra: 'Tour',
    ekipamendua: 'Ekipamendua',
    oroigarriak: 'Oroigarriak',
    vip: 'VIP',
    jokoak: 'Bideojokoak',
    esperientziak: 'Esperientziak',
    ikasketak: 'Ikasketak',
    bazkidetza: 'Bazkidetza'
  };

  const kategoriaPosibleak = ['guztiak', ...new Set(sariak.map(s => s.kategoria))];

  const iragazitakoSariak = sariak.filter(saria => {
    const kategoriaBatDator = kategoria === 'guztiak' || saria.kategoria === kategoria;
    const bilaketaBatDator = saria.izena.toLowerCase().includes(bilaketa.toLowerCase()) ||
                             saria.deskribapena.toLowerCase().includes(bilaketa.toLowerCase());
    return kategoriaBatDator && bilaketaBatDator;
  });

  return (
    <div className="bg-light min-vh-100 pb-5">
      {/* Navbar Superior Estilizada */}
      <nav className="bg-white border-bottom sticky-top mb-4">
        <Container className="py-2 d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <span className="fs-4 fw-black text-dark me-2">⚽</span>
            <span className="fw-bold tracking-tight h5 mb-0">Sariak </span>
          </div>
          <div className="bg-light px-3 py-2 rounded-pill border d-flex align-items-center shadow-sm">
            <span className="text-muted small me-2">Puntuak:</span>
            <span className="fw-bold text-primary">{puntuakErabiltzailea.toLocaleString()} Pts</span>
          </div>
        </Container>
      </nav>

      <Container>
        {/* Sección de Filtros Minimalista */}
        <Row className="mb-5 align-items-center border-bottom pb-4 g-3">
          <Col md={4}>
            <div className="position-relative">
              <Form.Control
                className="rounded-pill border-0 shadow-sm ps-5 py-2"
                placeholder="Bilatu sariak..."
                value={bilaketa}
                onChange={(e) => setBilaketa(e.target.value)}
              />
              <span className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted">🔍</span>
            </div>
          </Col>
          <Col md={8}>
            <Nav className="justify-content-md-end gap-2 overflow-auto flex-nowrap pb-2">
              {kategoriaPosibleak.map((kat) => (
                <button
                  key={kat}
                  onClick={() => setKategoria(kat)}
                  className={`btn rounded-pill btn-sm px-3 py-2 transition-all shadow-sm fw-semibold ${
                    kategoria === kat ? 'btn-primary' : 'btn-white bg-white text-dark border'
                  }`}
                >
                  {kategoriaIzenak[kat] || kat}
                </button>
              ))}
            </Nav>
          </Col>
        </Row>

        {/* Grid de Productos - Estilo Galería */}
        <Row xs={1} md={2} lg={3} xl={4} className="g-4">
          {iragazitakoSariak.map((saria) => (
            <Col key={saria.id}>
              <Card className="h-100 border-0 rounded-4 shadow-sm overflow-hidden bg-white hover-shadow transition-all">
                {/* Contenedor de Imagen */}
                <div className="position-relative">
                  <Card.Img 
                    variant="top" 
                    src={saria.irudia} 
                    style={{ height: '220px', objectFit: 'cover' }}
                  />
                  {/* Tags flotantes */}
                  <div className="position-absolute top-0 start-0 p-3">
                    <Badge bg="white" text="dark" className="shadow-sm rounded-pill py-2 px-3 opacity-90 fw-bold border">
                      {saria.kategoria.toUpperCase()}
                    </Badge>
                  </div>
                  {saria.stock < 5 && (
                    <div className="position-absolute bottom-0 start-0 m-3">
                      <Badge bg="danger" className="rounded-pill shadow-sm">
                        Agortzen! {saria.stock}
                      </Badge>
                    </div>
                  )}
                </div>
                
                <Card.Body className="p-4 d-flex flex-column">
                  {/* Info superior */}
                  <div className="mb-2">
                    <small className="text-primary fw-bold text-uppercase ls-wide" style={{ fontSize: '0.65rem' }}>
                      {saria.ekipoa || 'Ofiziala'}
                    </small>
                    <Card.Title className="fw-bold h5 mt-1 text-dark text-truncate">
                      {saria.izena}
                    </Card.Title>
                  </div>
                  
                  <Card.Text className="text-muted small mb-4 line-clamp-2" style={{ height: '40px' }}>
                    {saria.deskribapena}
                  </Card.Text>
                  
                  {/* Footer de la tarjeta */}
                  <div className="mt-auto d-flex justify-content-between align-items-center pt-3 border-top">
                    <div>
                      <span className="d-block text-muted" style={{ fontSize: '0.7rem' }}>Balioa:</span>
                      <span className="h5 fw-bold text-dark mb-0">{saria.puntuak} pts</span>
                    </div>
                    
                    <Button
                      variant={puntuakErabiltzailea >= saria.puntuak && saria.stock > 0 ? 'dark' : 'outline-light'}
                      disabled={puntuakErabiltzailea < saria.puntuak || saria.stock === 0}
                      className={`rounded-3 px-3 py-2 fw-bold btn-sm shadow-sm ${
                        puntuakErabiltzailea < saria.puntuak ? 'text-muted border' : ''
                      }`}
                      onClick={() => alert('¡Trukatu da!')}
                    >
                      {puntuakErabiltzailea < saria.puntuak ? 'Falta da' : 'TRUKATU'}
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Mensaje cuando no hay stock/resultados */}
        {iragazitakoSariak.length === 0 && (
          <div className="text-center py-5">
            <div className="display-4 text-muted mb-3 opacity-25">🍃</div>
            <h4 className="text-muted fw-light">Ez dugu saririk aurkitu bilaketa horrekin</h4>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Sariak;