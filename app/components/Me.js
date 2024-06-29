import React from 'react'

function Me() {
  return (
    <section className="hero" id="home">

    <figure className="hero-banner">
      <picture>
        <source srcSet="/new.png" media="(min-width: 768px)" />
        <source srcSet="/new.png" media="(min-width: 500px)" />
        <img src="/new.png" alt="A man in a blue shirt with a happy expression" className="w-100" />
      </picture>
    </figure>

    <div className="hero-content">
      <h2 className="h2 hero-title" style={{ color: 'black' }}>{`Hi, I'm a Full-Stack Dev`}</h2>
      <a href="#contact" className="btn btn-primary">Get in touch</a>
    </div>

    <ul className="hero-social-list">
      <li>
        <a href="https://github.com/rincemathew" className="hero-social-link">
          <ion-icon name="logo-github"></ion-icon>
          <div className="tooltip">Github</div>
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/rince-mathew/" className="hero-social-link">
          <ion-icon name="logo-linkedin"></ion-icon>
          <div className="tooltip">Linkedin</div>
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/rince_mathew_/" className="hero-social-link">
          <ion-icon name="logo-instagram"></ion-icon>
          <div className="tooltip">Instagram</div>
        </a>
      </li>
    </ul>

    <a href="#stats" className="scroll-down">Scroll</a>
    
  </section>
  )
}

export default Me