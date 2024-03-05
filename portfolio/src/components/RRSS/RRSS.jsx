import "./RRSS.css"
import { useNavigate } from "react-router-dom"


export const RRSS = () => {
let navigate = useNavigate()
const redirectLinkedin = () => {
  // navigate("https://www.linkedin.com/in/mario-novaro-056503226/")
  window.location.href = "https://www.linkedin.com/in/mario-novaro-056503226/";
    return null;
}
const redirectGithub = () => {
  // navigate("https://github.com/marionovaro")
  window.location.href = "https://github.com/marionovaro";
  return null;
}
const redirectInsta = () => {
  // navigate("https://www.instagram.com/marionovaro/")
  window.location.href = "https://www.instagram.com/marionovaro/";
  return null;
}

  return (
    <ul id="icons-list">
      <li className="icons linkedin" onClick={redirectLinkedin}><img src="https://cdn-icons-png.flaticon.com/128/2111/2111499.png" alt="linkedin icon"/></li>
      <li className="icons github" onClick={redirectGithub}><img src="https://cdn-icons-png.flaticon.com/128/733/733553.png" alt="github icon"/></li>
      <li className="icons gmail"><img src="https://cdn-icons-png.flaticon.com/128/732/732200.png" alt="gmail icon"/></li>
      <li className="icons insta" onClick={redirectInsta}><img src="https://cdn-icons-png.flaticon.com/128/174/174855.png" alt="instagram icon"/></li> 
    </ul>
  )
}