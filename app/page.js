import Main from "./components/Main"

export default function Home() {
  return (
    <main id="top" className="light_theme">
        <article className="grid-container">
          <div className="grid-me"><div className="card">6</div></div>
          <div className="grid-projects">3</div>
          <div className="grid-education">4</div>
          <div className="grid-blog">7</div>
          <div className="grid-work-ex">2</div>
          <div className="grid-resume">5</div>
          <div className="grid-contact-me">8</div>
          <div className="grid-themes">1</div>
          {/* <Main></Main> */}
        </article>
    </main>
  );
}
