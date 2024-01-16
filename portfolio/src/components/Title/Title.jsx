import "./Title.css"

export const Title = () => {

  let mobile = window.innerWidth < 650 ? true : false

  return (
    <>
      {mobile ? <h1 id="name"><span>Mario</span>&nbsp;Novaro</h1> : <h1 id="name"><span>Mario</span>&nbsp;&nbsp;&nbsp;Novaro</h1>}
    </>
  )
}