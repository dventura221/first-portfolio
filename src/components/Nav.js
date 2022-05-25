import React from 'react'

const Nav = () => {
  return (
    <div className="navBar">
      <h3 className="navName">Dan Ventura</h3>
      <h4 className="navTitle">Full Stack Software Engineer | RN</h4>
      <div className="navLinksGrid">
        <h5 className="navLink">
          <a href="home" style={{ textDecoration: 'none' }}>
            Home
          </a>
        </h5>
        <h5 className="navLink">
          <a href="#aboutMeSectionLink" style={{ textDecoration: 'none' }}>
            About
          </a>
        </h5>
        <h5 className="navLink">
          <a href="#projectsSectionLink" style={{ textDecoration: 'none' }}>
            Projects
          </a>
        </h5>
        <h5 className="navLink">
          <a href="#contactSectionLink" style={{ textDecoration: 'none' }}>
            Contact
          </a>
        </h5>
      </div>
    </div>
  )
}

export default Nav
