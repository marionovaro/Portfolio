import { projects } from "../../data/projects"
import { ProjectCard } from "../ProjectCard/ProjectCard"
import { ProjectCardMobile } from "../ProjectCard/ProjectCardMobile"
import "./Work.css"
export const Work = () => {
  let mobile = window.innerWidth < 650 ? true : false
  let acc = 0;

  return (
    <>
      <div id="projects-section">
        <div id="projects-list">
          {projects.map((project) => {
            acc++
            return project.show && (!mobile 
            ? <ProjectCard key={project.title} title={project.title} description={project.description} languages={project.languages} isPublished={project.isPublished} index={acc-1} image={project.image} link={project?.link}/>
            : <ProjectCardMobile key={project.title} title={project.title} description={project.description} languages={project.languages} isPublished={project.isPublished} index={acc-1} image={project.phoneImage} link={project?.link}/>)
          })}
        </div>
      </div>
    </>
  )
}