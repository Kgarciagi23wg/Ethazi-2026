import { Container, Button } from "react-bootstrap";
import React from "react";
import VideoBackground from "../assets/videoplayback.mp4"; // importa el video
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      {/* Video de fondo importado */}
      <video autoPlay loop muted playsInline className="background-video">
        <source src={VideoBackground} type="video/mp4" />
        Tu navegador no soporta videos HTML5.
      </video>

      {/* Overlay */}
      <div className="video-overlay"></div>

      {/* Contenido */}
      <Container className="text-center py-5 content-overlay">
        <h2 className="mb-4">Ongi etorri gure zerbitzura</h2>
        <p className="mb-4">
          Hemen gure proiektuaren zerbitzuaren laburpen bat aurkituko duzu: zer eskaintzen duen, norentzat den eta zergatik den erabilgarria.
        </p>
        <Button variant="primary">Gehiago jakin</Button>
      </Container>
    </div>
  );
}
