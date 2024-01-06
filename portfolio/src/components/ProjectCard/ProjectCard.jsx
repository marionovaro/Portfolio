import { printLanguageIcon } from "../../utils/printLanguageIcon"
import "./ProjectCard.css"

export const ProjectCard = ({ title, description, languages, isPublished, image}) => {
  return (
    <div className="project-card">
      <div className="image-container-project-card">
        <img src={image} alt={`portada ${title}`} /> 
      </div>
      <div className="project-info">
        <h2 className="project-title">{title}</h2>
        <h4 className="project-description">{description}</h4>
        <ul className="languages-list">
        {languages?.map((language) => {
          return (
              <li key={language}>{printLanguageIcon(language)}</li>
          )
        })}
        </ul>
        {isPublished && <p className="visit-site"><i>Visit the Website →</i></p>}
      </div>
      
    </div>
  )
}