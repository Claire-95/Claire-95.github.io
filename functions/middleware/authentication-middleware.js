const admin = require("firebase-admin");

module.exports = (req, res, next) => {
  req.user = {};
  if (
    admin.auth().verifyIdToken(req.get("Authentication").replace("Bearer ", ""))
  ) {
    req.user.loggedIn = true;
  } else {
    req.user.loggedIn = false;
  }
  next();
};
