import { useState } from "react";
import PetService from "../services/pet-service";
import LoginService from "../services/login-service";

const AllPets = () => {
  const [pets, setPets] = useState([]);
  PetService.SetPetsCallback(setPets);
  console.log(LoginService);
  if (LoginService.loggedIn) {
    console.log("get pets");
    PetService.GetPets();
  }
  return <h1>All Pets {pets}</h1>;
};

export default AllPets;
