import React from "react";

export default function ChampionDetails(props) {
  const checkColorBlindMode = () => {
    return props.isColorBlindMode ? "cb-" : "";
  };
  return (
    <div className=" text-center mb-2  answercontainer">
      <div className="d-flex justify-content-sm-center ">
        <div className="col-sm-1 currentAnswer partial">
          <div className="squareboxe">
            <div className="">
              <span className="align-center ">{props.characterName}</span>
            </div>
          </div>
        </div>
        <div
          className={
            "col-sm-1 championData " +
            (props.similarites.sameGender
              ? checkColorBlindMode() + "correct"
              : checkColorBlindMode() + "incorrect")
          }
          id="gender"
        >
          <div className="squareboxe">
            <div className="">
              <span className="align-center">{props.roleJob}</span>
            </div>
          </div>
        </div>
        <div
          className={
            "col-sm-1 championData " +
            (props.similarites.sameKeyItem === "partial"
              ? checkColorBlindMode() + "partial"
              : props.similarites.sameKeyItem
              ? checkColorBlindMode() + "correct"
              : checkColorBlindMode() + "incorrect")
          }
          id="range"
        >
          <div className="squareboxe">
            <div className="">
              <span className="align-center">{props.keyItem}</span>
            </div>
          </div>
        </div>
        <div
          className={
            "col-sm-1 championData " +
            (props.similarites.sameLoyalty
              ? checkColorBlindMode() + "correct"
              : checkColorBlindMode() + "incorrect")
          }
          id="resource"
        >
          <div className="squareboxe">
            <div className="">
              <span className="align-center">{props.loyalty}</span>
            </div>
          </div>
        </div>
        <div
          className={
            "col-sm-1 championData " +
            (props.similarites.sameMagicalAbility === "partial"
              ? checkColorBlindMode() + "partial"
              : props.similarites.sameMagicalAbility
              ? checkColorBlindMode() + "correct"
              : checkColorBlindMode() + "incorrect")
          }
          id="genre"
        >
          <div className="squareboxe">
            <div className="">
              <span className="align-center ">{props.magicalAbility}</span>
            </div>
          </div>
        </div>
        <div
          className={
            "col-sm-1 championData " +
            (props.similarites.sameFirstAppearance === "="
              ? checkColorBlindMode() + "correct"
              : props.similarites.sameFirstAppearance === "<"
              ? checkColorBlindMode() + "incorrect-less"
              : props.similarites.sameFirstAppearance === ">"
              ? checkColorBlindMode() + "incorrect-greater"
              : "")
          }
          id="released"
        >
          <div className="squareboxe">
            <div>
              <span className="align-center">
                {props.firstAppearanceBookNumber}
              </span>
            </div>
          </div>
        </div>
        <div
          className={
            "col-sm-1 championData " +
            (props.similarites.sameGender
              ? checkColorBlindMode() + "correct"
              : checkColorBlindMode() + "incorrect")
          }
          id="resource"
        >
          <div className="squareboxe">
            <div className="">
              <span className="align-center">{props.gender}</span>
            </div>
          </div>
        </div>

        <div
          className={
            "col-sm-1 championData " +
            (props.similarites.sameKeyRelationship === "partial"
              ? checkColorBlindMode() + "partial"
              : props.similarites.sameKeyRelationship
              ? checkColorBlindMode() + "correct"
              : checkColorBlindMode() + "incorrect")
          }
          id="genre"
        >
          <div className="squareboxe">
            <div className="">
              <span className="align-center">{props.keyRelationships}</span>
            </div>
          </div>
        </div>

        <div
          className={
            "col-sm-1 championData " +
            (props.similarites.sameHouse
              ? checkColorBlindMode() + "correct"
              : checkColorBlindMode() + "incorrect")
          }
          id="resource"
        >
          <div className="squareboxe">
            <div className="">
              <span className="align-center">{props.house}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
