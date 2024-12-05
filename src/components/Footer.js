import { Container, Row, Col } from "react-bootstrap";
import laligalogo from "../assets/img/laligalogo.png";
import 'bootstrap-icons/font/bootstrap-icons.css';


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={laligalogo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.instagram.com/laliga_tdv/">
              <i className="bi bi-instagram text-light"></i> 
              </a>
              <a href="https://www.tiktok.com/@laliga_del_oeste_voley?lang=es">
              <i className="bi bi-tiktok text-light"></i>
              </a>
              <a href="https://api.whatsapp.com/send?phone=541166581704&text=Hola%20Liga%20del%20Oeste!%20%F0%9F%8F%90%20">
              <i className="bi bi-whatsapp text-light"></i>
              </a>
            </div>
            <p>Copyright 2024. Todos los derechos reservados</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
