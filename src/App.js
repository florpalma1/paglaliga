import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBarpage";
import { Banner } from "./components/Banner";
import { Equipos } from "./components/Equipos";
import { Detalles } from "./components/Detalles";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar /> 
      <Banner />
      <Detalles />
      <Equipos />
      <Footer />
    </div>
  );
}

export default App;
