'use strict';

const DataType = require('sequelize');

/**
 * Item - A Bazaar Item photo
 */

// Define Item Model
function define(sequelize) {

  let Photo = sequelize.define('photo', {
    uri: {
      type: DataType.STRING,
      field: 'title',
      allowNull: false,
      validate: {
        isUrl: true
      }
    },
    description: {
      type: DataType.TEXT,
      field: 'description'
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

  return Photo;
}

module.exports = {
  define: define 
};