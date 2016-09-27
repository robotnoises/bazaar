'use strict';

const config = require('./../config');

/**
 * Models - Define and make model associations. Sync with database.
 */

var User = require('./definitions/User');
var Role = require('./definitions/Role');
var Item = require('./definitions/Item');
var Photo = require('./definitions/Photo');
var Category = require('./definitions/Category');
var Condition = require('./definitions/Condition');
var ShippingAddress = require('./definitions/ShippingAddress');

// Map of defined models (defined in init())
var definedModels = {};

// Initialize all db Models
function init(sequelize) {

  /** 
   * Define and sync data models 
   */

  let user = User.define(sequelize);
  let role = Role.define(sequelize);
  let item = Item.define(sequelize);
  let photo = Photo.define(sequelize);
  let category = Category.define(sequelize);
  let condition = Condition.define(sequelize);
  let shippingAddress = ShippingAddress.define(sequelize);

  // Add to definedModels hashMap
  // Node: each key needs to be lower case
  definedModels.user = user;
  definedModels.role = role;
  definedModels.item = item;
  definedModels.photo = photo;
  definedModels.category = category;
  definedModels.condition = condition;
  definedModels.shippingaddress = shippingAddress;

  /**
   * Define various Model associations using the above definitions
   */

  // A User can have many Roles
  user.belongsToMany(role, {
    foreignKey: 'fk_user',
    otherKey: 'fk_role',
    through: 'user_roles'
  });

  // A User can have one Shipping Address
  user.hasOne(shippingAddress, {
    foreignKey: 'fk_user'
  });

  // A User can have many Items
  user.hasMany(item, {
    foreignKey: 'fk_user'
  });

  // A condition (new, likenew, fair.. etc) can be associated with many Items
  condition.belongsToMany(item, {
    foreignKey: 'fk_condition',
    otherKey: 'fk_item',
    through: 'item_conditions'
  });

  // A category can be associated with many Items
  category.belongsToMany(item, {
    foreignKey: 'fk_category',
    otherKey: 'fk_item',
    through: 'item_categories'
  });

  // An Item can have many photos
  item.hasMany(photo, {
    foreignKey: 'fk_item'
  });

  /**
   * Synchronize Models to Database 
   */

  // Forced-sync (DROP IF EXIST) when in development and debug modes
  return sequelize.sync({ force: (config.development && config.debug) })
    // Create Item Conditions
    .then(() => condition.create({ value: 'New' }))
    .then(() => condition.create({ value: 'Like New' }))
    .then(() => condition.create({ value: 'Used' }))
    .then(() => condition.create({ value: 'Fair' }))
    .then(() => condition.create({ value: 'Broken/Spare Parts' }))

    // Create User Roles for Authorization
    .then(() => role.create({ value: 'user' }))
    .then(() => role.create({ value: 'admin' }))
    .then(() => role.create({ value: 'superadmin' }))
    
    // Create Item Categories
    .then(() => {
      return category.create({
        name: 'Antiques',
        description: ''
      });
    })
    .then(() => {
      return category.create({
        name: 'Arts & Crafts',
        description: ''
      });
    })
    .then(() => {
      return category.create({
        name: 'Baby Stuff',
        description: ''
      });
    })
    .then(() => {
      return category.create({
        name: 'Books',
        description: ''
      });
    })
    .then(() => {
      return category.create({
        name: 'Clothing & Accessories',
        description: ''
      });
    })
    .then(() => {
      return category.create({
        name: 'Collectables',
        description: ''
      });
    })
    .then(() => {
      return category.create({
        name: 'DVDs & Movies',
        description: ''
      });
    })
    .then(() => {
      return category.create({
        name: 'Electronics',
        description: ''
      });
    })
    .then(() => {
      return category.create({
        name: 'Music',
        description: ''
      });
    })
    .then(() => {
      return category.create({
        name: 'Musical Instruments',
        description: ''
      });
    })
    .then(() => {
      return category.create({
        name: 'Sporting Goods',
        description: ''
      });
    })
    .then(() => {
      return category.create({
        name: 'Tickets',
        description: ''
      });
    })
    .then(() => {
      return category.create({
        name: 'Toys',
        description: ''
      });
    })
    .then(() => {
      return category.create({
        name: 'Video Games',
        description: ''
      });
    })
    .then(() => {
      return category.create({
        name: 'Whatever',
        description: ''
      });
    })
    .catch((error) => {
      console.error(error);
    }); 
}

// Get a specific model definition
function getModel(modelName) {
  
  let mName = (modelName) ? modelName.toLowerCase() : '';

  if (!!definedModels[mName]) {
    return definedModels[mName];
  } else {
    throw new Error('Model ' + modelName + ' is not defined!');
  }
}

module.exports = {
  init: init,
  getModel: getModel
};