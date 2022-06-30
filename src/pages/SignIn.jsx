import Button from "@mui/material/Button";
import PetsIcon from "@mui/icons-material/Pets";
import firebase from "../Firebase/firebase";
import loginService from "../services/login-service";
import "../index.css";

const SignIn = (props) => {
  const signInWithFirebase = () => {
    firebase
      .signInWithPopup(firebase.auth, firebase.googleAuth)
      .then((result) => {
        var loginState = true;
        loginService.HandleLogin(loginState);
        // This gives you a Google Access Token. You can use it to access the Google API.
        //const credential = firebase.googleAuth.credentialFromResult(result);
        //const token = credential.accessToken;
        // The signed-in user info.
        //const user = result.user;
        // ...
      })
      .catch((error) => {
        //var loginState = false;
        //loginService.HandleLogin(loginState);
        // Handle Errors here.
        //const errorCode = error.code;
        //const errorMessage = error.message;
        // The email of the user's account used.
        //const email = error.customData.email;
        // The AuthCredential type that was used.
        //const credential = firebase.googleAuth.credentialFromError(error);
        // ...
      });
  };

  return (
    <div>
      <h1>Welcome to Planimals!</h1>
      <h2>Please sign in to begin</h2>
      <Button
        variant="contained"
        onClick={() => {
          signInWithFirebase();
        }}
      >
        Sign In With Google <PetsIcon />
      </Button>
    </div>
  );
};

export default SignIn;
