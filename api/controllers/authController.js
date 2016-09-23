'use strict';

const bcrypt = require('bcrypt');
const models = require('./../models');

/**
 * Auth Controller - controllers for authenticating Users
 */

module.exports = (router) => {

  let resp = require('./../services/httpResponseService');
  let user = models.getModel('User');

  router.post('/auth/login', (req, res) => {
    // Find a user via the supplied email
    user
      .findOne({
        where: {
          email: req.body.email
        }
      })
      .then((user) => {
        let passwordsMatch = bcrypt.compareSync(req.body.password, user.dataValues.password);

        if (passwordsMatch) {
          res.status(200).send('OK');
        } else {
          res.status(401).send('UNAUTHORIZED');
        }
      })
      .catch((error) => {
        console.error(error);
        res.status(500).end();
      });
  });

  router.post('/auth/logout', (req, res) => {

  });
};