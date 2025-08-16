import { ArrowDownIcon, SquareAsteriskIcon } from "lucide-react";
import "./style/Hero.css";
import { Link } from "react-router-dom";
export const Hero = () => {
  return (
    <section id="home">
      <div className="container">
        <div className="right">
          <h1>
            Omar is a <span className="primary-text fade-in">full-stack developer</span>{" "}
            and <span className="primary-text fade-in">data analyst</span>
          </h1>
          <p>
            He crafts responsive websites where technologies meet creativity
          </p>
          <Link href="/contact" className="primary-button btn" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            Contact me!!
          </Link>
        </div>

        <div className="left">
          <img
            src={`${process.env.PUBLIC_URL}/images/first.png`}
            alt="Hero-Image"
          />
          <h4 className="underText">
            <SquareAsteriskIcon className="primary-text" size={18} /> Currently
            Working on <span className="primary-text">Portfolio</span>.
          </h4>
        </div>
      </div>
      <div className="scroll-indicator">
        Scroll <ArrowDownIcon className="arrow-bounce" size={30} />
      </div>
    </section>
  );
};
