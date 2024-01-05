import { printLanguageIcon } from "../../utils/printLanguageIcon"
import "./ProjectCard.css"

export const ProjectCard = ({ title, languages}) => {
  return (
    <div className="project-card">
      <img src="https://t3.ftcdn.net/jpg/05/69/49/70/360_F_569497047_6wIPFpvnfmwRTpgiRG2dVdlyjOXe2lcY.jpg" alt="imagen proyecto 1" />
      <div className="project-info">
        <h3 className="project-title">{title}</h3>
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