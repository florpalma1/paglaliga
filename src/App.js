import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBarpage";
import { Banner } from "./components/Banner";
import { Equipos } from "./components/Equipos";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Equipos />
    </div>
  );
}

export default App;
