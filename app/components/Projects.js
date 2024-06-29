import React from 'react'

function Projects() {
  return (
    <section className="project" id="portfolio">
      <ul className="project-list">
        <li>
          <div className="project-content section-content">
            <p className="section-subtitle">My Projects</p>
            <h2 className="h3 section-title">See my projects; they will amaze you!</h2>
            <p className="section-text">
              I craft top-notch websites for lasting performance. With clean code and an elegant user interface,
              they serve both tech-savvy and non-technical users.
            </p>
          </div>
        </li>
        <li>
          <a href="https://github.com/rincemathew/openai-telegram" className="project-card">
            <figure className="card-banner">
              <img src="/project1.png" className="w-100" alt="" />
            </figure>
            <div className="card-content">
              <h3 className="h4 card-title">Open ai integrated in telegram Bots</h3>
              <time className="publish-date" dateTime="2022-04">Live</time>
            </div>
          </a>
        </li>
        <li>
          <a href="https://rincemathew.github.io/Simple_Calculator/" className="project-card">
            <figure className="card-banner">
              <img src="/prjct1.jpg" className="w-100" alt="A macintosh on a yellow background." />
            </figure>
            <div className="card-content">
              <h3 className="h4 card-title">A Simple Version Of Calculator</h3>
              <time className="publish-date" dateTime="2022-04">Live</time>
            </div>
          </a>
        </li>
        <li>
          <a href="https://rincemathew.github.io/Snake-Game-Demo/" className="project-card">
            <figure className="card-banner">
              <img src="/prjct2.jpg" className="w-100" alt="On a Blue background, a Wacom and a mouse." />
            </figure>
            <div className="card-content">
              <h3 className="h4 card-title">A Mini Version Snake Game</h3>
              <time className="publish-date" dateTime="2022-04">Live</time>
            </div>
          </a>
        </li>
        <li>
          <a href="https://rincemathew.github.io/Hulu-Home-page-clone/" className="project-card">
            <figure className="card-banner">
              <img src="/prjct3.jpg" className="w-100" alt="A Cassette tape on a mellow apricot background." />
            </figure>
            <div className="card-content">
              <h3 className="h4 card-title">Clone Of Hulu Home Page</h3>
              <time className="publish-date" dateTime="2022-04">Live</time>
            </div>
          </a>
        </li>
        <li>
          <a href="https://rincemathew.github.io/BMW-cycles-clone/" className="project-card">
            <figure className="card-banner">
              <img src="/prjct4.jpg" className="w-100" alt="Blue digital watch on a dark liver background." />
            </figure>
            <div className="card-content">
              <h3 className="h4 card-title">Clone of BMW Cycles Home Page</h3>
              <time className="publish-date" dateTime="2022-04">Live</time>
            </div>
          </a>
        </li>
        <li>
          <a href="https://rincemathew.github.io/ToDo-List/" className="project-card">
            <figure className="card-banner">
              <img src="/prjct5.jpg" className="w-100" alt="On a dark liver background, Airport luggage car carrying a luggage." />
            </figure>
            <div className="card-content">
              <h3 className="h4 card-title">A Simple ToDo List Using HTML,CSS & JS</h3>
              <time className="publish-date" dateTime="2022-04">Live</time>
            </div>
          </a>
        </li>
        <li>
          <a href="https://rincemathew.github.io/Netflix-Clone-using-React/" className="project-card">
            <figure className="card-banner">
              <img src="/netflix.jpg" className="w-100" alt="On a dark liver background, Airport luggage car carrying a luggage." />
            </figure>
            <div className="card-content">
              <h3 className="h4 card-title">A Clone of Netflix Using React</h3>
              <time className="publish-date" dateTime="2022-04">Live</time>
            </div>
          </a>
        </li>
        <li>
          <a href="https://rincemathew.github.io/Amazon-prime-video-clone/" className="project-card">
            <figure className="card-banner">
              <img src="/prjct6.jpg" className="w-100" alt="A fujifilm instant camera on a dark electric blue background." />
            </figure>
            <div className="card-content">
              <h3 className="h4 card-title">Clone Of Amazon Prime Home Page</h3>
              <time className="publish-date" dateTime="2022-04">Live</time>
            </div>
          </a>
        </li>
        <li>
          <a href="https://github.com/rincemathew?tab=repositories">
            <button className="load-more">Load more work</button>
          </a>
        </li>
      </ul>
    </section>
  )
}

export default Projects