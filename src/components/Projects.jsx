import { ArrowRightIcon } from "lucide-react";
import "./style/Projects.css";

const projects = [
  {
    id: 1,
    title: "Hyperealist",
    description: "Unique Landing page app for brands using React and Node.js",
    image: `${process.env.PUBLIC_URL}/images/project1.png`,
    tags: ["React", "Node.js", "Express", "MongoDB"],
    demoURL: "#",
    githubURL: "#",
  },
  {
    id: 2,
    title: "Sable",
    description: "A beautiful Banking website with a slick design",
    image: `${process.env.PUBLIC_URL}/images/project2.png`,
    tags: ["React", "Node.js", "Express", "MongoDB"],
    demoURL: "#",
    githubURL: "#",
  },
  {
    id: 3,
    title: "Certo",
    description: "A landing page to privacy android application",
    image: `${process.env.PUBLIC_URL}/images/project1.png`,
    tags: ["React", "Node.js", "Express", "Postgres"],
    demoURL: "#",
    githubURL: "#",
  },
  {
    id: 4,
    title: "Capitive",
    description: "A webinar platform designed for marketers",
    image: `${process.env.PUBLIC_URL}/images/project4.png`,
    tags: ["React", "TailwindCSS", "Node.js", "Express", "MongoDB"],
    demoURL: "#",
    githubURL: "#",
  },
  {
    id: 5,
    title: "PostPilot",
    description: "Unique Webapp to send, ship and track your products",
    image: `${process.env.PUBLIC_URL}/images/project5.png`,
    tags: ["React", "Node.js", "Express", "MongoDB"],
    demoURL: "#",
    githubURL: "#",
  },
  {
    id: 6,
    title: "Jadoo",
    description: "A tour app that lets you explore locations worldwide",
    image: `${process.env.PUBLIC_URL}/images/project6.png`,
    tags: ["React", "Node.js", "Express", "MongoDB"],
    demoURL: "#",
    githubURL: "#",
  },
];

export const Projects = ({ limit }) => {
  const projectsToShow = limit ? projects.slice(0, limit) : projects;

  return (
    <section id="works">
      <div className="projects-header">
        <div className="title-with-line">
          <h2>
            <span className="hash">#</span>projects
          </h2>
          <div className="line"></div>
        </div>

        {limit && (
          <a href="/projects" className="view-all" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            view all <ArrowRightIcon size={20} />
          </a>
        )}
      </div>

      <div className="container">
        <div className="projects-wrapper">
          <div className="projects-scroll">
            {projectsToShow.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="card-image"
                  />
                </div>
                <div className="project-content">
                  <div className="project-tags">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
