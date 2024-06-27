import React from 'react'

function Skills() {
  return (
    <section className="skills" id="skills">
    <div className="skills-content section-content">
      <p className="section-subtitle">My skills</p>
      <h2 className="h3 section-title">What does my programming skillset encompass?</h2>
      <p className="section-text">
        I specialize in creating straightforward, intuitive, and responsive user interfaces that streamline tasks,
        reducing both effort and time, utilizing these technologies.
      </p>

    </div>

    <div className="skills-box" data-skills-box>
      <ul className="skills-list">
        <li>
          <div className="skill-card">
            <div className="tooltip">HTML5</div>
            <div className="card-icon">
              <img src="/html5.png" alt="HTML5 logo" />
            </div>
          </div>
        </li>
        <li>
          <div className="skill-card">
            <div className="tooltip">CSS3</div>
            <div className="card-icon">
              <img src="/css3.png" alt="CSS3 logo" />
            </div>
          </div>
        </li>
        <li>
          <div className="skill-card">
            <div className="tooltip">JavaScript</div>
            <div className="card-icon">
              <img src="/javascript.png" alt="JavaScript logo" />
            </div>
          </div>
        </li>
        <li>
          <div className="skill-card">
            <div className="tooltip">TypeScript</div>
            <div className="card-icon">
              <img src="/typescript.png" alt="TypeScript logo" />
            </div>
          </div>
        </li>
        <li>
          <div className="skill-card">
            <div className="tooltip">jQuery</div>
            <div className="card-icon">
              <img src="/jquery.png" alt="jQuery logo" />
            </div>
          </div>
        </li>
        <li>
          <div className="skill-card">
            <div className="tooltip">Bootstrap</div>
            <div className="card-icon">
              <img src="/bootstrap.png" alt="Bootstrap logo" />
            </div>
          </div>
        </li>
        <li>
          <div className="skill-card">
            <div className="tooltip">React</div>
            <div className="card-icon">
              <img src="/react.png" alt="React logo" />
            </div>
          </div>
        </li>
        <li>
          <div className="skill-card">
            <div className="tooltip">Photoshop</div>
            <div className="card-icon">
              <img src="/photoshop.png" alt="Photoshop logo" />
            </div>
          </div>
        </li>
        <li>
          <div className="skill-card">
            <div className="tooltip">Ajax</div>
            <div className="card-icon">
              <img src="/ajax.png" alt="Ajax logo" />
            </div>
          </div>
        </li>
        <li>
          <div className="skill-card">
            <div className="tooltip">Git</div>
            <div className="card-icon">
              <img src="/git.png" alt="Git logo" />
            </div>
          </div>
        </li>
        <li>
          <div className="skill-card">
            <div className="tooltip">Npm</div>
            <div className="card-icon">
              <img src="/npm.png" alt="Npm logo" />
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
  )
}

export default Skills