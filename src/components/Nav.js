import React from 'react'

const Nav = () => {
  return (
    <div className="navBar">
      <div className="navLinksGrid">
        <h2 className="navLink">
          <a
            href="#top"
            style={{ textDecoration: 'none' }}
            className="aNavLink"
          >
            Home
          </a>
        </h2>
        <h2 className="navLink">
          <a href="#projectsSectionLink" style={{ textDecoration: 'none' }}>
            Projects
          </a>
        </h2>
        <h2 className="navLink">
          <a href="#aboutMeSectionLink" style={{ textDecoration: 'none' }}>
            About Me
          </a>
        </h2>
        <h2 className="navLink">
          <a href="#contactSectionLink" style={{ textDecoration: 'none' }}>
            Contact
          </a>
        </h2>
      </div>
    </div>
  )
}

export default Nav
