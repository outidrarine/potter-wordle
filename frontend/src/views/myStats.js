import React from "react";
import Stats from "../components/myStats";
import { Helmet } from "react-helmet";

export default function MyStats() {
  return (
    <>
      <div className="container pb-5">
        <Helmet>
          <title>Wizardle - My statistics</title>
          <meta
            name="description"
            content="wizardle.pegmy.com - My statistics"
          />
        </Helmet>

        <div className="pb-5">
          <Stats />
        </div>
      </div>
    </>
  );
}
