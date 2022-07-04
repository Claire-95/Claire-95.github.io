exports.HandleLogin = (loginState) => {
  if (loginState) {
    console.log("Congratulations you're logged in!");
    localStorage.setItem("login", "true");
  } else {
    console.log("You're signed out...");
    localStorage.removeItem("login");
  }
  console.log(loginState);
  exports.loggedIn = loginState;
  updateLoginStateCallback(exports.loggedIn);
};
exports.loggedIn = false;
const persistentLogin = localStorage.getItem("login");
if (persistentLogin !== null) {
  exports.loggedIn = true;
}

exports.UpdateLoginState = (updateLoginStateCallbackValue) => {
  updateLoginStateCallback = updateLoginStateCallbackValue;
};

var updateLoginStateCallback;
