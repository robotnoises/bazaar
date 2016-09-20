'use strict';

var User = require('./User');
var Item = require('./Item');

function init(sequelize) {
  return new Promise((resolve, reject) => {
    User(sequelize)
      .then(() => {
        return Item(sequelize);
      })
      .then(resolve)
      .catch((error) => {
        reject(error);
      })
  });  
}

module.exports = {
  init: init
};