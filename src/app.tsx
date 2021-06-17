import Router from 'preact-router';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import About from './pages/about';
import Home from './pages/home';
import Match from './pages/match/match';
import Player from './pages/player';
import Result from './pages/result/result';

export function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Home path="/" />
        <Player path="/new" />
        <Match path="/match" />
        <Result path="/result" />
        <About path="/about" />
      </Router>
      <Footer />
    </>
  )
}
