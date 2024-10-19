import React from "react";

export default function GameTitle() {
  return (
    <div className="d-flex justify-content-sm-center ">
      <div className="col-sm-1 championData ">
        <div className="">
          <div className="">
            <span className="align-center  white-text">Wizard Name</span>
          </div>
        </div>
      </div>
      <div className={"col-sm-1 championData "} id="gender">
        <div className="">
          <div className="">
            <span className="align-center  white-text">Job</span>
          </div>
        </div>
      </div>
      <div className={"col-sm-1 championData "} id="range">
        <div className="">
          <div className="">
            <span className="align-center  white-text">Key item</span>
          </div>
        </div>
      </div>
      <div className={"col-sm-1 championData "} id="resource">
        <div className="">
          <div className="">
            <span className="align-center white-text ">Loyalty</span>
          </div>
        </div>
      </div>
      <div className={"col-sm-1 championData "} id="genre">
        <div className="">
          <div className="">
            <span className="align-center white-text">Magical ability</span>
          </div>
        </div>
      </div>
      <div className={"col-sm-1 championData "} id="released">
        <div className="">
          <div>
            <span className="align-center white-text">
              First book appearance
            </span>
          </div>
        </div>
      </div>
      <div className={"col-sm-1 championData "} id="resource">
        <div className="">
          <div className="">
            <span className="align-center white-text">Gender</span>
          </div>
        </div>
      </div>

      <div className={"col-sm-1 championData "} id="resource">
        <div className="">
          <div className="">
            <span className="align-center white-text">House</span>
          </div>
        </div>
      </div>
    </div>
  );
}
