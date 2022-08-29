import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import React, { useState } from "react";

import NavBar from "./components/Layout/NavBar";
import AllPets from "./pages/AllPets";
import AddNewPet from "./pages/AddNewPet";
import PetPage from "./pages/PetPage";
import SignIn from "./pages/SignIn";
import NoPage from "./pages/NoPage";
import loginService from "./services/login-service";
import AddTracker from "./pages/AddTracker";
import EditTracker from "./pages/EditTracker";
import EditPet from "./pages/EditPet";

function UserGreeting() {
  const urlId = window.location.pathname.split("/").pop();
  var petPath = "pet-page/" + urlId;
  var trackerPath = "add-tracker/" + urlId;
  var editingPet = "edit-pet/" + urlId;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<AllPets />} />
          <Route path="/" element={<AllPets />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="new-pet" element={<AddNewPet />} />
          <Route path={petPath} element={<PetPage />} />
          <Route path="all-pets" element={<AllPets />} />
          <Route path={trackerPath} element={<AddTracker />} />
          <Route path="edit-tracker" element={<EditTracker />} />
          <Route path={editingPet} element={<EditPet />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function GuestGreeting() {
  return <SignIn />;
}

export default function App() {
  // eslint-disable-next-line no-unused-vars
  const [loggedInValue, setLoggedIn] = useState(loginService.loggedIn);
  loginService.UpdateLoginState(setLoggedIn);
  if (loggedInValue) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
