import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar expand="lg" className="py-3 border-bottom border-secondary" style={{ backgroundColor: "#4170bdff" }} >
      <Container>

        {/* Logo */}
        <Navbar.Brand className="d-flex align-items-center gap-2">
          <img
            src="/logo.png"
            alt="Logo"
            width="50"
            height="50"
            className="rounded"
            
          />
          <span className="fw-bold">
            365 <span className="text-info">SCORE</span>
          </span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />

        <Navbar.Collapse id="main-navbar" className="justify-content-between">

          {/* Logos ligas */}
          <Nav className="mx-auto d-none d-md-flex gap-3">
            {["/liga1.png", "/liga2.svg", "/liga3.png", "/liga4.png", "/liga5.png"].map((logo, i) => (
              <button
                key={i}
                className="btn btn-outline-light bg-opacity-25 rounded-3 p-2"
                style={{ width: "56px", height: "56px" }}
              >
                <img src={logo} height="40" alt="liga" />
              </button>
            ))}
          </Nav>

          {/* Login */}
          <Nav>
            <a href="#" className="btn btn-info text-white px-4">
              Saioa Hasi
            </a>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
