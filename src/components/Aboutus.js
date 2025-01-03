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
              It is one of the most popular football clubs that offer training programs
              for the youth, as well as summer camps.
            </p>
          </div>
          <div className="quote-box">
            <p>
              Sportius United has a long and exciting history that started three
              decades ago for move forward.
            </p>
            <span className="quote-author">ALONSO D. DOWSON</span>
          </div>
          <p>
            Sportius United has a long and exciting history that started 3 decades ago.
            It is one of the most popular football clubs that offer training programs
            for the youth, as well as summer camps.
          </p>
          <a href="about.html" className="more-btn">
            LEARN MORE <i className="long-arrow-right ml--10"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
