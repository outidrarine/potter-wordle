import React from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import Post1 from "../components/posts/Post1";
import Post2 from "../components/posts/Post2";
import Post3 from "../components/posts/Post3";
import Post4 from "../components/posts/Post4";
import Post5 from "../components/posts/Post5";
import Post6 from "../components/posts/Post6";
import Post7 from "../components/posts/Post7";
import Post8 from "../components/posts/Post8";
import Post9 from "../components/posts/Post9";
import Post10 from "../components/posts/Post10";
import Post11 from "../components/posts/Post11";
import Post12 from "../components/posts/Post12";
import Post13 from "../components/posts/Post13";
import Post14 from "../components/posts/Post14";
import Post15 from "../components/posts/Post15";
import Post16 from "../components/posts/Post16";
import Post17 from "../components/posts/Post17";
import Post18 from "../components/posts/Post18";
import Post19 from "../components/posts/Post19";
import Post20 from "../components/posts/Post20";
import Post21 from "../components/posts/Post21";
import Post22 from "../components/posts/Post22";
import Post23 from "../components/posts/Post23";
import Post24 from "../components/posts/Post24";
import Post25 from "../components/posts/Post25";
import Post26 from "../components/posts/Post26";
import Post27 from "../components/posts/Post27";
import Post28 from "../components/posts/Post28";
import Post29 from "../components/posts/Post29";
import Post30 from "../components/posts/Post30";

export default function Post() {
  const { postname } = useParams();

  const components = {
    "harry-potter-games-learned-values": Post1,
    "harry-potter-games-fans-connect": Post2,
    "harry-potter-games-games-evolution": Post3,
    "harry-potter-spells": Post4,
    "harry-potter-games-house": Post5,
    "harry-potter-gaming-impact": Post6,
    "harry-potter-gaming-secrets": Post7,
    "harry-potter-gaming-spells": Post8,
    "harry-potter-gaming-lessons": Post9,
    "harry-potter-exploring-hogwarts": Post10,
    "harry-potter-exploring-spells": Post11,
    "harry-potter-magical-creatures": Post12,
    "harry-potter-magical-creatures-role": Post13,
    "harry-potter-hogwarts-subjects": Post14,
    "harry-potter-friendship-values": Post15,
    "hogwarts-mystery-relics": Post16,
    "marauder-map-significance": Post17,
    "harry-potter-room-of-requirement": Post18,
    "hogwarts-magical-creatures": Post19,
    "house-elves-unsung-heroes-wizarding-world": Post20,
    "power-of-elder-wand": Post21,
    "albus-dumbledore-secrets": Post22,
    "hogwarts-castle-mysteries": Post23,
    "the-dark-mark-symbol-of-fear-and-power": Post24,
    "severus-snape-enigma": Post25,
    "draco-malfoy-from-villain-to-redeemed": Post26,
    "triwizard-tournament-significance": Post27,
    "deathly-hallows-significance": Post28,
    "harry-potter-journey": Post29,
    "harry-potter-dumbledores-army": Post30,
  };

  const PostToShow = components[postname];

  return (
    <div className="container mb-5 pb-4">
      <Helmet>
        <title>Wizardle - Ultimate Harry Potter Quiz</title>
        <link rel="canonical" href={window.location.href} />
        <meta
          name="description"
          content="Explore an endless world of knowledge and test your expertise as you guess and identify the Harry Potter wizards."
        />
      </Helmet>

      <h3 className="text-center pb-3 pt-4">About</h3>

      <div className="d-flex justify-content-center">
        <div className="card py-5 w-75 text-start">
          <div className="container ">
            <div className="row gx-4 gx-lg-5 justify-content-center">
              <div className="col-md-10 col-lg-8 col-xl-7">
                <PostToShow />
              </div>
            </div>
          </div>
          <footer className="border-top">
            <div className="container px-4 px-lg-5">
              <div className="row gx-4 gx-lg-5 justify-content-center">
                <div className="col-md-10 col-lg-8 col-xl-7">
                  <ul className="list-inline text-center">
                    <li className="list-inline-item">
                      <a href="#!">
                        <span className="fa-stack fa-lg">
                          <i className="fas fa-circle fa-stack-2x"></i>
                          <i className="fab fa-twitter fa-stack-1x fa-inverse"></i>
                        </span>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#!">
                        <span className="fa-stack fa-lg">
                          <i className="fas fa-circle fa-stack-2x"></i>
                          <i className="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
                        </span>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#!">
                        <span className="fa-stack fa-lg">
                          <i className="fas fa-circle fa-stack-2x"></i>
                          <i className="fab fa-github fa-stack-1x fa-inverse"></i>
                        </span>
                      </a>
                    </li>
                  </ul>
                  <div className="small text-center text-muted fst-italic">
                    Copyright &copy; harrypottergaming.com 2024
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
