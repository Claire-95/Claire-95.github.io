import firebase from "../Firebase/firebase";
import loginService from "../services/login-service";
import "../components/styles/SignIn.css";
import Card from "../components/ui/Card";

const SignIn = (props) => {
  const signInWithFirebase = () => {
    firebase
      .signInWithPopup(firebase.auth, firebase.googleAuth)
      .then((result) => {
        var loginState = true;
        loginService.HandleLogin(
          loginState,
          result.user.email,
          result.user.accessToken
        );
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
    <Card>
      <div>
        <h1 className="bigDesc">Welcome to Planimals!</h1>
        <h2 className="desc">
          Planimals is a customisable app designed to help you with all of your
          pet care needs.
        </h2>
        <h2 className="desc">With Planimals you can:</h2>
        <div className="list">
          <li>Create multiple pets per account</li>
          <br></br>
          <li>Create multiple Trackers per pet (e.g., 3 walks a day)</li>
          <br></br>
          <li>Share pets and trackers with other users</li>
        </div>
        <button
          className="bone"
          onClick={() => {
            signInWithFirebase();
          }}
        >
          <div className="c1"></div>
          <div className="c2"></div>
          <div className="c3"></div>
          <div className="c4"></div>
          <div className="b1">
            <div className="b2">Login</div>
          </div>
        </button>
        {/* <button
          className="button"
          onClick={() => {
            signInWithFirebase();
          }}
        >
          Sign In With Google <PetsIcon />
        </button> */}
      </div>
    </Card>
  );
};

export default SignIn;
