import React from 'react';
import { Carousel } from 'react-bootstrap'; // Importa el Carousel de React Bootstrap
import '../Banner.css'; // Asegúrate de tener este archivo CSS con las clases apropiadas.

export const Banner = () => {
  const slides = [
    {
      title: 'MANCHESTER & THE UCL CHAMPION',
      pretitle: 'WELCOME TO OUR FOOTBALL CLUB',
      imageClass: 'banner-single-1', // Clase para el fondo
    },
    {
      title: 'ANDERSON & THE WORLD CUP WINNER',
      pretitle: 'WELCOME TO OUR FOOTBALL CLUB',
      imageClass: 'banner-single-1_2', // Clase para el fondo
    },
    {
      title: 'HENDERSON & THE WORLD CUP WINNER',
      pretitle: 'WELCOME TO OUR FOOTBALL CLUB',
      imageClass: 'banner-single-3', // Clase para el fondo
    },
  ];

  return (
    <div className="banner banner1">
      <Carousel interval={5000} pause="hover" indicators={false} controls={true}>
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <div className={`banner-single ${slide.imageClass} banner-bg`}>
              <div className="container">
                <div className="banner-content">
                  <span className="pretitle">{slide.pretitle}</span>
                  <h1 className="banner-heading">{slide.title}</h1>
                  <div className="banner-btn-area">
                    <a href="#0" className="team-btn banner-btn">
                      OUR TEAM <i className="far fa-long-arrow-right ml--5"></i>
                    </a>
                    <a href="#0" className="nxt-match-btn banner-btn">
                      NEXT MATCH <i className="far fa-long-arrow-right ml--5"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};
