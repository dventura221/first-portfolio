import { Card, Button } from 'react-rainbow-components'

const Projects = () => {
  return (
    <div className="projectsAll">
      <div className="projectsTitle">
        <h1>Projects</h1>
      </div>
      <div className="projectCard">
        <Card className="cardContents">
          <h2 className="cardTitle">Cheugy Tic-Tac-Toe</h2>
          <img
            src="https://i.imgur.com/sf18qXYh.png"
            alt="cheugy tic-tac-toe"
            className="projectImage"
          />
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
              <Button>Github</Button>
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
              <Button>Github</Button>
            </a>
          </div>
        </Card>
      </div>
      <div className="projectCard">
        <Card className="cardContents">
          <h2 className="cardTitle">Neighbourly</h2>
          <img
            src="https://i.imgur.com/jidZg8dh.png"
            alt="neighbourly"
            className="projectImage"
          />
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
              <Button>Github Front End</Button>
            </a>
            <a
              href="https://github.com/pregan23/neighbourhood-back"
              target="_blank"
              style={{ textDecoration: 'none' }}
            >
              <Button>Github Back End</Button>
            </a>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default Projects
