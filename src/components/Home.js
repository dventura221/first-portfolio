import MyMap from './Map'
import Projects from './Projects'
import AboutMe from './AboutMe'

const Home = () => {
  return (
    <div>
      <h2>Welcome to my portfolio!</h2>
      <div className="aboutMeSection">
        <AboutMe />
      </div>
      <div className="projectsSection">
        <Projects />
      </div>
    </div>
  )
}

export default Home
