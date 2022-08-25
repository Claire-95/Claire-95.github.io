import { useRef } from "react";
import Card from "../ui/Card";
import classes from "./NewPetForm.module.css";
import PetsIcon from "@mui/icons-material/Pets";
import { DeletePet } from "../../services/pet-service";
import { useState } from "react";

function EditPetForm(props) {
  // let navigate = useNavigate();
  console.log(props);

  let editingPet = window.location.pathname.split("/").slice(-3);
  console.log(editingPet);

  const oldName = editingPet[0];
  const oldSpecies = editingPet[1];
  const foreverId = editingPet[2];

  const nameInputRef = useRef();
  const speciesInputRef = useRef();
  const sharedOwnerInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredSpecies = speciesInputRef.current.value;
    const enteredSharedOwner = sharedOwnerInputRef.current.value;

    const updatedPetData = {
      name: enteredName,
      species: enteredSpecies,
      sharedOwners: enteredSharedOwner,
      id: foreverId,
    };

    props.onEditPet(updatedPetData);

    nameInputRef.current.value = "";
    speciesInputRef.current.value = "";
    sharedOwnerInputRef.current.value = "";
  }

  const [name, setName] = useState(oldName);
  const [species, setSpecies] = useState(oldSpecies);

  function DeletePetHandler(foreverId) {
    DeletePet(foreverId);
  }

  function handleNameChange(event) {
    event.preventDefault();
    setName(event.target.value);
  }

  function handleSpeciesChange(event) {
    event.preventDefault();
    setSpecies(event.target.value);
  }

  return (
    <Card>
      <h1>Edit {oldName}</h1>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            onChange={handleNameChange}
            value={name}
            ref={nameInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="species">Species</label>
          <input
            type="text"
            id="species"
            onChange={handleSpeciesChange}
            value={species}
            ref={speciesInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="sharedOwner">Add a Shared Owner</label>
          <input
            type="text"
            id="sharedOwner"
            placeholder="e.g., gmail.@gmail.com"
            ref={sharedOwnerInputRef}
          />
        </div>
        <div className={classes.actions}>
          <button className={classes.button}>
            Update Pet <PetsIcon />
          </button>
        </div>
      </form>
      <div className={classes.actions}>
        <button
          className={classes.button}
          onClick={() => {
            DeletePetHandler(foreverId);
          }}
        >
          Delete Pet
          <PetsIcon />
        </button>
      </div>
    </Card>
  );
}

export default EditPetForm;
