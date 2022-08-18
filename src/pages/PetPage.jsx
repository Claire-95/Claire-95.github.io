// import { CurrentPet } from "../components/pets/CurrentPet";
import { GetCounters } from "../services/counter-service";
// import { GetCounters } from "../services/counter-service";

const PetPage = () => {
  const urlId = window.location.pathname.split("/").pop();
  console.log(urlId);
  return GetCounters();
};

export default PetPage;
