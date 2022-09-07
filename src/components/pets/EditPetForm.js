import { useRef } from "react";
import Card from "../ui/Card";
import classes from "./NewPetForm.module.css";
import { DeletePet, UpdatePet } from "../../services/pet-service";
import { useState } from "react";

function EditPetForm(props) {
  const foreverId = props.currentPet.id;
  const oldName = props.currentPet.data.name;
  const oldSpecies = props.currentPet.data.species;
  const oldSharedOwners = props.currentPet.data.sharedOwners;
  const oldOwner = props.currentPet.data.owner;

  const [name, setName] = useState(oldName);
  const [species, setSpecies] = useState(oldSpecies);
  const [sharedOwners, setSharedOwners] = useState(oldSharedOwners[0]);
  const [deletedOwners, setDeletedOwners] = useState([]);

  const nameInputRef = useRef();
  const speciesInputRef = useRef();
  const sharedOwnerInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    console.log(foreverId);
    console.log(name);
    console.log(species);
    console.log(sharedOwners);
    console.log(oldSharedOwners);
    console.log(deletedOwners);

    let finalSharedOwnerList = oldSharedOwners.filter(
      (owner) => !deletedOwners.includes(owner)
    );

    console.log(finalSharedOwnerList);

    const lowerCaseSharedOwners = sharedOwners.toLowerCase();

    const updatedPetData = {
      id: foreverId,
      name: name,
      species: species,
      sharedOwners: lowerCaseSharedOwners,
    };

    UpdatePet(updatedPetData);

    nameInputRef.current.value = name;
    speciesInputRef.current.value = species;
    sharedOwnerInputRef.current.value = "";
  }

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

  function handleSharedOwnerChange(event) {
    event.preventDefault();
    setSharedOwners(event.target.value);
  }

  function SharedOwnerList() {
    const sharedOwnerList = oldSharedOwners;
    const listItems = sharedOwnerList.map((owner) => (
      <div className={classes.ownerList} key={owner}>
        <ul>
          {owner}
          <button
            className={classes.button}
            onClick={() => {
              setDeletedOwners((prevArray) => [...prevArray, owner]);
              console.log(deletedOwners);
            }}
          >
            Remove Owner
          </button>
        </ul>
      </div>
    ));
    return (
      <div className={classes.ownerList}>
        <ul key={listItems}>{listItems}</ul>
      </div>
    );
  }

  return (
    <Card>
      <h1>
        Edit {name} the {species}
      </h1>
      <h3>Pet owner: {oldOwner}</h3>
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
            onChange={handleSharedOwnerChange}
            placeholder="e.g., gmail.@gmail.com"
            ref={sharedOwnerInputRef}
          />
        </div>
        <div className={classes.actions}>
          <button className={classes.button}>Update Pet</button>
        </div>
      </form>

      <SharedOwnerList />

      <div className={classes.actions}>
        <button
          className={classes.button}
          onClick={() => {
            DeletePetHandler(foreverId);
          }}
        >
          Delete Pet
        </button>
      </div>
    </Card>
  );
}

export { EditPetForm };
