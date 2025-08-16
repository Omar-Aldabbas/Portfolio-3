import { ArrowRightIcon } from "lucide-react";
import "./style/Skills.css";
import { Link } from "react-router-dom";


export const Skills = ({ showImages = true, skillsData = [], showViewAll = true }) => {
  const defaultSkills = [
    { title: "Languages", items: "JavaScript PHP Python" },
    { title: "Databases", items: "MySQL PostgreSQL MongoDB" },
    { title: "Others", items: "HTML CSS EJS SCSS TailWindCSS Mailtrap" },
    { title: "Tools", items: "Git/GitHub PowerBi Excel Figma VSCode Postman" },
    { title: "Frameworks", items: "React Express.js" },
    { title: "Cloud", items: "AWS Amazon Web Cloud" },
  ];

  const skills = skillsData.length > 0 ? skillsData : defaultSkills;

  return (
    <section id="skills" className="sec">
      <div className="projects-header">
        <div className="title-with-line">
          <h2>
            <span className="hash">#</span>skills
          </h2>
          <div className="line"></div>
        </div>
         {showViewAll && (
        <Link to="/about" className="view-all" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          view all <ArrowRightIcon size={20} />
        </Link> )}
      </div>

      <div className="outer-grid">
        {showImages && (
          <div className="left-col">
            {[1,2,3,3,1,2,3,2].map((num, index) => (
              <img
                key={index}
                src={process.env.PUBLIC_URL + `/images/img${num}.png`}
                className={`floating-img img${index + 1}`}
                alt=""
              />
            ))}
          </div>
        )}

        <div className="right-col">
          <div className="inner-grid">
            {skills.map((skill, idx) => (
              <div className={`col col-${idx + 1}`} key={idx}>
                <div className="box">
                  <h5>{skill.title}</h5>
                  <p>{skill.items}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
