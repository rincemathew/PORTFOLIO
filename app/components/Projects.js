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
              <img src="/project1.png" className="w-100" alt="telegram bot" />
            </figure>
            <div className="card-content">
              <h3 className="h4 card-title">Open ai integrated in telegram Bots</h3>
              <time className="publish-date" dateTime="2022-04">Live</time>
            </div>
          </a>
        </li>
        <li>
          <a href="https://github.com/rincemathew/olx-clone" className="project-card">
            <figure className="card-banner">
              <img src="/project2.jpeg" className="w-100" alt="olx front page" />
            </figure>
            <div className="card-content">
              <h3 className="h4 card-title">OLX - Clone</h3>
              <time className="publish-date" dateTime="2022-04">Live</time>
            </div>
          </a>
        </li>
        <li>
          <a href="https://github.com/rincemathew/gadget-in" className="project-card">
            <figure className="card-banner">
              <img src="/project3.png" className="w-100" alt="E-commerce website" />
            </figure>
            <div className="card-content">
              <h3 className="h4 card-title">An E-commerce Website</h3>
              <time className="publish-date" dateTime="2022-04">gadgetin</time>
            </div>
          </a>
        </li>
        <li>
          <a href="https://github.com/rincemathew/To-Do-List" className="project-card">
            <figure className="card-banner">
              <img src="/project4.png" className="w-100" alt="TO Do List" />
            </figure>
            <div className="card-content">
              <h3 className="h4 card-title">To Do List</h3>
              <time className="publish-date" dateTime="2022-04">Live</time>
            </div>
          </a>
        </li>
        <li>
          <a href="https://github.com/rincemathew/Spotify-Clone" className="project-card">
            <figure className="card-banner">
              <img src="/project5.png" className="w-100" alt="Spotify Clone" />
            </figure>
            <div className="card-content">
              <h3 className="h4 card-title">Spotify Clone</h3>
              <time className="publish-date" dateTime="2022-04">Live</time>
            </div>
          </a>
        </li>
        <li>
          <a href="https://github.com/rincemathew/Netflix-clone-React" className="project-card">
            <figure className="card-banner">
              <img src="/project6.png" className="w-100" alt="NetFlix Clone using TMDB" />
            </figure>
            <div className="card-content">
              <h3 className="h4 card-title">NetFlix Clone using TMDB</h3>
              <time className="publish-date" dateTime="2022-04">Live</time>
            </div>
          </a>
        </li>
        <li>
          <a href="https://github.com/rincemathew/bsa-project" className="project-card">
            <figure className="card-banner">
              <img src="/project7.png" className="w-100" alt="BSA Clone" />
            </figure>
            <div className="card-content">
              <h3 className="h4 card-title">BSA Clone</h3>
              <time className="publish-date" dateTime="2022-04">Live</time>
            </div>
          </a>
        </li>
        <li>
          <a href="https://github.com/rincemathew/Prime-Video-Clone" className="project-card">
            <figure className="card-banner">
              <img src="/project8.png" className="w-100" alt="Clone Of Amazon Prime Home Page" />
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