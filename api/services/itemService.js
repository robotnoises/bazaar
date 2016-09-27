'use strict';

const googleCloudStorage = require('@google-cloud/storage');
const config = require('./../../config')
const response = require('./../services/httpResponseService');
const models = require('./../models');

const itemDAO = models.getModel('Item');
const photoDAO = models.getModel('Photo');

const photoStorage = googleCloudStorage({
    projectId: config.googleCloudProjectId,
    credentials: {
        private_key: config.googleCloudSecret,
        client_email: config.googleCloudEmail
    }
});

const photoBucket = photoStorage.bucket('bazaar_item_photos');

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

function addPhoto(req, res) {

}

module.exports = {
  create: create,
  get: get,
  addPhoto: addPhoto,
  Formatted: FormattedItem
};