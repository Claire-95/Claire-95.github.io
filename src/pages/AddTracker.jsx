import NewTrackerForm from "../components/pets/NewTrackerForm";
import { SetCounter } from "../services/counter-service";

const AddNewCounter = () => {
  function AddCounterHandler(counterData) {
    console.log(counterData);
    SetCounter(counterData);
  }

  return (
    <section>
      <h1>Add New Tracker</h1>
      <NewTrackerForm onAddCounter={AddCounterHandler} />
    </section>
  );
};

export default AddNewCounter;
