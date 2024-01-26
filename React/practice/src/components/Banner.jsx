import { NavLink } from "react-router-dom";

const Banner = ({ myData }) => {
  return (
    <div className="container">
      <div className="grid grid-two-column">
        <div className="hero-section-data">
          <p className="intro-data">Welcome to </p>
          <h1> {myData} </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            atque temporibus veniam doloribus libero ad error omnis voluptates
            animi! Suscipit sapiente.
          </p>
          <NavLink>
            <button>show now</button>
          </NavLink>
        </div>
        {/* our homepage image  */}
        <div className="hero-section-image">
          <figure>
            <img
              src="images/hero.jpg"
              alt="hero-section-photo"
              className="img-style"
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Banner;
