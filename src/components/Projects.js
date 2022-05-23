import { Card, Button } from 'react-rainbow-components'

const Projects = () => {
  return (
    <div className="projectsAll">
      <div className="projectsTitle">
        <h1>Projects</h1>
      </div>
      <div className="projectCard">
        <Card title="Cheugy Tic-Tac-Toe" className="cardContents">
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
    </div>
  )
}

export default Projects
