import EditPetForm from "../components/pets/EditPetForm";
import { UpdatePet } from "../services/pet-service";

const EditPet = () => {
  function EditPetHandler(updatedPetData) {
    console.log(updatedPetData);

    // var newData = {
    //   amount: counterData.amount,
    //   id: counterData.id,
    //   linkedPet: counterData.linkedPet,
    //   metric: counterData.metric,
    //   trackable: counterData.trackable,
    //   value: value,
    // };
    // console.log(newData);
    UpdatePet(updatedPetData);
  }
  return <EditPetForm onEditPet={EditPetHandler} />;
};

export default EditPet;
