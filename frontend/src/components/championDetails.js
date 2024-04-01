import React from "react";

export default function ChampionDetails(props) {
  const checkColorBlindMode = () => {
    return props.isColorBlindMode ? "cb-" : "";
  };
  return (
    <div className="container text-center mb-2">
      <div className="row">
        {/* <div className="col-1">
          <img
            id="championImg"
            key={props.championKey}
            //src={"/champions/" + props.championKey + ".webp"}
            src={"/champions/" + "test" + ".webp"}
            alt={props.championKey}
            className="championData mx-auto"
          />
        </div> */}
        <div className="col-1 breakWord">
        <span className="align-center ">
            {props.characterName}
          </span>
        </div>
        <div
          className={
            "col-1 championData " +
            (props.similarites.sameGender
              ? checkColorBlindMode() + "correct"
              : checkColorBlindMode() + "incorrect")
          }
          id="gender"
        >
          <span className="align-center">
            {props.roleJob}
          </span>
        </div>
        <div
          className={
            "col-2 championData " +
            (props.similarites.sameKeyItem === "partial"
              ? checkColorBlindMode() + "partial"
              : props.similarites.sameKeyItem
              ? checkColorBlindMode() + "correct"
              : checkColorBlindMode() + "incorrect")
          }
          id="range"
        >
          <span className="align-center">
            {props.keyItem}
          </span>
        </div>
        <div
          className={
            "col-1 championData " +
            (props.similarites.sameLoyalty
              ? checkColorBlindMode() + "correct"
              : checkColorBlindMode() + "incorrect")
          }
          id="resource"
        >
          <span className="align-center">
            {props.loyalty}
          </span>
        </div>
        <div
          className={
            "col-2 championData " +
            (props.similarites.sameMagicalAbility === "partial"
              ? checkColorBlindMode() + "partial"
              : props.similarites.sameMagicalAbility
              ? checkColorBlindMode() + "correct"
              : checkColorBlindMode() + "incorrect")
          }
          id="genre"
        >
          <span className="align-center breakWord">
            {props.magicalAbility}
          </span>
        </div>
        <div
          className={
            "col-1 championData " +
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
          <span className="align-center">{props.firstAppearanceBookNumber}</span>
        </div>
        <div
          className={
            "col-1 championData " +
            (props.similarites.sameGender
              ? checkColorBlindMode() + "correct"
              : checkColorBlindMode() + "incorrect")
          }
          id="resource"
        >
          <span className="align-center">
            {props.gender}
          </span>
        </div>

        <div
          className={
            "col-2 championData " +
            (props.similarites.sameKeyRelationship === "partial"
              ? checkColorBlindMode() + "partial"
              : props.similarites.sameKeyRelationship
              ? checkColorBlindMode() + "correct"
              : checkColorBlindMode() + "incorrect")
          }
          id="genre"
        >
          <span className="align-center breakWord">
            {props.keyRelationships}
          </span>
        </div>

        <div
          className={
            "col-1 championData " +
            (props.similarites.sameHouse
              ? checkColorBlindMode() + "correct"
              : checkColorBlindMode() + "incorrect")
          }
          id="resource"
        >
          <span className="align-center">
            {props.house}
          </span>
        </div>
        
      </div>
    </div>
  );
}
