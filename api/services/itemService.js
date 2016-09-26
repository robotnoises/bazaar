'use strict';

const response = require('./../services/httpResponseService');
const models = require('./../models');

const itemDAO = models.getModel('Item');
const photoDAO = models.getModel('Photo');

// todo
function FormattedItem(data) {
  return data;
}

function create(req, res) {
  
  let body = req.body;

  itemDAO.create(body)
    .then((created) => {
      res.status(200).json(new FormattedItem(created));
    })
    .catch((error) => {
      res.status(500).json(error);
    })
}

function get(req, res) {
  // todo
}

module.exports = {
  create: create,
  get: get,
  Formatted: FormattedItem
};