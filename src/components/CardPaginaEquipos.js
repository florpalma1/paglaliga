import { Col } from "react-bootstrap";
import '../css/Paginaequipos.css'

export const CardPaginaEquipos = ({ title, imgUrl, category }) => {
  return (
    <Col xs={12} sm={6} md={4} lg={3}>
      <div className="player-single">
        <a href="team-details.html" className="player-picture">
          <img src={imgUrl} alt={title} />
        </a>
        <div className="contentPagEquipos">
          <a href="team-details.html" className="player-name">
            {title}
          </a>
          <span className="player-role">{category}</span>
        </div>
      </div>
    </Col>
  );
};


