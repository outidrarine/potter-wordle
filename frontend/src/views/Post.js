import React from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import Post1 from "../components/posts/Post1";
import Post2 from "../components/posts/Post2";
import Post3 from "../components/posts/Post3";
import Post4 from "../components/posts/Post4";
import Post5 from "../components/posts/Post5";
import Post6 from "../components/posts/Post6";

export default function Post(props) {
  const { postname } = useParams();

  const components = {
    "harry-potter-games-learned-values": Post1,
    "harry-potter-games-fans-connect": Post2,
    "harry-potter-games-games-evolution": Post3,
    "harry-potter-spells": Post4,
    "harry-potter-games-house": Post5,
    "harry-potter-gaming-impact": Post6,
  };

  const PostToShow = components[postname];

  return (
    <div className="container mb-5 pb-4">
      <Helmet>
        <title>Wizardle - Ultimate Harry Potter Quiz</title>
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
