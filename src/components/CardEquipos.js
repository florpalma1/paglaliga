import { Col } from "react-bootstrap";

export const CardEquipos = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="foto-quipo" />
        <div className="proj-txtx">
        <span>{description}</span>
          <h4>{title}</h4>
          
        </div>
      </div>
    </Col>
  )
}
