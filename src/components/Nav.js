import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className="navBar">
      <h4 className="navName">Dan Ventura</h4>
      <h5 className="navTitle">Full Stack Software Engineer | RN</h5>
      <div className="navLinksGrid">
        {/* <Link to="/" style={{ textDecoration: 'none' }} className="routerLink"> */}
        <h6 className="navLink">Home</h6>
        {/* </Link> */}

        <h6 className="navLink">About</h6>
        <h6 className="navLink">Projects</h6>
        <h6 className="navLink">Contact</h6>
      </div>
    </div>
  )
}

export default Nav
