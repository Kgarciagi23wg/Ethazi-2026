import { Nav, Container } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";

export default function NavbarSecondary() {
  return (
    <div className="bg-dark py-2">
      <Container className="d-flex justify-content-between align-items-center">
        
        <Nav>
          <Nav.Link as={Link} to="/" className="text-white">
            Hasiera
          </Nav.Link>
          <Nav.Link as={Link} to="/predikzioa" className="text-white">
            Predikzioak
          </Nav.Link>
          <Nav.Link as={Link} to="/berriak" className="text-white">
            Berriak
          </Nav.Link>
          <Nav.Link as={Link} to="/panela" className="text-white">
            Panela
          </Nav.Link>
        </Nav>

      </Container>
    </div>
  );
}