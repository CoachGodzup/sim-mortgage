import Router from 'preact-router';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import About from './pages/about';
import Home from './pages/home';
import Match from './pages/match/match';
import New from './pages/new';
import Result from './pages/result/result';
import {Provider} from 'react-redux';
import store from './store/store';

export function App() {
  return (
    <>
      <Navbar />
      <Provider store={store}>
        <Router>
          <Home path="/" />
          <New path="/new" />
          <Match path="/match" />
          <Result path="/result" />
          <About path="/about" />
        </Router>
      </Provider>
      <Footer />
    </>
  )
}
