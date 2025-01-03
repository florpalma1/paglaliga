
import "animate.css";
import mayoresprimera from '../assets/img/mayoresprimera.png'
import femmayoresprimera from '../assets/img/femmayoresprimera.png'
import mayooressegundamasc from '../assets/img/mayooressegundamasc.png'
import femmayoressegunda from '../assets/img/femmayoressegunda.png'
import inferioresmasc from '../assets/img/inferioresmasc.png'
import inferioresfem from '../assets/img/inferioresfem.png'
import "../css/Equipos.css";


/*cambiar las imagenes de las categorias correspondientes*/
const teamsData = [
  { number: 1, name: "1era Masculino", imageUrl: mayoresprimera },
  { number: 2, name: "1era Femenino", imageUrl: femmayoresprimera },
  { number: 3, name: "2da Maculino", imageUrl: mayooressegundamasc },
  { number: 4, name: "2da Femenino", imageUrl: femmayoressegunda },
  { number: 5, name: "Sub 18 Masculino", imageUrl: inferioresmasc },
  { number: 6, name: "Sub 18 Femenino", imageUrl: inferioresfem },  
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


