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
    localStorage.removeItem("key");
  }
  authService.SetAccessToken(user, token);
  console.log(loginState);
  exports.loggedIn = loginState;
  updateLoginStateCallback(exports.loggedIn);
};

exports.loggedIn = false;
const persistentLogin = localStorage.getItem("login");

const time = new Date();
const currentTime = time.getTime();

const authTime = localStorage.getItem("key");

console.log(currentTime);
console.log(authTime);

var timeDif = currentTime - authTime;
var timeDiff = (timeDif /= 1000);

console.log(timeDiff);

// persistentLogin always !== null unless manually logged out. Does not go null when token runs out
if (timeDiff <= 1800) {
  console.log(persistentLogin);
  exports.loggedIn = true;
  const user = localStorage.getItem("user");
  const token = localStorage.getItem("token");
  authService.SetAccessToken(user, token);
} else {
  console.log("You're signed out...");
}

exports.UpdateLoginState = (updateLoginStateCallbackValue) => {
  updateLoginStateCallback = updateLoginStateCallbackValue;
};

var updateLoginStateCallback;
