/* eslint-disable indent */
const admin = require("firebase-admin");

module.exports = (req, res, next) => {
  req.user = {};
  try {
    const authHeader = req.get("Authentication");
    console.log(authHeader);
    console.log("we made it past setting authHeader");
    if (authHeader !== undefined) {
      console.log("but did we make it past the if statement?");
      admin
        .auth()
        .verifyIdToken(authHeader.replace("Bearer ", ""))
        .then((res) => {
          req.user.id = res.uid;
          req.user.email = res.email;
          req.user.loggedIn = true;
          console.log(`Authenticated user: ${JSON.stringify(req.user)}`);
          next();
        });
    } else {
      throw new Error("No authentication header found");
    }
  } catch (error) {
    console.log(error);
    req.user.loggedIn = false;
    next();
  }
};
