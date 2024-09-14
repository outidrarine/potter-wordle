//const champion = require("../models/championModel");
const hpCharacter = require("../models/hpCharacterModel");
const user = require("../models/userModel");
const cache = require("../middleware/cache");
const fs = require("fs");
const path = require("path");
const GetPartialSimilarites =
  require("../helpers/compare").GetPartialSimilarites;

const GetAllHpCharacters = (req, res) => {
  const key = req.path;
  if (cache.checkCache(key)) {
    res.set("X-CACHE", "HIT");
    return res.json(cache.getCache(key));
  }
  hpCharacter.getHpCharacters((err, result) => {
    if (err) {
      return res.json({ status: "error", error: err });
    }

    const hpCharacters = [];
    result.forEach((champ) => {
      hpCharacters.push({
        value: champ["characterName"],
        image: champ["characterName"],
      });
    });

    const response = { status: "success", hpCharacters: hpCharacters };
    cache.saveCache(key, response);
    cache.changeTTL(key, 3600 * 24);
    res.set("X-CACHE", "MISS");
    res.json(response);
  });
};

const Guess = (req, res) => {
  const { guess } = req.body;

  if (!guess) {
    return res.json({ status: "error", message: "Guess is required" });
  }

  const token = req.token;

  hpCharacter.getByToken(token, (err, correctHpCharacterData) => {
    if (!correctHpCharacterData[0]) {
      console.error("Token is invalid");
      return res.json({ status: "error", message: "Token is invalid" });
    }

    // wrong guess return diff

    hpCharacter.getByName(guess, (err, guessHpCharacterData) => {
      if (!guessHpCharacterData[0]) {
        console.log("Nothing found with that champion Name");
        return res.json({
          status: "error",
          message: "Nothing found with that champion name",
        });
      }

      const hpCharacterData = {
        guessedHpCharacter: guessHpCharacterData[0].characterName,

        characterName: guessHpCharacterData[0].characterName,

        roleJob: GetPartialSimilarites(
          guessHpCharacterData[0].roleJob,
          correctHpCharacterData[0].roleJob
        ).attribute,

        keyItem: GetPartialSimilarites(
          guessHpCharacterData[0].keyItem,
          correctHpCharacterData[0].keyItem
        ).attribute,

        loyalty: GetPartialSimilarites(
          guessHpCharacterData[0].loyalty,
          correctHpCharacterData[0].loyalty
        ).attribute,

        magicalAbility: GetPartialSimilarites(
          guessHpCharacterData[0].magicalAbility,
          correctHpCharacterData[0].magicalAbility
        ).attribute,

        firstAppearanceBookNumber:
          guessHpCharacterData[0].firstAppearanceBookNumber,

        gender: guessHpCharacterData[0].gender,

        keyRelationships: GetPartialSimilarites(
          guessHpCharacterData[0].keyRelationships,
          correctHpCharacterData[0].keyRelationships
        ).attribute,

        house: GetPartialSimilarites(
          guessHpCharacterData[0].house,
          correctHpCharacterData[0].house
        ).attribute,
      };

      const similarites = {
        sameJob: GetPartialSimilarites(
          guessHpCharacterData[0].roleJob,
          correctHpCharacterData[0].roleJob
        ).match
          ? true
          : false,

        sameKeyItem: GetPartialSimilarites(
          guessHpCharacterData[0].keyItem,
          correctHpCharacterData[0].keyItem
        ).match
          ? true
          : false,
        sameLoyalty: GetPartialSimilarites(
          guessHpCharacterData[0].loyalty,
          correctHpCharacterData[0].loyalty
        ).match
          ? true
          : false,

        sameMagicalAbility: GetPartialSimilarites(
          guessHpCharacterData[0].magicalAbility,
          correctHpCharacterData[0].magicalAbility
        ).match
          ? true
          : false,

        sameFirstAppearance:
          correctHpCharacterData[0].firstAppearanceBookNumber ===
          guessHpCharacterData[0].firstAppearanceBookNumber
            ? "="
            : correctHpCharacterData[0].firstAppearanceBookNumber >
              guessHpCharacterData[0].firstAppearanceBookNumber
            ? ">"
            : "<",
        sameGender:
          guessHpCharacterData[0].gender === correctHpCharacterData[0].gender
            ? true
            : false,

        sameKeyRelationship: GetPartialSimilarites(
          guessHpCharacterData[0].keyRelationships,
          correctHpCharacterData[0].keyRelationships
        ).match,

        sameHouse: GetPartialSimilarites(
          guessHpCharacterData[0].house,
          correctHpCharacterData[0].house
        ).match
          ? true
          : false,
      };

      if (guess !== correctHpCharacterData[0].characterName) {
        return res.json({
          status: "success",
          correctGuess: false,
          properties: [hpCharacterData, similarites],
        });
      } else {
        // correct guess

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

            let solvedHpCharacter;

            if (result[0]["solvedChampions"]) {
              solvedHpCharacter =
                correctHpCharacterData[0]["id"] +
                "," +
                result[0]["solvedChampions"];
            } else {
              solvedHpCharacter = correctHpCharacterData[0]["id"];
            }

            let solvedCharacters;

            if (
              solvedHpCharacter.length > 1 &&
              solvedHpCharacter.split(",").length > 1 &&
              solvedHpCharacter.split(",").length < data.length
            ) {
              solvedCharacters = solvedHpCharacter.split(",");
            } else if (
              solvedHpCharacter.length > 1 &&
              solvedHpCharacter.split(",").length >= data.length
            ) {
              solvedCharacters = "";
              solvedHpCharacter = "";

              result[0]["prestige"]++;
            } else {
              solvedCharacters = solvedHpCharacter.toString();
            }

            // remove solved champs from the all champions pool
            const champPool = data.filter((id) => {
              return !solvedCharacters.includes(id["id"].toString());
            });

            const random = Math.floor(Math.random() * champPool.length);

            const newChampion = champPool[random];

            if (newChampion === undefined) {
              console.log("ERROR, no new champion");
              console.log(req.body);
              console.log(req.headers);
              console.log(req.token);
              console.log(champPool);
              console.log(champPool.length);
              console.log(random);
            }

            let payload = {
              currentChampion: newChampion["id"],
              solvedChampions: solvedHpCharacter,
              prestige: result[0]["prestige"],
              score: (result[0]["score"] += 1),
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

              cache.deleteCache("/user:" + token);

              res.json({
                status: "success",
                correctGuess: true,
                properties: [guessHpCharacterData, similarites],
                title: correctHpCharacterData[0].title,
              });
            });
          });
        });
      }
    });
  });
};

module.exports = {
  Guess,
  GetAllHpCharacters,
};
