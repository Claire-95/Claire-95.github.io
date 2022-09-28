import firebase from "../Firebase/firebase";
import loginService from "../services/login-service";
import "../components/styles/SignIn.css";
import Card from "../components/ui/Card";

const SignIn = (props) => {
  const signInWithFirebase = () => {
    firebase
      .signInWithPopup(firebase.auth, firebase.googleAuth)
      .then((result) => {
        console.log(result);
        const d = new Date();
        const authTime = d.getTime();
        localStorage.setItem("key", authTime);
        loginService.HandleLogin(
          true,
          result.user.email,
          result.user.accessToken
        );
      })
      .catch((error) => {
        console.log(error);
        loginService.HandleLogin(false);
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
          <li>Add pets to your account</li>
          <br></br>
          <li>Create multiple Trackers per pet (e.g., 3 walks a day)</li>
          <br></br>
          <li>Share pets and trackers with other users</li>
        </div>
        <button
          className="button"
          onClick={() => {
            signInWithFirebase();
          }}
        >
          Click to Login with Google
        </button>
      </div>
    </Card>
  );
};

export default SignIn;
