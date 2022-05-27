import 'boxicons'

const Footer = () => {
  return (
    <div>
      <div>
        <p className="createdBy">Created by Dan Ventura &nbsp; © 2022</p>
      </div>
      <div className="iconBox">
        <div className="indivIcon">
          <a href="https://www.linkedin.com/in/dan-ventura221/" target="_blank">
            <box-icon
              name="linkedin-square"
              type="logo"
              color="#ffffff"
              animation="tada-hover"
            ></box-icon>
          </a>
        </div>
        <div className="indivIcon">
          <a href="https://github.com/dventura221" target="_blank">
            <box-icon
              name="github"
              type="logo"
              color="#ffffff"
              animation="tada-hover"
            ></box-icon>
          </a>
        </div>
        <div className="indivIcon">
          <box-icon
            name="contact"
            type="solid"
            color="#ffffff"
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
              color="#ffffff"
              animation="tada-hover"
              title="Resume"
            ></box-icon>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
