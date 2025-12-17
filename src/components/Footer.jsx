import React from "react";

export default function Footer() {
  return (
    <footer className="bg-dark text-white mt-auto py-4 border-top border-secondary">
      <div className="container">

        <div className="row text-center text-md-start gy-4">

          {/* Redes sociales */}
          <div className="col-12 col-md-4">
            <h5 className="fw-bold">Redes Sociales</h5>
            <ul className="list-unstyled">
              <li>Instagram</li>
              <li>Twitter</li>
              <li>TikTok</li>
            </ul>
          </div>

          {/* Ligas */}
          <div className="col-12 col-md-4">
            <h5 className="fw-bold">Ligas Europeas</h5>
            <ul className="list-unstyled">
              <li>La Liga</li>
              <li>Premier League</li>
              <li>Serie A</li>
              <li>Bundesliga</li>
              <li>Ligue 1</li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="col-12 col-md-4">
            <h5 className="fw-bold">Contacto</h5>
            <p className="m-0">info@365score.com</p>
          </div>

        </div>
      </div>
    </footer>
  );
}
