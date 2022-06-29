export const HandleLogin = (loggedIn) => {
  if (loggedIn === true) {
    console.log("Congratulations you're logged in!");
  } else {
    console.log("You're not logged in...");
  }
  console.log(loggedIn);
};
