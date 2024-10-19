import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";

export default function More() {
  const [isVisible, setIsVisible] = useState(true);
  const hideguides = () => {
    setIsVisible(!isVisible);
  };
  return (
    isVisible && (
      <div className=" text-center mb-2 d-flex answercontainer px-3 guidescontainer">
        <div className="container col-md-7 col-lg-5 my-4 py-3 square-border position-relative ">
          <div
            className="position-absolute closebutton"
            onClick={() => hideguides()}
          >
            X
          </div>
          <h4>Want more?</h4>
          <p>Play our other games:</p>
          <div className="d-flex justify-content-center my-2 ">
            <div className=" col-2 playstore mx-1">
              <a href="https://pegmy.com" target="blank">
                <div className="squareicon  squareicon"></div>
              </a>
            </div>
            <div className="col-2 playstore mx-1">
              <a href="https://pegmy.com" target="blank">
                <div className="applestore">
                  <div className="squareicon"></div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
