import NavBar from "../../components/NavBar/NavBar";
import Hero from "./sections/Hero/Hero";
import SobreMim from "./sections/SobreMim/SobreMim";
import { Element } from 'react-scroll';

const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Element name="sobre-mim">
        <SobreMim  />
      </Element>
      {/* Adicione outros componentes com identificadores aqui, se necessário */}
    </>
  );
};

export default Home;

  