import Router, { Link } from 'preact-router';
import Navbar from './components/navbar/navbar';
import About from './pages/about';
import Home from './pages/home';
import Match from './pages/match/match';
import New from './pages/new';
import Result from './pages/result';

export function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Home path="/" />
        <About path="/about" />
        <New path="/new" />
        <Match path="/match" />
        <Result path="/result" />
      </Router>
    </>
  )
}
