import Card from "../ui/Card";
import classes from "./Pet.module.css";
import PetsIcon from "@mui/icons-material/Pets";
import { DeletePet } from "../../services/pet-service";
import { useState } from "react";

//Produces content for pet cards

function Pet(props) {
  const [deletePet, setDeletePet] = useState("Delete Pet");

  function DeletePetHandler(petData) {
    DeletePet(petData.id);
    setDeletePet("Deleted");
  }

  console.log(props);

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.content}>
          <h3>{props.firstName}</h3>
          <p>{props.lastName}</p>
          <p>{props.species}</p>
        </div>
        <div className={classes.actions}>
          <button
            className={classes.actions}
            onClick={() => {
              DeletePetHandler(props);
            }}
          >
            {deletePet}
            <PetsIcon />
          </button>
        </div>
      </Card>
    </li>
  );
}

export default Pet;
