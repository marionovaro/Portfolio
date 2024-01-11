import "./About.css"
export const About = () => {
  return (
    <>
      <div id="projects-section">
        {/* <h1 id="projects-section-title">About Me</h1> */}
        <section id="about-section">
          <div id="grid-1">
            <img src="https://res.cloudinary.com/dx2arqne6/image/upload/v1704814279/20221206_124139_d0jvkn.jpg" alt="indonesia beach picture" />
          </div>
          <p id="grid-2">19 años de edad, vida dedicada al deporte y la programación, e incansable <span className="sorprendentes">aventurero</span>. Así me describiria a grandes rasgos. <br /> <br /> Disfruto viviendo mi vida como un constante desafío y canalizo mi energia física a través del surf y el gimnasio, y la mental a través de mi gran pasión: <span id="programar-word">programación</span> </p>
          <div id="grid-3">
            <h3>Texto</h3>
            {/* <img src="https://res.cloudinary.com/dx2arqne6/image/upload/v1704827596/20231003_162654_ao6zlc_3aea66_058d23.jpg" alt="indonesia beach picture" /> */}
          </div>
          <ul id="grid-4">
            <li><img className="icons trilingue aboutlist"src="https://res.cloudinary.com/dx2arqne6/image/upload/v1704910715/language_d9ynxy.png" alt="trilingue" /><i> Trlingue</i></li>
            <li><img className="icons proactivo aboutlist"src="https://res.cloudinary.com/dx2arqne6/image/upload/v1704910715/proactivo_xa6xpz.png" alt="proactivo" /><i> Proactivo</i></li>
            <li><img className="icons soñador aboutlist"src="https://res.cloudinary.com/dx2arqne6/image/upload/v1704910715/so%C3%B1ador_qroyej.png" alt="soñador" /><i> Soñador</i></li>
            <li><img className="icons apasionado aboutlist"src="https://res.cloudinary.com/dx2arqne6/image/upload/v1704910715/apasionado_jgt4wd.png" alt="apasionado" /><i> Apasionado</i></li>
            <li><img className="icons estoico aboutlist"src="https://res.cloudinary.com/dx2arqne6/image/upload/v1704910715/stoic_lkn1dv.png" alt="estoico" /><i> Estoico</i></li>
          </ul>
          <div id="grid-5">
            <h3>Texto</h3>
            {/* <img src="https://res.cloudinary.com/dx2arqne6/image/upload/v1701043798/ServerExercise/l3qefqkiu1xqagdrsy1d.jpg" alt="indonesia beach picture" /> */}
          </div>
          <div id="grid-6">
            <img src="https://res.cloudinary.com/dx2arqne6/image/upload/v1704904909/IMG-20221215-WA0010_zne4j1_6c1b21.jpg" alt="indonesia beach picture" />
          </div>
          <h6 id="grid-7">Recuerdos de mi viaje recorriendo la increíble <span>Indonesia</span></h6>
          <div id="grid-8">
            <h3>Well...<br/> <span>this is me!</span></h3>
            {/* <img src="https://res.cloudinary.com/dx2arqne6/image/upload/v1704906139/Arrow_ayx1y7.png" alt="arrow" /> */}
          </div>
          <div id="grid-9">
            <img src="https://res.cloudinary.com/dx2arqne6/image/upload/v1704815508/20221119_065654_fxdgs3_60408b.jpg" alt="indonesia volcano picture" />
          </div>
        </section>
      </div>
    </>
  )
}