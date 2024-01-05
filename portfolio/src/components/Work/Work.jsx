import { ProjectCard } from "../ProjectCard/ProjectCard"
import "./Work.css"
export const Work = () => {
  return (
    <>
      <div id="projects-section">
        <h1 id="projects-section-title">Projects</h1>
        <ProjectCard title = "proyecto 1" languages = {["js", "html", "react", "css"]}/>

      </div>
    </>
  )
}