
import "animate.css";
import galeriauno from '../assets/img/galeriauno.jpg'
import galeriados from '../assets/img/galeriados.jpg'
import galeriasiete from '../assets/img/galeriasiete.jpg'
import galeriacuatro from '../assets/img/galeriacuatro.jpg'
import galeriacinco from '../assets/img/galeriacinco.jpg'
import galeriaocho from '../assets/img/galeriaocho.jpg'
import "../css/Equipos.css";


/*cambiar las imagenes de las categorias correspondientes*/
const teamsData = [
  { number: 1, name: "1era Masculino", imageUrl: galeriacuatro },
  { number: 2, name: "1era Femenino", imageUrl: galeriaocho },
  { number: 3, name: "2da Maculino", imageUrl: galeriacinco },
  { number: 4, name: "2da Femenino", imageUrl: galeriados },
  { number: 5, name: "Sub 18 Masculino", imageUrl: galeriauno },
  { number: 6, name: "Sub 18 Femenino", imageUrl: galeriasiete },  
];

export const Equipos = () => {
  return (
    <>


      {/* Main Content */}
      <main>
        <div className="underlay-text">
          <span>TDV EQUIPOS 2025</span>
        </div>
        
        <div className="page-container">
          <h1 className="main-title">
           CATEGORIAS
            <span className="icon-dropdown"></span>
          </h1>
          
          <div className="content grid grid-teams">
            {teamsData.map(team => (
              <div className="card card-team" key={team.number}>
                <div className="card-team__bg" style={{ backgroundImage: `url(${team.imageUrl})` }}></div>
                <div className="card-team__logo">
                  <i className="fas fa-football-ball"></i>
                </div>
                <div className="card-team__number">{team.number}</div>
                <div className="card-team__name">{team.name}</div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};


