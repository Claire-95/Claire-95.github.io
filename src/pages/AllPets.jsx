import { GetPets } from "../services/pet-service";
import { GetCounter } from "../services/counter-service";
import LoginService from "../services/login-service";

const AllPets = () => {
  GetCounter();
  console.log(LoginService);
  if (LoginService.loggedIn) {
    return GetPets();
  }
  return GetPets();
};

export default AllPets;
