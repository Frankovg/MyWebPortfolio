import { BrowserRouter, Routes, Route } from "react-router-dom";
import Particles from "./Components/Particles";
import { Helmet } from "react-helmet-async";

//Components
import { Home } from "./Pages/Home/Home";
import { NavBar } from "./Components/NavBar/NavBar";
import { ErrorPage } from "./Pages/Error/404";
import { Footer } from "./Components/Footer/Footer";
import { AboutMe } from "./Pages/AboutMe/AboutMe";

//Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.scss";

function App() {
  return (
    <BrowserRouter>
      <Helmet prioritizeSeoTags>
        <title>FRAN Web Dev</title>
        <meta
          name="description"
          content="Front-end Developer | React + Nextjs + Tailwind + Typescript || UX/UI & Industrial Designer"
        />
        <meta name="theme-color" content="#000000" />
        <meta name="author" content="Franco Gabriel Amoroso" />
        <link rel="canonical" href="https://www.franamoroso.com/" />
      </Helmet>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <Footer />
      <Particles id="tsparticles" />
    </BrowserRouter>
  );
}

export default App;
