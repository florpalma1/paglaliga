import { Container, Row, Col } from "react-bootstrap";
import auchi from "../assets/img/AUCHI.png";
import diecisietevoley from "../assets/img/diecisietevoley.png";
import nosfaltauna from "../assets/img/nosfaltauna.png";
import triplec from "../assets/img/TRIPLEC.png";
import teamtopo from "../assets/img/teamtopo.png";
import cadelpa from "../assets/img/CADELPA.png";
import lavanguardia from "../assets/img/lavanguardia.png";
import defedemoreno from "../assets/img/DEFE DE MORENO.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { CardEquipos } from "./CardEquipos";

// Función para dividir los equipos en grupos de 2 filas de 2 (4 cards por sección)
const divideIntoRowsOfTwo = (array) => {
  let result = [];
  for (let i = 0; i < array.length; i += 2) {
    result.push(array.slice(i, i + 2)); // 2 elementos por fila
  }
  return result;
};

export const Inferiores = () => {
  /*******Equipos Masculinos****** */
  const Equipos = [
    {
      title: "17 Voley",
      description: "Ver mas",
      imgUrl: diecisietevoley,
    },
    {
      title: "Team Topo",
      description: "Ver mas",
      imgUrl: teamtopo,
    },
    {
      title: "Cadelpa",
      description: "Ver mas",
      imgUrl: cadelpa,
    },
    {
      title: "Auchi",
      description: "Ver mas",
      imgUrl: auchi,
    },
  ];

  /*******Equipos Femeninos****** */
  const mujeres = [
    {
      title: "Defensores de Moreno",
      description: "Ver mas",
      imgUrl: defedemoreno,
    },
    {
      title: "Nos Falta Una",
      description: "Ver mas",
      imgUrl: nosfaltauna,
    },
    {
      title: "Triple C",
      description: "Ver mas",
      imgUrl: triplec,
    },
    {
      title: "La Vanguardia",
      description: "Ver mas",
      imgUrl: lavanguardia,
    },
  ];

  const equiposMasculinosDivididos = divideIntoRowsOfTwo(Equipos);
  const equiposFemeninosDivididos = divideIntoRowsOfTwo(mujeres);

  return (
    <div>
      <section className="projectInferiores" id="Equipos">
        <Container>
          <Row>
            <Col size={12}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeIn" : ""
                    }
                  >
                    <h2>Sub 18</h2>
                    <div className="d-flex justify-content-between">
                      {/* Equipos Masculinos */}
                      <div className="col-6">
                        <h3 className="nav-pillsInferiores mb-5">Masculino</h3>
                        {equiposMasculinosDivididos.map((grupo, index) => (
                          <Row key={index} className="mb-4">
                            {grupo.map((project, idx) => (
                              <Col key={idx} sm={6} md={6}>
                                <CardEquipos {...project} />
                              </Col>
                            ))}
                          </Row>
                        ))}
                      </div>

                      {/* Equipos Femeninos */}
                      <div className="col-6">
                        <h3 className="nav-pillsInferiores mb-5">Femenino</h3>
                        {equiposFemeninosDivididos.map((grupo, index) => (
                          <Row key={index} className="mb-4">
                            {grupo.map((project, idx) => (
                              <Col key={idx} sm={6} md={6}>
                                <CardEquipos {...project} />
                              </Col>
                            ))}
                          </Row>
                        ))}
                      </div>
                    </div>

                    {/* Botón debajo de las cards */}
                    <div className="text-center mt-4">
                      <button className="custom-button">Ver más equipos</button>
                    </div>
                  </div>
                )}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>

        <img
          className="background-image-right"
          src={colorSharp2}
          alt="fondo"
        ></img>
      </section>
    </div>
  );
};
