// CardPaginaEquipos.jsx

import '../css/Paginaequipos.css';

export const CardPaginaEquipos = ({ title, imgUrl, category }) => {
  return (
    <div className="team-card">
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
    </div>
  );
};
