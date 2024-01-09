import { printLanguageIcon } from "../../utils/printLanguageIcon"
import { printNumberList } from "../../utils/printNumberList"
import "./ProjectCard.css"

export const ProjectCard = ({ title, description, languages, isPublished, index, image, link}) => {
  console.log(index%2)
  return (
    <div className="project-card">
      {index%2 !== 0 && <div className="image-container-project-card">
        {printNumberList(index)}
        <img className="main-project-image" src={image} alt={`portada ${title}`} /> 
      </div>}
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
        {isPublished && <a href={link}><p className="visit-site"><i>Visit the Website →</i></p></a>}
      </div>
      {index%2 == 0 && <div className="image-container-project-card">
        {printNumberList(index)}
        <img className="main-project-image" src={image} alt={`portada ${title}`} /> 
      </div>}
    </div>
  )
}