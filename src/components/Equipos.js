import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import auchi from "../assets/img/AUCHI.png";
import diecisietevoley from "../assets/img/diecisietevoley.png";
import sportivohaedo from "../assets/img/SPORTIVO HAEDO.png";
import elrejunte from "../assets/img/EL REJUNTE.png";
import teamtopo from '../assets/img/teamtopo.png';
import cadelpa from '../assets/img/CADELPA.png';
import federal from "../assets/img/FEDERAL.png";
import acquarella from '../assets/img/ACQUARELLA.png'
import colorSharp2 from "../assets/img/color-sharp2.png";
import flechasvermas from '../assets/img/flechasvermas.png'
import "animate.css";
import TrackVisibility from "react-on-screen";
import { CardEquipos } from "./CardEquipos";

/*Agregas a las cards fotos del escudo de cada equipo, nombre y descripcion
la ultima card lleva a una pagina que muestra el listado de todas las cards de cada equipo
Cada equipo debera tener su propia pagina indicando:
datos, lista de jugadores, participaciones, fechas de proximos partidos
Capaz puedo repetir la seccion de Equipos(equipos) para cada division, quedando dos apartados por seccion, femenino y masculino*/

export const Equipos = () => {
 
    /*******Equipos Masculinos****** */

    const Equipos = [
    {
      title: "Acquarella Voley",
      description: "Ver mas", /**ver si puedo cambiar la descripcion por un link que me lleve a la pagina del equipo */
      imgUrl: acquarella,
    },
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
      title: "A.U.C.H.I",
      description: "Ver mas",
      imgUrl: auchi,
    },
    {
      title: "Cadelpa",
      description: "Ver mas",
      imgUrl: cadelpa,
    },
    {
        title: "aniuq",
        description:
          "Conoce todos los equipos que estan participando del torneo de verano",
        imgUrl: flechasvermas,
      },
  ];
  /*******Equipos Femeninos****** */

  const mujeres = [
    {
      title: "17 voley",
      description: "DESCRIPCION",
      imgUrl: diecisietevoley,
    },
    {
        title: "17 voley",
        description: "DESCRIPCION",
        imgUrl: diecisietevoley,
      },

    {
      title: "Sportivo Haedo",
      description: "otro equipo",
      imgUrl: sportivohaedo,
    },
    {
      title: "El Rejunte",
      description: "otro equipo",
      imgUrl: elrejunte,
    },
    {
      title: "Federal",
      description: "otro equipo",
      imgUrl: federal,
    },
    {
      title: "aniuq",
      description:
        "Conoce todos los equipos que estan participando del torneo de verano",
      imgUrl: flechasvermas,
    },
  ];

  return (
    <div>
    <section className="project" id="Equipos">
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
                  <h2>Equipos</h2>
                  <h3>Mayores 1era</h3>
                  <p>
                    {" "}
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book.
                  </p>
                  <Tab.Container id="Equipos-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Masculino</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Femenino</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {Equipos.map((project, index) => {
                            return <CardEquipos key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {mujeres.map((mujeres, index) => {
                            return <CardEquipos key={index} {...mujeres} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
        {/******aca van los equipos mixtos******
        <MailchimpForm /> */}
      </Container>

      <img
        className="background-image-right"
        src={colorSharp2}
        alt="fondo"
      ></img>
    </section>
     <section className="project" id="Equipos">
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
                 <h2>Mayores 2da</h2>
                 <p>
                   {" "}
                   Lorem Ipsum has been the industry's standard dummy text ever
                   since the 1500s, when an unknown printer took a galley of
                   type and scrambled it to make a type specimen book.
                 </p>
                 <Tab.Container id="Equipos-tabs" defaultActiveKey="first">
                   <Nav
                     variant="pills"
                     className="nav-pills mb-5 justify-content-center align-items-center"
                     id="pills-tab"
                   >
                     <Nav.Item>
                       <Nav.Link eventKey="first">Masculino</Nav.Link>
                     </Nav.Item>
                     <Nav.Item>
                       <Nav.Link eventKey="second">Femenino</Nav.Link>
                     </Nav.Item>
                   </Nav>
                   <Tab.Content
                     id="slideInUp"
                     className={
                       isVisible ? "animate__animated animate__slideInUp" : ""
                     }
                   >
                     <Tab.Pane eventKey="first">
                       <Row>
                         {Equipos.map((project, index) => {
                           return <CardEquipos key={index} {...project} />;
                         })}
                       </Row>
                     </Tab.Pane>
                     <Tab.Pane eventKey="second">
                       <Row>
                         {mujeres.map((mujeres, index) => {
                           return <CardEquipos key={index} {...mujeres} />;
                         })}
                       </Row>
                     </Tab.Pane>
                   </Tab.Content>
                 </Tab.Container>
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
