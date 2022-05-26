//import MyMap from './Map'
import Projects from './Projects'
import AboutMe from './AboutMe'
import Contact from './Contact'
const Home = () => {
  return (
    <div className="homeAll">
      <a id="home"></a>
      <h1 className="navName">Dan Ventura</h1>
      <h2 className="navTitle">Full Stack Software Engineer | RN</h2>
      <h2>Welcome to my portfolio!</h2>
      <a id="projectsSectionLink">
        <div className="projectsSection">
          <Projects />
        </div>
      </a>
      <a id="aboutMeSectionLink"></a>
      <div className="aboutMeSection">
        <h1>About Me</h1>
        <AboutMe />
      </div>

      <a id="contactSectionLink">
        <div className="contactSection">
          <Contact />
        </div>
      </a>
    </div>
  )
}

export default Home
