import { useState } from "react";
import React from "react";
import { Tooltip } from "react-tooltip";

export default function Guides() {
  const [isVisible, setIsVisible] = useState(true);
  const hideguides = () => {
    setIsVisible(!isVisible);
  };
  return (
    isVisible && (
      <div className=" text-center mb-2 d-flex answercontainer px-3 guidescontainer">
        <div className="container col-md-7 col-lg-5 mt-5 square-border position-relative ">
          <div
            className="position-absolute closebutton"
            onClick={() => hideguides()}
          >
            X
          </div>
          <div className="d-flex justify-content-center my-4 ">
            <div className="col-sm-1 currentAnswer mx-1">
              <div
                data-tooltip-id="correct-tooltip"
                data-tooltip-content="The corect wizard has this value"
                className="  correct"
              >
                <div className="squareboxe"></div>
              </div>
              <span className="align-center">Correct</span>
            </div>
            <Tooltip opacity={1} id="correct-tooltip" />

            <div className="col-sm-1 currentAnswer mx-1 ">
              <div
                data-tooltip-id="incorrect-tooltip"
                data-tooltip-content="The correct wizard doesn't have this value"
                className="incorrect"
              >
                <div className="squareboxe"></div>
              </div>
              <div className="">
                <span className="align-center">Incorrect</span>
              </div>
            </div>
            <Tooltip opacity={1} id="incorrect-tooltip" />

            <div className="col-sm-1 currentAnswer mx-1">
              <div
                data-tooltip-id="lower-tooltip"
                data-tooltip-content="The correct value is lower"
                className="incorrect"
              >
                <div className="squareboxe square-inferior"></div>
              </div>
              <div>
                <span className="align-center">Lower</span>
              </div>
            </div>
            <Tooltip opacity={1} id="lower-tooltip" />

            <div className="col-sm-1 currentAnswer mx-1">
              <div
                data-tooltip-id="higher-tooltip"
                data-tooltip-content="The correct value is higher"
                className="incorrect"
              >
                <div className="squareboxe square-superior"></div>
              </div>
              <div>
                <span className="align-center">Higher</span>
              </div>
            </div>
            <Tooltip opacity={1} id="higher-tooltip" />
          </div>
        </div>
      </div>
    )
  );
}
