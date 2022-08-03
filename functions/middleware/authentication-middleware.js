const admin = require("firebase-admin");

module.exports = (req, res, next) => {
  if (
    admin.auth().verifyIdToken(req.get("Authentication").replace("Bearer ", ""))
  ) {
    req.user.loggedIn = true;
  }
  next();
};
