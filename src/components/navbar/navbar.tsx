import { Link } from "preact-router";

export default function Navbar() {
  return (
  <nav>
    <Link href="/">Home</Link>
    <Link href="/about">About</Link>
    <Link href="/new">New</Link>
    <Link href="/match">Match</Link>
    <Link href="/result">Result</Link>
  </nav>);
}