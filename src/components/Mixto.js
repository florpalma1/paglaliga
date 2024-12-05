import { useState, useEffect } from "react";
import atacantesdemoreno from "../assets/img/ATACANTES DE MORENO.png";
import diecisietevoley from '../assets/img/diecisietevoley.png'
import sportivohaedo from '../assets/img/SPORTIVO HAEDO.png'
import elrejunte from '../assets/img/EL REJUNTE.png'
import federal from '../assets/img/FEDERAL.png'
import colorSharp2 from '../assets/img/color-sharp2.png'

export const Mixto= () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const logos = [
    { name: 'Atacantes de moreno', img: atacantesdemoreno },
    { name: '17 voley', img: diecisietevoley },
    { name: 'Sportivo Haedo', img: sportivohaedo },
    { name: 'El Rejunte', img: elrejunte },
    { name: 'Federal', img: federal },
    { name: 'Atacantes de moreno', img: atacantesdemoreno },
    { name: '17 voley', img: diecisietevoley },
    { name: 'Sportivo Haedo', img: sportivohaedo },
    { name: 'El Rejunte', img: elrejunte },
    { name: 'Federal', img: federal },
  ];

  // Función para avanzar al siguiente índice
  const goToNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === logos.length - 4 ? 0 : prevIndex + 1));
  };

  // Usamos useEffect para configurar el intervalo
  useEffect(() => {
    const intervalId = setInterval(goToNext, 3000); // Cambia de tarjeta cada 3 segundos

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="mixto">
      <h2>Mixto</h2>
      <div className="carousel-container">
        <button className="carousel-button prev" onClick={goToNext}>
          &#10094;
        </button>
        <div className="carousel">
          {logos.slice(activeIndex, activeIndex + 4).map((logo, index) => (
            <div
              key={index}
              className="carousel-card"
            >
              <img src={logo.img} alt={logo.name} className="carousel-image" />
              <div className="card-hover">
                <h3>{logo.name}</h3>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-button next" onClick={goToNext}>
          &#10095;
        </button>
      </div>
    </section>
  );
};
