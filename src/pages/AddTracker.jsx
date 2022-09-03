import NewTrackerForm from "../components/pets/NewTrackerForm";
import { SetCounter } from "../services/counter-service";

const AddNewCounter = () => {
  function AddCounterHandler(counterData) {
    console.log(counterData);
    SetCounter(counterData);
  }

  return (
    <section>
      <NewTrackerForm onAddCounter={AddCounterHandler} />
    </section>
  );
};

export default AddNewCounter;
