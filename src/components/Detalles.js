import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import meter4 from "../assets/img/meter4.svg";
import meter5 from "../assets/img/meter5.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

/*Agregar imagenes representativa de cada item informativo*/

export const Detalles = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Torneo de Verano 2025</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                       <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter2} alt="numero de edicion" />
                                <h5>5ta Edicion</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="cantidad de canchas" />
                                <h5>Canchas</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="numero de quipos" />
                                <h5>+ de 100 equipos inscriptos</h5>
                            </div>
                            <div className="item">
                                <img src={meter4} alt="numero de categorias" />
                                <h5>Categorias</h5>
                            </div>
                            <div className="item">
                                <img src={meter5} alt="cantidad de sedes" />
                                <h5>Sedes</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
