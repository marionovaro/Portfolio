import { printLanguageIcon } from "../../utils/printLanguageIcon"
import { printNumberList } from "../../utils/printNumberList"
import "./ProjectCardMobile.css"

export const ProjectCardMobile = ({ title, description, languages, isPublished, index, image, link}) => {
  return (
    <div className="project-card-mobile">
      <div className="image-container-project-card-mobile">
        {index%2 == 0 && <h2 className="project-title-mobile-right">{title}</h2>}
        {printNumberList(index)}
        {index%2 !== 0 && <h2 className="project-title-mobile-left">{title}</h2>}
        <img className="main-project-image-mobile" src={image} alt={`portada ${title}`} /> 
      </div>
      <div className="project-info-mobile">
        <h4 className="project-description-mobile">{description}</h4>
        <ul className="languages-list-mobile">
        {languages?.map((language) => {
          return (
              <li key={language}>{printLanguageIcon(language)}</li>
          )
        })}
        </ul>
        {isPublished && <a href={link}><p className="visit-site-mobile"><i>Visit the Website →</i></p></a>}
      </div>
    </div>
  )
}