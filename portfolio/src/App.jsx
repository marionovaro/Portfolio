import { useState } from 'react'
import './App.css'
import { Title, SubTitle, Description, RRSS, Tech, Work, About } from './components'

const App = () => {
  const [count, setCount] = useState(0)

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
      <Tech/>
      {/* <button>Conecta</button> */}
    </section>
    <section id="projects">
      <Work/>
    </section>
    </>
  )
}

export default App
