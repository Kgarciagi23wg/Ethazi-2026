import { Nav, Container } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";

export default function NavbarAdmin() {
  return (
    <div className="bg-danger py-2">
      <Container className="d-flex justify-content-between align-items-center">
        
        <Nav>
          <Nav.Link as={Link} to="/admin" className="text-white fw-bold">
            Administradore Panela
          </Nav.Link>
        </Nav>

      </Container>
    </div>
  );
}
