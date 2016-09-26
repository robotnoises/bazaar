'use strict';

/**
 * isAuth() - Check if the User is authenticated
 */

module.exports = (req, res, next) => {
  if (req.session.isAuthenticated) {
    next();
  } else {
    res.status(403).send('Not Authorized');
  }
};