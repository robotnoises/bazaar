'use strict';

const googleCloudStorage = require('@google-cloud/storage');
const config = require('./../config')
const response = require('./../services/httpResponseService');
const models = require('./../models');

const itemDAO = models.getModel('Item');
const listItemDAO = models.getModel('ListItem');
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
  let createdItem = {};

  body.userId = req.session.user.userId;

  itemDAO.create(body)
    .then((created) => {
      createdItem = created;
      return listItemDAO.create({
        promoted: Math.floor(Math.random() * 2), // temp
        itemId: created.id
      });
    })
    .then(() => {
      res.status(200).json(new FormattedItem(createdItem));
    })
    .catch((error) => {
      res.status(500).json(error);
    });
}

function list (req, res) {
  listItemDAO.all()
    .then((listItems) => {
      res.json(listItems.map(li => li.dataValues));
    })
    .catch((error) => {
      res.status(500).send();
    })
}

function get(req, res) {
  // todo
}

function addPhoto(req, res) {
  let fs = require('fs'); // temp

  let readStream = photoBucket.file('test.jpg').createReadStream();
  let writeStream = fs.createWriteStream(__dirname + '/test.jpg');

  writeStream.on('close', (response) => {
    res.status(200).json(response);
  });

  readStream.on('error', (error) => {
    res.status(500).json(error);
  });

  writeStream.on('error', (error) => {
    res.status(500).json(error);
  })

  readStream.pipe(writeStream);
}

module.exports = {
  create: create,
  list: list,
  get: get,
  addPhoto: addPhoto,
  Formatted: FormattedItem
};