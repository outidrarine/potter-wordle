import React from "react";
import ScoreBoardData from "../components/scoreBoardData";
import { Helmet } from "react-helmet";

export default function ScoreBoard() {
  return (
    <>
      <div className="container">
        <Helmet>
          <title>Wizardle - Leaderboard</title>
          <link rel="canonical" href={window.location.href} />
          <meta
            name="description"
            content="harrypottergaming.com - Leaderboard of the top 10 players."
          />
        </Helmet>

        <ScoreBoardData />
      </div>
    </>
  );
}
