import React from "react";
import AboutComponent from "../components/about";
import { Helmet } from "react-helmet";
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

export default function Blog() {
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
                <Post1 sum="true" />
                <Post2 sum="true" />
                <Post3 sum="true" />
                <Post4 sum="true" />
                <Post5 sum="true" />
                <Post6 sum="true" />
                <Post7 sum="true" />
                <Post8 sum="true" />
                <Post9 sum="true" />
                <Post10 sum="true" />
                <Post11 sum="true" />
                <Post12 sum="true" />
                <Post13 sum="true" />
                <Post14 sum="true" />
                <Post15 sum="true" />
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
