import { Col } from "react-bootstrap";

export const CardPaginaEquipos = ({ title, imgUrl }) => {
  return (
    <Col xs={12} sm={6} md={4}>
      <div className="cardPagina">
        <h4 className="heading">{title}</h4>
        <img src={imgUrl} alt="foto-quipo" />
        <p>Uiverse</p>
      </div>
    </Col>
  );
};
