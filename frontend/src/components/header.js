import React from "react";
import { Link } from "react-router-dom";
import Settings from "../components/settings";
import Modifications from "../components/modifications";
import { Tooltip } from "react-tooltip";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light m-0 p-0 high-opacity">
      <div className="container">
        <img src={"/favicon.ico"} className="m-2" alt="Logo" />
        <Link className="navbar-brand" to="/">
          Wizardle
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <div className="d-flex justify-content-center">
              <button
                className="btn p-2 pb-0"
                data-tooltip-id="scoreboard-tooltip"
                data-tooltip-content="ScoreBoard"
              >
                <li className="nav-item">
                  <Link className="nav-link" to="leaderboard">
                    <span>Scoreboard</span>
                  </Link>
                  <Tooltip opacity={1} id="scoreboard-tooltip" />
                </li>
              </button>

              <button
                className="btn p-2 pb-0"
                data-tooltip-id="legal-tooltip"
                data-tooltip-content="Legal"
              >
                <li className="nav-item">
                  <Link className="nav-link" to="legal">
                    <span>Legal</span>
                  </Link>
                  <Tooltip opacity={1} id="legal-tooltip" />
                </li>
              </button>
              <button
                className="btn p-2 pb-0"
                data-tooltip-id="contact-tooltip"
                data-tooltip-content="Contact us"
              >
                <li className="nav-item">
                  <Link className="nav-link" to="contact">
                    <span>Contact</span>
                  </Link>
                  <Tooltip opacity={1} id="contact-tooltip" />
                </li>
              </button>
              <Settings />
              <button
                className="btn p-2 pb-0"
                data-tooltip-id="about-tooltip"
                data-tooltip-content="About"
              >
                <li className="nav-item">
                  <Link className="nav-link" to="about">
                    <span>About</span>
                  </Link>
                  <Tooltip opacity={1} id="about-tooltip" />
                </li>
              </button>
              <button
                className="btn p-2 pb-0"
                data-tooltip-id="blog-tooltip"
                data-tooltip-content="Blog"
              >
                <li className="nav-item">
                  <Link className="nav-link" to="blog">
                    <span>Blog</span>
                  </Link>
                  <Tooltip opacity={1} id="blog-tooltip" />
                </li>
              </button>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}
