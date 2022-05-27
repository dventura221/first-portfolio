import { Card, Button } from 'react-rainbow-components'

const Projects = () => {
  return (
    <div className="projectsAll">
      <h1 className="projectsTitle">Projects</h1>
      <div className="noCardSection">
        <div className="imgAndSummarySection">
          <img
            src="https://i.imgur.com/WInLhpt.png"
            alt="neighbourly"
            className="projectImage"
          />
          <div className="summarySection">
            <h2 className="summaryTitle">Neighbourly</h2>
            <p className="summaryTech">
              PostgreSQL + Express + React + Node.js
            </p>
            <p className="summary">
              Collaboration of 3 software engineers in a 7-day sprint, using
              PERN stack to create a neighborhood social network. Primary role
              was building the React front end.
            </p>
            <div className="buttonContainer">
              <a
                href="https://neighbourhood-front.herokuapp.com/"
                target="_blank"
                style={{ textDecoration: 'none' }}
              >
                <Button className="button">
                  <p className="buttonText">Try it out!</p>
                </Button>
              </a>
              <a
                href="https://github.com/dventura221/neighbourhood-front"
                target="_blank"
                style={{ textDecoration: 'none' }}
              >
                <Button className="button">
                  <p className="buttonText">GitHub Front End</p>
                </Button>
              </a>
              <a
                href="https://github.com/pregan23/neighbourhood-back"
                target="_blank"
                style={{ textDecoration: 'none' }}
              >
                <Button className="button">
                  <p className="buttonText">GitHub Back End</p>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="imgAndSummarySection">
        <div className="summarySection">
          <h2 className="summaryTitle">Med Pass</h2>
          <p className="summaryTech">Javascript + HTML + CSS</p>
          <p className="summary">
            Individual project completed in a 4-day sprint, using only vanilla
            Javascript to create a simulation game about medication
            administration for medical professionals.
          </p>
          <div className="buttonContainer">
            <a
              href="https://med-admin.surge.sh/"
              target="_blank"
              style={{ textDecoration: 'none' }}
            >
              <Button className="button">
                <p className="buttonText">Try it out!</p>
              </Button>
            </a>
            <a
              href="https://github.com/dventura221/medication-admin"
              target="_blank"
              style={{ textDecoration: 'none' }}
            >
              <Button>
                <p className="buttonText">GitHub</p>
              </Button>
            </a>
          </div>
        </div>
        <img
          src="https://i.imgur.com/isuV1VA.png"
          alt="med pass"
          className="projectImage"
        />
      </div>
      <div className="imgAndSummarySection">
        <img
          src="https://i.imgur.com/whP4E87.png"
          alt="cheugy tic-tac-toe"
          className="projectImage"
        />
        <div className="summarySection">
          <h2 className="summaryTitle">Cheugy Tic-Tac-Toe</h2>
          <p className="summaryTech">Javascript + HTML + CSS</p>
          <p className="summary">
            First ever project in Javascipt during software engineering
            immersive. Included to demonstrate progression.
          </p>

          <div className="buttonContainer">
            <a
              href="http://cheugy-tictactoe.surge.sh"
              target="_blank"
              style={{ textDecoration: 'none' }}
            >
              <Button className="button">
                <p className="buttonText">Try it out!</p>
              </Button>
            </a>
            <a
              href="https://github.com/dventura221/u1_hw_tic_tac_toe"
              target="_blank"
              style={{ textDecoration: 'none' }}
            >
              <Button className="button">
                <p className="buttonText">GitHub</p>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
