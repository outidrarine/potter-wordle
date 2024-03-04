import React from "react";

export default function ChampionDetails(props) {
  const checkColorBlindMode = () => {
    return props.isColorBlindMode ? "cb-" : "";
  };
  return (
    <div
      className={
        "container text-center mb-2 p-2 " +
        (props.isCorrect
          ? checkColorBlindMode() + "correct"
          : checkColorBlindMode() + "incorrect")
      }
    >
      <img
        id="championImg"
        key={props.championKey}
        //src={"/champions/" + props.championKey + ".webp"}
        src={"/champions/" + "test" + ".webp"}
        alt={props.championKey}
        className="championData mx-auto"
      />
    </div>
  );
}
