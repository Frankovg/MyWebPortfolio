import "./app.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "./Components/Particles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./Components/NavBar/NavBar";
import { Footer } from "./Components/Footer/Footer";
import { Home } from "./Pages/Home/Home";
import { Helmet } from "react-helmet-async";

function App() {
  return (
    <BrowserRouter>
      <Helmet prioritizeSeoTags>
        <title>FRAN Web Dev</title>
        <meta
          name="description"
          content="Full Stack Web Developer | React + Node + MySQL || UX & Industrial Designer"
        />
        <meta name="theme-color" content="#000000" />
        <meta name="author" content="Franco Gabriel Amoroso" />
        <link rel="canonical" href="https://www.franamoroso.com/" />
      </Helmet>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
      <Particles id="tsparticles" />
    </BrowserRouter>
  );
}

export default App;
