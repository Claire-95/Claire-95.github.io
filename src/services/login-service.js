const authService = require("./authentication-service");

exports.HandleLogin = (loginState, user = "", token = "") => {
  if (loginState) {
    console.log("Congratulations you're logged in!");
    localStorage.setItem("login", "true");
    localStorage.setItem("user", user);
    localStorage.setItem("token", token);
  } else {
    console.log("You're logged out");
    localStorage.removeItem("login");
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  }
  authService.SetAccessToken(user, token);
  console.log(loginState);
  exports.loggedIn = loginState;
  updateLoginStateCallback(exports.loggedIn);
};

exports.loggedIn = false;
const persistentLogin = localStorage.getItem("login");

console.log(persistentLogin);

//persistentLogin always !== null unless manually logged out. Does not go null when token runs out
if (persistentLogin !== null) {
  console.log(persistentLogin);
  exports.loggedIn = true;
  const user = localStorage.getItem("user");
  const token = localStorage.getItem("token");
  //ToDo refresh token, it may have timed out and become invalid.
  authService.SetAccessToken(user, token);
} else {
  console.log("You're signed out...");
}

exports.UpdateLoginState = (updateLoginStateCallbackValue) => {
  updateLoginStateCallback = updateLoginStateCallbackValue;
};

var updateLoginStateCallback;
