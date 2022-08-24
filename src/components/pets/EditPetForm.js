import { useRef } from "react";
import Card from "../ui/Card";
import classes from "./NewPetForm.module.css";
// import { useNavigate } from "react-router-dom";

function EditPetForm(props) {
  // let navigate = useNavigate();
  console.log(props);

  let editingPet = window.location.pathname.split("/").slice(-3);
  console.log(editingPet);

  const nameInputRef = useRef();
  const speciesInputRef = useRef();
  const sharedOwnerInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredname = nameInputRef.current.value;
    const enteredSpecies = speciesInputRef.current.value;
    const enteredSharedOwner = sharedOwnerInputRef.current.value;

    const petData = {
      name: enteredname,
      species: enteredSpecies,
      sharedOwners: enteredSharedOwner,
    };
    props.onEditPet(petData);

    nameInputRef.current.value = "";
    speciesInputRef.current.value = "";
    sharedOwnerInputRef.current.value = "";

    // navigate("/all-pets");
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
        <div className={classes.control}>
          <label htmlFor="sharedOwner">Shared Owner</label>
          <input
            type="text"
            required
            id="sharedOwner"
            ref={sharedOwnerInputRef}
          />
        </div>
        <div className={classes.actions}>
          <button>Add Pet</button>
        </div>
      </form>
    </Card>
  );
}

export default EditPetForm;
