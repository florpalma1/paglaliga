import React from 'react';
import '../sponsor.css';
import authaedo from '../assets/img/authaedo.png'
import calcos from '../assets/img/calcos.png'
import nutri from '../assets/img/nutri.png'
import thorium from '../assets/img/thorium.png'
import MILANESA from '../assets/img/MILANESA.png'
import SCUM from '../assets/img/SCUM.png'

export const Sponsor = () => {
  return (
    <div className="rts-sponsors-section section-gap section-bg">
      <div className="container">
        <div className="section-title-area section-title-area1 text-center mb--50">
          <h1 className="section-title">
            <span className="pretitle">SPONSORS</span>NUESTROS SPONSORS
          </h1>
        </div>
        <div className="row">
          <div className="col-xl-2 col-md-4 col-sm-6 sponsor-container">
            <a href="https://www.instagram.com/thoriumindumentaria/" className="sponsor-single">
              <img src={thorium} alt="thorium" />
            </a>
          </div>
          <div className="col-xl-2 col-md-4 col-sm-6 sponsor-container">
            <a href="https://www.instagram.com/authaedo/" className="sponsor-single">
              <img src={authaedo} alt="authaedo" />
            </a>
          </div>
          <div className="col-xl-2 col-md-4 col-sm-6 sponsor-container">
            <a href="https://www.instagram.com/latiendadecalcos/" className="sponsor-single">
              <img src={calcos} alt="Tienda de calcos" />
            </a>
          </div>
          <div className="col-xl-2 col-md-4 col-sm-6 sponsor-container">
            <a href="https://www.instagram.com/latiendadecalcos/" className="sponsor-single">
              <img src={SCUM} alt="Tienda de calcos" />
            </a>
          </div>
          <div className="col-xl-2 col-md-4 col-sm-6 sponsor-container">
            <a href="https://www.instagram.com/latiendadecalcos/" className="sponsor-single">
              <img src={MILANESA} alt="Tienda de calcos" />
            </a>
          </div>
          <div className="col-xl-2 col-md-4 col-sm-6 sponsor-container">
            <a href="https://www.instagram.com/nutri.stefirodr/" className="sponsor-single">
              <img src={nutri} alt="nutricionista stefi rodriguez" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
