import { Container, Button } from "react-bootstrap";
import React, { useContext } from "react";
import VideoBackground from "../assets/videoplayback.mp4";
import "./Home.css";
import { LanguageContext } from "../context/LanguageContext";

export default function Home() {
  const { idioma } = useContext(LanguageContext);

  // Textos por idioma
  const textos = {
    eu: {
      titulo: "Ongi etorri gure zerbitzura",
      descripcion:
        "Hemen gure proiektuaren zerbitzuaren laburpen bat aurkituko duzu: zer eskaintzen duen, norentzat den eta zergatik den erabilgarria.",
      boton: "Gehiago jakin",
      info: [
        "5 Ligak",
        "+10.000 Erabiltzaile",
        "+50 Talde",
        
      ]
    },
    es: {
      titulo: "Bienvenido a nuestro servicio",
      descripcion:
        "Aquí encontrarás un resumen del servicio de nuestro proyecto: qué ofrece, para quién es y por qué es útil.",
      boton: "Saber más",
      info: [
        "5 Ligas",
        "+10.000 Usuarios",
        "+50 Equipos"
        
      ]
    },
    en: {
      titulo: "Welcome to our service",
      descripcion:
        "Here you will find a summary of our project’s service: what it offers, who it is for, and why it is useful.",
      boton: "Learn more",
      info: [
        "5 Leagues",
        "+10,000 Users",
        "+50 Teams"
        
      ]
    }
  };

  return (
    <div className="home-container">

      {/* Video */}
      <video autoPlay loop muted playsInline className="background-video">
        <source src={VideoBackground} type="video/mp4" />
        Tu navegador no soporta videos HTML5.
      </video>

      {/* Overlay */}
      <div className="video-overlay"></div>

      {/* Contenido */}
      <Container className="text-center py-5 content-overlay">

        <h2
          className="mb-4 fw-bold"
          style={{
            fontSize: "2.8rem",
            color: "white",
            textShadow: "0 0 12px rgba(0,0,0,0.8)"
          }}
        >
          {textos[idioma].titulo}
        </h2>

        <p
          className="mb-4"
          style={{
            fontSize: "1.25rem",
            color: "white",
            maxWidth: "700px",
            margin: "0 auto",
            textShadow: "0 0 10px rgba(0,0,0,0.7)"
          }}
        >
          {textos[idioma].descripcion}
        </p>

        <Button
          variant="primary"
          size="lg"
          style={{
            padding: "12px 32px",
            borderRadius: "30px",
            boxShadow: "0 6px 18px rgba(0,0,0,0.35)",
            fontWeight: "600",
            transition: "0.3s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-4px)";
            e.currentTarget.style.boxShadow = "0 10px 24px rgba(0,0,0,0.45)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 6px 18px rgba(0,0,0,0.35)";
          }}
        >
          {textos[idioma].boton}
        </Button>

        {/* INFORMACIÓN EXTRA estilo estadística */}
          <div
            className="d-flex flex-column flex-md-row justify-content-center gap-5 mt-5"
            style={{
              color: "white",
              textShadow: "0 0 12px rgba(0,0,0,0.8)",
            }}
          >
            {textos[idioma].info.map((item, i) => {
              const partes = item.split(" ");
              const numero = partes[0]; // "5", "+10.000", "+50"
              const texto = partes.slice(1).join(" "); // "ligak", "erabiltzaile", "Talde"

              return (
                <div key={i} className="text-center">
                  <div
                    style={{
                      fontSize: "2.8rem",
                      fontWeight: "800",
                      color: "#4da3ff",
                    }}
                  >
                    {numero}
                  </div>

                  <div
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "600",
                    }}
                  >
                    {texto}
                  </div>
                </div>
              );
            })}
          </div>


      </Container>
    </div>
  );
}
