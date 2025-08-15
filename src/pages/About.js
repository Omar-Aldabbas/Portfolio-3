import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { Testimonials } from "../components/Testimonials";

export const Aboutme = () => {
  return (
    <div>
      <About />
      <Testimonials />
      <Skills
        showImages={false}
        showViewAll={false}
        skillsData={[
          {
            title: "Languages",
            items: "JavaScript PHP Python TypeScript Ruby",
          },
          { title: "Databases", items: "MySQL PostgreSQL MongoDB Redis" },
          {
            title: "Others",
            items: "HTML CSS EJS SCSS TailWindCSS Mailtrap Docker",
          },
          {
            title: "Tools",
            items: "Git/GitHub PowerBi Excel Figma VSCode Postman Jira",
          },
          { title: "Frameworks", items: "React Express.js Next.js Nest.js" },
          { title: "Cloud", items: "AWS Amazon Web Cloud Azure GCP" },
        ]}
      />
    </div>
  );
};
