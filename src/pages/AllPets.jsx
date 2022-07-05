import PetService from "../services/pet-service";
import LoginService from "../services/login-service";

const AllPets = () => {
  console.log(LoginService);
  if (LoginService.loggedIn) {
    return PetService.GetPets();
  }
  return PetService.GetPets();
};

export default AllPets;
