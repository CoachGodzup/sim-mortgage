import Router from "preact-router";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import About from "./pages/about";
import Home from "./pages/home";
import Match from "./pages/match/match";
import Player from "./pages/player/player";
import Result from "./pages/result/result";
import { createContext } from "preact";
import { rootStore, RootStore } from "./store/rootStore";

const StoreContext = createContext<RootStore>({} as RootStore);

export function App() {
  return (
    <>
      <StoreContext.Provider value={rootStore}>
        <Navbar />
        <Router>
          <Home path="/" />
          <Player path="/new" />
          <Match path="/match" />
          <Result path="/result" />
          <About path="/about" />
        </Router>
        <Footer />
      </StoreContext.Provider>
    </>
  );
}
