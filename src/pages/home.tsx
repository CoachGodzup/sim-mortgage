import { Link } from "preact-router";

export default function Home() {
  return (
    <>
      <div className="jumbo">
        <h1>Sim Mutui</h1>
      </div>
      <section>
        <Link href="/new">New game</Link>
        <Link href="/match">Join match</Link>
      </section>
    </>
  )
}