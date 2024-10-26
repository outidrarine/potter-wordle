import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import axios from "axios";
import Config from "../configs/config";
import { useEffect } from "react";
import Settings from "./settings";

export default function Rankuser() {
  const [playerData, setPlayerData] = useState("");

  const clickusername = () => {
    Settings.ToggleState();
    console.log("username clicked");
  };

  useEffect(() => {
    axios
      .get(Config.url + "/user", {
        headers: { authorization: "Bearer " + localStorage.getItem("token") },
      })
      .then((response) => {
        if (response.data.status === "success") {
          const data = response.data.player;

          setPlayerData(data);

          if (!data.country) {
            // do put request to server to update country code

            axios
              .put(
                Config.url + "/user/country",
                {},
                {
                  headers: {
                    authorization: "Bearer " + localStorage.getItem("token"),
                  },
                }
              )
              .then((res) => {
                if (response.data.status === "success") {
                  return;
                }
              })
              .catch((err) => {
                console.log(err);
              });
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    playerData && (
      <div className=" text-center mb-2 d-flex answercontainer px-1 guidescontainer">
        <div className="container col-md-7 col-lg-5 square-border position-relative ">
          <div className="d-flex justify-content-center my-1 ">
            <div className="col-5  mx-1 " onClick={() => clickusername()}>
              <Settings
                hideButton={true}
                text={playerData ? playerData.nickname : "-"}
              />
              <div className="col-1"></div>
            </div>
            <Tooltip opacity={1} id="correct-tooltip" />

            <div className="col-2 currentAnswer mx-1">
              <span className="align-center">
                Score : {playerData ? playerData.score : "-"}
              </span>
            </div>
            <Tooltip opacity={1} id="higher-tooltip" />

            <div className="col-2 currentAnswer mx-1 ">
              <span className="align-center">
                Rank : {playerData ? playerData.user_rank : "???"}
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
