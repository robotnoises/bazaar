'use strict';

var DataType = require('sequelize');

/**
 * ItemCondition - A list of conditions that describe the state of an Item
 */

// Define ItemCondition Model
function define(sequelize) {
  
  let ItemCondition = sequelize.define('condition', {
    value: { 
      type: DataType.STRING,
      allowNull: false
    },
    createdAt: {
      type: DataType.DATE,
      field: 'created_at'
    },
    updatedAt: {
      type: DataType.DATE,
      field: 'updated_at'
    }
  });

  return ItemCondition;
}

module.exports = {
  define: define
};
