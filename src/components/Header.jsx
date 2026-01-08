import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header() {
  // Array de logos y rutas
  const ligas = [
    { img: "/liga1.png", to: "/laliga" },
    { img: "/liga2.svg", to: "/ligue1"},
    { img: "/liga3.png", to: "/premier" },
    { img: "/liga4.png", to: "/serieA" },
    { img: "/liga5.png", to: "/bundesliga" },
  ];

  return (
    <Navbar
      expand="lg"
      variant="dark"
      className="py-3 border-bottom border-secondary bg-dark"
    >
      <Container>
        {/* Logo principal */}
        <Navbar.Brand className="d-flex align-items-center gap-2">
          <Link to="/">
            <img
              src="/logo.png"
              alt="Logo"
              width="90"
              height="90"
              className="rounded"
            />
          </Link>

          <span className="h3 m-0 text-white">
            365 <span className="text-info">SCORE</span>
          </span>
        </Navbar.Brand>

        {/* Botón menú hamburguesa */}
        <Navbar.Toggle aria-controls="main-navbar" />

        <Navbar.Collapse id="main-navbar" className="justify-content-between">
          {/* Logos ligas */}
          <div className="w-100 d-flex justify-content-center my-2 flex-wrap">
            {ligas.map((liga, i) => {
              const LogoContent = (
                <img src={liga.img} height="60" alt="liga" />
              );

              const estiloBtn = {
                width: "80px",
                height: "80px",
                transition: "all 0.2s ease",
              };

              const eventosHover = {
                onMouseEnter: (e) => {
                  e.currentTarget.style.transform = "scale(1.1)";
                  e.currentTarget.style.backgroundColor = "#f0f0f0";
                },
                onMouseLeave: (e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.backgroundColor = "white";
                },
              };

              // Si tiene enlace, usamos Link
              if (liga.to) {
                return (
                  <Link
                    key={i}
                    to={liga.to}
                    className="btn btn-light btn-outline-secondary rounded-3 p-2 mx-1 my-1 d-flex align-items-center justify-content-center"
                    style={estiloBtn}
                    {...eventosHover}
                  >
                    {LogoContent}
                  </Link>
                );
              }

              // Si no tiene enlace, dejamos como botón
              return (
                <button
                  key={i}
                  className="btn btn-light btn-outline-secondary rounded-3 p-2 mx-1 my-1"
                  style={estiloBtn}
                  {...eventosHover}
                >
                  {LogoContent}
                </button>
              );
            })}
          </div>

          {/* Login */}
          <Nav className="ms-lg-auto">
            <Link
              to="/erregistroa"
              className="btn px-4"
              style={{
                backgroundColor: "white",
                color: "#0d3b66",
                border: "1px solid #0d3b66",
                transition: "transform 0.2s ease",
                textDecoration: "none",
                display: "inline-block",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              Saioa Hasi
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
