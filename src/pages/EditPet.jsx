import { GetToEditPet } from "../services/pet-service";

const EditPet = () => {
  let editingPetId = window.location.pathname.split("/").pop();
  return GetToEditPet(editingPetId);
};

export default EditPet;
