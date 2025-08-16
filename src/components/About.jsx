import { ArrowRight } from "lucide-react";
import "./style/About.css";
import { Link } from "react-router-dom";
// import { useState } from "react";


export const About = ({showbutton}) => {
  return (
    <section id="about-me">
      <div className="fix">

        <div className="about-left">
          <div className="projects-header">
            <div className="title-with-line">
              <h2>
                <span className="hash">#</span>about-me
              </h2>
              <div className="line skills-line"></div>
            </div>
          </div>
          <div className="par">
            <p>
              Hi, I’m Omar — a self-taught full-stack developer from Jordan. I
              build responsive, modern web apps that bring ideas to life.
              Constantly exploring new technologies, I turn creativity into
              clean, user-friendly experiences. <br /> <br />I enjoy tackling
              complex problems and transforming them into simple, elegant
              solutions. From designing interactive interfaces to building
              robust back-end systems, I aim to create seamless experiences that
              delight users and drive results. Collaboration, curiosity, and
              continuous learning guide every project I take on.
            </p>
            {showbutton && <Link href="/about" className="button-cosmic" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              Read More <ArrowRight />
            </Link>}
          </div>
        </div>


        <div className="about-right">
          <img src={process.env.PUBLIC_URL + "/images/second.png"} alt="" />
        </div>
      </div>
    </section>
  );
};
