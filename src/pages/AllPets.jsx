import { GetPets } from "../services/pet-service";
import { GetCounters } from "../services/counter-service";
import LoginService from "../services/login-service";

const AllPets = () => {
  GetCounters();
  console.log(LoginService);
  if (LoginService.loggedIn) {
    return GetPets();
  }
  return GetPets();
};

export default AllPets;
