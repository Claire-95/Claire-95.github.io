import NewPetForm from "../components/pets/NewPetForm";
import urlBase from "../constants";

const AddNewPet = () => {

  function addPetHandler(petData) {
    fetch(urlBase + "pets", {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify(petData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  return (
    <section>
      <h1>Add New Pet</h1>
      <NewPetForm onAddPet={addPetHandler} />
    </section>
  )
};

export default AddNewPet;
