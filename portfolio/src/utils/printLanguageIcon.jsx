export const printLanguageIcon = (language) => {
  switch (language) {
    case "js":
      return <i className="devicon-javascript-plain colored"></i>

    case "html":
      return <i className="devicon-html5-plain colored"></i>

    case "css":
      return <i className="devicon-css3-plain colored"></i>

    case "react":
      return <i className="devicon-react-original colored"></i>

    case "node":
      return <i className="devicon-nodejs-plain colored"></i>

    case "mongodb":
      return <i className="devicon-mongodb-plain-wordmark colored"></i>

    case "ts":
      return <i className="devicon-typescript-plain colored"></i>
    
    case "angular":
      return <i className="devicon-angularjs-plain colored"></i>
  }
}