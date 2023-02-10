import "./About.css";

export default function About(){
    return (
      <div className="about-container">
        <div className="about-wwr">
          <h1>WHO WE ARE</h1>
          <p>
            Rubixe<sup>TM</sup> is a global technology company specializing in
            disruptive technologies - {"\n"} Artificial Intelligence (AI),
            Machine Learning, Robotic Process Automation (RPA),{"\n"}{" "}
            BlockChain, and Internet of Things (IoT).
          </p>
          <p>
            Rubixe<sup>TM</sup> mission is to enable businesses to leverage the
            full potential of disruptive{"\n"} technologies and stay competitive
            in the market, turning complex challenges into{"\n"}solutions,
            providing a strategic competitive advantage that are more efficient,
            effective {"\n"}and predictable.
          </p>
        </div>
        <div className="wwd">
          <h1>WHERE WE STARTED</h1>
          <p>
            We started in 2015, With a passionate team who want
            to bring game-changing solutions through disrupting technologies. We
            expertise in delivering enterprise-level solutions in the field of
            Artificial Intelligence (AI), Cyber Security, Robotic Process
            Automation (RPA), Internet of Things (loT), and BlockChain
            technology.
          </p>
        </div>
      </div>
    );
}