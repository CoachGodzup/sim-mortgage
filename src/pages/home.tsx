import { Link } from "preact-router";


export default function Home() {
  return (
    <main>
      <div className="jumbo">
        <article>
          <h1>Sim Mortgages</h1>
          <p>Be the smartest house-owner among your friends!</p>
        </article>
      </div>
      <section class="action">
        <Link href="/new">New game</Link>
        <Link href="/match">Join match</Link>
      </section>
    </main>
  )
}