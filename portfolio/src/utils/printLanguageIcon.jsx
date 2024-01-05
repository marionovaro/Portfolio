export const printLanguageIcon = (language) => {
  switch (language) {
    case "js":
      return <i class="devicon-javascript-plain colored"></i>

    case "html":
      return <i class="devicon-html5-plain colored"></i>

    case "css":
      return <i class="devicon-css3-plain colored"></i>

    case "react":
      return <i class="devicon-react-original colored"></i>

    case "node":
      return <i class="devicon-nodejs-plain colored"></i>

    case "mongodb":
      return <i class="devicon-mongodb-plain-wordmark colored"></i>

    case "ts":
      return <i class="devicon-typescript-plain colored"></i>
  }
}