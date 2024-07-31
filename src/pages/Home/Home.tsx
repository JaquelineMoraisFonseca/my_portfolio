import NavBar from "../../components/NavBar/NavBar";

import Hero from "./sections/Hero/Hero";
import Projetos from "./sections/Projetos/Projetos";
import SobreMim from "./sections/SobreMim/SobreMim";
import { Element } from 'react-scroll';

const Home = () => {
  return (
    <>
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
      {/* Adicione outros componentes com identificadores aqui, se necessário */}
    </>
  );
};

export default Home;

  