import Button from "@mui/material/Button";
import PetsIcon from "@mui/icons-material/Pets";
import firebase from "../Firebase/firebase";
import { HandleLogin } from "../services/loginService";

const SignIn = () => {
  const signInWithFirebase = () => {
    firebase
      .signInWithPopup(firebase.auth, firebase.googleAuth)
      .then((result) => {
        var loggedIn = true;
        HandleLogin(loggedIn);
        console.log("logged in");
        console.log(result);
        // This gives you a Google Access Token. You can use it to access the Google API.
        //const credential = firebase.googleAuth.credentialFromResult(result);
        //const token = credential.accessToken;
        // The signed-in user info.
        //const user = result.user;
        // ...
      })
      .catch((error) => {
        var loggedIn = false;
        HandleLogin(loggedIn);
        console.log("not logged in");
        console.log(error);
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
      <h1>Sign In</h1>
      <Button
        variant="contained"
        onClick={() => {
          signInWithFirebase();
        }}
      >
        Sign In With Google <PetsIcon />
      </Button>
      <Button variant="contained">
        Sign Out
        <PetsIcon />
      </Button>
    </div>
  );
};

export default SignIn;
