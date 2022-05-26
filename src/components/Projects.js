import { Card, Button } from 'react-rainbow-components'

const Projects = () => {
  return (
    <div className="projectsAll">
      <h1>Projects</h1>
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
              Neighbourly was a collaboration of 3 software engineers in a 7-day
              sprint, using PERN stack to create a neighborhood social network.
            </p>

            <div className="buttonContainer">
              <a
                href="https://neighbourhood-front.herokuapp.com/"
                target="_blank"
                style={{ textDecoration: 'none' }}
              >
                <Button>
                  <p className="buttonText">Try it out!</p>
                </Button>
              </a>
              <a
                href="https://github.com/dventura221/neighbourhood-front"
                target="_blank"
                style={{ textDecoration: 'none' }}
              >
                <Button>
                  <p className="buttonText">GitHub Front End</p>
                </Button>
              </a>
              <a
                href="https://github.com/pregan23/neighbourhood-back"
                target="_blank"
                style={{ textDecoration: 'none' }}
              >
                <Button>
                  <p className="buttonText">GitHub Back End</p>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="projectsTitle"></div>
      <div className="projectCard">
        <Card className="cardContents">
          <h2 className="cardTitle">Neighbourly</h2>
          <img
            src="https://i.imgur.com/jidZg8dh.png"
            alt="neighbourly"
            className="projectImage"
          />
          <p>
            Neighbourly was a collaboration of 3 software engineers in a 7-day
            sprint, using PERN stack to create a neighborhood social network.
          </p>
          <p>PostgreSQL + Express + React + Node.js</p>
          <div className="buttonContainer">
            <a
              href="https://neighbourhood-front.herokuapp.com/"
              target="_blank"
              style={{ textDecoration: 'none' }}
            >
              <Button>Try it out!</Button>
            </a>
            <a
              href="https://github.com/dventura221/neighbourhood-front"
              target="_blank"
              style={{ textDecoration: 'none' }}
            >
              <Button>GitHub Front End</Button>
            </a>
            <a
              href="https://github.com/pregan23/neighbourhood-back"
              target="_blank"
              style={{ textDecoration: 'none' }}
            >
              <Button>GitHub Back End</Button>
            </a>
          </div>
        </Card>
      </div>
      <div className="projectCard">
        <Card className="cardContents">
          <h2 className="cardTitle">Med Pass</h2>
          <img
            src="https://i.imgur.com/6abnPQ2l.png"
            alt="med pass"
            className="projectImage"
          />
          <p>
            Med Pass was an individual project completed in a 4-day sprint,
            using only vanilla Javascript to create an edu-tainment game.
          </p>
          <p>Javascript + HTML + CSS</p>
          <div className="buttonContainer">
            <a
              href="https://med-admin.surge.sh/"
              target="_blank"
              style={{ textDecoration: 'none' }}
            >
              <Button>Try it out!</Button>
            </a>
            <a
              href="https://github.com/dventura221/medication-admin"
              target="_blank"
              style={{ textDecoration: 'none' }}
            >
              <Button>GitHub</Button>
            </a>
          </div>
        </Card>
      </div>
      <div className="projectCard">
        <Card className="cardContents">
          <h2 className="cardTitle">Cheugy Tic-Tac-Toe</h2>
          <img
            src="https://i.imgur.com/sf18qXYh.png"
            alt="cheugy tic-tac-toe"
            className="projectImage"
          />
          <p>
            Cheugy Tic-Tac-Toe was my first ever project in Javascipt during my
            immersive, used to demonstrate my progress from the beginning of my
            immersive.
          </p>
          <p>Javascript + HTML + CSS</p>
          <div className="buttonContainer">
            <a
              href="http://cheugy-tictactoe.surge.sh"
              target="_blank"
              style={{ textDecoration: 'none' }}
            >
              <Button>Try it out!</Button>
            </a>
            <a
              href="https://github.com/dventura221/u1_hw_tic_tac_toe"
              target="_blank"
              style={{ textDecoration: 'none' }}
            >
              <Button>GitHub</Button>
            </a>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default Projects
