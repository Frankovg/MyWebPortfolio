import "./app.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "./Components/Particles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./Components/NavBar/NavBar";
import { Footer } from "./Components/Footer/Footer";
import { Home } from "./Pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      {/* <Footer /> */}
      <Particles id="tsparticles" />
    </BrowserRouter>
  );
}

export default App;
