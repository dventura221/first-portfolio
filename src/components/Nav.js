import React from 'react'
//import { Link } from 'react-router-dom'
//import { useState } from 'react'
// import { Tabset, Tab } from 'react-rainbow-components'
// import AboutMe from './AboutMe'
// import Home from './Home'
// import Projects from './Projects'
// import Contact from './Contact'

const Nav = () => {
  //const [selected, setSelected] = useState('home')

  // class Nav extends React.Component {
  //   constructor(props) {
  //     super(props)
  //     this.state = { selected: 'home' }
  //     this.handleOnSelect = this.handleOnSelect.bind(this)
  //   }

  //   getTabContent = () => {
  //     const { selected } = this.state
  //     console.log('getting tab content')
  //     if (selected === 'about') {
  //       return <AboutMe />
  //     } else if (selected === 'home') {
  //       return <Home />
  //     } else if (selected === 'projects') {
  //       return <Projects />
  //     } else {
  //       return <Contact />
  //     }
  //   }

  //   // const handleOnSelect = (e) => {
  //   //   setSelected(e)
  //   // }

  //   handleOnSelect(event, selected) {
  //     this.setState({ selected })
  //   }

  //   render() {
  //     const { selected } = this.state
  return (
    <div className="navBar">
      <h3 className="navName">Dan Ventura</h3>
      <h4 className="navTitle">Full Stack Software Engineer | RN</h4>
      <div className="navLinksGrid">
        {/* <Link to="/" style={{ textDecoration: 'none' }} className="routerLink"> */}
        <h5 className="navLink">Home</h5>
        {/* </Link> */}

        <h5 className="navLink">About</h5>
        <h5 className="navLink">Projects</h5>
        <h5 className="navLink">Contact</h5>

        {/* <Tabset
          fullWidth
          onSelect={this.handleOnSelect}
          activeTabName={selected}
          className="tabSet"
        >
          <Tab label="Home" name="home" id="home" ariaControls="homeTab"></Tab>
          <Tab
            label="About"
            name="about"
            id="about"
            ariaControls="aboutTab"
          ></Tab>
          <Tab
            label="Projects"
            name="projects"
            id="projects"
            ariaControls="projectsTab"
          ></Tab>
          <Tab
            label="Contact"
            name="contact"
            id="contact"
            ariaControls="contactTab"
          ></Tab>
        </Tabset>
        {this.getTabContent()} */}
      </div>
    </div>
  )
}
// }

export default Nav
