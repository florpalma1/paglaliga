
import "animate.css";
import varonesjugando from '../assets/img/'



const teamsData = [
  { number: 1, name: "1era Masculino", imageUrl: varonesjugando },
  { number: 2, name: "1era Femenino", imageUrl: '//i.lensdump.com/i/AZInIA.jpg' },
  { number: 3, name: "2da Maculino", imageUrl: '//i.lensdump.com/i/AZInIA.jpg' },
  { number: 4, name: "2da Femenino", imageUrl: '//i.lensdump.com/i/AZInIA.jpg' },
  { number: 5, name: "Sub 18 Masculino", imageUrl: '//i.lensdump.com/i/AZInIA.jpg' },
  { number: 6, name: "Sub 18 Femenino", imageUrl: '//i.lensdump.com/i/AZInIA.jpg' },
  { number: 7, name: "Mixto Competitivo", imageUrl: '//i.lensdump.com/i/AZInIA.jpg' },
  { number: 8, name: "Mixto Recreativo", imageUrl: '//i.lensdump.com/i/AZInIA.jpg' },
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


