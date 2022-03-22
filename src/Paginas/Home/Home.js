import React from "react";
import "../../styles.css";
import Navbar from "./Components/Navbar";
import Portada from "./Components/Portada";
import Footer from "./Components/Footer";
import Cards from "./Components/Cards";
import Ventajas from "./Components/Ventajas";
import Projects from "./Components/Projects";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Portada />
      <Cards />
      <Ventajas />
      <Projects />
      <Footer />
    </div>
  );
};

export default Home;
