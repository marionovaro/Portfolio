import { printLanguageIcon } from "../../utils/printLanguageIcon"
import "./ProjectCard.css"

export const ProjectCard = ({ title, description, languages, image}) => {
  return (
    <div className="project-card">
      <img src={image} alt={`portada ${title}`} />
      <div className="project-info">
        <h2 className="project-title">{title}</h2>
        <h4>{description}</h4>
        <ul className="languages-list">
        {languages?.map((language) => {
          return (
              <li key={language}>{printLanguageIcon(language)}</li>
          )
        })}
        </ul>
      </div>
      
    </div>
  )
}