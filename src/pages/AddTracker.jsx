import NewTrackerForm from "../components/pets/NewTrackerForm";
import { SetPet } from "../services/pet-service";

const AddNewPet = () => {
  function AddPetHandler(petData) {
    console.log(petData);
    SetPet(petData);
  }

  return (
    <section>
      <h1>Add New Tracker</h1>
      <NewTrackerForm onAddPet={AddPetHandler} />
    </section>
  );
};

export default AddNewPet;
