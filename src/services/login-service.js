const HandleLogin = (loginState) => {
  if (loginState) {
    console.log("Congratulations you're logged in!");
  } else {
    console.log("You're not logged in...");
  }
  console.log(loginState);
  loggedIn = loginState;
  updateLoginStateCallback(loggedIn);
};

var loggedIn = false;

const UpdateLoginState = (updateLoginStateCallbackValue) => {
  updateLoginStateCallback = updateLoginStateCallbackValue;
};

var updateLoginStateCallback;
// eslint-disable-next-line import/no-anonymous-default-export
export default { loggedIn, HandleLogin, UpdateLoginState };
