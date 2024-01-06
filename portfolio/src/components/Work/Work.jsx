import { projects } from "../../data/projects"
import { ProjectCard } from "../ProjectCard/ProjectCard"
import "./Work.css"
export const Work = () => {
  return (
    <>
      <div id="projects-section">
        <h1 id="projects-section-title">Projects</h1>
        {projects.map((project) => (
          <ProjectCard title = {project.title} description={project.description} languages = {project.languages} isPublished={project.isPublished} image={project.image}/>
        ))}

      </div>
    </>
  )
}