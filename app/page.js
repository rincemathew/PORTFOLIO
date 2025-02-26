import Main from "./components/Main"

export default function Home() {
  return (
    <main id="top" className="light_theme">
      <main>
        <article className="container">
          <Main></Main>
        </article>
      </main>
      <a href="#top" className="go-top" data-go-top title="Go to Top">
      <ion-icon name="arrow-up"></ion-icon>
    </a>
    </main>
  );
}
