import { Nav, Container, NavDropdown } from "react-bootstrap";
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

          {/* Dropdown para Partiduak */}
          <NavDropdown
            title="Partiduak"
            id="partiduak-dropdown"
            className="text-white"
          >
            <NavDropdown.Item as={Link} to="/partiduakLaLiga">
              LaLiga
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/partiduakPremier">
              Premier League
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/partiduakSerieA">
              Serie A
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/partiduakBundesliga">
              Bundesliga
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/partiduakLigue1">
              Ligue 1
            </NavDropdown.Item>
          </NavDropdown>

          <Nav.Link as={Link} to="/berriak" className="text-white">
            Berriak
          </Nav.Link>
          <Nav.Link as={Link} to="/panela" className="text-white">
            Panela
          </Nav.Link>
           <Nav.Link as={Link} to="/sariak" className="text-white">
            Sariak
          </Nav.Link>
        </Nav>
      </Container>
    </div>
  );
}
