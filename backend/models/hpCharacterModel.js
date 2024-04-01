const db = require("../configs/db");

const hpCharacter = {
getByToken: (token, cb) => {
    db.query(
      `SELECT hpcharacters.id, 
      hpcharacters.characterName, 
      hpcharacters.roleJob, 
      hpcharacters.keyItem, 
      hpcharacters.loyalty, 
      hpcharacters.magicalAbility, 
      hpcharacters.firstAppearanceBookNumber, 
      hpcharacters.gender, 
      hpcharacters.keyRelationships, 
      hpcharacters.house 
      FROM hp_characters hpcharacters join users users on users.currentChampion = hpcharacters.id WHERE users.token = ? `,
      [token],
      cb
    );
  }, 
  getByName: (name, cb) => {
    db.query("SELECT * FROM hp_characters WHERE characterName = ?", [name], cb);
  },
  getAllIds: (cb) => {
    db.query("SELECT id FROM hp_characters", cb);
  },
  getHpCharacters: (cb) => {
    db.query("SELECT characterName FROM hp_characters", cb);
  },
}

module.exports = hpCharacter;