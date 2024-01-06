import { projects } from "../../data/projects"
import { ProjectCard } from "../ProjectCard/ProjectCard"
import "./Work.css"
export const Work = () => {
  let acc = 0;
  return (
    <>
      <div id="projects-section">
        <h1 id="projects-section-title">Projects</h1>
        <div id="projects-list">
          {projects.map((project) => {
            acc++
            return (
              <ProjectCard title={project.title} description={project.description} languages={project.languages} isPublished={project.isPublished} index={acc-1} image={project.image}/>
            )
          })}
        </div>
      </div>
    </>
  )
}