import React, { useState, useEffect } from "react";
import axios from "axios";
import Titles from "./gameTitle";
import ChampionDetails from "./championDetails";
import Guides from "./guides";
import More from "./more";
import Rankuser from "./rankuser";

import Select from "react-select";
import Victory from "./victory";
import { saveGamesPlayed, saveTries, saveFirstTries } from "./saveStats";
import Config from "../configs/config";
import { Reroll } from "./reroll";
import { Helmet } from "react-helmet";
import LazyLoad from "react-lazy-load";
import { useSelector } from "react-redux";

import { SelectStyles, customFilterOption } from "./selectStyles";

export default function Game() {
  const [validGuesses, setValidGuesses] = useState([]);
  const [champions, setChampions] = useState([]);
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setGuess] = useState(validGuesses[0]);
  const [correctGuess, setCorrectGuess] = useState(false);
  const [title, setTitle] = useState("");
  const [currentselect, setcurrentselect] = useState(null);
  const [inputplaceholder, setinputplaceholder] = useState(
    "Start by guessing a wizard!"
  );

  const isColorBlindMode = useSelector(
    (state) => state.colorBlindReducer.isColorBlindMode
  );

  const hideResource = useSelector(
    (state) => state.hideResourceReducer.hideResource
  );

  useEffect(() => {
    FetchChampions();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const FetchChampions = () => {
    axios
      .get(Config.url + "/allHpCharacters")
      .then((response) => {
        if (response.data.status === "success") {
          const data = response.data.hpCharacters;
          data.sort((a, b) => a.value.localeCompare(b.value));
          const transformedData = data.map((champion) => ({
            value: champion.value,
            label: champion.value,
            image: champion.image,
          }));
          setValidGuesses(transformedData);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const Guess = (e) => {
    e.preventDefault();

    if (!currentGuess) {
      return;
    }

    if (guesses.indexOf(currentGuess) !== -1) {
      return;
    }

    setValidGuesses(validGuesses.filter((item) => item.label !== currentGuess));
    setGuesses((guesses) => [...guesses, currentGuess]);
    setcurrentselect(currentGuess);
    axios
      .post(
        Config.url + "/guess",
        { guess: currentGuess },
        {
          headers: { authorization: "Bearer " + localStorage.getItem("token") },
        }
      )
      .then((response) => {
        if (response.data.status !== "success") {
          return;
        }
        saveTries(1);

        const correct = response.data.correctGuess;
        const data = response.data.properties;

        setChampions((champions) => [data, ...champions]);

        if (correct) {
          if (guesses.length === 0) {
            saveFirstTries();
          }
          saveGamesPlayed();
          setCorrectGuess(true);
          setTitle(response.data.title);
          setinputplaceholder("Nice! Click Next to guess another wizard.");
        } else {
          setinputplaceholder("Wrong choice! Try again.");
        }
      })
      .catch((error) => {
        console.log(error);
        setChampions([]);
      });
  };

  const Restart = () => {
    FetchChampions();

    setGuesses([]);
    setChampions([]);
    setGuess();
    setCorrectGuess(false);
  };

  return (
    <div className="container main pt-4 pb-5 mb-5">
      <Helmet>
        <title>Wizardle - Ultimate Harry Potter wizards gussing game</title>
        <link rel="canonical" href={window.location.href} />
        <meta
          name="description"
          content="The ultimate quiz game for Harry Potter wizards fan. Guess Harry Potter Wizards base on wizarding hints"
        />
      </Helmet>

      <h3 className="text-center pb-3 white-text">
        Start guessing your Wizard
      </h3>

      <div className="d-flex justify-content-center mt-4 ">
        <form
          className="form-control square-border row g-3 mb-4 form-square"
          onSubmit={Guess}
          id="guess-form"
        >
          <Select
            key={currentselect}
            className="select "
            options={validGuesses}
            onChange={(selectedOption) => setGuess(selectedOption.value)}
            isDisabled={correctGuess}
            styles={SelectStyles}
            placeholder={inputplaceholder}
            filterOption={customFilterOption}
            noOptionsMessage={({ inputValue }) => "Loading..."}
            formatOptionLabel={(data) => (
              <div className="select-option">
                <span>{data.label}</span>
              </div>
            )}
          />

          <div className="d-flex justify-content-evenly">
            {correctGuess ? (
              <>
                <button
                  className="btn btn-outline-dark mb-3 mt-1 min-vw-25"
                  onClick={() => {
                    Restart();
                    setinputplaceholder("Start by guessing a wizard!");
                  }}
                >
                  Next
                </button>
              </>
            ) : (
              <button className="btn btn-dark mb-3 mt-1 min-vw-25">
                Guess
              </button>
            )}
            {!correctGuess && guesses.length >= 10 ? (
              <button
                className="btn btn-dark mb-3 mt-1 min-vw-25"
                onClick={() => {
                  Reroll("champion");
                  setinputplaceholder("Start by guessing a wizard!");
                }}
              >
                Reroll
              </button>
            ) : (
              ""
            )}
          </div>
        </form>
      </div>
      <div className="mb-4">
        <Rankuser />
      </div>

      <div id="champions">
        <div className=" text-center mb-2  answercontainer">
          {champions.length > 0 ? <Titles /> : ""}
          {champions.map((champ) => (
            <ChampionDetails
              key={champ[0].characterName}
              characterName={champ[0].characterName}
              roleJob={champ[0].roleJob}
              keyItem={champ[0].keyItem}
              loyalty={champ[0].loyalty}
              magicalAbility={champ[0].magicalAbility}
              firstAppearanceBookNumber={champ[0].firstAppearanceBookNumber}
              gender={champ[0].gender}
              keyRelationships={champ[0].keyRelationships}
              house={champ[0].house}
              similarites={champ[1]}
            />
          ))}
        </div>
      </div>
      {champions.length > 0 ? <Guides /> : ""}

      {correctGuess ? (
        <Victory
          id="victory"
          championKey={champions[0][0].championKey}
          champion={champions[0][0].guessedChampion}
          tries={guesses.length}
          title={title}
        />
      ) : (
        ""
      )}
    </div>
  );
}
