import React from "react";
import "../../css/galeria.css"; // Asegúrate de crear un archivo CSS con los estilos que necesites
import galeriauno from "../../assets/img/galeriauno.jpg";
import galeriados from "../../assets/img/galeriados.jpg";
import galeriatres from "../../assets/img/galeriatres.jpg";
import galeriacuatro from "../../assets/img/galeriacuatro.jpg";
import galeriacinco from "../../assets/img/galeriacinco.jpg";
import galeriaseis from "../../assets/img/galeriaseis.jpg";

export const Galeria = () => {
  const images = [
    {
      src: galeriauno,
      alt: "person writing in a notebook beside by an iPad, laptop, printed photos, spectacles, and a cup of coffee on a saucer",
    },
    {
      src: galeriados,
      alt: "sunset behind San Francisco city skyline",
    },
    {
      src: galeriatres,
      alt: "people holding umbrellas on a busy street at night lit by street lights and illuminated signs in Tokyo, Japan",
    },
    {
      src: galeriacuatro,
      alt: "car interior from central back seat position showing driver and blurred view through windscreen of a busy road at night",
    },
    {
      src: galeriacinco,
      alt: "back view of woman wearing a backpack and beanie waiting to cross the road on a busy street at night in New York City, USA",
    },
    {
      src: galeriaseis,
      alt: "man wearing a black jacket, white shirt, blue jeans, and brown boots, playing a white electric guitar while sitting on an amp",
    },
  ];

  return (
    <div>
      <div className="gallery-banner">
        <div className="gallery-banner__content">
          <h1 className="gallery-banner__title">GALERIA</h1>
        </div>
      </div>
      <div className="container containergaleria">
        <div className="gallery">
          {images.map((image, index) => (
            <div className="gallery-item" key={index}>
              <img className="gallery-image" src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
        <div className="button-group">
          <button className="custom-button">DRIVE DE FOTOS</button>
          <button className="custom-button"><i class="bi bi-camera"></i> <span />@ENZOPEDROZOPH</button>
          <button className="custom-button"><i class="bi bi-camera"></i> <span />@MOREBAUDINO</button>
          <button className="custom-button"><i class="bi bi-camera"></i> <span />@LU.FURCHE.PH</button>
        </div> 
      </div>
    </div>
  );
};
