import React from 'react'

const Nav = () => {
  return (
    <div className="navBar">
      <div className="navLinksGrid">
        <h5 className="navLink">
          <a href="#top" style={{ textDecoration: 'none' }}>
            Home
          </a>
        </h5>
        <h5 className="navLink">
          <a href="#projectsSectionLink" style={{ textDecoration: 'none' }}>
            Projects
          </a>
        </h5>
        <h5 className="navLink">
          <a href="#aboutMeSectionLink" style={{ textDecoration: 'none' }}>
            About
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
