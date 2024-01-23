import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Trusted from "./components/Trusted";

const Home = () => {
  return (
    <>
      <HeroSection myData="Jagdish Singh Home" />
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
