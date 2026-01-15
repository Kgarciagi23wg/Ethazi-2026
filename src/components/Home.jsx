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
    },
    es: {
      titulo: "Bienvenido a nuestro servicio",
      descripcion:
        "Aquí encontrarás un resumen del servicio de nuestro proyecto: qué ofrece, para quién es y por qué es útil.",
      boton: "Saber más",
    },
    en: {
      titulo: "Welcome to our service",
      descripcion:
        "Here you will find a summary of our project’s service: what it offers, who it is for, and why it is useful.",
      boton: "Learn more",
    },
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
        <h2 className="mb-4">{textos[idioma].titulo}</h2>
        <p className="mb-4">{textos[idioma].descripcion}</p>
        <Button variant="primary">{textos[idioma].boton}</Button>
      </Container>
    </div>
  );
}
