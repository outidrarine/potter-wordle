import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useSelector } from "react-redux";

export default function About() {
  const [isCopied, setIsCopied] = useState(false);
  const isColorBlindMode = useSelector(
    (state) => state.colorBlindReducer.isColorBlindMode
  );
  return (
    <div id="about">
      <h3>Inspiration</h3>
      <p>
        This site is inspired by <a href="https://loldle.net">loldle.net</a>, a
        game where you have to guess League of Legends champions daily. This
        website is a fan-made game inspired by the Harry Potter universe. It is
        created purely for entertainment purposes and respects the copyrights
        and intellectual property of J.K. Rowling, Warner Bros., and other
        rights holders. We do not claim ownership of any characters, names, or
        concepts from the Harry Potter series. All rights belong to their
        respective owners.
      </p>
      <h3>How to play</h3>
      <p>
        Once you've created your nickname, you'll be assigned a wizard to guess.
      </p>
      <p>
        In the text box, begin typing the name of the wizard you want to guess,
        then either press Enter or click on the name to select it. Afterward,
        click the "Guess" button to submit your guess.
      </p>
      <p>
        The correctness of your guess will be indicated by the color-coding
        below.
      </p>
      <p>
        Once you guess the correct wizard, they will be removed from your
        champion pool, ensuring you won't guess the same wizard again. Your pool
        will only reset once you've successfully guessed every champion.
      </p>
      <h4 className="pb-3">Meaning of the colors</h4>
      <div className="d-flex pb-2 align-items-center">
        <div className={`demo ${isColorBlindMode ? "cb-" : ""}correct`}></div>
        <p className="my-auto mx-auto">Correct guess</p>
      </div>
      <div className="d-flex pb-2 align-items-center">
        <div className={"demo  incorrect"}>
          <div className="demo-arrow square-superior"></div>
        </div>
        <p className="my-auto mx-auto">Correct value is higher</p>
      </div>
      <div className="d-flex pb-2 align-items-center">
        <div className={"demo incorrect"}>
          <div className="demo-arrow  square-inferior "></div>
        </div>
        <p className="my-auto mx-auto">Correct value is lower</p>
      </div>
      <div className="d-flex">
        <div className={`demo ${isColorBlindMode ? "cb-" : ""}incorrect`}></div>
        <p className="my-auto mx-auto">Incorrect guess</p>
      </div>
      <h4 className="pb-3 pt-4">Scoring system</h4>
      <p>
        You earn one point for each correct guess. Once you've correctly guessed
        every wizards in the game, your prestige level will increase. At that
        point, your champion pool will reset, and all champions will become
        available for guessing again.
      </p>
      <h4 className="pb-3 pt-4">Leaderboard</h4>
      <p>
        Our leaderboard showcases the top players based on their performance. It
        displays their Rank, Nickname, Prestige, Score, Country, and the date
        they Registered. Climb the ranks by making correct guesses, earning
        points, and increasing your prestige. Compete with players from around
        the world and see how you stack up against the best!
      </p>
      <h4 className="pb-3 pt-4">Contact Us</h4>
      <p>
        If you'd like to contact us about this site, feel free to send an email
        to <strong>pod24121994@gmail.com</strong>.{" "}
        <CopyToClipboard text="pod24121994@gmail.com">
          <button
            className="btn btn-outline-dark"
            onClick={() => setIsCopied(true)}
          >
            {isCopied ? "Copied!" : "Copy"}
          </button>
        </CopyToClipboard>
      </p>
    </div>
  );
}
