import { Col } from "react-bootstrap";

export const CardPaginaEquipos = ({ title, imgUrl,  category, type, points}) => {
  return (
    <Col xs={12} sm={6} md={4}>
      <div className="cardPagina">
        <img src={imgUrl} alt="foto-equipo" className="img-fluid" />
        <h4 className="heading">{title}</h4>
      </div>
    </Col>
  );
};
