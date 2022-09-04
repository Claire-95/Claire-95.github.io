import { useRef } from "react";
import Card from "../ui/Card";
import classes from "./NewPetForm.module.css";
import PetsIcon from "@mui/icons-material/Pets";
import { DeletePet, UpdatePet } from "../../services/pet-service";
import { useState } from "react";
// import { doc, onSnapshot } from "firebase/firestore";

function EditPetForm(props) {
  const foreverId = props.currentPet.id;
  const oldName = props.currentPet.data.name;
  const oldSpecies = props.currentPet.data.species;
  const oldSharedOwners = props.currentPet.data.sharedOwners;
  const oldOwner = props.currentPet.data.owner;

  console.log(oldSharedOwners);

  const [name, setName] = useState(oldName);
  const [species, setSpecies] = useState(oldSpecies);
  const [sharedOwners, setSharedOwners] = useState(oldSharedOwners[0]);

  const nameInputRef = useRef();
  const speciesInputRef = useRef();
  const sharedOwnerInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    console.log(foreverId);
    console.log(name);
    console.log(species);
    console.log(sharedOwners);

    const updatedPetData = {
      id: foreverId,
      name: name,
      species: species,
      sharedOwners: sharedOwners,
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
      <ul key={owner}>{owner}</ul>
    ));
    return (
      <div className={classes.ownerList}>
        <h3>Shared Owners</h3>
        <ul>{listItems}</ul>
      </div>
    );

    // useEffect(() => {
    //   const unsubscribe = onSnapshot(petCollectionRef, (snapshot) => {
    //     setSharedOwners(
    //       snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
    //     );
    //   });
    //   return () => {
    //     unsubscribe();
    //   };
    // }, []);
    // return (
    //   <div>
    //     <h1>Shared Owners</h1>
    //     <ul>
    //       {sharedOwners.map((owner) => (
    //         <li key={owner}>
    //           <button onClick={() => console.log("delete owner")}></button>
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
    // );
  }

  return (
    <Card>
      <h1>
        <PetsIcon />
        Edit {name} the {species}
        <PetsIcon />
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
