const Contact = () => {
  return (
    <div className="contactAll">
      <h1>Contact</h1>
      <div className="iconBox">
        <div className="indivIcon">
          <a href="https://www.linkedin.com/in/dan-ventura221/" target="_blank">
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
            <box-icon
              name="github"
              type="logo"
              color="#000000"
              animation="tada-hover"
            ></box-icon>
          </a>
        </div>
        <div className="indivIcon">
          <box-icon
            name="contact"
            type="solid"
            color="#000000"
            animation="tada-hover"
          ></box-icon>
        </div>
        <div className="indivIcon">
          <a
            href="https://docs.google.com/document/d/1j2CaZwjPwz8Uf4d4RaOlVg_mvsw4ejXucpZelF6ZBCw/edit?usp=sharing"
            target="_blank"
          >
            <box-icon
              name="file"
              color="#000000"
              animation="tada-hover"
              title="Resume"
            ></box-icon>
          </a>
        </div>
      </div>
      <h2>Email: danice.ventura@gmail.com</h2>
      <h2>Phone: 720-466-3123</h2>
    </div>
  )
}

export default Contact
