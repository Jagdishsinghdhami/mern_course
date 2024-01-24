import FeatureProduct from "./components/FeatureProduct";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Trusted from "./components/Trusted";

const Home = () => {
  return (
    <>
      <HeroSection myData="Jagdish Singh Home" />
      <FeatureProduct />
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
