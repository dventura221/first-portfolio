import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className="navBar">
      <h1 className="navName">Dan Ventura</h1>
      <h3 className="navTitle">Full Stack Software Engineer</h3>
      <div className="navLinksGrid">
        <h4 className="navLink">
          <Link to="/" style={{ textDecoration: 'none' }}>
            Home
          </Link>
        </h4>
        <h4 className="navLink">About</h4>
        <h4 className="navLink">Projects</h4>
        <h4 className="navLink">Contact</h4>
      </div>
    </div>
  )
}

export default Nav
