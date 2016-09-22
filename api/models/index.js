'use strict';

var User = require('./User');
var Role = require('./Role');
var Item = require('./Item');
var ItemCondition = require('./ItemCondition');

function init(sequelize) {

  // Define and sync data models

  return User(sequelize)
    .then(() => Role(sequelize))
    .then(() => Item(sequelize))
    .then(() => ItemCondition(sequelize))
    .catch((error) => {
      console.error(error);
    });
}

module.exports = {
  init: init
};