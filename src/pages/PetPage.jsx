import { GetPets } from "../services/pet-service";

const PetPage = () => {
  const urlId = window.location.pathname.split("/").pop();
  console.log(urlId);
  return GetPets();
};

export default PetPage;
