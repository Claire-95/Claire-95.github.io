import NewPetForm from "../components/pets/NewPetForm";
import urlBase from "../constants";
import { useEffect } from "react";

const AddNewPet = () => {
  function AddPetHandler(petData) {
    console.log(petData);
    useEffect((petData) => {
      fetch(urlBase + "pets", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(petData),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }, []);
  }

  return (
    <section>
      <h1>Add New Pet</h1>
      <NewPetForm onAddPet={AddPetHandler} />
    </section>
  );
};

export default AddNewPet;
