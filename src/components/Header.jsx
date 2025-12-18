import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Navbar
      expand="lg"
      variant="dark" // 👈 IMPORTANTE: icono hamburguesa blanco
      className="py-3 border-bottom border-secondary bg-dark"
    >
      <Container>
        {/* Logo */}
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
  {["/liga1.png", "/liga2.svg", "/liga3.png", "/liga4.png", "/liga5.png"].map(
    (logo, i) => {
      // Si es el primer logo, usamos Link hacia /laliga
      if (i === 0) {
        return (
          <Link
            key={i}
            to="/laliga"
            className="btn btn-light btn-outline-secondary rounded-3 p-2 mx-1 my-1 d-flex align-items-center justify-content-center"
            style={{
              width: "80px",
              height: "80px",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.1)";
              e.currentTarget.style.backgroundColor = "#f0f0f0";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.backgroundColor = "white";
            }}
          >
            <img src={logo} height="60" alt="liga" />
          </Link>
        );
      }

      // Los demás logos siguen siendo botones
      return (
        <button
          key={i}
          className="btn btn-light btn-outline-secondary rounded-3 p-2 mx-1 my-1"
          style={{
            width: "80px",
            height: "80px",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
            e.currentTarget.style.backgroundColor = "#f0f0f0";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.backgroundColor = "white";
          }}
        >
          <img src={logo} height="60" alt="liga" />
        </button>
      );
    }
  )}
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
