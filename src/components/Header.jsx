import React, { useContext } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LanguageContext } from "../context/LanguageContext";
import { useAuth } from "../context/AuthContext";

export default function Header() {
  const { idioma, setIdioma } = useContext(LanguageContext);
  const { user, logout } = useAuth();

  const textos = {
    eu: { login: "Saioa Hasi" },
    es: { login: "Iniciar sesión" },
    en: { login: "Login" },
  };

  const ligas = [
    { img: "/liga1.png", to: "/laliga" },
    { img: "/liga2.svg", to: "/ligue1" },
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

        <Navbar.Toggle aria-controls="main-navbar" />

        <Navbar.Collapse id="main-navbar" className="justify-content-between">
          {/* Logos ligas */}
          <div className="w-100 d-flex justify-content-center my-2 flex-wrap">
            {ligas.map((liga, i) => {
              const LogoContent = <img src={liga.img} height="60" alt="liga" />;

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

          {/* Zona derecha: login/usuario, Berriak, idioma */}
          <Nav className="ms-lg-auto d-flex align-items-center gap-3">
            {user ? (
              <>
                <Nav.Link
                  as={Link}
                  to="/perfil"
                  className="text-white fw-bold"
                >
                  👤 {user.izena || user.email}
                </Nav.Link>
                <Nav.Link
                  onClick={logout}
                  className="text-danger fw-semibold"
                  style={{ cursor: "pointer" }}
                >
                  Irten
                </Nav.Link>
              </>
            ) : (
              <Link
                to="/erregistroa"
                className="btn px-4"
                style={{
                  backgroundColor: "white",
                  color: "#0d3b66",
                  border: "1px solid #0d3b66",
                  textDecoration: "none",
                  transition: "transform 0.2s ease",
                  display: "inline-block",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                {textos[idioma].login}
              </Link>
            )}

            {/* Berriak */}
            <Link
              to="/berriak"
              className="btn btn-outline-info mx-2"
              style={{ transition: "transform 0.2s ease", display: "inline-block" }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              Berriak
            </Link>

            {/* Selector de idioma */}
            <select
              value={idioma}
              onChange={(e) => setIdioma(e.target.value)}
              className="form-select form-select-sm"
              style={{ width: "110px", cursor: "pointer" }}
            >
              <option value="es">ES</option>
              <option value="eu">EU</option>
              <option value="en">EN</option>
            </select>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
