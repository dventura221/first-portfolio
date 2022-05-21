import MyMap from './Map'

const AboutMe = () => {
  return (
    <div>
      <h1>About Me</h1>
      <p className="brandStatement">
        My name is Dan. I made a career pivot from nursing to become a software
        engineer. I am excited and motivated for my next steps. I consider
        myself a dark horse, who is a high performer in the background, and
        speaks up when something needs to be said. I inject humor and a silent
        grace into my environment and work.
      </p>
      <div className="map">
        <MyMap />
      </div>
    </div>
  )
}

export default AboutMe
