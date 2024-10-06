import "./Game.css";
import "./Main.css";

import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Game from "./components/game";
import Scoreboard from "./views/scoreboard";
import Legal from "./views/legal";
import About from "./views/about";
import Stats from "./views/stats";
import MyStats from "./views/myStats";

import { Provider } from "react-redux";
import store from "./store/store";
import ReactGA from "react-ga";
const TRACKING_ID = "G-50V7BL2Q96"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Provider store={store}>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Game />} />
          <Route path="/leaderboard" element={<Scoreboard />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/about" element={<About />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/stats/me" element={<MyStats />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
      <Footer />
    </Provider>
  );
}

export default App;
