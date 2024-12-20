import React from "react";
import LegalComponent from "../components/legal";
import { Helmet } from "react-helmet";

export default function Legal() {
  return (
    <div className="container pb-5">
      <Helmet>
        <title>Wizardle - Legal disclaimer - Privacy policy</title>
        <link rel="canonical" href={window.location.href} />
        <meta
          name="description"
          content="harrypottergaming.com - Legal disclaimer and privacy policy section."
        />
      </Helmet>

      <h3 className="text-center pb-3 pt-4 white-text">Legal</h3>

      <div className="d-flex justify-content-center pb-5">
        <div className="card p-5 w-75 text-start">
          <LegalComponent />
        </div>
      </div>
    </div>
  );
}
