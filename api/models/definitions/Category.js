'use strict';

const DataType = require('sequelize');

/**
 * Category - A Bazaar Item Category
 */

// Define Item Model
function define(sequelize) {

  let Category = sequelize.define('category', {
    name: { 
      type: DataType.STRING,
      allowNull: false
    },
    description: {
      type: DataType.TEXT,
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

  return Category;
}

module.exports = {
  define: define 
};