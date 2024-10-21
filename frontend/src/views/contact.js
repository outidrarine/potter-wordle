import React from "react";
import AboutComponent from "../components/about";
import { Helmet } from "react-helmet";
import Contactus from "../components/contact";

export default function Contact() {
  return (
    <div className="container mb-5 pb-4">
      <Helmet>
        <title>Wizardle - Ultimate Harry Potter Quiz</title>
        <meta
          name="description"
          content="Explore an endless world of knowledge and test your expertise as you guess and identify the Harry Potter wizards."
        />
      </Helmet>

      <h3 className="text-center pb-3 pt-4 white-text">Contact</h3>

      <div className="d-flex justify-content-center">
        <div className="card p-5 w-75 text-start">
          <Contactus />
        </div>
      </div>
    </div>
  );
}