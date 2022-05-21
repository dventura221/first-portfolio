import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className="navBar">
      <h1 className="navName">Dan Ventura</h1>
      <h3 className="navTitle">Full Stack Software Engineer</h3>
      <div className="navLinksGrid">
        {/* <Link to="/" style={{ textDecoration: 'none' }} className="routerLink"> */}
        <h4 className="navLink">Home</h4>
        {/* </Link> */}

        <h4 className="navLink">About</h4>
        <h4 className="navLink">Projects</h4>
        <h4 className="navLink">Contact</h4>
      </div>
    </div>
  )
}

export default Nav
