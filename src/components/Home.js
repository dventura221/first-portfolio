//import MyMap from './Map'
import Projects from './Projects'
import AboutMe from './AboutMe'
import Contact from './Contact'
const Home = () => {
  return (
    <div className="homeAll">
      <h2>Welcome to my portfolio!</h2>
      <div className="aboutMeSection">
        <AboutMe />
      </div>
      <div className="projectsSection">
        <Projects />
      </div>
      <div className="contactSection">
        <Contact />
      </div>
    </div>
  )
}

export default Home
