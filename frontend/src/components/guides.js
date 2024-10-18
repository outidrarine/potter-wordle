import { useState } from "react";
import React from "react";

export default function Guides() {
  const [isVisible, setIsVisible] = useState(true);
  const hideguides = () => {
    setIsVisible(!isVisible);
  };
  return (
    isVisible && (
      <div className=" text-center mb-2 d-flex answercontainer px-3 guidescontainer">
        <div className="container col-md-7 col-lg-5 my-5 square-border position-relative ">
          <div
            className="position-absolute closebutton"
            onClick={() => hideguides()}
          >
            X
          </div>
          <div className="d-flex justify-content-center my-4 ">
            <div className="col-sm-1 currentAnswer mx-1">
              <div className=" correct">
                <div className="squareboxe"></div>
              </div>
              <span className="align-center">Correct</span>
            </div>

            <div className="col-sm-1 currentAnswer mx-1 ">
              <div className="incorrect">
                <div className="squareboxe"></div>
              </div>
              <div className="">
                <span className="align-center">Incorrect</span>
              </div>
            </div>
            <div className="col-sm-1 currentAnswer mx-1">
              <div className="incorrect">
                <div className="squareboxe square-inferior"></div>
              </div>
              <div>
                <span className="align-center">Lower</span>
              </div>
            </div>
            <div className="col-sm-1 currentAnswer mx-1">
              <div className="incorrect">
                <div className="squareboxe square-superior"></div>
              </div>
              <div>
                <span className="align-center">Higher</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
