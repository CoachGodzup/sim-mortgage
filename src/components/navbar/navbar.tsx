import { Link } from "preact-router";
import './navbar.css'

export default function Navbar() {
  return (
  <nav class="mainNavbar">
    <Link activeClassName="active" href="/">Home</Link>
    <Link activeClassName="active" href="/about">About</Link>
    <Link activeClassName="active" href="/new">New</Link>
    <Link activeClassName="active" href="/match">Match</Link>
    <Link activeClassName="active" href="/result">Result</Link>
  </nav>);
}