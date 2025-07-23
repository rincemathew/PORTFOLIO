import Themes from "./components/Themes";

export default function Home() {
  return (
    <main id="top" className="light_theme">
        <article className="grid grid-cols-1 gap-2 md:grid-cols-9 md:grid-rows-9 h-auto md:h-screen w-full md:w-screen p-2 grid-container">
          <div className="md:col-start-1 md:col-span-2 md:row-start-1 md:row-span-2 grid-themes"><div className="card"><Themes/></div></div>
          <div className="md:col-start-1 md:col-span-2 md:row-start-3 md:row-span-4 grid-work-ex"><div className="card">2</div></div>
          <div className="md:col-start-7 md:col-span-3 md:row-start-4 md:row-span-6 grid-projects"><div className="card">3</div></div>
          <div className="md:col-start-8 md:col-span-2 md:row-start-1 md:row-span-3 grid-education"><div className="card">4</div></div>
          <div className="md:col-start-4 md:col-span-3 md:row-start-7 md:row-span-3 grid-resume"><div className="card">5</div></div>
          <div className="md:col-start-3 md:col-span-4 md:row-start-4 md:row-span-3 grid-me"><div className="card">6</div></div>
          <div className="md:col-start-1 md:col-span-3 md:row-start-7 md:row-span-3 grid-blog"><div className="card">7</div></div>
          <div className="md:col-start-3 md:col-span-5 md:row-start-1 md:row-span-3 grid-contact-me"><div className="card">8</div></div>
          
          {/* <Main></Main> */}
        </article>
    </main>
  );
}
