import EditPetForm from "../components/pets/EditPetForm";
import { UpdatePet } from "../services/pet-service";

const EditPet = () => {
  function EditPetHandler(updatedPetData) {
    const newOwner = updatedPetData.sharedOwners;

    var newData = {
      id: updatedPetData.id,
      name: updatedPetData.name,
      species: updatedPetData.species,
      sharedOwners: newOwner,
    };

    UpdatePet(newData);
  }
  return <EditPetForm onEditPet={EditPetHandler} />;
};

export default EditPet;
