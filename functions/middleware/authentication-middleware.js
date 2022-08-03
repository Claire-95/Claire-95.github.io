const admin = require("firebase-admin");

module.exports = (req, res, next) => {
  req.user = {};
  const authHeader = req.get("Authentication");
  if (
    authHeader !== undefined &&
    admin.auth().verifyIdToken(authHeader.replace("Bearer ", ""))
  ) {
    req.user.loggedIn = true;
  } else {
    req.user.loggedIn = false;
  }
  next();
};
