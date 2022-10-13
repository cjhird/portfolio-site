import profileImg from '../media/IMG_7726.png'
import skillsImg from '../media/skills.png'
import proj1Img from '../media/proj1.png'
import proj2Img from '../media/proj2.png'

const MainPage = () => {
  return (
    <>
      <div className="main-outer">
        <div className="main-cont">
          <div className="main-head">
            <img src={profileImg} alt="profile-img"></img>
            <h1>CHARLIE HIRD</h1>
          </div>
          <div className="main-body">
            <div className="main-summary">
              <p>Hello 👋</p>
              <p>
                I'm a junior software engineer currently looking for my first
                role in industry. I have a passion for building impactful
                software products and I’m fascinated by the way technology can
                impact our lives.
              </p>
              <p>
                Currently, I’m working on a few side projects which you can see
                over on my GitHub. I’m also learning TypeScript and NextJS.
              </p>
              <p>
                Previously, I completed a software engineering bootcamp at
                General Assembly where I was taught how to use best practices to
                program with Python and the MERN stack. Before this, I graduated
                from university with an MA in Economics.
              </p>
              <p>
                You can follow me on Twitter or send me an email. I’m also on
                LinkedIn.
              </p>
            </div>
            <br />
            <hr class="solid" />
            <br />
            <div className="main-skills">
              <h3>Technical Skills</h3>
              <img src={skillsImg} alt="skills-img"></img>
            </div>
            <hr class="solid" />
            <br />
            <div className="main-projects">
              <h3>Projects</h3>
              <br />
              <div className="proj1">
                <div className="proj1-text">
                  <h5>Space Invaders</h5>
                  <p>
                    For my first project I developed a reproduction of the
                    original space invaders retro arcade game that includes most
                    of the original game features allowing user input to play
                    against a cpu as well as the original stylings including
                    pixelated fonts, sounds, and characters. <br />
                    Stack: HTML, CSS, JavaScript, Excalidraw <br />6 days | Solo
                  </p>
                  <div className="proj-links">
                    <a
                      href="https://cjhird.github.io/space-invaders-game"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className="proj-buttons">Website</button>
                    </a>
                    <a
                      href="https://github.com/cjhird/space-invaders-game#readme"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className="proj-buttons">ReadMe</button>
                    </a>
                  </div>
                </div>
                <div className="proj1-img">
                  <img src={proj1Img} alt="project1-img" />
                </div>
              </div>
              <br />

              {/*  */}

              <div className="proj2">
                <div className="proj2-img">
                  <img src={proj2Img} alt="project2-img" />
                </div>
                <div className="proj2-text">
                  <h5>Crypto Prices & News</h5>
                  <p>
                    Developed a frontend app that gives real time cryptocurrency
                    prices and news for the top 100 coins by displaying data
                    from two third-party APIs. My contributions involved the app
                    routing, building out key components and dynamically mapping
                    news data on each coin. <br />
                    Stack: React, SASS, Axios, Bootstrap, Excalidraw <br />
                    48hrs | Pair
                  </p>
                  <div className="proj-links">
                    <a
                      href="https://cjhird.github.io/space-invaders-game"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className="proj-buttons">Website</button>
                    </a>
                    <a
                      href="https://github.com/cjhird/space-invaders-game#readme"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className="proj-buttons">ReadMe</button>
                    </a>
                  </div>
                </div>
              </div>
              <br />

              {/*  */}

              <div className="proj3">
                <div className="proj3-text">
                  <h5>Animovies</h5>
                  <p>
                    Developed a full-stack movie information and watchlist app
                    akin to IMDB with the collaboration of two other developers.
                    Gained valuable experience using feature branch workflow and
                    familiarising myself with pull requests and merges. <br />
                    Stack: React, SASS, Bootstrap ,Axios, Node.js, Express.js,
                    MongoDB, Mongoose, Bcrypt, JWTs <br />7 days | Group
                  </p>

                  <div className="proj-links">
                    <a
                      href="https://cjhird.github.io/space-invaders-game"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className="proj-buttons">Website</button>
                    </a>
                    <a
                      href="https://github.com/cjhird/space-invaders-game#readme"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className="proj-buttons">ReadMe</button>
                    </a>
                  </div>
                </div>
                <div className="proj3-img">
                  <img src={proj1Img} alt="project1-img" />
                </div>
              </div>
              <br />

              {/*  */}

              <div className="proj4">
                <div className="proj4-img">
                  <img src={proj1Img} alt="project1-img" />
                </div>
                <div className="proj4-text">
                  <h5>Stock Forum</h5>
                  <p>
                    I developed a fullstack React & Django stock market forum
                    app with a Postgres database. Gained key learnings after
                    initially planning for an unachievable project then deciding
                    to pivot my app and work in an agile way to achieve project
                    goals within the given deadline. <br />
                    Stack: React, SASS, Axios, Python, Django, PostgreSQL <br />
                    5 days | Solo
                  </p>

                  <div className="proj-links">
                    <a
                      href="https://cjhird.github.io/space-invaders-game"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className="proj-buttons">Website</button>
                    </a>
                    <a
                      href="https://github.com/cjhird/space-invaders-game#readme"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className="proj-buttons">ReadMe</button>
                    </a>
                  </div>
                </div>
              </div>
              <br />
            </div>
            <hr class="solid" />
            <br />
            <div className="main-interests">
              <h3>Interests</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainPage
