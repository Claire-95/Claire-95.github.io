import EditPetForm from "../components/pets/EditPetForm";
import { UpdatePet } from "../services/pet-service";

const EditPet = () => {
  function EditPetHandler(updatedPetData) {
    console.log(updatedPetData);
    const newOwner = updatedPetData.sharedOwners;

    var newData = {
      id: updatedPetData.id,
      name: updatedPetData.name,
      species: updatedPetData.species,
      sharedOwners: [{ newOwner }],
    };
    console.log(newData);

    UpdatePet(newData);
  }
  return <EditPetForm onEditPet={EditPetHandler} />;
};

export default EditPet;
