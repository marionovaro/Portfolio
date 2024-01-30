import "./Tech.css"

export const Tech = () => {
  return (
    <>
      <nav id="tech-nav">
        <div className="language">
          <i className="devicon-javascript-plain colored"></i>
          <span className="name">JavaScript</span>
        </div>
        <div className="language">
          <i className="devicon-html5-plain colored"></i>
          <span className="name">HTML</span>
        </div>
        <div className="language">
          <i className="devicon-css3-plain colored"></i>
          <span className="name">CSS</span>
        </div>
        <div className="language">
          <i className="devicon-nodejs-plain colored"></i>
          <span className="name">NodeJS</span>
        </div>
        <div className="language">
          <i className="devicon-react-original colored"></i>
          <span className="name">React</span>
        </div>
        <div className="language">
          <i className="devicon-mongodb-plain-wordmark colored"></i>
          <span className="name">MongoDB</span>
        </div>
        {/* <div className="language">
          <i className="devicon-typescript-plain colored"></i>
          <span className="name">TypeScript</span>
        </div> */}
        {/* <div className="language">
          <i className="devicon-angularjs-plain colored"></i>
          <span className="name">Angular</span>
        </div> */}
      </nav>   
    </>
  )
}