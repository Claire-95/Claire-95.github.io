exports.HandleLogin = (loginState) => {
  if (loginState) {
    console.log("Congratulations you're logged in!");
  } else {
    console.log("You're not logged in...");
  }
  console.log(loginState);
  exports.loggedIn = loginState;
  updateLoginStateCallback(exports.loggedIn);
};

exports.loggedIn = false;

exports.UpdateLoginState = (updateLoginStateCallbackValue) => {
  updateLoginStateCallback = updateLoginStateCallbackValue;
};

var updateLoginStateCallback;
