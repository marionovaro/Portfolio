import { useState } from 'react'
import './App.css'
import { Title, SubTitle, Description, RRSS, Tech, Work, About, TogglePage } from './components'

const App = () => {
  const [toggle, setToggle] = useState("work")

  console.log(window.VisualViewport.scale)

  return (
    <>
      <section id="landing-page">
        <div id="lettering-side">
          <Title/>
          <SubTitle/>
          <Description/>
          <RRSS/>
        </div>
        <div id="visuals-side">
          <img src="https://alfin.dev/images/illustrations/developer-illustration.png" alt="mario coding" />
        </div>
      </section>
      <section id="main-nav">
        <h3 id="listo">¿Listo para dar vida a tu visión?</h3>
        <TogglePage toggle={toggle} setToggle={setToggle}/>
        <Tech/>
      </section>
      {toggle == "work" ?
        <section id="projects">
          <Work/>
        </section> 
      :
        <section>
          <About/>
        </section>}
    </>
  )
}

export default App
