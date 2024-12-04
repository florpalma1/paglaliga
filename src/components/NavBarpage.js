import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import laligalogo from '../assets/img/laligalogo.png';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { HashLink } from 'react-router-hash-link';
import {  BrowserRouter as Router} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={laligalogo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Inicio</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'equipos' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('equipos')}>Equipos</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'Equipos' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Torneos</Nav.Link>
            </Nav>
            <span className="navbar-text">
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
              <HashLink to='#connect'>
                <button className="vvd"><span>Contactanos</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
