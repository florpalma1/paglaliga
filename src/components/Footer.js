import React from "react";
import "../css/Footer.css";
import laligalogo from "../assets/img/laligalogo.png";
import "bootstrap-icons/font/bootstrap-icons.css";

export const Footer = () => {
  return (
    <div className="footer footer1">
      <div className="container">
        <div className="footer-inner">
          <div className="row">
            <div className="col-xl-3 col-md-6">
              <div className="footer-widget">
                <div className="footer-logo">
                  <img src={laligalogo} alt="footer-logo" />
                </div>
                <p className="footer-text">
                  It was the end of a period in the 1980s in which it seemed
                  like every NBA Finals matchup featured the Celtics sports
                  club.
                </p>
                <div className="social-links">
                  <a href="#0" className="platform">
                    <i className="bi bi-instagram"></i>{" "}
                  </a>

                  <a href="#0" className="platform">
                    <i className="bi bi-tiktok"></i>{" "}
                  </a>

                  <a href="#0" className="platform">
                    <i className="bi bi-whatsapp"></i>
                  </a>

                  <a href="#0" className="platform">
                    <i className="bi bi-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-sm-6">
              <div className="footer-widget">
                <h3 className="footer-widget-title">
                  <span className="decorator"></span> LINKS ESCENCIALES
                </h3>
                <ul className="widget-items cata-widget">
                 
                  <li className="widget-list-item">
                    <a href="contact.html">CONTACTO</a>
                  </li>
                  <li className="widget-list-item">
                    <a href="blog.html">NOTICIAS</a>
                  </li>
                  <li className="widget-list-item">
                    <a href="team.html">EQUIPOS</a>
                  </li>
                  <li className="widget-list-item">
                    <a href="team-details.html">TORNEO</a>
                  </li>
                  <li className="widget-list-item">
                    <a href="gallery.html">GALERIA</a>
                  </li>
                  <li className="widget-list-item">
                    <a href="history.html">NUESTRA HISTORIA</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="footer-widget address-widget">
                <h3 className="footer-widget-title">
                  <span className="decorator"></span> CONTACTO
                </h3>
                <ul>
                  <li className="widget-list-item">
                    <i class="bi bi-envelope-at-fill"></i>
                    <a href="mailto:info@webmail.com">INFO@WEBMAIL.COM</a>
                  </li>
                  <li className="widget-list-item">
                    <i class="bi bi-telephone-forward-fill"></i>
                    <a href="https://api.whatsapp.com/send?phone=541166581704&text=Hola%20Liga%20del%20Oeste!%20%F0%9F%8F%90%20">
                      +54 9 11 6658-1704
                    </a>
                  </li>
                  <li className="widget-list-item">
                  <i class="bi bi-geo-alt-fill"></i>
                    <a href="https://api.whatsapp.com/send?phone=541166581704&text=Hola%20Liga%20del%20Oeste!%20%F0%9F%8F%90%20">
                      Buenos Aires, Argentina.
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom-area">
        <div className="container">
          <div className="bottom-area-inner">
            <span className="copyright">
              <span>© 2024 La Liga. Todos los derechos reservados.</span>
            </span>
            <div className="footer-bottom-links">
              <a href="about.html">ACERCA DE NOSOTROS</a>
              <a href="faq.html">PREGUNTAS FRECUENTES</a>
              <a href="contact.html">CONTACTO</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
