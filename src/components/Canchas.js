import React from 'react';
import '../sponsor.css';
import cadm from '../assets/img/cadm.png'
import diecisietevoley from '../assets/img/diecisietevoley.png'
import porte from '../assets/img/porte.png'
import clubmoron from '../assets/img/clubmoron.png'


export const Canchas = () => {
  return (
    <div className="rts-sponsors-section section-gap section-bg">
      <div className="container">
        <div className="section-title-area section-title-area1 text-center mb--50">
          <h1 className="section-title">
            <span className="pretitle">CANCHAS</span>SEGUI   LA GRILLA DE PARTIDOS
          </h1>
        </div>
        <div className="row">
          <div className="col-xl-2 col-md-4 col-sm-6 sponsor-container">
            <a href="https://www.instagram.com/thoriumindumentaria/" className="sponsor-single">
              <img src={cadm} alt="thorium" />
            </a>
          </div>
          <div className="col-xl-2 col-md-4 col-sm-6 sponsor-container">
            <a href="https://www.instagram.com/authaedo/" className="sponsor-single">
              <img src={diecisietevoley} alt="authaedo" />
            </a>
          </div>
          <div className="col-xl-2 col-md-4 col-sm-6 sponsor-container">
            <a href="https://www.instagram.com/latiendadecalcos/" className="sponsor-single">
              <img src={porte} alt="Tienda de calcos" />
            </a>
          </div>
          <div className="col-xl-2 col-md-4 col-sm-6 sponsor-container">
            <a href="https://www.instagram.com/latiendadecalcos/" className="sponsor-single">
              <img src={clubmoron} alt="Tienda de calcos" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
