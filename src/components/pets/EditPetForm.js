import { useRef } from "react";
import Card from "../ui/Card";
import classes from "./NewPetForm.module.css";
import PetsIcon from "@mui/icons-material/Pets";
import { DeletePet } from "../../services/pet-service";

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

    const enteredname = nameInputRef.current.value;
    const enteredSpecies = speciesInputRef.current.value;
    const enteredSharedOwner = sharedOwnerInputRef.current.value;

    const updatedPetData = {
      name: enteredname,
      species: enteredSpecies,
      sharedOwners: enteredSharedOwner,
      id: foreverId,
    };
    props.onEditPet(updatedPetData);

    nameInputRef.current.value = "";
    speciesInputRef.current.value = "";
    sharedOwnerInputRef.current.value = "";
  }

  function DeletePetHandler(foreverId) {
    DeletePet(foreverId);
  }

  return (
    <Card>
      <h1>Edit {oldName}</h1>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            required
            id="name"
            placeholder={oldName}
            ref={nameInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="species">Species</label>
          <input
            type="text"
            required
            id="species"
            placeholder={oldSpecies}
            ref={speciesInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="sharedOwner">Add a Shared Owner</label>
          <input
            type="text"
            required
            id="sharedOwner"
            placeholder="e.g., gmail.@gmail.com"
            ref={sharedOwnerInputRef}
          />
        </div>
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
        <div className={classes.actions}>
          <button>Update Pet</button>
        </div>
      </form>
    </Card>
  );
}

export default EditPetForm;
