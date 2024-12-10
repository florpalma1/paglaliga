import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Banner } from "../components/Banner";
import { Equipos } from "../components/Equipos";
import { Detalles } from "../components/Detalles";

export const Home = () => {
  return (
    <div className="App">   
      <Banner />
      <Detalles />
      <Equipos />
    </div>
  );
}

