import 'boxicons'

const Contact = () => {
  return (
    <div className="contactAll">
      <h1>CONTACT</h1>
      <div className="iconBoxContact">
        <div className="indivIcon">
          <a href="https://www.linkedin.com/in/dan-ventura221/" target="_blank">
            <p className="contactText">My LinkedIn</p>
            <box-icon
              name="linkedin-square"
              type="logo"
              color="#000000"
              animation="tada-hover"
            ></box-icon>
          </a>
        </div>
        <div className="indivIcon">
          <a href="https://github.com/dventura221" target="_blank">
            <p className="contactText">My GitHub</p>
            <box-icon
              name="github"
              type="logo"
              color="#000000"
              animation="tada-hover"
            ></box-icon>
          </a>
        </div>
        <div className="indivIcon">
          <a
            href="https://docs.google.com/document/d/1j2CaZwjPwz8Uf4d4RaOlVg_mvsw4ejXucpZelF6ZBCw/edit?usp=sharing"
            target="_blank"
          >
            <p className="contactText">My Resume</p>
            <box-icon
              name="file"
              color="#000000"
              animation="tada-hover"
              title="Resume"
            ></box-icon>
          </a>
        </div>
      </div>
      <div className="emailContainer">
        <h2>Email:</h2>
        <a
          href="mailto:danice.ventura@gmail.com"
          target="_blank"
          rel="noopener norefferer"
        >
          <h2 className="email">danice.ventura@gmail.com</h2>
        </a>
      </div>
      <div className="emailContainer">
        <h2>Phone:</h2>
        <a href="tel:+17204663123">
          <h2 className="phone">720-466-3123</h2>
        </a>
      </div>
    </div>
  )
}

export default Contact
