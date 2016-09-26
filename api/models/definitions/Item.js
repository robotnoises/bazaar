'use strict';

const DataType = require('sequelize');

/**
 * Item - A Bazaar Item published for trade
 */

// Define Item Model
function define(sequelize) {

  let Item = sequelize.define('item', {
    title: {
      type: DataType.STRING,
      field: 'title',
      allowNull: false
    },
    description: {
      type: DataType.TEXT,
      field: 'description',
      allowNull: false
    },
    ecv: {
      type: DataType.INTEGER,
      field: 'estimated_cash_value'
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

  return Item;
}

module.exports = {
  define: define 
};