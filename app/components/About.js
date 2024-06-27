import React from 'react'

function About() {
  return (
    <section className="about" id="about">
      <figure className="about-banner">
        <img src="/my-pic.jpg" alt="my pic" className="w-100" />
      </figure>

      <div className="about-content section-content">
        <p className="section-subtitle">About me</p>
        <h2 className="h3 section-title">Looking for a touch of creativity in your project? I'm here to assist you</h2>
        <p className="section-text">
          Hello, I'm Rince Mathew, a self-taught full-stack web developer with a fervor for crafting visually
          engaging and user-centric websites and applications. My journey began with a strong focus on front-end technologies
          like HTML, CSS, and JavaScript. Over time, I've mastered technologies like Node.js and React, enabling me to create 
          robust and dynamic web solutions. My passion for innovation keeps me at the forefront of web development trends,
          motivating me to acquire new skills and embrace fresh challenges in this ever-evolving field. I'm a true JS enthusiast!
        </p>
        <div className="btn-group">
          <a href="https://drive.google.com/file/d/16Agt7D_I6vSsvDbvvAPleozbFrJ1SNwg/view?usp=sharing">
            <button className="btn btn-primary">Download CV</button>
          </a>
        </div>
      </div>
    </section>
  )
}

export default About