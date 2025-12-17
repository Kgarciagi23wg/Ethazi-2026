import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Navbar expand="lg" className="py-3 border-bottom border-secondary" style={{ backgroundColor: "#4170bdff" }} >
      <Container>

        {/* Logo */}
        <Navbar.Brand className="d-flex align-items-center gap-2">
          <Link to="/"><img
            src="/logo.png"
            alt="Logo"
            width="50"
            height="50"
            className="rounded"
            
          /></Link>
          
          <span className="fw-bold">
            365 <span className="text-info">SCORE</span>
          </span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />

        <Navbar.Collapse id="main-navbar" className="justify-content-between">

        {/* Logo ligak */}
        <div className="w-100 d-flex justify-content-center my-2">
          {["/liga1.png", "/liga2.svg", "/liga3.png", "/liga4.png", "/liga5.png"].map((logo, i) => (
            <button
              key={i}
              className="btn btn-light btn-outline-secondary rounded-3 p-2 mx-1"
              style={{ width: "56px", height: "56px", transition: "all 0.2s ease" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.1)"; e.currentTarget.style.backgroundColor = "#f0f0f0"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.backgroundColor = "white"; }}
            >
              <img src={logo} height="40" alt="liga" />
            </button>
          ))}
        </div>


          {/* Login */}
            <Nav>
              <a
                href="#"
                className="btn px-4"
                style={{
                  backgroundColor: "white",     
                  color: "#0d3b66",             
                  border: "1px solid #0d3b66",  
                  transition: "transform 0.2s ease", 
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = "scale(1.05)"; 
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                Saioa Hasi
              </a>
            </Nav>


        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
