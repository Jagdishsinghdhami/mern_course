import HeroSection from "./components/HeroSection";
import { useProductContext } from "./context/ProductContext";

const About = () => {
  const { myName } = useProductContext();
  return (
    <div>
      <h1>{myName}</h1>
      <HeroSection myData="Jagdish Dhami About" />
    </div>
  );
};

export default About;
