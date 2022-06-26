import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import NavBar from "./components/Layout/NavBar";
import AllPets from "./pages/AllPets";
import AddNewPet from "./pages/AddNewPet";
import FedPets from "./pages/FedPets";
import SignIn from "./pages/SignIn";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<SignIn />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="new-pet" element={<AddNewPet />} />
          <Route path="fed-pets" element={<FedPets />} />
          <Route path="all-pets" element={<AllPets />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
