import React, { Component } from "react";
import AboutComponent from "../components/about";
import { Helmet } from "react-helmet";
import Postsum from "../components/posts/postsum";
import { useParams } from "react-router-dom";
import { components } from "react-select";
import Postone from "../components/posts/Postone";
import Posttwo from "../components/posts/posttwo";

export default function Post(props) {
  const { postname } = useParams();

  const components = {
    postone: Postone,
    posttwo: Posttwo,
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
