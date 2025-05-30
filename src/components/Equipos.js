
import "animate.css";
import galeriauno from '../assets/img/galeriauno.jpg'
import galeriados from '../assets/img/galeriados.jpg'
import galeriasiete from '../assets/img/galeriasiete.jpg'
import galeriacuatro from '../assets/img/galeriacuatro.jpg'
import galeriacinco from '../assets/img/galeriacinco.jpg'
import galeriaocho from '../assets/img/galeriaocho.jpg'
import galeriaprom from '../assets/img/galeriaprom.JPG'
import todosequipos from '../assets/img/todosequipos.JPG'
import "../css/Equipos.css";


/*agregar los links que me van a redirigir a cada categoria*/
const teamsData = [
  {  name: "1era Masculino", imageUrl: galeriacuatro },
  {  name: "1era Femenino", imageUrl: galeriaocho },
  {  name: "2da Maculino", imageUrl: galeriacinco },
  {  name: "2da Femenino", imageUrl: galeriados },
  {  name: "Inferiores Masculino", imageUrl: galeriauno },
  {  name: "Inferiores Femenino", imageUrl: galeriasiete },  
  {  name: "3ra Damas", imageUrl: galeriaprom },
  { name: "Ver todos", imageUrl: todosequipos },
];

export const Equipos = () => {
  return (
    <>
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
    <div className="card card-team" key={`${team.name}`}>
    <div className="card-team__bg" style={{ backgroundImage: `url(${team.imageUrl})` }}></div>
    <div className="card-team__logo">
      <i className="fas fa-football-ball"></i>
    </div>
    <div className="card-team__name ms-3">{team.name}</div>
  </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};


