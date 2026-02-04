import React, { useContext } from "react";
import { FaInstagram, FaTwitter, FaTiktok, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import { LanguageContext } from "../context/LanguageContext";

export default function Footer() {
  const { idioma } = useContext(LanguageContext);

  // Textos dinámicos del footer
  const textos = {
    eu: {
      social: "Sare Sozialak",
      ligas: "Europear Ligak",
      kontaktua: "Kontaktua",
      newsletter: "Newsletter",
      placeholderEmail: "Zure e-mail",
      botonNewsletter: "Izena eman",
      copyright: "Egile-eskubide guztiak erreserbatuta.",
    },
    es: {
      social: "Redes Sociales",
      ligas: "Ligas Europeas",
      kontaktua: "Contacto",
      newsletter: "Boletín",
      placeholderEmail: "Tu e-mail",
      botonNewsletter: "Suscribirse",
      copyright: "Todos los derechos reservados.",
    },
    en: {
      social: "Social Media",
      ligas: "European Leagues",
      kontaktua: "Contact",
      newsletter: "Newsletter",
      placeholderEmail: "Your e-mail",
      botonNewsletter: "Subscribe",
      copyright: "All rights reserved.",
    },
  };

  return (
    <footer className="bg-dark text-white mt-auto py-5 border-top border-secondary">
      <div className="container">
        <div className="row text-center text-md-start gy-4">

          {/* Redes sociales */}
          <div className="col-12 col-md-3">
            <h5 className="fw-bold mb-3">{textos[idioma].social}</h5>
            <div className="d-flex justify-content-center justify-content-md-start gap-3">
              {[
                { icon: <FaInstagram />, link: "https://www.instagram.com/365scorebusiness?igsh=MXh0YmE3NGM3Zm5vMQ==" },
                { icon: <FaTwitter />, link: "https://x.com/365Score64096" },
                { icon: <FaTiktok />, link: "https://www.tiktok.com/@365scorebusiness5?_r=1&_t=ZN-92IAwGEdW5u" },
                { icon: <FaYoutube />, link:"https://www.youtube.com/@365ScoreBusiness" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-flex align-items-center justify-content-center rounded-circle bg-light text-dark"
                  style={{ width: "40px", height: "40px", transition: "all 0.2s" }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.2)"; e.currentTarget.style.backgroundColor = "#ddd"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.backgroundColor = "#f8f9fa"; }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Ligas */}
          <div className="col-12 col-md-3">
            <h5 className="fw-bold mb-3">{textos[idioma].ligas}</h5>
            <ul className="list-unstyled">
              {[
                { name: "La Liga", link: "/laliga" },
                { name: "Premier League", link: "/premier" },
                { name: "Serie A", link: "/serieA" },
                { name: "Bundesliga", link: "/bundesliga" },
                { name: "Ligue 1", link: "/ligue1" },
                { name: "Predikzioa", link: "/predikzioa" },
              ].map((liga, i) => (
                <li key={i} className="my-1">
                  <Link
                    to={liga.link}
                    className="text-decoration-none"
                    style={{ color: "white", transition: "all 0.2s" }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.05)"; e.currentTarget.style.color = "#0dcaf0"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.color = "white"; }}
                  >
                    {liga.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div className="col-12 col-md-3">
            <Link to="/kontaktua">
              <h5 className="fw-bold mb-3">{textos[idioma].kontaktua}</h5>
            </Link>
            <p className="m-0">info@365score.com</p>
            <p className="mt-2">Tel: +34 600 000 000</p>
          </div>

          {/* Newsletter */}
          <div className="col-12 col-md-3">
            <h5 className="fw-bold mb-3">{textos[idioma].newsletter}</h5>
            <div className="d-flex justify-content-center justify-content-md-start">
              <input
                type="email"
                placeholder={textos[idioma].placeholderEmail}
                className="form-control me-2"
                style={{ maxWidth: "150px" }}
              />
              <button className="btn btn-info text-white">{textos[idioma].botonNewsletter}</button>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="text-center text-secondary mt-4">
          &copy; {new Date().getFullYear()} 365SCORE. {textos[idioma].copyright}
        </div>

      </div>
    </footer>
  );
}
