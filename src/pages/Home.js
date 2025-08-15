import { About } from "../components/About"
import { Contact } from "../components/Contact"
import { Hero } from "../components/Hero"
import { Projects } from "../components/Projects"
import { Quate } from "../components/Quate"
import { Skills } from "../components/Skills"

export const Home = () => {


  return (
    <div>
      {/* darkmode */}
        {/* <ThemeToggle /> */}
      {/* hero */}
        <Hero/>
        <Quate/>
      {/* projects */}
        <Projects limit={3}/>
      {/* skills */}
        <Skills/>
      {/* about me  */}
        <About/>
      {/* contactme */}
        <Contact showForm={false} />
      {/* footer */}
    </div>
  )
}