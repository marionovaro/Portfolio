import "./About.css"
export const About = () => {
  return (
    <>
      <div id="projects-section">
        <section id="about-section">
          <div id="grid-1">
            <img src="https://res.cloudinary.com/dx2arqne6/image/upload/v1704814279/20221206_124139_d0jvkn.jpg" alt="indonesia beach picture" />
          </div>
          <p id="grid-2">Una persona enamorada de la vida y de la programación. A punto de cumplir los 20 años, sigo desarrollando mi habilidad para convertir ideas en <span className="span-about">realidades digitales</span></p>
          <p id="grid-3">
            <span className="paragraph-title">
              <img src="https://res.cloudinary.com/dx2arqne6/image/upload/v1705074719/underline_5.1_slseo7.png" alt="underline" />
              Trayectoria Laboral
            </span>
            <br />
            Con tan solo 16 años empecé a trabajar en eventos de hoteles de lujo de Barcelona, aprendiendo a trabajar en equipo de manera coordinada y eficiente. <br className="paragraph-separation"/> <p className="second-paragraph">A dia de hoy dedico mi tiempo al completo como desarrolador freelance con varios proyectos a mis espaldas, ofreciendo atractivas soluciones web para empresas e individuos. <br /> <a href="http://localhost:5173/"><p className="link-to"><i>Ver Proyectos →</i></p></a> <br className="paragraph-separation last-separator"/></p>
          </p>
          <ul id="grid-4">
            <li><img className="icons trilingue aboutlist"src="https://res.cloudinary.com/dx2arqne6/image/upload/v1704910715/language_d9ynxy.png" alt="trilingue" /><i> Trlingue</i></li>
            <li><img className="icons proactivo aboutlist"src="https://res.cloudinary.com/dx2arqne6/image/upload/v1704910715/proactivo_xa6xpz.png" alt="proactivo" /><i> Proactivo</i></li>
            <li><img className="icons soñador aboutlist"src="https://res.cloudinary.com/dx2arqne6/image/upload/v1704910715/so%C3%B1ador_qroyej.png" alt="soñador" /><i> Soñador</i></li>
            <li><img className="icons apasionado aboutlist"src="https://res.cloudinary.com/dx2arqne6/image/upload/v1704910715/apasionado_jgt4wd.png" alt="apasionado" /><i> Apasionado</i></li>
            <li><img className="icons estoico aboutlist"src="https://res.cloudinary.com/dx2arqne6/image/upload/v1704910715/stoic_lkn1dv.png" alt="estoico" /><i> Estoico</i></li>
          </ul>
          <p id="grid-5">
            <span className="paragraph-title">
              <img src="https://res.cloudinary.com/dx2arqne6/image/upload/v1705074719/underline_5.1_slseo7.png" alt="underline" />
              Más allá del código
            </span>
            <br />
            Fuera de la pantalla, me encontrarás encima de una tabla de surf o volando dispuesto a explorar algún país asiático. También disfruto la lectura y el gimnasio.
          </p>
          <div id="grid-6">
            <img src="https://res.cloudinary.com/dx2arqne6/image/upload/v1704904909/IMG-20221215-WA0010_zne4j1_6c1b21.jpg" alt="indonesia beach picture" />
          </div>
          <h6 id="grid-7">Recuerdos de mi viaje recorriendo la increíble <span id="indonesia">Indonesia</span></h6>
          <div id="grid-8">
            <h3>Well...<br/> <span>this is me!</span></h3>
            <img src="https://res.cloudinary.com/dx2arqne6/image/upload/v1704906139/Arrow_ayx1y7.png" alt="arrow" />
          </div>
          <div id="grid-9">
            <img src="https://res.cloudinary.com/dx2arqne6/image/upload/v1704815508/20221119_065654_fxdgs3_60408b.jpg" alt="indonesia volcano picture" />
          </div>
          <p id="grid-10">
            <span className="paragraph-title">
              <img src="https://res.cloudinary.com/dx2arqne6/image/upload/v1705074719/underline_5.1_slseo7.png" alt="underline" />
              ¿Por qué la programación?
            </span>
            <br />
            A través de mis experiencias, descubrí la emoción de resolver problemas a través de líneas de código. Disfruto del desafío constante que supone crear experiencias web que dejen un impacto duradero.  
          </p>
          {/* <p id="grid-11">Grid 11</p> */}
        </section>
      </div>
    </>
  )
}