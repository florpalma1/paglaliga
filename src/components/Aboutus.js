import React from 'react';
import '../css/Aboutus.css';
import imgform from '../assets/img/imgform.png';

export const Aboutus = () => {
  return (
    <div className="rts-about-section">
      <div className="about-inner">
        <div className="about-thumb">
          <img src={imgform} alt="about-thumb" />
        </div>
        <div className="contents">
          <div className="section-title-area section-title-area1 text-start mb--50">
            <h1 className="section-title">
              <span className="pretitle">NOSOTROS</span>CONOCE LA LIGA
            </h1>
            <p>
              Desde el año 2020 La Liga organiza torneos de voley en la zona oeste de la provincia de Buenos Aires
            </p>
          </div>
          <div className="quote-box">
            <p>
            "Nuestro objetivo es hacer crecer el voley de oeste"
            </p>
            <span className="quote-author">LAURA ACOSTA, ORGANIZADORA</span>
          </div>
          <p>
  Con más de 12 torneos a lo largo de los últimos años, la liga se ha consolidado como un espacio clave para el desarrollo del voley en la región.
</p>
          <a href="about.html" className="more-btn">
            LEARN MORE <i className="long-arrow-right ml--10"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
