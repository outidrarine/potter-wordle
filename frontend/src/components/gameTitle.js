import React from "react";

export default function GameTitle() {
  return (
    <div className="d-flex justify-content-sm-center ">
      <div className="col-sm-1 currentAnswer ">
        <div className="">
          <div className="">
            <span className="align-center ">Character Name</span>
          </div>
        </div>
      </div>
      <div className={"col-sm-1 championData "} id="gender">
        <div className="">
          <div className="">
            <span className="align-center">Job</span>
          </div>
        </div>
      </div>
      <div className={"col-sm-1 championData "} id="range">
        <div className="">
          <div className="">
            <span className="align-center">Key item</span>
          </div>
        </div>
      </div>
      <div className={"col-sm-1 championData "} id="resource">
        <div className="">
          <div className="">
            <span className="align-center">Loyalty</span>
          </div>
        </div>
      </div>
      <div className={"col-sm-1 championData "} id="genre">
        <div className="">
          <div className="">
            <span className="align-center ">Magical ability</span>
          </div>
        </div>
      </div>
      <div className={"col-sm-1 championData "} id="released">
        <div className="">
          <div>
            <span className="align-center">First book appearance</span>
          </div>
        </div>
      </div>
      <div className={"col-sm-1 championData "} id="resource">
        <div className="">
          <div className="">
            <span className="align-center">Gender</span>
          </div>
        </div>
      </div>

      <div className={"col-sm-1 championData "} id="genre">
        <div className="">
          <div className="">
            <span className="align-center">Key Relationship</span>
          </div>
        </div>
      </div>

      <div className={"col-sm-1 championData "} id="resource">
        <div className="">
          <div className="">
            <span className="align-center">House</span>
          </div>
        </div>
      </div>
    </div>
  );
}
