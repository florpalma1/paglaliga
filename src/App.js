import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBarpage";
import { Banner } from "./components/Banner";
import { Equipos } from "./components/Equipos";
import { Detalles } from "./components/Detalles";

function App() {
  return (
    <div className="App">
      <NavBar /> 
      <Banner />
      <Detalles />
      <Equipos />
    </div>
  );
}

export default App;
