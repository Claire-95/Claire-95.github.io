import EditPetForm from "../components/pets/EditPetForm";

const EditPet = (props) => {
  function EditPetHandler(petData) {
    console.log(petData);
  }
  return <EditPetForm onEditPet={EditPetHandler} />;
};

export default EditPet;
