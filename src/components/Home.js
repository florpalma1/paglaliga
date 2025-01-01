import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Banner } from "../components/Banner";
import { Equipos } from "../components/Equipos";
import { Detalles } from "../components/Detalles";
import { Sponsor } from "./Sponsor";

export const Home = () => {
  return (
    <div className="App">   
      <Banner />
      <Detalles />
      <Equipos />
      <Sponsor />
    </div>
  );
}

