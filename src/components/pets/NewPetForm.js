import { useRef } from "react";
import Card from "../ui/Card";
import classes from "./NewPetForm.module.css";
import { useNavigate } from "react-router-dom";

function NewPetForm(props) {
  let navigate = useNavigate();

  const nameInputRef = useRef();
  const speciesInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredname = nameInputRef.current.value;
    const enteredSpecies = speciesInputRef.current.value;
    let sharedOwner = [];

    const petData = {
      name: enteredname,
      species: enteredSpecies,
      sharedOwners: sharedOwner,
    };
    props.onAddPet(petData);

    nameInputRef.current.value = "";
    speciesInputRef.current.value = "";

    navigate("/all-pets");
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="name">Name</label>
          <input type="text" required id="name" ref={nameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="species">Species</label>
          <input type="text" required id="species" ref={speciesInputRef} />
        </div>
        <div className={classes.actions}>
          <button>Add Pet</button>
        </div>
      </form>
    </Card>
  );
}

export default NewPetForm;
