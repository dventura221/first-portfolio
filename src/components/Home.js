//import MyMap from './Map'
import Projects from './Projects'
import AboutMe from './AboutMe'
import Contact from './Contact'
import 'boxicons'

const Home = () => {
  return (
    <div className="homeAll">
      <a id="home"></a>
      <div className="homeContainer">
        <div className="homeText">
          <h1 className="navName">Dan Ventura</h1>
          <h2 className="navTitle">Full Stack Software Engineer</h2>
        </div>
        <img src="https://i.imgur.com/R5djuAo.png" alt="portrait" />
      </div>
      <a id="aboutMeSectionLink">
        <div className="aboutMeSection">
          <AboutMe />
        </div>
      </a>
      <div className="technologies">
        <div className="techTitle">
          <h1>TECHNOLOGIES</h1>
        </div>
        <div className="techContainer">
          <div className="indivTech">
            <p className="techName">Javascript</p>
            <box-icon name="javascript" type="logo" color="#ffffff"></box-icon>
          </div>
          <div className="indivTech">
            <p className="techName">Node.js</p>
            <box-icon name="nodejs" type="logo" color="#ffffff"></box-icon>
          </div>
          <div className="indivTech">
            <p className="techName">Python</p>
            <box-icon name="python" type="logo" color="#ffffff"></box-icon>
          </div>
          <div className="indivTech">
            <p className="techName">HTML5</p>
            <box-icon name="html5" type="logo" color="#ffffff"></box-icon>
          </div>
          <div className="indivTech">
            <p className="techName">CSS</p>
            <box-icon name="file-css" type="solid" color="#ffffff"></box-icon>
          </div>
          <div className="indivTech">
            <p className="techName">React</p>
            <box-icon name="react" type="logo" color="#ffffff"></box-icon>
          </div>
          <div className="indivTech">
            <p className="techName">Vue</p>
            <box-icon name="vuejs" type="logo" color="#ffffff"></box-icon>
          </div>
          <div className="indivTech">
            <p className="techName">MongoDB</p>
            <box-icon name="mongodb" type="logo" color="#ffffff"></box-icon>
          </div>
          <div className="indivTech">
            <p className="techName">MERN Stack</p>
            <box-icon name="coin-stack" color="#ffffff"></box-icon>
          </div>
          <div className="indivTech">
            <p className="techName">PostgreSQL</p>
            <box-icon name="postgresql" type="logo" color="#ffffff"></box-icon>
          </div>
          <div className="indivTech">
            <p className="techName">PERN Stack</p>
            <box-icon name="coin-stack" type="solid" color="#ffffff"></box-icon>
          </div>
          <div className="indivTech">
            <p className="techName">Django</p>
            <box-icon name="django" type="logo" color="#ffffff"></box-icon>
          </div>
          <div className="indivTech">
            <p className="techName">GitHub</p>
            <box-icon type="logo" name="github" color="#ffffff"></box-icon>
          </div>
          <div className="indivTech">
            <p className="techName">Git</p>
            <box-icon name="git" type="logo" color="#ffffff"></box-icon>
          </div>
        </div>
      </div>
      <a id="projectsSectionLink">
        <div className="projectsSection">
          <Projects />
        </div>
      </a>
      {/* <a id="aboutMeSectionLink">
        <div className="aboutMeSection">
          <AboutMe />
        </div>
      </a> */}
      <a id="contactSectionLink">
        <div className="contactSection">
          <Contact />
        </div>
      </a>
    </div>
  )
}

export default Home
