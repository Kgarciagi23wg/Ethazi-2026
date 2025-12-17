import React from "react";
import { FaInstagram, FaTwitter, FaTiktok, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-dark text-white mt-auto py-5 border-top border-secondary">
      <div className="container">

        <div className="row text-center text-md-start gy-4">

          {/* Sare Sozialak */}
          <div className="col-12 col-md-3">
            <h5 className="fw-bold mb-3">Sare Sozialak</h5>
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
            <h5 className="fw-bold mb-3">Europear Ligak</h5>
            <ul className="list-unstyled">
              {["La Liga", "Premier League", "Serie A", "Bundesliga", "Ligue 1"].map((liga, i) => (
                <li key={i} className="my-1">
                  <a
                    href="#"
                    className="text-decoration-none"
                    style={{ color: "white", transition: "all 0.2s" }}
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = "scale(1.05)";
                      e.currentTarget.style.color = "#0dcaf0"; 
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.color = "white";   
                    }}
                  >
                    {liga}
                  </a>

                </li>
              ))}
            </ul>
          </div>

          {/* Kontaktua*/}
          <div className="col-12 col-md-3">
            <h5 className="fw-bold mb-3">Kontaktua</h5>
            <p className="m-0">info@365score.com</p>
            <p className="mt-2">Tel: +34 600 000 000</p>
          </div>

          {/* Newsletter */}
          <div className="col-12 col-md-3">
            <h5 className="fw-bold mb-3">Newsletter</h5>
            <div className="d-flex justify-content-center justify-content-md-start">
              <input
                type="email"
                placeholder="Zure e-mail"
                className="form-control me-2"
                style={{ maxWidth: "150px" }}
              />
              <button className="btn btn-info text-white">Izena eman</button>
            </div>
          </div>

        </div>

        {/* Egile-Eskubideak */}
        <div className="text-center text-secondary mt-4">
          &copy; {new Date().getFullYear()} 365SCORE. Egile-eskubide guztiak erreserbatuta.
        </div>

      </div>
    </footer>
  );
}
