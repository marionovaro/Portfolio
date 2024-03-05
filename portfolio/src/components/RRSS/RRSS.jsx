import "./RRSS.css"
import { useNavigate } from "react-router-dom"

let navigate = useNavigate()

export const RRSS = () => {
  return (
    <ul id="icons-list">
      <li className="icons linkedin" onClick={navigate("https://www.linkedin.com/in/mario-novaro-056503226/")}><img src="https://cdn-icons-png.flaticon.com/128/2111/2111499.png" alt="linkedin icon"/></li>
      <li className="icons github" onClick={navigate("https://github.com/marionovaro")}><img src="https://cdn-icons-png.flaticon.com/128/733/733553.png" alt="github icon"/></li>
      <li className="icons gmail"><img src="https://cdn-icons-png.flaticon.com/128/732/732200.png" alt="gmail icon"/></li>
      <li className="icons insta" onClick={navigate("https://www.instagram.com/marionovaro/")}><img src="https://cdn-icons-png.flaticon.com/128/174/174855.png" alt="instagram icon"/></li> 
    </ul>
  )
}