import 'boxicons'

const Footer = () => {
  return (
    <div>
      <div>
        <p className="createdBy">Created by Dan Ventura</p>
      </div>
      <div className="iconBox">
        <div className="indivIcon">
          <box-icon
            name="linkedin-square"
            type="logo"
            color="#ffffff"
            animation="tada-hover"
          ></box-icon>
        </div>
        <div className="indivIcon">
          <box-icon
            name="github"
            type="logo"
            color="#ffffff"
            animation="tada-hover"
          ></box-icon>
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
          <box-icon
            name="file"
            color="#ffffff"
            animation="tada-hover"
          ></box-icon>
        </div>
      </div>
    </div>
  )
}

export default Footer
