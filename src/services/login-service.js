const authService = require("./authentication-service");

exports.HandleLogin = (loginState, user = "", token = "") => {
  if (loginState) {
    console.log("Congratulations you're logged in!");
    localStorage.setItem("login", "true");
    localStorage.setItem("user", user);
    localStorage.setItem("token", token);
    authService.SetAccessToken(user, token);
  } else {
    console.log("You're signed out...");
    localStorage.removeItem("login");
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  }
  console.log(loginState);
  exports.loggedIn = loginState;
  updateLoginStateCallback(exports.loggedIn);
};
exports.loggedIn = false;
const persistentLogin = localStorage.getItem("login");
if (persistentLogin !== null) {
  exports.loggedIn = true;
  const user = localStorage.getItem("user");
  const token = localStorage.getItem("token");
  if (!token) {
    localStorage.setItem("login", "false");
  }
  authService.SetAccessToken(user, token);
}

exports.UpdateLoginState = (updateLoginStateCallbackValue) => {
  updateLoginStateCallback = updateLoginStateCallbackValue;
};

var updateLoginStateCallback;
