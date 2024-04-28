const user = require("../models/userModel");
const champion = require("../models/championModel");
const crypto = require("crypto");
const cache = require("../middleware/cache");
const hpCharacter = require("../models/hpCharacterModel");

const Create = (req, res) => {
  crypto.randomBytes(46, (err, token) => {
    if (err) {
      console.log(err);
      return res.json({ status: "error", message: "Error on token creation" });
    }

    token = token.toString("base64");

    let { nickname } = req.body;

    if (nickname && nickname.length > 30) {
      nickname = nickname.substring(0, 30);
    }

    const country = req.get("cf-ipcountry");

    hpCharacter.getAllIds((err, data) => {
      if (err) {
        console.log(err);
        return res.json({
          status: "error",
          message: "Error on fetching champion ids",
        });
      }

      const random = Math.floor(Math.random() * data.length);

      const currentChampion = data[random];

      const randomSplash = Math.floor(Math.random() * data.length);

      const currentSplashChampion = data[randomSplash];

      if (!nickname) {
        nickname = "Teemo#" + Math.floor(Math.random() * 9999);
      }

      const userData = {
        nickname: nickname,
        token: token,
        currentChampion: currentChampion["id"],
        timestamp: new Date().toLocaleDateString("en"),
        country: country,
      };

      user.create(userData, (err, result) => {
        if (err) {
          console.log(err);
          return res.json({
            status: "error",
            message: "Error on fetching ids",
          });
        }

        res.json({ status: "success", token: token });
      });
    });
  });
};

const CheckToken = (req, res) => {
  const token = req.token;

  const key = req.path + ":" + token;

  if (cache.checkCache(key)) {
    res.set("X-CACHE", "HIT");
    res.set("X-CACHE-REMAINING", new Date(cache.getTtl(key)).toISOString());
    return res.json(cache.getCache(key));
  }

  user.fetchByTokenForUserDataAPI(token, (err, result) => {
    if (result && result[0][0]) {
      delete result[0][0]["solvedChampions"];

      result[0][0]["user_rank"] = result[1][0]
        ? result[1][0]["user_rank"]
        : "n/a";
      const response = {
        status: "success",
        message: "Token is valid",
        player: result[0][0],
      };

      cache.saveCache(key, response);
      res.set("X-CACHE", "MISS");

      res.json(response);
    } else {
      res.json({ status: "error", message: "Token is not valid" });
    }
  });
};

const ChangeCountry = (req, res) => {
  const token = req.token;

  const country = req.get("cf-ipcountry");

  const data = {
    country: country,
    token: token,
  };

  user.setCountry(data, (err, result) => {
    if (err) {
      console.log(err);
      return res.json({ status: "error", message: "Error on setting country" });
    }

    if (result.affectedRows !== 0) {
      return res.json({ status: "success", message: "Country updated" });
    } else {
      return res.json({
        status: "error",
        message: "No user was found with that token",
      });
    }
  });
};

const ChangeNickname = (req, res) => {
  let { nickname } = req.body;

  if (!nickname) {
    return res.json({ status: "error", message: "Nickname is required" });
  }

  if (nickname.length > 30) {
    nickname = nickname.substring(0, 30);
  }

  const data = {
    nickname: nickname,
    token: req.token,
  };

  user.changeNickname(data, (err, result) => {
    if (err) {
      console.log(err);
      return res.json({
        status: "error",
        message: "Error on changing nickname",
      });
    }

    if (result.affectedRows !== 0) {
      return res.json({ status: "success", message: "Nickname updated" });
    } else {
      return res.json({
        status: "error",
        message: "No user was found with that token",
      });
    }
  });
};

const DeleteUser = (req, res) => {
  user.deleteUser(req.token, (err, result) => {
    if (err) {
      console.log(err);
      return res.json({
        status: "error",
        message: "Error on deleting account",
      });
    }

    if (result.affectedRows !== 0) {
      return res.json({ status: "success", message: "Account deleted" });
    } else {
      return res.json({
        status: "error",
        message: "No user was found with that token",
      });
    }
  });
};

const ChangeChampionGuess = (req, res) => {
  const token = req.token;
  hpCharacter.getAllIds((err, data) => {
    if (err) {
      console.log(err);
      return res.json({
        status: "error",
        message: "Error on fetching champions ids",
      });
    }

    user.fetchByToken(token, (err, result) => {
      if (err) {
        console.log(err);
        return res.json({
          status: "error",
          message: "Error on fetching data with the token provided",
        });
      }

      let solvedChampions = result[0]["solvedChampions"];
      let solvedChamps, champPool;

      if (solvedChampions) {
        if (
          solvedChampions.length > 1 &&
          solvedChampions.split(",").length > 1 &&
          solvedChampions.split(",").length < data.length
        ) {
          solvedChamps = solvedChampions.split(",");
        } else {
          solvedChamps = solvedChampions.toString();
        }

        // remove solved champs from the all champions pool
        champPool = data.filter((id) => {
          return !solvedChamps.includes(id["id"].toString());
        });
      } else {
        champPool = data.map((id) => {
          return id;
        });
      }

      const random = Math.floor(Math.random() * champPool.length);

      const newChampion = champPool[random];

      let payload = {
        currentChampion: newChampion["id"],
        solvedChampions: solvedChampions,
        prestige: result[0]["prestige"],
        score: result[0]["score"],
        token: token,
      };

      user.update(payload, (err, result) => {
        if (err) {
          console.log(err);
          return res.json({
            status: "error",
            message: "Error on updating user data",
          });
        }

        res.json({
          status: "success",
          message: "Changed guess to champion game",
        });
      });
    });
  });
};

module.exports = {
  Create,
  CheckToken,
  ChangeNickname,
  DeleteUser,
  ChangeCountry,
  ChangeChampionGuess,
};
