import { Col } from "react-bootstrap";

export const CardPaginaEquipos = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div class="cardPagina">
        <p class="heading">Popular this month</p>
        <p>Powered By</p>
        <p>Uiverse</p>
      </div>
    </Col>
  );
};
