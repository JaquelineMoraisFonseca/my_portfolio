import NavBar from "../../components/NavBar/NavBar";
import Footer from "./sections/Footer/Footer";

import Hero from "./sections/Hero/Hero";
import Projetos from "./sections/Projetos/Projetos";
import SobreMim from "./sections/SobreMim/SobreMim";
import { Element } from 'react-scroll';

const Home = () => {
  return (
    <div style={{backgroundColor:"#0a0a0a" }}>
      <NavBar />
      <Element name="home">
      <Hero />
      </Element>
      <Element name="sobre-mim">
        <SobreMim  />
      </Element>
      <Element name="projetos">
        <Projetos/>
      </Element>
      <Element name="Footer">
        <Footer/>
      </Element>
    </div>
  );
};

export default Home;

  