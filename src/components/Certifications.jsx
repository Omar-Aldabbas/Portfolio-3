import { ArrowRightIcon } from "lucide-react";
import { Link } from "react-router-dom";

const certifications = [
  {
    id: 1,
    title: "HTU Full-Stack MERN",
    description:
      "Full-Stack development certification focusing on MongoDB, Express, React, and Node.js",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    viewURL: "#",
  },
  {
    id: 2,
    title: "ShAI Full-Stack & Data Analysis",
    description:
      "Certification covering AI-powered full-stack development and data analysis techniques",
    tags: ["AI", "Full-Stack", "Data Analysis"],
    viewURL: "#",
  },
  {
    id: 3,
    title: "DataCamp Data Analysis",
    description:
      "Professional certification in data analysis, visualization, and Python libraries",
    tags: ["Python", "Pandas", "Matplotlib", "Data Visualization"],
    viewURL: "#",
  },
  {
    id: 4,
    title: "Correlation One - Job Development Honor",
    description:
      "Recognition for outstanding performance in job readiness and development skills",
    tags: ["Career Skills", "Professional Development"],
    viewURL: "#",
  },
  {
    id: 5,
    title: "YDEP",
    description:
      "Youth Development and Empowerment Program completion certificate",
    tags: ["Leadership", "Entrepreneurship"],
    viewURL: "#",
  },
  {
    id: 6,
    title: "Injaz",
    description:
      "Entrepreneurship and career readiness training program certification",
    tags: ["Business Skills", "Innovation"],
    viewURL: "#",
  },
  {
    id: 7,
    title: "Ana Usharek",
    description:
      "Participation in civic engagement and community leadership program",
    tags: ["Community Leadership", "Civic Engagement"],
    viewURL: "#",
  },
];

export const Certifications = ({ limit }) => {
  const certsToShow = limit ? certifications.slice(0, limit) : certifications;

  return (
    <section id="certifications">
      <div className="projects-header">
        <div className="title-with-line">
          <h2>
            <span className="hash">#</span>certifications
          </h2>
          <div className="line"></div>
        </div>

        {limit && (
          <Link
            to="/certifications"
            className="view-all"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            view all <ArrowRightIcon size={20} />
          </Link>
        )}
      </div>

      <div className="container">
        <div className="projects-wrapper">
          <div className="projects-scroll">
            {certsToShow.map((cert) => (
              <div key={cert.id} className="project-card">
                {/* <div className="project-image">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="card-image"
                  />
                </div> */}
                <div className="project-content">
                  <div className="project-tags">
                    {cert.tags.map((tag, index) => (
                      <span key={index} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="project-title">{cert.title}</h3>
                  <p className="project-description">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
