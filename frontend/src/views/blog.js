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
                <Post16 sum="true" />
                <Post17 sum="true" />
                <Post18 sum="true" />
                <Post19 sum="true" />
                <Post20 sum="true" />
                <Post21 sum="true" />
                <Post22 sum="true" />
                <Post23 sum="true" />
                <Post24 sum="true" />
                <Post25 sum="true" />
                <Post26 sum="true" />
                <Post27 sum="true" />
                <Post28 sum="true" />
                <Post29 sum="true" />
                <Post30 sum="true" />
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
