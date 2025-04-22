import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Banner } from "../components/Banner";
import { Equipos } from "../components/Equipos";
import { Detalles } from "../components/Detalles";
import { Sponsor } from "./Sponsor";
import { TablaPosiciones } from "./TablaPosiciones";
import { Aboutus } from "./Aboutus";
import { Torneos } from "./Torneos";
import { UltimosResultados } from "./UltimosResultados";
import { Canchas } from "./Canchas";

export const Home = () => {
  return (
    <div className="App">   
      <Banner />
      <Detalles />
      <Canchas />
      <Equipos />
      <TablaPosiciones />
      <Torneos />
      {/*<UltimosResultados />*/}
      <Aboutus />
      <Sponsor />
    </div>
  );
}

