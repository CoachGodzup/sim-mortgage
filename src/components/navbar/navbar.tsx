import { Link } from "preact-router";
import './navbar.css'

export default function Navbar() {
  return (
  <nav class="mainNavbar">
    <Link href="/">Home</Link>
    <Link href="/about">About</Link>
    <Link href="/new">New</Link>
    <Link href="/match">Match</Link>
    <Link href="/result">Result</Link>
  </nav>);
}