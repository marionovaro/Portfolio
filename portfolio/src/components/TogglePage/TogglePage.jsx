import "./TogglePage.css"
export const TogglePage = ({toggle, setToggle}) => {
  console.log(toggle)
  return (
    <div id="toggle-component">
      <button id="work-side-toggle" onClick={() => setToggle("work")} style={{backgroundColor: toggle == "work" ? "rgb(128, 128, 128, 0.3)" : "#2D2D2D"}}>Work</button>
      <button id="about-side-toggle" onClick={() => setToggle("about")} style={{backgroundColor: toggle == "about" ? "rgb(128, 128, 128, 0.3)" : "#2D2D2D"}}>About</button>
    </div>
  )
}