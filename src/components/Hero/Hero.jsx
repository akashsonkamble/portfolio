import "./Hero.css";

const Hero = () => {
  return <section className="hero-container">
    <div className="hero-content">
      <h2>Crafting Digital Experiences That Inspire</h2>
      <p className="hero-description">
        Passionate Frontend Developer | Transforming Ideas Into Visually Stunning and Innovative Web Solutions
      </p>
    </div>

    <div className="hero-img">
        <div>
            <div className="tech-icon">
                <img src="https://cdn-icons-png.flaticon.com/512/1260/1260667.png" alt="react-logo" />
            </div>
            <img src="./hero-img.png" alt="hero-img" />
        </div>

        <div>
            <div className="tech-icon">
                <img src="https://cdn-icons-png.flaticon.com/512/1051/1051277.png" alt="html5-logo" />
            </div>
            <div className="tech-icon">
                <img src="https://cdn-icons-png.flaticon.com/512/732/732190.png" alt="css-logo" />
            </div>
            <div className="tech-icon">
                <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="js-logo" />
            </div>
        </div>
    </div>
  </section>;
};

export default Hero;
