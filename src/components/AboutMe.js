import MyMap from './Map'

const AboutMe = () => {
  return (
    <div className="aboutMeAll">
      <h1 className="aboutTitle">ABOUT ME</h1>
      <p className="brandStatement">
        Hello, Dan here. I made a career pivot from nursing to become a software
        engineer. I am excited and motivated for my next steps. I consider
        myself a dark horse, who is a high performer in the background, and
        speaks up when something needs to be said. I inject humor and a silent
        grace into my environment and work.
      </p>
      <MyMap />
      <h2 className="dogTitle">My tiny boys!</h2>
      <div className="aboutContainer">
        <div className="korbenCont">
          <h2 className="petName">Korben</h2>
          <img src="https://i.imgur.com/0t2Eu7e.png" alt="korben" />
        </div>
        <div className="rubyCont">
          <img src="https://i.imgur.com/xzEeGqf.png" alt="ruby" />
          <h2 className="petName">Ruby</h2>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
