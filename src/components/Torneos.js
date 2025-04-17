import React from 'react';
import '../sponsor.css';
import open from '../assets/img/OPEN.png'
import tdv from '../assets/img/tdv.png'
import apertura from '../assets/img/apertura.png'
import clausura from '../assets/img/clausura.png'


export const Torneos = () => {
  return (
    <div className="rts-sponsors-section section-gap section-bg">
      <div className="container">
        <div className="section-title-area section-title-area1 text-center mb--50">
          <h1 className="section-title">
            <span className="pretitle">TORNEOS</span>NUESTROS TORNEOS
          </h1>
        </div>
        <div className="row">
          <div className="col-xl-2 col-md-4 col-sm-6 sponsor-container">
            <a href="https://www.instagram.com/thoriumindumentaria/" className="sponsor-single">
              <img src={apertura} alt="thorium" />
            </a>
          </div>
          <div className="col-xl-2 col-md-4 col-sm-6 sponsor-container">
            <a href="https://www.instagram.com/authaedo/" className="sponsor-single">
              <img src={tdv} alt="authaedo" />
            </a>
          </div>
          <div className="col-xl-2 col-md-4 col-sm-6 sponsor-container">
            <a href="https://www.instagram.com/latiendadecalcos/" className="sponsor-single">
              <img src={open} alt="Tienda de calcos" />
            </a>
          </div>
          <div className="col-xl-2 col-md-4 col-sm-6 sponsor-container">
            <a href="https://www.instagram.com/nutri.stefirodr/" className="sponsor-single">
              <img src={clausura} alt="nutricionista stefi rodriguez" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
